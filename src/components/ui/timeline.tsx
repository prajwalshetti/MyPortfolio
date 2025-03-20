import { useScroll, useTransform, motion, AnimatePresence } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
    my_company: string;
    my_role: string;
    start_date: string;
    end_date: string;
    location: string;
    my_role_desc: string;
    company_logo?: string; // Optional field for company logo
    skills?: string[]; // Optional field for skills used
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
    const ref = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [height, setHeight] = useState(0);
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    useEffect(() => {
        const resizeObserver = new ResizeObserver(() => {
            if (ref.current) {
                const rect = ref.current.getBoundingClientRect();
                setHeight(rect.height);
            }
        });

        if (ref.current) {
            resizeObserver.observe(ref.current);
        }

        return () => resizeObserver.disconnect();
    }, []);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 10%", "end 50%"],
    });

    const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
    const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

    // Calculate which entry is currently active based on scroll position
    useEffect(() => {
        const handleScroll = () => {
            if (!containerRef.current) return;
            
            const container = containerRef.current;
            const containerRect = container.getBoundingClientRect();
            const containerTop = containerRect.top;
            const containerHeight = containerRect.height;
            
            // Get all timeline entries
            const entries = Array.from(container.querySelectorAll('.timeline-entry'));
            
            // Find the entry that is currently in view
            for (let i = 0; i < entries.length; i++) {
                const entry = entries[i];
                const entryRect = entry.getBoundingClientRect();
                const entryTop = entryRect.top - containerTop;
                
                if (entryTop >= 0 && entryTop <= containerHeight * 0.5) {
                    setActiveIndex(i);
                    break;
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    if (data.length === 0) {
        return <p>No timeline entries available.</p>;
    }

    return (
        <div className="w-full bg-gradient-to-b from-[#FAF7F0] to-[#F3F0E9] font-sans md:px-10" ref={containerRef}>
            <div className="max-w-7xl mx-auto pt-20 pb-10 px-4 md:px-8 lg:px-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-lg md:text-4xl mb-2 font-bold text-[#243642] max-w-4xl">
                        Changelog from my journey
                    </h2>
                    <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mb-10"></div>
                </motion.div>
            </div>

            <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
                {data.map((item, index) => (
                    <motion.div 
                        key={item.start_date} 
                        className={`timeline-entry flex justify-start pt-1 md:pt-10 md:mb-16 mb-28 md:gap-10 ${activeIndex === index ? 'active' : ''}`}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true, margin: "-100px" }}
                    >
                        <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
                            <motion.div 
                                className={`h-12 absolute left-3 md:left-3 w-12 rounded-full bg-white shadow-lg flex items-center justify-center ${activeIndex === index ? 'ring-2 ring-purple-500 ring-offset-2' : ''}`}
                                animate={activeIndex === index ? { scale: [1, 1.1, 1] } : {}}
                                transition={{ duration: 1, repeat: activeIndex === index ? Infinity : 0, repeatDelay: 2 }}
                            >
                                {item.company_logo ? (
                                    <img src={item.company_logo} alt={item.my_company} className="h-8 w-8 rounded-full object-contain" />
                                ) : (
                                    <div className={`h-5 w-5 rounded-full ${activeIndex === index ? 'bg-gradient-to-r from-purple-500 to-blue-500' : 'bg-[#243642]'} border border-neutral-300 dark:border-neutral-700 p-2`} />
                                )}
                            </motion.div>
                            
                            <motion.h3 
                                className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-[#243642]"
                                animate={activeIndex === index ? { color: '#6366F1' } : { color: '#243642' }}
                                transition={{ duration: 0.3 }}
                            >
                                {item.my_company}
                                <div className="text-xs mt-1 text-gray-500 flex items-center">
                                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                    </svg>
                                    {item.location}
                                </div>
                            </motion.h3>
                        </div>

                        <div className="relative pl-20 pr-4 md:pl-4 w-full">
                            <motion.div 
                                className={`md:p-8 p-6 rounded-xl ${activeIndex === index ? 'bg-white shadow-xl' : 'bg-white/50'} transition-all duration-300`}
                                animate={activeIndex === index ? { scale: 1.02 } : { scale: 1 }}
                                transition={{ duration: 0.3 }}
                            >
                                <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-[#243642]">
                                    {item.my_company}
                                </h3>
                                <h2 className="text-xl font-bold text-[#243642] mb-2">{item.my_role}</h2>
                                
                                <div className="flex items-center mb-4 text-gray-500 text-sm">
                                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                                    </svg>
                                    <span>{item.start_date} - {item.end_date}</span>
                                </div>
                                
                                <p className="text-gray-700 mb-4 leading-relaxed">{item.my_role_desc}</p>
                                
                                {item.skills && (
                                    <div className="mt-4">
                                        <p className="text-sm font-semibold text-gray-600 mb-2">Skills & Technologies:</p>
                                        <div className="flex flex-wrap gap-2">
                                            {item.skills.map((skill, skillIndex) => (
                                                <span 
                                                    key={skillIndex} 
                                                    className="text-xs py-1 px-3 bg-gray-100 text-gray-700 rounded-full"
                                                >
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </motion.div>
                        </div>
                    </motion.div>
                ))}
                
                {/* Timeline line */}
                <div
                    style={{ height: height + "px" }}
                    className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
                >
                    <motion.div
                        style={{
                            height: heightTransform,
                            opacity: opacityTransform,
                        }}
                        className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
                    />
                </div>
            </div>
        </div>
    );
};
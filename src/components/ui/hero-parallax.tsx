"use client";
import React, { useState } from "react";
import {
    motion,
    useScroll,
    useTransform,
    useSpring,
    MotionValue,
    AnimatePresence,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export const HeroParallax = ({
    products,
}: {
    products: {
        title: string;
        link: string;
        thumbnail: string;
        description?: string;
        tags?: string[];
    }[];
}) => {
    const firstRow = products.slice(0, 5);
    const secondRow = products.slice(5, 10);
    const thirdRow = products.slice(10, 15);
    const ref = React.useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

    const translateX = useSpring(
        useTransform(scrollYProgress, [0, 1], [0, 1000]),
        springConfig
    );
    const translateXReverse = useSpring(
        useTransform(scrollYProgress, [0, 1], [0, -1000]),
        springConfig
    );
    const rotateX = useSpring(
        useTransform(scrollYProgress, [0, 0.2], [15, 0]),
        springConfig
    );
    const opacity = useSpring(
        useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
        springConfig
    );
    const rotateZ = useSpring(
        useTransform(scrollYProgress, [0, 0.2], [20, 0]),
        springConfig
    );
    // Modified to keep initial dramatic movement but control final position
    // Start with -700 to create space, but only go to 200 instead of 500
    const translateY = useSpring(
        useTransform(scrollYProgress, [0, 0.1, 0.2], [-700, 0, 50]),
        springConfig
    );
    const scale = useSpring(
        useTransform(scrollYProgress, [0, 0.2], [0.8, 1]),
        springConfig
    );

    return (
        <div
            ref={ref}
            className="lg:h-[300vh] h-[200vh] py-40 overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d] bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950"
        >
            {/* Background elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full opacity-20">
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-purple-600 mix-blend-multiply filter blur-3xl animate-pulse"></div>
                    <div className="absolute top-3/4 right-1/4 w-96 h-96 rounded-full bg-blue-600 mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
                    <div className="absolute top-1/2 left-1/2 w-96 h-96 rounded-full bg-cyan-600 mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: "2s" }}></div>
                </div>
            </div>

            <Header />
            <motion.div
                style={{
                    rotateX,
                    rotateZ,
                    translateY,
                    opacity,
                    scale,
                }}
                className="relative z-10" // Added z-index to ensure stacking order
            >
                <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
                    {firstRow.map((product) => (
                        <ProductCard
                            product={product}
                            translate={translateX}
                            key={product.title}
                        />
                    ))}
                </motion.div>
                <motion.div className="flex flex-row mb-20 space-x-20">
                    {secondRow.map((product) => (
                        <ProductCard
                            product={product}
                            translate={translateXReverse}
                            key={product.title}
                        />
                    ))}
                </motion.div>
                <motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
                    {thirdRow.map((product) => (
                        <ProductCard
                            product={product}
                            translate={translateX}
                            key={product.title}
                        />
                    ))}
                </motion.div>
            </motion.div>
        </div>
    );
};

export const Header = () => {
    return (
        <div className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full left-0 top-0 flex flex-col items-center justify-center lg:mb-0 md:mb-1 mb-[200px] z-20">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-center"
            >
                <motion.div
                    initial={{ scale: 0.9 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                    className="inline-block relative"
                >
                    <span className="absolute -inset-1 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 opacity-75 blur-lg"></span>
                    <h1 className="relative text-3xl md:text-7xl font-bold text-white text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-200 pb-2">
                        Hi, I'm Prajwal Shetti.
                    </h1>
                </motion.div>
                
                <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="max-w-2xl mx-auto text-base md:text-xl mt-8 text-gray-300 leading-relaxed"
                >
I build seamless, visually stunning digital experiences using modern technologies and craft innovative solutions that make an impact.
                </motion.p>
                
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="mt-10 flex gap-4 justify-center"
                >
                    <Link href="/projects" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-medium py-3 px-6 rounded-full transition-all duration-300 shadow-lg shadow-purple-600/20 hover:shadow-purple-600/40">
                        View My Work
                    </Link>
                    <Link href="/contact" className="bg-transparent border border-white/20 text-white font-medium py-3 px-6 rounded-full hover:bg-white/10 transition-all duration-300">
                        Contact Me
                    </Link>
                </motion.div>
            </motion.div>
        </div>
    );
};

export const ProductCard = ({
    product,
    translate,
}: {
    product: {
        title: string;
        link: string;
        thumbnail: string;
        description?: string;
        tags?: string[];
    };
    translate: MotionValue<number>;
}) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            style={{
                x: translate,
            }}
            whileHover={{
                y: -20,
                zIndex: 40,
            }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            key={product.title}
            className="group/product h-96 w-[30rem] relative flex-shrink-0 rounded-xl overflow-hidden"
        >
            {/* Card border glow effect */}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-600/20 to-blue-600/20 opacity-0 group-hover/product:opacity-100 transition-opacity duration-300"></div>
            
            {/* Card content */}
            <div className="absolute inset-[1px] rounded-xl overflow-hidden bg-slate-950/90 z-10">
                <Image
                    src={product.thumbnail}
                    height="600"
                    width="600"
                    className="object-cover object-left-top absolute h-full w-full inset-0 transition-transform duration-700 ease-in-out group-hover/product:scale-110"
                    alt={product.title}
                />

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover/product:opacity-100 transition-opacity duration-300"></div>
                
                {/* Project info */}
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 opacity-0 group-hover/product:translate-y-0 group-hover/product:opacity-100 transition-all duration-300">
                    <h2 className="text-xl font-bold text-white mb-2">{product.title}</h2>
                    
                    {product.description && (
                        <p className="text-sm text-gray-300 mb-3 line-clamp-2">{product.description}</p>
                    )}
                    
                    {product.tags && (
                        <div className="flex flex-wrap gap-2 mb-4">
                            {product.tags.map((tag, index) => (
                                <span key={index} className="text-xs bg-white/10 px-2 py-1 rounded-full text-white/70">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    )}
                    
                    <Link href={product.link} className="inline-flex items-center text-sm font-medium text-purple-400 hover:text-purple-300">
                        View Project
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                        </svg>
                    </Link>
                </div>
            </div>
            
            {/* Reflection effect */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/10 opacity-0 group-hover/product:opacity-30 transition-opacity duration-300 pointer-events-none"></div>
        </motion.div>
    );
};
import Link from 'next/link';
import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const StickyScroll = ({
    content,
    contentClassName,
}: {
    content: {
        title: string;
        description: string;
        content: string;
        link: string
    }[];
    contentClassName?: string;
}) => {
    const [activeCard, setActiveCard] = useState(0);
    const ref = useRef<any>(null);

    const { scrollYProgress } = useScroll({
        container: ref,
        offset: ["start start", "end start"], // Adjusting the offset properly
    });

    const cardLength = content.length;

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        const cardsBreakpoints = content.map((_, index) => index / cardLength);
        const closestBreakpointIndex = cardsBreakpoints.reduce(
            (acc, breakpoint, index) => {
                const distance = Math.abs(latest - breakpoint);
                if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
                    return index;
                }
                return acc;
            },
            0
        );
        setActiveCard(closestBreakpointIndex);
    });

    const linearGradients = [
        "linear-gradient(to bottom right, var(--cyan-500), var(--emerald-500))",
        "linear-gradient(to bottom right, var(--pink-500), var(--indigo-500))",
        "linear-gradient(to bottom right, var(--orange-500), var(--yellow-500))",
    ];

    const [backgroundGradient, setBackgroundGradient] = useState(
        linearGradients[0]
    );

    useEffect(() => {
        setBackgroundGradient(
            linearGradients[activeCard % linearGradients.length]
        );
    }, [activeCard]);

    return (
        <motion.div
            className="h-[30rem] w-full overflow-y-auto flex justify-center relative rounded-md bg-transparent text-[#4A4947]"
            ref={ref}
        >
            <div className="relative flex items-start px-4">
                <div className="max-w-2xl">
                    {content.map((item, index) => (
                        <Link key={item.link} href={item.link} passHref>
                            <div className="my-20">
                                <motion.h2
                                    initial={{ opacity: 0 }}
                                    animate={{
                                        opacity: activeCard === index ? 1 : 0.3,
                                    }}
                                    className="text-2xl font-bold "
                                >
                                    {item.title}
                                </motion.h2>
                                <motion.p
                                    initial={{ opacity: 0 }}
                                    animate={{
                                        opacity: activeCard === index ? 1 : 0.3,
                                    }}
                                    className="text-lg  max-w-sm mt-10"
                                >
                                    {item.description}
                                </motion.p>
                            </div>
                        </Link>
                    ))}
                    <div className="h-40" />
                </div>
            </div>

            {/* Sticky Image */}
            <div
                style={{ background: "transparent" }}
                className={cn(
                    "hidden lg:block h-72 w-96 rounded-md bg-transparent sticky top-10 overflow-hidden",
                    contentClassName
                )}
            >
                <div
                    className="h-full w-full flex items-center justify-center"
                    dangerouslySetInnerHTML={{
                        __html: content[activeCard]?.content || "",
                    }}
                />
            </div>
        </motion.div>
    );
};

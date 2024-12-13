"use client";

import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "../ui/aurora-background";
import { TextHoverEffect } from "../ui/text-hover-effect";

type Props = {
    content: string
}

export function AuroraBackgroundDemo({ content }: Props) {
    return (
        <main className="">
            <AuroraBackground>
                <motion.div
                    initial={{ opacity: 0.0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: 0.3,
                        duration: 0.8,
                        ease: "easeInOut",
                    }}
                    className="relative flex flex-col gap-4 items-center justify-center px-4"
                >
                    <div className="lg:h-[14rem] md:h-[10rem] h-[4rem] flex  w-[80%] uppercase">
                        <TextHoverEffect text={content} />
                    </div>

                </motion.div>
            </AuroraBackground>
        </main>
    );
}

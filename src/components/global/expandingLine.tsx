"use client";

import { motion } from "framer-motion";
import React from "react";

export const ExpandingLine = () => {
    return (
        <div className="relative flex justify-center items-center h-screen bg-gray-100">
            {/* Container for the animation */}
            <div className="relative w-full max-w-4xl h-1 bg-transparent">
                {/* Animated line starting from the center */}
                <motion.div
                    className="absolute top-0 left-1/2 h-full bg-blue-500"
                    style={{ transformOrigin: "center" }}
                    initial={{ width: 0 }}
                    animate={{ width: "70%" }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                />
            </div>
        </div>
    );
};

export default ExpandingLine;

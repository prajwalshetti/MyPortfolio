"use client";
import React from "react";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import { SparklesCore } from "@/components/ui/sparkles";
import Image from "next/image";
import content from "@/data/projectsData.json"
import { SparklesPreview } from "@/components/global/sparklePreview";


export default function StickyScrollRevealDemo() {
    return (
        <main className="bg-[#FAF7F0]">
            <SparklesPreview />
            <div className="p-10">
                <StickyScroll content={content} />
            </div>
        </main>
    );
}








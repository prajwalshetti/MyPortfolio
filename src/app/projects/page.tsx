"use client";
import React from "react";
import Image from "next/image";
import data from "@/data/projectData.json"
import { SparklesPreview } from "@/components/global/sparklePreview";
import { AnimatedTestimonialsDemo } from "@/components/global/projects";


export default function Page() {
    return (
        <main className="bg-[#FAF7F0]">
            <SparklesPreview />
            <div className="p-10">
            <AnimatedTestimonialsDemo />
            </div>
        </main>
    );
}








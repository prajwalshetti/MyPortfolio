import React from "react";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { AuroraBackgroundDemo } from "@/components/global/auraBackground";
import data from "@/data/projectData.json"; // Import the data from the JSON file
import Image from "next/image";

import { FaReact, FaJs, FaHtml5, FaCss3Alt, FaNodeJs, FaGitAlt, FaJava, FaPython, FaPhp, FaAngular, FaVuejs, FaExclamationTriangle } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiPostgresql, SiMysql, SiExpress, SiTypescript, SiDocker, SiVercel, SiNetlify, SiJest, SiGraphql, SiFlutter, SiSwift, SiKotlin, SiRuby, SiGo, SiDjango, SiLaravel } from 'react-icons/si';
import SocialLinks from "@/components/global/socials";

function getIconForString(str: string) {
    switch (str.toLowerCase()) {
        // Frontend Languages and Frameworks
        case 'reactjs':
            return <FaReact />;
        case 'javascript':
            return <FaJs />;
        case 'html':
            return <FaHtml5 />;
        case 'css':
            return <FaCss3Alt />;
        case 'tailwind':
            return <SiTailwindcss />;
        case 'angular':
            return <FaAngular />;
        case 'vue':
            return <FaVuejs />;
        case 'typescript':
            return <SiTypescript />;
        case 'graphql':
            return <SiGraphql />;
        case 'flutter':
            return <SiFlutter />;
        case 'swift':
            return <SiSwift />;
        case 'kotlin':
            return <SiKotlin />;
        case 'ruby':
            return <SiRuby />;
        case 'go':
            return <SiGo />;

        // Backend Languages and Frameworks
        case 'nodejs':
            return <FaNodeJs />;
        case 'express':
            return <SiExpress />;
        case 'python':
            return <FaPython />;
        case 'java':
            return <FaJava />;
        case 'php':
            return <FaPhp />;
        case 'django':
            return <SiDjango />;
        case 'laravel':
            return <SiLaravel />;

        // Databases
        case 'mongodb':
            return <SiMongodb />;
        case 'postgresql':
            return <SiPostgresql />;
        case 'mysql':
            return <SiMysql />;

        // Tools and Platforms
        case 'docker':
            return <SiDocker />;
        case 'git':
            return <FaGitAlt />;
        case 'vercel':
            return <SiVercel />;
        case 'netlify':
            return <SiNetlify />;

        // Default Icon for unrecognized strings
        default:
            return <FaExclamationTriangle  />;
    }
}

export default function BackgroundBeamsWithCollisionDemo() {
    return (
        <main className="bg-[#FAF7F0] flex flex-col min-h-full">
            <AuroraBackgroundDemo content="Skills." />

            <BackgroundBeamsWithCollision className="h-min w-screen mb-3 overflow-x-hidden">
                <div id="skillBlocks" className="lg:w-4/5 md:mt-0 mt-10 gap-5 w-[97%] h-full ">

                    {/* Frontend Skills */}
                    <div className="frontend flex flex-col flex-wrap m-4">
                        <p className="text-[#243642] text-3xl font-bold mb-4">Frontend</p>
                        <div className="skillsStack flex flex-wrap lg:gap-5 md:gap-5 md:flex-row lg:flex-row flex-col gap-3">
                            {data.skills.frontend.map((skill: string, index: number) => (
                                <div key={index} className="skill bg-slate-900 inline-flex lg:w-56 h-16 items-center gap-5 p-2 justify-start rounded-lg md:w-48 hover:bg-slate-800">
                                    <div className="ml-1 w-[45px] h-[40px] bg-[#1a1a1a] flex items-center justify-center rounded-md py-[2px]">
                                        {getIconForString(skill)}
                                    </div>
                                    <div>
                                        <h1 className="text-xl font-semibold text-[#FAF7F0]">{skill}</h1> {/* Updated text color */}
                                        <h1 className="text-xs text-[#FAF7F0]">Frontend</h1> {/* Updated text color */}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Backend Skills */}
                    <div className="backend flex flex-col flex-wrap m-4">
                        <p className="text-[#243642] text-3xl font-bold mb-4">Backend</p>
                        <div className="skillsStack flex flex-wrap lg:gap-5 md:gap-5 md:flex-row lg:flex-row flex-col gap-3">
                            {data.skills.backend.map((skill: string, index: number) => (
                                <div key={index} className="skill bg-slate-900 inline-flex lg:w-56 h-16 items-center gap-5 p-2 justify-start rounded-lg md:w-48 hover:bg-slate-800">
                                    <div className="ml-1 w-[45px] h-[40px] bg-[#1a1a1a] flex items-center justify-center rounded-md py-[2px]">
                                        {getIconForString(skill)}
                                    </div>
                                    <div>
                                        <h1 className="text-xl font-semibold text-[#FAF7F0]">{skill}</h1> {/* Updated text color */}
                                        <h1 className="text-xs text-[#FAF7F0]">Backend</h1> {/* Updated text color */}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Database Skills */}
                    <div className="database flex flex-col flex-wrap m-4">
                        <p className="text-[#243642] text-3xl font-bold mb-4">Database</p>
                        <div className="skillsStack flex flex-wrap lg:gap-5 md:gap-5 md:flex-row lg:flex-row flex-col gap-3">
                            {data.skills.database.map((skill: string, index: number) => (
                                <div key={index} className="skill bg-slate-900 gap-5 inline-flex lg:w-56 h-16 items-center p-2 justify-start rounded-lg md:w-48 hover:bg-slate-800">
                                    <div className="ml-1 w-[45px] h-[40px] bg-[#1a1a1a] flex items-center justify-center rounded-md py-[2px]">
                                        {getIconForString(skill)}
                                    </div>
                                    <div>
                                        <h1 className="text-xl font-semibold text-[#FAF7F0]">{skill}</h1> {/* Updated text color */}
                                        <h1 className="text-xs text-[#FAF7F0]">Database</h1> {/* Updated text color */}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Tools and Platforms */}
                    <div className="tools flex flex-col flex-wrap m-4">
                        <p className="text-[#243642] text-3xl font-bold mb-4">Tools</p>
                        <div className="skillsStack flex flex-wrap lg:gap-5 md:gap-5 md:flex-row lg:flex-row flex-col gap-3">
                            {data.skills.tools.map((skill: string, index: number) => (
                                <div key={index} className="skill bg-slate-900 gap-5 inline-flex gap-5 lg:w-56 h-16 items-center p-2 justify-start rounded-lg md:w-48 hover:bg-slate-800">
                                    <div className="ml-1 w-[45px] h-[40px] bg-[#1a1a1a] flex items-center justify-center rounded-md py-[2px]">
                                        {getIconForString(skill)}
                                    </div>
                                    <div>
                                        <h1 className="text-xl font-semibold text-[#FAF7F0]">{skill}</h1> {/* Updated text color */}
                                        <h1 className="text-xs text-[#FAF7F0]">Tools</h1> {/* Updated text color */}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Programming Languages */}
                    <div className="programming-languages flex flex-col flex-wrap m-4">
                        <p className="text-[#243642] text-3xl font-bold mb-4">Programming Languages</p>
                        <div className="skillsStack flex flex-wrap lg:gap-5 md:gap-5 md:flex-row lg:flex-row flex-col gap-3">
                            {data.skills.programming_languages.map((skill: string, index: number) => (
                                <div key={index} className="skill bg-slate-900 gap-5 inline-flex lg:w-56 h-16 items-center p-2 justify-start rounded-lg md:w-48 hover:bg-slate-800">
                                    <div className="ml-1 w-[45px] h-[40px] bg-[#1a1a1a] flex items-center justify-center rounded-md py-[2px]">
                                        {getIconForString(skill)}
                                    </div>
                                    <div>
                                        <h1 className="text-xl font-semibold text-[#FAF7F0]">{skill}</h1> {/* Updated text color */}
                                        <h1 className="text-xs text-[#FAF7F0]">Programming Language</h1> {/* Updated text color */}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </BackgroundBeamsWithCollision>
            <SocialLinks />
        </main>
    );
}


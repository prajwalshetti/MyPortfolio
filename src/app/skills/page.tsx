import React from "react";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { motion } from "framer-motion";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { AuroraBackgroundDemo } from "@/components/global/auraBackground";

import Image from "next/image";

import js from "../../public/images/Skills/js.png";
import react from "../../public/images/Skills/reactjs.png";
import redux from "../../public/images/Skills/redux.png";
import vs from "../../public/images/Skills/vs.png";
import mongodb from "../../public/images/Skills/mongodb.png";
import mysql from "../../public/images/Skills/mysql.png";
import postman from "../../public/images/Skills/postman.png";
import tailwind from "../../public/images/Skills/tailwind.png";
import html from "../../public/images/Skills/html5.png";
import git from "../../public/images/Skills/git.png";
import css from "../../public/images/Skills/css.png";
import nodejs from "../../public/images/Skills/nodejs.png";
import reactRouter from "../../public/images/Skills/reactRouter.png";
import SocialLinks from "@/components/global/socials";

export default function BackgroundBeamsWithCollisionDemo() {
    return (
        <main className="bg-[#FAF7F0] flex flex-col h-full ">
            <AuroraBackgroundDemo content="Skills." />

            <BackgroundBeamsWithCollision className="h-full w-screen mb-3 overflow-x-hidden">
                <div id="skillBlocks" className="lg:w-4/5 md:mt-0 mt-10 gap-5 w-[97%]">
                    <div className="frontend flex flex-col flex-wrap m-4">
                        <p className="text-[#243642] text-3xl font-bold mb-4">Frontend</p>
                        <div className="skillsStack flex flex-wrap lg:gap-5 md:gap-5 md:flex-row lg:flex-row flex-col gap-3">
                            {/* Frontend Skills */}
                            <div className="skill bg-slate-900 inline-flex lg:w-56 h-16 items-center p-2 justify-start rounded-lg md:w-48 hover:bg-slate-800">
                                <Image src={js} alt="JavaScript" className="w-16" />
                                <div>
                                    <h1 className="text-xl font-semibold">JavaScript</h1>
                                    <h4 className="text-xs text-gray-500">Development</h4>
                                </div>
                            </div>
                            <div className="skill bg-slate-900 inline-flex lg:w-56 h-16 items-center p-2 justify-start rounded-lg md:w-48 hover:bg-slate-800">
                                <Image src={react} alt="ReactJS" className="w-16" />
                                <div>
                                    <h1 className="text-xl font-semibold">ReactJS</h1>
                                    <h4 className="text-xs text-gray-500">Framework</h4>
                                </div>
                            </div>
                            <div className="skill bg-slate-900 inline-flex lg:w-56 h-16 items-center p-2 justify-start rounded-lg md:w-48 hover:bg-slate-800">
                                <Image src={redux} alt="Redux" className="w-16" />
                                <div>
                                    <h1 className="text-xl font-semibold">Redux</h1>
                                    <h4 className="text-xs text-gray-500">Library</h4>
                                </div>
                            </div>
                            <div className="skill bg-slate-900 inline-flex lg:w-56 h-16 items-center p-2 justify-start rounded-lg md:w-48 hover:bg-slate-800">
                                <Image src={reactRouter} alt="React Router" className="w-16" />
                                <div>
                                    <h1 className="text-xl font-semibold">ReactRouter</h1>
                                    <h4 className="text-xs text-gray-500">Routing</h4>
                                </div>
                            </div>
                            <div className="skill bg-slate-900 inline-flex lg:w-56 h-16 items-center p-2 justify-start rounded-lg md:w-48 hover:bg-slate-800">
                                <Image src={tailwind} alt="Tailwind" className="w-16" />
                                <div>
                                    <h1 className="text-xl font-semibold">Tailwind</h1>
                                    <h4 className="text-xs text-gray-500">CSS Framework</h4>
                                </div>
                            </div>
                            <div className="skill bg-slate-900 inline-flex lg:w-56 h-16 items-center p-2 justify-start rounded-lg md:w-48 hover:bg-slate-800">
                                <Image src={html} alt="HTML" className="w-16" />
                                <div>
                                    <h1 className="text-xl font-semibold">HTML</h1>
                                    <h4 className="text-xs text-gray-500">Markup Language</h4>
                                </div>
                            </div>
                            <div className="skill bg-slate-900 inline-flex lg:w-56 h-16 items-center p-2 justify-start rounded-lg md:w-48 hover:bg-slate-800">
                                <Image src={css} alt="CSS" className="w-16" />
                                <div>
                                    <h1 className="text-xl font-semibold">CSS</h1>
                                    <h4 className="text-xs text-gray-500">Styling</h4>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Backend Skills */}
                    <div className="backend flex flex-col flex-wrap m-4">
                        <p className="text-[#243642] text-3xl font-bold mb-4">Backend</p>
                        <div className="skillsStack flex flex-wrap lg:gap-5 md:gap-5 md:flex-row lg:flex-row flex-col gap-3">
                            <div className="skill bg-slate-900 inline-flex lg:w-56 h-16 items-center p-2 justify-start rounded-lg md:w-48 hover:bg-slate-800">
                                <Image src={nodejs} alt="NodeJS" className="w-16" />
                                <div>
                                    <h1 className="text-xl font-semibold">NodeJS</h1>
                                    <h4 className="text-xs text-gray-500">Runtime Environment</h4>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Database and Tools */}
                    <div className="database flex flex-col flex-wrap m-4">
                        <p className="text-[#243642] text-3xl font-bold mb-4">Database</p>
                        <div className="skillsStack flex flex-wrap lg:gap-5 md:gap-5 md:flex-row lg:flex-row flex-col gap-3">
                            <div className="skill bg-slate-900 inline-flex lg:w-56 h-16 items-center p-2 justify-start rounded-lg md:w-48 hover:bg-slate-800">
                                <Image src={mongodb} alt="MongoDB" className="w-16" />
                                <div>
                                    <h1 className="text-xl font-semibold">MongoDB</h1>
                                    <h4 className="text-xs text-gray-500">NoSQL Database</h4>
                                </div>
                            </div>
                            <div className="skill bg-slate-900 inline-flex lg:w-56 h-16 items-center p-2 justify-start rounded-lg md:w-48 hover:bg-slate-800">
                                <Image src={mysql} alt="MySQL" className="w-16" />
                                <div>
                                    <h1 className="text-xl font-semibold">MySQL</h1>
                                    <h4 className="text-xs text-gray-500">SQL Database</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tools flex flex-col flex-wrap m-4">
                        <p className='text-gray-500 text-3xl font-bold mb-4'>Tools</p>
                        <div className='skillsStack flex flex-wrap lg:gap-5 md:gap-5 md:flex-row lg:flex-row flex-col gap-3'>
                            <div className="skill  bg-slate-900 inline-flex lg:w-56 h-16 items-center p-2 justify-start rounded-lg hover:bg-slate-800 md:w-48">
                                <Image src={git} alt="github" className="w-16" />
                                <div className=''>
                                    <h1 className='text-xl font-semibold'>Git</h1>
                                    <h4 className='text-xs text-gray-500'>VersionControl</h4>
                                </div>
                            </div>

                            <div className="skill  bg-slate-900 inline-flex lg:w-56 h-16 items-center p-2 justify-start rounded-lg hover:bg-slate-800 md:w-48 ">
                                <Image src={vs} alt="vscode" className="w-16" />
                                <div className=''>
                                    <h1 className='text-xl font-semibold'>VsCode</h1>
                                    <h4 className='text-xs text-gray-500'>Editor</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



            </BackgroundBeamsWithCollision>
            <SocialLinks />
        </main>
    );
}

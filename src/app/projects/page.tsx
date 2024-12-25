"use client";
import React from "react";
import Image from "next/image";
import data from "@/data/projectData.json";
import { SparklesPreview } from "@/components/global/sparklePreview";
import Link from "next/link";
import SocialLinks from "@/components/global/socials";
import { BiLogoGithub } from "react-icons/bi";
import { motion } from "framer-motion";

export default function Page() {
    return (
        <main className="bg-[#FAF7F0]">
            <SparklesPreview />
            <div className="p-10">
                <section
                    id="projects"
                    className="lg:mt-20 md:mt-20 mt-3 lg:ml-36 lg:h-min mb-20"
                >
                    <div className="md:mt-2 md:h-auto">
                        <div className="lg:ml-32 w-3/4 ml-4 md:ml-20">
                            <p className="text-[16px] text-neutral-800">
                                Below you can find projects which showcase what I can bring to the
                                table. Within these projects, I dive into my process of how I solve
                                real problems in today's world through the power of development.
                            </p>
                        </div>
                        <div className="cards flex justify-center flex-col items-center gap-8 mt-10 transition-all ease-in scroll-smooth">
                            {data.projects.map((item, index) => (
                                <motion.div
                                    key={index}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    initial={{ opacity: 0, y: 50 }}
                                    transition={{
                                        duration: 0.4,
                                        ease: [0.17, 0.67, 0.83, 0.67], // Smooth cubic-bezier easing
                                    }}
                                    className="card flex md:w-[80%] md:h-[220px] lg:w-[70%] md:flex-row bg-[#1c1c1c] rounded-lg flex-col-reverse w-11/12 shadow-lg hover:shadow-slate-500"
                                >
                                    <Link
                                        href={item.project_url}
                                        className="flex w-full flex-col-reverse md:flex-row"
                                    >
                                        <div className="projectInfo w-full md:w-1/2 md:h-[220px] h-[130px] md:ml-4 flex flex-col justify-center rounded-lg">
                                            <div className="flex items-center justify-start gap-2 md:gap-4">
                                                <div className="w-[80%]">
                                                    <h2 className="md:text-xl font-semibold mt-3 ml-4 mb-1 ">
                                                        {item.project_name}
                                                    </h2>
                                                </div>
                                                <div>
                                                    <BiLogoGithub />
                                                </div>
                                            </div>
                                            <p className="text-xs text-neutral-300 ml-4 md:overflow-hidden overflow-y-scroll">
                                                {item.project_description}
                                            </p>
                                        </div>
                                        <div className="projectImage md:w-1/2 h-[220px] flex justify-center bg-black items-center rounded-lg">
                                            <div className="flex justify-center">
                                                <img
                                                    className="lg:w-[90%] lg:h-[70%] md:w-[90%] w-[90%] h-[50%] rounded-lg"
                                                    src={item.project_photo}
                                                    alt={`${item.project_name} Project Screenshot`}
                                                />
                                            </div>
                                        </div>
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
            <SocialLinks />
        </main>
    );
}

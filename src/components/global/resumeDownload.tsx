"use client";
import React from "react";
import {
    Modal,
    ModalBody,
    ModalContent,
    ModalFooter,
    ModalTrigger,
} from "../ui/animated-modal";
import Image from "next/image";
import { motion } from "framer-motion";
import { TextHoverEffect } from "../ui/text-hover-effect";
import {  TypewriterEffectSmooth } from "../ui/typewriter-effect";
import Link from "next/link";

type Props = {
    ResumeLink: string
}

export function AnimatedModalDemo({ ResumeLink }: Props) {

    const downloadResume = () => {
        const resumeLink = `${ResumeLink}`;
        const link = document.createElement('a');
        link.href = resumeLink;
        link.setAttribute('download', 'resume.pdf');
        document.body.appendChild(link);  
        link.click(); 
        document.body.removeChild(link);
    };




    return (
        <div className="py-40  flex items-center justify-center">
            <Modal>
                <ModalTrigger className="bg-[#FAF7F0] text-black flex justify-center group/modal-btn rounded-lg ">
                    <span className="group-hover/modal-btn:translate-x-40 text-center transition duration-500">
                        Resume
                    </span>
                    <div className="-translate-x-40 group-hover/modal-btn:translate-x-0  flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20">
                        📄
                    </div>
                </ModalTrigger>
                <ModalBody>
                    <ModalContent>
                        <h4 className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-8">
                            Here is my resume for your review{" "}
                            <span className="px-1 py-0.5 rounded-md bg-gray-100 dark:bg-neutral-800 dark:border-neutral-700 border border-gray-200">
                                📃
                            </span>{" "}
                            now!
                        </h4>
                        <div className=" text-white">
                            <button onClick={() => {
                                window.open(ResumeLink, "_blank")
                            }}>
                                <TypewriterEffectSmooth
                                    words={[
                                        { text: 'Click' },
                                        { text: 'here' },
                                        { text: 'to' },
                                        { text: 'see' },
                                        { text: 'now' },
                                    ]}


                                />
                            </button>

                        </div>
                    </ModalContent>
                    <ModalFooter className="gap-4">
                        <button
                            onClick={downloadResume}
                            className="bg-black text-white dark:bg-white dark:text-black text-sm px-2 py-1 rounded-md border border-black w-28">
                            Download now
                        </button>
                    </ModalFooter>
                </ModalBody>
            </Modal>
        </div>
    );
}
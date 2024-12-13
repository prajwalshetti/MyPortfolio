import React from "react";
import Image from 'next/image'
import { TextHoverEffect } from "@/components/ui/text-hover-effect";
import { BackgroundBeams } from "@/components/ui/background-beams";
import shakeHands from "@/images/shakehands.svg"
import { FloatingDockDemo } from "@/components/global/contactsDeck";
function page() {
    return (
        <div>
            <div>
                <BackgroundBeamsDemo />
            </div>
            <div id="aboutSection" className="bg-[#FAF7F0] md:w-full min-h-screen text-[#243642]  flex flex-col p-6  mt-1 ">
                <div id="image" className=" ">
                    <Image src={shakeHands} alt="Shake hands" className=" object-contain  h-64 w-64 mx-auto " width={100} height={100} />
                </div>

                <FloatingDockDemo />
            </div>
        </div>
    )
}

export default page








export function BackgroundBeamsDemo() {
    return (
        <div className="h-[80vh] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased rounded-b-[100px]">
            <div className="lg:h-[14rem] md:h-[10rem] h-[4rem] flex  w-[80%] uppercase">
                <TextHoverEffect text="contact" />
            </div>
            <BackgroundBeams />
        </div>
    );
}

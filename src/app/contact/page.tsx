import React from "react";
import { BackgroundLines } from "@/components/ui/background-lines";
import AboutDemo from "@/components/global/aboutDemo";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";

function page() {
    return (
        <div>
            <BackgroundLinesDemo />
            <AboutDemo />
        </div>
    )
}

export default page




export function BackgroundLinesDemo() {
    return (
        <BackgroundLines className="flex items-center justify-center w-full flex-col px-4 bg-black rounded-b-[80px]">
            <div className="lg:h-[14rem] md:h-[10rem] h-[4rem] flex  w-[80%] uppercase">
                <TextHoverEffect text="contact" automatic duration={0}/>
            </div>

        </BackgroundLines>
    );
}

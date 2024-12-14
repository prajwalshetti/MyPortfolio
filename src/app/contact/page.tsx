import React from "react";
import Image from 'next/image';
import shakeHands from "@/images/shakehands.svg";
import { FloatingDockDemo } from "@/components/global/contactsDeck";
import { BackgroundBeamsDemo } from "@/components/global/backgroundBeams"
// Ensure the component name is capitalized
function Page() {
    return (
        <div>
            <div>
                <BackgroundBeamsDemo /> {/* Ensure BackgroundBeamsDemo is used properly */}
            </div>
            <div id="aboutSection" className="bg-[#FAF7F0] md:w-full min-h-screen text-[#243642] flex flex-col p-6 mt-1">
                <div id="image" className=" ">
                    <Image
                        src={shakeHands}
                        alt="Shake hands"
                        className="object-contain h-64 w-64 mx-auto"
                        width={100}
                        height={100}
                    />
                </div>

                <FloatingDockDemo />
            </div>
        </div>
    );
}

export default Page; 



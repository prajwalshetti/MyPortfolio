
import React from 'react'
import Image from "next/image"
import { FaLongArrowAltRight } from "react-icons/fa";

import person from "@/public/images/person.svg"
import Link from "next/link";
import data from "@/data/projectData.json"

function AboutDemo() {
    return (
        <div id="aboutSection" className="bg-[#FAF7F0] md:w-full max-h-screen text-[#243642]  flex md:flex-row flex-col-reverse p-6  mt-1">
            <div id="image" className=" ">
                <Image src={person} alt="Person Image" className=" object-contain  h-full w-1/2 mx-auto flex items-center justify-center" width={10} height={10} />
            </div>

            <div id="content" className="flex flex-col items-start gap-5 justify-center md:w-1/2 max-w-md md:ml-[-100px]">
                <div className="flex flex-col gap-2">
                    <h4>Overview</h4>
                    <h4 className="text-green-400">Who am i</h4>
                </div>
                <p className={`text-xl md:text-3xl overflow-y-scroll`}>
                    {data.personal_info.description_about_me}  </p>
                <Link href={"/skills"}>
                    <div className="flex items-center justify-center gap-3 text-green-400 md:mt-3 ">
                        <h2 className="">Know more</h2>
                        <FaLongArrowAltRight />
                    </div>
                </Link>
            </div>

        </div>
    )
}

export default AboutDemo

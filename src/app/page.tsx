"use client";
import React from "react";
import Image from "next/image";


import { Rubik } from "next/font/google"

import products from "../data/parallaxProducts.json"

import { motion } from "framer-motion";
import { HeroParallax } from "@/components/ui/hero-parallax";
import AboutDemo from "@/components/global/aboutDemo";
import { Experiences } from "@/components/global/experience";
import SocialLinks from "@/components/global/socials";
import { AnimatedModalDemo } from "@/components/global/resumeDownload";

import data from "@/data/projectData.json"


const rubik = Rubik({
  subsets: ['latin'],
  weight: ["400", "700"],
});




export default function Home() {

  return (
    <main className="">
      <div className="bg-[#000000] mb-10">
        <HeroParallax products={products} />
      </div>
      <AboutDemo />
      <SocialLinks />
      <div
        className="absolute md:fixed md:top-[-70px] lg:top-[-130px] bottom-[-70px]  right-9"
        id='downloadResume'>
        <AnimatedModalDemo ResumeLink={data.personal_info.my_resume} />

      </div>


    </main>
  );
}


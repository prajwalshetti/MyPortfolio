"use client";
import React from "react";
import Image from "next/image";


import { Rubik } from "next/font/google"

import products from "../data/parallaxProducts.json"

import { motion } from "framer-motion";
import { HeroParallax } from "@/components/ui/hero-parallax";
import { LampContainer } from "@/components/ui/lamp";
import AboutDemo from "@/components/global/aboutDemo";
import { Experiences } from "@/components/global/experience";
import SocialLinks from "@/components/global/socials";
import { AnimatedModalDemo } from "@/components/global/resumeDownload";




const rubik = Rubik({
  subsets: ['latin'],
  weight: ["400", "700"],
});




export default function Home() {

  return (
    <main className="">
      <div className="bg-[#000000]">
        <HeroParallax products={products} />
      </div>
      <AboutDemo />
      <Experiences />
      <SocialLinks />
      <div
        className="absolute bottom-[-70px] right-9"
        id='downloadResume'>
        <AnimatedModalDemo ResumeLink="https://drive.google.com/file/d/1lodtIT_fffBYG4UwpaXn1oHopdAUlXeo/view?usp=drive_link" />

      </div>


    </main>
  );
}


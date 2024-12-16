import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";
import data from "@/data/projectData.json"
export function Experiences() {

  
    return (
        <div className="w-full ">
            <Timeline data={data.experience} />
        </div>
    );
}

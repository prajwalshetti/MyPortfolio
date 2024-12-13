import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";
import data from "@/data/experienceData.json"
export function Experiences() {

    <Timeline data={data} />
    return (
        <div className="w-full ">
            <Timeline data={data} />
        </div>
    );
}

import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
    IconBrandGithub,
    IconBrandX,
    IconBrandLinkedin,
    IconMail,
    IconBrandInstagram
} from "@tabler/icons-react";
import url from "@/data/projectData.json"
export function FloatingDockDemo() {
    const links = [
        {
            title: "GitHub",
            icon: (
                <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: `${url.personal_info.my_github}`
        },
        {
            title: "Linkedin",
            icon: (
                <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: `${url.personal_info.my_linkedin}`
        },
        {
            title:"Gmail",
            icon:(
                <IconMail className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href:`mailto:${url.personal_info.my_email}`,
        }

    ];
    return (
        <div className="flex items-center justify-center max-h-14 w-full">
            <FloatingDock
                mobileClassName="translate-y-20"
                items={links}
            />
        </div>
    );
}

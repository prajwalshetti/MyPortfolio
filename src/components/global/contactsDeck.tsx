import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
    IconBrandGithub,
    IconBrandX,
    IconBrandLinkedin,
    IconMail,
    IconBrandInstagram
} from "@tabler/icons-react";
import urls from "@/data/contactLinks.json"
export function FloatingDockDemo() {
    const links = [





        {
            title: "Instagram",
            icon: (
                <IconBrandInstagram className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: `${urls.instagram}`
        },


        {
            title: "Twitter",
            icon: (
                <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: `${urls.x}`,
        },
        {
            title: "GitHub",
            icon: (
                <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: `${urls.github}`,
        },
        {
            title: "Linkedin",
            icon: (
                <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: `${urls.linkedin}`,
        },
        {
            title: "Mail",
            icon: (
                <IconMail className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: `${urls.mail}`,
        },
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

import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
  IconBrandInstagram
} from "@tabler/icons-react";
import url from "@/data/projectData.json";

export function FloatingDockDemo() {
  const { my_github, my_linkedin, my_email, my_instagram } = url.personal_info;

  const links = [
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: my_github,
    },
    {
      title: "LinkedIn",
      icon: (
        <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: my_linkedin,
    },
    {
      title: "Gmail",
      icon: (
        <IconMail className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: `mailto:${my_email}`,
    },
    {
      title: "Instagram",
      icon: (
        <IconBrandInstagram className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: my_instagram,
    }
  ];

  return (
    <div className="flex items-center justify-center max-h-14 w-full">
      <FloatingDock mobileClassName="translate-y-20" items={links} />
    </div>
  );
}

"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";

export function NavbarDemo() {
    return (
        <div className="relative w-full flex items-center justify-center">
            <Navbar className="top-2" />
        </div>
    );
}

function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
    return (
        <div
            className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50 text-black font-semibold ", className)}
        >
            <Menu setActive={setActive}>

                <div className="flex justify-center items-center gap-4 ">
                    <HoveredLink href="/">Dashboard</HoveredLink>
                    <HoveredLink href="/skills">Skills</HoveredLink>
                    <HoveredLink href="/projects">Projects</HoveredLink>
                    <HoveredLink href="/contact">Contact</HoveredLink>
                </div>

            </Menu>
        </div>
    );
}

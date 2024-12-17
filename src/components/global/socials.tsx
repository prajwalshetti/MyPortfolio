import React from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
import data from "@/data/projectData.json"
const SocialLinks = () => {
    return (
        <footer className="bg-[#243642] text-[#FAF7F0] py-6 overflow-x-hidden">
            <div className="container mx-auto px-4 text-center">
                {/* Social Media Links */}
                <div className="flex justify-center space-x-6 mb-4">
                    <Link
                        href={data.personal_info.my_github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-gray-400 transition duration-300"
                    >
                        <FaGithub size={24} />
                    </Link>
                    <Link
                        href={data.personal_info.my_linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-gray-400 transition duration-300"
                    >
                        <FaLinkedin size={24} />
                    </Link>
                    <Link
                        href={data.personal_info.my_twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-gray-400 transition duration-300"
                    >
                        <FaTwitter size={24} />
                    </Link>
                    <Link
                        href={`mailto:${data.personal_info.my_email}`}
                        className="hover:text-gray-400 transition duration-300"
                    >
                        <FaEnvelope size={24} />
                    </Link>
                </div>

                {/* Footer Text */}
                <p className="text-sm mb-2">
                    Designed and built by <span className="font-semibold">Webfolio</span>
                </p>

                {/* Copyright */}
                <p className="text-xs text-gray-400">
                    &copy; {new Date().getFullYear()} {data.personal_info.name}. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default SocialLinks;

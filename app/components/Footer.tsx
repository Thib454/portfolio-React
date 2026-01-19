"use client";

import React from "react";
import { SiLinkedin, SiGithub, SiGmail } from "react-icons/si";

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 dark:bg-zinc-900 py-8 mt-16">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Copyright */}
        <p className="text-gray-700 dark:text-gray-300 text-sm">
          &copy; {year} Thibault Depeige. All rights reserved.
        </p>

        {/* Contact links */}
        <div className="flex gap-4">
          <a
            href="mailto:thibaultdepeige@gmail.com"
            className="text-gray-700 dark:text-gray-300 hover:text-red-500 transition"
          >
            <SiGmail className="text-2xl" />
          </a>
          <a
            href="https://github.com/Thib454"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 dark:text-gray-300 hover:text-blue-500 transition"
          >
            <SiGithub className="text-2xl" />
          </a>
          <a
            href="https://www.linkedin.com/in/thibaultdepeige"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 dark:text-gray-300 hover:text-blue-700 transition"
          >
            <SiLinkedin className="text-2xl" />
          </a>
        </div>
      </div>

      {/* Optional: small tagline */}
      <p className="text-center text-gray-500 dark:text-gray-400 mt-4 text-xs">
        Made with ❤️ using Next.js, Tailwind CSS & React
      </p>
    </footer>
  );
};

export default Footer;

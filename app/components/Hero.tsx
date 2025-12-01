"use client";

import React from "react";
import Image from "next/image";

const Hero: React.FC = () => {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between py-24 md:py-32 px-6 md:px-12 max-w-6xl mx-auto">
      {/* LEFT TEXT SECTION */}
      <div className="w-full md:w-1/2 mt-10 md:mt-0 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight mb-4">
          Hi, I&apos;m <span className="text-blue-600">Thibault Depeige</span>
        </h1>

        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-6 max-w-lg">
          Full Stack Developer passionate about building performant, scalable
          and elegant web applications.
        </p>

        <div className="flex justify-center md:justify-start gap-4">
          <a
            href="/Depeige_Thibault_CV.pdf"
            download
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-md transition"
          >
            📄 Download CV
          </a>

          <a
            href="https://github.com/Thib454"
            target="_blank"
            className="border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold px-6 py-3 rounded-md transition"
          >
            ⭐ GitHub
          </a>
        </div>
      </div>

      {/* RIGHT IMAGE SECTION (optional avatar) */}
      <div className="w-full md:w-1/2 flex justify-center">
        <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden shadow-xl ring-4 ring-blue-600/20">
          <Image
            src="/Photo_profil.jpeg"
            alt="Portrait of Thibault"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;

"use client";

import React from "react";

const Hero: React.FC = () => {
  return (
    <section id="hero" className="text-center py-24 bg-gray-50">
      <h1 className="text-5xl md:text-6xl font-bold text-blue-600 mb-6">
        Hi, I&apos;m Thibault Depeige
      </h1>
      <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
        Full Stack Developer | Passionate about building performant and scalable web applications
      </p>
      <a
        href="/Depeige_Thibault_CV.pdf"
        download
        className="inline-block bg-blue-600 text-white font-semibold px-8 py-4 rounded-lg hover:bg-blue-700 transition transform hover:-translate-y-1"
      >
        📄 Download My CV
      </a>
    </section>
  );
};

export default Hero;

"use client";

import React from "react";

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="py-24 px-6 md:px-12 max-w-4xl mx-auto text-center"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
        About Me
      </h2>

      <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
        I&apos;m{" "}
        <span className="font-semibold text-blue-600">Thibault Depeige</span>, a
        Full Stack Developer with a passion for building modern and scalable web
        applications. I enjoy transforming ideas into digital experiences using
        clean code, great UI, and efficient design patterns.
      </p>

      <p className="text-lg text-gray-700 dark:text-gray-300 mt-4 leading-relaxed">
        I specialize in JavaScript, TypeScript, React, Node.js and I&apos;m
        always learning new tools to improve my workflow and the quality of my
        projects.
      </p>
    </section>
  );
};

export default About;

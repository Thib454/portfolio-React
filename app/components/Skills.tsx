"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiTailwindcss,
  SiGit,
  SiAdobexd,
  SiBootstrap,
  SiPostman,
  SiDocker,
  SiPython,
  SiSymfony,
} from "react-icons/si";

const skills = [
  { name: "HTML", icon: <SiHtml5 className="text-orange-500" /> },
  { name: "CSS", icon: <SiCss3 className="text-blue-500" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
  { name: "React", icon: <SiReact className="text-cyan-400" /> },
  {
    name: "Next.js",
    icon: <SiNextdotjs className="text-black dark:text-white" />,
  },
  { name: "Node.js", icon: <SiNodedotjs className="text-green-600" /> },
  { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-500" /> },
  { name: "Git", icon: <SiGit className="text-orange-600" /> },
  { name: "Adobe XD", icon: <SiAdobexd className="text-purple-600" /> },
  { name: "Bootstrap", icon: <SiBootstrap className="text-purple-500" /> },
  { name: "Postman", icon: <SiPostman className="text-orange-400" /> },
  { name: "Docker", icon: <SiDocker className="text-blue-400" /> },
  { name: "Python", icon: <SiPython className="text-yellow-600" /> },
  { name: "Symfony", icon: <SiSymfony className="text-black" /> },
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 px-6 bg-gray-50 dark:bg-zinc-900">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
        Skills
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 max-w-5xl mx-auto">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex flex-col items-center gap-2 p-5 bg-white dark:bg-zinc-800 rounded-xl shadow-sm hover:shadow-lg hover:-translate-y-2 transition-all duration-300 border border-zinc-100 dark:border-zinc-700"
          >
            <div className="text-4xl">{skill.icon}</div>
            <p className="font-medium text-gray-700 dark:text-gray-300">
              {skill.name}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;

"use client";

import React from "react";
import { motion } from "framer-motion";

type ExperienceItem = {
  title: string;
  company: string;
  period: string;
  description: string[];
  tech: string[];
};

const experiences: ExperienceItem[] = [
  {
    title: "Web Developer – Internship",
    company: "Umake Group, Bordeaux",
    period: "2025",
    description: [
      "Created wireframes and custom PHP templates for the company's WordPress site.",
      "Integrated automated functions for offer management and cross-browser testing.",
      "Collaborated with the team to ensure design and functionality consistency.",
    ],
    tech: ["WordPress", "PHP", "HTML/CSS", "MySQL", "Adobe XD"],
  },
  {
    title: "Database Administrator",
    company: "Like Lead, Paris",
    period: "2018 - 2024",
    description: [
      "Managed and monetized a database of 1.5M addresses, developed reporting tools.",
      "Analyzed and optimized data, collaborating with marketing and IT teams.",
    ],
    tech: ["MySQL", "HTML", "FileZilla", "Sublime Text", "Excel", "Mindbaz"],
  },
  {
    title: "Account Manager / Traffic Manager",
    company: "Natexo, Paris",
    period: "2015 - 2018",
    description: [
      "Managed and segmented client databases, programmed and deployed targeted email campaigns.",
      "Monitored, analyzed results, and optimized campaign performance.",
      "Coordinated schedules and prospected advertisers to grow the client portfolio.",
    ],
    tech: ["HTML/CSS", "Mindbaz", "Advanced Excel", "Reporting tools"],
  },
  {
    title: "Web Project Manager – Apprenticeship",
    company: "Concoursmania, Bordeaux",
    period: "2013 - 2014",
    description: [
      "Developed and managed websites, handled traffic acquisition (SEM, SEA, email marketing) and SEO optimization.",
      "Implemented monetization strategies (affiliate, display, Google Ads) and customer retention via social media.",
    ],
    tech: ["Photoshop", "Dreamweaver", "WordPress", "Sarbacane"],
  },
];

const Experience: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50" id="experience">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">
          Professional Experience
        </h2>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-2 border-gray-300"></div>

          {experiences.map((exp, index) => {
            const isLeft = index % 2 === 0;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`mb-12 w-full flex flex-col md:flex-row items-center justify-between ${
                  isLeft ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className="md:w-5/12 relative md:px-6">
                  {/* Circle on timeline */}
                  <div className="absolute top-2 left-1/2 transform -translate-x-1/2 md:translate-x-0 w-6 h-6 bg-blue-500 rounded-full z-10"></div>

                  <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-shadow duration-300">
                    <h3 className="text-xl font-semibold">{exp.title}</h3>
                    <p className="text-gray-600 italic">
                      {exp.company} | {exp.period}
                    </p>
                    <ul className="mt-3 list-disc list-inside space-y-1">
                      {exp.description.map((desc, i) => (
                        <li key={i}>{desc}</li>
                      ))}
                    </ul>
                    <p className="mt-3 text-sm text-gray-500">
                      <span className="font-semibold">Tech:</span>{" "}
                      {exp.tech.join(", ")}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;

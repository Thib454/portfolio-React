"use client";

import React, { useState } from "react";
import Link from "next/link";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Liste des liens vers les sections et autres ressources
  const links = [
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
    { label: "Projects", href: "#projects" },
    { label: "Resume (EN)", href: "#cv-en" },
    { label: "Download CV (FR)", href: "/public/Depeige_Thibault_CV.pdf" },
    { label: "GitHub", href: "https://github.com/Thib454", external: true },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        <div className="text-2xl font-bold text-blue-600">Thibault Depeige</div>

        {/* Menu desktop */}
        <nav className="hidden md:flex space-x-6">
          {links.map((link) =>
            link.external ? (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500"
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.label}
                href={link.href}
                className="hover:text-blue-500"
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        {/* Hamburger menu mobile */}
        <button
          className="md:hidden flex flex-col space-y-1"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span className="block w-6 h-0.5 bg-blue-600"></span>
          <span className="block w-6 h-0.5 bg-blue-600"></span>
          <span className="block w-6 h-0.5 bg-blue-600"></span>
        </button>
      </div>

      {/* Menu mobile */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          {links.map((link) =>
            link.external ? (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block px-4 py-2 hover:bg-gray-100"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.label}
                href={link.href}
                className="block px-4 py-2 hover:bg-gray-100"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            )
          )}
        </div>
      )}
    </header>
  );
};

export default Navbar;

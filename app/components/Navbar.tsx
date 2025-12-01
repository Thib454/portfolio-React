"use client";

import React, { useState } from "react";
import Link from "next/link";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        <div className="text-2xl font-bold text-blue-600">Thibault Depeige</div>

        <nav className="hidden md:flex space-x-6">
          <Link href="#cv-en" className="hover:text-blue-500">Resume (EN)</Link>
          <Link href="/public/Depeige_Thibault_CV.pdf" className="hover:text-blue-500">Download CV (FR)</Link>
          <a
            href="https://github.com/Thib454"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500"
          >
            Projects
          </a>
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
          <Link href="#cv-en" className="block px-4 py-2 hover:bg-gray-100" onClick={() => setIsOpen(false)}>Resume (EN)</Link>
          <Link href="#cv-fr" className="block px-4 py-2 hover:bg-gray-100" onClick={() => setIsOpen(false)}>Download CV (FR)</Link>
          <a
            href="https://github.com/Thib454"
            target="_blank"
            rel="noopener noreferrer"
            className="block px-4 py-2 hover:bg-gray-100"
            onClick={() => setIsOpen(false)}
          >
            Projects
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;

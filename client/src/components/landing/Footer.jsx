import React from 'react'
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Mail } from "lucide-react";

const Footer = ({C,serif,sans}) => {
  return (
    <footer className="bg-[#2E2621] text-[#F8F5F0] pt-20 pb-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-10 lg:grid-cols-3 lg:gap-14">
          <div className='col-span-2 space-y-5 lg:col-span-1'>
            <h2
              className="text-3xl tracking-[0.25em]"
              style={{ fontFamily: "Cormorant Garamond" }}>
              LAYRD
            </h2>

            <p className="max-w-xs text-sm leading-7 text-[#A89F94]">
                AI-powered wardrobe styling that helps you build,
                organize and complete outfits effortlessly.
              </p>
          </div>
        </div>
        <div className='lg:flex justify-around mt-6'>
          <div className='flex flex-col items-center mb-6'>
            <h4 className="mb-3 lg:mb-5 text-xs uppercase tracking-[0.2em] text-[#8A8072]">
              Platform
            </h4>

            <div className="flex lg:flex-col gap-6">
              <Link to="/library" className="hover:text-[#E7C76A] transition">
                Browse Library
              </Link>

              <Link to="/canvas" className="hover:text-[#E7C76A] transition">
                Outfit Builder
              </Link>

              <Link to="/wardrobe" className="hover:text-[#E7C76A] transition">
                My Wardrobe
              </Link>
            </div>
          </div>

          <div className='flex flex-col items-center mb-6'>
            <h4 className="mb-3 lg:mb-5 text-xs uppercase tracking-[0.2em] text-[#8A8072]">
              Resources
            </h4>

            <div className="flex lg:flex-col gap-6">
              <a href="#features" className="hover:text-[#E7C76A] transition">
                Features
              </a>

              <a href="#how-it-works" className="hover:text-[#E7C76A] transition">
                How it Works
              </a>
            </div>
          </div>

          <div className='flex flex-col items-center mb-6'>
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#8A8072] mb-3 lg:mb-5">
              Connect
            </h4>

            <div className="flex lg:hidden gap-6">
              <a
                href="https://github.com/niyatipandey"
                target="_blank"
                rel="noreferrer"
                className="text-[#A89F94] transition hover:text-[#E7C76A]">
                <FaGithub size={24} />
              </a>

              <a
                href="https://www.linkedin.com/in/niyati-pandey0605/"
                target="_blank"
                rel="noreferrer"
                className="text-[#A89F94] transition hover:text-[#E7C76A]">
                <FaLinkedin size={24} />
              </a>

              <a
                href="mailto:niyatipm25@gmail.com"
                className="text-[#A89F94] transition hover:text-[#E7C76A]">
                <Mail size={24} />
              </a>
            </div>
            <div className="hidden lg:flex lg:flex-col lg:gap-3">
              <a href="https://github.com/niyatipandey" target="_blank" rel="noreferrer" className="hover:text-[#E7C76A] transition">
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/niyati-pandey0605/" target="_blank" rel="noreferrer" className="hover:text-[#E7C76A] transition">
                LinkedIn
              </a>
              <a href="mailto:niyatipm25@gmail.com" className="hover:text-[#E7C76A] transition">
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-16 pt-8 px-8 border-t border-[#433A34] flex flex-col md:flex-row justify-between items-center gap-4">

        <p className="text-xs tracking-wider text-[#8A8072]">
          © 2026 Layrd. All rights reserved.
        </p>

        <p className="text-xs text-[#8A8072]">
          Built with React • Node.js • MongoDB • Groq API
        </p>

      </div>
    </footer>
  );
}
export default Footer
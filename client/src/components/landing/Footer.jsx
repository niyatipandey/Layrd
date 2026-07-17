import React from 'react'
import { Link } from "react-router-dom";

const Footer = ({C,serif,sans}) => {
  return (
    <footer className="bg-[#2E2621] text-[#F8F5F0] pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-4 gap-14">
        <div className="space-y-5">
          <h2 className="font-serif text-3xl tracking-[0.25em]">
            LAYRD
          </h2>

          <p className="text-[#A89F94] text-sm leading-7 max-w-xs">
            AI-powered wardrobe styling that helps you build,
            organize and complete outfits effortlessly.
          </p>
        </div>
        <div>
          <h4 className="text-xs uppercase tracking-[0.2em] text-[#8A8072] mb-5">
            Platform
          </h4>

          <div className="flex flex-col gap-3">
            <Link to="/library" className="hover:text-[#E7C76A] transition">
              Library
            </Link>

            <Link to="/canvas" className="hover:text-[#E7C76A] transition">
              Outfit Builder
            </Link>

            <Link to="/wardrobe" className="hover:text-[#E7C76A] transition">
              My Wardrobe
            </Link>
          </div>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.2em] text-[#8A8072] mb-5">
            Resources
          </h4>

          <div className="flex flex-col gap-3">
            <a href="#features" className="hover:text-[#E7C76A] transition">
              Features
            </a>

            <a href="#how-it-works" className="hover:text-[#E7C76A] transition">
              How it Works
            </a>

            <a href="#faq" className="hover:text-[#E7C76A] transition">
              FAQ
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.2em] text-[#8A8072] mb-5">
            Connect
          </h4>

          <div className="flex flex-col gap-3">
            <a
              href="https://github.com/niyatipandey"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#E7C76A] transition"
            >
              GitHub
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#E7C76A] transition"
            >
              LinkedIn
            </a>

            <a
              href="mailto:your@email.com"
              className="hover:text-[#E7C76A] transition"
            >
              Contact
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-16 pt-8 px-8 border-t border-[#433A34] flex flex-col md:flex-row justify-between items-center gap-4">

        <p className="text-xs tracking-wider text-[#8A8072]">
          © 2026 Layrd. All rights reserved.
        </p>

        <p className="text-xs text-[#8A8072]">
          Built with React • Node.js • MongoDB • Gemini AI
        </p>

      </div>
    </footer>
  );
}
export default Footer
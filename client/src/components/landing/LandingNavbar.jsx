import React from 'react'
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";

const LandingNavbar = ({C,serif,sans}) => {
  const navLinks = [
    { name: "Home", id: "#" },
    { name: "Features", id: "#features" },
    { name: "How It Works", id: "#how-it-works" },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b border-[#D8D2C8] bg-[#F8F5F0]">
      <div className="mx-auto max-w-7xl px-5 md:px-8">

        {/* ================= Mobile ================= */}
        <div className="md:hidden py-4">
          {/* Top Row */}
          <div className="flex items-center justify-between gap-4">
            <h1
              className="text-lg font-bold tracking-wider text-[#2E2621] whitespace-nowrap"
              style={{ fontFamily: "Cormorant Garamond" }}
            >
              LAYRD
            </h1>

            <div className="flex items-center gap-3 flex-shrink-0">
              <Link
                to="/login"
                className="text-xs text-[#2E2621] hover:text-black whitespace-nowrap"
              >
                Log in
              </Link>

              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <Link
                  to="/register"
                  className="rounded-md bg-[#2E2621] px-3 py-2 text-xs font-medium text-white whitespace-nowrap"
                >
                  Get Started
                </Link>
              </motion.div>
            </div>
          </div>

          {/* Bottom Row */}
          <div className="mt-4 flex justify-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.id}
                className="text-sm text-[#6F7B82] transition-colors hover:text-[#2E2621]"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>

        {/* ================= Desktop ================= */}
        <div className="hidden h-[72px] items-center gap-10 md:flex">
          <h1
            className="text-xl font-bold tracking-wider text-[#2E2621]"
            style={{ fontFamily: "Cormorant Garamond" }}
          >
            LAYRD
          </h1>

          <div className="flex flex-1 justify-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.id}
                className="text-sm text-[#6F7B82] transition-colors hover:text-[#2E2621]"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <Link
              to="/login"
              className="text-sm text-[#2E2621] transition-colors hover:text-black"
            >
              Log in
            </Link>

            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <Link
                to="/register"
                className="rounded-lg bg-[#2E2621] px-6 py-2.5 text-sm font-medium text-white"
              >
                Get Started
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default LandingNavbar
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
    <nav style={{
      position: "sticky", top: 0, zIndex: 50,
      background: C.bg,
      borderBottom: `1px solid ${C.border}`,
    }}>
      <div style={{
        maxWidth: 1200, margin: "0 auto",
        padding: "0 32px", height: 60,
        display: "flex", alignItems: "center", gap: 40,
      }}>
        <span style={{ fontFamily: serif, fontSize: 20, fontWeight: 700, color: C.text, letterSpacing: "0.05em" }}>
          LAYRD
        </span>
        <div style={{ display: "flex", gap: 36, flex: 1, justifyContent: "center" }}>
          {navLinks.map(l => (
            <a key={l.name} href={l.id} style={{ fontFamily: sans, fontSize: 14, color: C.mid, textDecoration: "none" }}
               onMouseEnter={e => e.target.style.color = C.text}
               onMouseLeave={e => e.target.style.color = C.mid}>
              {l.name}
            </a>
          ))}
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <a href="/login" style={{ fontFamily: sans, fontSize: 14, color: C.text, textDecoration: "none" }}>Log in</a>
          <motion.a href="/register" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
            style={{
              background: C.primary, color: "#fff",
              fontFamily: sans, fontSize: 14, fontWeight: 500,
              padding: "9px 22px", borderRadius: 8, textDecoration: "none",
            }}>
            Get Started
          </motion.a>
        </div>
      </div>
    </nav>
  );
}

export default LandingNavbar
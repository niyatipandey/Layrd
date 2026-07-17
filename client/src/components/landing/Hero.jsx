import React from 'react'
import { motion, useInView } from "framer-motion";
import girlImg from "../../assets/LANDING_PAGE_GIRL.png";
import aiBoxImg from "../../assets/LANDING_PAGE_AI_BOX.png";

const Hero = ({C,serif,sans}) => {
  return (
    <section
      style={{
        position: "relative",
        background: C.bg,
        minHeight: "88vh",
        overflow: "hidden",
        display: "flex",
        alignItems: "stretch",
      }}
    >
      <div style={{ position: "absolute", inset: 0 }}>
        <img
          src={girlImg}
          alt=""
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "40% top",
          }}
        />

        <div
          style={{
            position: "absolute",
            inset: 0,
            background: `linear-gradient(to right, ${C.bg} 0%, ${C.bg}CC 30%, ${C.bg}55 55%, transparent 75%)`,
          }}
        />

        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "30%",
            background: `linear-gradient(to top, ${C.bg}, transparent)`,
          }}
        />
      </div>

      <div
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: 1200,
          margin: "0 auto",
          width: "100%",
          padding: "72px 32px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div style={{ maxWidth: 420 }}>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            style={{
              fontFamily: sans,
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: "0.13em",
              color: C.gold,
              textTransform: "uppercase",
              marginBottom: 18,
            }}
          >
            AI Stylist. Your Look, Perfected.
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12 }}
            style={{
              fontFamily: serif,
              fontWeight: 700,
              fontSize: "clamp(42px, 5vw, 64px)",
              lineHeight: 1.08,
              color: C.text,
              marginBottom: 4,
            }}
          >
            Build Your
            <br />
            Wardrobe.
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.19 }}
            style={{
              fontFamily: serif,
              fontWeight: 700,
              fontStyle: "italic",
              fontSize: "clamp(38px, 4.6vw, 60px)",
              lineHeight: 1.08,
              color: C.gold,
              marginBottom: 24,
            }}
          >
            Style Your Look.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.26 }}
            style={{
              fontFamily: sans,
              fontSize: 15,
              lineHeight: 1.7,
              color: C.mid,
              marginBottom: 36,
              maxWidth: 340,
            }}
          >
            Layrd is your AI-powered stylist that helps you mix,
            match and complete outfits effortlessly.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.32 }}
            style={{
              display: "flex",
              gap: 12,
              flexWrap: "wrap",
            }}
          >
            <motion.a
              href="/library"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              style={{
                background: C.primary,
                color: "#fff",
                fontFamily: sans,
                fontSize: 14,
                fontWeight: 500,
                padding: "12px 28px",
                borderRadius: 8,
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              Start Styling →
            </motion.a>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{
          duration: 0.75,
          delay: 0.5,
          ease: [0.22, 1, 0.36, 1],
        }}
        style={{
          position: "absolute",
          right: "3%",
          bottom: "8%",
          width: "clamp(210px, 20vw, 270px)",
          borderRadius: 22,
          overflow: "hidden",
          background: C.card,
          zIndex: 5,
          boxShadow: "0 35px 80px rgba(0,0,0,0.18)",
        }}
      >
        <img
          src={aiBoxImg}
          alt="AI Stylist"
          style={{
            width: "100%",
            display: "block",
          }}
        />
      </motion.div>
    </section>
  );
}
export default Hero
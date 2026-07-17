import React from 'react'
import ctaImage from "../../assets/style_image.png";
import FadeUp from './FadeUp';
import { motion, useInView } from "framer-motion";

const CTASplit = ({C,serif,sans}) => {
  return (
    <section
      style={{
        background: C.bg,
        padding: 0,
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          minHeight: "380px",
        }}
      >
        <div
          style={{
            backgroundImage: `url(${ctaImage})`,
            backgroundSize: "cover",
            backgroundPosition: "left center",
            backgroundRepeat: "no-repeat",
            minHeight: "380px",
          }}
        />

        <div
          style={{
            background: "#EDE8E0",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "60px 64px",
          }}
        >
          <FadeUp>
            <div>
              <h2
                style={{
                  fontFamily: serif,
                  fontWeight: 700,
                  fontSize: "clamp(30px, 3vw, 46px)",
                  color: C.text,
                  lineHeight: 1.15,
                  marginBottom: 20,
                }}
              >
                Ready to Elevate
                <br />
                Your Style?
              </h2>

              <p
                style={{
                  fontFamily: sans,
                  color: C.mid,
                  lineHeight: 1.7,
                  fontSize: 15,
                  maxWidth: 340,
                  marginBottom: 32,
                }}
              >
                Join Layrd and let AI help you create
                outfits that truly represent your style.
              </p>

              <motion.a
                href="/register"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 10,
                  background: C.primary,
                  color: "#fff",
                  fontFamily: sans,
                  fontWeight: 500,
                  fontSize: 14,
                  padding: "14px 30px",
                  borderRadius: 8,
                  textDecoration: "none",
                  boxShadow: "0 8px 20px rgba(0,0,0,0.12)",
                }}
              >
                Get Started for Free →
              </motion.a>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}


export default CTASplit
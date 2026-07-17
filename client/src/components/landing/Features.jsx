import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import curatedWardrobe from "../../assets/curated_wardrobe.png"
import dragDrop from "../../assets/drag_drop_canvas.png"
import aiSuggest from "../../assets/ai_suggestion.png"
import styleImage from "../../assets/style_image.png"
import FadeUp from "./FadeUp";

const Features = ({C,serif,sans}) =>{
    const FEATURES = [
        {
            title: "Curated Wardrobe",
            body: "Explore handpicked pieces that fit your style.",
            image: curatedWardrobe,
            icon: "🪝",
        },
        {
            title: "Drag & Drop Canvas",
            body: "Build your outfit visually with our easy canvas.",
            image: dragDrop,
            icon: "⠿",
        },
        {
            title: "AI Stylist",
            body: "Get smart recommendations to complete your look.",
            image: aiSuggest,
            icon: "✦",
        },
        {
            title: "Save Your Looks",
            body: "Save outfits you love and revisit them anytime.",
            image: styleImage,
            icon: "🔖",
        },
    ];

  return (
    <section id="features" style={{ background: C.bg, padding: "90px 0" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 32px" }}>
        <FadeUp>
          <p
            style={{
              fontFamily: sans,
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: "0.14em",
              color: C.gold,
              textTransform: "uppercase",
              textAlign: "center",
              marginBottom: 14,
            }}
          >
            Everything You Need
          </p>
        </FadeUp>

        <FadeUp delay={0.07}>
          <h2
            style={{
              fontFamily: serif,
              fontWeight: 700,
              fontSize: "clamp(32px, 3.5vw, 46px)",
              color: C.text,
              textAlign: "center",
              marginBottom: 50,
            }}
          >
            Your Personal
            <br />
            Styling Studio
          </h2>
        </FadeUp>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 20,
          }}
        >
          {FEATURES.map((f, i) => (
            <FadeUp key={f.title} delay={i * 0.08}>
              <motion.div
                whileHover={{
                  y: -6,
                  boxShadow: "0 18px 40px rgba(28,26,24,0.10)",
                }}
                transition={{ duration: 0.25 }}
                style={{
                  background: C.card,
                  border: `1px solid ${C.border}`,
                  borderRadius: 18,
                  overflow: "hidden",
                  cursor: "default",
                }}
              >
                <div
                  style={{
                    position: "relative",
                    height: 200,
                  }}
                >
                  <img
                    src={f.image}
                    alt={f.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                    }}
                  />

                  <div
                    style={{
                      position: "absolute",
                      bottom: 16,
                      left: 16,
                      width: 58,
                      height: 58,
                      borderRadius: "50%",
                      background: "#fff",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 24,
                      boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
                    }}
                  >
                    {f.icon}
                  </div>
                </div>
                <div style={{ padding: "24px" }}>
                  <h3
                    style={{
                      fontFamily: serif,
                      fontSize: 22,
                      fontWeight: 700,
                      color: C.text,
                      marginBottom: 10,
                    }}
                  >
                    {f.title}
                  </h3>

                  <p
                    style={{
                      fontFamily: sans,
                      fontSize: 14,
                      lineHeight: 1.7,
                      color: C.mid,
                    }}
                  >
                    {f.body}
                  </p>
                </div>
              </motion.div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}


export default Features
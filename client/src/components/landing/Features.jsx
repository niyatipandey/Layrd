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
    <section id="features" className="bg-[#F8F5F0] py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
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
                className="mb-12 text-center text-4xl font-bold text-[#2E2621] md:text-5xl"
                style={{ fontFamily: "Cormorant Garamond" }}
                >
                Your Personal
                <br />
                Styling Studio
            </h2>
        </FadeUp>

        <div className="grid grid-cols-2 gap-5 lg:grid-cols-4">
          {FEATURES.map((f, i) => (
            <FadeUp key={f.title} delay={i * 0.08}>
              <motion.div
                    whileHover={{
                        y: -6,
                        boxShadow: "0 18px 40px rgba(28,26,24,0.10)",
                    }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden rounded-[18px] border border-[#D8D2C8] bg-[#FDFBF8] cursor-default"
                >
                <div className="relative h-40 md:h-52">
                    <img
                        src={f.image}
                        alt={f.title}
                        className="h-full w-full object-cover"
                    />

                    <div className="absolute bottom-4 left-4 flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-full bg-white text-xl shadow-lg">
                        {f.icon}
                    </div>
                </div>
                <div className="p-5 md:p-6">
                    <h3
                        className="mb-2 text-lg font-bold text-[#2E2621] md:text-[22px]"
                        style={{ fontFamily: "Cormorant Garamond" }}
                        >
                        {f.title}
                    </h3>
                    <p className="text-sm leading-7 text-[#6F7B82]">
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
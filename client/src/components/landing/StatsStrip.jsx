import React from "react";
import {Shirt,Sparkles,Heart,Bookmark,} from "lucide-react";

const StatsStrip = () => {

  const STATS = [
  { icon: <Shirt size={22} />, num: "30+", label: "Curated Pieces" },
  { icon: <Sparkles size={22} />, num: "AI", label: "Smart Stylist" },
  { icon: <Heart size={22} />, num: "20+", label: "Looks Created" },
  { icon: <Bookmark size={22} />, num: "Saved", label: "Favorite Outfits" },
];

  return (
    <section className="border-y border-[#D8D2C8] bg-[#F8F5F0] py-8">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-6 md:grid-cols-4 md:gap-0 md:px-8 justify-items-center">
        {STATS.map((stat, index) => (
          <div
            key={stat.num}
            className={`
              flex items-start gap-4
              md:px-8
              ${
                index < 3
                  ? "md:border-r md:border-[#D8D2C8]"
                  : ""
              }
            `}>
              <span className="text-2xl mt-3">{stat.icon}</span>

              <div className="flex flex-col">
                <p
                  className="text-xl font-bold text-[#2E2621] md:text-2xl"
                  style={{ fontFamily: "Cormorant Garamond" }}>
                  {stat.num}
                </p>

                <p className="mt-1 min-h-[32px] text-[11px] leading-4 text-[#8B8B8B] md:min-h-0 text-lg">
                  {stat.label}
                </p>
              </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsStrip;
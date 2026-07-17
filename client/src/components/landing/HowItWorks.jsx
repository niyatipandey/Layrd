import React from 'react'
import FadeUp from './FadeUp';

const HowItWorks = ({C,serif,sans}) => {
    const STEPS = [
        { n: "01", title: "Browse Pieces",   body: "Explore our collection of curated clothing." },
        { n: "02", title: "Add to Canvas",   body: "Drag and drop your favorite items."          },
        { n: "03", title: "AI Completes",    body: "Our AI stylist suggests the perfect matching pieces." },
        { n: "04", title: "Save & Wear",     body: "Save your look and wear it with confidence." },
    ];

  return (
    <section id="how-it-works" className="border-t border-[#D8D2C8] bg-[#F8F5F0] py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2
          className="mb-16 text-center text-4xl font-bold text-[#2E2621] md:text-5xl"
          style={{ fontFamily: "Cormorant Garamond" }}>
          Style in 4 Simple Steps
        </h2>
        <div className="grid grid-cols-2 gap-y-10 gap-x-6 lg:grid-cols-4">
          {STEPS.map((s, i) => (
            <FadeUp key={s.n} delay={i * 0.1}>
              <div className="px-2 text-center md:px-6">
                <div
                  className="mx-auto mb-6 flex h-11 w-11 items-center justify-center rounded-full border border-[#D8D2C8] bg-[#F8F5F0] text-sm font-semibold text-[#2E2621]">
                  {s.n}
                </div>
                <h3
                  className="mb-3 text-xl font-bold text-[#2E2621]"
                  style={{ fontFamily: "Cormorant Garamond" }}>
                  {s.title}
                </h3>
                <p className="text-sm leading-7 text-[#6F7B82]">
                  {s.body}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks
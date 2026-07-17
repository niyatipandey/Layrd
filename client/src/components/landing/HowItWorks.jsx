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
    <section id="how-it-works" style={{ background: C.bg, padding: "90px 0", borderTop: `1px solid ${C.border}` }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 32px" }}>
        <h2 style={{ fontFamily: serif, fontWeight: 700, fontSize: "clamp(30px, 3.5vw, 44px)", color: C.text, textAlign: "center", marginBottom: 64 }}>Style in 4 Simple Steps</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 0 }}>
          {STEPS.map((s, i) => (
            <FadeUp key={s.n} delay={i * 0.1}>
              <div style={{ textAlign: "center", padding: "0 24px" }}>
                <div style={{ width: 44, height: 44, borderRadius: "50%", border: `1.5px solid ${C.border}`, background: C.bg, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 24px", fontFamily: sans, fontSize: 13, fontWeight: 600, color: C.text }}>{s.n}</div>
                <h3 style={{ fontFamily: serif, fontSize: 17, fontWeight: 700, color: C.text, marginBottom: 10 }}>{s.title}</h3>
                <p style={{ fontFamily: sans, fontSize: 13, lineHeight: 1.65, color: C.mid }}>{s.body}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks
import React from 'react'

const StatsStrip = ({C,serif,sans}) => {
const STATS = [
  { icon: "🪝", num: "30+",    label: "Curated Pieces"        },
  { icon: "✦",  num: "AI",     label: "Smart Stylist"         },
  { icon: "♡",  num: "20+",  label: "Looks Created"         },
  { icon: "🔖", num: "Save & Organize", label: "Your Favorite Outfits" },
];
  return (
    <section style={{ borderTop: `1px solid ${C.border}`, borderBottom: `1px solid ${C.border}`, background: C.bg, padding: "28px 0" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 32px", display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 0 }}>
        {STATS.map((s, i) => (
          <div key={s.num} style={{ display: "flex", alignItems: "center", gap: 14, padding: "0 32px", borderRight: i < 3 ? `1px solid ${C.border}` : "none" }}>
            <span style={{ fontSize: 22 }}>{s.icon}</span>
            <div>
              <p style={{ fontFamily: serif, fontSize: 22, fontWeight: 700, color: C.text, lineHeight: 1.2 }}>{s.num}</p>
              <p style={{ fontFamily: sans, fontSize: 12, color: C.faint, marginTop: 2 }}>{s.label}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default StatsStrip
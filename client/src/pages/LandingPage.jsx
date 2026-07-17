import LandingNavbar from "../components/landing/LandingNavbar";
import Hero from "../components/landing/Hero";
import StatsStrip from "../components/landing/StatsStrip";
import Features from "../components/landing/Features";
import HowItWorks from "../components/landing/HowItWorks";
import CTASplit from "../components/landing/CTASplit";
import Footer from "../components/landing/Footer";

const C = {
  bg:       "#F8F5F0",
  card:     "#FDFBF8",
  text:     "#1C1A18",
  mid:      "#6B6560",
  faint:    "#A09A93",
  primary:  "#1C1A18",
  gold:     "#C6A97E",
  border:   "#E8E2D9",
  dark:     "#141210",
};

const serif = "'Playfair Display', Georgia, serif";
const sans  = "'Inter', system-ui, sans-serif";

export default function LandingPage() {
  return (
    <div style={{ background: C.bg }}>
      <LandingNavbar C={C} serif={serif} sans={sans}/>
      <Hero C={C} serif={serif} sans={sans}/>
      <StatsStrip C={C} serif={serif} sans={sans}/>
      <Features C={C} serif={serif} sans={sans}/>
      <HowItWorks C={C} serif={serif} sans={sans}/>
      <CTASplit C={C} serif={serif} sans={sans}/>
      <Footer C={C} serif={serif} sans={sans}/>
    </div>
  );
}
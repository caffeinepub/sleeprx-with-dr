import { ArrowDown } from "lucide-react";
import { useEffect, useRef } from "react";

export default function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const items = el.querySelectorAll(".fade-up");
    const timer = setTimeout(() => {
      items.forEach((item, i) => {
        setTimeout(() => item.classList.add("is-visible"), i * 120);
      });
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center pt-16 overflow-hidden"
      ref={ref}
    >
      {/* Subtle background decoration */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% -10%, oklch(0.60 0.12 148 / 0.06) 0%, transparent 70%)",
        }}
      />

      {/* Thin botanical line decoration */}
      <div
        className="absolute left-1/2 top-24 -translate-x-1/2 w-px opacity-20"
        style={{
          height: "120px",
          background:
            "linear-gradient(to bottom, transparent, oklch(var(--primary)), transparent)",
        }}
        aria-hidden
      />

      <div className="section-container relative z-10 text-center py-24 sm:py-32">
        {/* Label */}
        <div className="fade-up flex justify-center mb-8">
          <span className="section-label">Science-Backed Haircare</span>
        </div>

        {/* Headline */}
        <h1
          className="fade-up font-serif text-5xl sm:text-6xl lg:text-7xl leading-tight mb-6 max-w-3xl mx-auto"
          style={{ color: "oklch(0.15 0 0)" }}
        >
          Stop Hair Fall.{" "}
          <span style={{ color: "oklch(var(--primary))" }}>Restore</span> Your
          Roots.
        </h1>

        {/* Subheadline */}
        <p
          className="fade-up text-lg sm:text-xl leading-relaxed max-w-xl mx-auto mb-10"
          style={{ color: "oklch(0.50 0 0)" }}
        >
          A science-backed approach to stronger, healthier hair — trusted by
          thousands following our dermatology-informed protocols.
        </p>

        {/* CTAs */}
        <div className="fade-up flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#cta"
            className="btn-primary"
            data-ocid="hero.primary_button"
          >
            Get My Free Recovery Plan
          </a>
          <a
            href="#solution"
            className="btn-ghost"
            data-ocid="hero.secondary_button"
          >
            Learn How It Works
          </a>
        </div>

        {/* Stats strip */}
        <div
          className="fade-up mt-20 inline-flex flex-wrap justify-center gap-x-10 gap-y-4 py-5 px-8 rounded-2xl"
          style={{
            background: "oklch(0.97 0.008 148)",
            border: "1px solid oklch(0.92 0.01 148)",
          }}
        >
          {[
            { value: "10,000+", label: "People Helped" },
            { value: "30 Days", label: "Visible Results" },
            { value: "100%", label: "Research-Based" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div
                className="font-serif text-2xl font-normal"
                style={{ color: "oklch(var(--primary))" }}
              >
                {stat.value}
              </div>
              <div
                className="text-xs font-medium tracking-wide"
                style={{ color: "oklch(0.50 0 0)" }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll cue */}
      <a
        href="#problem"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-40 hover:opacity-70 transition-opacity"
        aria-label="Scroll to next section"
      >
        <span
          className="text-xs font-medium tracking-widest uppercase"
          style={{ color: "oklch(0.45 0 0)" }}
        >
          Scroll
        </span>
        <ArrowDown
          className="w-4 h-4 animate-bounce"
          style={{ color: "oklch(var(--primary))" }}
        />
      </a>
    </section>
  );
}

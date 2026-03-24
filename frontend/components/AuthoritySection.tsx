import { Check } from "lucide-react";
import { useScrollReveal } from "../hooks/useScrollReveal";

const signals = [
  "10,000+ people actively following our protocols",
  "Routines grounded in peer-reviewed dermatology research",
  "No miracle claims. No gimmicks. Just what the evidence supports.",
  "Designed with dermatological principles for real scalp health",
];

export default function AuthoritySection() {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section id="authority" ref={ref} className="py-24 sm:py-32">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left col */}
          <div>
            <div className="fade-up">
              <span className="section-label mb-4 block">Why Trust Us</span>
              <h2
                className="font-serif text-4xl sm:text-5xl mb-6"
                style={{ color: "oklch(0.15 0 0)" }}
              >
                Why Trust Root Recovery?
              </h2>
              <p
                className="text-base leading-relaxed mb-10"
                style={{ color: "oklch(0.50 0 0)" }}
              >
                We built Root Recovery because the haircare industry is flooded
                with marketing dressed up as science. Every recommendation on
                this platform is traceable to published research.
              </p>
            </div>

            {/* Trust signals */}
            <ul className="space-y-4 stagger-children">
              {signals.map((signal) => (
                <li key={signal} className="fade-up flex items-start gap-3">
                  <div
                    className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ backgroundColor: "oklch(0.96 0.018 148)" }}
                  >
                    <Check
                      className="w-3.5 h-3.5"
                      style={{ color: "oklch(var(--primary))" }}
                    />
                  </div>
                  <span
                    className="text-sm leading-relaxed"
                    style={{ color: "oklch(0.32 0 0)" }}
                  >
                    {signal}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right col — testimonials */}
          <div className="space-y-5 stagger-children">
            {[
              {
                quote:
                  "I spent two years trying random products. Three months following Root Recovery's protocol and I can actually see new growth along my hairline. The science-first approach made me trust it.",
                name: "Priya M.",
                detail: "28, Mumbai · 3 months on protocol",
              },
              {
                quote:
                  "The nutrition section alone changed everything for me. I had no idea my ferritin levels were impacting my hair. Simple, clear, actionable — exactly what was missing.",
                name: "Aisha K.",
                detail: "34, London · 6 months on protocol",
              },
            ].map((t) => (
              <figure
                key={t.name}
                className="fade-up rounded-2xl p-7"
                style={{
                  background: "oklch(0.985 0.005 148)",
                  border: "1px solid oklch(0.91 0.012 148)",
                }}
              >
                <div
                  className="text-3xl mb-4 leading-none"
                  style={{ color: "oklch(0.60 0.12 148 / 0.4)" }}
                >
                  &ldquo;
                </div>
                <blockquote
                  className="text-sm leading-relaxed mb-4"
                  style={{ color: "oklch(0.38 0 0)" }}
                >
                  {t.quote}
                </blockquote>
                <figcaption className="flex items-center gap-3">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold"
                    style={{ backgroundColor: "oklch(var(--primary))" }}
                  >
                    {t.name[0]}
                  </div>
                  <div>
                    <div
                      className="text-sm font-semibold"
                      style={{ color: "oklch(0.22 0 0)" }}
                    >
                      {t.name}
                    </div>
                    <div
                      className="text-xs"
                      style={{ color: "oklch(0.55 0 0)" }}
                    >
                      {t.detail}
                    </div>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

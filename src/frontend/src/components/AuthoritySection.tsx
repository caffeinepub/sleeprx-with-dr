import { Check, Star } from "lucide-react";
import { useScrollReveal } from "../hooks/useScrollReveal";

const signals = [
  "Routines grounded in peer-reviewed dermatology research",
  "No miracle claims. No gimmicks. Just what the evidence supports.",
  "Designed with dermatological principles for real scalp health",
];

const testimonials = [
  {
    quote:
      "I've tried so many products without knowing why they weren't working. Root Recovery helped me understand what my scalp actually needs. Finally following a routine that makes sense.",
    name: "Priya M.",
    detail: "Mumbai · Early adopter",
    stars: 5,
  },
  {
    quote:
      "The information here is different from the usual vague advice. Everything is explained clearly, and the product recommendations are honest. I feel like I'm finally on the right track.",
    name: "Aisha K.",
    detail: "London · Early adopter",
    stars: 5,
  },
  {
    quote:
      "Appreciate that this site doesn't overpromise. The 30-day guide is practical and easy to follow. My scalp feels calmer already after a couple of weeks.",
    name: "Sneha R.",
    detail: "Bangalore · Early adopter",
    stars: 5,
  },
];

export default function AuthoritySection() {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section id="authority" ref={ref} className="py-24 sm:py-32">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
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
            {testimonials.map((t) => (
              <figure
                key={t.name}
                className="fade-up rounded-2xl p-7"
                style={{
                  background: "oklch(0.985 0.005 148)",
                  border: "1px solid oklch(0.91 0.012 148)",
                }}
              >
                {/* Stars */}
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: t.stars }, (_, i) => String(i)).map(
                    (key) => (
                      <Star
                        key={key}
                        className="w-3.5 h-3.5 fill-current"
                        style={{ color: "oklch(0.72 0.14 75)" }}
                      />
                    ),
                  )}
                </div>
                <blockquote
                  className="text-sm leading-relaxed mb-4"
                  style={{ color: "oklch(0.38 0 0)" }}
                >
                  &ldquo;{t.quote}&rdquo;
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

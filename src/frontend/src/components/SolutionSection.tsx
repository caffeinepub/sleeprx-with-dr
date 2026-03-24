import { useScrollReveal } from "../hooks/useScrollReveal";

const steps = [
  {
    number: "01",
    title: "Identify Root Cause",
    description:
      "Use our guided assessment to pinpoint whether hormones, nutrition, stress, or scalp health is your primary driver — no guesswork, no generic advice.",
    detail: "Hormonal panel · Nutritional audit · Lifestyle review",
  },
  {
    number: "02",
    title: "Build a Targeted Routine",
    description:
      "Receive a personalised protocol that combines evidence-based topical treatments, nutritional guidance, and daily habits matched to your specific pattern.",
    detail: "Topical care · Diet plan · Supplement stack",
  },
  {
    number: "03",
    title: "Track Real Progress",
    description:
      "Hair regrowth is slow — most people see measurable improvement in 8–12 weeks. Our structured tracking keeps you on course and prevents common mistakes.",
    detail: "Weekly check-ins · Progress milestones · Adjustments",
  },
];

export default function SolutionSection() {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section
      id="solution"
      ref={ref}
      className="py-24 sm:py-32"
      style={{ backgroundColor: "oklch(0.985 0.005 148)" }}
    >
      <div className="section-container">
        {/* Header */}
        <div className="fade-up text-center mb-16">
          <span className="section-label mb-4 block">Our Approach</span>
          <h2
            className="font-serif text-4xl sm:text-5xl mb-4"
            style={{ color: "oklch(0.15 0 0)" }}
          >
            A Dermatology-Informed Approach
          </h2>
          <p
            className="max-w-lg mx-auto text-base leading-relaxed"
            style={{ color: "oklch(0.50 0 0)" }}
          >
            Three clear steps — built on peer-reviewed research, designed for
            real-world consistency.
          </p>
        </div>

        {/* Evidence badge */}
        <div className="fade-up flex justify-center mb-12">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-wide uppercase"
            style={{
              backgroundColor: "oklch(0.60 0.12 148)",
              color: "white",
            }}
          >
            <span>✓</span>
            Evidence-Based Protocol
          </div>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line (desktop) */}
          <div
            className="hidden md:block absolute top-10 left-0 right-0 h-px"
            style={{
              background:
                "linear-gradient(to right, transparent 0%, oklch(0.60 0.12 148 / 0.3) 20%, oklch(0.60 0.12 148 / 0.3) 80%, transparent 100%)",
            }}
            aria-hidden
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 stagger-children">
            {steps.map((step) => (
              <div
                key={step.number}
                className="fade-up flex flex-col items-center text-center md:items-start md:text-left"
              >
                {/* Step number */}
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center mb-6 relative z-10"
                  style={{
                    backgroundColor: "white",
                    border: "2px solid oklch(0.60 0.12 148)",
                  }}
                >
                  <span
                    className="font-serif text-2xl"
                    style={{ color: "oklch(var(--primary))" }}
                  >
                    {step.number}
                  </span>
                </div>

                <h3
                  className="font-serif text-2xl mb-3"
                  style={{ color: "oklch(0.18 0 0)" }}
                >
                  {step.title}
                </h3>
                <p
                  className="text-sm leading-relaxed mb-4"
                  style={{ color: "oklch(0.50 0 0)" }}
                >
                  {step.description}
                </p>
                <p
                  className="text-xs font-semibold tracking-wide"
                  style={{ color: "oklch(var(--primary))" }}
                >
                  {step.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

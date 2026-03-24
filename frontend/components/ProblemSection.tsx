import { useScrollReveal } from "../hooks/useScrollReveal";

const problems = [
  {
    icon: "🧬",
    title: "DHT Overload",
    description:
      "Dihydrotestosterone binds to scalp follicles, shrinking them over time until hair growth slows or stops entirely.",
  },
  {
    icon: "😓",
    title: "Chronic Stress",
    description:
      "Elevated cortisol disrupts the hair growth cycle, pushing follicles prematurely into the resting phase (telogen effluvium).",
  },
  {
    icon: "🥦",
    title: "Nutritional Gaps",
    description:
      "Deficiencies in iron, biotin, zinc, and vitamins D & B12 are among the most under-diagnosed causes of hair thinning.",
  },
  {
    icon: "🔬",
    title: "Scalp Inflammation",
    description:
      "Seborrheic dermatitis, product buildup, and oxidative stress create a hostile environment that suppresses new growth.",
  },
];

export default function ProblemSection() {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section id="problem" ref={ref} className="py-24 sm:py-32">
      <div className="section-container">
        {/* Header */}
        <div className="fade-up text-center mb-16">
          <span className="section-label mb-4 block">
            Understanding The Root Cause
          </span>
          <h2
            className="font-serif text-4xl sm:text-5xl mb-4"
            style={{ color: "oklch(0.15 0 0)" }}
          >
            Why is Your Hair Falling Out?
          </h2>
          <p
            className="max-w-lg mx-auto text-base leading-relaxed"
            style={{ color: "oklch(0.50 0 0)" }}
          >
            Hair loss rarely has a single cause. Most people experience a
            combination of these four factors — and addressing all of them is
            the key.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 stagger-children">
          {problems.map((p) => (
            <div
              key={p.title}
              className="fade-up group relative bg-white rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1"
              style={{
                border: "1px solid oklch(0.92 0 0)",
                boxShadow: "0 2px 16px oklch(0 0 0 / 0.04)",
                borderLeft: "3px solid oklch(var(--primary))",
              }}
            >
              <div className="flex items-start gap-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                  style={{ backgroundColor: "oklch(0.96 0.018 148)" }}
                >
                  {p.icon}
                </div>
                <div>
                  <h3
                    className="font-serif text-xl mb-2"
                    style={{ color: "oklch(0.18 0 0)" }}
                  >
                    {p.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "oklch(0.50 0 0)" }}
                  >
                    {p.description}
                  </p>
                </div>
              </div>

              {/* Hover accent */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(135deg, oklch(0.60 0.12 148 / 0.03) 0%, transparent 60%)",
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

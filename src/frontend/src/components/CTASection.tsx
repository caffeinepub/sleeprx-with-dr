import { Download, FileText } from "lucide-react";
import { useScrollReveal } from "../hooks/useScrollReveal";

export default function CTASection() {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section
      id="cta"
      ref={ref}
      className="py-24 sm:py-32"
      style={{ backgroundColor: "oklch(0.965 0.018 148)" }}
    >
      <div className="section-container">
        <div className="max-w-2xl mx-auto text-center">
          {/* Icon */}
          <div className="fade-up flex justify-center mb-6">
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center"
              style={{
                backgroundColor: "white",
                boxShadow: "0 4px 20px oklch(0.60 0.12 148 / 0.15)",
              }}
            >
              <FileText
                className="w-7 h-7"
                style={{ color: "oklch(var(--primary))" }}
              />
            </div>
          </div>

          <div className="fade-up">
            <span className="section-label mb-4 block justify-center">
              Free Download
            </span>
            <h2
              className="font-serif text-4xl sm:text-5xl mb-4"
              style={{ color: "oklch(0.15 0 0)" }}
            >
              30-Day Hair Fall Reduction Guide
            </h2>
            <p
              className="text-base leading-relaxed mb-3"
              style={{ color: "oklch(0.45 0 0)" }}
            >
              A step-by-step PDF with daily protocols, a full nutrition plan,
              and the science behind each recommendation — so you know exactly
              what to do and why.
            </p>
            <ul
              className="text-sm mb-10 space-y-1"
              style={{ color: "oklch(0.50 0 0)" }}
            >
              <li>✓ Week-by-week action plan (Days 1–30)</li>
              <li>✓ Key nutrients for hair growth + food sources</li>
              <li>✓ Sample daily meal plan</li>
              <li>✓ Daily habits checklist</li>
              <li>✓ What to avoid and why</li>
            </ul>
          </div>

          <div className="fade-up">
            <a
              href="/hair-guide.html"
              download="Root-Recovery-30-Day-Hair-Guide.html"
              className="btn-primary inline-flex items-center gap-2 no-underline"
            >
              <Download className="w-4 h-4" />
              Download Free Guide
            </a>
            <p className="mt-4 text-xs" style={{ color: "oklch(0.55 0 0)" }}>
              Opens in your browser. Use Print → Save as PDF to save a copy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

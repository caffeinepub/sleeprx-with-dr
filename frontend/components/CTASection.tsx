import { CheckCircle, Send } from "lucide-react";
import { useState } from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";

export default function CTASection() {
  const ref = useScrollReveal<HTMLElement>();
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !/^[^@]+@[^@]+\.[^@]+$/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    setError("");
    setSubmitted(true);
  };

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
              <span className="text-2xl">📄</span>
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
              Get Your Free Hair Recovery Plan
            </h2>
            <p
              className="text-base leading-relaxed mb-10"
              style={{ color: "oklch(0.45 0 0)" }}
            >
              A step-by-step PDF guide to reduce hair fall in 30 days —
              delivered straight to your inbox. No spam. Unsubscribe anytime.
            </p>
          </div>

          {submitted ? (
            <div
              className="fade-up is-visible flex flex-col items-center gap-3 py-8"
              data-ocid="cta.success_state"
            >
              <CheckCircle
                className="w-12 h-12"
                style={{ color: "oklch(var(--primary))" }}
              />
              <p
                className="font-semibold text-lg"
                style={{ color: "oklch(0.22 0 0)" }}
              >
                Check your inbox!
              </p>
              <p className="text-sm" style={{ color: "oklch(0.50 0 0)" }}>
                Your free PDF is on its way to {email}
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="fade-up"
              data-ocid="cta.modal"
            >
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <div className="flex-1">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    className="w-full px-5 py-3.5 rounded-full text-sm outline-none transition-all duration-200"
                    style={{
                      backgroundColor: "white",
                      border: "1.5px solid oklch(0.88 0.02 148)",
                      color: "oklch(0.22 0 0)",
                    }}
                    aria-label="Email address"
                    aria-describedby={error ? "cta-email-error" : undefined}
                    data-ocid="cta.input"
                  />
                </div>
                <button
                  type="submit"
                  className="btn-primary flex-shrink-0"
                  data-ocid="cta.submit_button"
                >
                  <Send className="w-4 h-4" />
                  Send Me the PDF
                </button>
              </div>
              {error && (
                <p
                  id="cta-email-error"
                  className="mt-2 text-sm"
                  style={{ color: "oklch(0.50 0.18 27)" }}
                  role="alert"
                  data-ocid="cta.error_state"
                >
                  {error}
                </p>
              )}
              <p className="mt-4 text-xs" style={{ color: "oklch(0.55 0 0)" }}>
                We respect your privacy. No spam, ever.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

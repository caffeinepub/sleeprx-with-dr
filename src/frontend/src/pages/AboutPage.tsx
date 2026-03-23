import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { FlaskConical, Leaf, ShieldCheck } from "lucide-react";
import { SiPinterest } from "react-icons/si";

const values = [
  {
    icon: <ShieldCheck className="w-7 h-7 text-primary" />,
    title: "Doctor-Reviewed",
    desc: "Every article and product recommendation is reviewed by a licensed medical professional before publishing.",
  },
  {
    icon: <FlaskConical className="w-7 h-7 text-primary" />,
    title: "Science-Based",
    desc: "We cite peer-reviewed research and clinical studies — no pseudoscience, no hype.",
  },
  {
    icon: <Leaf className="w-7 h-7 text-primary" />,
    title: "Affiliate Transparency",
    desc: "We clearly disclose all affiliate relationships. Our editorial opinions are never influenced by partnerships.",
  },
];

export default function AboutPage() {
  return (
    <div className="pt-24 pb-20">
      {/* Hero */}
      <section
        className="py-20 text-center"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.97 0.010 90), oklch(0.91 0.030 130))",
        }}
      >
        <div className="max-w-3xl mx-auto px-4 fade-in-up">
          <Badge variant="secondary" className="mb-5 text-xs tracking-wide">
            Our Mission
          </Badge>
          <h1 className="font-serif text-4xl md:text-5xl font-semibold text-foreground mb-6 leading-tight">
            About Dr. Hair & Wellness
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            This platform shares science-based haircare and wellness advice
            curated by medical professionals. Our mission is to bridge the gap
            between clinical research and everyday haircare routines.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-20">
        <div className="text-center mb-12 fade-in-up">
          <h2 className="font-serif text-3xl font-semibold text-foreground mb-3">
            What We Stand For
          </h2>
          <p className="text-muted-foreground">Our editorial principles</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {values.map((val, i) => (
            <Card
              key={val.title}
              className="card-hover border-border fade-in-up"
              style={{ transitionDelay: `${i * 100}ms` }}
              data-ocid={`about.item.${i + 1}`}
            >
              <CardContent className="p-7">
                <div className="mb-4 p-3 bg-accent rounded-xl w-fit">
                  {val.icon}
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                  {val.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {val.desc}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Commitment */}
      <section className="bg-secondary py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center fade-in-up">
          <h2 className="font-serif text-3xl font-semibold text-foreground mb-6">
            Our Commitment
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-5">
            Dr. Hair & Wellness was founded on the belief that everyone deserves
            access to credible health information without marketing fluff. We
            partner only with brands whose products have demonstrated clinical
            merit.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-5">
            When we recommend a product, we have evaluated it against scientific
            literature. Our affiliate relationships are disclosed clearly and
            consistently throughout the site — this is non-negotiable.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            We are not a substitute for personalized medical advice. Always
            consult a qualified healthcare provider for individual concerns.
          </p>
        </div>
      </section>

      {/* Pinterest board section */}
      <section className="max-w-xl mx-auto px-4 sm:px-6 py-20 text-center fade-in-up">
        <SiPinterest size={40} className="text-[#E60023] mx-auto mb-4" />
        <h2 className="font-serif text-2xl font-semibold text-foreground mb-3">
          Find Us on Pinterest
        </h2>
        <p className="text-muted-foreground mb-6">
          Browse our curated boards for daily hair tips, product picks, and
          wellness inspiration.
        </p>
        <a
          href="https://pinterest.com"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-pinterest"
          data-ocid="about.link"
        >
          <SiPinterest size={16} /> Visit Our Pinterest Board
        </a>
      </section>
    </div>
  );
}

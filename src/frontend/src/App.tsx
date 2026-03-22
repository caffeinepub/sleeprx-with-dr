import {
  Brain,
  CheckCircle,
  Clock,
  Coffee,
  Heart,
  Lightbulb,
  Menu,
  Moon,
  Play,
  Shield,
  Star,
  Thermometer,
  Wind,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";
import { SiInstagram, SiLinkedin, SiYoutube } from "react-icons/si";

// ─── Scroll Reveal Hook ────────────────────────────────────────────────────────
function useScrollReveal() {
  useEffect(() => {
    const elements = document.querySelectorAll(".fade-in-up, .fade-in");
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        }
      },
      { threshold: 0.12 },
    );
    for (const el of elements) {
      observer.observe(el);
    }
    return () => observer.disconnect();
  }, []);
}

// ─── Crescent Moon Icon ────────────────────────────────────────────────────────
function CrescentMoon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Crescent moon"
    >
      <path
        d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="0.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// ─── Navbar ───────────────────────────────────────────────────────────────────
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "Sleep Tips", href: "#sleep-tips" },
    { label: "Watch & Learn", href: "#watch-learn" },
    { label: "About", href: "#about" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-navy-950/95 backdrop-blur-md border-b border-navy-700"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          className="flex items-center gap-2.5 group"
          data-ocid="nav.link"
        >
          <CrescentMoon className="w-7 h-7 text-gold" />
          <span className="font-bold text-lg tracking-tight text-foreground">
            SleepRx <span className="text-gold">with Dr.</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-navy-200 hover:text-gold transition-colors duration-200"
              data-ocid="nav.link"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="#about"
          className="hidden md:inline-flex items-center px-5 py-2.5 rounded-full bg-gold text-navy-950 font-semibold text-sm hover:bg-gold-light transition-all duration-200 shadow-glow-gold"
          data-ocid="nav.primary_button"
        >
          Book Consultation
        </a>

        {/* Mobile toggle */}
        <button
          type="button"
          className="md:hidden text-foreground p-1"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          data-ocid="nav.toggle"
        >
          {mobileOpen ? (
            <X className="w-5 h-5" />
          ) : (
            <Menu className="w-5 h-5" />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-navy-900/98 backdrop-blur-md border-t border-navy-700 px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-navy-200 hover:text-gold"
              onClick={() => setMobileOpen(false)}
              data-ocid="nav.link"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#about"
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-gold text-navy-950 font-semibold text-sm"
            data-ocid="nav.primary_button"
          >
            Book Consultation
          </a>
        </div>
      )}
    </header>
  );
}

// ─── Hero Section ─────────────────────────────────────────────────────────────
function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center stars-bg overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, oklch(0.09 0.018 260) 0%, oklch(0.115 0.025 252) 50%, oklch(0.08 0.02 255) 100%)",
      }}
    >
      {/* Ambient glow */}
      <div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, oklch(0.55 0.14 255), transparent)",
        }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full opacity-8 blur-3xl pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, oklch(0.75 0.1 70), transparent)",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 pt-24 pb-16 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold/30 bg-gold/10 fade-in">
              <CrescentMoon className="w-4 h-4 text-gold" />
              <span className="text-gold text-xs font-semibold tracking-wider uppercase">
                Doctor-Led Sleep Science
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight text-foreground fade-in-up">
              Sleep Better Tonight{" "}
              <span
                className="block"
                style={{
                  background:
                    "linear-gradient(90deg, oklch(0.82 0.08 70), oklch(0.75 0.1 70))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Backed by Medical Science
              </span>
            </h1>

            <p
              className="text-base md:text-lg text-navy-200 leading-relaxed max-w-md fade-in-up"
              style={{ transitionDelay: "0.1s" }}
            >
              Doctor-led, science-based solutions to cure insomnia, anxiety, and
              poor sleep naturally. Reclaim the rest your body deserves.
            </p>

            <div
              className="flex flex-wrap gap-4 fade-in-up"
              style={{ transitionDelay: "0.2s" }}
            >
              <a
                href="#sleep-tips"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gold text-navy-950 font-bold text-sm hover:bg-gold-light transition-all duration-200 shadow-glow-gold"
                data-ocid="hero.primary_button"
              >
                Start Sleeping Better
              </a>
              <a
                href="#watch-learn"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-gold/50 text-gold font-semibold text-sm hover:bg-gold/10 transition-all duration-200"
                data-ocid="hero.secondary_button"
              >
                <Play className="w-4 h-4" />
                Watch Sleep Videos
              </a>
            </div>

            {/* Trust micro-signals */}
            <div
              className="flex items-center gap-6 fade-in"
              style={{ transitionDelay: "0.3s" }}
            >
              <div className="flex -space-x-2">
                {["A", "B", "C", "D"].map((l) => (
                  <div
                    key={l}
                    className="w-8 h-8 rounded-full border-2 border-navy-900 flex items-center justify-center text-xs font-bold"
                    style={{
                      background: `oklch(0.${
                        [3, 4, 5, 6]["ABCD".indexOf(l)]
                      }5 0.05 ${[250, 255, 260, 265]["ABCD".indexOf(l)]})`,
                    }}
                  >
                    {l}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-3.5 h-3.5 text-gold fill-gold" />
                  ))}
                </div>
                <p className="text-xs text-navy-300 mt-0.5">
                  5,000+ patients helped
                </p>
              </div>
            </div>
          </div>

          {/* Right: Image */}
          <div
            className="relative fade-in"
            style={{ transitionDelay: "0.15s" }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-card-dark">
              <img
                src="/assets/generated/hero-sleep.dim_800x600.jpg"
                alt="Peaceful sleep"
                className="w-full h-full object-cover"
                style={{ aspectRatio: "4/3" }}
              />
              {/* Dark blue overlay blend */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(135deg, oklch(0.115 0.025 252 / 0.4) 0%, transparent 60%, oklch(0.09 0.018 260 / 0.5) 100%)",
                }}
              />
              {/* Floating badge */}
              <div className="absolute bottom-6 left-6 bg-navy-800/90 backdrop-blur-sm rounded-xl px-5 py-3 border border-navy-600">
                <p className="text-gold font-bold text-lg">94%</p>
                <p className="text-navy-200 text-xs">Report improved sleep</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Sleep Problems ───────────────────────────────────────────────────────────
const sleepProblems = [
  {
    icon: Moon,
    title: "Insomnia",
    desc: "Struggling to fall or stay asleep despite exhaustion? We address root causes, not just symptoms.",
  },
  {
    icon: Brain,
    title: "Overthinking at Night",
    desc: "Racing thoughts preventing rest? Science-backed cognitive techniques to quiet your mind.",
  },
  {
    icon: Heart,
    title: "Anxiety & Sleep",
    desc: "Anxiety and sleep deprivation feed each other. Break the cycle with proven medical interventions.",
  },
  {
    icon: Clock,
    title: "Irregular Sleep Cycle",
    desc: "Disrupted circadian rhythm throwing off your entire day. Restore natural sleep-wake alignment.",
  },
];

function SleepProblemsSection() {
  return (
    <section
      id="sleep-problems"
      className="py-20 md:py-24"
      style={{ background: "oklch(0.115 0.022 258)" }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14 fade-in-up">
          <span className="text-gold text-xs font-semibold uppercase tracking-widest">
            Common Challenges
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-foreground">
            Understanding Sleep Challenges
          </h2>
          <p className="mt-4 text-navy-200 max-w-2xl mx-auto">
            Millions struggle with sleep disorders. Recognizing your challenge
            is the first step toward lasting relief.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {sleepProblems.map((problem, i) => (
            <div
              key={problem.title}
              className="fade-in-up group bg-card rounded-2xl p-6 border border-border hover:border-gold/40 transition-all duration-300 hover:shadow-card-hover flex flex-col gap-4"
              style={{ transitionDelay: `${i * 0.08}s` }}
              data-ocid={`sleep_problems.card.${i + 1}`}
            >
              <div className="w-11 h-11 rounded-xl bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                <problem.icon className="w-5 h-5 text-gold" />
              </div>
              <div>
                <h3 className="font-bold text-foreground text-base mb-2">
                  {problem.title}
                </h3>
                <p className="text-navy-200 text-sm leading-relaxed">
                  {problem.desc}
                </p>
              </div>
              <a
                href="#sleep-tips"
                className="mt-auto text-sm font-semibold text-gold hover:text-gold-light transition-colors group-hover:underline"
              >
                Learn More →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Why Trust Section ────────────────────────────────────────────────────────
const trustPoints = [
  {
    icon: Shield,
    title: "Doctor-Based Advice",
    desc: "Every recommendation is grounded in clinical evidence reviewed by board-certified physicians.",
  },
  {
    icon: CheckCircle,
    title: "Science-Backed Methods",
    desc: "Cognitive Behavioral Therapy for Insomnia (CBT-I) is the gold standard — and it's what we teach.",
  },
  {
    icon: Lightbulb,
    title: "Simple & Practical Solutions",
    desc: "No complex protocols. Clear, actionable steps you can start tonight for measurable improvement.",
  },
];

function WhyTrustSection() {
  return (
    <section
      id="about"
      className="py-20 md:py-24"
      style={{ background: "oklch(0.09 0.018 260)" }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14 fade-in-up">
          <span className="text-gold text-xs font-semibold uppercase tracking-widest">
            Credentials
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-foreground">
            Why Trust SleepRx with Dr.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Left: Trust points */}
          <div className="space-y-6 fade-in-up">
            {trustPoints.map((point, i) => (
              <div
                key={point.title}
                className="flex gap-5 p-6 rounded-2xl bg-card border border-border hover:border-gold/30 transition-all duration-300"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center shrink-0">
                  <point.icon className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1.5">
                    {point.title}
                  </h3>
                  <p className="text-navy-200 text-sm leading-relaxed">
                    {point.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right: Doctor quote card */}
          <div className="fade-in" style={{ transitionDelay: "0.2s" }}>
            <div
              className="relative rounded-2xl p-8 border border-gold/20"
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.175 0.026 256), oklch(0.155 0.022 258))",
              }}
            >
              {/* Gold quote mark */}
              <div className="text-gold text-6xl font-serif leading-none mb-4 opacity-60">
                &ldquo;
              </div>

              <p className="text-navy-50 text-base leading-relaxed mb-8 font-medium">
                I've helped thousands of patients reclaim restful sleep through
                evidence-based methods that work — without dependency on sleep
                medications. Real results, rooted in neuroscience.
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg bg-gold/20 text-gold border border-gold/30">
                  SM
                </div>
                <div>
                  <p className="font-bold text-foreground">
                    Dr. Sarah Mitchell, MD
                  </p>
                  <p className="text-navy-300 text-sm">
                    Board-Certified Sleep Physician
                  </p>
                </div>
              </div>

              {/* Credential badges */}
              <div className="mt-8 pt-6 border-t border-navy-600 flex flex-wrap gap-3">
                {["Board Certified", "10+ Years", "5,000+ Patients"].map(
                  (badge) => (
                    <span
                      key={badge}
                      className="px-3 py-1.5 rounded-full text-xs font-semibold border border-gold/30 text-gold bg-gold/10"
                    >
                      {badge}
                    </span>
                  ),
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Sleep Tips ───────────────────────────────────────────────────────────────
const sleepTips = [
  {
    icon: Clock,
    title: "Consistent Sleep Schedule",
    tip: "Go to bed and wake up at the same time every day — even on weekends. This anchors your circadian rhythm.",
  },
  {
    icon: Moon,
    title: "Limit Screen Time",
    tip: "Avoid screens 1 hour before bed. Blue light suppresses melatonin production and delays sleep onset.",
  },
  {
    icon: Thermometer,
    title: "Cool Your Room",
    tip: "Keep your bedroom between 65–68°F. Core body temperature drop is a key trigger for deep sleep.",
  },
  {
    icon: Wind,
    title: "Practice Deep Breathing",
    tip: "The 4-7-8 technique: inhale 4s, hold 7s, exhale 8s. Activates the parasympathetic nervous system.",
  },
  {
    icon: Coffee,
    title: "Avoid Caffeine After 2PM",
    tip: "Caffeine has a half-life of 5–6 hours in the body. Afternoon coffee delays sleep by hours.",
  },
  {
    icon: Lightbulb,
    title: "Create a Sleep Ritual",
    tip: "A consistent pre-bed routine signals your brain it's time to sleep. Dim lights, journal, or read.",
  },
];

function SleepTipsSection() {
  return (
    <section
      id="sleep-tips"
      className="py-20 md:py-24"
      style={{ background: "oklch(0.115 0.022 258)" }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14 fade-in-up">
          <span className="text-gold text-xs font-semibold uppercase tracking-widest">
            Tips from the Doctor
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-foreground">
            Expert Sleep Tips
          </h2>
          <p className="mt-4 text-navy-200 max-w-xl mx-auto">
            Clinically validated techniques you can implement tonight for better
            rest.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {sleepTips.map((tip, i) => (
            <div
              key={tip.title}
              className="fade-in-up group bg-card rounded-2xl p-6 border border-border hover:border-gold/40 transition-all duration-300 hover:shadow-card-hover"
              style={{ transitionDelay: `${i * 0.07}s` }}
              data-ocid={`sleep_tips.card.${i + 1}`}
            >
              <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors">
                <tip.icon className="w-5 h-5 text-gold" />
              </div>
              <h3 className="font-bold text-foreground mb-2">{tip.title}</h3>
              <p className="text-navy-200 text-sm leading-relaxed">{tip.tip}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Video Section ────────────────────────────────────────────────────────────
const videos = [
  {
    title: "How to Fall Asleep in 10 Minutes — Proven Techniques",
    views: "128K views",
    duration: "14:32",
  },
  {
    title: "The Science of Deep Sleep Explained",
    views: "94K views",
    duration: "18:47",
  },
];

function VideoCard({
  video,
  index,
}: { video: (typeof videos)[0]; index: number }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className="fade-in-up group cursor-pointer rounded-2xl overflow-hidden border border-border hover:border-gold/40 transition-all duration-300 hover:shadow-card-hover"
      style={{
        background: "oklch(0.155 0.022 258)",
        transitionDelay: `${index * 0.1}s`,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      data-ocid={`videos.card.${index + 1}`}
    >
      {/* Thumbnail area */}
      <div
        className="relative flex items-center justify-center"
        style={{
          aspectRatio: "16/9",
          background:
            "linear-gradient(135deg, oklch(0.12 0.025 255), oklch(0.09 0.018 260))",
        }}
      >
        <div className="stars-bg absolute inset-0 opacity-50" />
        {/* Play button */}
        <div
          className="relative z-10 w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300"
          style={{
            background: hovered
              ? "oklch(0.75 0.1 70)"
              : "oklch(0.75 0.1 70 / 0.2)",
            border: "2px solid oklch(0.75 0.1 70 / 0.6)",
            transform: hovered ? "scale(1.1)" : "scale(1)",
          }}
        >
          <Play
            className="w-7 h-7 ml-1"
            style={{
              color: hovered ? "oklch(0.12 0.025 260)" : "oklch(0.75 0.1 70)",
            }}
            fill="currentColor"
          />
        </div>
        {/* Duration badge */}
        <span className="absolute bottom-3 right-3 bg-navy-950/80 text-foreground text-xs px-2 py-0.5 rounded font-mono">
          {video.duration}
        </span>
      </div>

      {/* Info */}
      <div className="p-5">
        <h3 className="font-bold text-foreground text-base leading-snug group-hover:text-gold transition-colors mb-2">
          {video.title}
        </h3>
        <div className="flex items-center gap-3 text-sm text-navy-300">
          <CrescentMoon className="w-4 h-4 text-gold" />
          <span className="font-semibold text-gold text-xs">
            Dr. Sarah Mitchell, MD
          </span>
          <span className="text-navy-400">·</span>
          <span className="text-xs">{video.views}</span>
        </div>
      </div>
    </div>
  );
}

function WatchLearnSection() {
  return (
    <section
      id="watch-learn"
      className="py-20 md:py-24"
      style={{ background: "oklch(0.09 0.018 260)" }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14 fade-in-up">
          <span className="text-gold text-xs font-semibold uppercase tracking-widest">
            Video Library
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-foreground">
            Watch &amp; Learn
          </h2>
          <p className="mt-4 text-navy-200 max-w-xl mx-auto">
            Evidence-based sleep education from a board-certified physician.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {videos.map((v, i) => (
            <VideoCard key={v.title} video={v} index={i} />
          ))}
        </div>

        <div className="text-center mt-10 fade-in">
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-gold/40 text-gold text-sm font-semibold hover:bg-gold/10 transition-all duration-200"
            data-ocid="videos.secondary_button"
          >
            <SiYoutube className="w-4 h-4" />
            View Full Channel
          </a>
        </div>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────
function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";
  const utmLink = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`;

  const links = {
    Solutions: ["Insomnia", "Anxiety Sleep", "Sleep Tips"],
    Resources: ["Watch & Learn", "Blog", "FAQ"],
    Legal: ["Privacy Policy", "Terms of Use"],
  };

  return (
    <footer
      className="border-t border-border"
      style={{ background: "oklch(0.07 0.016 262)" }}
    >
      <div className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <CrescentMoon className="w-7 h-7 text-gold" />
              <span className="font-bold text-lg tracking-tight">
                SleepRx <span className="text-gold">with Dr.</span>
              </span>
            </div>
            <p className="text-navy-300 text-sm leading-relaxed max-w-xs">
              Science-backed sleep solutions from board-certified physicians.
              Helping you reclaim restful nights naturally.
            </p>
            <div className="flex gap-4 mt-6">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-navy-400 hover:text-gold transition-colors"
                aria-label="Instagram"
                data-ocid="footer.link"
              >
                <SiInstagram className="w-5 h-5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-navy-400 hover:text-gold transition-colors"
                aria-label="YouTube"
                data-ocid="footer.link"
              >
                <SiYoutube className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-navy-400 hover:text-gold transition-colors"
                aria-label="LinkedIn"
                data-ocid="footer.link"
              >
                <SiLinkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <h4 className="font-bold text-foreground text-sm mb-4 uppercase tracking-wider">
                {category}
              </h4>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="/"
                      className="text-navy-300 text-sm hover:text-gold transition-colors"
                      data-ocid="footer.link"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-6 border-t border-navy-700 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-navy-400 text-xs">
            © {year} SleepRx with Dr. All rights reserved.
          </p>
          <p className="text-navy-500 text-xs">
            Built with love using{" "}
            <a
              href={utmLink}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gold transition-colors"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

// ─── App ──────────────────────────────────────────────────────────────────────
export default function App() {
  useScrollReveal();

  return (
    <div className="min-h-screen font-sans">
      <Navbar />
      <main>
        <HeroSection />
        <SleepProblemsSection />
        <WhyTrustSection />
        <SleepTipsSection />
        <WatchLearnSection />
      </main>
      <Footer />
    </div>
  );
}

import { Toaster } from "@/components/ui/sonner";
import {
  Apple,
  ArrowRight,
  ChevronRight,
  Droplets,
  Leaf,
  Menu,
  Scale,
  Star,
  X,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { toast } from "sonner";

// ── Scroll reveal hook ──────────────────────────────────────────────────────
function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".fade-in-up");
    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) e.target.classList.add("visible");
        }
      },
      { threshold: 0.1 },
    );
    for (const el of els) obs.observe(el);
    return () => obs.disconnect();
  });
}

// ── Navbar ──────────────────────────────────────────────────────────────────
function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Home", href: "#hero" },
    { label: "Guides", href: "#guides" },
    { label: "Blog", href: "#blog" },
  ];

  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-sm shadow-md"
          : "bg-white shadow-sm"
      }`}
    >
      <div className="section-max flex items-center justify-between h-16">
        <button
          type="button"
          className="flex items-center gap-2 text-xl font-bold font-serif"
          style={{ color: "oklch(0.36 0.12 145)" }}
          onClick={() => scrollTo("#hero")}
          data-ocid="nav.link"
        >
          <span className="text-2xl">🌿</span> Root Recovery
        </button>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <button
              type="button"
              key={l.label}
              onClick={() => scrollTo(l.href)}
              className="text-sm font-medium transition-colors hover:text-primary"
              style={{ color: "oklch(0.36 0.12 145)" }}
              data-ocid={`nav.${l.label.toLowerCase()}.link`}
            >
              {l.label}
            </button>
          ))}
          <button
            type="button"
            onClick={() => scrollTo("#email")}
            className="btn-pill text-sm"
            data-ocid="nav.cta.button"
          >
            Get Free Plan
          </button>
        </div>

        {/* Mobile menu toggle */}
        <button
          type="button"
          className="md:hidden p-2 rounded-lg"
          onClick={() => setOpen((v) => !v)}
          style={{ color: "oklch(0.36 0.12 145)" }}
          data-ocid="nav.menu.toggle"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white border-t border-border overflow-hidden"
          >
            <div className="section-max flex flex-col py-4 gap-4">
              {links.map((l) => (
                <button
                  type="button"
                  key={l.label}
                  onClick={() => scrollTo(l.href)}
                  className="text-left text-sm font-medium py-2"
                  style={{ color: "oklch(0.36 0.12 145)" }}
                >
                  {l.label}
                </button>
              ))}
              <button
                type="button"
                onClick={() => scrollTo("#email")}
                className="btn-pill w-full text-center"
              >
                Get Free Plan
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

// ── Hero ────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section
      id="hero"
      className="pt-32 pb-24 text-center"
      style={{
        background:
          "linear-gradient(to bottom, oklch(0.95 0.04 148), oklch(0.98 0.012 145))",
      }}
    >
      <div className="section-max">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <span
            className="inline-block text-xs font-semibold tracking-widest uppercase mb-5 px-4 py-1.5 rounded-full"
            style={{
              backgroundColor: "oklch(0.88 0.06 148)",
              color: "oklch(0.36 0.12 145)",
            }}
          >
            Science-Based Haircare
          </span>

          <h1
            className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6"
            style={{ color: "oklch(0.36 0.12 145)" }}
          >
            Stop Hair Fall &amp; Regrow
            <br />
            <span className="italic" style={{ color: "oklch(0.42 0.13 145)" }}>
              Hair Naturally
            </span>
          </h1>

          <p
            className="text-lg sm:text-xl max-w-xl mx-auto mb-10"
            style={{ color: "oklch(0.45 0.07 145)" }}
          >
            Science-based routines that actually work — no myths, no gimmicks.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              type="button"
              className="btn-pill text-base px-8 py-3.5"
              onClick={() =>
                document
                  .querySelector("#email")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              data-ocid="hero.primary_button"
            >
              Start Your Hair Recovery Plan
              <ArrowRight size={16} className="ml-2" />
            </button>
            <button
              type="button"
              className="btn-pill-outline text-base px-8 py-3.5"
              onClick={() =>
                document
                  .querySelector("#guides")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              data-ocid="hero.secondary_button"
            >
              Explore Guides
            </button>
          </div>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-16 grid grid-cols-3 gap-4 max-w-lg mx-auto"
        >
          {[
            { num: "10K+", label: "Users Helped" },
            { num: "8 Wks", label: "Avg Results" },
            { num: "95%", label: "Satisfaction" },
          ].map((s) => (
            <div
              key={s.label}
              className="text-center py-4 px-3 rounded-2xl"
              style={{ backgroundColor: "oklch(1 0 0 / 0.7)" }}
            >
              <div
                className="font-serif text-2xl font-bold"
                style={{ color: "oklch(0.36 0.12 145)" }}
              >
                {s.num}
              </div>
              <div
                className="text-xs mt-0.5"
                style={{ color: "oklch(0.5 0.05 145)" }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ── About ───────────────────────────────────────────────────────────────────
function About() {
  return (
    <section id="about" className="py-20">
      <div className="section-max">
        <div className="fade-in-up max-w-3xl mx-auto text-center">
          <span
            className="inline-block text-xs font-semibold tracking-widest uppercase mb-4"
            style={{ color: "oklch(0.42 0.13 145)" }}
          >
            Our Mission
          </span>
          <h2
            className="font-serif text-3xl sm:text-4xl font-semibold mb-6"
            style={{ color: "oklch(0.36 0.12 145)" }}
          >
            About Root Recovery
          </h2>
          <p
            className="text-base sm:text-lg leading-relaxed"
            style={{ color: "oklch(0.38 0.06 145)" }}
          >
            Root Recovery simplifies haircare using research-based methods. No
            myths — only practical, effective solutions for hair fall, scalp
            health, and growth. We distil complex science into routines anyone
            can follow, backed by dermatology and nutrition research.
          </p>
        </div>

        {/* Feature pillars */}
        <div className="mt-14 grid sm:grid-cols-3 gap-6">
          {[
            {
              icon: "🔬",
              title: "Research-Based",
              desc: "Every tip is grounded in peer-reviewed science, not social media trends.",
            },
            {
              icon: "📋",
              title: "Actionable Plans",
              desc: "Step-by-step routines you can start today, adapted to your hair type.",
            },
            {
              icon: "🌿",
              title: "Natural Approach",
              desc: "Harnessing proven botanical ingredients alongside modern formulations.",
            },
          ].map((p) => (
            <div key={p.title} className="fade-in-up leaf-card text-center">
              <div className="text-4xl mb-3">{p.icon}</div>
              <h3
                className="font-serif text-lg font-semibold mb-2"
                style={{ color: "oklch(0.36 0.12 145)" }}
              >
                {p.title}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "oklch(0.45 0.05 145)" }}
              >
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Guides ──────────────────────────────────────────────────────────────────
const guidesData = [
  {
    icon: <Leaf size={28} />,
    emoji: "🌿",
    title: "Hair Fall Plan",
    desc: "A 30-day protocol to identify triggers and reduce shedding by up to 60%.",
    tag: "Most Popular",
  },
  {
    icon: <Droplets size={28} />,
    emoji: "🧴",
    title: "Weekly Routine",
    desc: "Wash, condition, oil, and style on a science-backed weekly schedule.",
    tag: "Beginner Friendly",
  },
  {
    icon: <Apple size={28} />,
    emoji: "🥗",
    title: "Hair Growth Diet",
    desc: "Foods rich in biotin, iron, and omega-3s that directly fuel follicle health.",
    tag: "Nutrition",
  },
  {
    icon: <Scale size={28} />,
    emoji: "⚖",
    title: "Hormonal Hair Loss",
    desc: "Understanding DHT, thyroid, and hormonal cycles that affect your hair.",
    tag: "Deep Dive",
  },
];

function Guides() {
  return (
    <section
      id="guides"
      className="py-20"
      style={{ backgroundColor: "oklch(0.95 0.04 148 / 0.4)" }}
    >
      <div className="section-max">
        <div className="fade-in-up text-center mb-12">
          <span
            className="inline-block text-xs font-semibold tracking-widest uppercase mb-4"
            style={{ color: "oklch(0.42 0.13 145)" }}
          >
            Free Resources
          </span>
          <h2
            className="font-serif text-3xl sm:text-4xl font-semibold"
            style={{ color: "oklch(0.36 0.12 145)" }}
          >
            Guides
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {guidesData.map((g, i) => (
            <motion.div
              key={g.title}
              className="fade-in-up leaf-card cursor-pointer"
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 300 }}
              data-ocid={`guides.item.${i + 1}`}
            >
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center text-xl mb-4"
                style={{ backgroundColor: "oklch(0.88 0.06 148)" }}
              >
                {g.emoji}
              </div>
              <span
                className="inline-block text-xs font-semibold px-2.5 py-0.5 rounded-full mb-3"
                style={{
                  backgroundColor: "oklch(0.92 0.05 148)",
                  color: "oklch(0.42 0.13 145)",
                }}
              >
                {g.tag}
              </span>
              <h3
                className="font-serif text-lg font-semibold mb-2"
                style={{ color: "oklch(0.32 0.1 145)" }}
              >
                {g.title}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "oklch(0.45 0.05 145)" }}
              >
                {g.desc}
              </p>
              <div
                className="flex items-center gap-1 text-xs font-semibold mt-4"
                style={{ color: "oklch(0.42 0.13 145)" }}
              >
                Read Guide <ChevronRight size={14} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Before / After ──────────────────────────────────────────────────────────
function BeforeAfter() {
  const steps = [
    {
      emoji: "❌",
      title: "Before",
      points: [
        "Excessive hair fall",
        "Weak, brittle roots",
        "Scalp inflammation",
      ],
      bg: "oklch(0.95 0.02 30)",
      border: "oklch(0.88 0.04 30)",
    },
    {
      emoji: "➡️",
      title: "The Method",
      points: [
        "Consistent daily routine",
        "Targeted nutrition plan",
        "Clinically proven products",
      ],
      bg: "oklch(0.94 0.04 148)",
      border: "oklch(0.85 0.07 148)",
    },
    {
      emoji: "✅",
      title: "After",
      points: [
        "Strong, healthy hair",
        "Visible regrowth",
        "Confident, glowing scalp",
      ],
      bg: "oklch(0.93 0.05 148)",
      border: "oklch(0.8 0.09 148)",
    },
  ];

  return (
    <section id="results" className="py-20">
      <div className="section-max">
        <div className="fade-in-up text-center mb-12">
          <h2
            className="font-serif text-3xl sm:text-4xl font-semibold"
            style={{ color: "oklch(0.36 0.12 145)" }}
          >
            Results You Can Expect
          </h2>
          <p
            className="mt-3 text-base max-w-lg mx-auto"
            style={{ color: "oklch(0.45 0.05 145)" }}
          >
            Most users see a measurable reduction in hair fall within 6–8 weeks.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-6 items-center">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              className="fade-in-up rounded-2xl p-7 text-center border-2"
              style={{ backgroundColor: s.bg, borderColor: s.border }}
              initial={{ opacity: 0, x: i === 1 ? 0 : i === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              data-ocid={`results.item.${i + 1}`}
            >
              <div className="text-4xl mb-3">{s.emoji}</div>
              <h3
                className="font-serif text-xl font-semibold mb-4"
                style={{ color: "oklch(0.32 0.1 145)" }}
              >
                {s.title}
              </h3>
              <ul className="space-y-2">
                {s.points.map((p) => (
                  <li
                    key={p}
                    className="text-sm"
                    style={{ color: "oklch(0.38 0.07 145)" }}
                  >
                    {p}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Featured Blogs ───────────────────────────────────────────────────────────
const blogData = [
  {
    title: "7 Haircare Mistakes You're Probably Making",
    excerpt:
      "From over-washing to skipping conditioner — discover the habits silently damaging your hair every day.",
    tag: "Common Mistakes",
    read: "5 min read",
    emoji: "💡",
  },
  {
    title: "Best Diet for Hair Growth in 2026",
    excerpt:
      "Iron, biotin, zinc, and omega-3s: the exact nutrients your follicles need and the foods packed with them.",
    tag: "Nutrition",
    read: "7 min read",
    emoji: "🥗",
  },
  {
    title: "Caffeine Shampoo: Truth vs. Hype",
    excerpt:
      "Caffeine can stimulate follicles, but only under the right conditions. Here's what the research actually says.",
    tag: "Science",
    read: "6 min read",
    emoji: "☕",
  },
];

function FeaturedBlogs() {
  return (
    <section
      id="blog"
      className="py-20"
      style={{ backgroundColor: "oklch(0.95 0.04 148 / 0.3)" }}
    >
      <div className="section-max">
        <div className="fade-in-up text-center mb-12">
          <span
            className="inline-block text-xs font-semibold tracking-widest uppercase mb-4"
            style={{ color: "oklch(0.42 0.13 145)" }}
          >
            From the Blog
          </span>
          <h2
            className="font-serif text-3xl sm:text-4xl font-semibold"
            style={{ color: "oklch(0.36 0.12 145)" }}
          >
            Featured Blogs
          </h2>
        </div>

        <div className="grid sm:grid-cols-3 gap-6">
          {blogData.map((b, i) => (
            <motion.article
              key={b.title}
              className="fade-in-up leaf-card flex flex-col cursor-pointer"
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 300 }}
              data-ocid={`blog.item.${i + 1}`}
            >
              <div
                className="w-full h-28 rounded-xl flex items-center justify-center text-5xl mb-5"
                style={{ backgroundColor: "oklch(0.92 0.05 148)" }}
              >
                {b.emoji}
              </div>
              <span
                className="inline-block self-start text-xs font-semibold px-2.5 py-0.5 rounded-full mb-3"
                style={{
                  backgroundColor: "oklch(0.88 0.06 148)",
                  color: "oklch(0.36 0.12 145)",
                }}
              >
                {b.tag}
              </span>
              <h3
                className="font-serif text-lg font-semibold mb-2 flex-1"
                style={{ color: "oklch(0.32 0.1 145)" }}
              >
                {b.title}
              </h3>
              <p
                className="text-sm leading-relaxed mb-4"
                style={{ color: "oklch(0.45 0.05 145)" }}
              >
                {b.excerpt}
              </p>
              <div
                className="flex items-center justify-between text-xs"
                style={{ color: "oklch(0.5 0.05 145)" }}
              >
                <span>{b.read}</span>
                <span
                  className="flex items-center gap-1 font-semibold"
                  style={{ color: "oklch(0.42 0.13 145)" }}
                >
                  Read more <ChevronRight size={13} />
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Email Capture ────────────────────────────────────────────────────────────
function EmailCapture() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !email.includes("@")) {
      toast.error("Please enter a valid email address.");
      return;
    }
    setSent(true);
    toast.success("Your free plan is on its way! Check your inbox.");
    setEmail("");
  };

  return (
    <section id="email" className="py-20">
      <div className="section-max">
        <motion.div
          className="fade-in-up rounded-3xl py-14 px-8 text-center"
          style={{ backgroundColor: "oklch(0.92 0.06 148)" }}
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-4xl mb-4">📬</div>
          <h2
            className="font-serif text-3xl sm:text-4xl font-semibold mb-3"
            style={{ color: "oklch(0.32 0.1 145)" }}
          >
            Get Your Free Hair Recovery Plan
          </h2>
          <p
            className="text-base mb-8 max-w-md mx-auto"
            style={{ color: "oklch(0.42 0.08 145)" }}
          >
            Enter your email to receive a step-by-step routine — completely
            free.
          </p>

          {sent ? (
            <div
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold"
              style={{
                backgroundColor: "oklch(0.42 0.13 145)",
                color: "white",
              }}
              data-ocid="email.success_state"
            >
              ✅ Plan sent! Check your inbox.
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
              data-ocid="email.panel"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="flex-1 px-5 py-3 rounded-full border-2 text-sm outline-none focus:ring-2"
                style={{
                  borderColor: "oklch(0.8 0.08 148)",
                  backgroundColor: "oklch(1 0 0 / 0.85)",
                  color: "oklch(0.22 0.06 145)",
                }}
                data-ocid="email.input"
              />
              <button
                type="submit"
                className="btn-pill whitespace-nowrap"
                data-ocid="email.submit_button"
              >
                Get Free Plan
              </button>
            </form>
          )}

          <p className="mt-5 text-xs" style={{ color: "oklch(0.48 0.07 145)" }}>
            No spam, ever. Unsubscribe anytime.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

// ── Recommended Products ─────────────────────────────────────────────────────
const productData = [
  {
    emoji: "🧴",
    name: "Mild Sulfate-Free Shampoo",
    benefit:
      "Gently cleanses without stripping natural oils — ideal for daily use.",
    price: "$18",
  },
  {
    emoji: "✨",
    name: "Growth-Boost Hair Serum",
    benefit:
      "Peptides + caffeine complex to stimulate dormant follicles and reduce shedding.",
    price: "$32",
  },
  {
    emoji: "💊",
    name: "Biotin + Collagen Complex",
    benefit:
      "Clinician-formulated supplement supporting keratin production from within.",
    price: "$24",
  },
];

function Products() {
  return (
    <section
      id="products"
      className="py-20"
      style={{ backgroundColor: "oklch(0.95 0.04 148 / 0.25)" }}
    >
      <div className="section-max">
        <div className="fade-in-up text-center mb-12">
          <span
            className="inline-block text-xs font-semibold tracking-widest uppercase mb-4"
            style={{ color: "oklch(0.42 0.13 145)" }}
          >
            Doctor-Recommended
          </span>
          <h2
            className="font-serif text-3xl sm:text-4xl font-semibold"
            style={{ color: "oklch(0.36 0.12 145)" }}
          >
            Recommended Products
          </h2>
        </div>

        <div className="grid sm:grid-cols-3 gap-6">
          {productData.map((p, i) => (
            <motion.div
              key={p.name}
              className="fade-in-up leaf-card flex flex-col text-center"
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 300 }}
              data-ocid={`products.item.${i + 1}`}
            >
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-5"
                style={{ backgroundColor: "oklch(0.9 0.06 148)" }}
              >
                {p.emoji}
              </div>
              <h3
                className="font-serif text-lg font-semibold mb-2"
                style={{ color: "oklch(0.32 0.1 145)" }}
              >
                {p.name}
              </h3>
              <p
                className="text-sm leading-relaxed mb-5 flex-1"
                style={{ color: "oklch(0.45 0.05 145)" }}
              >
                {p.benefit}
              </p>
              <div className="flex items-center justify-between">
                <span
                  className="font-semibold text-lg font-serif"
                  style={{ color: "oklch(0.42 0.13 145)" }}
                >
                  {p.price}
                </span>
                <button
                  type="button"
                  className="btn-pill text-sm px-5 py-2.5"
                  data-ocid={`products.item.${i + 1}.button`}
                >
                  Shop Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Testimonials ─────────────────────────────────────────────────────────────
const testimonials = [
  {
    name: "Priya S.",
    text: "After 8 weeks on the Root Recovery plan, I genuinely see new growth along my hairline. I wish I'd found this sooner.",
    stars: 5,
    tag: "Hair Fall Plan",
  },
  {
    name: "Marcus T.",
    text: "The diet guide changed everything. I had no idea nutrition was so directly tied to my hair thinning. Down 70% in shedding.",
    stars: 5,
    tag: "Hair Growth Diet",
  },
  {
    name: "Anika R.",
    text: "Super clear, no-fluff advice. The weekly routine cards are something I actually stick to. My stylist noticed the difference.",
    stars: 5,
    tag: "Weekly Routine",
  },
];

function Testimonials() {
  const starIndices = [1, 2, 3, 4, 5];
  return (
    <section id="testimonials" className="py-20">
      <div className="section-max">
        <div className="fade-in-up text-center mb-12">
          <h2
            className="font-serif text-3xl sm:text-4xl font-semibold"
            style={{ color: "oklch(0.36 0.12 145)" }}
          >
            What People Are Saying
          </h2>
        </div>
        <div className="grid sm:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              className="fade-in-up leaf-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              data-ocid={`testimonials.item.${i + 1}`}
            >
              <div className="flex gap-1 mb-3">
                {starIndices.slice(0, t.stars).map((n) => (
                  <Star
                    key={n}
                    size={14}
                    fill="oklch(0.72 0.18 85)"
                    style={{ color: "oklch(0.72 0.18 85)" }}
                  />
                ))}
              </div>
              <p
                className="text-sm leading-relaxed mb-5 italic"
                style={{ color: "oklch(0.38 0.06 145)" }}
              >
                "{t.text}"
              </p>
              <div className="flex items-center justify-between">
                <span
                  className="font-semibold text-sm"
                  style={{ color: "oklch(0.36 0.12 145)" }}
                >
                  {t.name}
                </span>
                <span
                  className="text-xs px-2.5 py-0.5 rounded-full"
                  style={{
                    backgroundColor: "oklch(0.9 0.05 148)",
                    color: "oklch(0.42 0.12 145)",
                  }}
                >
                  {t.tag}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Final CTA ────────────────────────────────────────────────────────────────
function FinalCTA() {
  return (
    <section
      className="py-24 text-center"
      style={{
        background:
          "linear-gradient(135deg, oklch(0.42 0.13 145), oklch(0.36 0.12 145))",
      }}
    >
      <div className="section-max">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-5xl mb-5">🌱</div>
          <h2
            className="font-serif text-3xl sm:text-4xl font-bold mb-4"
            style={{ color: "white" }}
          >
            Start your hair recovery journey today
          </h2>
          <p
            className="text-base mb-10 max-w-md mx-auto"
            style={{ color: "oklch(0.88 0.06 148)" }}
          >
            Thousands of people have already reclaimed healthier, fuller hair.
            Your turn starts now.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              type="button"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold text-base transition-all duration-200 hover:scale-105"
              style={{
                backgroundColor: "white",
                color: "oklch(0.36 0.12 145)",
              }}
              onClick={() =>
                document
                  .querySelector("#email")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              data-ocid="cta.primary_button"
            >
              Get Free Plan <ArrowRight size={16} />
            </button>
            <button
              type="button"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold text-base border-2 transition-all duration-200 hover:bg-white/10"
              style={{ borderColor: "oklch(0.75 0.08 145)", color: "white" }}
              onClick={() =>
                document
                  .querySelector("#products")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              data-ocid="cta.secondary_button"
            >
              Explore Now
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ── Footer ───────────────────────────────────────────────────────────────────
function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";
  return (
    <footer
      className="py-10 text-center"
      style={{ backgroundColor: "oklch(0.92 0.05 148)" }}
    >
      <div className="section-max">
        <div
          className="font-serif text-lg font-bold mb-2"
          style={{ color: "oklch(0.36 0.12 145)" }}
        >
          🌿 Root Recovery
        </div>
        <p className="text-xs mb-4" style={{ color: "oklch(0.48 0.07 145)" }}>
          Science-based haircare for real results.
        </p>
        <p className="text-xs" style={{ color: "oklch(0.5 0.06 145)" }}>
          © {year} Root Recovery. Built with ♥ using{" "}
          <a
            href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:opacity-80"
            style={{ color: "oklch(0.42 0.12 145)" }}
          >
            caffeine.ai
          </a>
        </p>
      </div>
    </footer>
  );
}

// ── App ──────────────────────────────────────────────────────────────────────
export default function App() {
  useScrollReveal();

  return (
    <div className="min-h-screen">
      <Toaster />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Guides />
        <BeforeAfter />
        <FeaturedBlogs />
        <EmailCapture />
        <Products />
        <Testimonials />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

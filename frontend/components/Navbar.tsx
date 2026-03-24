import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Problem", href: "#problem" },
    { label: "Solution", href: "#solution" },
    { label: "Authority", href: "#authority" },
    { label: "Get PDF", href: "#cta" },
  ];

  const handleMobileCTA = () => {
    setMenuOpen(false);
    document.getElementById("cta")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "shadow-sm" : ""
      }`}
      style={{
        backgroundColor: "oklch(1 0 0 / 0.97)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid oklch(0.92 0 0)",
      }}
    >
      <div className="section-container">
        <nav className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/#" className="flex items-center gap-2" data-ocid="nav.link">
            <span
              className="w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-bold"
              style={{ backgroundColor: "oklch(var(--primary))" }}
            >
              R
            </span>
            <span
              className="font-serif text-lg font-normal tracking-tight"
              style={{ color: "oklch(0.32 0.1 148)" }}
            >
              Root Recovery
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {links.slice(0, 3).map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium transition-colors duration-200 hover:text-primary"
                style={{ color: "oklch(0.45 0 0)" }}
                data-ocid="nav.link"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#cta"
              className="btn-primary text-sm"
              data-ocid="nav.primary_button"
            >
              Get Free Plan
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            className="md:hidden p-2 rounded-md"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
            data-ocid="nav.toggle"
          >
            {menuOpen ? (
              <X
                className="w-5 h-5"
                style={{ color: "oklch(var(--foreground))" }}
              />
            ) : (
              <Menu
                className="w-5 h-5"
                style={{ color: "oklch(var(--foreground))" }}
              />
            )}
          </button>
        </nav>

        {/* Mobile menu */}
        {menuOpen && (
          <div
            className="md:hidden pb-4 flex flex-col gap-1"
            style={{ borderTop: "1px solid oklch(0.93 0 0)" }}
          >
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="py-3 px-1 text-sm font-medium"
                style={{ color: "oklch(0.35 0 0)" }}
                onClick={() => setMenuOpen(false)}
                data-ocid="nav.link"
              >
                {link.label}
              </a>
            ))}
            <button
              type="button"
              className="btn-primary mt-2 text-sm"
              onClick={handleMobileCTA}
              data-ocid="nav.primary_button"
            >
              Get Free Plan
            </button>
          </div>
        )}
      </div>
    </header>
  );
}

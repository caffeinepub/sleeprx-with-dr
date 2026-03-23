import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { to: "/", label: "Home" },
    { to: "/hair-tips", label: "Hair Tips" },
    { to: "/products", label: "Products" },
    { to: "/about", label: "About" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-background ${
        scrolled ? "shadow-sm border-b border-border" : ""
      }`}
    >
      <div className="bg-primary text-primary-foreground text-center py-1.5 text-xs tracking-wide font-medium">
        ✓ Doctor-Reviewed Recommendations&nbsp;&nbsp;|&nbsp;&nbsp;
        <span className="opacity-80">Affiliate Disclosure</span>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        <NavLink to="/" className="flex flex-col" data-ocid="nav.link">
          <span className="font-serif text-xl font-semibold text-foreground leading-tight">
            Dr. Hair & Wellness
          </span>
          <span className="text-[10px] tracking-widest uppercase text-muted-foreground">
            Science-Based Haircare
          </span>
        </NavLink>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              data-ocid={`nav.${link.label.toLowerCase().replace(" ", "_")}.link`}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors duration-200 ${
                  isActive
                    ? "text-primary border-b-2 border-primary pb-0.5"
                    : "text-muted-foreground hover:text-foreground"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <button
          type="button"
          className="md:hidden p-2 text-foreground"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
          data-ocid="nav.toggle"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {mobileOpen && (
        <nav className="md:hidden bg-background border-t border-border px-4 pb-4 flex flex-col gap-3">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              onClick={() => setMobileOpen(false)}
              className={({ isActive }) =>
                `py-2 text-sm font-medium ${
                  isActive ? "text-primary" : "text-muted-foreground"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  );
}

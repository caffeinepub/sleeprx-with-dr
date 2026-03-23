import { SiInstagram, SiPinterest } from "react-icons/si";
import { Link } from "react-router-dom";

export default function Footer() {
  const year = new Date().getFullYear();
  const host =
    typeof window !== "undefined"
      ? encodeURIComponent(window.location.hostname)
      : "";

  return (
    <footer className="bg-secondary border-t border-border mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
              Dr. Hair & Wellness
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Science-based haircare and wellness advice curated by medical
              professionals.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">
              Pages
            </h4>
            <ul className="flex flex-col gap-2 text-sm">
              {[
                { to: "/", label: "Home" },
                { to: "/hair-tips", label: "Hair Tips" },
                { to: "/products", label: "Products" },
                { to: "/about", label: "About" },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">
              Follow Along
            </h4>
            <div className="flex gap-4">
              <a
                href="https://pinterest.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#E60023] hover:opacity-80 transition-opacity"
                aria-label="Pinterest"
                data-ocid="footer.link"
              >
                <SiPinterest size={22} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-primary transition-colors"
                aria-label="Instagram"
                data-ocid="footer.link"
              >
                <SiInstagram size={22} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-6 flex flex-col sm:flex-row justify-between gap-3 text-xs text-muted-foreground">
          <p>
            * This site contains affiliate links. We earn a small commission at
            no extra cost to you.
          </p>
          <p>
            &copy; {year}.{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${host}`}
              className="hover:text-foreground transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Built with love using caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

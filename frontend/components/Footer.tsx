export default function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";
  const caffeineUrl = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`;

  return (
    <footer
      className="py-10"
      style={{
        backgroundColor: "white",
        borderTop: "1px solid oklch(0.92 0 0)",
      }}
    >
      <div className="section-container">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <span
              className="w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold"
              style={{ backgroundColor: "oklch(var(--primary))" }}
            >
              R
            </span>
            <span
              className="font-serif text-base"
              style={{ color: "oklch(0.32 0.1 148)" }}
            >
              Root Recovery
            </span>
          </div>

          {/* Copyright */}
          <p className="text-xs" style={{ color: "oklch(0.55 0 0)" }}>
            © {year}. Built with ❤️ using{" "}
            <a
              href={caffeineUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:opacity-80 transition-opacity"
            >
              caffeine.ai
            </a>
          </p>
        </div>

        {/* Disclaimer */}
        <p
          className="mt-6 text-xs leading-relaxed text-center"
          style={{ color: "oklch(0.62 0 0)" }}
        >
          This website is for educational purposes only and does not constitute
          medical advice. Always consult a qualified dermatologist or healthcare
          professional for diagnosis and treatment of hair and scalp conditions.
        </p>
      </div>
    </footer>
  );
}

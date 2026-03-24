export default function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";
  const caffeineUrl = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`;
  const pinterestUrl = "https://pin.it/oqXuSLVie";

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

          {/* Pinterest + Copyright */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            {/* Follow on Pinterest button */}
            <a
              href={pinterestUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-full text-white text-xs font-semibold transition-opacity hover:opacity-90"
              style={{ backgroundColor: "#E60023" }}
            >
              <svg
                viewBox="0 0 24 24"
                className="w-4 h-4 fill-current"
                aria-label="Pinterest"
                role="img"
              >
                <title>Pinterest</title>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
              </svg>
              Follow on Pinterest
            </a>

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

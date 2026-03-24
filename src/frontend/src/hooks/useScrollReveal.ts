import { useEffect, useRef } from "react";

export function useScrollReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );

    const targets = el.querySelectorAll(".fade-up");
    if (el.classList.contains("fade-up")) observer.observe(el);
    for (const t of Array.from(targets)) observer.observe(t);

    return () => observer.disconnect();
  }, []);

  return ref;
}

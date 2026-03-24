import { useEffect } from "react";

export default function PinterestShareMeta() {
  useEffect(() => {
    const metaTags = [{ name: "pinterest-rich-pin", content: "true" }];

    const added: HTMLMetaElement[] = [];
    for (const { name, content } of metaTags) {
      const existing = document.querySelector(`meta[name="${name}"]`);
      if (!existing) {
        const meta = document.createElement("meta");
        meta.name = name;
        meta.content = content;
        document.head.appendChild(meta);
        added.push(meta);
      }
    }

    return () => {
      for (const m of added) {
        document.head.removeChild(m);
      }
    };
  }, []);

  return null;
}

import { Check, Copy, ShoppingBag } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

const products = [
  {
    name: "Batana Babe – The Original Batana Oil",
    image:
      "https://batanababe.com/cdn/shop/files/The_Original_Batana_Oil_By_Batana_Babe.jpg?v=1774318040",
    link: "https://batanababe.com/?ref=PRERNARATRE",
    description:
      "Sourced from the rainforests of Honduras, Batana Oil is a centuries-old secret for stronger, shinier hair. Rich in antioxidants and fatty acids, it deeply nourishes the scalp, reduces breakage, and promotes visible hair growth. Loved by thousands for its transformative results.",
    coupon: null,
  },
  {
    name: "CURLYSHYLL After Salon Care Shampoo",
    image: "https://m.media-amazon.com/images/I/61Y3n8kkM0L._SL1500_.jpg",
    link: "https://a.co/d/0f2XqxYH",
    description:
      "A professional-grade repair shampoo inspired by salon treatments in South Korea. Formulated with hydrolyzed keratin and amino acids to restore damaged, brittle hair back to its healthiest state. Ideal for chemically treated or heat-damaged hair.",
    coupon: null,
  },
  {
    name: "Bur Bur Botanical Hair Oil",
    image:
      "https://cdn.shopify.com/s/files/1/0588/9841/5771/files/GROWING_SEASON_FULL.jpg?v=1757024689",
    link: "https://burbur.com/?ref=nwwfyejn",
    description:
      "A powerhouse blend of burdock root, rosemary, and botanical extracts clinically shown to stimulate hair follicles and reduce shedding. This lightweight oil absorbs quickly, leaving hair nourished without grease. A cult favorite for thinning hair.",
    coupon: "PRERNARATRE",
  },
  {
    name: "Bur Bur Mermaid Brush",
    image: "https://burbur.com/cdn/shop/files/ESSENTAL_FRONT.jpg?v=1763063570",
    link: "https://burbur.com/products/the-mermaid-brush-essential-boar-bristle-brush",
    description:
      "Crafted with natural boar bristles, this brush gently distributes scalp oils from root to tip for natural shine and reduced frizz. The ergonomic design makes detangling effortless while stimulating blood circulation in the scalp. A must-have tool for healthy hair growth.",
    coupon: "PRERNARATRE",
  },
  {
    name: "Bur Bur Mermaid Bundle",
    image:
      "https://burbur.com/cdn/shop/files/MERMAID_BUNDLE_-_ESSENTIAL.jpg?v=1763061958",
    link: "https://burbur.com/products/the-mermaid-bundle?variant=47533842399387",
    description:
      "Get the ultimate hair growth duo: the Burdock Hair Oil and Mermaid Brush together at a bundled price. This pairing is designed to maximize scalp stimulation and nutrient delivery for faster, visibly thicker hair. Perfect as a gift or a self-care upgrade.",
    coupon: "PRERNARATRE",
  },
  {
    name: "Bur Bur Growing Season Nourishing Duo",
    image:
      "https://burbur.com/cdn/shop/files/SHAMPOO-CONDITIONER.jpg?v=1759247858",
    link: "https://burbur.com/products/growing-season-nourishing-duo",
    description:
      "A botanically rich shampoo and conditioner set crafted to cleanse gently while feeding your scalp the nutrients it needs to grow. Free from sulfates, silicones, and harsh chemicals, this duo supports a healthy hair growth cycle. Great for daily use on fine or thinning hair.",
    coupon: "PRERNARATRE",
  },
  {
    name: "Bur Bur Growing Season Nourish & Repair Trio",
    image:
      "https://cdn.shopify.com/s/files/1/0588/9841/5771/files/SHAMPOO-CONDITIONER-MASK.jpg?v=1763063235",
    link: "https://burbur.com/products/growing-season-nourish-repair-trio",
    description:
      "The complete three-step system: botanical shampoo, conditioner, and a deep repair mask to rebuild strength from within. Formulated with burdock root, oat, and plant proteins, it targets breakage and dullness at the source. Ideal for damaged, over-processed, or post-partum hair.",
    coupon: "PRERNARATRE",
  },
  {
    name: "Augustinus Bader The Hair Oil",
    image: "https://m.media-amazon.com/images/I/61xa3uv2U0L._SL1500_.jpg",
    link: "https://a.co/d/05aLSff4",
    description:
      "Developed by a world-renowned stem cell scientist, this ultra-luxury hair oil uses patented TFC8® technology to repair and restore hair at the cellular level. A few drops deliver instant softness, frizz control, and long-term strengthening benefits. Worth every penny for serious hair care.",
    coupon: null,
  },
  {
    name: "AROMATICA Root Enhancer Rosemary Spray",
    image: "https://m.media-amazon.com/images/I/61m0pyQ4GIL._SL1500_.jpg",
    link: "https://a.co/d/0jgbZd1A",
    description:
      "Powered by rosemary oil, caffeine, and biotin, this lightweight spray targets thinning at the root and boosts scalp circulation. Clinical studies show rosemary oil rivals minoxidil in hair growth support — without the side effects. Simply spray onto the scalp daily for best results.",
    coupon: null,
  },
  {
    name: "Cliganic Organic Jojoba Oil",
    image: "https://m.media-amazon.com/images/I/91hpwn6sScL._SL1500_.jpg",
    link: "https://a.co/d/00oIN18d",
    description:
      "Pure, cold-pressed jojoba oil that mimics the scalp's natural sebum for perfect moisture balance. It helps control dandruff, soothe an irritated scalp, and strengthen hair follicles from the base. An affordable, multi-use essential for any hair care routine.",
    coupon: null,
  },
  {
    name: "Cliganic Organic Argan Oil",
    image: "https://m.media-amazon.com/images/I/811GbftD2vL._SL1500_.jpg",
    link: "https://a.co/d/06dHWTtr",
    description:
      "Cold-pressed from Moroccan argan kernels, this liquid gold is packed with vitamin E and essential fatty acids. It tames frizz, adds brilliant shine, and deeply conditions dry or damaged strands. A versatile finishing oil that works on all hair types.",
    coupon: null,
  },
  {
    name: "Kate Blanc Cosmetics Castor Oil",
    image: "https://m.media-amazon.com/images/I/71-G98dVRsL._SL1500_.jpg",
    link: "https://a.co/d/07AfS7oF",
    description:
      "Organic, cold-pressed castor oil renowned for thickening eyebrows, lashes, and edges — and for promoting scalp health. Its high ricinoleic acid content fights scalp inflammation and helps anchor hair follicles for reduced shedding. A timeless remedy trusted by dermatologists worldwide.",
    coupon: null,
  },
  {
    name: "Nutrafol Women's Hair Growth Supplements",
    image: "https://m.media-amazon.com/images/I/71dW5hFGsOL._SL1500_.jpg",
    link: "https://a.co/d/09Rq6gHG",
    description:
      "Clinically proven and dermatologist recommended, Nutrafol's patented Synergen Complex targets the root causes of hair thinning — stress, hormones, and nutrition. Women aged 18-44 see visibly thicker, stronger hair in 3-6 months. The #1 dermatologist-recommended hair growth supplement.",
    coupon: null,
  },
  {
    name: "OLAPLEX No. 7 Bonding Oil",
    image: "https://m.media-amazon.com/images/I/71ACqtMWo2L._SL1500_.jpg",
    link: "https://amzn.in/d/0515PxKK",
    description:
      "A leave-in reparative styling oil that strengthens, hydrates, and speeds up blow-dry time with frizz-free results for up to 72 hours. A few drops on damp or dry hair transforms texture, adds shine, and eliminates flyaways. Suitable for all hair types and textures.",
    coupon: null,
  },
  {
    name: "The Ordinary Multi-Peptide Serum for Hair Density",
    image: "https://m.media-amazon.com/images/I/41-O01zSKqL._SL1080_.jpg",
    link: "https://amzn.in/d/0bFPEMCw",
    description:
      "A concentrated leave-in scalp serum powered by REDENSYL, Procapil, CAPIXYL, and high-solubility caffeine to visibly thicken and densify hair. Vegan, silicone-free, and cruelty-free — apply a few drops to the scalp at bedtime for progressive results. Backed by cutting-edge peptide science.",
    coupon: null,
  },
  {
    name: "Kérastase Genesis Anti-Hair Fall Serum",
    image: "https://m.media-amazon.com/images/I/51wiYd3k2wL._SL1500_.jpg",
    link: "https://amzn.in/d/0hDgBVpM",
    description:
      "Formulated with Aminexil 1.5%, ginger root, and caffeine, this professional scalp serum visibly reduces hair fall from the first use. Kérastase's Genesis range is loved by trichologists worldwide for targeting weakened roots and creating a stronger hair growth foundation. 90ml of pure efficacy.",
    coupon: null,
  },
  {
    name: "Olaplex No. 5 Bond Maintenance Conditioner (100ml)",
    image: "https://m.media-amazon.com/images/I/61wqz7GbPSL._SL1500_.jpg",
    link: "https://amzn.in/d/01mkQ08q",
    description:
      "The mini 100ml version of Olaplex's iconic bond-repair conditioner. Ideal for travel or trying for the first time. Restores moisture, prevents frizz and split ends, and leaves hair visibly stronger and healthier with each use. Color-safe and suitable for all hair types.",
    coupon: null,
  },
  {
    name: "Wooden Scalp Gua Sha Comb",
    image: "https://m.media-amazon.com/images/I/6178L8vpZvL._SL1500_.jpg",
    link: "https://amzn.in/d/08BG8PNv",
    description:
      "A multifunctional sandalwood Gua Sha comb designed to stimulate the scalp, boost circulation, and support hair growth. Use it during oil application to enhance absorption and promote relaxation. Suitable for men and women — a simple, natural tool for a healthier scalp.",
    coupon: null,
  },
];

function CouponBadge({ code }: { code: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex items-center gap-2 rounded-full bg-green-50 border border-green-200 px-3 py-1.5 text-sm">
      <span className="text-green-700 font-medium">
        Use code: <span className="font-bold tracking-wide">{code}</span> for
        15% off
      </span>
      <button
        onClick={handleCopy}
        className="ml-1 text-green-600 hover:text-green-800 transition-colors"
        aria-label="Copy coupon code"
        type="button"
        data-ocid="products.toggle"
      >
        {copied ? (
          <Check className="w-3.5 h-3.5" />
        ) : (
          <Copy className="w-3.5 h-3.5" />
        )}
      </button>
      {copied && (
        <span className="text-green-600 text-xs font-medium">Copied!</span>
      )}
    </div>
  );
}

function ProductCard({
  product,
  index,
}: { product: (typeof products)[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
      className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 border border-[#EDE8E0]"
      data-ocid={`products.item.${index + 1}`}
    >
      <div className="aspect-square overflow-hidden bg-[#F5F1EB]">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          crossOrigin="anonymous"
        />
      </div>
      <div className="flex flex-col flex-1 p-5 gap-3">
        <h3 className="font-semibold text-[#2C2C2C] text-base leading-snug">
          {product.name}
        </h3>
        <p className="text-[#6B6B6B] text-sm leading-relaxed flex-1">
          {product.description}
        </p>
        {product.coupon && <CouponBadge code={product.coupon} />}
        <a
          href={product.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 mt-1 rounded-full bg-[#3D6B4F] hover:bg-[#2F5540] text-white text-sm font-medium py-2.5 px-5 transition-colors duration-200"
          data-ocid={`products.primary_button.${index + 1}`}
        >
          <ShoppingBag className="w-4 h-4" />
          Buy Now
        </a>
      </div>
    </motion.div>
  );
}

export default function RecommendedProducts() {
  return (
    <section className="py-20 px-4 bg-[#FAF7F2]" data-ocid="products.section">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[#3D6B4F] mb-3">
            Dermatologist-Approved
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#2C2C2C] mb-4">
            Root Recovery Picks
          </h2>
          <p className="text-[#6B6B6B] max-w-xl mx-auto text-base leading-relaxed">
            Carefully selected products backed by science and trusted by hair
            specialists to nourish, strengthen, and restore your hair.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <ProductCard key={product.name} product={product} index={index} />
          ))}
        </div>

        <p className="mt-10 text-center text-xs text-[#9B9B9B] italic">
          * This page contains affiliate links. We may earn a small commission
          at no extra cost to you.
        </p>
      </div>
    </section>
  );
}

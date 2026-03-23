import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SiPinterest } from "react-icons/si";
import { Link } from "react-router-dom";

function ProductRecommendCard({
  title,
  products,
}: { title: string; products: string[] }) {
  return (
    <Card className="border-border bg-accent mt-6">
      <CardContent className="p-5">
        <h4 className="font-serif text-base font-semibold text-foreground mb-3">
          {title}
        </h4>
        <ul className="flex flex-col gap-2">
          {products.map((p, i) => (
            <li key={p} className="flex items-center justify-between text-sm">
              <span className="text-foreground">{p}</span>
              <Button
                size="sm"
                variant="outline"
                className="rounded-full text-xs h-7 px-3"
                data-ocid={`tips.product.item.${i + 1}.button`}
              >
                Buy →
              </Button>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}

const articles = [
  {
    id: 1,
    title: "Best Haircare Routine for Hair Fall",
    category: "Hair Care",
    readTime: "5 min read",
    image: undefined as string | undefined,
    content: (
      <div>
        <p className="text-muted-foreground leading-relaxed mb-6">
          Hair fall affects millions of people worldwide. The good news: a
          consistent, doctor-approved routine can make a measurable difference
          in as little as 8 weeks.
        </p>
        <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
          Step 1: Gentle Cleansing
        </h3>
        <p className="text-muted-foreground leading-relaxed mb-6">
          Use a sulfate-free shampoo 2–3 times per week. Over-washing strips the
          scalp of natural oils, leading to dryness and increased breakage.
          Focus shampoo on the scalp, not the ends.
        </p>
        <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
          Step 2: Deep Conditioning
        </h3>
        <p className="text-muted-foreground leading-relaxed mb-6">
          Apply a protein-rich conditioner weekly from mid-shaft to ends. Look
          for ingredients like keratin, hydrolyzed silk, or panthenol. Leave on
          for 5–10 minutes before rinsing.
        </p>
        <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
          Step 3: Scalp Massage with Oils
        </h3>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Spend 4 minutes massaging your scalp with a growth-stimulating oil
          before washing. Studies show regular scalp massage increases hair
          thickness over time.
        </p>
      </div>
    ),
    products: [
      "Rosehip Growth Oil",
      "Biotin Strengthening Shampoo",
      "Jojoba Scalp Oil",
    ],
    productTitle: "Top Picks for Hair Fall",
  },
  {
    id: 2,
    title: "5 Hair Mistakes You Must Avoid",
    category: "Tips",
    readTime: "4 min read",
    image: undefined as string | undefined,
    content: (
      <div>
        <p className="text-muted-foreground leading-relaxed mb-6">
          Even well-intentioned haircare routines can include habits that
          silently damage your strands. Here are the five most common mistakes
          dermatologists see:
        </p>
        {[
          {
            num: "01",
            title: "Brushing Wet Hair",
            desc: "Wet hair is up to 3x more elastic and prone to breakage. Always detangle with a wide-tooth comb, starting from ends and working upward.",
          },
          {
            num: "02",
            title: "Skipping Heat Protectant",
            desc: "Applying heat over 150°C without protection causes irreversible cuticle damage. Always apply a thermal protectant spray before any heat styling.",
          },
          {
            num: "03",
            title: "Washing with Hot Water",
            desc: "Hot water opens the cuticle, causing moisture loss and frizz. Rinse with cool or lukewarm water to seal the cuticle and add shine.",
          },
          {
            num: "04",
            title: "Over-conditioning the Scalp",
            desc: "Conditioner on the scalp clogs follicles and weighs hair down. Apply conditioner only from mid-length to ends.",
          },
          {
            num: "05",
            title: "Tight Hairstyles Daily",
            desc: "Constant tension from ponytails or braids causes traction alopecia, a form of hair loss that can become permanent. Alternate with loose styles.",
          },
        ].map((item) => (
          <div key={item.num} className="mb-6">
            <div className="flex gap-4 items-start">
              <span className="font-serif text-3xl font-semibold text-primary opacity-40 leading-none mt-1">
                {item.num}
              </span>
              <div>
                <h3 className="font-serif text-lg font-semibold text-foreground mb-1">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {item.desc}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    ),
    products: [
      "Hair Growth Serum",
      "Split End Repair Serum",
      "Argan Repair Oil",
    ],
    productTitle: "Repair & Protect Picks",
  },
  {
    id: 3,
    title: "Doctor-Approved Hair Growth Tips",
    category: "Growth",
    readTime: "6 min read",
    image: "/assets/generated/hair-growth-tips.dim_800x600.jpg",
    content: (
      <div>
        <p className="text-muted-foreground leading-relaxed mb-6">
          Hair grows approximately 6 inches per year, but many factors influence
          this rate. With the right nutrition and topical strategy, you can
          optimize your natural growth cycle.
        </p>
        <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
          Nutrition First
        </h3>
        <p className="text-muted-foreground leading-relaxed mb-6">
          Biotin, iron, zinc, and vitamins D and B12 are essential for the hair
          growth cycle. A deficiency in any of these can lead to increased
          shedding. Consider a comprehensive blood panel before starting
          supplements.
        </p>
        <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
          Topical Actives That Work
        </h3>
        <p className="text-muted-foreground leading-relaxed mb-6">
          Minoxidil (clinically proven), rosemary oil (comparable to 2%
          minoxidil in studies), and caffeine (promotes anagen phase) are the
          most evidence-backed topical options.
        </p>
        <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
          Protect the Growth You Have
        </h3>
        <p className="text-muted-foreground leading-relaxed mb-4">
          New growth is the most fragile. Minimize manipulation, sleep on a silk
          pillowcase, and trim split ends every 8–10 weeks to prevent breakage
          from travelling up the shaft.
        </p>
      </div>
    ),
    products: [
      "Hair Growth Serum",
      "Rosehip Growth Oil",
      "Biotin Strengthening Shampoo",
    ],
    productTitle: "Doctor's Growth Stack",
  },
];

export default function HairTipsPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16 fade-in-up">
          <Badge variant="secondary" className="mb-4 text-xs tracking-wide">
            Expert Articles
          </Badge>
          <h1 className="font-serif text-4xl md:text-5xl font-semibold text-foreground mb-4">
            Hair Tips
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Science-backed advice from medical professionals
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {articles.map((article, i) => (
            <Card
              key={article.id}
              className="border-border overflow-hidden fade-in-up flex flex-col"
              style={{ transitionDelay: `${i * 100}ms` }}
              data-ocid={`tips.item.${i + 1}`}
            >
              <div
                className="h-4"
                style={{
                  background: `oklch(${0.55 + i * 0.06} 0.07 ${140 + i * 15})`,
                }}
              />
              {article.image && (
                <div className="h-[200px] w-full overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              <CardContent className="p-6 flex-1 flex flex-col">
                <div className="flex items-center gap-2 mb-4">
                  <Badge variant="outline" className="text-xs">
                    {article.category}
                  </Badge>
                  <span className="text-xs text-muted-foreground">
                    {article.readTime}
                  </span>
                </div>
                <h2 className="font-serif text-2xl font-semibold text-foreground mb-5">
                  {article.title}
                </h2>
                <div className="flex-1">{article.content}</div>
                <ProductRecommendCard
                  title={article.productTitle}
                  products={article.products}
                />
                <div className="flex items-center justify-between mt-5 pt-4 border-t border-border">
                  <Link
                    to="/products"
                    className="text-sm font-medium text-primary hover:underline"
                    data-ocid={`tips.item.${i + 1}.link`}
                  >
                    Shop Recommendations →
                  </Link>
                  <a
                    href="https://pinterest.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-pinterest text-xs"
                    data-ocid={`tips.item.${i + 1}.button`}
                  >
                    <SiPinterest size={12} /> Save
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

type Product = {
  id: number;
  name: string;
  benefit: string;
  price: string;
  img: string;
  link?: string;
};

const hairOils: Product[] = [
  {
    id: 1,
    name: "Cliganic Organic Argan Oil",
    benefit:
      "100% pure cold pressed argan oil for hair, face & skin — restores shine and reduces frizz",
    price: "Shop on Amazon",
    img: "/assets/generated/product-argan-oil.dim_400x400.jpg",
    link: "https://a.co/d/0eCoP2Nu",
  },
  {
    id: 2,
    name: "Artnaturals Rosemary Castor Hair Oil",
    benefit:
      "Organic rosemary & castor oil with coconut & olive oil — promotes hair growth and nourishes dry ends",
    price: "Shop on Amazon",
    img: "/assets/generated/product-rosehip-oil.dim_400x400.jpg",
    link: "https://a.co/d/0chayb0F",
  },
  {
    id: 3,
    name: "Jojoba Scalp Oil",
    benefit: "Balances scalp moisture and reduces flakes",
    price: "$24",
    img: "/assets/generated/product-argan-oil.dim_400x400.jpg",
  },
];

const shampoos: Product[] = [
  {
    id: 4,
    name: "Biotin Strengthening Shampoo",
    benefit: "Strengthens and thickens fine hair",
    price: "$22",
    img: "/assets/generated/product-biotin-shampoo.dim_400x400.jpg",
  },
  {
    id: 5,
    name: "Scalp Refresh Shampoo",
    benefit: "Removes buildup, soothes irritation",
    price: "$19",
    img: "/assets/generated/product-biotin-shampoo.dim_400x400.jpg",
  },
  {
    id: 6,
    name: "Moisture Balance Shampoo",
    benefit: "Hydrates without weighing hair down",
    price: "$21",
    img: "/assets/generated/product-biotin-shampoo.dim_400x400.jpg",
  },
];

const serums: Product[] = [
  {
    id: 7,
    name: "Hair Growth Serum",
    benefit: "Clinically-inspired formula for thicker hair",
    price: "$45",
    img: "/assets/generated/product-growth-serum.dim_400x400.jpg",
  },
  {
    id: 8,
    name: "Split End Repair Serum",
    benefit: "Seals and protects damaged ends",
    price: "$38",
    img: "/assets/generated/product-growth-serum.dim_400x400.jpg",
  },
];

function ProductGrid({
  products,
  offset = 0,
}: { products: Product[]; offset?: number }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-6">
      {products.map((product, i) => (
        <Card
          key={product.id}
          className="card-hover border-border overflow-hidden fade-in-up"
          style={{ transitionDelay: `${i * 80}ms` }}
          data-ocid={`products.item.${offset + i + 1}`}
        >
          <img
            src={product.img}
            alt={product.name}
            className="w-full h-48 object-cover"
          />
          <CardContent className="p-4">
            <h3 className="font-serif text-sm font-semibold text-foreground mb-1 leading-snug">
              {product.name}
            </h3>
            <p className="text-xs text-muted-foreground mb-4 leading-relaxed">
              {product.benefit}
            </p>
            <div className="flex items-center justify-between">
              {!product.link && (
                <span className="text-sm font-semibold text-primary">
                  {product.price}
                </span>
              )}
              {product.link ? (
                <a
                  href={product.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full"
                  data-ocid={`products.item.${offset + i + 1}.button`}
                >
                  <Button
                    size="sm"
                    className="rounded-full text-xs h-7 px-3 w-full"
                  >
                    Buy Now
                  </Button>
                </a>
              ) : (
                <Button
                  size="sm"
                  className="rounded-full text-xs h-7 px-3"
                  data-ocid={`products.item.${offset + i + 1}.button`}
                >
                  Buy Now
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export default function ProductsPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14 fade-in-up">
          <Badge variant="secondary" className="mb-4 text-xs tracking-wide">
            Affiliate Picks
          </Badge>
          <h1 className="font-serif text-4xl md:text-5xl font-semibold text-foreground mb-4">
            Product Recommendations
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Doctor-curated picks for every hair concern. Affiliate links — we
            earn a small commission.
          </p>
        </div>

        <Tabs defaultValue="oils" data-ocid="products.tab">
          <TabsList className="mb-8 bg-secondary">
            <TabsTrigger value="oils" data-ocid="products.oils.tab">
              Hair Oils
            </TabsTrigger>
            <TabsTrigger value="shampoos" data-ocid="products.shampoos.tab">
              Shampoos
            </TabsTrigger>
            <TabsTrigger value="serums" data-ocid="products.serums.tab">
              Serums
            </TabsTrigger>
            <TabsTrigger value="all" data-ocid="products.all.tab">
              All Products
            </TabsTrigger>
          </TabsList>
          <TabsContent value="oils">
            <ProductGrid products={hairOils} />
          </TabsContent>
          <TabsContent value="shampoos">
            <ProductGrid products={shampoos} offset={3} />
          </TabsContent>
          <TabsContent value="serums">
            <ProductGrid products={serums} offset={6} />
          </TabsContent>
          <TabsContent value="all">
            <ProductGrid products={[...hairOils, ...shampoos, ...serums]} />
          </TabsContent>
        </Tabs>

        <p className="mt-12 text-xs text-muted-foreground text-center max-w-2xl mx-auto">
          * All product links on this page are affiliate links. Clicking "Buy
          Now" may earn us a small commission. This does not affect the price
          you pay.
        </p>
      </div>
    </div>
  );
}

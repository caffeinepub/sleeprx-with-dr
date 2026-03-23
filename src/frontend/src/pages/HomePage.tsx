import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SiPinterest } from "react-icons/si";
import { Link } from "react-router-dom";

const blogPosts = [
  {
    id: 1,
    title: "Best Haircare Routine for Hair Fall",
    excerpt:
      "Discover a doctor-approved daily routine that strengthens hair from root to tip. Learn which ingredients actually work.",
    category: "Hair Care",
    readTime: "5 min read",
    color: "bg-accent",
  },
  {
    id: 2,
    title: "5 Hair Mistakes You Must Avoid",
    excerpt:
      "Are you unknowingly damaging your hair? A dermatologist breaks down the most common mistakes and how to fix them.",
    category: "Tips",
    readTime: "4 min read",
    color: "bg-secondary",
  },
  {
    id: 3,
    title: "Doctor-Approved Hair Growth Tips",
    excerpt:
      "Science-backed strategies to stimulate growth, reduce shedding, and achieve visibly thicker, fuller hair.",
    category: "Growth",
    readTime: "6 min read",
    color: "bg-muted",
  },
];

const featuredProducts = [
  {
    id: 1,
    name: "Argan Repair Oil",
    benefit: "Restores shine and reduces frizz",
    price: "$28",
    img: "/assets/generated/product-argan-oil.dim_400x400.jpg",
  },
  {
    id: 2,
    name: "Rosehip Growth Oil",
    benefit: "Stimulates scalp circulation",
    price: "$32",
    img: "/assets/generated/product-rosehip-oil.dim_400x400.jpg",
  },
  {
    id: 3,
    name: "Biotin Shampoo",
    benefit: "Strengthens and thickens fine hair",
    price: "$22",
    img: "/assets/generated/product-biotin-shampoo.dim_400x400.jpg",
  },
  {
    id: 4,
    name: "Hair Growth Serum",
    benefit: "Clinically-inspired formula for thicker hair",
    price: "$45",
    img: "/assets/generated/product-growth-serum.dim_400x400.jpg",
  },
];

export default function HomePage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, oklch(0.97 0.010 90) 0%, oklch(0.93 0.025 120) 50%, oklch(0.96 0.015 80) 100%)",
          }}
        />
        <svg
          aria-hidden="true"
          className="absolute right-0 top-0 w-1/2 h-full opacity-10 pointer-events-none"
          viewBox="0 0 500 500"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <ellipse
            cx="350"
            cy="150"
            rx="180"
            ry="60"
            fill="oklch(0.55 0.08 148)"
            transform="rotate(-30 350 150)"
          />
          <ellipse
            cx="300"
            cy="280"
            rx="150"
            ry="50"
            fill="oklch(0.55 0.08 148)"
            transform="rotate(20 300 280)"
          />
          <ellipse
            cx="420"
            cy="350"
            rx="120"
            ry="40"
            fill="oklch(0.55 0.08 148)"
            transform="rotate(-10 420 350)"
          />
          <circle cx="250" cy="200" r="8" fill="oklch(0.55 0.08 148)" />
          <circle cx="380" cy="120" r="5" fill="oklch(0.55 0.08 148)" />
          <circle cx="450" cy="300" r="6" fill="oklch(0.55 0.08 148)" />
        </svg>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-24 md:py-32 text-center">
          <Badge variant="secondary" className="mb-6 text-xs tracking-wide">
            Doctor-Reviewed & Science-Backed
          </Badge>
          <h1 className="font-serif text-4xl md:text-6xl font-semibold text-foreground mb-6 leading-tight max-w-3xl mx-auto">
            Doctor-Approved Haircare & Wellness Tips
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            Science-based tips for healthy hair, better sleep, and overall
            wellness
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="rounded-full px-8"
              data-ocid="hero.primary_button"
            >
              <Link to="/hair-tips">Read Hair Tips</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-full px-8"
              data-ocid="hero.secondary_button"
            >
              <Link to="/products">Explore Products</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Blog Posts */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-20">
        <div className="text-center mb-12 fade-in-up">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-3">
            Featured Articles
          </h2>
          <p className="text-muted-foreground">
            Expert-written guides for healthier hair
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogPosts.map((post, i) => (
            <Card
              key={post.id}
              className="card-hover border-border overflow-hidden fade-in-up"
              style={{ transitionDelay: `${i * 100}ms` }}
              data-ocid={`blog.item.${i + 1}`}
            >
              <div
                className={`${post.color} h-48 flex items-center justify-center`}
              >
                <svg
                  aria-hidden="true"
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M24 4C24 4 12 16 12 26C12 32.627 17.373 38 24 38C30.627 38 36 32.627 36 26C36 16 24 4 24 4Z"
                    fill="oklch(0.55 0.08 148 / 0.4)"
                  />
                  <path
                    d="M24 14C24 14 18 20 18 26C18 29.314 20.686 32 24 32C27.314 32 30 29.314 30 26C30 20 24 14 24 14Z"
                    fill="oklch(0.55 0.08 148 / 0.6)"
                  />
                </svg>
              </div>
              <CardContent className="p-6">
                <Badge variant="outline" className="mb-3 text-xs">
                  {post.category}
                </Badge>
                <h3 className="font-serif text-lg font-semibold text-foreground mb-2 leading-snug">
                  {post.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">
                    {post.readTime}
                  </span>
                  <Link
                    to="/hair-tips"
                    className="text-sm font-medium text-primary hover:underline"
                    data-ocid={`blog.item.${i + 1}.link`}
                  >
                    Read More →
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Top Product Picks */}
      <section className="bg-secondary py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 fade-in-up">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-3">
              Top Product Picks
            </h2>
            <p className="text-muted-foreground">
              Doctor-recommended products for every hair type
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {featuredProducts.map((product, i) => (
              <Card
                key={product.id}
                className="card-hover border-border overflow-hidden fade-in-up"
                style={{ transitionDelay: `${i * 80}ms` }}
                data-ocid={`products.item.${i + 1}`}
              >
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-full h-44 object-cover"
                />
                <CardContent className="p-4">
                  <h3 className="font-serif text-sm font-semibold text-foreground mb-1">
                    {product.name}
                  </h3>
                  <p className="text-xs text-muted-foreground mb-3">
                    {product.benefit}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-primary">
                      {product.price}
                    </span>
                    <Button
                      size="sm"
                      className="rounded-full text-xs h-7 px-3"
                      data-ocid={`products.item.${i + 1}.button`}
                    >
                      Buy Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button
              asChild
              variant="outline"
              className="rounded-full px-8"
              data-ocid="products.primary_button"
            >
              <Link to="/products">View All Products</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* YouTube Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-20">
        <div className="text-center mb-10 fade-in-up">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-3">
            Watch & Learn
          </h2>
          <p className="text-muted-foreground">
            Doctor-explained haircare tips
          </p>
        </div>
        <div className="aspect-video max-w-3xl mx-auto rounded-2xl overflow-hidden border border-border shadow-sm fade-in-up">
          <iframe
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="Doctor Haircare Tips"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          />
        </div>
        <div className="text-center mt-8">
          <a
            href="https://pinterest.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-pinterest"
            data-ocid="youtube.link"
          >
            <SiPinterest size={16} /> Save to Pinterest
          </a>
        </div>
      </section>

      {/* Pinterest CTA */}
      <section
        className="py-16 text-center fade-in-up"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.96 0.010 90), oklch(0.92 0.025 130))",
        }}
      >
        <div className="max-w-xl mx-auto px-4">
          <SiPinterest size={36} className="text-[#E60023] mx-auto mb-4" />
          <h2 className="font-serif text-2xl font-semibold text-foreground mb-3">
            Follow us on Pinterest
          </h2>
          <p className="text-muted-foreground mb-6">
            Daily haircare inspiration, tips, and product picks
          </p>
          <a
            href="https://pinterest.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-pinterest"
            data-ocid="pinterest.link"
          >
            <SiPinterest size={16} /> Follow on Pinterest
          </a>
        </div>
      </section>
    </div>
  );
}

import { useState } from "react";
import Seo from "../components/Seo";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import ProductCard from "../components/ProductCard";
import WhatsAppButton from "../components/WhatsAppButton";
import MasonryGallery from "../components/MasonryGallery";
import { menu } from "../data/menu";

//images
import Hero from "../assets/images/home/hero.webp";

export default function Home() {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  const allProducts = [
    ...menu.bowls.map((p) => ({ ...p, category: "bowls" })),
    ...menu.smoothies.map((p) => ({ ...p, category: "smoothies" })),
    ...menu.salads.map((p) => ({ ...p, category: "salads" })),
  ];

  const filteredProducts = allProducts.filter((p) => {
    const matchesQuery = p.name.toLowerCase().includes(query.toLowerCase());

    const matchesCategory =
      activeCategory === "all" || p.category === activeCategory;

    return matchesQuery && matchesCategory;
  });

  return (
    <>
      <Seo
        title="Musk Mint – Eat Clean. Drink Fresh."
        description="Explore fresh fruit bowls, smoothies, salads and healthy meals at Musk Mint."
      />

      <main className="px-4 py-10 space-y-20">
        {/* HERO */}
        <section className="max-w-6xl mx-auto grid gap-10 md:grid-cols-2 items-center min-h-[70vh]">
          <div>
            <h1 className="text-4xl md:text-5xl font-semibold mb-4">
              Eat Clean.
              <br />
              Drink Fresh.
            </h1>

            <p className="text-muted text-lg mb-6 max-w-md">
              Fresh fruit bowls, smoothies, salads and healthy meals made daily.
            </p>

            <div className="flex gap-4">
              <Link to="/order">
                <Button variant="primary">Order Now</Button>
              </Link>

              <Link to="/menu">
                <Button variant="secondary">Explore Menu</Button>
              </Link>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative w-full h-[280px] sm:h-[360px] md:h-[480px] lg:h-[560px]">
            <img
              src={Hero}
              alt="Healthy Fruit Table"
              className="absolute inset-0 w-full h-full object-cover rounded-[32px]"
              loading="lazy"
            />
          </div>
        </section>

        {/* FEATURED PRODUCTS */}
        <section className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-semibold mb-6">People love these</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {allProducts.slice(0, 3).map((p) => (
              <ProductCard key={p.id} {...p} />
            ))}
          </div>
        </section>

        {/* SEARCH + FILTER */}
        <section className="max-w-6xl mx-auto space-y-4">
          <input
            type="text"
            placeholder="Search bowls, smoothies, salads…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20"
          />

          <div className="flex gap-2 flex-wrap">
            {[
              { key: "all", label: "All" },
              { key: "bowls", label: "🥣 Bowls" },
              { key: "smoothies", label: "🥤 Smoothies" },
              { key: "salads", label: "🥗 Salads" },
            ].map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`px-4 py-2 rounded-xl text-sm border transition
                  ${
                    activeCategory === cat.key
                      ? "bg-primary text-white border-primary"
                      : "bg-white text-gray-700 border-gray-200"
                  }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
            {filteredProducts.map((p) => (
              <ProductCard key={p.id} {...p} />
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <p className="text-muted">No items found.</p>
          )}
        </section>

        {/* GALLERY (MIXED SIZES) */}
        <section className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-semibold mb-6">Fresh & Healthy</h2>

          <MasonryGallery />
        </section>

        {/* CONTACT / BUSINESS INFO */}
        <section className="max-w-6xl mx-auto bg-white rounded-3xl shadow-soft p-8 grid gap-8 md:grid-cols-2">
          <div>
            <h3 className="text-xl font-semibold mb-3">Order from Musk Mint</h3>

            <p className="text-muted mb-4">
              Prepared fresh daily. Order directly on WhatsApp.
            </p>

            <WhatsAppButton message="Hi Musk Mint! I’d like to place an order." />
          </div>

          <div className="text-muted space-y-2">
            <p>
              <strong>Business Hours:</strong>
              <br />
              Monday – Sunday, 8:00 AM – 9:00 PM
            </p>

            <p>
              <strong>Service Area:</strong>
              <br />
              Selected locations. Message us to confirm.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}

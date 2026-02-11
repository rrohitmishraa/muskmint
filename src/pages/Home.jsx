import { useState } from "react";
import Seo from "../components/Seo";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import ProductCard from "../components/ProductCard";
import WhatsAppButton from "../components/WhatsAppButton";
import MasonryGallery from "../components/MasonryGallery";
import { menu } from "../data/menu";
import { motion } from "framer-motion";

//images
import HeroBowl from "../assets/images/home/hero-bwol.webp";

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

      <main className="space-y-10 md:space-y-14 lg:space-y-18 2xl:space-y-22">
        {/* HERO */}
        <section className="relative bg-primarySoft overflow-hidden min-h-screen flex items-center">
          {/* Background Text */}
          {/* Background Text */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.08 }}
              transition={{ duration: 0.8 }}
              className="w-full text-center font-extrabold text-primary leading-[0.8]"
            >
              <div className="text-[33vw]">MUSK</div>

              <div className="text-[39vw]">MINT</div>
            </motion.div>
          </div>

          {/* Foreground Content */}
          <div className="relative z-10 max-w-7xl 2xl:max-w-[1400px] mx-auto px-6 w-full flex flex-col items-center justify-center">
            {/* Product Image */}
            <motion.img
              src={HeroBowl}
              alt="Fresh healthy food"
              className="
        w-[260px]
        sm:w-[380px]
        md:w-[520px]
        lg:w-[680px]
        xl:w-[850px]
        rounded-3xl
        drop-shadow-2xl
      "
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              loading="lazy"
            />

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-8 md:mt-12 flex flex-wrap justify-center gap-4"
            >
              <Link to="/order">
                <Button variant="primary">Order Now</Button>
              </Link>

              <Link to="/menu">
                <Button variant="white">Explore Menu</Button>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* FEATURED PRODUCTS */}
        <section className="max-w-7xl 2xl:max-w-[1400px] mx-auto px-6 md:px-8">
          <h2 className="text-2xl font-semibold mb-6">People love these</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {allProducts.slice(0, 3).map((p) => (
              <ProductCard key={p.id} {...p} />
            ))}
          </div>
        </section>

        {/* SEARCH + FILTER */}
        <section className="max-w-7xl 2xl:max-w-[1400px] mx-auto px-6 md:px-8">
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
        <section className="max-w-7xl 2xl:max-w-[1400px] mx-auto px-6 md:px-8">
          <h2 className="text-2xl font-semibold mb-6">Fresh & Healthy</h2>

          <MasonryGallery />
        </section>

        {/* CONTACT / BUSINESS INFO */}
        <section className="px-6 md:px-8">
          <div className="max-w-7xl 2xl:max-w-[1400px] mx-auto relative">
            {/* Soft background layer */}
            <div className="absolute inset-0 bg-primarySoft rounded-3xl -z-10"></div>

            <div
              className="grid lg:grid-cols-2 gap-12 items-center 
                    p-10 md:p-14 rounded-3xl"
            >
              {/* LEFT SIDE – Main CTA */}
              <div className="space-y-6">
                <h3 className="text-3xl md:text-4xl font-semibold">
                  Order from Musk Mint
                </h3>

                <p className="text-muted text-base md:text-lg max-w-md">
                  Freshly prepared bowls, smoothies and salads — ready for you.
                  Order instantly on WhatsApp.
                </p>

                <WhatsAppButton message="Hi Musk Mint! I’d like to place an order." />
              </div>

              {/* RIGHT SIDE – Info Card */}
              <div className="bg-white rounded-2xl shadow-soft p-8 space-y-6">
                <div>
                  <p className="font-semibold text-gray-900 mb-1">
                    Business Hours
                  </p>
                  <p className="text-muted">
                    Monday – Sunday
                    <br />
                    8:00 AM – 9:00 PM
                  </p>
                </div>

                <div>
                  <p className="font-semibold text-gray-900 mb-1">
                    Service Area
                  </p>
                  <p className="text-muted">
                    Selected locations.
                    <br />
                    Message us to confirm availability.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

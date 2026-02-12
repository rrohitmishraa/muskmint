import { useState, useEffect } from "react";
import Seo from "../components/Seo";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import ProductCard from "../components/ProductCard";
import MasonryGallery from "../components/MasonryGallery";
import { menu } from "../data/menu";
import { motion } from "framer-motion";
import HeroBowlDesktop from "../assets/images/home/hero-bowl-with-text.webp";
import HeroBowlMobile from "../assets/images/home/hero-bowl.webp";

export default function Home() {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setIsDesktop(window.innerWidth >= 1024); // lg breakpoint
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);

    return () => window.removeEventListener("resize", checkScreen);
  }, []);

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

      <main className="space-y-10 md:space-y-10 lg:space-y-20">
        {/* HERO */}
        <section className="relative bg-gradient-to-b from-white to-white overflow-hidden min-h-[100vh] md:min-h-[85vh] lg:min-h-screen pt-11 flex items-center justify-center">
          {/* Massive Background Text */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.08 }}
              transition={{ duration: 1 }}
              className="font-extrabold text-primary"
            >
              {/* MOBILE – Vertical Split Left/Right */}
              <div className="md:hidden w-full px-6 flex justify-between leading-[0.85] font-extrabold text-primary">
                {/* MUSK – Left */}
                <div className="flex flex-col text-[130vw] text-left">
                  <span>M</span>
                  <span>M</span>
                </div>

                {/* MINT – Right */}
                <div className="flex flex-col text-[50vw] text-right"></div>
              </div>

              {/* DESKTOP – Horizontal Stacked */}
              <div className="hidden md:block w-full text-center leading-[0.8]">
                <div className="text-[33vw]">MUSK</div>
                <div className="text-[39vw]">MINT</div>
              </div>
            </motion.div>
          </div>

          {/* Foreground Content */}
          <div className="relative z-10 max-w-7xl 2xl:max-w-[1400px] mx-auto px-6 w-full flex flex-col items-center text-center">
            {/* Main Bowl */}
            <motion.img
              src={isDesktop ? HeroBowlDesktop : HeroBowlMobile}
              alt="Fresh healthy food"
              className="w-screen rounded-3xl drop-shadow-2xl"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              loading="eager"
            />

            {/* Buttons — reduced spacing from image */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-6 sm:mt-0 flex flex-wrap justify-center gap-4"
            >
              <Link to="/cart">
                <Button variant="primary">Order Now</Button>
              </Link>

              <Link to="/menu">
                <Button variant="white">Explore Menu</Button>
              </Link>
            </motion.div>

            {/* Main Slogan */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 0.9, y: 0 }}
              transition={{ delay: 0.6 }}
              className="
      mt-6
      text-[clamp(18px,2.5vw,36px)]
      font-semibold
      text-primary
      tracking-wide
    "
            >
              Eat Clean. Drink Fresh.
            </motion.p>

            {/* Supporting Line — more bottom spacing */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 0.8, y: 0 }}
              transition={{ delay: 0.7 }}
              className="
      mt-3
      max-w-2xl
      text-[clamp(14px,1.5vw,20px)]
      text-gray-600
      leading-relaxed
      mb-12
      md:mb-16
      lg:mb-20
    "
            >
              Fresh fruit bowls, smoothies, salads and healthy meals made daily.
            </motion.p>
          </div>

          {/* Bottom Fade into White */}
          <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-b from-transparent to-white pointer-events-none" />
        </section>

        {/* FEATURED PRODUCTS */}
        <section className="max-w-7xl 2xl:max-w-[1400px] mx-auto px-6 md:px-8">
          <h2 className="text-3xl font-semibold mb-8">People Love These</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {allProducts.slice(0, 3).map((p) => (
              <ProductCard key={p.id} {...p} />
            ))}
          </div>
        </section>

        {/* SEARCH + FILTER */}
        <section className="max-w-7xl 2xl:max-w-[1400px] mx-auto px-6 md:px-8 space-y-6">
          <input
            type="text"
            placeholder="Search bowls, smoothies, salads…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full border border-gray-200 rounded-xl px-5 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20"
          />

          <div className="flex gap-3 flex-wrap">
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
                      : "bg-white text-gray-700 border-gray-200 hover:border-primary"
                  }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map((p) => (
              <ProductCard key={p.id} {...p} />
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <p className="text-muted text-center">No items found.</p>
          )}
        </section>

        {/* GALLERY */}
        <section className="max-w-7xl 2xl:max-w-[1400px] mx-auto px-6 md:px-8">
          <h2 className="text-3xl font-semibold mb-8">Fresh & Healthy</h2>
          <MasonryGallery />
        </section>

        {/* CONTACT CTA */}
        <section className="px-6 md:px-8">
          <div className="max-w-7xl 2xl:max-w-[1400px] mx-auto relative">
            <div className="absolute inset-0 bg-primarySoft rounded-3xl -z-10"></div>

            <div className="grid lg:grid-cols-2 gap-12 items-center p-12 md:p-16 rounded-3xl">
              <div className="space-y-6">
                <h3 className="text-3xl md:text-4xl font-semibold">
                  Order from Musk Mint
                </h3>

                <p className="text-muted text-base md:text-lg max-w-md">
                  Fresh bowls, smoothies and salads — prepared daily. Order
                  instantly on WhatsApp.
                </p>
              </div>

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

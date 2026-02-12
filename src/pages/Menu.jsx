import { useState } from "react";
import Seo from "../components/Seo";
import ProductCard from "../components/ProductCard";
import { menu } from "../data/menu";

export default function Menu() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = Object.keys(menu);

  return (
    <>
      <Seo
        title="Menu – Musk Mint"
        description="Explore fresh fruit bowls, smoothies and salads."
      />

      <main className="min-h-screen px-4 pt-24 pb-20 bg-[#F8FAF9]">
        <div className="max-w-7xl 2xl:max-w-[1400px] mx-auto">
          <h1 className="text-3xl lg:text-4xl font-semibold mb-8">Menu</h1>

          {/* Search */}
          <input
            type="text"
            placeholder="Search items..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-xl border px-5 py-3 mb-6"
          />

          {/* Categories */}
          <div className="flex flex-wrap gap-3 mb-12">
            <button
              onClick={() => setActiveCategory("all")}
              className="px-4 py-2 rounded-full bg-primary text-white text-sm"
            >
              All
            </button>

            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className="px-4 py-2 rounded-full bg-white border text-sm capitalize"
              >
                {category}
              </button>
            ))}
          </div>

          {/* Products */}
          {categories.map((category) => {
            if (activeCategory !== "all" && activeCategory !== category)
              return null;

            const filteredItems = menu[category].filter((item) =>
              item.name.toLowerCase().includes(search.toLowerCase()),
            );

            if (filteredItems.length === 0) return null;

            return (
              <section key={category} className="mb-16">
                <h2 className="text-xl font-semibold mb-6 capitalize">
                  {category}
                </h2>

                <div
                  className="
                  grid 
                  gap-6 
                  md:grid-cols-2 
                  lg:grid-cols-3 
                  xl:grid-cols-4
                "
                >
                  {filteredItems.map((item) => (
                    <ProductCard key={item.id} {...item} />
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </main>
    </>
  );
}

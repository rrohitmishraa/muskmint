import { useState } from "react";
import Seo from "../components/Seo";
import ProductCard from "../components/ProductCard";
import { menu } from "../data/menu";

export default function Menu() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = ["salads", "smoothies"];
  // { key: "all", label: "All" },
  //             { key: "smoothies", label: "🥤 Smoothies" },
  //             { key: "salads", label: "🥗 Salads" },

  // Helper to filter items
  const filterItems = (items) =>
    items.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase()),
    );

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
            className="w-full rounded-xl border px-5 py-3 mb-8"
          />

          {/* Categories */}
          {/* Categories */}
          <div className="flex flex-wrap gap-3 mb-12">
            {/* ALL */}
            <button
              onClick={() => setActiveCategory("all")}
              className={`
      flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition
      ${
        activeCategory === "all"
          ? "bg-primary text-white shadow-md"
          : "bg-white border border-gray-200 hover:border-primary hover:text-primary"
      }
    `}
            >
              <span>✨</span>
              All
            </button>

            {/* SALADS */}
            <button
              onClick={() => setActiveCategory("salads")}
              className={`
      flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition
      ${
        activeCategory === "salads"
          ? "bg-primary text-white shadow-md"
          : "bg-white border border-gray-200 hover:border-primary hover:text-primary"
      }
    `}
            >
              <span>🥗</span>
              Salads
            </button>

            {/* SMOOTHIES */}
            <button
              onClick={() => setActiveCategory("smoothies")}
              className={`
      flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition
      ${
        activeCategory === "smoothies"
          ? "bg-primary text-white shadow-md"
          : "bg-white border border-gray-200 hover:border-primary hover:text-primary"
      }
    `}
            >
              <span>🥤</span>
              Smoothies
            </button>
          </div>

          {/* ========================= */}
          {/* SALADS SECTION */}
          {/* ========================= */}

          {(activeCategory === "all" || activeCategory === "salads") &&
            menu.salads &&
            filterItems(menu.salads).length > 0 && (
              <section className="mb-16">
                <h2 className="text-xl font-semibold mb-6 capitalize">
                  Salads
                </h2>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {filterItems(menu.salads).map((item) => (
                    <ProductCard key={item.id} {...item} />
                  ))}
                </div>
              </section>
            )}

          {/* ========================= */}
          {/* SMOOTHIES SECTION */}
          {/* ========================= */}

          {(activeCategory === "all" || activeCategory === "smoothies") &&
            menu.smoothies && (
              <>
                {/* Classic Fruit */}
                {filterItems(menu.smoothies.classicFruit || []).length > 0 && (
                  <section className="mb-16">
                    <h2 className="text-xl font-semibold mb-6">
                      Smoothies – Classic Fruit
                    </h2>

                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                      {filterItems(menu.smoothies.classicFruit || []).map(
                        (item) => (
                          <ProductCard key={item.id} {...item} />
                        ),
                      )}
                    </div>
                  </section>
                )}

                {/* Protein Packed */}
                {filterItems(menu.smoothies.proteinPacked || []).length > 0 && (
                  <section className="mb-16">
                    <h2 className="text-xl font-semibold mb-6">
                      Smoothies – Protein Packed
                    </h2>

                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                      {filterItems(menu.smoothies.proteinPacked || []).map(
                        (item) => (
                          <ProductCard key={item.id} {...item} />
                        ),
                      )}
                    </div>
                  </section>
                )}

                {/* Refreshers */}
                {filterItems(menu.smoothies.refreshers || []).length > 0 && (
                  <section className="mb-16">
                    <h2 className="text-xl font-semibold mb-6">
                      Smoothies – Refreshers
                    </h2>

                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                      {filterItems(menu.smoothies.refreshers || []).map(
                        (item) => (
                          <ProductCard key={item.id} {...item} />
                        ),
                      )}
                    </div>
                  </section>
                )}
              </>
            )}
        </div>
      </main>
    </>
  );
}

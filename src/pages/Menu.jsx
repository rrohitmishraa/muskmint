import { menu } from "../data/menu";
import MenuItem from "../components/MenuItem";
import Seo from "../components/Seo";

export default function Menu() {
  return (
    <>
      <Seo
        title="Menu – Musk Mint"
        description="Explore fresh fruit bowls, smoothies, salads and healthy meals at Musk Mint."
      />

      <main className="min-h-screen px-4 py-16">
        <div className="max-w-7xl 2xl:max-w-[1400px] mx-auto">
          <h1 className="text-3xl font-semibold mb-10">Menu</h1>

          <div className="grid gap-10 lg:grid-cols-3">
            {/* Bowls */}
            <section>
              <h2 className="text-lg font-semibold mb-4">Fruit Bowls</h2>
              <div className="bg-white rounded-2xl shadow-soft px-4">
                {menu.bowls.map((item) => (
                  <MenuItem key={item.id} {...item} />
                ))}
              </div>
            </section>

            {/* Smoothies */}
            <section>
              <h2 className="text-lg font-semibold mb-4">Smoothies</h2>
              <div className="bg-white rounded-2xl shadow-soft px-4">
                {menu.smoothies.map((item) => (
                  <MenuItem key={item.id} {...item} />
                ))}
              </div>
            </section>

            {/* Salads */}
            <section>
              <h2 className="text-lg font-semibold mb-4">Salads</h2>
              <div className="bg-white rounded-2xl shadow-soft px-4">
                {menu.salads.map((item) => (
                  <MenuItem key={item.id} {...item} />
                ))}
              </div>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}

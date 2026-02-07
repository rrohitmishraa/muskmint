import Card from "../components/Card";
import Seo from "../components/Seo";

export default function About() {
  return (
    <>
      <Seo
        title="About – Musk Mint"
        description="Learn about Musk Mint and our promise to serve clean, fresh and honest food."
      />

      <main className="min-h-screen px-4 py-16">
        <div className="max-w-3xl mx-auto space-y-6">
          <Card>
            <h1 className="text-2xl font-semibold mb-3">About Musk Mint</h1>

            <p className="text-muted">
              Musk Mint is built on a simple idea — clean, fresh food that
              people can trust every day.
            </p>
          </Card>

          <Card>
            <h2 className="text-lg font-semibold mb-2">What we do</h2>

            <p className="text-muted">
              We prepare fruit bowls, smoothies, salads, and beverages using
              fresh fruits and vegetables. No unnecessary additives. No
              shortcuts.
            </p>
          </Card>

          <Card>
            <h2 className="text-lg font-semibold mb-2">Our promise</h2>

            <p className="text-muted">
              Freshness, hygiene, and consistency guide everything we do.
            </p>

            <p className="mt-4 font-medium text-primary">
              Eat Clean. Drink Fresh.
            </p>
          </Card>
        </div>
      </main>
    </>
  );
}

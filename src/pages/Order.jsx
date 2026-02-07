import Card from "../components/Card";
import WhatsAppButton from "../components/WhatsAppButton";
import Seo from "../components/Seo";

export default function Order() {
  const message = "Hi Musk Mint! I’d like to place an order.";

  return (
    <>
      <Seo
        title="Order – Musk Mint"
        description="Order fresh fruit bowls and smoothies from Musk Mint via WhatsApp."
      />

      <main className="min-h-screen px-4 py-16">
        <div className="max-w-md mx-auto">
          <Card>
            <h1 className="text-2xl font-semibold mb-3">
              Order from Musk Mint
            </h1>

            <p className="text-muted mb-6">
              The fastest way to order is via WhatsApp. We’ll confirm
              availability and delivery.
            </p>

            <WhatsAppButton message={message} />
          </Card>
        </div>
      </main>
    </>
  );
}

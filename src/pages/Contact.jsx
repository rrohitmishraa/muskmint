import Card from "../components/Card";
import Seo from "../components/Seo";
import WhatsAppButton from "../components/WhatsAppButton";

export default function Contact() {
  const message =
    "Hi Musk Mint! I have a question / I’d like to place an order.";

  return (
    <>
      <Seo
        title="Contact – Musk Mint"
        description="Contact Musk Mint on WhatsApp for orders and queries."
      />

      <main className="min-h-screen px-4 py-16">
        <div className="max-w-3xl mx-auto space-y-6">
          <Card>
            <h1 className="text-2xl font-semibold mb-3">Contact Musk Mint</h1>

            <p className="text-muted">
              Reach us on WhatsApp for orders or questions.
            </p>
          </Card>

          <Card>
            <h2 className="text-lg font-semibold mb-2">WhatsApp</h2>

            <WhatsAppButton message={message} />
          </Card>

          <Card>
            <h2 className="text-lg font-semibold mb-2">Business Hours</h2>

            <p className="text-muted">
              Monday – Sunday
              <br />
              8:00 AM – 9:00 PM
            </p>
          </Card>
        </div>
      </main>
    </>
  );
}

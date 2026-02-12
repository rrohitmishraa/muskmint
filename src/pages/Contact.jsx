import Card from "../components/Card";
import Seo from "../components/Seo";

export default function Contact() {
  const phone = "918809999997";
  const encoded = encodeURIComponent("Hi Musk Mint! I have a question.");
  const url = `https://wa.me/${phone}?text=${encoded}`;

  return (
    <>
      <Seo
        title="Contact – Musk Mint"
        description="Get in touch with Musk Mint for queries and support."
      />

      <main className="min-h-screen bg-[#F8FAF9] pt-28 pb-24 px-6">
        <div className="max-w-7xl 2xl:max-w-[1400px] mx-auto">
          {/* Header Section */}
          <div className="mb-14 max-w-2xl">
            <h1 className="text-3xl md:text-4xl font-semibold mb-4">
              Let’s Talk
            </h1>
            <p className="text-gray-600 text-lg">
              Whether you have questions about our bowls, smoothies, delivery,
              or anything else — we’re here to help.
            </p>
          </div>

          {/* Desktop Grid Layout */}
          <div className="grid lg:grid-cols-3 gap-10">
            {/* LEFT: Main Contact Card */}
            <div className="lg:col-span-2">
              <Card>
                <h2 className="text-xl font-semibold mb-4">WhatsApp Support</h2>

                <p className="text-gray-600 mb-8 max-w-md">
                  For quick responses, message us directly on WhatsApp. We
                  typically respond within minutes during business hours.
                </p>

                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-3 rounded-xl bg-primary text-white font-medium hover:opacity-90 active:scale-95 transition"
                >
                  Message on WhatsApp
                </a>
              </Card>
            </div>

            {/* RIGHT: Info Stack */}
            <div className="space-y-6">
              <Card>
                <h3 className="font-semibold mb-2">Business Hours</h3>
                <p className="text-gray-600">
                  Monday – Sunday
                  <br />
                  8:00 AM – 9:00 PM
                </p>
              </Card>

              <Card>
                <h3 className="font-semibold mb-2">Service Area</h3>
                <p className="text-gray-600">
                  Delivery available in selected locations.
                  <br />
                  Message us to confirm availability.
                </p>
              </Card>

              <Card>
                <h3 className="font-semibold mb-2">Response Time</h3>
                <p className="text-gray-600">
                  Most queries are answered within 10–20 minutes during working
                  hours.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

import Seo from "../components/Seo";

export default function Terms() {
  return (
    <>
      <Seo
        title="Terms & Conditions – Musk Mint"
        description="Review the terms and conditions for using Musk Mint services."
      />

      <main className="min-h-screen bg-[#F8FAF9] pt-28 pb-24 px-6">
        <div className="max-w-4xl mx-auto space-y-10">
          <h1 className="text-3xl md:text-4xl font-semibold">
            Terms & Conditions
          </h1>

          <p className="text-gray-600 leading-relaxed">
            These Terms & Conditions govern your use of the Musk Mint website
            and services. By placing an order or using our website, you agree to
            the terms outlined below.
          </p>

          {/* Section 1 */}
          <section className="space-y-3">
            <h2 className="text-xl font-semibold">1. Orders</h2>

            <p className="text-gray-600 leading-relaxed">
              All orders placed through Musk Mint are subject to availability
              and confirmation. We reserve the right to refuse or cancel any
              order if required.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Customers are responsible for providing accurate delivery and
              contact information.
            </p>
          </section>

          {/* Section 2 */}
          <section className="space-y-3">
            <h2 className="text-xl font-semibold">2. Pricing & Payments</h2>

            <p className="text-gray-600 leading-relaxed">
              All prices are listed in Indian Rupees (INR). Prices may change
              without prior notice.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Payments are currently processed via QR code or other approved
              payment methods. Musk Mint does not store payment card
              information.
            </p>
          </section>

          {/* Section 3 */}
          <section className="space-y-3">
            <h2 className="text-xl font-semibold">
              3. Cancellations & Refunds
            </h2>

            <p className="text-gray-600 leading-relaxed">
              Due to the perishable nature of our products, cancellations may
              not be accepted once preparation has begun.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Refunds, if applicable, are issued at our discretion in cases of
              verified quality or service issues.
            </p>
          </section>

          {/* Section 4 */}
          <section className="space-y-3">
            <h2 className="text-xl font-semibold">4. Delivery</h2>

            <p className="text-gray-600 leading-relaxed">
              Delivery times are estimates and may vary due to traffic, weather,
              or operational factors.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Customers must ensure availability at the delivery location. Musk
              Mint is not responsible for delays caused by incorrect address
              details.
            </p>
          </section>

          {/* Section 5 */}
          <section className="space-y-3">
            <h2 className="text-xl font-semibold">
              5. Food Safety & Allergies
            </h2>

            <p className="text-gray-600 leading-relaxed">
              Our products may contain fruits, nuts, dairy, or other ingredients
              that could cause allergic reactions.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Customers are responsible for informing us of any allergies before
              placing an order.
            </p>
          </section>

          {/* Section 6 */}
          <section className="space-y-3">
            <h2 className="text-xl font-semibold">6. Website Use</h2>

            <p className="text-gray-600 leading-relaxed">
              Users agree not to misuse the website, attempt unauthorized
              access, or interfere with its normal operation.
            </p>
          </section>

          {/* Section 7 */}
          <section className="space-y-3">
            <h2 className="text-xl font-semibold">
              7. Limitation of Liability
            </h2>

            <p className="text-gray-600 leading-relaxed">
              Musk Mint shall not be liable for indirect, incidental, or
              consequential damages arising from the use of our services.
            </p>
          </section>

          {/* Section 8 */}
          <section className="space-y-3">
            <h2 className="text-xl font-semibold">8. Changes to Terms</h2>

            <p className="text-gray-600 leading-relaxed">
              We reserve the right to modify these Terms & Conditions at any
              time. Updated terms will be posted on this page.
            </p>
          </section>

          {/* Closing */}
          <div className="pt-8 border-t border-gray-200">
            <p className="text-gray-600">
              If you have questions regarding these Terms & Conditions, please
              contact Musk Mint directly.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}

import Seo from "../components/Seo";

export default function Privacy() {
  return (
    <>
      <Seo
        title="Privacy Policy – Musk Mint"
        description="Read how Musk Mint collects, uses, and protects your personal information."
      />

      <main className="min-h-screen bg-[#F8FAF9] pt-28 pb-24 px-6">
        <div className="max-w-4xl mx-auto space-y-10">
          <h1 className="text-3xl md:text-4xl font-semibold">Privacy Policy</h1>

          <p className="text-gray-600 leading-relaxed">
            At Musk Mint, your privacy matters to us. This Privacy Policy
            explains how we collect, use, and protect your information when you
            use our website or place an order with us.
          </p>

          {/* Section 1 */}
          <section className="space-y-3">
            <h2 className="text-xl font-semibold">1. Information We Collect</h2>

            <p className="text-gray-600 leading-relaxed">
              We may collect basic information such as your name, phone number,
              delivery details, and order information when you contact us or
              place an order.
            </p>

            <p className="text-gray-600 leading-relaxed">
              We do not currently collect payment card details. Payments made
              via QR code are processed by external payment providers.
            </p>
          </section>

          {/* Section 2 */}
          <section className="space-y-3">
            <h2 className="text-xl font-semibold">
              2. How We Use Your Information
            </h2>

            <p className="text-gray-600 leading-relaxed">
              Your information is used strictly for:
            </p>

            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Processing and confirming orders</li>
              <li>Responding to inquiries</li>
              <li>Improving our services</li>
              <li>Customer support and communication</li>
            </ul>

            <p className="text-gray-600 leading-relaxed">
              We do not sell, rent, or share your personal information with
              third parties for marketing purposes.
            </p>
          </section>

          {/* Section 3 */}
          <section className="space-y-3">
            <h2 className="text-xl font-semibold">
              3. Data Storage & Security
            </h2>

            <p className="text-gray-600 leading-relaxed">
              We take reasonable measures to protect your information from
              unauthorized access, misuse, or disclosure.
            </p>

            <p className="text-gray-600 leading-relaxed">
              At present, we do not store payment information. If payment
              processing is added in the future, it will be handled through
              secure, trusted payment gateways.
            </p>
          </section>

          {/* Section 4 */}
          <section className="space-y-3">
            <h2 className="text-xl font-semibold">4. Cookies & Tracking</h2>

            <p className="text-gray-600 leading-relaxed">
              We currently do not use cookies or tracking technologies. If we
              introduce analytics or tracking tools in the future, this policy
              will be updated accordingly.
            </p>
          </section>

          {/* Section 5 */}
          <section className="space-y-3">
            <h2 className="text-xl font-semibold">5. Your Rights</h2>

            <p className="text-gray-600 leading-relaxed">
              You may contact us at any time to request access to, correction
              of, or deletion of your personal information.
            </p>
          </section>

          {/* Section 6 */}
          <section className="space-y-3">
            <h2 className="text-xl font-semibold">6. Policy Updates</h2>

            <p className="text-gray-600 leading-relaxed">
              We may update this Privacy Policy from time to time to reflect
              operational or legal changes. Updates will be posted on this page.
            </p>
          </section>

          {/* Closing */}
          <div className="pt-8 border-t border-gray-200">
            <p className="text-gray-600">
              If you have any questions about this Privacy Policy, please
              contact Musk Mint directly.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}

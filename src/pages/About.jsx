import Seo from "../components/Seo";
import HeroBowl from "../assets/images/home/hero-bowl.webp";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const founderRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: founderRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-40, 40]);

  return (
    <>
      <Seo
        title="About – Musk Mint"
        description="Learn about Musk Mint and our promise to serve clean, fresh and honest food."
      />

      <main className="min-h-screen bg-[#F8FAF9] pt-28 pb-24 px-6">
        <div className="max-w-7xl 2xl:max-w-[1400px] mx-auto">
          {/* Hero Section */}
          <div className="max-w-3xl mb-16">
            <h1 className="text-3xl md:text-4xl font-semibold mb-6">
              About Musk Mint
            </h1>

            <p className="text-lg text-gray-600 leading-relaxed">
              Musk Mint was built on a simple belief — clean, fresh food should
              be accessible, consistent, and trustworthy every single day.
            </p>
          </div>

          {/* Two Column Story Section */}
          <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
            <div className="space-y-8">
              <div>
                <h2 className="text-xl font-semibold mb-3">What We Do</h2>
                <p className="text-gray-600 leading-relaxed">
                  We prepare fruit bowls, smoothies, salads, and beverages using
                  fresh fruits and vegetables. No unnecessary additives. No
                  shortcuts. Just honest ingredients prepared daily.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-3">Why It Matters</h2>
                <p className="text-gray-600 leading-relaxed">
                  In a world of processed food and artificial shortcuts, we
                  focus on simplicity. Fresh produce. Balanced combinations.
                  Food that fuels your day instead of slowing it down.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-3xl shadow-soft p-10 space-y-8">
              <div>
                <h3 className="text-lg font-semibold mb-2">Our Promise</h3>
                <p className="text-gray-600">
                  Freshness, hygiene, and consistency guide everything we do —
                  from sourcing to serving.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Our Approach</h3>
                <p className="text-gray-600">
                  We focus on clean preparation, careful handling, and
                  maintaining high standards across every bowl and smoothie.
                </p>
              </div>

              <div className="pt-6 border-t border-gray-100">
                <p className="text-2xl font-semibold text-primary">
                  Eat Clean. Drink Fresh.
                </p>
              </div>
            </div>
          </div>

          {/* Founder Section */}
          <div
            ref={founderRef}
            className="relative mb-24 overflow-hidden rounded-3xl shadow-soft bg-white"
          >
            <div className="grid lg:grid-cols-2 min-h-[500px]">
              {/* Founder Image FULL HEIGHT */}
              <motion.div style={{ y }} className="h-full">
                <img
                  src={HeroBowl}
                  alt="Founder of Musk Mint"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Founder Content */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
                className="p-12 flex flex-col justify-center space-y-6"
              >
                <h2 className="text-2xl md:text-3xl font-semibold">
                  Meet the Founder
                </h2>

                <p className="text-gray-600 leading-relaxed text-lg">
                  Musk Mint was started by someone who was tired of choosing
                  between “quick food” and “clean food.”
                </p>

                <p className="text-gray-600 leading-relaxed">
                  The goal wasn’t to build just another brand — it was to create
                  something consistent. Something people could rely on daily
                  without questioning what goes into their bowl.
                </p>

                <p className="text-gray-600 leading-relaxed">
                  That mindset still drives every decision today — from
                  ingredient sourcing to final serving.
                </p>

                <div className="pt-6 border-t border-gray-100">
                  <p className="text-primary font-medium text-lg">
                    Eat Clean. Drink Fresh.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Closing Statement */}
          <div className="max-w-3xl">
            <p className="text-gray-600 leading-relaxed">
              Musk Mint isn’t just about food. It’s about building healthier
              habits — one fresh bowl at a time.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}

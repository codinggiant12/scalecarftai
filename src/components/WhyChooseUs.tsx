import React from "react";
import { motion } from "framer-motion";

const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl font-bold mb-8">Why NeuralAgency?</h2>
          <div className="space-y-6">
            {[
              "Business-first AI approach",
              "Experienced AI Engineers",
              "Fast & scalable solutions",
              "Secure & future-ready systems",
            ].map((text, i) => (
              <motion.div
                key={i}
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: i * 0.2 }}
                className="flex items-center gap-4 text-slate-300"
              >
                <div className="w-2 h-2 rounded-full bg-purple-500" />
                {text}
              </motion.div>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="aspect-square bg-gradient-to-br from-purple-600/20 to-cyan-600/20 rounded-3xl border border-white/10 flex items-center justify-center overflow-hidden">
            {/* Replace with Lottie or Abstract Illustration */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="w-64 h-64 border-2 border-dashed border-purple-500/30 rounded-full flex items-center justify-center"
            >
              <div className="w-48 h-48 border-2 border-dashed border-cyan-500/30 rounded-full animate-pulse" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

import React, { useState } from "react";
import { motion } from "framer-motion";

const Contact: React.FC = () => {
  const [formState, setFormState] = useState<"idle" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("success");
  };

  return (
    <section
      id="contact"
      className="py-32 px-6  from-transparent to-purple-900/10"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto bg-[#0f172a]/60 backdrop-blur-xl border border-white/10 p-10 md:p-16 rounded-[3rem] shadow-2xl"
      >
        <h2 className="text-4xl font-bold mb-2 text-center tracking-tight">
          Let’s Build Something Intelligent.
        </h2>
        <p className="text-gray-400 text-center mb-12">
          Submit your details to initialize the discovery phase.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <input
                type="text"
                placeholder="Your Name"
                required
                className="w-full bg-white/5 border border-white/10 p-4 rounded-xl focus:border-purple-500 outline-none transition-all placeholder:text-gray-600 text-white"
              />
            </div>
            <div className="space-y-2">
              <input
                type="email"
                placeholder="Email Address"
                required
                className="w-full bg-white/5 border border-white/10 p-4 rounded-xl focus:border-purple-500 outline-none transition-all placeholder:text-gray-600 text-white"
              />
            </div>
          </div>
          <div className="space-y-2">
            <textarea
              rows={4}
              placeholder="Your Project Vision"
              className="w-full bg-white/5 border border-white/10 p-4 rounded-xl focus:border-purple-500 outline-none transition-all placeholder:text-gray-600 text-white resize-none"
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            disabled={formState === "success"}
            className={`w-full py-5 rounded-xl text-lg font-bold transition-all relative overflow-hidden group ${
              formState === "success"
                ? "bg-green-500 text-white"
                : "bg-white text-black hover:bg-gray-100"
            }`}
          >
            <span className="relative z-10">
              {formState === "success"
                ? "Success! Initializing..."
                : "Initialize Project"}
            </span>
            {formState === "idle" && (
              <div className="absolute top-0  w-full h-full  from-transparent via-black/5 to-transparent  transition-all duration-700" />
            )}
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
};

export default Contact;

import React from "react";
import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Discover",
    desc: "Analyzing data bottlenecks.",
    color: "border-b-purple-500",
  },
  {
    num: "02",
    title: "Prototype",
    desc: "Proof of Concept in 10 days.",
    color: "border-b-cyan-500",
  },
  {
    num: "03",
    title: "Build",
    desc: "Full-scale model training.",
    color: "border-b-blue-500",
  },
  {
    num: "04",
    title: "Launch",
    desc: "Ongoing optimization & scale.",
    color: "border-b-indigo-500",
  },
];

const Process: React.FC = () => {
  return (
    <section id="process" className="py-32 px-6">
      <div className="max-w-5xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">Our Methodology</h2>
        <div className="w-24 h-1 bg-purple-600 mx-auto rounded-full" />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-7xl mx-auto">
        {steps.map((step, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className={`p-8 rounded-3xl bg-[#0f172a]/60 border border-white/10 border-b-4 ${step.color} text-center`}
          >
            <div className="text-5xl font-black text-white/5 mb-4">
              {step.num}
            </div>
            <h4 className="font-bold mb-2">{step.title}</h4>
            <p className="text-xs text-gray-500">{step.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Process;

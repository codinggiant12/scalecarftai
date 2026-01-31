import React from "react";
import { motion } from "framer-motion";
import { LuBrainCircuit, LuBot, LuCode } from "react-icons/lu";

const serviceData = [
  {
    icon: <LuBrainCircuit />,
    title: "AI Consulting",
    desc: "Strategic roadmap development to identify where AI can maximize ROI.",
    color: "text-purple-400",
    bg: "bg-purple-600/20",
  },
  {
    icon: <LuBot />,
    title: "AI Automation",
    desc: "Custom LLMs and autonomous agents that handle support and sales 24/7.",
    color: "text-cyan-400",
    bg: "bg-cyan-600/20",
  },
  {
    icon: <LuCode />,
    title: "Custom AI Dev",
    desc: "Building proprietary models that integrate seamlessly with your stack.",
    color: "text-blue-400",
    bg: "bg-blue-600/20",
  },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Capabilities</h2>
          <p className="text-gray-400">
            Future-proof intelligence tailored to your industry.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {serviceData.map((service, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10, backgroundColor: "rgba(255,255,255,0.05)" }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-[#0f172a]/60 backdrop-blur-xl border border-white/10 p-10 rounded-[2rem] group transition-all"
            >
              <div
                className={`w-14 h-14 ${service.bg} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform text-2xl ${service.color}`}
              >
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

import React from "react";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa6";
import {
  LuBrainCircuit,
  LuBot,
  LuCode,
  LuArrowUpRight,
  LuSearch,
  LuLightbulb,
  LuCpu,
  LuRocket,
  LuArrowRight,
} from "react-icons/lu";

// Types
interface ServiceItem {
  icon: React.ReactNode;
  title: string;
  desc: string;
  features: string[];
  color: string;
  bg: string;
  glowColor: string;
}

interface ProcessStep {
  num: string;
  title: string;
  desc: string;
  icon: React.ReactNode;
  details: string[];
  color: string;
  shadow: string;
}

// Data
const serviceData: ServiceItem[] = [
  {
    icon: <LuBrainCircuit />,
    title: "AI Strategy & Consulting",
    desc: "We align neural capabilities with business objectives. Our roadmap identifies high-impact automation opportunities to maximize ROI.",
    features: ["Feasibility Analysis", "ROI Forecasting", "Tech Stack Audit"],
    color: "text-purple-400",
    bg: "bg-purple-600/10",
    glowColor: "group-hover:shadow-purple-500/20",
  },
  {
    icon: <LuBot />,
    title: "Neural Automation & LLMs",
    desc: "Deploy custom-trained Large Language Models and autonomous agents that mirror your brand voice while handling complex tasks.",
    features: ["Custom RAG Pipelines", "Voice Synthesis", "Agentic Workflows"],
    color: "text-cyan-400",
    bg: "bg-cyan-600/10",
    glowColor: "group-hover:shadow-cyan-500/20",
  },
  {
    icon: <LuCode />,
    title: "Enterprise AI Development",
    desc: "Full-stack integration of proprietary models into your existing infrastructure with military-grade security and scalability.",
    features: ["Model Fine-tuning", "GPU Optimization", "API Engineering"],
    color: "text-blue-400",
    bg: "bg-blue-600/10",
    glowColor: "group-hover:shadow-blue-500/20",
  },
];

const processSteps: ProcessStep[] = [
  {
    num: "01",
    title: "Discovery",
    desc: "Analyzing data architecture and bottlenecks.",
    icon: <LuSearch />,
    details: ["Data Audit", "ROI Mapping"],
    color: "from-purple-500 to-purple-700",
    shadow: "shadow-purple-500/20",
  },
  {
    num: "02",
    title: "Prototype",
    desc: "Rapid PoC to validate AI logic.",
    icon: <LuLightbulb />,
    details: ["Model Selection", "Logic Test"],
    color: "from-cyan-500 to-cyan-700",
    shadow: "shadow-cyan-500/20",
  },
  {
    num: "03",
    title: "Development",
    desc: "Scaling training and security layers.",
    icon: <LuCpu />,
    details: ["Fine-tuning", "System Hardening"],
    color: "from-blue-500 to-blue-700",
    shadow: "shadow-blue-500/20",
  },
  {
    num: "04",
    title: "Deployment",
    desc: "Production launch and scaling.",
    icon: <LuRocket />,
    details: ["Edge Scaling", "Feedback Loops"],
    color: "from-indigo-500 to-indigo-700",
    shadow: "shadow-indigo-500/20",
  },
];

const Services: React.FC = () => {
  return (
    <section
      id="solutions"
      className="relative min-h-screen w-full flex flex-col items-center justify-center py-32 px-6 overflow-hidden bg-[#020617]"
    >
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.03)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl w-full mx-auto relative z-10">
        {/* --- PART 1: CORE SERVICES --- */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 text-purple-400 font-bold tracking-[0.2em] text-[10px] uppercase mb-4"
            >
              <FaStar className="   text-purple-400" /> Core Expertise
            </motion.div>
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tighter leading-tight">
              Future-proof <span className="text-gradient">Intelligence.</span>
            </h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-gray-500 max-w-sm text-sm border-l border-white/10 pl-6"
          >
            Engineering bespoke autonomous ecosystems that transform raw data
            into enterprise-grade revenue drivers.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-32 items-stretch">
          {serviceData.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative h-full"
            >
              <div
                className={`h-full bg-[#0f172a]/30 backdrop-blur-2xl border border-white/5 p-8 rounded-[2.5rem] transition-all duration-500 group-hover:border-white/20 group-hover:bg-[#0f172a]/60 shadow-2xl ${service.glowColor}`}
              >
                <div className="flex justify-between items-start mb-10">
                  <div
                    className={`w-14 h-14 ${service.bg} rounded-xl flex items-center justify-center text-2xl ${service.color} transition-all duration-500 shadow-inner`}
                  >
                    {service.icon}
                  </div>
                  <LuArrowUpRight
                    className="text-gray-600 group-hover:text-white transition-all"
                    size={20}
                  />
                </div>
                <h3 className="text-xl font-bold mb-3 tracking-tight group-hover:text-purple-300 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-500 text-xs leading-relaxed mb-8">
                  {service.desc}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {service.features.map((f, idx) => (
                    <span
                      key={idx}
                      className="text-[8px] font-black uppercase tracking-widest px-2 py-1 bg-white/5 border border-white/10 rounded-md text-gray-500 group-hover:text-purple-300"
                    >
                      {f}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* --- PART 2: THE METHODOLOGY --- */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[10px] font-black tracking-[0.4em] uppercase text-gray-600 mb-4"
          >
            Execution Framework
          </motion.div>
          <h3 className="text-3xl md:text-5xl font-bold tracking-tight">
            Our <span className="text-gradient">Precision</span> Workflow
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
          {/* Connector Line */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent z-0" />

          {processSteps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative z-10"
            >
              <div className="bg-[#0f172a]/20 backdrop-blur-sm border border-white/5 rounded-[2rem] p-6 transition-all duration-500 hover:bg-[#0f172a]/60 hover:border-white/10">
                <div className="absolute -right-2 -top-2 text-6xl font-black text-white/[0.02] group-hover:text-white/[0.05] transition-colors">
                  {step.num}
                </div>
                <div
                  className={`w-12 h-12 rounded-lg bg-gradient-to-br ${step.color} ${step.shadow} flex items-center justify-center text-xl text-white mb-6 group-hover:scale-110 transition-transform`}
                >
                  {step.icon}
                </div>
                <h4 className="font-bold mb-2 flex items-center gap-2 group-hover:text-purple-300 transition-colors text-sm">
                  {step.title}{" "}
                  <LuArrowRight className="opacity-0 group-hover:opacity-100 transition-all text-xs" />
                </h4>
                <p className="text-gray-500 text-[11px] leading-relaxed mb-4">
                  {step.desc}
                </p>
                <div className="flex flex-col gap-1.5 pt-4 border-t border-white/5">
                  {step.details.map((d, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-wider text-gray-600 group-hover:text-gray-400"
                    >
                      <span
                        className={`w-1 h-1 rounded-full bg-gradient-to-r ${step.color}`}
                      />
                      {d}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

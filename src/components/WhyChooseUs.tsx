import React from "react";
import { motion } from "framer-motion";
import { LuChartPie, LuShieldCheck, LuZap, LuUsers } from "react-icons/lu";

interface Benefit {
  title: string;
  desc: string;
  icon: React.ReactNode;
}

const benefits: Benefit[] = [
  {
    title: "Business-First AI",
    desc: "We don't just build models; we engineer revenue drivers designed to scale bottom-line results.",
    icon: <LuChartPie className="text-purple-400" />,
  },
  {
    title: "Elite AI Engineering",
    desc: "Our team consists of senior developers specializing in RAG and neural architectures.",
    icon: <LuUsers className="text-cyan-400" />,
  },
  {
    title: "Scalable Infrastructure",
    desc: "Solutions built to handle millions of requests with GPU-optimized deployment.",
    icon: <LuZap className="text-yellow-400" />,
  },
  {
    title: "Enterprise Security",
    desc: "Military-grade encryption ensuring your data never leaves your infrastructure.",
    icon: <LuShieldCheck className="text-blue-400" />,
  },
];

const WhyChooseUs: React.FC = () => {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center py-24 px-6 overflow-hidden bg-[#020617]">
      {/* Dynamic Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-600/5 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl w-full mx-auto relative z-10 ">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Column: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col justify-center"
          >
            <div className="inline-flex items-center gap-2 text-purple-400 font-bold tracking-[0.3em] text-[10px] uppercase mb-8">
              <span className="w-12 h-[1px] bg-purple-500/50"></span>{" "}
              Architecture & Trust
            </div>

            <h2 className="text-5xl md:text-7xl font-extrabold mb-8 tracking-tighter leading-[1.05]">
              Why the world's <br />
              <span className="bg-gradient-to-r from-white via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                top founders
              </span>{" "}
              choose us.
            </h2>

            <p className="text-gray-400 text-lg md:text-xl max-w-xl leading-relaxed mb-16 border-l-2 border-purple-500/20 pl-6">
              Bridging the gap between complex research and production-ready AI
              systems that transform operational efficiency into competitive
              advantage.
            </p>

            <div className="grid sm:grid-cols-2 gap-x-10 gap-y-12">
              {benefits.map((benefit, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="group cursor-default"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-3xl group-hover:scale-125 group-hover:rotate-6 transition-all duration-500 ease-spring">
                      {benefit.icon}
                    </div>
                    <h3 className="font-bold text-xl text-white group-hover:text-purple-300 transition-colors">
                      {benefit.title}
                    </h3>
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                    {benefit.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: The Visual Core (Perfectly Centered) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex items-center justify-center relative"
          >
            <div className="relative w-full aspect-square max-w-[520px] flex items-center justify-center group">
              {/* Spinning Orbital Layers */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border border-dashed border-white/5 rounded-full"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute inset-12 border border-dashed border-purple-500/10 rounded-full"
              />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-24 border border-white/10 rounded-full scale-110 opacity-20"
              />

              {/* The Glass Neural Node */}
              <motion.div
                whileHover={{ scale: 1.02, rotateY: 5, rotateX: -5 }}
                className="relative z-10 w-72 h-72 md:w-96 md:h-96 bg-gradient-to-b from-white/[0.05] to-transparent backdrop-blur-3xl rounded-[5rem] border border-white/10 flex flex-col items-center justify-center shadow-2xl transition-all duration-700 hover:border-purple-500/30 overflow-hidden"
              >
                {/* Internal Scanline Effect */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent w-full h-20 -top-full animate-[scan_4s_linear_infinite]" />

                <motion.div
                  animate={{ scale: [1, 1.08, 1] }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="text-center relative z-10"
                >
                  <div className="text-7xl md:text-8xl mb-6 drop-shadow-[0_0_30px_rgba(168,85,247,0.4)]">
                    🧠
                  </div>
                  <div className="text-[11px] font-black tracking-[0.6em] uppercase text-purple-400/60">
                    Neural Engine <span className="animate-pulse">v2.0</span>
                  </div>
                </motion.div>

                {/* Real-time Status Floating Tags */}
                <motion.div
                  animate={{ y: [0, -12, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute top-10 right-4 bg-[#0f172a]/90 backdrop-blur-md px-5 py-2.5 rounded-2xl border border-white/10 text-[10px] font-bold text-cyan-400 shadow-2xl"
                >
                  <span className="w-2 h-2 rounded-full bg-cyan-400 inline-block mr-2 animate-pulse" />
                  LATENCY: 14MS
                </motion.div>
                <motion.div
                  animate={{ y: [0, 12, 0] }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                  className="absolute bottom-12 left-4 bg-[#0f172a]/90 backdrop-blur-md px-5 py-2.5 rounded-2xl border border-white/10 text-[10px] font-bold text-purple-400 shadow-2xl"
                >
                  <span className="w-2 h-2 rounded-full bg-purple-400 inline-block mr-2 animate-pulse" />
                  ACCURACY: 99.8%
                </motion.div>
              </motion.div>

              {/* Multi-layered Glow Aura */}
              <div className="absolute w-[120%] h-[120%] bg-purple-600/5 rounded-full blur-[140px] -z-10" />
              <div className="absolute w-[80%] h-[80%] bg-cyan-500/5 rounded-full blur-[100px] -z-10 translate-x-12 translate-y-12" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

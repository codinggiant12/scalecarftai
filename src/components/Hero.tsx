import React from "react";
import { motion, Variants } from "framer-motion";
import {
  HiMiniSparkles,
  HiOutlineArrowRight,
  HiOutlineChatBubbleBottomCenterText,
} from "react-icons/hi2";

const Hero: React.FC = () => {
  // Animation variants for staggered text entry
  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 mt-[-3rem] overflow-hidden bg-[#020617] border-amber-300">
      {/* Background Glows - Type safe styles via Tailwind */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 blur-[120px] -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-600/10 blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div
            variants={containerVariants}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-400 text-xs font-bold mb-6 tracking-widest uppercase"
          >
            <HiMiniSparkles className="text-sm animate-pulse" />
            <span>AI Evolution 2026</span>
          </motion.div>

          <motion.h1
            variants={containerVariants}
            className="text-6xl md:text-7xl font-extrabold leading-[1.1] mb-6 tracking-tight text-white"
          >
            AI Solutions That{" "}
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Scale Your Business.
            </span>
          </motion.h1>

          <motion.p
            variants={containerVariants}
            className="text-xl text-gray-400 mb-10 max-w-xl"
          >
            We engineer enterprise-grade artificial intelligence and autonomous
            systems that transform operational efficiency.
          </motion.p>

          <motion.div
            variants={containerVariants}
            className="flex flex-wrap gap-4"
          >
            <button className="group relative flex items-center gap-2 bg-purple-600 hover:bg-purple-500 text-white px-8 py-4 rounded-2xl font-bold transition-all transform hover:scale-105 shadow-lg shadow-purple-500/20">
              Start Your AI Journey
              <HiOutlineArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>

            <button className="flex items-center gap-2 bg-white/5 border border-white/10 backdrop-blur-md text-white px-8 py-4 rounded-2xl font-bold hover:bg-white/10 transition-all">
              <HiOutlineChatBubbleBottomCenterText className="text-xl" />
              Talk to an Expert
            </button>
          </motion.div>
        </motion.div>

        {/* Hero Image Section */}
        <motion.div
          className="relative hidden lg:block"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative p-4 bg-white/5 backdrop-blur-xl rounded-[2.5rem] border border-white/10 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 to-transparent pointer-events-none" />
            <img
              src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800"
              alt="AI Neural Concept"
              className="rounded-[2rem] shadow-2xl"
            />
          </motion.div>

          {/* Floating Status Card */}
          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            className="absolute -bottom-6 -left-6 p-6 bg-[#0f172a]/90 backdrop-blur-md border border-white/10 rounded-2xl shadow-xl z-10"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">
                <HiMiniSparkles />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-wider text-gray-400 font-bold">
                  System Status
                </p>
                <p className="text-sm font-bold text-white whitespace-nowrap">
                  Neural Models Active
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

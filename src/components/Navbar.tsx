import React from "react";
import { motion } from "framer-motion";

const Navbar: React.FC = () => {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 w-full z-50 border-b border-white/10 bg-[#030712]/50 backdrop-blur-xl px-6 py-4"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold  from-purple-400 to-cyan-400 bg-clip-text text-transparent">
          NeuralAgency
        </div>
        <div className="hidden md:flex gap-8 text-sm font-medium text-slate-300">
          <a href="#" className="hover:text-white transition-colors">
            Services
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Process
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Case Studies
          </a>
        </div>
        <button className="px-5 py-2 rounded-full border border-purple-500/50 text-sm font-semibold hover:bg-purple-500/10 transition-all">
          Contact Us
        </button>
      </div>
    </motion.nav>
  );
};

export default Navbar;

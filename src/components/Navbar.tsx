import React from "react";
import { motion } from "framer-motion";
interface NavbarProps {
  onHome: () => void;
  onServices: () => void;
  onWhyUs: () => void;
  onContact: () => void;
}

const Navbar: React.FC<NavbarProps> = ({
  onHome,
  onServices,
  onWhyUs,
  onContact,
}) => {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 w-full z-50 border-b border-white/10 bg-[#030712]/50 backdrop-blur-xl px-6 py-4"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-2xl font-extrabold tracking-tighter flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-to-tr from-purple-600 to-cyan-400 rounded-xl flex items-center justify-center text-white">
            N
          </div>
          NEURALITH
        </div>
        <div className="hidden md:flex gap-8 text-sm font-medium text-slate-300">
          <button onClick={onHome}>Home</button>
          <button onClick={onServices}>Services</button>
          <button onClick={onWhyUs}>Why Us</button>
        </div>
        <button
          onClick={onContact}
          className="px-5 py-2 rounded-full border border-purple-500/50 text-sm font-semibold hover:bg-purple-500/10 transition-all"
        >
          Contact Us
        </button>
      </div>
    </motion.nav>
  );
};

export default Navbar;

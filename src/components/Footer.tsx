import React from "react";
import { motion } from "framer-motion";
import { FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";

const Footer: React.FC = () => {
  const socials = [
    { icon: <FaTwitter />, link: "#" },
    { icon: <FaLinkedinIn />, link: "#" },
    { icon: <FaGithub />, link: "#" },
  ];

  return (
    <footer className="py-16 border-t border-white/10 px-6 text-center text-gray-500 bg-[#020617]">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto"
      >
        <div className="text-2xl font-black text-white mb-8 tracking-tighter">
          NEURALITH
        </div>

        <div className="flex justify-center gap-6 mb-10">
          {socials.map((social, i) => (
            <motion.a
              key={i}
              href={social.link}
              whileHover={{ y: -5, color: "#a855f7" }}
              className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-xl hover:border-purple-500/50 transition-colors"
            >
              {social.icon}
            </motion.a>
          ))}
        </div>

        <div className="space-y-2">
          <p className="text-sm font-medium">
            © 2026 Neuralith Dynamics Corp. All Rights Reserved.
          </p>
          <p className="text-xs text-gray-600 uppercase tracking-widest font-bold">
            Engineering the Intelligence Age
          </p>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;

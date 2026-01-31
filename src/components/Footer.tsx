import React from "react";
import { motion } from "framer-motion";
import { FaTwitter, FaLinkedinIn, FaGithub, FaDiscord } from "react-icons/fa";
import { LuArrowRight } from "react-icons/lu";

const Footer: React.FC = () => {
  const footerLinks = [
    {
      title: "Capabilities",
      links: ["AI Consulting", "Custom LLMs", "Automation", "Data Strategy"],
    },
    {
      title: "Company",
      links: ["About Us", "Our Process", "Research", "Careers"],
    },
    {
      title: "Legal",
      links: ["Privacy Policy", "Terms of Service", "Data Security"],
    },
  ];

  const socials = [
    { icon: <FaTwitter />, link: "#" },
    { icon: <FaLinkedinIn />, link: "#" },
    { icon: <FaGithub />, link: "#" },
    { icon: <FaDiscord />, link: "#" },
  ];

  return (
    <footer className="relative bg-[#020617] pt-24 pb-12 px-6 border-t border-white/5 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20">
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-8">
            <div>
              <div className="text-2xl font-black text-white tracking-tighter mb-4">
                NEURALITH
              </div>
              <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                Engineering enterprise-grade autonomous systems and
                next-generation neural architectures for the global industry
                leaders.
              </p>
            </div>

            {/* System Status Indicator */}
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/5 border border-white/10 rounded-full">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-gray-300">
                All Systems Operational
              </span>
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-5 grid grid-cols-2 md:grid-cols-3 gap-8">
            {footerLinks.map((group, i) => (
              <div key={i} className="space-y-6">
                <h4 className="text-white text-xs font-black uppercase tracking-[0.2em]">
                  {group.title}
                </h4>
                <ul className="space-y-4">
                  {group.links.map((link, j) => (
                    <li key={j}>
                      <a
                        href="#"
                        className="text-gray-500 text-sm hover:text-purple-400 transition-colors"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Newsletter Column */}
          <div className="lg:col-span-3 space-y-6">
            <h4 className="text-white text-xs font-black uppercase tracking-[0.2em]">
              Intelligence Briefing
            </h4>
            <p className="text-gray-500 text-xs leading-relaxed">
              Get the latest updates on AI research and agency news.
            </p>
            <form className="relative group">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-xs outline-none focus:border-purple-500/50 transition-all text-white"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white text-black rounded-lg flex items-center justify-center hover:bg-purple-500 hover:text-white transition-all">
                <LuArrowRight size={14} />
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 mt-24 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex gap-6 order-2 md:order-1">
            {socials.map((social, i) => (
              <motion.a
                key={i}
                href={social.link}
                whileHover={{ y: -3, color: "#a855f7" }}
                className="text-gray-500 text-lg hover:text-purple-400 transition-colors"
              >
                {social.icon}
              </motion.a>
            ))}
          </div>

          <div className="text-center md:text-right order-1 md:order-2">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-600">
              © 2026 Neuralith Dynamics Corp.{" "}
              <span className="mx-2 hidden md:inline">|</span>
              <br className="md:hidden" /> Crafted for the Intelligence Age
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

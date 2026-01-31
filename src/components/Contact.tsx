import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LuSend, LuSparkles } from "react-icons/lu";
import { GrCircleAlert } from "react-icons/gr";
import { FaRegCircleCheck } from "react-icons/fa6";

interface FormErrors {
  fullName?: string;
  email?: string;
  vision?: string;
}

const Contact: React.FC = () => {
  const [formState, setFormState] = useState<"idle" | "submitting" | "success">(
    "idle",
  );
  const [selectedService, setSelectedService] = useState("AI Development");
  const [values, setValues] = useState({ fullName: "", email: "", vision: "" });
  const [errors, setErrors] = useState<FormErrors>({});

  const handleChange = (field: keyof typeof values, value: string) => {
    setValues((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (values.fullName.trim().length < 3)
      newErrors.fullName = "Full name is too short.";
    if (!/^\S+@\S+\.\S+$/.test(values.email))
      newErrors.email = "Invalid business email.";
    if (values.vision.trim().length < 10)
      newErrors.vision = "Please describe your vision in more detail.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setFormState("submitting");
    setTimeout(() => {
      setFormState("success");
      setValues({ fullName: "", email: "", vision: "" });
    }, 1500);
  };

  const ErrorMessage = ({ message }: { message?: string }) => (
    <div className="h-5">
      <AnimatePresence>
        {message && (
          <motion.div
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            className="flex items-center gap-1.5 mt-1.5 text-red-400 text-[10px] font-bold uppercase tracking-wider"
          >
            <GrCircleAlert size={12} /> {message}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );

  return (
    <section
      id="contact"
      className="py-16 md:py-24 px-4 sm:px-6 relative overflow-hidden bg-[#020617]"
    >
      {/* Background Decorative Accents */}
      <div className="absolute top-0 right-0 w-64 md:w-[500px] h-64 md:h-[500px] bg-purple-600/5 blur-[80px] md:blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="bg-[#0f172a]/40 backdrop-blur-2xl border border-white/10 rounded-[2rem] md:rounded-[3.5rem] p-6 sm:p-10 md:p-16 shadow-2xl">
          <div className="text-center mb-8 md:mb-12">
            <motion.div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/20 px-3 py-1 md:px-4 md:py-1.5 rounded-full text-purple-400 text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] mb-4 md:mb-6">
              <LuSparkles /> Open for New Projects
            </motion.div>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-3 md:mb-4 tracking-tight leading-tight">
              Let’s build something{" "}
              <span className="text-gradient font-extrabold">intelligent.</span>
            </h2>
            <p className="text-gray-400 text-sm md:text-lg">
              Initialize your discovery phase with our lead architects.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="space-y-4 md:space-y-6"
            noValidate
          >
            {/* Service Selection - Scrollable on mobile */}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 md:gap-y-0">
              {/* Full Name */}
              <div className="group">
                <label className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 mb-1.5 md:mb-2 block ml-1">
                  Full Name
                </label>
                <input
                  type="text"
                  value={values.fullName}
                  onChange={(e) => handleChange("fullName", e.target.value)}
                  placeholder="Enter your name"
                  className={`w-full bg-white/[0.03] border ${errors.fullName ? "border-red-500/50 shadow-[0_0_15px_rgba(239,68,68,0.1)]" : "border-white/10"} p-4 md:p-5 rounded-xl md:rounded-2xl focus:border-purple-500/50 outline-none transition-all text-white text-xs md:text-sm`}
                />
                <ErrorMessage message={errors.fullName} />
              </div>

              {/* Email Address */}
              <div className="group">
                <label className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 mb-1.5 md:mb-2 block ml-1">
                  Email Address
                </label>
                <input
                  type="email"
                  value={values.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  placeholder="name@company.com"
                  className={`w-full bg-white/[0.03] border ${errors.email ? "border-red-500/50 shadow-[0_0_15px_rgba(239,68,68,0.1)]" : "border-white/10"} p-4 md:p-5 rounded-xl md:rounded-2xl focus:border-purple-500/50 outline-none transition-all text-white text-xs md:text-sm`}
                />
                <ErrorMessage message={errors.email} />
              </div>
            </div>

            {/* Project Vision */}
            <div className="group">
              <label className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 mb-1.5 md:mb-2 block ml-1">
                Project Vision
              </label>
              <textarea
                rows={4}
                value={values.vision}
                onChange={(e) => handleChange("vision", e.target.value)}
                placeholder="Describe your AI objectives..."
                className={`w-full bg-white/[0.03] border ${errors.vision ? "border-red-500/50 shadow-[0_0_15px_rgba(239,68,68,0.1)]" : "border-white/10"} p-4 md:p-5 rounded-xl md:rounded-2xl focus:border-cyan-500/50 outline-none transition-all text-white text-xs md:text-sm resize-none`}
              />
              <ErrorMessage message={errors.vision} />
            </div>

            <motion.button
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              type="submit"
              disabled={formState !== "idle"}
              className={`w-full py-5 md:py-6 rounded-xl md:rounded-2xl text-base md:text-lg font-black tracking-tight transition-all relative overflow-hidden flex items-center justify-center gap-3 ${
                formState === "success"
                  ? "bg-green-600 text-white"
                  : "bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-xl shadow-purple-500/20"
              }`}
            >
              <AnimatePresence mode="wait">
                {formState === "idle" && (
                  <motion.span
                    key="idle"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex items-center gap-2"
                  >
                    Initialize Discovery <LuSend size={18} />
                  </motion.span>
                )}
                {formState === "submitting" && (
                  <motion.div
                    key="loading"
                    animate={{ rotate: 360 }}
                    transition={{
                      repeat: Infinity,
                      duration: 1,
                      ease: "linear",
                    }}
                    className="w-5 h-5 md:w-6 md:h-6 border-2 border-white/30 border-t-white rounded-full"
                  />
                )}
                {formState === "success" && (
                  <motion.span
                    key="success"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex items-center gap-2"
                  >
                    Sent Successfully <FaRegCircleCheck size={18} />
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

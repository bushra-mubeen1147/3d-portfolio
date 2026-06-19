import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send, CheckCircle2, MapPin } from "lucide-react";
import confetti from "canvas-confetti";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) {
      setStatus("error");
      return;
    }

    setStatus("submitting");

    setTimeout(() => {
      setStatus("success");
      setFormState({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      confetti({
        particleCount: 200,
        spread: 90,
        origin: { y: 0.5 },
        colors: ["#8b5cf6", "#06b6d4", "#ec4899", "#00d9ff"],
      });
    }, 1500);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring" as const, stiffness: 100, damping: 20 },
    },
  };

  return (
    <section
      id="contact"
      className="relative py-24 md:py-32 w-full flex items-center justify-center overflow-hidden px-6 md:px-12 bg-darkBg"
    >
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-neonViolet/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-neonTeal/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 md:mb-24 space-y-4"
        >
          <div className="inline-block px-4 py-2 rounded-full glass border border-neonViolet/40">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] gradient-text gradient-violet-teal">
              Get In Touch
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white">
            Let's <span className="gradient-text gradient-violet-teal">Connect</span>
          </h2>
          <p className="text-base md:text-lg text-gray-400">
            Have a project in mind, want to discuss AI integration, or just say hello? I'd love to hear from you. Reach out anytime!
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start"
        >
          <motion.div
            variants={itemVariants}
            className="lg:col-span-5 space-y-6"
          >
            <div className="glass rounded-3xl p-8 md:p-10 border border-darkBorder/40 space-y-8">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              
              <div className="flex items-start gap-4 group">
                <div className="p-4 rounded-xl bg-gradient-to-br from-neonViolet/20 to-neonTeal/20 group-hover:from-neonViolet/40 group-hover:to-neonTeal/40 transition-all duration-300">
                  <Mail className="w-5 h-5 text-neonCyan" />
                </div>
                <div>
                  <span className="text-xs text-gray-500 font-bold uppercase tracking-wider block mb-1">Email</span>
                  <a 
                    href="mailto:bushra.mubeen@example.com" 
                    className="text-base font-semibold text-white hover:text-neonCyan transition-colors"
                  >
                    bushra.mubeen@example.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="p-4 rounded-xl bg-gradient-to-br from-neonTeal/20 to-neonCyan/20 group-hover:from-neonTeal/40 group-hover:to-neonCyan/40 transition-all duration-300">
                  <MapPin className="w-5 h-5 text-neonTeal" />
                </div>
                <div>
                  <span className="text-xs text-gray-500 font-bold uppercase tracking-wider block mb-1">Location</span>
                  <p className="text-base font-semibold text-white">
                    Rawalpindi, Pakistan
                  </p>
                </div>
              </div>

              <div className="h-px bg-darkBorder/30" />

              <div className="space-y-4">
                <span className="text-xs text-gray-500 font-bold uppercase tracking-wider block">Follow & Connect</span>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/bushra-mubeen1147"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 p-4 rounded-xl glass border border-darkBorder/40 hover:border-neonViolet/60 hover:bg-neonViolet/5 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <span className="text-lg text-neonCyan hover:text-neonTeal">🐙</span>
                    <span className="text-sm font-semibold text-white">GitHub</span>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/bushra-mubeen-8859a8251/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 p-4 rounded-xl glass border border-darkBorder/40 hover:border-neonTeal/60 hover:bg-neonTeal/5 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <span className="text-lg text-neonCyan hover:text-neonTeal">💼</span>
                    <span className="text-sm font-semibold text-white">LinkedIn</span>
                  </a>
                </div>
              </div>

              <div className="h-px bg-darkBorder/30" />

              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-neonCyan animate-pulse" />
                  <span className="text-sm text-gray-400">Available for remote opportunities</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-neonCyan animate-pulse" />
                  <span className="text-sm text-gray-400">Response time: 24-48 hours</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="lg:col-span-7"
          >
            <div className="glass rounded-3xl p-8 md:p-10 border border-darkBorder/40">
              {status === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-16 flex flex-col items-center justify-center text-center gap-4"
                >
                  <CheckCircle2 className="w-20 h-20 text-neonTeal animate-bounce" />
                  <h3 className="text-3xl font-black text-white">Message Sent! 🎉</h3>
                  <p className="text-base text-gray-400 max-w-sm font-medium">
                    Thank you for reaching out! I'll get back to you as soon as possible.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="mt-6 px-8 py-3 rounded-full btn-neon"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="name" className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">
                        Your Name <span className="text-neonPink">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        required
                        placeholder="John Doe"
                        className="px-5 py-4 rounded-xl bg-darkCard/60 border border-darkBorder text-sm text-white placeholder-gray-600 focus:outline-none focus:border-neonViolet/60 focus:ring-1 focus:ring-neonViolet/60 transition-all duration-300"
                      />
                    </div>

                    <div className="flex flex-col gap-2">
                      <label htmlFor="email" className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">
                        Email Address <span className="text-neonPink">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                        required
                        placeholder="john@example.com"
                        className="px-5 py-4 rounded-xl bg-darkCard/60 border border-darkBorder text-sm text-white placeholder-gray-600 focus:outline-none focus:border-neonTeal/60 focus:ring-1 focus:ring-neonTeal/60 transition-all duration-300"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="subject" className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formState.subject}
                      onChange={handleChange}
                      placeholder="Project Inquiry"
                      className="px-5 py-4 rounded-xl bg-darkCard/60 border border-darkBorder text-sm text-white placeholder-gray-600 focus:outline-none focus:border-neonCyan/60 focus:ring-1 focus:ring-neonCyan/60 transition-all duration-300"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">
                      Message <span className="text-neonPink">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      required
                      placeholder="Tell me about your project or idea..."
                      rows={5}
                      className="px-5 py-4 rounded-xl bg-darkCard/60 border border-darkBorder text-sm text-white placeholder-gray-600 focus:outline-none focus:border-neonTeal/60 focus:ring-1 focus:ring-neonTeal/60 transition-all duration-300 resize-none"
                    />
                  </div>

                  {status === "error" && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-sm font-medium"
                    >
                      Please fill out all required fields.
                    </motion.div>
                  )}

                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="w-full py-4 rounded-xl btn-neon flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {status === "submitting" ? (
                      <>
                        <div className="w-4 h-4 border-2 border-t-transparent border-white rounded-full animate-spin" />
                        <span>Sending Message...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

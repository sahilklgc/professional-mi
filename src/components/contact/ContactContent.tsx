"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

export function ContactContent() {
  return (
    <div className="w-full bg-slate-50 selection:bg-blue-500/30 overflow-hidden">
      
      {/* Cinematic Hero */}
      <section className="relative pt-32 pb-32 lg:pt-40 lg:pb-40 bg-slate-950 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[400px] bg-blue-600/20 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-400/10 blur-[100px] rounded-full mix-blend-screen pointer-events-none"></div>

        <div className="container mx-auto px-4 relative z-10 text-center max-w-3xl">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="space-y-6">
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-4">
              <span className="h-2 w-2 rounded-full bg-blue-400 animate-pulse"></span>
              <span className="text-sm font-bold tracking-widest uppercase text-slate-300">Get In Touch</span>
            </motion.div>
            <motion.h1 variants={fadeUp} className="text-5xl sm:text-7xl font-extrabold text-white tracking-tighter leading-[1.1]">
              Let's Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Together.</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-xl text-slate-400 font-light leading-relaxed">
              Reach out to our executive team to discuss your next infrastructure project, facility management needs, or industrial requirements.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Main Content Area - Unified Card */}
      <section className="py-20 relative -mt-32 z-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-3xl shadow-2xl shadow-slate-200/50 overflow-hidden flex flex-col lg:flex-row border border-slate-100"
          >
            {/* Contact Info - Left Column */}
            <div className="lg:w-2/5 bg-slate-900 text-white p-10 md:p-12 relative overflow-hidden shrink-0">
              {/* Decorative background glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/30 rounded-full blur-[80px] pointer-events-none -translate-y-1/2 translate-x-1/3"></div>
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-cyan-400/20 rounded-full blur-[60px] pointer-events-none translate-y-1/3 -translate-x-1/4"></div>
              
              <h2 className="text-3xl font-bold mb-4 relative z-10">Contact Information</h2>
              <p className="text-slate-400 mb-12 relative z-10 font-light text-lg">Fill out the form and our team will get back to you within 24 hours.</p>

              <div className="space-y-10 relative z-10">
                {[
                  { icon: Phone, title: "Phone", action: "+1 (248) 252-5958", href: "tel:+12482525958" },
                  { icon: Mail, title: "Email", action: "info@professionalmi.com", href: "mailto:info@professionalmi.com" },
                  { icon: MapPin, title: "Headquarters", action: "6428 Royal Pointe Dr, West Bloomfield Township, MI 48322", href: "https://maps.google.com" }
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-5">
                    <item.icon className="h-6 w-6 text-cyan-400 shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                      <a href={item.href} target={item.title === "Headquarters" ? "_blank" : undefined} className="text-slate-300 hover:text-white transition-colors text-lg font-light">
                        {item.action}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Form - Right Column */}
            <div className="lg:w-3/5 p-10 md:p-12 bg-white">
              <h2 className="text-3xl font-extrabold text-slate-900 mb-8">Send Us a Message</h2>
              <ContactForm />
            </div>

          </motion.div>
        </div>
      </section>

    </div>
  );
}

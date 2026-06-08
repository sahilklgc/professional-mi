"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Plane, Train, Building, GraduationCap, MapPin, Building2, Briefcase } from "lucide-react";
import { useRef } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

export function AboutContent() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const scaleImage = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  const marqueeItems = [
    "Safety First", "Unmatched Quality", "Industrial Precision", "Reliable Delivery", "Expert Management"
  ];

  const projects = [
    {
      title: "Detroit Metro Airport",
      subtitle: "Delta Terminal Renovation",
      desc: "A $7 million project encompassing architectural finishes, HVAC, plumbing, supplies, and insulation in a highly active terminal.",
      icon: Plane,
      image: "https://images.unsplash.com/photo-1556388158-158ea5ccacbd?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "Houston Metro",
      subtitle: "Cleaning & Facility Support",
      desc: "Recurring maintenance and cleaning services across transportation-related public infrastructure, including bus stops and metro buildings.",
      icon: Train,
      image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?q=80&w=2071&auto=format&fit=crop"
    },
    {
      title: "Orlando Airport",
      subtitle: "Landside Facility Maintenance",
      desc: "Comprehensive facility maintenance management services on the landside portion of the facility, supporting critical airport operations.",
      icon: Building,
      image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2074&auto=format&fit=crop"
    },
    {
      title: "Fort Riley & Public Facilities",
      subtitle: "Multi-site Support Operations",
      desc: "Refuse collection, custodial services, waste management, and paint booth cleaning for military bases and school districts.",
      icon: GraduationCap,
      image: "https://images.unsplash.com/photo-1620059116993-398c21ce8406?q=80&w=2070&auto=format&fit=crop"
    }
  ];

  return (
    <div className="w-full bg-slate-950 selection:bg-blue-500/30 text-white overflow-hidden" ref={containerRef}>
      
      {/* 1. HERO - Cinematic & Typographic */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-20 overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute top-1/4 -left-1/4 w-[50vw] h-[50vw] bg-blue-600/20 rounded-full blur-[120px] mix-blend-screen opacity-50"></div>
        <div className="absolute bottom-0 right-0 w-[40vw] h-[40vw] bg-cyan-400/10 rounded-full blur-[100px] mix-blend-screen"></div>
        
        <div className="container mx-auto px-4 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial="hidden" 
            animate="visible" 
            variants={staggerContainer}
            className="space-y-8 z-20"
          >
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
              <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse"></span>
              <span className="text-sm font-bold tracking-widest uppercase text-slate-300">Who We Are</span>
            </motion.div>
            
            <motion.h1 variants={fadeUp} className="text-6xl sm:text-7xl lg:text-8xl font-extrabold tracking-tighter leading-[1.05]">
              Redefining <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-white">Industrial</span> <br/>
              Standards.
            </motion.h1>
            
            <motion.p variants={fadeUp} className="text-xl text-slate-400 max-w-lg font-light leading-relaxed border-l-2 border-blue-500 pl-6">
              A legacy built on precision, engineered for scale, and driven by an uncompromising commitment to safety and excellence.
            </motion.p>
          </motion.div>

          {/* Hero Images Collage */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative h-[500px] lg:h-[700px] mt-12 lg:mt-0"
          >
            <motion.div style={{ y: y1 }} className="absolute top-[10%] right-0 lg:-right-10 w-[70%] h-[60%] rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/10 z-20">
              <img src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover" alt="Architecture" />
            </motion.div>
            <motion.div style={{ y: y2 }} className="absolute bottom-[10%] left-0 lg:-left-10 w-[60%] h-[55%] rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/10 z-30">
              <img src="https://images.unsplash.com/photo-1581094288338-2314dddb7ece?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" alt="Industrial Worker" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 2. MARQUEE SEPARATOR */}
      <div className="w-full bg-blue-600 py-5 transform -rotate-2 scale-105 border-y border-blue-400/30 overflow-hidden relative z-40 shadow-2xl mt-20 lg:mt-0">
        <motion.div 
          className="flex whitespace-nowrap w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 25 }}
        >
          {/* Repeat array 4 times to ensure it covers screen seamlessly */}
          {[...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, i) => (
            <div key={i} className="flex items-center gap-8 mx-8 text-white font-extrabold text-2xl tracking-widest uppercase">
              <span>{item}</span>
              <span className="text-cyan-300">•</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* 3. BIG STATEMENT & PARALLAX IMAGE */}
      <section className="py-32 bg-white text-slate-900 relative">
        <div className="container mx-auto px-4">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="max-w-4xl mx-auto text-center mb-24"
          >
            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl lg:text-7xl font-black tracking-tight leading-tight mb-8">
              We don&apos;t just execute projects.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-cyan-500">We engineer partnerships.</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-xl md:text-2xl text-slate-500 font-light leading-relaxed">
              Since 2007, PCCI (Professional Construction and Consultants, Inc.) has stood at the intersection of rugged industrial capability and meticulous project execution. As a Michigan-based Small Business Enterprise, our mission is to empower public, private, and government-sector clients through robust infrastructure and seamless facility operations.
            </motion.p>
          </motion.div>

          {/* Full width Parallax window */}
          <div className="w-full h-[50vh] md:h-[70vh] rounded-[2rem] md:rounded-[3rem] overflow-hidden relative shadow-2xl">
            <motion.div style={{ scale: scaleImage }} className="w-full h-full origin-bottom">
              <img src="https://images.unsplash.com/photo-1508450859948-4e04fabaa4ea?q=80&w=2070&auto=format&fit=crop" alt="Construction Site" className="w-full h-full object-cover" />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent flex items-end p-6 md:p-16">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 w-full">
                {[
                  { value: "$500M+", label: "Projects Delivered" },
                  { value: "0", label: "Safety Incidents" },
                  { value: "98%", label: "Client Retention" },
                  { value: "24/7", label: "Facility Support" },
                ].map((stat, i) => (
                  <div key={i} className="text-white border-l-2 border-cyan-400 pl-4 bg-slate-900/30 backdrop-blur-sm p-4 rounded-lg">
                    <div className="text-3xl md:text-5xl font-black mb-2">{stat.value}</div>
                    <div className="text-blue-100 font-bold tracking-wide uppercase text-xs md:text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. HISTORY & SCALE */}
      <section className="py-32 bg-slate-50 relative border-t border-slate-200">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-8">
                The Agility of a Small Business. <br/>
                <span className="text-blue-600">The Power to Scale.</span>
              </h2>
              <p className="text-xl text-slate-600 leading-relaxed mb-6 font-light">
                Founded in 2007, PCCI has expanded its capabilities from general construction and renovation work into broader facility maintenance, management support, custodial services, and transportation facility support.
              </p>
              <p className="text-xl text-slate-600 leading-relaxed font-light">
                As a locally based Michigan Small Business Enterprise, we provide responsive, hands-on service while maintaining the flexibility required to support both small-scale projects and highly complex, multi-million dollar public contracts.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-400/20 to-cyan-300/20 blur-[100px] rounded-full"></div>
              
              <div className="grid grid-cols-2 gap-4 relative z-10">
                <div className="bg-white/80 backdrop-blur-xl p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/60 hover:-translate-y-1 transition-transform duration-300 group">
                  <div className="h-12 w-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 shadow-sm">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Michigan Based</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">Serving local and national infrastructure.</p>
                </div>

                <div className="bg-white/80 backdrop-blur-xl p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/60 hover:-translate-y-1 transition-transform duration-300 group translate-y-6">
                  <div className="h-12 w-12 bg-cyan-50 text-cyan-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-cyan-500 group-hover:text-white transition-colors duration-300 shadow-sm">
                    <Briefcase className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">SBE Certified</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">Small Business Enterprise.</p>
                </div>

                <div className="bg-slate-900 p-8 rounded-3xl shadow-2xl shadow-slate-900/20 border border-slate-800 col-span-2 mt-6 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl group-hover:bg-blue-500/20 transition-colors duration-500"></div>
                  <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center gap-6">
                    <div className="h-16 w-16 bg-white/10 text-white rounded-2xl flex items-center justify-center shrink-0 border border-white/10 shadow-inner backdrop-blur-md group-hover:scale-110 transition-transform duration-500">
                      <Building2 className="h-8 w-8" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">Full Lifecycle Support</h3>
                      <p className="text-slate-400 text-sm leading-relaxed">From architectural renovations to long-term custodial and waste management.</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. REPRESENTATIVE EXPERIENCE */}
      <section className="py-32 bg-slate-950 text-white relative overflow-hidden">
        {/* Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[500px] bg-blue-600/20 blur-[150px] rounded-full pointer-events-none"></div>

        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="text-center mb-24 max-w-3xl mx-auto">
            <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">Representative Experience</h2>
            <p className="text-xl md:text-2xl text-slate-400 font-light">
              Demonstrated success in structured government and institutional environments where compliance, reliability, and service continuity are essential.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group relative h-[400px] rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/5"
              >
                <div className="absolute inset-0 z-0">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/70 to-transparent z-10"></div>
                
                <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 z-20">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="h-12 w-12 bg-blue-600/40 backdrop-blur-md rounded-xl flex items-center justify-center border border-white/10 text-cyan-300 shadow-lg">
                      <project.icon className="h-6 w-6" />
                    </div>
                    <span className="text-cyan-400 font-mono font-bold tracking-widest text-sm uppercase">{project.subtitle}</span>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 drop-shadow-md">{project.title}</h3>
                  <p className="text-lg text-slate-200 leading-relaxed font-light max-w-xl">{project.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}

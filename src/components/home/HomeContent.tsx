"use client";

import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight, Building2, HardHat, ClipboardCheck, Package, Wrench, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    title: "Construction",
    description: "End-to-end commercial and industrial construction services with a focus on safety and quality.",
    icon: HardHat,
    href: "/services/construction",
  },
  {
    title: "Facility Management",
    description: "Comprehensive maintenance and operational management to keep your facilities running smoothly.",
    icon: Building2,
    href: "/services/facility-management",
  },
  {
    title: "Project Management",
    description: "Expert oversight, scheduling, and budget management to ensure successful project delivery.",
    icon: ClipboardCheck,
    href: "/services/project-management",
  },
  {
    title: "Procurement",
    description: "Strategic sourcing and supply chain solutions tailored to your operational needs.",
    icon: Package,
    href: "/services/procurement",
  },
  {
    title: "Industrial Services",
    description: "Specialized support and maintenance tailored to complex industrial environments.",
    icon: Wrench,
    href: "/services/industrial-services",
  },
];

const features = [
  "Uncompromising Safety Standards",
  "Decades of Industry Experience",
  "Commitment to Quality & Compliance",
  "Tailored Solutions for Every Client",
  "Reliable and Transparent Communication",
  "Environmentally Conscious Practices",
];

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50, damping: 15 } },
};

export function HomeContent() {
  return (
    <div className="overflow-x-hidden">
      <div className="bg-[#020617] relative">
        {/* HERO SECTION */}
        <section className="relative w-full text-white flex items-center min-h-screen overflow-hidden">
        {/* Background Glows & Grid */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-600/20 blur-[120px]" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-cyan-400/20 blur-[120px]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
        </div>

        <div className="container mx-auto px-4 md:px-8 relative z-20 pt-32 pb-32 lg:pb-40">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
            
            {/* Left Text Content */}
            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              animate="show"
              className="lg:w-[55%] flex flex-col items-start text-left space-y-8"
            >
              <motion.div variants={fadeUpVariant} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md shadow-2xl">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                <span className="text-sm font-medium text-blue-200 tracking-wide">Industry Leading Solutions in Michigan</span>
              </motion.div>
              
              <motion.h1 variants={fadeUpVariant} className="text-6xl sm:text-7xl lg:text-[5.5rem] font-extrabold tracking-tighter leading-[1.05]">
                Building <br />
                The Future <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500">
                  With Excellence.
                </span>
              </motion.h1>
              
              <motion.p variants={fadeUpVariant} className="text-xl md:text-2xl text-slate-300 leading-relaxed max-w-xl font-light">
                Delivering premier construction, facility management, and industrial services with an unwavering commitment to safety and quality.
              </motion.p>
              
              <motion.div variants={fadeUpVariant} className="flex flex-col sm:flex-row gap-4 pt-6 w-full sm:w-auto">
                <Link href="/contact" className={cn(buttonVariants({ size: "lg" }), "bg-blue-600 hover:bg-blue-500 text-white text-lg h-16 px-10 shadow-[0_0_40px_-10px_rgba(59,130,246,0.6)] transition-all hover:shadow-[0_0_60px_-15px_rgba(59,130,246,0.8)] rounded-full hover:scale-105")}>
                  Contact Us
                </Link>
                <Link href="/services/construction" className={cn(buttonVariants({ size: "lg", variant: "outline" }), "text-lg h-16 px-10 border-white/20 text-white hover:bg-white/10 hover:text-white bg-white/5 backdrop-blur-md transition-all rounded-full")}>
                  Explore Services
                </Link>
              </motion.div>
            </motion.div>

            {/* Right Image Collage */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
              className="lg:w-[45%] w-full h-[500px] sm:h-[600px] relative mt-12 lg:mt-0"
            >
              {/* Image 1 (Left, middle height) */}
              <motion.div 
                animate={{ y: [0, -15, 0] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                className="absolute left-0 top-[15%] w-[45%] h-[60%] rounded-3xl overflow-hidden shadow-2xl border border-white/10 z-10"
              >
                <div className="absolute inset-0 bg-blue-900/20 mix-blend-overlay z-10"></div>
                <img src="https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?q=80&w=2070&auto=format&fit=crop" className="object-cover w-full h-full" alt="Construction Planning" />
              </motion.div>
              
              {/* Image 2 (Center, tallest, overlaps others) */}
              <motion.div 
                animate={{ y: [0, -25, 0] }}
                transition={{ repeat: Infinity, duration: 8, ease: "easeInOut", delay: 1 }}
                className="absolute left-[20%] top-[0%] w-[55%] h-[85%] rounded-3xl overflow-hidden shadow-[0_20px_50px_-12px_rgba(0,0,0,0.7)] border border-white/20 z-20"
              >
                <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" className="object-cover w-full h-full" alt="Modern Architecture" />
              </motion.div>
              
              {/* Image 3 (Right, lower) */}
              <motion.div 
                animate={{ y: [0, -20, 0] }}
                transition={{ repeat: Infinity, duration: 7, ease: "easeInOut", delay: 2 }}
                className="absolute right-0 top-[30%] w-[40%] h-[55%] rounded-3xl overflow-hidden shadow-2xl border border-white/10 z-10"
              >
                <div className="absolute inset-0 bg-slate-900/20 mix-blend-overlay z-10"></div>
                <img src="https://images.unsplash.com/photo-1581094288338-2314dddb7ece?q=80&w=2070&auto=format&fit=crop" className="object-cover w-full h-full" alt="Industrial Services" />
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>
      </div> {/* End Dark Wrapper */}

      {/* CORE COMPETENCIES / SERVICES SECTION */}
      <section className="py-24 md:py-32 bg-slate-50 relative overflow-hidden text-slate-900">
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-200 bg-blue-50 shadow-sm mb-6">
              <span className="h-2 w-2 rounded-full bg-blue-600 animate-pulse"></span>
              <span className="text-sm font-bold tracking-widest uppercase text-blue-700">Capabilities</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6 text-slate-900">
              Our Core Services
            </h2>
            <p className="text-xl text-slate-600 font-light leading-relaxed">
              We provide a comprehensive suite of services designed to meet the complex demands of modern infrastructure and industry.
            </p>
          </motion.div>
          
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service, index) => (
              <motion.div key={index} variants={fadeUpVariant} className="group h-full">
                <Link 
                  href={service.href}
                  className="block h-full p-8 md:p-10 bg-white rounded-[2.5rem] border border-slate-100 hover:border-blue-200 transition-all duration-500 relative overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Huge faint background icon */}
                  <div className="absolute -bottom-6 -right-6 p-8 opacity-0 group-hover:opacity-5 transition-all duration-700 transform group-hover:scale-110 group-hover:-rotate-12">
                    <service.icon className="w-48 h-48 text-blue-900" />
                  </div>
                  
                  <div className="relative z-10">
                    <div className="h-16 w-16 bg-gradient-to-br from-blue-50 to-slate-100 border border-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-gradient-to-br group-hover:from-blue-600 group-hover:to-blue-800 group-hover:text-white group-hover:border-blue-500 transition-all duration-500 shadow-sm">
                      <service.icon className="h-8 w-8 transition-colors duration-500" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-700 transition-colors">{service.title}</h3>
                    <p className="text-slate-600 leading-relaxed mb-8 font-medium">
                      {service.description}
                    </p>
                    <div className="flex items-center text-blue-600 font-bold group-hover:text-blue-800 transition-colors duration-300">
                      Explore Service <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* WHY CHOOSE US SECTION */}
      <section className="py-32 bg-white overflow-hidden">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="lg:w-1/2 space-y-8"
            >
              <div className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-blue-700 font-semibold text-sm tracking-wide">
                The PCCI Difference
              </div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 leading-tight">
                Built on Trust. <br/> Driven by Results.
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                At PCCI, we don't just build structures; we build trust. Our holistic approach integrates cutting-edge project management with rigorous safety protocols to deliver outstanding results every time.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 pt-4">
                {features.map((feature, i) => (
                  <motion.li 
                    key={i} 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.4 }}
                    className="flex items-center gap-3 bg-slate-50 p-3 rounded-xl border border-slate-100"
                  >
                    <CheckCircle2 className="h-6 w-6 text-blue-600 shrink-0" />
                    <span className="text-slate-800 font-semibold text-sm">{feature}</span>
                  </motion.li>
                ))}
              </ul>
              <div className="pt-8">
                <Link href="/about" className={cn(buttonVariants({ size: "lg" }), "bg-slate-900 hover:bg-blue-600 text-white transition-colors duration-300 rounded-full px-8")}>
                  Discover Our Approach
                </Link>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, x: 50 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="lg:w-1/2 w-full relative"
            >
              {/* Decorative elements behind image */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-100 to-cyan-50 rounded-[2.5rem] transform rotate-3 -z-10"></div>
              <div className="absolute -inset-4 bg-gradient-to-l from-slate-100 to-slate-200 rounded-[2.5rem] transform -rotate-2 -z-10"></div>
              
              <div className="relative aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl ring-1 ring-slate-900/5">
                <div 
                  className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center hover:scale-105 transition-transform duration-1000"
                  aria-hidden="true"
                />
                
                {/* Floating stat card */}
                <motion.div 
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                  className="absolute bottom-8 left-8 right-8 md:right-auto bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-white/50"
                >
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 bg-blue-600 rounded-full flex items-center justify-center text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-slate-900">100%</p>
                      <p className="text-sm font-semibold text-slate-600">Commitment to Safety</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="relative py-32 bg-blue-900 text-white overflow-hidden">
        {/* Dynamic Background Pattern */}
        <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+CgkJPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC4wMDAwMDAsMC4wMDAwMDApIiBmaWxsPSIjRkZGRkZGIj4KCQk8cGF0aCBkPSJNMTUuNSwwTDAuNSwxNS41TDAuNSwwTDE1LjUsMHoiLz4KCQk8cGF0aCBkPSJNMzUuNSw0MEwyMC41LDI1LjVMMjAuNSw0MEwzNS41LDQweiIvPgoJCTwvZz4KCTwvc3ZnPg==')]"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-blue-950 to-transparent"></div>
        
        <div className="container mx-auto px-4 md:px-8 relative z-10 max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h2 className="text-5xl md:text-6xl font-bold tracking-tight">Ready to Start Your Next Project?</h2>
            <p className="text-xl md:text-2xl text-blue-200 max-w-2xl mx-auto leading-relaxed font-light">
              Contact us today to discuss your requirements or submit an RFP. Our team is ready to deliver.
            </p>
            <div className="pt-8">
              <Link href="/contact" className={cn(buttonVariants({ size: "lg" }), "bg-white text-blue-900 hover:bg-blue-50 text-xl h-16 px-12 rounded-full shadow-[0_0_40px_-10px_rgba(255,255,255,0.4)] transition-all hover:shadow-[0_0_60px_-15px_rgba(255,255,255,0.6)] hover:scale-105")}>
                Get in Touch
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

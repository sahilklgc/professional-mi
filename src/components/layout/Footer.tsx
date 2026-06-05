import Link from 'next/link';
import { Building2, Mail, MapPin, Phone, ArrowRight } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-24 pb-12 relative overflow-hidden border-t border-white/5">
      {/* Decorative Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">

          {/* Brand Column */}
          <div className="lg:col-span-4 pr-0 lg:pr-8">
            <Link href="/" className="flex items-center justify-center bg-white rounded-xl mb-6 overflow-hidden w-56 h-36 shrink-0 mx-auto lg:mx-0">
              <img 
                src="/logo.png" 
                alt="PCCI Logo" 
                className="h-[160%] max-w-none w-auto object-contain object-center translate-x-1 translate-y-2" 
              />
            </Link>
            <p className="text-slate-400 leading-relaxed mb-8 font-light">
              Professional Construction and Consultants, Inc. (PCCI) is a Michigan-based Small Business Enterprise established in 2007, delivering excellence in construction, facility maintenance, and public infrastructure support.
            </p>
            <div className="flex gap-4">
              <Link href="/contact" className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-white/5 hover:bg-blue-600 text-white transition-colors duration-300">
                <Mail className="h-4 w-4" />
              </Link>
              <Link href="tel:+12482525958" className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-white/5 hover:bg-blue-600 text-white transition-colors duration-300">
                <Phone className="h-4 w-4" />
              </Link>
              <Link href="#" className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-white/5 hover:bg-blue-600 text-white transition-colors duration-300">
                <MapPin className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-bold mb-6 text-lg tracking-wide">Company</h4>
            <ul className="space-y-4">
              <li><Link href="/about" className="text-slate-400 hover:text-blue-400 hover:translate-x-1 transition-all inline-flex items-center gap-2"><ArrowRight className="h-3 w-3" /> About Us</Link></li>
              <li><Link href="/portfolio" className="text-slate-400 hover:text-blue-400 hover:translate-x-1 transition-all inline-flex items-center gap-2"><ArrowRight className="h-3 w-3" /> Portfolio</Link></li>
              <li><Link href="/contact" className="text-slate-400 hover:text-blue-400 hover:translate-x-1 transition-all inline-flex items-center gap-2"><ArrowRight className="h-3 w-3" /> Contact</Link></li>
              <li><Link href="#" className="text-slate-400 hover:text-blue-400 hover:translate-x-1 transition-all inline-flex items-center gap-2"><ArrowRight className="h-3 w-3" /> Careers</Link></li>
            </ul>
          </div>

          {/* Services Links */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-bold mb-6 text-lg tracking-wide">Services</h4>
            <ul className="space-y-4">
              <li><Link href="/services/construction" className="text-slate-400 hover:text-blue-400 hover:translate-x-1 transition-all inline-flex items-center gap-2"><ArrowRight className="h-3 w-3" /> Construction</Link></li>
              <li><Link href="/services/facility-management" className="text-slate-400 hover:text-blue-400 hover:translate-x-1 transition-all inline-flex items-center gap-2"><ArrowRight className="h-3 w-3" /> Facility Management</Link></li>
              <li><Link href="/services/project-management" className="text-slate-400 hover:text-blue-400 hover:translate-x-1 transition-all inline-flex items-center gap-2"><ArrowRight className="h-3 w-3" /> Project Management</Link></li>
              <li><Link href="/services/industrial-services" className="text-slate-400 hover:text-blue-400 hover:translate-x-1 transition-all inline-flex items-center gap-2"><ArrowRight className="h-3 w-3" /> Industrial Services</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-bold mb-6 text-lg tracking-wide">Get In Touch</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-full bg-blue-500/10 flex items-center justify-center shrink-0 mt-1 text-blue-400">
                  <MapPin className="h-5 w-5" />
                </div>
                <span className="text-slate-400 leading-relaxed text-sm">6428 Royal Pointe Dr<br />West Bloomfield Township, MI 48322</span>
              </li>
              <li className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-full bg-blue-500/10 flex items-center justify-center shrink-0 text-blue-400">
                  <Phone className="h-5 w-5" />
                </div>
                <a href="tel:+12482525958" className="text-slate-400 hover:text-white transition-colors text-sm">+1 (248) 252-5958</a>
              </li>
              <li className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-full bg-blue-500/10 flex items-center justify-center shrink-0 text-blue-400">
                  <Mail className="h-5 w-5" />
                </div>
                <a href="mailto:info@professional-mi.com" className="text-slate-400 hover:text-white transition-colors text-sm">info@professional-mi.com</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 text-sm flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500">
          <p>&copy; {new Date().getFullYear()} PCCI - Professional Construction and Consultants, Inc. All rights reserved.</p>
          <div className="flex gap-4 md:gap-6 flex-wrap justify-center">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="/accessibility" className="hover:text-white transition-colors">Accessibility</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

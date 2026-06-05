import Link from "next/link";
import { ArrowRight, Building2, HardHat, ClipboardCheck, Package, Wrench } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

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

export const metadata = {
  title: "Our Services | PCCI",
  description: "Explore PCCI's comprehensive suite of construction, facility maintenance, and industrial services.",
};

export default function ServicesOverviewPage() {
  return (
    <>
      <section className="bg-slate-900 py-20 text-white">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-slate-300 leading-relaxed">
            PCCI provides a robust portfolio of services designed to meet the rigorous demands of modern business and infrastructure.
          </p>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col h-full">
                <div className="h-14 w-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
                  <service.icon className="h-7 w-7 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h3>
                <p className="text-slate-600 mb-8 flex-1 leading-relaxed">
                  {service.description}
                </p>
                <Link href={service.href} className={cn(buttonVariants({ variant: "outline" }), "w-full justify-between hover:bg-blue-50 hover:text-blue-700 hover:border-blue-200")}>
                  Learn More <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Discuss Your Next Project</h2>
          <p className="text-lg text-slate-600 mb-8">
            Unsure which service fits your needs? Our experts are ready to consult with you and develop a tailored solution.
          </p>
          <Link href="/contact" className={cn(buttonVariants({ size: "lg" }), "bg-blue-600 hover:bg-blue-700 text-white")}>
            Contact Our Team
          </Link>
        </div>
      </section>
    </>
  );
}

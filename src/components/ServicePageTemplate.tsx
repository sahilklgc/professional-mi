import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CheckCircle2, ArrowRight } from "lucide-react";

interface ServicePageTemplateProps {
  title: string;
  description: string;
  overview: string[];
  capabilities: string[];
  benefits: string[];
  process: { title: string; description: string }[];
}

export function ServicePageTemplate({
  title,
  description,
  overview,
  capabilities,
  benefits,
  process,
}: ServicePageTemplateProps) {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-slate-900 py-20 text-white">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{title}</h1>
          <p className="text-xl text-slate-300 leading-relaxed">
            {description}
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            
            {/* Left Column: Capabilities & Process */}
            <div className="space-y-16">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Service Overview</h2>
                <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed space-y-4">
                  {overview.map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Core Capabilities</h2>
                <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
                  <ul className="space-y-4">
                    {capabilities.map((cap, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="h-6 w-6 text-blue-600 shrink-0" />
                        <span className="text-slate-700 font-medium">{cap}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Process</h2>
                <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
                  {process.map((step, i) => (
                    <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-slate-200 text-slate-500 font-bold shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                        {i + 1}
                      </div>
                      <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
                        <h3 className="font-bold text-slate-900 text-lg mb-2">{step.title}</h3>
                        <p className="text-slate-600 text-sm leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Benefits & CTA */}
            <div className="space-y-16 lg:sticky lg:top-24 h-fit">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Key Benefits & Assurances</h2>
                <div className="grid gap-6">
                  {benefits.map((benefit, i) => (
                    <div key={i} className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                      <div className="h-10 w-10 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center shrink-0">
                        <CheckCircle2 className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-slate-700 font-medium leading-relaxed">{benefit}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-slate-950 text-white p-8 md:p-10 rounded-3xl shadow-2xl border border-white/10 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 rounded-full blur-[80px] pointer-events-none -translate-y-1/2 translate-x-1/3"></div>
                <div className="absolute bottom-0 left-0 w-40 h-40 bg-cyan-400/10 rounded-full blur-[60px] pointer-events-none translate-y-1/3 -translate-x-1/4"></div>
                <h3 className="text-2xl font-bold mb-4 relative z-10">Ready for a Consultation?</h3>
                <p className="text-slate-400 mb-8 leading-relaxed relative z-10">
                  Submit an RFP or discuss your next project with us. Our experts are ready to assist.
                </p>
                <div className="flex flex-col gap-4 relative z-10">
                  <Link href="/contact" className={cn(buttonVariants({ size: "lg" }), "bg-blue-600 text-white hover:bg-blue-700 w-full justify-between h-14 px-6 rounded-xl")}>
                    Contact Us <ArrowRight className="h-5 w-5" />
                  </Link>
                  <Link href="/about" className={cn(buttonVariants({ size: "lg", variant: "outline" }), "border-slate-800 text-slate-900 font-semibold hover:bg-slate-800 hover:text-white w-full h-14 rounded-xl")}>
                    Learn More About Us
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}

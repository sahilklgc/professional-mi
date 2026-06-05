import { ServicePageTemplate } from "@/components/ServicePageTemplate";

export const metadata = {
  title: "Industrial Services | PCCI",
  description: "Specialized support and maintenance for complex industrial environments.",
};

export default function IndustrialServicesPage() {
  return (
    <ServicePageTemplate
      title="Industrial Services"
      description="Specialized, high-stakes support and maintenance tailored to the rigorous demands of complex industrial, manufacturing, and processing environments."
      overview={[
        "Industrial environments require a different caliber of expertise. At PCCI, our industrial services division is engineered to handle high-stakes, heavy-duty projects where safety and precision are non-negotiable. Whether it's heavy machinery rigging, complex piping systems, or plant turnarounds, we bring specialized knowledge to every site.",
        "As a certified Small Business Enterprise founded in 2007, we pride ourselves on being agile enough to deploy specialized technicians rapidly, yet robust enough to manage extensive, multi-phase industrial projects. We partner with manufacturing and processing facilities across Michigan to minimize downtime and engineer custom solutions for unique challenges."
      ]}
      capabilities={[
        "Heavy Machinery Installation & Rigging",
        "Industrial Plant Maintenance & Turnarounds",
        "Welding and Custom Fabrication",
        "Industrial Cleaning and Waste Management",
        "Piping and Process Systems Setup"
      ]}
      benefits={[
        "Highly specialized technicians certified for hazardous and complex environments.",
        "Minimized plant downtime during critical turnarounds and outages.",
        "Strict adherence to environmental, health, and industrial safety regulations.",
        "Custom-engineered solutions for unique manufacturing challenges."
      ]}
      process={[
        { title: "Site Assessment", description: "Evaluating the industrial environment to understand safety risks and operational constraints." },
        { title: "Engineering & Planning", description: "Developing detailed technical execution plans for machinery or system interventions." },
        { title: "Safe Execution", description: "Deploying specialized crews to perform the work with zero disruption to unrelated operations." },
        { title: "Testing & Commissioning", description: "Rigorous testing of equipment and systems to ensure full operational readiness." }
      ]}
    />
  );
}

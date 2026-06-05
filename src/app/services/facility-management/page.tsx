import { ServicePageTemplate } from "@/components/ServicePageTemplate";

export const metadata = {
  title: "Facility Management | PCCI",
  description: "Comprehensive maintenance and operational management to keep your facilities running smoothly.",
};

export default function FacilityManagementPage() {
  return (
    <ServicePageTemplate
      title="Facility Management"
      description="Comprehensive maintenance, operational management, and strategic facility planning to ensure your assets are protected and running at peak efficiency."
      overview={[
        "Effective facility management is the backbone of any successful operation. At PCCI, we view facility maintenance not just as a reactive necessity, but as a strategic asset. By proactively managing your HVAC, electrical, and structural systems, we prevent costly downtime and extend the lifecycle of your most critical infrastructure.",
        "Our team handles the day-to-day complexities so you can focus on your core business. From deploying 24/7 emergency response teams to implementing sustainable energy efficiency upgrades, we tailor our management protocols to fit the specific cadence and security requirements of your facility."
      ]}
      capabilities={[
        "Preventative & Reactive Maintenance",
        "HVAC, Electrical, and Plumbing Management",
        "Janitorial & Groundskeeping Services",
        "Security & Access Control Management",
        "Energy Efficiency Audits & Upgrades"
      ]}
      benefits={[
        "Reduced operational downtime through proactive maintenance.",
        "Cost savings via energy efficiency and optimized resource allocation.",
        "24/7 emergency response and support capabilities.",
        "Strict compliance with environmental and health safety standards."
      ]}
      process={[
        { title: "Facility Audit", description: "Comprehensive assessment of current infrastructure, assets, and operational needs." },
        { title: "Customized Strategy", description: "Developing a tailored management plan focusing on preventative maintenance and efficiency." },
        { title: "Implementation", description: "Deploying skilled technicians and managers to execute the daily facility operations." },
        { title: "Reporting & Optimization", description: "Continuous monitoring and monthly reporting to identify areas for further improvement." }
      ]}
    />
  );
}

import { ServicePageTemplate } from "@/components/ServicePageTemplate";

export const metadata = {
  title: "Procurement | Professional MI",
  description: "Strategic sourcing and supply chain solutions tailored to your operational needs.",
};

export default function ProcurementPage() {
  return (
    <ServicePageTemplate
      title="Procurement Services"
      description="Strategic sourcing, vendor management, and supply chain solutions tailored to secure the best materials at the best value for your operations."
      overview={[
        "A reliable supply chain is the lifeblood of any major project. PCCI's procurement division leverages years of industry relationships and bulk purchasing power to secure the highest quality materials and equipment at the best possible value. We strip the friction out of sourcing.",
        "Our approach goes beyond simple purchasing. We actively manage vendor contracts, optimize logistics, and mitigate supply chain risks before they impact your timeline. By ensuring strict compliance with ethical sourcing standards and industry regulations, we deliver a procurement strategy that is both cost-effective and completely transparent."
      ]}
      capabilities={[
        "Strategic Sourcing & Vendor Selection",
        "Contract Negotiation and Management",
        "Supply Chain Optimization",
        "Inventory and Logistics Management",
        "Equipment and Material Acquisition"
      ]}
      benefits={[
        "Significant cost reductions through bulk purchasing and expert negotiation.",
        "Access to a vetted network of high-quality, reliable suppliers.",
        "Mitigation of supply chain disruptions and delivery delays.",
        "Ensured compliance with industry regulations and ethical sourcing standards."
      ]}
      process={[
        { title: "Needs Assessment", description: "Identifying material, equipment, and service requirements for your project." },
        { title: "Market Analysis", description: "Evaluating potential vendors, market trends, and pricing structures." },
        { title: "Sourcing & Negotiation", description: "Requesting proposals, vetting suppliers, and negotiating favorable contract terms." },
        { title: "Fulfillment & Logistics", description: "Managing purchase orders, tracking delivery, and ensuring quality upon arrival." }
      ]}
    />
  );
}

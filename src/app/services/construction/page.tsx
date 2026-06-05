import { ServicePageTemplate } from "@/components/ServicePageTemplate";

export const metadata = {
  title: "Construction Services | PCCI",
  description: "End-to-end commercial and industrial construction services with a focus on safety and quality.",
};

export default function ConstructionPage() {
  return (
    <ServicePageTemplate
      title="Construction Services"
      description="End-to-end commercial and industrial construction services with an unwavering focus on safety, structural integrity, and architectural quality."
      overview={[
        "Our construction division at PCCI is built on a foundation of engineering excellence and rigorous project oversight. We tackle complex structural challenges head-on, from large-scale industrial builds to sophisticated commercial expansions, ensuring that every project is executed with precision.",
        "Leveraging decades of Michigan-based experience, we navigate local zoning, environmental regulations, and material sourcing seamlessly. Whether it's a specialized government facility or a dynamic private development, our commitment remains the same: delivering resilient, high-quality structures that stand the test of time while keeping your operations safe."
      ]}
      capabilities={[
        "Commercial and Industrial Builds",
        "Design-Build & General Contracting",
        "Site Preparation and Excavation",
        "Structural Steel & Concrete Work",
        "Renovations and Expansions"
      ]}
      benefits={[
        "Uncompromising adherence to OSHA and local safety regulations.",
        "Use of premium, sustainable materials to ensure longevity.",
        "Rigorous quality control inspections at every stage.",
        "Transparent cost estimation and strict budget adherence."
      ]}
      process={[
        { title: "Consultation & Design", description: "Collaborating with stakeholders to finalize architectural designs, budgets, and timelines." },
        { title: "Permitting & Site Prep", description: "Securing all necessary approvals and preparing the site for safe construction." },
        { title: "Construction Phase", description: "Executing the build with expert project management and skilled tradesmen." },
        { title: "Inspection & Handover", description: "Final quality assurance walkthroughs before delivering the completed facility." }
      ]}
    />
  );
}

import { ServicePageTemplate } from "@/components/ServicePageTemplate";

export const metadata = {
  title: "Project Management | Professional MI",
  description: "Expert oversight, scheduling, and budget management to ensure successful project delivery.",
};

export default function ProjectManagementPage() {
  return (
    <ServicePageTemplate
      title="Project Management"
      description="Expert oversight, detailed scheduling, and stringent budget management to ensure your complex projects are delivered successfully on time."
      overview={[
        "Complex projects demand singular accountability. PCCI acts as your dedicated project management partner, taking ownership of the entire lifecycle from initial scope definition to final closeout. We bridge the gap between stakeholders, contractors, and vendors to ensure everyone is moving in the exact same direction.",
        "Our methodology relies on proactive risk management and transparent financial reporting. We don't just react to problems; we anticipate them. By implementing stringent cost controls and detailed timelines, our project managers safeguard your budget and guarantee that the final deliverable aligns perfectly with your strategic objectives."
      ]}
      capabilities={[
        "End-to-End Project Lifecycle Oversight",
        "Risk Assessment & Mitigation",
        "Budgeting and Cost Control",
        "Stakeholder Communication & Reporting",
        "Contractor and Vendor Coordination"
      ]}
      benefits={[
        "Single point of contact for streamlined communication and accountability.",
        "Proactive risk management to prevent costly delays.",
        "Accurate forecasting and transparent financial reporting.",
        "Guaranteed alignment with your strategic business objectives."
      ]}
      process={[
        { title: "Project Initiation", description: "Defining project scope, objectives, success criteria, and initial budget." },
        { title: "Detailed Planning", description: "Creating comprehensive timelines, resource allocation plans, and risk registers." },
        { title: "Execution & Coordination", description: "Directing teams, managing procurement, and ensuring work meets quality standards." },
        { title: "Monitoring & Closeout", description: "Tracking progress against KPIs and conducting a final review for project sign-off." }
      ]}
    />
  );
}

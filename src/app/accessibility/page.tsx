import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Accessibility Statement | PCCI',
  description: 'Accessibility Statement for Professional Construction and Consultants, Inc. (PCCI)',
};

export default function AccessibilityStatementPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24 max-w-4xl">
      <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Accessibility Statement</h1>
      
      <div className="space-y-6 text-slate-600 leading-relaxed">
        <p className="text-sm text-slate-500 mb-8 pb-8 border-b border-slate-200">
          <strong>Effective Date:</strong> June 5, 2026 &nbsp;|&nbsp; <strong>Last Updated:</strong> June 5, 2026
        </p>

        <p>
          At Professional Construction and Consultants, Inc. (PCCI) (“we,” “our,” or “us”), we are committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone and applying the relevant accessibility standards to guarantee we provide equal access to all of our users.
        </p>

        <h2 className="text-2xl font-bold text-slate-900 pt-6">1. Conformance Status</h2>
        <p>The Web Content Accessibility Guidelines (WCAG) defines requirements for designers and developers to improve accessibility for people with disabilities. It defines three levels of conformance: Level A, Level AA, and Level AAA.</p>
        <p>PCCI is partially conformant with WCAG 2.1 level AA. Partially conformant means that some parts of the content do not fully conform to the accessibility standard. We are actively working to increase the accessibility and usability of our website and, in doing so, adhere to many of the available standards and guidelines.</p>

        <h2 className="text-2xl font-bold text-slate-900 pt-6">2. Our Commitment</h2>
        <p>We believe that the internet should be available and accessible to anyone, and are committed to providing a website that is accessible to the widest possible audience, regardless of circumstance and ability.</p>
        <p>To fulfill this, we aim to adhere as strictly as possible to the World Wide Web Consortium’s (W3C) Web Content Accessibility Guidelines 2.1 (WCAG 2.1) at the AA level.</p>
        <p>These guidelines explain how to make web content accessible to people with a wide array of disabilities. Complying with those guidelines helps us ensure that the website is accessible to all people: blind people, people with motor impairments, visual impairment, cognitive disabilities, and more.</p>

        <h2 className="text-2xl font-bold text-slate-900 pt-6">3. Compatibility with Browsers and Assistive Technology</h2>
        <p>The PCCI website is designed to be compatible with the following assistive technologies:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Recent versions of screen readers (such as NVDA, JAWS, and VoiceOver).</li>
          <li>Operating system built-in magnification tools.</li>
          <li>Basic operating system speech recognition software.</li>
          <li>Standard keyboard navigation and alternative input devices.</li>
        </ul>
        <p>Our website relies on HTML, CSS, and JavaScript to work properly and in combination with the assistive technologies used by our visitors.</p>

        <h2 className="text-2xl font-bold text-slate-900 pt-6">4. Known Limitations</h2>
        <p>Despite our best efforts to ensure accessibility of the PCCI website, there may be some limitations. Below is a description of known limitations. Please contact us if you observe an issue not listed below.</p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Third-Party Content:</strong> Some embedded content from third-party sources may not be fully accessible or properly tagged.</li>
          <li><strong>Legacy Documents:</strong> Older PDF documents or media might not meet current accessibility standards.</li>
        </ul>

        <h2 className="text-2xl font-bold text-slate-900 pt-6">5. Assessment Approach</h2>
        <p>PCCI assesses the accessibility of its website through the following approaches:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Self-evaluation using automated auditing tools.</li>
          <li>Manual testing with keyboard navigation and screen readers.</li>
          <li>Routine reviews during the design and development phases of new features.</li>
        </ul>

        <h2 className="text-2xl font-bold text-slate-900 pt-6">6. Feedback and Contact</h2>
        <p>We welcome your feedback on the accessibility of the PCCI website. Please let us know if you encounter accessibility barriers:</p>
        <ul className="list-none pl-0 space-y-2">
          <li><strong>Phone:</strong> +1 (248) 252-5958</li>
          <li><strong>E-mail:</strong> info@professional-mi.com</li>
          <li><strong>Visitor Address:</strong> 6428 Royal Pointe Dr, West Bloomfield Township, MI 48322</li>
        </ul>
        <p className="mt-4">Alternatively, you can reach out directly via our Contact Us page. We try to respond to feedback within 2 business days.</p>
      </div>
    </div>
  );
}

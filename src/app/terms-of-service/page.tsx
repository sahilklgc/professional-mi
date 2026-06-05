import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | PCCI',
  description: 'Terms of Service for Professional Construction and Consultants, Inc. (PCCI)',
};

export default function TermsOfServicePage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24 max-w-4xl">
      <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Terms of Service</h1>
      
      <div className="space-y-6 text-slate-600 leading-relaxed">
        <p className="text-sm text-slate-500 mb-8 pb-8 border-b border-slate-200">
          <strong>Effective Date:</strong> June 5, 2026 &nbsp;|&nbsp; <strong>Last Updated:</strong> June 5, 2026
        </p>

        <p>
          Welcome to Professional Construction and Consultants, Inc. (PCCI). These Terms of Service (“Terms”) govern your access to and use of the PCCI website at www.professional-mi.com (the “Site”) and any related services we provide. By accessing or using our Site, you agree to be bound by these Terms. If you do not agree to these Terms, please do not use the Site.
        </p>

        <h2 className="text-2xl font-bold text-slate-900 pt-6">1. Our Services</h2>
        <p>PCCI acts as a construction and consulting firm. We assist clients with construction management, facility maintenance, and public infrastructure support services.</p>
        <p>While we strive to provide accurate recommendations and secure the best outcomes, the actual delivery of specific contracted services will be governed by separate, formal agreements and contracts executed between you and PCCI.</p>

        <h2 className="text-2xl font-bold text-slate-900 pt-6">2. Use of the Site</h2>
        <p>You may use the Site only for lawful purposes and in accordance with these Terms. You agree not to:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Use the Site in any way that violates applicable federal, state, or local laws.</li>
          <li>Attempt to gain unauthorized access to, interfere with, or disrupt any parts of the Site or the servers on which it is stored.</li>
          <li>Use any robot, spider, or other automatic device to scrape or monitor the Site without our prior written consent.</li>
          <li>Transmit any malicious code, viruses, or harmful material through our Contact Us forms.</li>
        </ul>

        <h2 className="text-2xl font-bold text-slate-900 pt-6">3. Intellectual Property Rights</h2>
        <p>The Site and its entire contents, features, and functionality (including but not limited to all information, text, displays, images, video, audio, and the design and arrangement thereof) are owned by PCCI, its licensors, or other providers of such material and are protected by United States and international copyright, trademark, patent, trade secret, and other intellectual property laws.</p>
        <p>You are permitted to use the Site for your legitimate business purposes. You must not reproduce, distribute, modify, create derivative works of, publicly display, or commercially exploit any of the material on our Site without prior written consent from PCCI.</p>

        <h2 className="text-2xl font-bold text-slate-900 pt-6">4. Third-Party Links and Providers</h2>
        <p>Our Site may contain links to third-party websites or services that are not owned or controlled by PCCI. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites or services.</p>
        <p>Any recommendations we make regarding third-party vendors or subcontractors are based on our industry expertise. However, we do not warrant the performance or reliability of any third-party provider outside of our direct contractual obligations.</p>

        <h2 className="text-2xl font-bold text-slate-900 pt-6">5. Disclaimer of Warranties</h2>
        <p className="uppercase">Your use of the site is at your own risk. The site and its content are provided on an “as is” and “as available” basis, without any warranties of any kind, either express or implied. PCCI disclaims all warranties, including but not limited to merchantability, fitness for a particular purpose, and non-infringement.</p>
        <p>We do not warrant that the Site will be uninterrupted, error-free, completely secure, or free of viruses.</p>

        <h2 className="text-2xl font-bold text-slate-900 pt-6">6. Limitation of Liability</h2>
        <p className="uppercase">To the fullest extent provided by law, in no event will PCCI, its affiliates, or their licensors, service providers, employees, agents, officers, or directors be liable for damages of any kind, under any legal theory, arising out of or in connection with your use, or inability to use, the site.</p>
        <p>This includes any direct, indirect, special, incidental, consequential, or punitive damages, including but not limited to, personal injury, pain and suffering, emotional distress, loss of revenue, loss of profits, loss of business, loss of data, and whether caused by tort (including negligence), breach of contract, or otherwise.</p>

        <h2 className="text-2xl font-bold text-slate-900 pt-6">7. Indemnification</h2>
        <p>You agree to defend, indemnify, and hold harmless PCCI and its affiliates, officers, directors, employees, contractors, and agents from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees (including reasonable attorneys’ fees) arising out of or relating to your violation of these Terms or your use of the Site.</p>

        <h2 className="text-2xl font-bold text-slate-900 pt-6">8. Privacy</h2>
        <p>All information we collect on this Site is subject to our Privacy Policy. By using the Site, you consent to all actions taken by us with respect to your information in compliance with the Privacy Policy.</p>

        <h2 className="text-2xl font-bold text-slate-900 pt-6">9. Governing Law and Jurisdiction</h2>
        <p>All matters relating to the Site and these Terms, and any dispute or claim arising therefrom or related thereto, shall be governed by and construed in accordance with the internal laws of the State of Michigan without giving effect to any choice or conflict of law provision or rule.</p>
        <p>Any legal suit, action, or proceeding arising out of, or related to, these Terms or the Site shall be instituted exclusively in the federal or state courts located in Michigan.</p>

        <h2 className="text-2xl font-bold text-slate-900 pt-6">10. Changes to the Terms</h2>
        <p>We may revise and update these Terms of Service from time to time in our sole discretion. All changes are effective immediately when we post them. Your continued use of the Site following the posting of revised Terms means that you accept and agree to the changes.</p>

        <h2 className="text-2xl font-bold text-slate-900 pt-6">11. Contact Us</h2>
        <p>If you have any questions or comments about these Terms of Service, please contact us via our Contact Us page.</p>
      </div>
    </div>
  );
}

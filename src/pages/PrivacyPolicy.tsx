
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
  const getCurrentDate = () => {
    return new Date().toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-mint-50 to-slate-50">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="mb-8">
          <Link to="/">
            <Button variant="ghost" className="mb-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
        </div>

        <Card className="shadow-lg">
          <CardContent className="p-8 prose prose-slate max-w-none">
            <h1 className="text-3xl font-bold text-slate-900 mb-6">Privacy Policy</h1>
            
            <div className="text-sm text-slate-600 mb-8">
              <p><strong>Effective Date:</strong> May 27, 2025</p>
              <p><strong>Last Updated:</strong> {getCurrentDate()}</p>
            </div>

            <p className="text-slate-700 leading-relaxed mb-6">
              This Privacy Policy explains how SiteMint ("we", "us", "our") collects, uses, shares, and protects information when you visit our website, request a website preview, or engage with our services. We are committed to respecting your privacy and complying with all applicable privacy laws.
            </p>

            <hr className="my-8 border-slate-200" />

            <h2 className="text-2xl font-semibold text-slate-900 mb-4">1. Information We Collect</h2>
            <p className="text-slate-700 mb-4">
              We collect two types of information: <strong>(1) Information you provide directly</strong> and <strong>(2) Information collected automatically</strong>.
            </p>

            <h3 className="text-xl font-semibold text-slate-800 mb-3">1.1 Information You Provide</h3>
            <ul className="list-disc list-inside text-slate-700 mb-4 space-y-2">
              <li><strong>Contact Information:</strong> Name, business name, email, phone number</li>
              <li><strong>Website URLs:</strong> When you request a preview or service</li>
              <li><strong>Service Requests & Feedback:</strong> Comments, custom branding input, and design requests</li>
            </ul>

            <h3 className="text-xl font-semibold text-slate-800 mb-3">1.2 Information Collected Automatically</h3>
            <ul className="list-disc list-inside text-slate-700 mb-6 space-y-2">
              <li><strong>Usage Data:</strong> Pages visited, referral source, and interactions on the website</li>
              <li><strong>Device & Browser Information:</strong> IP address, device type, browser type, operating system</li>
              <li><strong>Cookies & Tracking Technologies:</strong> We use cookies to enhance your experience, track site usage, and deliver relevant content</li>
            </ul>

            <hr className="my-8 border-slate-200" />

            <h2 className="text-2xl font-semibold text-slate-900 mb-4">2. How We Use Your Information</h2>
            <p className="text-slate-700 mb-4">We use your information to:</p>
            <ul className="list-disc list-inside text-slate-700 mb-4 space-y-2">
              <li>Deliver website previews and services</li>
              <li>Respond to inquiries and support requests</li>
              <li>Improve and personalize our services</li>
              <li>Communicate about updates, offers, and services</li>
              <li>Analyze website usage and improve performance</li>
              <li>Maintain security and prevent fraud</li>
            </ul>
            <div className="bg-mint-50 border-l-4 border-mint-400 p-4 mb-6">
              <p className="text-slate-700 italic">We do not sell your personal information.</p>
            </div>

            <hr className="my-8 border-slate-200" />

            <h2 className="text-2xl font-semibold text-slate-900 mb-4">3. How We Share Information</h2>
            <p className="text-slate-700 mb-4">We may share your information with:</p>
            <ul className="list-disc list-inside text-slate-700 mb-4 space-y-2">
              <li><strong>Trusted service providers</strong> who support our business (e.g., hosting, CRM, analytics)</li>
              <li><strong>Contractors or fulfillment partners</strong> working on your project (bound by confidentiality)</li>
              <li><strong>Legal authorities</strong> if required by law or to protect our rights</li>
            </ul>
            <div className="bg-mint-50 border-l-4 border-mint-400 p-4 mb-6">
              <p className="text-slate-700 italic">We do not sell or rent your data to third parties for marketing purposes.</p>
            </div>

            <hr className="my-8 border-slate-200" />

            <h2 className="text-2xl font-semibold text-slate-900 mb-4">4. Use of Publicly Available Content</h2>
            <p className="text-slate-700 mb-4">
              When preparing a website preview, we may use publicly available content (e.g., your existing business website, logo, images, and copy) solely for the purpose of demonstrating what a new site might look like.
            </p>
            <div className="bg-mint-50 border-l-4 border-mint-400 p-4 mb-6">
              <p className="text-slate-700"><strong>Important:</strong> We do <strong>not</strong> publish, launch, or distribute these preview builds without your written consent. All final websites are subject to your review and approval.</p>
            </div>

            <hr className="my-8 border-slate-200" />

            <h2 className="text-2xl font-semibold text-slate-900 mb-4">5. Cookies & Tracking</h2>
            <p className="text-slate-700 mb-4">We use cookies to:</p>
            <ul className="list-disc list-inside text-slate-700 mb-4 space-y-2">
              <li>Understand how users interact with our website</li>
              <li>Store user preferences and improve functionality</li>
              <li>Track conversions for advertising and outreach purposes</li>
            </ul>
            <p className="text-slate-700 mb-6">You can control cookies through your browser settings.</p>

            <hr className="my-8 border-slate-200" />

            <h2 className="text-2xl font-semibold text-slate-900 mb-4">6. Your Choices</h2>
            <p className="text-slate-700 mb-4">You may:</p>
            <ul className="list-disc list-inside text-slate-700 mb-4 space-y-2">
              <li>Opt out of marketing emails at any time via the "unsubscribe" link</li>
              <li>Request access to or deletion of your personal information</li>
              <li>Ask us to correct inaccurate information</li>
            </ul>
            <p className="text-slate-700 mb-6">To make a request, email us at hello@sitemint.ai.</p>

            <hr className="my-8 border-slate-200" />

            <h2 className="text-2xl font-semibold text-slate-900 mb-4">7. Data Security</h2>
            <p className="text-slate-700 mb-6">
              We implement industry-standard security measures to protect your data. However, no online platform can guarantee complete security. Please use discretion when submitting personal information.
            </p>

            <hr className="my-8 border-slate-200" />

            <h2 className="text-2xl font-semibold text-slate-900 mb-4">8. Children's Privacy</h2>
            <p className="text-slate-700 mb-6">
              Our services are not directed to children under 13. We do not knowingly collect personal information from minors.
            </p>

            <hr className="my-8 border-slate-200" />

            <h2 className="text-2xl font-semibold text-slate-900 mb-4">9. Data Retention</h2>
            <p className="text-slate-700 mb-4">We retain personal data only as long as necessary to:</p>
            <ul className="list-disc list-inside text-slate-700 mb-6 space-y-2">
              <li>Fulfill the purpose for which it was collected</li>
              <li>Comply with legal obligations</li>
              <li>Enforce agreements and resolve disputes</li>
            </ul>

            <hr className="my-8 border-slate-200" />

            <h2 className="text-2xl font-semibold text-slate-900 mb-4">10. Third-Party Links</h2>
            <p className="text-slate-700 mb-6">
              Our website may include links to third-party sites (e.g., demo previews, hosting platforms). We are not responsible for the privacy practices or content of these external websites.
            </p>

            <hr className="my-8 border-slate-200" />

            <h2 className="text-2xl font-semibold text-slate-900 mb-4">11. Changes to This Policy</h2>
            <p className="text-slate-700 mb-6">
              We may update this Privacy Policy occasionally. Changes will be posted on this page with a revised effective date. Continued use of our site means you accept the updated terms.
            </p>

            <hr className="my-8 border-slate-200" />

            <h2 className="text-2xl font-semibold text-slate-900 mb-4">12. Contact Us</h2>
            <p className="text-slate-700 mb-4">
              If you have any questions about this Privacy Policy or your personal data, please contact:
            </p>
            <div className="bg-slate-50 p-4 rounded-lg">
              <p className="text-slate-700 font-semibold">SiteMint</p>
              <p className="text-slate-700">655 Southwood Ln Windsor, CO 80550</p>
              <p className="text-slate-700">hello@sitemint.ai</p>
              <p className="text-slate-700">9704788220</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PrivacyPolicy;

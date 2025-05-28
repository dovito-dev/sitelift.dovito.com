import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Terms = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
            <h1 className="text-3xl font-bold text-slate-900 mb-6">Terms and Conditions</h1>
            
            <div className="text-sm text-slate-600 mb-8">
              <p><strong>Effective Date:</strong> May 27, 2025</p>
              <p><strong>Last Updated:</strong> {getCurrentDate()}</p>
            </div>

            <p className="text-slate-700 leading-relaxed mb-6">
              Welcome to SiteMint. These Terms and Conditions ("Terms") govern your access to and use of the SiteMint website and services (collectively, the "Services") provided by SiteMint ("we", "us", or "our"). By using our Services, you agree to be bound by these Terms. If you do not agree, please do not use our Services.
            </p>

            <hr className="my-8 border-slate-200" />

            <h2 className="text-2xl font-semibold text-slate-900 mb-4">1. Service Overview</h2>
            <p className="text-slate-700 mb-4">
              SiteMint provides custom-designed websites and marketing services, including same-day website previews built using publicly available content and branding elements from your existing website or digital presence.
            </p>
            <div className="bg-mint-50 border-l-4 border-mint-400 p-4 mb-6">
              <p className="text-slate-700"><strong>Important:</strong> Preview websites are <em>not</em> live or published without your written consent. Final websites are built only after agreement on scope, terms, and fees.</p>
            </div>

            <hr className="my-8 border-slate-200" />

            <h2 className="text-2xl font-semibold text-slate-900 mb-4">2. Eligibility</h2>
            <p className="text-slate-700 mb-4">To use our Services, you must:</p>
            <ul className="list-disc list-inside text-slate-700 mb-6 space-y-2">
              <li>Be at least 18 years old</li>
              <li>Be authorized to represent the business you provide content for</li>
              <li>Agree to these Terms on behalf of yourself or your business</li>
            </ul>

            <hr className="my-8 border-slate-200" />

            <h2 className="text-2xl font-semibold text-slate-900 mb-4">3. Service Options & Add-Ons</h2>
            <p className="text-slate-700 mb-4">We currently offer two core services:</p>
            <ul className="list-disc list-inside text-slate-700 mb-4 space-y-2">
              <li><strong>Done + Ready:</strong> One-time site build using existing branding and copy</li>
              <li><strong>Custom Design:</strong> Collaborative website design process with brand consultation</li>
            </ul>
            <p className="text-slate-700 mb-4">Optional monthly add-ons include:</p>
            <ul className="list-disc list-inside text-slate-700 mb-4 space-y-2">
              <li><strong>Hosting ($39/mo)</strong></li>
              <li><strong>Marketing Automation ($197/mo)</strong></li>
              <li><strong>Unlimited Update Support ($497/mo, quarterly commitment)</strong></li>
            </ul>
            <p className="text-slate-700 mb-6">We reserve the right to change service offerings and prices at any time.</p>

            <hr className="my-8 border-slate-200" />

            <h2 className="text-2xl font-semibold text-slate-900 mb-4">4. Payment Terms</h2>
            <ul className="list-disc list-inside text-slate-700 mb-6 space-y-2">
              <li>All invoices must be paid before any final website is published or transferred.</li>
              <li>Monthly services (e.g., hosting, marketing automation) are billed automatically and renew until canceled.</li>
              <li>The <strong>Unlimited Update Support</strong> add-on requires a minimum 3-month commitment.</li>
              <li>Failure to pay on time may result in account suspension or service termination.</li>
            </ul>

            <hr className="my-8 border-slate-200" />

            <h2 className="text-2xl font-semibold text-slate-900 mb-4">5. Refunds</h2>
            <p className="text-slate-700 mb-4">Due to the custom and time-sensitive nature of our work:</p>
            <ul className="list-disc list-inside text-slate-700 mb-4 space-y-2">
              <li>All <strong>one-time fees are non-refundable</strong> once work has commenced.</li>
              <li>Monthly services may be canceled with 7 days' notice before renewal.</li>
              <li>No refunds are issued for unused portions of monthly services.</li>
            </ul>
            <p className="text-slate-700 mb-6">If you are unsatisfied, please contact us at hello@sitemint.ai and we'll do our best to resolve the issue.</p>

            <hr className="my-8 border-slate-200" />

            <h2 className="text-2xl font-semibold text-slate-900 mb-4">6. Intellectual Property</h2>
            
            <h3 className="text-xl font-semibold text-slate-800 mb-3">6.1 Preview Use of Public Content</h3>
            <p className="text-slate-700 mb-4">
              We use your publicly available branding, images, and website copy solely to generate a <strong>private preview</strong> of a new website for internal review purposes. This may include logos, photos, and business descriptions currently visible online.
            </p>
            <p className="text-slate-700 mb-4">You acknowledge and agree that:</p>
            <ul className="list-disc list-inside text-slate-700 mb-4 space-y-2">
              <li>You grant us a temporary, limited license to use this material to create previews</li>
              <li>No preview will be published or shared publicly without your written consent</li>
            </ul>

            <h3 className="text-xl font-semibold text-slate-800 mb-3">6.2 Final Deliverables</h3>
            <p className="text-slate-700 mb-4">
              Upon full payment, you will receive full usage rights to your final website. You are responsible for ensuring you have the rights to all content you provide.
            </p>

            <h3 className="text-xl font-semibold text-slate-800 mb-3">6.3 SiteMint Assets</h3>
            <p className="text-slate-700 mb-6">
              Certain components of your site may include proprietary frameworks, code libraries, or design elements developed by SiteMint. These are licensed to you for use on your site only and may not be resold, redistributed, or modified for other commercial projects.
            </p>

            <hr className="my-8 border-slate-200" />

            <h2 className="text-2xl font-semibold text-slate-900 mb-4">7. User Responsibilities</h2>
            <p className="text-slate-700 mb-4">You agree to:</p>
            <ul className="list-disc list-inside text-slate-700 mb-6 space-y-2">
              <li>Provide accurate information during the intake and preview process</li>
              <li>Not use our services for unlawful or unethical business activities</li>
              <li>Obtain all necessary rights to logos, photos, and copy you provide for use</li>
            </ul>

            <hr className="my-8 border-slate-200" />

            <h2 className="text-2xl font-semibold text-slate-900 mb-4">8. Disclaimers</h2>
            <ul className="list-disc list-inside text-slate-700 mb-6 space-y-2">
              <li>SiteMint provides general website marketing and design services. We are not liable for business performance, sales outcomes, or SEO ranking results.</li>
              <li>We make no guarantee of lead generation, sales volume, or business success.</li>
              <li>You are responsible for maintaining business compliance and website content accuracy.</li>
            </ul>

            <hr className="my-8 border-slate-200" />

            <h2 className="text-2xl font-semibold text-slate-900 mb-4">9. Limitation of Liability</h2>
            <p className="text-slate-700 mb-4">To the fullest extent permitted by law:</p>
            <ul className="list-disc list-inside text-slate-700 mb-6 space-y-2">
              <li>SiteMint shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of our services.</li>
              <li>Our total liability for any claim shall not exceed the amount paid by you in the prior 3-month period for the services in question.</li>
            </ul>

            <hr className="my-8 border-slate-200" />

            <h2 className="text-2xl font-semibold text-slate-900 mb-4">10. Confidentiality</h2>
            <p className="text-slate-700 mb-6">
              Any client login credentials, business information, or brand materials shared with us will be kept confidential and used solely for the purpose of providing the contracted services.
            </p>

            <hr className="my-8 border-slate-200" />

            <h2 className="text-2xl font-semibold text-slate-900 mb-4">11. Termination</h2>
            <p className="text-slate-700 mb-4">We reserve the right to suspend or terminate service if:</p>
            <ul className="list-disc list-inside text-slate-700 mb-6 space-y-2">
              <li>You breach these Terms</li>
              <li>You engage in abusive, fraudulent, or unethical behavior</li>
              <li>You fail to pay invoices after reasonable notice</li>
            </ul>

            <hr className="my-8 border-slate-200" />

            <h2 className="text-2xl font-semibold text-slate-900 mb-4">12. Governing Law</h2>
            <p className="text-slate-700 mb-6">
              These Terms are governed by the laws of the State of Colorado, without regard to conflict of law principles. You agree to submit to the exclusive jurisdiction of the courts located in Windsor, Colorado.
            </p>

            <hr className="my-8 border-slate-200" />

            <h2 className="text-2xl font-semibold text-slate-900 mb-4">13. Changes to These Terms</h2>
            <p className="text-slate-700 mb-6">
              We may update these Terms from time to time. Any updates will be posted to this page with a new effective date. Continued use of the Services constitutes acceptance of the revised Terms.
            </p>

            <hr className="my-8 border-slate-200" />

            <h2 className="text-2xl font-semibold text-slate-900 mb-4">14. Contact Information</h2>
            <p className="text-slate-700 mb-4">
              If you have questions about these Terms, please contact:
            </p>
            <div className="bg-slate-50 p-4 rounded-lg">
              <p className="text-slate-700 font-semibold">SiteMint</p>
              <p className="text-slate-700">655 Southwood Ln Windsor, CO 80550</p>
              <p className="text-slate-700">hello@sitemint.ai</p>
              <p className="text-slate-700">9704788220</p>
            </div>

            <hr className="my-8 border-slate-200" />

            <p className="text-slate-700 mb-6">
              Thank you for trusting SiteMint. We look forward to helping you modernize your online presence.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Terms;

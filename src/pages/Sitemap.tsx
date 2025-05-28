import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const Sitemap = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollToSection = (sectionId: string) => {
    // Navigate to home page first, then scroll to section
    window.location.href = `/#${sectionId}`;
  };

  const pages = [
    { name: 'Home', path: '/', description: 'Main landing page with all services and information' },
    { name: 'Privacy Policy', path: '/privacy-policy', description: 'Our privacy policy and data handling practices' },
    { name: 'Terms and Conditions', path: '/terms', description: 'Terms of service and conditions of use' },
  ];

  const sections = [
    { name: 'Hero Section', id: 'hero', description: 'Main banner with company introduction' },
    { name: 'How It Works', id: 'how-it-works', description: 'Process overview and workflow explanation' },
    { name: 'Packages', id: 'packages', description: 'Service packages and pricing options' },
    { name: 'Add-Ons', id: 'add-ons', description: 'Additional services and monthly subscriptions' },
    { name: 'Showcase', id: 'showcase', description: 'Portfolio of completed websites' },
    { name: 'About', id: 'about', description: 'Company information and team details' },
    { name: 'Contact', id: 'contact', description: 'Contact form and business information' },
  ];

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

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900 mb-4">Sitemap</h1>
          <p className="text-slate-600">Complete overview of all pages and sections on the SiteMint website.</p>
        </div>

        <div className="grid gap-6">
          {/* Main Pages */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl text-slate-900">Pages</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {pages.map((page) => (
                  <div key={page.path} className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                    <div>
                      <h3 className="font-semibold text-slate-900">{page.name}</h3>
                      <p className="text-sm text-slate-600">{page.description}</p>
                    </div>
                    <Link to={page.path}>
                      <Button variant="outline" size="sm">
                        Visit <ExternalLink className="w-3 h-3 ml-1" />
                      </Button>
                    </Link>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Homepage Sections */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl text-slate-900">Homepage Sections</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {sections.map((section) => (
                  <div key={section.id} className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                    <div>
                      <h3 className="font-semibold text-slate-900">{section.name}</h3>
                      <p className="text-sm text-slate-600">{section.description}</p>
                    </div>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => scrollToSection(section.id)}
                    >
                      View <ExternalLink className="w-3 h-3 ml-1" />
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl text-slate-900">Contact Information</CardTitle>
            </CardHeader>
            <CardContent>
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
    </div>
  );
};

export default Sitemap;

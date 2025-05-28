
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ContactFormPopup } from '@/components/ContactSection';

const HowItWorksSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const steps = [
    {
      number: "01",
      title: "We Identify Outdated Sites",
      description: "Our team finds Colorado businesses with websites that need a modern refresh.",
      icon: "🔍"
    },
    {
      number: "02", 
      title: "We Rebuild Using Your Content",
      description: "We create a modern version using your existing branding, content, and business information.",
      icon: "⚡"
    },
    {
      number: "03",
      title: "You Preview and Approve",
      description: "See your new site first. Love it? Launch it. Want changes? We'll customize it perfectly.",
      icon: "✨"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            How It Works
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            From outdated to outstanding in three simple steps. No hassle, no long waits.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {steps.map((step, index) => (
            <Card key={index} className="border-2 border-slate-100 hover:border-mint-200 transition-all duration-300 hover-scale">
              <CardContent className="p-8 text-center">
                <div className="text-4xl mb-4">{step.icon}</div>
                <div className="text-mint-600 font-bold text-lg mb-2">{step.number}</div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">{step.title}</h3>
                <p className="text-slate-600 leading-relaxed">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <ContactFormPopup>
            <Button 
              size="lg"
              className="bg-mint-600 hover:bg-mint-700 text-white px-8 py-4 rounded-full text-lg font-semibold hover-scale"
            >
              See My New Site
            </Button>
          </ContactFormPopup>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;

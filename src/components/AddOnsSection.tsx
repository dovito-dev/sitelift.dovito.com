
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { ChevronDown } from 'lucide-react';

const AddOnsSection = () => {
  const [openAddOns, setOpenAddOns] = useState<number[]>([]);

  const toggleAddOn = (index: number) => {
    setOpenAddOns(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const addOns = [
    {
      title: "Hosting",
      description: "Fast, secure hosting with 99.9% uptime guarantee",
      features: [
        "Lightning-fast SSD storage",
        "SSL certificate included",
        "Daily automated backups",
        "24/7 monitoring and support"
      ]
    },
    {
      title: "Marketing Automation",
      description: "Complete marketing system to grow your business",
      features: [
        "Email marketing campaigns",
        "Customer relationship management",
        "Analytics and reporting",
        "Social media integration"
      ]
    },
    {
      title: "24/7 Unlimited Edits",
      description: "Unlimited website updates whenever you need them",
      features: [
        "Unlimited content updates",
        "Design modifications",
        "New page creation",
        "Priority support response"
      ]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Powerful Add-Ons
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Take your website further with professional services that grow your business.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {addOns.map((addOn, index) => (
            <Collapsible key={index} open={openAddOns.includes(index)} onOpenChange={() => toggleAddOn(index)}>
              <Card className="border-2 border-slate-200 hover:border-mint-300 transition-all duration-300">
                <CollapsibleTrigger className="w-full">
                  <CardHeader className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="text-left">
                        <h3 className="text-xl font-semibold text-slate-900">{addOn.title}</h3>
                        <p className="text-slate-600 mt-1">{addOn.description}</p>
                      </div>
                      <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform ${openAddOns.includes(index) ? 'rotate-180' : ''}`} />
                    </div>
                  </CardHeader>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <CardContent className="px-6 pb-6">
                    <div className="border-t border-slate-200 pt-4">
                      <ul className="grid md:grid-cols-2 gap-3">
                        {addOn.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start">
                            <span className="text-mint-600 mr-2">✓</span>
                            <span className="text-slate-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </CollapsibleContent>
              </Card>
            </Collapsible>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            onClick={scrollToContact}
            size="lg"
            className="bg-mint-600 hover:bg-mint-700 text-white px-8 py-4 rounded-full text-lg font-semibold hover-scale"
          >
            Add to My Site
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AddOnsSection;

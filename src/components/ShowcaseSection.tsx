
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const ShowcaseSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const showcaseItems = [
    {
      title: "Mountain View Restaurant",
      category: "Restaurant",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=300&fit=crop"
    },
    {
      title: "Alpine Fitness Studio", 
      category: "Fitness",
      image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=400&h=300&fit=crop"
    },
    {
      title: "Colorado Home Services",
      category: "Home Services", 
      image: "https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?w=400&h=300&fit=crop"
    },
    {
      title: "Downtown Law Office",
      category: "Professional Services",
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=400&h=300&fit=crop"
    },
    {
      title: "Mountain Gear Outfitters",
      category: "Retail",
      image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=400&h=300&fit=crop"
    },
    {
      title: "Boulder Tech Consulting",
      category: "Technology",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop"
    }
  ];

  return (
    <section id="showcase" className="py-20 gradient-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            See What's Possible
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Real transformations for Colorado businesses across every industry.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {showcaseItems.map((item, index) => (
            <Card key={index} className="border-2 border-slate-200 hover:border-navy-300 transition-all duration-300 hover-scale bg-white overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-navy-100 to-navy-200 relative overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-navy-900/20"></div>
              </div>
              <CardContent className="p-6">
                <div className="text-sm text-navy-600 font-medium mb-2">{item.category}</div>
                <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button 
            onClick={scrollToContact}
            size="lg"
            className="bg-navy-600 hover:bg-navy-700 text-white px-8 py-4 rounded-full text-lg font-semibold hover-scale"
          >
            Request a Preview for Your Business
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;

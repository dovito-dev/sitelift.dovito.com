import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
const PackagesSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <section id="packages" className="py-20 gradient-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Pick Your Pace
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Choose the approach that fits your timeline and vision.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card className="border-2 border-slate-200 hover:border-mint-300 transition-all duration-300 hover-scale bg-white">
            <CardHeader className="text-center p-8">
              <div className="w-16 h-16 bg-mint-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Done + Ready</h3>
              <p className="text-slate-600">Perfect for businesses that want a modern site fast</p>
            </CardHeader>
            <CardContent className="px-8 pb-8">
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-mint-600 mr-2">✓</span>
                  <span className="text-slate-700">Professional preview ready in business week</span>
                </li>
                <li className="flex items-start">
                  <span className="text-mint-600 mr-2">✓</span>
                  <span className="text-slate-700">Modern design using your existing content</span>
                </li>
                <li className="flex items-start">
                  <span className="text-mint-600 mr-2">✓</span>
                  <span className="text-slate-700">Mobile-optimized and fast loading</span>
                </li>
                <li className="flex items-start">
                  <span className="text-mint-600 mr-2">✓</span>
                  <span className="text-slate-700">One-time fee, fast turnaround</span>
                </li>
              </ul>
              <Button onClick={scrollToContact} className="w-full bg-mint-600 hover:bg-mint-700 text-white py-3 rounded-full font-semibold">
                Request Preview
              </Button>
            </CardContent>
          </Card>

          <Card className="border-2 border-slate-200 hover:border-mint-300 transition-all duration-300 hover-scale bg-white">
            <CardHeader className="text-center p-8">
              <div className="w-16 h-16 bg-mint-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎨</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Custom Design</h3>
              <p className="text-slate-600">Full collaboration for a complete brand transformation</p>
            </CardHeader>
            <CardContent className="px-8 pb-8">
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-mint-600 mr-2">✓</span>
                  <span className="text-slate-700">Completely branded and design overhaul</span>
                </li>
                <li className="flex items-start">
                  <span className="text-mint-600 mr-2">✓</span>
                  <span className="text-slate-700">Full collaboration throughout process</span>
                </li>
                <li className="flex items-start">
                  <span className="text-mint-600 mr-2">✓</span>
                  <span className="text-slate-700">Custom features and functionality</span>
                </li>
                <li className="flex items-start">
                  <span className="text-mint-600 mr-2">✓</span>
                  <span className="text-slate-700">High-touch, personalized service</span>
                </li>
              </ul>
              <Button onClick={scrollToContact} className="w-full bg-mint-600 hover:bg-mint-700 text-white py-3 rounded-full font-semibold">
                Request Preview
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>;
};
export default PackagesSection;
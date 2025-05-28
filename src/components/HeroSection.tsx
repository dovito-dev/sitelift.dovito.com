import { Button } from '@/components/ui/button';
const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <section className="pt-20 pb-16 gradient-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6 leading-tight my-[64px] lg:text-6xl">
              Your New Website Is{' '}
              <span className="text-mint-600">
Already Built</span>
            </h1>
            
            <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed my-[26px] sm:text-2xl">
              We modernize your outdated site — fast. Ready to launch today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button onClick={scrollToContact} size="lg" className="bg-mint-600 hover:bg-mint-700 text-white px-8 py-4 rounded-full text-lg font-semibold hover-scale shadow-lg">
                See Your Preview
              </Button>
              <p className="text-sm text-slate-500">Free • No commitment • For Colorado businesses</p>
            </div>
          </div>

          <div className="mt-16 relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-5xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="text-left">
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4">
                    <h3 className="font-semibold text-red-800 mb-2">Before: Outdated</h3>
                    <div className="bg-gray-200 h-32 rounded flex items-center justify-center">
                      <span className="text-gray-500 text-sm">Old, slow, not mobile-friendly</span>
                    </div>
                  </div>
                </div>
                <div className="text-left">
                  <div className="bg-mint-50 border border-mint-200 rounded-lg p-4">
                    <h3 className="font-semibold text-mint-800 mb-2">After: Modern</h3>
                    <div className="bg-gradient-to-br from-mint-100 to-mint-200 h-32 rounded flex items-center justify-center">
                      <span className="text-mint-700 text-sm">Fast, beautiful, mobile-optimized</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;
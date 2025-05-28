
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

  return (
    <section className="pt-20 pb-16 gradient-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6 leading-tight my-[64px] lg:text-6xl">
              Your New Website Is{' '}
              <span className="text-mint-600">Already Built</span>
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
                    <div className="bg-gray-300 rounded border-2 border-gray-400 overflow-hidden">
                      {/* Animated old website mockup */}
                      <div className="bg-gray-400 h-6 flex items-center px-2">
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                          <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                          <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                        </div>
                      </div>
                      <div className="bg-gray-200 p-3 h-24">
                        <div className="bg-gray-400 h-2 w-16 mb-2 animate-pulse"></div>
                        <div className="bg-gray-300 h-1 w-full mb-1 animate-pulse delay-100"></div>
                        <div className="bg-gray-300 h-1 w-3/4 mb-1 animate-pulse delay-200"></div>
                        <div className="bg-gray-300 h-1 w-1/2 animate-pulse delay-300"></div>
                        <div className="flex justify-start mt-2">
                          <div className="bg-gray-400 h-3 w-8 rounded animate-pulse delay-500"></div>
                        </div>
                      </div>
                    </div>
                    <p className="text-xs text-red-600 mt-2">Slow loading, poor mobile experience</p>
                  </div>
                </div>
                <div className="text-left">
                  <div className="bg-mint-50 border border-mint-200 rounded-lg p-4">
                    <h3 className="font-semibold text-mint-800 mb-2">After: Modern</h3>
                    <div className="bg-white rounded border-2 border-mint-200 overflow-hidden shadow-sm">
                      {/* Animated modern website mockup */}
                      <div className="bg-mint-600 h-6 flex items-center px-2">
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-mint-200 rounded-full"></div>
                          <div className="w-2 h-2 bg-mint-200 rounded-full"></div>
                          <div className="w-2 h-2 bg-mint-200 rounded-full"></div>
                        </div>
                      </div>
                      <div className="bg-gradient-to-br from-mint-50 to-white p-3 h-24">
                        <div className="bg-mint-600 h-2 w-20 mb-2 rounded animate-fade-in"></div>
                        <div className="bg-slate-300 h-1 w-full mb-1 rounded animate-fade-in delay-100"></div>
                        <div className="bg-slate-300 h-1 w-4/5 mb-1 rounded animate-fade-in delay-200"></div>
                        <div className="bg-slate-300 h-1 w-3/5 rounded animate-fade-in delay-300"></div>
                        <div className="flex justify-start mt-2">
                          <div className="bg-mint-600 h-3 w-12 rounded-full animate-fade-in delay-500 hover-scale"></div>
                        </div>
                      </div>
                    </div>
                    <p className="text-xs text-mint-600 mt-2">Lightning fast, mobile-optimized design</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;


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
              Your New Website Is<br />
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
                    <div className="bg-gray-100 rounded border border-gray-300 overflow-hidden shadow-inner">
                      {/* Old, clunky browser chrome */}
                      <div className="bg-gray-400 h-8 flex items-center px-3 border-b border-gray-500">
                        <div className="flex space-x-2">
                          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        </div>
                        <div className="ml-4 bg-gray-300 h-4 w-32 rounded"></div>
                      </div>
                      {/* Outdated website content */}
                      <div className="bg-white p-4 h-32">
                        {/* Old-style header with basic styling */}
                        <div className="border-b border-blue-700 pb-2 mb-3">
                          <div className="bg-blue-700 h-4 w-28 mb-2 font-mono"></div>
                          <div className="flex space-x-6 mt-2">
                            <div className="bg-blue-600 h-2 w-12 underline"></div>
                            <div className="bg-blue-600 h-2 w-16 underline"></div>
                            <div className="bg-blue-600 h-2 w-14 underline"></div>
                          </div>
                        </div>
                        {/* Simple, left-aligned content */}
                        <div className="space-y-2">
                          <div className="bg-gray-700 h-2 w-full"></div>
                          <div className="bg-gray-700 h-2 w-5/6"></div>
                          <div className="bg-gray-700 h-2 w-4/5"></div>
                          <div className="bg-gray-700 h-2 w-3/4"></div>
                        </div>
                        <div className="flex justify-start mt-3">
                          <div className="bg-blue-700 h-4 w-20 border border-gray-400"></div>
                        </div>
                      </div>
                    </div>
                    <p className="text-xs text-red-600 mt-2">Slow loading, poor mobile experience, outdated design</p>
                  </div>
                </div>
                <div className="text-left">
                  <div className="bg-mint-50 border border-mint-200 rounded-lg p-4">
                    <h3 className="font-semibold text-mint-800 mb-2">After: Modern</h3>
                    <div className="bg-white rounded-xl border border-mint-100 overflow-hidden shadow-lg">
                      {/* Modern browser chrome */}
                      <div className="bg-gray-50 h-6 flex items-center px-3 border-b border-gray-100">
                        <div className="flex space-x-1.5">
                          <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                          <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                          <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                        </div>
                        <div className="ml-3 bg-gray-100 h-3 w-28 rounded-full"></div>
                      </div>
                      {/* Modern website content */}
                      <div className="bg-gradient-to-br from-mint-50 via-white to-mint-25 p-4 h-32">
                        {/* Modern hero section */}
                        <div className="text-center space-y-2">
                          <div className="bg-gradient-to-r from-mint-600 to-mint-500 h-3 w-20 mx-auto rounded-full animate-fade-in"></div>
                          <div className="space-y-1">
                            <div className="bg-slate-200 h-1.5 w-full rounded-full animate-fade-in delay-100"></div>
                            <div className="bg-slate-200 h-1.5 w-4/5 mx-auto rounded-full animate-fade-in delay-200"></div>
                            <div className="bg-slate-200 h-1.5 w-3/5 mx-auto rounded-full animate-fade-in delay-300"></div>
                          </div>
                          <div className="flex justify-center space-x-2 mt-4">
                            <div className="bg-gradient-to-r from-mint-600 to-mint-500 h-3 w-12 rounded-full animate-fade-in delay-400 hover-scale shadow-sm"></div>
                            <div className="bg-white border border-mint-200 h-3 w-10 rounded-full animate-fade-in delay-500"></div>
                          </div>
                        </div>
                        {/* Modern card elements */}
                        <div className="flex justify-center space-x-1 mt-3">
                          <div className="bg-white rounded h-4 w-6 shadow-sm animate-fade-in delay-600"></div>
                          <div className="bg-white rounded h-4 w-6 shadow-sm animate-fade-in delay-700"></div>
                          <div className="bg-white rounded h-4 w-6 shadow-sm animate-fade-in delay-800"></div>
                        </div>
                      </div>
                    </div>
                    <p className="text-xs text-mint-600 mt-2">Lightning fast, mobile-optimized, modern design</p>
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

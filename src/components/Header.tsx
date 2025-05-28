
import { useState } from 'react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-mint-500 to-mint-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">S</span>
            </div>
            <span className="text-xl font-bold text-slate-900">SiteMint</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('how-it-works')}
              className="text-slate-600 hover:text-mint-600 transition-colors"
            >
              How It Works
            </button>
            <button 
              onClick={() => scrollToSection('packages')}
              className="text-slate-600 hover:text-mint-600 transition-colors"
            >
              Packages
            </button>
            <button 
              onClick={() => scrollToSection('showcase')}
              className="text-slate-600 hover:text-mint-600 transition-colors"
            >
              Showcase
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-slate-600 hover:text-mint-600 transition-colors"
            >
              About
            </button>
            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-mint-600 hover:bg-mint-700 text-white px-6 py-2 rounded-full"
            >
              Get Started
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className={`bg-slate-600 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
              <span className={`bg-slate-600 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`bg-slate-600 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-200 py-4">
            <nav className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('how-it-works')}
                className="text-slate-600 hover:text-mint-600 transition-colors text-left"
              >
                How It Works
              </button>
              <button 
                onClick={() => scrollToSection('packages')}
                className="text-slate-600 hover:text-mint-600 transition-colors text-left"
              >
                Packages
              </button>
              <button 
                onClick={() => scrollToSection('showcase')}
                className="text-slate-600 hover:text-mint-600 transition-colors text-left"
              >
                Showcase
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-slate-600 hover:text-mint-600 transition-colors text-left"
              >
                About
              </button>
              <Button 
                onClick={() => scrollToSection('contact')}
                className="bg-mint-600 hover:bg-mint-700 text-white w-full rounded-full"
              >
                Get Started
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

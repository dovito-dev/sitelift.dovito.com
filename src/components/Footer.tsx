const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <footer className="bg-slate-900 text-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-mint-500 to-mint-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">S</span>
              </div>
              <span className="text-xl font-bold">SiteMint</span>
            </div>
            <p className="text-slate-300 mb-6 max-w-md">
              Colorado's premier same-day website service. We transform outdated local business 
              websites into modern, high-converting digital experiences.
            </p>
            <div className="text-sm text-slate-400">
              <p>📍 Colorado, USA</p>
              <p>📧 hello@sitemint.ai</p>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-slate-300">
              <li>
                <button onClick={() => scrollToSection('packages')} className="hover:text-mint-400 transition-colors">
                  Done + Ready
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('packages')} className="hover:text-mint-400 transition-colors">
                  Custom Design
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('contact')} className="hover:text-mint-400 transition-colors">
                  Free Preview
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-slate-300">
              <li>
                <button onClick={() => scrollToSection('about')} className="hover:text-mint-400 transition-colors">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('showcase')} className="hover:text-mint-400 transition-colors">
                  Showcase
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('contact')} className="hover:text-mint-400 transition-colors">
                  Contact
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8">
          <div className="bg-slate-800 rounded-lg p-6 mb-8">
            <h4 className="font-semibold text-mint-400 mb-3">Disclaimer</h4>
            <p className="text-sm text-slate-300 leading-relaxed">SiteMint™ creates new, modern websites using publicly available content from existing business websites - including logos, images, and written copy - solely for the purpose of producing a functional design preview. While some content may be copyrighted, it is used under the assumption of fair use for internal review and demonstration purposes only, and is never published without the client's written approval. SiteMint™ does not replicate, clone, or claim ownership of any intellectual property. All published websites use original, licensed, or client-approved content. Final client approval is always required before any site goes live.</p>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-6 mb-4 md:mb-0 text-sm text-slate-300">
              <a href="#" className="hover:text-mint-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-mint-400 transition-colors">Terms</a>
              <a href="#" className="hover:text-mint-400 transition-colors">Contact</a>
              <a href="#" className="hover:text-mint-400 transition-colors">Sitemap</a>
            </div>
            <div className="text-sm text-slate-400">
              © 2024 SiteMint. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;
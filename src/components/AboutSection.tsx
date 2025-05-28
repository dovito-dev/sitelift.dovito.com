const AboutSection = () => {
  return <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-8">
            Colorado-Built. Business-Focused.
          </h2>
          
          <div className="prose prose-lg mx-auto text-slate-600 leading-relaxed">
            <p className="text-xl mb-6">
              Founded in the heart of Colorado, SiteMint™ understands what local businesses need: 
              websites that work as hard as they do. We've seen too many great Colorado companies 
              held back by outdated, slow websites that don't represent their quality and professionalism.
            </p>
            
            <p className="text-xl">
              Our mission is simple: bring every outdated website up to modern speed without the 
              typical hassles of web design. We build fast, we build beautiful, and we never 
              sacrifice quality for speed. Your business deserves a website that matches your standards.
            </p>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-mint-600 mb-2">0</div>
              <div className="text-slate-600">Long-Term Contracts</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-mint-600 mb-2">1 week</div>
              <div className="text-slate-600">Average Preview Time</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-mint-600 mb-2">100%</div>
              <div className="text-slate-600">Colorado Owned & Operated</div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default AboutSection;
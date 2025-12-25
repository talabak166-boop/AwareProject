import { ArrowRight, Code2 } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen bg-black pt-20 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 bg-gold-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-gold-600/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-screen flex flex-col justify-center relative z-10">
        <div className="animate-slide-up">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-8">
            <img 
              src="https://i.postimg.cc/MpXQdKCJ/App-Lo-Go-Without-Back.png" 
              alt="Aware Programming Logo" 
              className="w-24 h-24 object-contain animate-float"
              data-testid="img-hero-logo"
            />
            <div>
              <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-gold-500/10 border border-gold-500/30 rounded-full">
                <Code2 size={16} className="text-gold-400" />
                <span className="text-gold-400 text-sm font-medium">Since 2018</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-2 leading-tight">
                Transform Your <span className="bg-gradient-to-r from-gold-400 to-gold-600 bg-clip-text text-transparent">Digital Vision</span> Into Reality
              </h1>
            </div>
          </div>

          <p className="text-xl text-gray-300 mb-8 max-w-2xl leading-relaxed">
            Professional programming and business consulting services. Empowering companies to innovate, grow, and succeed in the digital age.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => scrollToSection('contact')}
              className="group px-8 py-4 bg-gold-500 hover:bg-gold-600 text-black rounded-lg font-semibold flex items-center justify-center gap-2 transition-all hover:shadow-lg hover:shadow-gold-500/50"
              data-testid="button-hero-get-started"
            >
              Get Started
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => scrollToSection('about')}
              className="px-8 py-4 border border-gold-500/50 hover:border-gold-400 text-white rounded-lg font-semibold transition-all hover:bg-gold-500/5"
              data-testid="button-hero-learn-more"
            >
              Learn More
            </button>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-8 max-w-md">
            <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="text-3xl font-bold text-gold-400" data-testid="text-years-active">7+</div>
              <div className="text-gray-400 text-sm">Years Active</div>
            </div>
            <div className="animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <div className="text-3xl font-bold text-gold-400" data-testid="text-projects">50+</div>
              <div className="text-gray-400 text-sm">Projects</div>
            </div>
            <div className="animate-slide-up" style={{ animationDelay: '0.6s' }}>
              <div className="text-3xl font-bold text-gold-400" data-testid="text-dedicated">100%</div>
              <div className="text-gray-400 text-sm">Dedicated</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

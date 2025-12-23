import { CheckCircle2, MapPin, Calendar } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-black to-slate-900 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="text-gold-400">Aware Programming</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A Danish-based company dedicated to delivering excellence in programming and business consulting
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Who We Are</h3>
                <p className="text-gray-300 leading-relaxed">
                  Aware Programming is a specialized programming company focused on delivering innovative solutions. Founded in 2018, we've been helping businesses transform their digital presence.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-gold-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Computer Programming</h4>
                    <p className="text-gray-400 text-sm">Custom software development and web solutions</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-gold-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Business Consulting</h4>
                    <p className="text-gray-400 text-sm">Strategic guidance and management consulting</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-gold-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Educational Services</h4>
                    <p className="text-gray-400 text-sm">Training in sports and recreational programs</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <div className="p-6 bg-gradient-to-br from-gold-500/10 to-transparent border border-gold-500/30 rounded-xl hover:border-gold-400/50 transition-all">
              <div className="text-3xl font-bold text-gold-400 mb-2" data-testid="text-founded-year">2018</div>
              <p className="text-gray-300 font-semibold mb-1">Founded</p>
              <p className="text-gray-400 text-sm">January 1, 2018</p>
            </div>

            <div className="p-6 bg-gradient-to-br from-gold-500/10 to-transparent border border-gold-500/30 rounded-xl hover:border-gold-400/50 transition-all">
              <Calendar size={24} className="text-gold-400 mb-2" />
              <p className="text-gray-300 font-semibold mb-1">Active Status</p>
              <p className="text-gray-400 text-sm">Fully Operational</p>
            </div>

            <div className="p-6 bg-gradient-to-br from-gold-500/10 to-transparent border border-gold-500/30 rounded-xl hover:border-gold-400/50 transition-all">
              <MapPin size={24} className="text-gold-400 mb-2" />
              <p className="text-gray-300 font-semibold mb-1">Location</p>
              <p className="text-gray-400 text-sm">Bryrup, Denmark</p>
            </div>

            <div className="p-6 bg-gradient-to-br from-gold-500/10 to-transparent border border-gold-500/30 rounded-xl hover:border-gold-400/50 transition-all">
              <div className="text-xl font-bold text-gold-400 mb-2">CVR</div>
              <p className="text-gray-300 font-semibold mb-1">Registration</p>
              <p className="text-gray-400 text-sm" data-testid="text-cvr">39150514</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

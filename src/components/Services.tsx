import React from 'react';
import { Code2, Lightbulb, Users, Zap } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Code2,
      title: 'Custom Programming',
      description: 'Tailored software solutions built to your specific business needs and technical requirements.',
      delay: '0s'
    },
    {
      icon: Lightbulb,
      title: 'Business Consulting',
      description: 'Strategic guidance to optimize operations, enhance efficiency, and drive sustainable growth.',
      delay: '0.2s'
    },
    {
      icon: Users,
      title: 'Team Training',
      description: 'Professional development and educational programs to enhance team capabilities.',
      delay: '0.4s'
    },
    {
      icon: Zap,
      title: 'Innovation Services',
      description: 'Modernizing your business with cutting-edge technologies and innovative approaches.',
      delay: '0.6s'
    },
  ];

  return (
    <section id="services" className="py-24 bg-black relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our <span className="text-gold-400">Services</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Comprehensive solutions designed to accelerate your business growth and digital transformation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="animate-slide-up p-6 bg-gradient-to-br from-slate-900 to-black border border-gold-500/20 rounded-xl hover:border-gold-400/50 transition-all group hover:bg-gradient-to-br hover:from-gold-500/10 hover:to-black"
                style={{ animationDelay: service.delay }}
              >
                <div className="mb-4 p-3 bg-gold-500/20 rounded-lg w-fit group-hover:bg-gold-500/30 transition-colors">
                  <Icon size={24} className="text-gold-400" />
                </div>

                <h3 className="text-lg font-bold text-white mb-2">
                  {service.title}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed">
                  {service.description}
                </p>

                <div className="mt-4 flex items-center text-gold-400 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn more →
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

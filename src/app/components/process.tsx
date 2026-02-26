import { Eye, Ruler, Hammer, Sparkles } from 'lucide-react';
import { Link } from 'react-router';

export function Process() {
  const steps = [
    {
      icon: Eye,
      title: 'Consultation & Vision',
      description: 'We begin by understanding your space, your needs, and your aesthetic. Every great piece starts with a conversation about how you live and what you value.',
    },
    {
      icon: Ruler,
      title: 'Design & Material Selection',
      description: 'Together, we select the perfect hardwood—each board hand-chosen for its grain, character, and story. Detailed drawings ensure your vision translates perfectly into reality.',
    },
    {
      icon: Hammer,
      title: 'Handcrafted Construction',
      description: 'Using time-honored joinery techniques and modern precision, we bring your piece to life. Every mortise, tenon, and dovetail is cut with exacting care.',
    },
    {
      icon: Sparkles,
      title: 'Finishing & Delivery',
      description: 'Multiple coats of hand-rubbed finish protect the wood while allowing its natural beauty to shine. Your heirloom is delivered and installed with the same care it was built.',
    },
  ];

  return (
    <section id="process" className="py-24 md:py-32 bg-[#0b2d14] text-[#efeeea]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-[#efeeea]/80 tracking-[0.2em] uppercase mb-4">Our Process</p>
          <h2 className="text-4xl md:text-5xl mb-6">
            From Concept to Heirloom
          </h2>
          <p className="text-xl text-[#efeeea]/70 leading-relaxed">
            Each piece follows a meticulous journey that honors both tradition and your unique vision.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={step.title} className="relative">
              {/* Step Number */}
              <div className="absolute -top-4 -left-4 text-6xl font-serif text-[#efeeea]/10">
                {String(index + 1).padStart(2, '0')}
              </div>

              <div className="relative bg-white/5 backdrop-blur-sm p-8 rounded-lg border border-[#efeeea]/10 hover:bg-white/10 transition-all duration-300">
                <step.icon className="w-12 h-12 text-[#efeeea] mb-6" strokeWidth={1.5} />
                <h3 className="text-xl mb-4">{step.title}</h3>
                <p className="text-[#efeeea]/70 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Link
            to="/custom-request"
            className="inline-flex items-center justify-center bg-white text-[#0b2d14] px-8 py-4 rounded hover:bg-[#efeeea] transition-colors duration-200"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
import { Trees, Award, Heart, Leaf } from 'lucide-react';

export function Values() {
  const values = [
    {
      icon: Trees,
      title: 'Sustainable Sourcing',
      description: 'We partner with responsible forestry operations and urban wood salvage programs, ensuring every board has an ethical origin.',
    },
    {
      icon: Award,
      title: 'Uncompromising Quality',
      description: 'No shortcuts. No compromises. Every joint is hand-fit, every surface hand-finished to museum-quality standards.',
    },
    {
      icon: Heart,
      title: 'Built for Generations',
      description: 'Your great-grandchildren will use these pieces. We build with the same integrity cabinetmakers used centuries ago.',
    },
    {
      icon: Leaf,
      title: 'Natural Beauty',
      description: 'We celebrate wood in its truest form—minimal processing, natural finishes that enhance rather than hide the grain.',
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-[#0b2d14] tracking-[0.2em] uppercase mb-4">Our Values</p>
          <h2 className="text-4xl md:text-5xl text-[#3d2817] mb-6">
            What Sets Us Apart
          </h2>
          <p className="text-xl text-[#3d2817]/70 leading-relaxed">
            These principles guide every decision we make, from selecting timber to applying the final finish.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value) => (
            <div
              key={value.title}
              className="text-center space-y-4 p-6 rounded-lg hover:bg-[#efeeea] transition-colors duration-300"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#0b2d14] text-[#efeeea]">
                <value.icon size={28} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl text-[#3d2817]">{value.title}</h3>
              <p className="text-[#3d2817]/70 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
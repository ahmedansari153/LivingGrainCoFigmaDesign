export function Portfolio() {
  const projects = [
    {
      title: 'Live Edge Dining Table',
      category: 'Tables',
      image: 'https://images.unsplash.com/photo-1769451239456-21488871e0cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB3b29kZW4lMjB0YWJsZSUyMGRldGFpbHxlbnwxfHx8fDE3Njk5NjI5NjR8MA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Black walnut slab with natural edge, seats 8',
    },
    {
      title: 'Custom Cabinet Suite',
      category: 'Cabinetry',
      image: 'https://images.unsplash.com/photo-1650615653338-0ec058c99fa1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXN0b20lMjBjYWJpbmV0JTIwd29vZHdvcmslMjBkZXRhaWx8ZW58MXx8fHwxNzY5OTYyOTY0fDA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Quarter-sawn white oak with hand-cut dovetails',
    },
    {
      title: 'Artisan Credenza',
      category: 'Storage',
      image: 'https://images.unsplash.com/photo-1737534884876-426964ba462a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpc2FuJTIwd29vZHdvcmtpbmclMjBmdXJuaXR1cmV8ZW58MXx8fHwxNzY5OTYyOTY0fDA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Mid-century inspired design in solid cherry',
    },
    {
      title: 'Heirloom Details',
      category: 'Craftsmanship',
      image: 'https://images.unsplash.com/photo-1573868807313-3868398b7c86?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXN0b20lMjB3b29kJTIwZnVybml0dXJlJTIwZ3JhaW4lMjBkZXRhaWx8ZW58MXx8fHwxNzY5OTYyOTYyfDA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Hand-planed surfaces reveal exceptional grain',
    },
  ];

  return (
    <section id="portfolio" className="py-24 md:py-32 bg-[#efeeea]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-[#0b2d14] tracking-[0.2em] uppercase mb-4">Portfolio</p>
          <h2 className="text-4xl md:text-5xl text-[#3d2817] mb-6">
            Recent Commissions
          </h2>
          <p className="text-xl text-[#3d2817]/70 leading-relaxed">
            Each piece represents a unique collaboration between craftsman and client, 
            wood and vision, tradition and innovation.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group relative bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 border-t-2 border-[#0b2d14]">
                <p className="text-sm text-[#0b2d14] tracking-[0.15em] uppercase mb-2">
                  {project.category}
                </p>
                <h3 className="text-2xl text-[#3d2817] mb-2">{project.title}</h3>
                <p className="text-[#3d2817]/70">{project.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="mt-16 text-center max-w-2xl mx-auto">
          <p className="text-lg text-[#3d2817]/70 italic">
            "Every commission is a journey. We work closely with our clients to ensure each piece 
            not only meets their functional needs but becomes a cherished part of their story."
          </p>
        </div>
      </div>
    </section>
  );
}
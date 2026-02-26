import leatherTexture from 'figma:asset/34889f9b78b49d5fa80184cb65872d84bf5f34f6.png';

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div className="relative order-2 lg:order-1">
            <div className="aspect-[3/4] rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1761544775976-0c81b00e81d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b29kd29ya2luZyUyMHdvcmtzaG9wJTIwYXJ0aXNhbiUyMHRvb2xzfGVufDF8fHx8MTc2OTk2Mjk2Mnww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Woodworking workshop"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Content Side */}
          <div className="space-y-8 order-1 lg:order-2">
            <div className="space-y-4">
              <p className="text-[#0b2d14] tracking-[0.2em] uppercase">About Living Grain Co.</p>
              <h2 className="text-4xl md:text-5xl text-[#3d2817]">
                Craftsmanship Rooted in Tradition
              </h2>
            </div>

            <div className="space-y-6 text-lg text-[#3d2817]/80 leading-relaxed">
              <p>
                Founded by Seth Lopez, Living Grain Co. emerged from a deep reverence for the natural world 
                and a passion for preserving traditional woodworking techniques in an increasingly automated age.
              </p>
              <p>
                Every grain pattern tells a story of seasons past. Every joint represents hours of careful 
                consideration. We don't just build furniture—we create functional heirlooms that honor the 
                tree's journey from forest to your home.
              </p>
              <p>
                Our workshop is a sanctuary where time slows down, where the rasp of a hand plane and the 
                scent of fresh-cut wood remind us why craftsmanship matters. We work with sustainably sourced 
                hardwoods, ensuring that our creations leave a positive legacy for generations to come.
              </p>
            </div>

            {/* Signature */}
            <div 
              className="relative p-8 rounded-lg"
              style={{
                backgroundImage: `url(${leatherTexture})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <div className="relative z-10">
                <p className="text-[#efeeea] text-2xl font-serif italic mb-2">Seth Lopez</p>
                <p className="text-[#efeeea]/80">Founder & Master Craftsman</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
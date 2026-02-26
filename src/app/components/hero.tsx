import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router';
import impactFrameImage from 'figma:asset/d6aa6ad664cbda8e7a9d245b1bb10bd7573233ff.png';
import logoImage from 'figma:asset/15c57f54a661c670e7d1900091d55d4fad203b8d.png';

export function Hero() {
  return (
    <section className="relative bg-[#efeeea] overflow-hidden h-screen">
      <div className="grid lg:grid-cols-2 gap-0 w-full h-full">
        {/* Left Content */}
        <div className="space-y-8 flex flex-col justify-center items-center px-4 sm:px-6 lg:px-12 xl:px-16 text-center">
          <div className="space-y-6">
            <h1 className="text-6xl md:text-7xl lg:text-8xl text-[#3d2817] leading-tight tracking-tight">
              LIVING GRAIN CO
            </h1>
            <p className="text-2xl md:text-3xl text-[#3d2817] italic">
              Custom woodworking craftsmanship
            </p>
          </div>
          <div className="pt-8">
            <a
              href="#portfolio"
              className="inline-block text-xl text-[#3d2817] hover:text-[#0b2d14] transition-colors duration-200"
            >
              Discover Our Creations
            </a>
          </div>
        </div>

        {/* Right Logo - Absolute Full Height */}
        <div className="relative h-full">
          <img
            src={logoImage}
            alt="Living Grain Co. Logo"
            className="absolute inset-0 w-full h-full object-contain"
          />
        </div>
      </div>

      {/* Bottom Accent */}
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-[#0b2d14] via-[#3d2817] to-[#0b2d14]" />
    </section>
  );
}
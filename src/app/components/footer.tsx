import logo from 'figma:asset/369b0efaccb1443663f84b3a1a70166bf4b70ab4.png';
import { Instagram, Facebook, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#0b2d14] text-[#efeeea] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <img src={logo} alt="Living Grain Co." className="h-12 w-auto" />
            <p className="text-[#efeeea]/70 leading-relaxed">
              Crafting heirloom-quality furniture that honors the natural beauty of wood and 
              stands the test of time.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-[#efeeea]/70 hover:text-[#efeeea] transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#process" className="text-[#efeeea]/70 hover:text-[#efeeea] transition-colors">
                  Our Process
                </a>
              </li>
              <li>
                <a href="#portfolio" className="text-[#efeeea]/70 hover:text-[#efeeea] transition-colors">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#contact" className="text-[#efeeea]/70 hover:text-[#efeeea] transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="mb-6">Connect</h4>
            <div className="space-y-4">
              <p className="text-[#efeeea]/70">
                Follow our journey and see our latest commissions.
              </p>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook size={20} />
                </a>
                <a
                  href="mailto:seth@livinggrainco.com"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                  aria-label="Email"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#efeeea]/20 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[#efeeea]/60">
          <p>© {new Date().getFullYear()} Living Grain Co. All rights reserved.</p>
          <p>Handcrafted with care in the Pacific Northwest</p>
        </div>
      </div>
    </footer>
  );
}
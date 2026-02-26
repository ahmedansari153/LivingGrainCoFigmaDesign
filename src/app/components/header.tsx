import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router';
import logo from 'figma:asset/369b0efaccb1443663f84b3a1a70166bf4b70ab4.png';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Process', href: '#process' },
    { label: 'Portfolio', href: '#portfolio' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-[#f5f3ee] via-[#efeeea] to-[#f5f3ee] border-b border-[#3d2817]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Living Grain Co." className="h-auto w-[200px]" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-[#3d2817] hover:text-[#0b2d14] transition-colors duration-200 tracking-wide"
              >
                {item.label}
              </a>
            ))}
            <Link
              to="/custom-request"
              className="bg-[#0b2d14] text-[#efeeea] px-6 py-2.5 rounded hover:bg-[#0b2d14]/90 transition-colors duration-200"
            >
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-[#3d2817] hover:text-[#0b2d14] transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-[#3d2817]/10">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="block text-[#3d2817] hover:text-[#0b2d14] py-3 transition-colors"
              >
                {item.label}
              </a>
            ))}
            <Link
              to="/custom-request"
              onClick={() => setIsMenuOpen(false)}
              className="block bg-[#0b2d14] text-[#efeeea] px-6 py-2.5 rounded hover:bg-[#0b2d14]/90 transition-colors mt-4 text-center"
            >
              Contact
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
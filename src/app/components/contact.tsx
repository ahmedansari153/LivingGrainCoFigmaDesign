import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import leatherTexture from 'figma:asset/34889f9b78b49d5fa80184cb65872d84bf5f34f6.png';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission would happen here
    alert('Thank you for your inquiry! We will be in touch soon.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-[#efeeea]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-[#0b2d14] tracking-[0.2em] uppercase mb-4">Get in Touch</p>
          <h2 className="text-4xl md:text-5xl text-[#3d2817] mb-6">
            Let's Create Something Extraordinary
          </h2>
          <p className="text-xl text-[#3d2817]/70 leading-relaxed">
            Ready to commission a piece that will be treasured for generations? 
            We'd love to hear about your vision.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-[#3d2817] mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#efeeea] border border-[#3d2817]/20 rounded focus:outline-none focus:ring-2 focus:ring-[#0b2d14] text-[#3d2817]"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-[#3d2817] mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#F2F2F2] border border-[#3d2817]/20 rounded focus:outline-none focus:ring-2 focus:ring-[#0b2d14] text-[#3d2817]"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-[#3d2817] mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[#efeeea] border border-[#3d2817]/20 rounded focus:outline-none focus:ring-2 focus:ring-[#0b2d14] text-[#3d2817]"
                />
              </div>

              <div>
                <label htmlFor="projectType" className="block text-[#3d2817] mb-2">
                  Project Type
                </label>
                <select
                  id="projectType"
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#efeeea] border border-[#3d2817]/20 rounded focus:outline-none focus:ring-2 focus:ring-[#0b2d14] text-[#3d2817]"
                >
                  <option value="">Select a project type...</option>
                  <option value="dining-table">Dining Table</option>
                  <option value="cabinetry">Cabinetry</option>
                  <option value="desk">Desk</option>
                  <option value="shelving">Shelving</option>
                  <option value="bed-frame">Bed Frame</option>
                  <option value="other">Other Custom Piece</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-[#3d2817] mb-2">
                  Tell Us About Your Vision
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-[#F2F2F2] border border-[#3d2817]/20 rounded focus:outline-none focus:ring-2 focus:ring-[#0b2d14] text-[#3d2817] resize-none"
                  placeholder="Describe your project, including dimensions, style preferences, and timeline..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#0b2d14] text-[#efeeea] px-8 py-4 rounded hover:bg-[#0b2d14]/90 transition-colors duration-200 flex items-center justify-center gap-2"
              >
                <Send size={20} />
                Send Inquiry
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div
              className="p-8 rounded-lg text-[#efeeea]"
              style={{
                backgroundImage: `url(${leatherTexture})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <h3 className="text-2xl mb-6">Workshop Location</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 mt-1 flex-shrink-0" strokeWidth={1.5} />
                  <div>
                    <p className="mb-1">Living Grain Co.</p>
                    <p className="text-[#efeeea]/80">
                      Pacific Northwest
                      <br />
                      By Appointment Only
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 mt-1 flex-shrink-0" strokeWidth={1.5} />
                  <div>
                    <a href="mailto:seth@livinggrainco.com" className="hover:underline">
                      seth@livinggrainco.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 mt-1 flex-shrink-0" strokeWidth={1.5} />
                  <div>
                    <a href="tel:+15551234567" className="hover:underline">
                      (555) 123-4567
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl text-[#3d2817] mb-4">What to Expect</h3>
              <ul className="space-y-4 text-[#3d2817]/80">
                <li className="flex items-start gap-3">
                  <span className="text-[#0b2d14] mt-1">•</span>
                  <span>Initial consultation within 48 hours</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#0b2d14] mt-1">•</span>
                  <span>Custom design drawings and material selection</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#0b2d14] mt-1">•</span>
                  <span>Transparent pricing with no hidden fees</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#0b2d14] mt-1">•</span>
                  <span>Build time: 8-12 weeks for most commissions</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#0b2d14] mt-1">•</span>
                  <span>White-glove delivery and installation</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
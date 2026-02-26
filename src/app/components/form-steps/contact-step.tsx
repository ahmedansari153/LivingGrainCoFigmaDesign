import { useState } from 'react';
import { FormData } from '../../pages/custom-form';

interface ContactStepProps {
  formData: FormData;
  updateFormData: (data: Partial<FormData>) => void;
  onNext: () => void;
}

export function ContactStep({ formData, updateFormData, onNext }: ContactStepProps) {
  const [contactData, setContactData] = useState({
    name: formData.name || '',
    email: formData.email || '',
    phone: formData.phone || '',
    message: formData.message || '',
  });

  const handleChange = (field: string, value: string) => {
    setContactData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateFormData(contactData);
    onNext();
  };

  return (
    <div className="bg-white rounded-lg p-8 shadow-sm">
      <div className="mb-8">
        <h2 className="text-2xl text-[#3d2817] mb-2">Contact Information</h2>
        <p className="text-[#3d2817]/70">
          Let us know how to reach you to discuss your custom piece.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-[#3d2817] mb-2">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            value={contactData.name}
            onChange={(e) => handleChange('name', e.target.value)}
            required
            className="w-full px-4 py-3 bg-[#efeeea] border border-[#3d2817]/20 rounded focus:outline-none focus:ring-2 focus:ring-[#0b2d14] text-[#3d2817]"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-[#3d2817] mb-2">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            value={contactData.email}
            onChange={(e) => handleChange('email', e.target.value)}
            required
            className="w-full px-4 py-3 bg-[#efeeea] border border-[#3d2817]/20 rounded focus:outline-none focus:ring-2 focus:ring-[#0b2d14] text-[#3d2817]"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-[#3d2817] mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            value={contactData.phone}
            onChange={(e) => handleChange('phone', e.target.value)}
            className="w-full px-4 py-3 bg-[#efeeea] border border-[#3d2817]/20 rounded focus:outline-none focus:ring-2 focus:ring-[#0b2d14] text-[#3d2817]"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-[#3d2817] mb-2">
            Additional Details
          </label>
          <textarea
            id="message"
            value={contactData.message}
            onChange={(e) => handleChange('message', e.target.value)}
            rows={5}
            placeholder="Share any additional thoughts, inspirations, or specific requirements for your piece..."
            className="w-full px-4 py-3 bg-[#efeeea] border border-[#3d2817]/20 rounded focus:outline-none focus:ring-2 focus:ring-[#0b2d14] text-[#3d2817] resize-none"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-[#0b2d14] text-[#efeeea] px-8 py-4 rounded hover:bg-[#0b2d14]/90 transition-colors duration-200"
        >
          Continue to Preview
        </button>
      </form>
    </div>
  );
}
import { FormData } from '../../pages/custom-form';
import { Package, Hammer, Mail, Phone, Clock } from 'lucide-react';

interface IntentStepProps {
  formData: FormData;
  updateFormData: (data: Partial<FormData>) => void;
  onNext: () => void;
  onShowContact: () => void;
}

export function IntentStep({ onNext, onShowContact }: IntentStepProps) {
  const handleNewCommission = () => {
    onNext();
  };

  const handleExistingOrder = () => {
    onShowContact();
  };

  return (
    <div className="bg-white rounded-lg p-8 shadow-sm">
      <div className="mb-8">
        <h2 className="text-2xl text-[#3d2817] mb-2">How can we help you today?</h2>
        <p className="text-[#3d2817]/70">Select the option that best describes your inquiry.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* New Commission Option */}
        <button
          onClick={handleNewCommission}
          className="p-8 rounded-lg border-2 border-[#3d2817]/20 hover:border-[#0b2d14] hover:bg-[#0b2d14]/5 transition-all duration-200 text-left group"
        >
          <Hammer className="w-12 h-12 text-[#0b2d14] mb-4 group-hover:scale-110 transition-transform" strokeWidth={1.5} />
          <h3 className="text-xl text-[#3d2817] mb-2">Request a New Commission</h3>
          <p className="text-[#3d2817]/70">
            Start the journey to create your custom heirloom piece with Seth Lopez.
          </p>
        </button>

        {/* Existing Order Option */}
        <button
          onClick={handleExistingOrder}
          className="p-8 rounded-lg border-2 border-[#3d2817]/20 hover:border-[#0b2d14] hover:bg-[#0b2d14]/5 transition-all duration-200 text-left group"
        >
          <Package className="w-12 h-12 text-[#0b2d14] mb-4 group-hover:scale-110 transition-transform" strokeWidth={1.5} />
          <h3 className="text-xl text-[#3d2817] mb-2">Existing Order Inquiry</h3>
          <p className="text-[#3d2817]/70">
            Get in touch about an order that's already in progress or has been delivered.
          </p>
        </button>
      </div>
    </div>
  );
}

export function ContactInfo() {
  return (
    <div className="bg-white rounded-lg p-8 shadow-sm">
      <div className="mb-8">
        <h2 className="text-2xl text-[#3d2817] mb-2">Get in Touch</h2>
        <p className="text-[#3d2817]/70">
          We're here to help with any questions about your existing order.
        </p>
      </div>

      <div className="space-y-6">
        {/* Email */}
        <div className="flex items-start gap-4 p-6 bg-[#efeeea] rounded-lg">
          <Mail className="w-6 h-6 text-[#0b2d14] flex-shrink-0 mt-1" strokeWidth={1.5} />
          <div>
            <h3 className="text-lg text-[#3d2817] mb-1">Email</h3>
            <a
              href="mailto:seth@livinggrainco.com"
              className="text-[#0b2d14] hover:underline"
            >
              seth@livinggrainco.com
            </a>
            <p className="text-sm text-[#3d2817]/60 mt-1">
              We typically respond within 24 hours
            </p>
          </div>
        </div>

        {/* Phone */}
        <div className="flex items-start gap-4 p-6 bg-[#efeeea] rounded-lg">
          <Phone className="w-6 h-6 text-[#0b2d14] flex-shrink-0 mt-1" strokeWidth={1.5} />
          <div>
            <h3 className="text-lg text-[#3d2817] mb-1">Phone</h3>
            <a
              href="tel:+15555551234"
              className="text-[#0b2d14] hover:underline"
            >
              (555) 555-1234
            </a>
            <p className="text-sm text-[#3d2817]/60 mt-1">
              Monday - Friday, 9am - 5pm EST
            </p>
          </div>
        </div>

        {/* Hours */}
        <div className="flex items-start gap-4 p-6 bg-[#efeeea] rounded-lg">
          <Clock className="w-6 h-6 text-[#0b2d14] flex-shrink-0 mt-1" strokeWidth={1.5} />
          <div>
            <h3 className="text-lg text-[#3d2817] mb-1">Workshop Hours</h3>
            <p className="text-[#3d2817]/80">Monday - Friday: 9:00 AM - 5:00 PM</p>
            <p className="text-[#3d2817]/80">Saturday - Sunday: By appointment</p>
          </div>
        </div>

        {/* Note */}
        <div className="border-t border-[#3d2817]/10 pt-6">
          <p className="text-[#3d2817]/70 leading-relaxed">
            For order status updates, please include your order number in your message. 
            We'll get back to you as soon as possible with the information you need.
          </p>
        </div>
      </div>
    </div>
  );
}

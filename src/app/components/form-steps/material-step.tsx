import { FormData } from '../../pages/custom-form';
import { Paintbrush, Droplet } from 'lucide-react';

interface MaterialStepProps {
  formData: FormData;
  updateFormData: (data: Partial<FormData>) => void;
  onNext: () => void;
}

export function MaterialStep({ formData, updateFormData, onNext }: MaterialStepProps) {
  const materials = [
    { id: 'walnut', label: 'Black Walnut', color: '#3d2817' },
    { id: 'oak', label: 'White Oak', color: '#c9b99b' },
    { id: 'maple', label: 'Hard Maple', color: '#f5e9d3' },
    { id: 'cherry', label: 'Cherry', color: '#9d5c42' },
    { id: 'ash', label: 'Ash', color: '#d4c5b0' },
    { id: 'mahogany', label: 'Mahogany', color: '#6b3410' },
  ];

  const finishes = [
    { id: 'natural', label: 'Natural Oil', icon: Droplet },
    { id: 'satin', label: 'Satin Polyurethane', icon: Droplet },
    { id: 'matte', label: 'Matte Finish', icon: Droplet },
    { id: 'stained', label: 'Custom Stain', icon: Paintbrush },
    { id: 'painted', label: 'Painted', icon: Paintbrush },
  ];

  const handleNext = () => {
    onNext();
  };

  return (
    <div className="bg-white rounded-lg p-8 shadow-sm">
      <div className="mb-8">
        <h2 className="text-2xl text-[#3d2817] mb-2">Materials & Finish</h2>
        <p className="text-[#3d2817]/70">
          Select the wood species and finish that best suits your aesthetic.
        </p>
      </div>

      <div className="space-y-8">
        {/* Wood Selection */}
        <div>
          <label className="block text-[#3d2817] mb-4">Wood Species</label>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {materials.map((material) => (
              <button
                key={material.id}
                onClick={() => updateFormData({ material: material.id })}
                className={`p-4 rounded-lg border-2 transition-all duration-200 hover:border-[#0b2d14] ${
                  formData.material === material.id
                    ? 'border-[#0b2d14] bg-[#0b2d14]/5'
                    : 'border-[#3d2817]/20'
                }`}
              >
                <div
                  className="w-full h-12 rounded mb-3"
                  style={{ backgroundColor: material.color }}
                />
                <p className="text-sm text-[#3d2817]">{material.label}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Finish Selection */}
        <div>
          <label className="block text-[#3d2817] mb-4">Finish Type</label>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {finishes.map((finish) => (
              <button
                key={finish.id}
                onClick={() => updateFormData({ finish: finish.id })}
                className={`p-4 rounded-lg border-2 transition-all duration-200 hover:border-[#0b2d14] ${
                  formData.finish === finish.id
                    ? 'border-[#0b2d14] bg-[#0b2d14]/5'
                    : 'border-[#3d2817]/20'
                }`}
              >
                <finish.icon className="w-6 h-6 text-[#0b2d14] mb-2 mx-auto" strokeWidth={1.5} />
                <p className="text-sm text-[#3d2817]">{finish.label}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Custom Color for Painted/Stained */}
        {(formData.finish === 'painted' || formData.finish === 'stained') && (
          <div>
            <label className="block text-[#3d2817] mb-4">
              {formData.finish === 'painted' ? 'Paint Color' : 'Stain Color'}
            </label>
            <input
              type="text"
              value={formData.color || ''}
              onChange={(e) => updateFormData({ color: e.target.value })}
              placeholder="Describe your desired color..."
              className="w-full px-4 py-3 bg-[#efeeea] border border-[#3d2817]/20 rounded focus:outline-none focus:ring-2 focus:ring-[#0b2d14] text-[#3d2817]"
            />
          </div>
        )}

        {/* Continue Button */}
        <button
          onClick={handleNext}
          disabled={!formData.material || !formData.finish}
          className="w-full bg-[#0b2d14] text-[#efeeea] px-8 py-4 rounded hover:bg-[#0b2d14]/90 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Continue
        </button>
      </div>
    </div>
  );
}
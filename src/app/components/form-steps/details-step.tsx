import { FormData } from '../../pages/custom-form';
import { Square, Circle, Layers, Upload } from 'lucide-react';
import { useState } from 'react';

interface DetailsStepProps {
  formData: FormData;
  updateFormData: (data: Partial<FormData>) => void;
  onNext: () => void;
}

export function DetailsStep({ formData, updateFormData, onNext }: DetailsStepProps) {
  const [customDimensions, setCustomDimensions] = useState({
    length: formData.dimensions?.length || '',
    width: formData.dimensions?.width || '',
    height: formData.dimensions?.height || '',
  });

  const shapes = [
    { id: 'rectangle', label: 'Rectangle', icon: Square },
    { id: 'round', label: 'Round', icon: Circle },
    { id: 'live-edge', label: 'Live Edge', icon: Layers },
    { id: 'custom', label: 'Custom', icon: Upload },
  ];

  const legDesigns = [
    { id: 'square', label: 'Square Legs' },
    { id: 'round', label: 'Round Legs' },
    { id: 'x-legs', label: 'X-Legs' },
    { id: 'tapered', label: 'Tapered Legs' },
    { id: 'custom', label: 'Custom Design' },
  ];

  const handleDimensionChange = (field: string, value: string) => {
    setCustomDimensions((prev) => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    updateFormData({
      dimensions: customDimensions,
    });
    onNext();
  };

  return (
    <div className="bg-white rounded-lg p-8 shadow-sm">
      <div className="mb-8">
        <h2 className="text-2xl text-[#3d2817] mb-2">Design Details</h2>
        <p className="text-[#3d2817]/70">
          Tell us more about your vision for this {formData.projectType}.
        </p>
      </div>

      <div className="space-y-8">
        {/* Shape Selection */}
        {(formData.projectType === 'table' || formData.projectType === 'desk') && (
          <div>
            <label className="block text-[#3d2817] mb-4">Shape</label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {shapes.map((shape) => (
                <button
                  key={shape.id}
                  onClick={() => updateFormData({ shape: shape.id })}
                  className={`p-4 rounded-lg border-2 transition-all duration-200 hover:border-[#0b2d14] ${
                    formData.shape === shape.id
                      ? 'border-[#0b2d14] bg-[#0b2d14]/5'
                      : 'border-[#3d2817]/20'
                  }`}
                >
                  <shape.icon className="w-6 h-6 text-[#0b2d14] mb-2 mx-auto" strokeWidth={1.5} />
                  <p className="text-sm text-[#3d2817]">{shape.label}</p>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Leg Design */}
        {(formData.projectType === 'table' || formData.projectType === 'desk') && (
          <div>
            <label className="block text-[#3d2817] mb-4">Leg Design</label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {legDesigns.map((design) => (
                <button
                  key={design.id}
                  onClick={() => updateFormData({ legDesign: design.id })}
                  className={`p-4 rounded-lg border-2 transition-all duration-200 hover:border-[#0b2d14] ${
                    formData.legDesign === design.id
                      ? 'border-[#0b2d14] bg-[#0b2d14]/5'
                      : 'border-[#3d2817]/20'
                  }`}
                >
                  <p className="text-sm text-[#3d2817]">{design.label}</p>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Dimensions */}
        <div>
          <label className="block text-[#3d2817] mb-4">Dimensions (inches)</label>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm text-[#3d2817]/70 mb-2">Length</label>
              <input
                type="number"
                value={customDimensions.length}
                onChange={(e) => handleDimensionChange('length', e.target.value)}
                placeholder="48"
                className="w-full px-4 py-3 bg-[#efeeea] border border-[#3d2817]/20 rounded focus:outline-none focus:ring-2 focus:ring-[#0b2d14] text-[#3d2817]"
              />
            </div>
            <div>
              <label className="block text-sm text-[#3d2817]/70 mb-2">Width</label>
              <input
                type="number"
                value={customDimensions.width}
                onChange={(e) => handleDimensionChange('width', e.target.value)}
                placeholder="30"
                className="w-full px-4 py-3 bg-[#efeeea] border border-[#3d2817]/20 rounded focus:outline-none focus:ring-2 focus:ring-[#0b2d14] text-[#3d2817]"
              />
            </div>
            <div>
              <label className="block text-sm text-[#3d2817]/70 mb-2">Height</label>
              <input
                type="number"
                value={customDimensions.height}
                onChange={(e) => handleDimensionChange('height', e.target.value)}
                placeholder="30"
                className="w-full px-4 py-3 bg-[#efeeea] border border-[#3d2817]/20 rounded focus:outline-none focus:ring-2 focus:ring-[#0b2d14] text-[#3d2817]"
              />
            </div>
          </div>
          <p className="text-sm text-[#3d2817]/60 mt-2">
            Standard sizes available. Custom dimensions in 2" increments.
          </p>
        </div>

        {/* Continue Button */}
        <button
          onClick={handleNext}
          className="w-full bg-[#0b2d14] text-[#efeeea] px-8 py-4 rounded hover:bg-[#0b2d14]/90 transition-colors duration-200"
        >
          Continue
        </button>
      </div>
    </div>
  );
}
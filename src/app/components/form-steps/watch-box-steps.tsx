import { FormData } from '../../pages/custom-form';
import { Square, Box, Hexagon, Triangle } from 'lucide-react';

interface WatchBoxStepProps {
  formData: FormData;
  updateFormData: (data: Partial<FormData>) => void;
  onNext: () => void;
}

// Step 1: Watch Capacity
export function WatchCapacityStep({ formData, updateFormData, onNext }: WatchBoxStepProps) {
  const handleCapacitySelect = (capacity: number) => {
    updateFormData({ watchCapacity: capacity });
    setTimeout(() => onNext(), 300);
  };

  const capacities = [1, 2, 3, 4, 6, 8, 10, 12, 16, 20, 24];

  return (
    <div className="bg-white rounded-lg p-8 shadow-sm">
      <div className="mb-8">
        <h2 className="text-2xl text-[#3d2817] mb-2">Watch Capacity</h2>
        <p className="text-[#3d2817]/70">How many watches would you like to store?</p>
      </div>

      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
        {capacities.map((capacity) => (
          <button
            key={capacity}
            onClick={() => handleCapacitySelect(capacity)}
            className={`p-4 rounded-lg border-2 transition-all duration-200 hover:border-[#0b2d14] hover:bg-[#0b2d14]/5 ${
              formData.watchCapacity === capacity
                ? 'border-[#0b2d14] bg-[#0b2d14]/5'
                : 'border-[#3d2817]/20'
            }`}
          >
            <p className="text-2xl text-[#3d2817] font-medium">{capacity}</p>
          </button>
        ))}
      </div>

      <div className="mt-6">
        <label className="block text-[#3d2817] mb-2">Custom Capacity</label>
        <input
          type="number"
          min="1"
          max="24"
          value={formData.watchCapacity || ''}
          onChange={(e) => updateFormData({ watchCapacity: parseInt(e.target.value) })}
          placeholder="Enter a number between 1-24"
          className="w-full px-4 py-3 bg-[#efeeea] border border-[#3d2817]/20 rounded focus:outline-none focus:ring-2 focus:ring-[#0b2d14] text-[#3d2817]"
        />
      </div>

      <button
        onClick={onNext}
        disabled={!formData.watchCapacity}
        className="w-full mt-6 bg-[#0b2d14] text-[#efeeea] px-8 py-4 rounded hover:bg-[#0b2d14]/90 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Continue
      </button>
    </div>
  );
}

// Step 2: Box Shape
export function WatchBoxShapeStep({ formData, updateFormData, onNext }: WatchBoxStepProps) {
  const shapes = [
    { id: 'square', label: 'Square', icon: Square },
    { id: 'rectangle', label: 'Rectangle', icon: Box },
    { id: 'hexagon', label: 'Hexagon', icon: Hexagon },
    { id: 'triangle', label: 'Triangle', icon: Triangle },
  ];

  const handleShapeSelect = (shapeId: string) => {
    updateFormData({ watchBoxShape: shapeId });
    setTimeout(() => onNext(), 300);
  };

  return (
    <div className="bg-white rounded-lg p-8 shadow-sm">
      <div className="mb-8">
        <h2 className="text-2xl text-[#3d2817] mb-2">Box Shape</h2>
        <p className="text-[#3d2817]/70">Select the shape for your watch box.</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {shapes.map((shape) => (
          <button
            key={shape.id}
            onClick={() => handleShapeSelect(shape.id)}
            className={`p-6 rounded-lg border-2 transition-all duration-200 hover:border-[#0b2d14] hover:bg-[#0b2d14]/5 ${
              formData.watchBoxShape === shape.id
                ? 'border-[#0b2d14] bg-[#0b2d14]/5'
                : 'border-[#3d2817]/20'
            }`}
          >
            <shape.icon className="w-10 h-10 text-[#0b2d14] mb-3 mx-auto" strokeWidth={1.5} />
            <p className="text-[#3d2817]">{shape.label}</p>
          </button>
        ))}
      </div>
    </div>
  );
}

// Step 3: Lid Type
export function WatchBoxLidStep({ formData, updateFormData, onNext }: WatchBoxStepProps) {
  const lidTypes = [
    { id: 'glass', label: 'Glass Top', description: 'Display your collection with a clear glass lid' },
    { id: 'wood', label: 'Wood Top', description: 'Classic solid wood lid for a timeless look' },
  ];

  const handleLidSelect = (lidId: string) => {
    updateFormData({ watchBoxLid: lidId });
    setTimeout(() => onNext(), 300);
  };

  return (
    <div className="bg-white rounded-lg p-8 shadow-sm">
      <div className="mb-8">
        <h2 className="text-2xl text-[#3d2817] mb-2">Lid Type</h2>
        <p className="text-[#3d2817]/70">Choose the type of lid for your watch box.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {lidTypes.map((lid) => (
          <button
            key={lid.id}
            onClick={() => handleLidSelect(lid.id)}
            className={`p-6 rounded-lg border-2 transition-all duration-200 hover:border-[#0b2d14] hover:bg-[#0b2d14]/5 text-left ${
              formData.watchBoxLid === lid.id
                ? 'border-[#0b2d14] bg-[#0b2d14]/5'
                : 'border-[#3d2817]/20'
            }`}
          >
            <h3 className="text-xl text-[#3d2817] mb-2">{lid.label}</h3>
            <p className="text-[#3d2817]/70">{lid.description}</p>
          </button>
        ))}
      </div>
    </div>
  );
}

// Step 4: Inlays
export function WatchBoxInlayStep({ formData, updateFormData, onNext }: WatchBoxStepProps) {
  const inlayMaterials = [
    'Brass',
    'Stainless Steel',
    'Silver',
    'Gold',
    'Copper',
  ];

  const inlayTypes = [
    'Banding',
    'Contrasting Wood',
    'Vertical',
    'Horizontal',
  ];

  const handleNext = () => {
    onNext();
  };

  return (
    <div className="bg-white rounded-lg p-8 shadow-sm">
      <div className="mb-8">
        <h2 className="text-2xl text-[#3d2817] mb-2">Inlay Details</h2>
        <p className="text-[#3d2817]/70">Would you like decorative inlays on your watch box?</p>
      </div>

      <div className="space-y-6">
        {/* Inlay Toggle */}
        <div>
          <label className="block text-[#3d2817] mb-4">Add Inlays?</label>
          <div className="grid grid-cols-2 gap-4">
            <button
              onClick={() => updateFormData({ hasInlays: true })}
              className={`p-4 rounded-lg border-2 transition-all duration-200 hover:border-[#0b2d14] ${
                formData.hasInlays === true
                  ? 'border-[#0b2d14] bg-[#0b2d14]/5'
                  : 'border-[#3d2817]/20'
              }`}
            >
              <p className="text-[#3d2817]">Yes</p>
            </button>
            <button
              onClick={() => updateFormData({ hasInlays: false })}
              className={`p-4 rounded-lg border-2 transition-all duration-200 hover:border-[#0b2d14] ${
                formData.hasInlays === false
                  ? 'border-[#0b2d14] bg-[#0b2d14]/5'
                  : 'border-[#3d2817]/20'
              }`}
            >
              <p className="text-[#3d2817]">No</p>
            </button>
          </div>
        </div>

        {/* Inlay Material - Only show if hasInlays is true */}
        {formData.hasInlays && (
          <>
            <div>
              <label htmlFor="inlay-material" className="block text-[#3d2817] mb-2">
                Inlay Material
              </label>
              <select
                id="inlay-material"
                value={formData.inlayMaterial || ''}
                onChange={(e) => updateFormData({ inlayMaterial: e.target.value })}
                className="w-full px-4 py-3 bg-[#efeeea] border border-[#3d2817]/20 rounded focus:outline-none focus:ring-2 focus:ring-[#0b2d14] text-[#3d2817]"
              >
                <option value="">Select material...</option>
                {inlayMaterials.map((material) => (
                  <option key={material} value={material}>
                    {material}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-[#3d2817] mb-4">Inlay Type</label>
              <div className="grid grid-cols-2 gap-3">
                {inlayTypes.map((type) => (
                  <button
                    key={type}
                    onClick={() => updateFormData({ inlayType: type })}
                    className={`p-4 rounded-lg border-2 transition-all duration-200 hover:border-[#0b2d14] ${
                      formData.inlayType === type
                        ? 'border-[#0b2d14] bg-[#0b2d14]/5'
                        : 'border-[#3d2817]/20'
                    }`}
                  >
                    <p className="text-sm text-[#3d2817]">{type}</p>
                  </button>
                ))}
              </div>
            </div>
          </>
        )}

        <button
          onClick={handleNext}
          disabled={formData.hasInlays === undefined}
          className="w-full bg-[#0b2d14] text-[#efeeea] px-8 py-4 rounded hover:bg-[#0b2d14]/90 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Continue
        </button>
      </div>
    </div>
  );
}

// Step 5: Watch Cushion Material
export function WatchCushionStep({ formData, updateFormData, onNext }: WatchBoxStepProps) {
  const cushionMaterials = [
    { id: 'leather', label: 'Leather', description: 'Premium leather for a luxurious feel' },
    { id: 'velvet', label: 'Velvet', description: 'Soft velvet for gentle watch protection' },
    { id: 'suede', label: 'Suede', description: 'Rich suede texture' },
    { id: 'wood', label: 'Wood', description: 'Minimalist wood pillows' },
    { id: 'custom', label: 'Custom', description: 'Tell us your preferred material' },
  ];

  const handleMaterialSelect = (materialId: string) => {
    updateFormData({ cushionMaterial: materialId });
    if (materialId !== 'custom') {
      setTimeout(() => onNext(), 300);
    }
  };

  return (
    <div className="bg-white rounded-lg p-8 shadow-sm">
      <div className="mb-8">
        <h2 className="text-2xl text-[#3d2817] mb-2">Watch Cushion Material</h2>
        <p className="text-[#3d2817]/70">Select the material for your watch holders.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-4 mb-6">
        {cushionMaterials.map((material) => (
          <button
            key={material.id}
            onClick={() => handleMaterialSelect(material.id)}
            className={`p-6 rounded-lg border-2 transition-all duration-200 hover:border-[#0b2d14] hover:bg-[#0b2d14]/5 text-left ${
              formData.cushionMaterial === material.id
                ? 'border-[#0b2d14] bg-[#0b2d14]/5'
                : 'border-[#3d2817]/20'
            }`}
          >
            <h3 className="text-lg text-[#3d2817] mb-1">{material.label}</h3>
            <p className="text-sm text-[#3d2817]/70">{material.description}</p>
          </button>
        ))}
      </div>

      {formData.cushionMaterial === 'custom' && (
        <div className="mb-6">
          <label htmlFor="custom-cushion" className="block text-[#3d2817] mb-2">
            Describe your preferred cushion material
          </label>
          <textarea
            id="custom-cushion"
            value={formData.customCushionMaterial || ''}
            onChange={(e) => updateFormData({ customCushionMaterial: e.target.value })}
            rows={3}
            placeholder="Tell us about your preferred material..."
            className="w-full px-4 py-3 bg-[#efeeea] border border-[#3d2817]/20 rounded focus:outline-none focus:ring-2 focus:ring-[#0b2d14] text-[#3d2817] resize-none"
          />
        </div>
      )}

      {formData.cushionMaterial === 'custom' && (
        <button
          onClick={onNext}
          className="w-full bg-[#0b2d14] text-[#efeeea] px-8 py-4 rounded hover:bg-[#0b2d14]/90 transition-colors duration-200"
        >
          Continue
        </button>
      )}
    </div>
  );
}

import { FormData } from '../../pages/custom-form';
import { ArrowRight, Box, Layers } from 'lucide-react';

interface JewelryBoxStepProps {
  formData: FormData;
  updateFormData: (data: Partial<FormData>) => void;
  onNext: () => void;
}

// Step 1: Orientation
export function JewelryBoxOrientationStep({ formData, updateFormData, onNext }: JewelryBoxStepProps) {
  const orientations = [
    {
      id: 'horizontal',
      label: 'Horizontal',
      description: 'Traditional jewelry box with top-opening lid',
    },
    {
      id: 'vertical',
      label: 'Vertical',
      description: 'Armoire-style with drawers and doors',
    },
  ];

  const handleOrientationSelect = (orientationId: string) => {
    updateFormData({ jewelryOrientation: orientationId });
    setTimeout(() => onNext(), 300);
  };

  return (
    <div className="bg-white rounded-lg p-8 shadow-sm">
      <div className="mb-8">
        <h2 className="text-2xl text-[#3d2817] mb-2">Jewelry Box Orientation</h2>
        <p className="text-[#3d2817]/70">Choose the style that best fits your collection.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {orientations.map((orientation) => (
          <button
            key={orientation.id}
            onClick={() => handleOrientationSelect(orientation.id)}
            className={`p-8 rounded-lg border-2 transition-all duration-200 hover:border-[#0b2d14] hover:bg-[#0b2d14]/5 text-left group ${
              formData.jewelryOrientation === orientation.id
                ? 'border-[#0b2d14] bg-[#0b2d14]/5'
                : 'border-[#3d2817]/20'
            }`}
          >
            <Box className="w-12 h-12 text-[#0b2d14] mb-4 group-hover:scale-110 transition-transform" strokeWidth={1.5} />
            <h3 className="text-xl text-[#3d2817] mb-2">{orientation.label}</h3>
            <p className="text-[#3d2817]/70">{orientation.description}</p>
          </button>
        ))}
      </div>
    </div>
  );
}

// Horizontal Flow - Step 2: Top/Lid Face
export function JewelryBoxTopFaceStep({ formData, updateFormData, onNext }: JewelryBoxStepProps) {
  const topFaces = [
    {
      id: 'glass',
      label: 'Glass Top',
      description: 'See your collection at a glance with a glass lid',
    },
    {
      id: 'solid-mirror',
      label: 'Solid w/ Mirror Inlaid',
      description: 'Elegant solid lid with inlaid mirror detail',
    },
  ];

  const handleTopFaceSelect = (faceId: string) => {
    updateFormData({ topFace: faceId });
    setTimeout(() => onNext(), 300);
  };

  return (
    <div className="bg-white rounded-lg p-8 shadow-sm">
      <div className="mb-8">
        <h2 className="text-2xl text-[#3d2817] mb-2">Top/Lid Face</h2>
        <p className="text-[#3d2817]/70">Select the style for your jewelry box lid.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {topFaces.map((face) => (
          <button
            key={face.id}
            onClick={() => handleTopFaceSelect(face.id)}
            className={`p-6 rounded-lg border-2 transition-all duration-200 hover:border-[#0b2d14] hover:bg-[#0b2d14]/5 text-left ${
              formData.topFace === face.id
                ? 'border-[#0b2d14] bg-[#0b2d14]/5'
                : 'border-[#3d2817]/20'
            }`}
          >
            <h3 className="text-xl text-[#3d2817] mb-2">{face.label}</h3>
            <p className="text-[#3d2817]/70">{face.description}</p>
          </button>
        ))}
      </div>
    </div>
  );
}

// Horizontal Flow - Step 3: Inner Material
export function JewelryBoxInnerMaterialStep({ formData, updateFormData, onNext }: JewelryBoxStepProps) {
  const innerMaterials = [
    { id: 'leather', label: 'Leather', description: 'Premium leather lining' },
    { id: 'velvet', label: 'Velvet', description: 'Soft velvet interior' },
    { id: 'suede', label: 'Suede', description: 'Rich suede lining' },
    { id: 'wood', label: 'Wood', description: 'Natural wood compartments' },
    { id: 'custom', label: 'Custom', description: 'Tell us your preference' },
  ];

  const handleMaterialSelect = (materialId: string) => {
    updateFormData({ innerMaterial: materialId });
    if (materialId !== 'custom') {
      setTimeout(() => onNext(), 300);
    }
  };

  return (
    <div className="bg-white rounded-lg p-8 shadow-sm">
      <div className="mb-8">
        <h2 className="text-2xl text-[#3d2817] mb-2">Inner Material</h2>
        <p className="text-[#3d2817]/70">Choose the lining material for your jewelry box interior.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-4 mb-6">
        {innerMaterials.map((material) => (
          <button
            key={material.id}
            onClick={() => handleMaterialSelect(material.id)}
            className={`p-6 rounded-lg border-2 transition-all duration-200 hover:border-[#0b2d14] hover:bg-[#0b2d14]/5 text-left ${
              formData.innerMaterial === material.id
                ? 'border-[#0b2d14] bg-[#0b2d14]/5'
                : 'border-[#3d2817]/20'
            }`}
          >
            <h3 className="text-lg text-[#3d2817] mb-1">{material.label}</h3>
            <p className="text-sm text-[#3d2817]/70">{material.description}</p>
          </button>
        ))}
      </div>

      {formData.innerMaterial === 'custom' && (
        <div className="mb-6">
          <label htmlFor="custom-inner-material" className="block text-[#3d2817] mb-2">
            Describe your preferred inner material
          </label>
          <textarea
            id="custom-inner-material"
            value={formData.customInnerMaterial || ''}
            onChange={(e) => updateFormData({ customInnerMaterial: e.target.value })}
            rows={3}
            placeholder="Tell us about your preferred material..."
            className="w-full px-4 py-3 bg-[#efeeea] border border-[#3d2817]/20 rounded focus:outline-none focus:ring-2 focus:ring-[#0b2d14] text-[#3d2817] resize-none"
          />
        </div>
      )}

      {formData.innerMaterial === 'custom' && (
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

// Vertical Flow - Step 2: Drawer Count
export function JewelryBoxDrawerStep({ formData, updateFormData, onNext }: JewelryBoxStepProps) {
  const drawerCounts = [1, 2, 3];

  const handleDrawerSelect = (count: number) => {
    updateFormData({ drawerCount: count });
    setTimeout(() => onNext(), 300);
  };

  return (
    <div className="bg-white rounded-lg p-8 shadow-sm">
      <div className="mb-8">
        <h2 className="text-2xl text-[#3d2817] mb-2">Number of Drawers</h2>
        <p className="text-[#3d2817]/70">Select how many drawers you'd like in your jewelry armoire.</p>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {drawerCounts.map((count) => (
          <button
            key={count}
            onClick={() => handleDrawerSelect(count)}
            className={`p-8 rounded-lg border-2 transition-all duration-200 hover:border-[#0b2d14] hover:bg-[#0b2d14]/5 ${
              formData.drawerCount === count
                ? 'border-[#0b2d14] bg-[#0b2d14]/5'
                : 'border-[#3d2817]/20'
            }`}
          >
            <Layers className="w-10 h-10 text-[#0b2d14] mb-3 mx-auto" strokeWidth={1.5} />
            <p className="text-2xl text-[#3d2817]">{count}</p>
            <p className="text-sm text-[#3d2817]/70 mt-1">
              {count === 1 ? 'Drawer' : 'Drawers'}
            </p>
          </button>
        ))}
      </div>
    </div>
  );
}

// Vertical Flow - Step 3: Door Face
export function JewelryBoxDoorFaceStep({ formData, updateFormData, onNext }: JewelryBoxStepProps) {
  const doorFaces = [
    {
      id: 'solid',
      label: 'Solid Face',
      description: 'Traditional solid wood door',
    },
    {
      id: 'glass',
      label: 'Glass Face',
      description: 'Display your jewelry with a glass door',
    },
  ];

  const handleDoorFaceSelect = (faceId: string) => {
    updateFormData({ doorFace: faceId });
    setTimeout(() => onNext(), 300);
  };

  return (
    <div className="bg-white rounded-lg p-8 shadow-sm">
      <div className="mb-8">
        <h2 className="text-2xl text-[#3d2817] mb-2">Door Face</h2>
        <p className="text-[#3d2817]/70">Choose the style for your armoire door.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {doorFaces.map((face) => (
          <button
            key={face.id}
            onClick={() => handleDoorFaceSelect(face.id)}
            className={`p-6 rounded-lg border-2 transition-all duration-200 hover:border-[#0b2d14] hover:bg-[#0b2d14]/5 text-left ${
              formData.doorFace === face.id
                ? 'border-[#0b2d14] bg-[#0b2d14]/5'
                : 'border-[#3d2817]/20'
            }`}
          >
            <h3 className="text-xl text-[#3d2817] mb-2">{face.label}</h3>
            <p className="text-[#3d2817]/70">{face.description}</p>
          </button>
        ))}
      </div>
    </div>
  );
}

// Vertical Flow - Step 4: Cabinet Interior Options
export function JewelryBoxInteriorStep({ formData, updateFormData, onNext }: JewelryBoxStepProps) {
  const interiorOptions = [
    {
      id: 'necklace-hooks',
      label: 'Necklace Hooks',
      description: 'Dedicated hooks for hanging necklaces',
    },
    {
      id: 'shelves',
      label: 'Shelves',
      description: 'Adjustable shelves for versatile storage',
    },
    {
      id: 'both',
      label: 'Both',
      description: 'Combination of hooks and shelves',
    },
  ];

  const handleInteriorSelect = (optionId: string) => {
    updateFormData({ interiorOptions: optionId });
    setTimeout(() => onNext(), 300);
  };

  return (
    <div className="bg-white rounded-lg p-8 shadow-sm">
      <div className="mb-8">
        <h2 className="text-2xl text-[#3d2817] mb-2">Cabinet Interior Options</h2>
        <p className="text-[#3d2817]/70">Choose how you'd like to organize your jewelry inside.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        {interiorOptions.map((option) => (
          <button
            key={option.id}
            onClick={() => handleInteriorSelect(option.id)}
            className={`p-6 rounded-lg border-2 transition-all duration-200 hover:border-[#0b2d14] hover:bg-[#0b2d14]/5 text-left ${
              formData.interiorOptions === option.id
                ? 'border-[#0b2d14] bg-[#0b2d14]/5'
                : 'border-[#3d2817]/20'
            }`}
          >
            <h3 className="text-lg text-[#3d2817] mb-2">{option.label}</h3>
            <p className="text-sm text-[#3d2817]/70">{option.description}</p>
          </button>
        ))}
      </div>
    </div>
  );
}

// Vertical Flow - Step 5: Hardware Material
export function JewelryBoxHardwareStep({ formData, updateFormData, onNext }: JewelryBoxStepProps) {
  const hardwareMaterials = [
    'Brass',
    'Stainless Steel',
    'Silver',
    'Gold',
    'Copper',
  ];

  const handleNext = () => {
    if (formData.hardwareMaterial) {
      onNext();
    }
  };

  return (
    <div className="bg-white rounded-lg p-8 shadow-sm">
      <div className="mb-8">
        <h2 className="text-2xl text-[#3d2817] mb-2">Hardware Material</h2>
        <p className="text-[#3d2817]/70">Select the finish for hinges, handles, and other hardware.</p>
      </div>

      <div className="space-y-6">
        <div>
          <label htmlFor="hardware-material" className="block text-[#3d2817] mb-2">
            Hardware Finish
          </label>
          <select
            id="hardware-material"
            value={formData.hardwareMaterial || ''}
            onChange={(e) => updateFormData({ hardwareMaterial: e.target.value })}
            className="w-full px-4 py-3 bg-[#efeeea] border border-[#3d2817]/20 rounded focus:outline-none focus:ring-2 focus:ring-[#0b2d14] text-[#3d2817]"
          >
            <option value="">Select hardware material...</option>
            {hardwareMaterials.map((material) => (
              <option key={material} value={material}>
                {material}
              </option>
            ))}
          </select>
        </div>

        <button
          onClick={handleNext}
          disabled={!formData.hardwareMaterial}
          className="w-full bg-[#0b2d14] text-[#efeeea] px-8 py-4 rounded hover:bg-[#0b2d14]/90 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Continue
        </button>
      </div>
    </div>
  );
}

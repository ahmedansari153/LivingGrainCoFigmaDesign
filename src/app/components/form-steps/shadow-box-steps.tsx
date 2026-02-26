import { FormData } from '../../pages/custom-form';
import { Ruler, Frame, Grid3x3, Package } from 'lucide-react';

interface ShadowBoxStepProps {
  formData: FormData;
  updateFormData: (data: Partial<FormData>) => void;
  onNext: () => void;
}

// Step 1: Dimensions (Height x Width)
export function ShadowBoxDimensionsStep({ formData, updateFormData, onNext }: ShadowBoxStepProps) {
  const handleNext = () => {
    if (formData.shadowBoxDimensions?.height && formData.shadowBoxDimensions?.width) {
      onNext();
    }
  };

  return (
    <div className="bg-white rounded-lg p-8 shadow-sm">
      <div className="mb-8">
        <h2 className="text-2xl text-[#3d2817] mb-2">Shadow Box Dimensions</h2>
        <p className="text-[#3d2817]/70">Enter the desired height and width for your shadow box.</p>
      </div>

      <div className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Height */}
          <div>
            <label htmlFor="height" className="block text-[#3d2817] mb-2 flex items-center gap-2">
              <Ruler size={18} className="text-[#0b2d14]" />
              Height (inches)
            </label>
            <input
              type="number"
              id="height"
              min="1"
              step="0.5"
              value={formData.shadowBoxDimensions?.height || ''}
              onChange={(e) =>
                updateFormData({
                  shadowBoxDimensions: {
                    ...formData.shadowBoxDimensions,
                    height: e.target.value,
                  },
                })
              }
              placeholder="e.g., 24"
              className="w-full px-4 py-3 bg-[#efeeea] border border-[#3d2817]/20 rounded focus:outline-none focus:ring-2 focus:ring-[#0b2d14] text-[#3d2817]"
            />
          </div>

          {/* Width */}
          <div>
            <label htmlFor="width" className="block text-[#3d2817] mb-2 flex items-center gap-2">
              <Ruler size={18} className="text-[#0b2d14]" />
              Width (inches)
            </label>
            <input
              type="number"
              id="width"
              min="1"
              step="0.5"
              value={formData.shadowBoxDimensions?.width || ''}
              onChange={(e) =>
                updateFormData({
                  shadowBoxDimensions: {
                    ...formData.shadowBoxDimensions,
                    width: e.target.value,
                  },
                })
              }
              placeholder="e.g., 36"
              className="w-full px-4 py-3 bg-[#efeeea] border border-[#3d2817]/20 rounded focus:outline-none focus:ring-2 focus:ring-[#0b2d14] text-[#3d2817]"
            />
          </div>
        </div>

        <div className="p-4 bg-[#efeeea] rounded-lg">
          <p className="text-sm text-[#3d2817]/70">
            <strong>Note:</strong> Final dimensions may be adjusted during consultation to ensure structural integrity and optimal display.
          </p>
        </div>

        <button
          onClick={handleNext}
          disabled={!formData.shadowBoxDimensions?.height || !formData.shadowBoxDimensions?.width}
          className="w-full bg-[#0b2d14] text-[#efeeea] px-8 py-4 rounded hover:bg-[#0b2d14]/90 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Continue
        </button>
      </div>
    </div>
  );
}

// Step 2: Face/Top Type
export function ShadowBoxFaceStep({ formData, updateFormData, onNext }: ShadowBoxStepProps) {
  const faceTypes = [
    {
      id: 'open',
      label: 'Open Face',
      description: 'No glass or door - open display for easy access',
      icon: Frame,
    },
    {
      id: 'glass',
      label: 'Glass Door',
      description: 'Protected display with glass front to preserve your collection',
      icon: Package,
    },
  ];

  const handleFaceSelect = (faceId: string) => {
    updateFormData({ shadowBoxFace: faceId });
    setTimeout(() => onNext(), 300);
  };

  return (
    <div className="bg-white rounded-lg p-8 shadow-sm">
      <div className="mb-8">
        <h2 className="text-2xl text-[#3d2817] mb-2">Face/Top Type</h2>
        <p className="text-[#3d2817]/70">Choose how you'd like to access and display your items.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {faceTypes.map((face) => (
          <button
            key={face.id}
            onClick={() => handleFaceSelect(face.id)}
            className={`p-6 rounded-lg border-2 transition-all duration-200 hover:border-[#0b2d14] hover:bg-[#0b2d14]/5 text-left group ${
              formData.shadowBoxFace === face.id
                ? 'border-[#0b2d14] bg-[#0b2d14]/5'
                : 'border-[#3d2817]/20'
            }`}
          >
            <face.icon
              className="w-12 h-12 text-[#0b2d14] mb-4 group-hover:scale-110 transition-transform"
              strokeWidth={1.5}
            />
            <h3 className="text-xl text-[#3d2817] mb-2">{face.label}</h3>
            <p className="text-[#3d2817]/70">{face.description}</p>
          </button>
        ))}
      </div>
    </div>
  );
}

// Step 3: Shelves
export function ShadowBoxShelvesStep({ formData, updateFormData, onNext }: ShadowBoxStepProps) {
  const handleNext = () => {
    if (formData.hasShelves !== undefined) {
      onNext();
    }
  };

  return (
    <div className="bg-white rounded-lg p-8 shadow-sm">
      <div className="mb-8">
        <h2 className="text-2xl text-[#3d2817] mb-2">Interior Shelves</h2>
        <p className="text-[#3d2817]/70">Would you like shelves inside your shadow box?</p>
      </div>

      <div className="space-y-6">
        {/* Shelves Yes/No */}
        <div>
          <label className="block text-[#3d2817] mb-4">Add Interior Shelves?</label>
          <div className="grid grid-cols-2 gap-4">
            <button
              onClick={() => updateFormData({ hasShelves: true })}
              className={`p-4 rounded-lg border-2 transition-all duration-200 hover:border-[#0b2d14] ${
                formData.hasShelves === true
                  ? 'border-[#0b2d14] bg-[#0b2d14]/5'
                  : 'border-[#3d2817]/20'
              }`}
            >
              <Grid3x3 className="w-8 h-8 text-[#0b2d14] mb-2 mx-auto" strokeWidth={1.5} />
              <p className="text-[#3d2817]">Yes</p>
            </button>
            <button
              onClick={() => {
                updateFormData({ hasShelves: false, numberOfShelves: undefined });
              }}
              className={`p-4 rounded-lg border-2 transition-all duration-200 hover:border-[#0b2d14] ${
                formData.hasShelves === false
                  ? 'border-[#0b2d14] bg-[#0b2d14]/5'
                  : 'border-[#3d2817]/20'
              }`}
            >
              <p className="text-[#3d2817]">No</p>
            </button>
          </div>
        </div>

        {/* Number of Shelves - Only show if hasShelves is true */}
        {formData.hasShelves && (
          <div>
            <label htmlFor="shelf-count" className="block text-[#3d2817] mb-2">
              Number of Shelves
            </label>
            <input
              type="number"
              id="shelf-count"
              min="1"
              max="10"
              value={formData.numberOfShelves || ''}
              onChange={(e) => updateFormData({ numberOfShelves: parseInt(e.target.value) })}
              placeholder="e.g., 3"
              className="w-full px-4 py-3 bg-[#efeeea] border border-[#3d2817]/20 rounded focus:outline-none focus:ring-2 focus:ring-[#0b2d14] text-[#3d2817]"
            />
            <p className="text-sm text-[#3d2817]/60 mt-2">
              Shelf placement will be optimized during design consultation
            </p>
          </div>
        )}

        <button
          onClick={handleNext}
          disabled={formData.hasShelves === undefined || (formData.hasShelves && !formData.numberOfShelves)}
          className="w-full bg-[#0b2d14] text-[#efeeea] px-8 py-4 rounded hover:bg-[#0b2d14]/90 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Continue
        </button>
      </div>
    </div>
  );
}

// Step 4: Inner Backing Material
export function ShadowBoxBackingStep({ formData, updateFormData, onNext }: ShadowBoxStepProps) {
  const backingMaterials = [
    {
      id: 'foam-board',
      label: 'Foam Board',
      description: 'Lightweight, easy to pin items',
    },
    {
      id: 'cork',
      label: 'Cork',
      description: 'Natural texture, ideal for pinning',
    },
    {
      id: 'felt',
      label: 'Felt',
      description: 'Soft, elegant presentation',
    },
    {
      id: 'plywood',
      label: 'Plywood',
      description: 'Solid wood backing',
    },
    {
      id: 'mdf',
      label: 'MDF',
      description: 'Smooth, paintable surface',
    },
  ];

  const handleMaterialSelect = (materialId: string) => {
    updateFormData({ backingMaterial: materialId });
    setTimeout(() => onNext(), 300);
  };

  return (
    <div className="bg-white rounded-lg p-8 shadow-sm">
      <div className="mb-8">
        <h2 className="text-2xl text-[#3d2817] mb-2">Inner Backing Material</h2>
        <p className="text-[#3d2817]/70">Select the material for the back panel of your shadow box.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {backingMaterials.map((material) => (
          <button
            key={material.id}
            onClick={() => handleMaterialSelect(material.id)}
            className={`p-6 rounded-lg border-2 transition-all duration-200 hover:border-[#0b2d14] hover:bg-[#0b2d14]/5 text-left ${
              formData.backingMaterial === material.id
                ? 'border-[#0b2d14] bg-[#0b2d14]/5'
                : 'border-[#3d2817]/20'
            }`}
          >
            <h3 className="text-lg text-[#3d2817] mb-1">{material.label}</h3>
            <p className="text-sm text-[#3d2817]/70">{material.description}</p>
          </button>
        ))}
      </div>
    </div>
  );
}

import { FormData } from '../../pages/custom-form';
import { Square, Minimize2, Upload, Ruler } from 'lucide-react';
import { useState } from 'react';

interface DeskStepProps {
  formData: FormData;
  updateFormData: (data: Partial<FormData>) => void;
  onNext: () => void;
}

// Step 1: Shape Selection
export function DeskShapeStep({ formData, updateFormData, onNext }: DeskStepProps) {
  const shapes = [
    {
      id: 'l-shape',
      label: 'L Shape',
      description: 'Corner desk with two perpendicular surfaces',
    },
    {
      id: 'rectangle',
      label: 'Rectangle',
      description: 'Traditional straight desk',
    },
    {
      id: 'live-edge',
      label: 'Live Edge',
      description: 'Natural edge desk with organic form',
    },
    {
      id: 'corner',
      label: 'Corner',
      description: 'Angled corner desk design',
    },
  ];

  const handleShapeSelect = (shapeId: string) => {
    updateFormData({ deskShape: shapeId });
    setTimeout(() => onNext(), 300);
  };

  return (
    <div className="bg-white rounded-lg p-8 shadow-sm">
      <div className="mb-8">
        <h2 className="text-2xl text-[#3d2817] mb-2">Desk Shape</h2>
        <p className="text-[#3d2817]/70">Choose the configuration that best fits your workspace.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {shapes.map((shape) => (
          <button
            key={shape.id}
            onClick={() => handleShapeSelect(shape.id)}
            className={`p-6 rounded-lg border-2 transition-all duration-200 hover:border-[#0b2d14] hover:bg-[#0b2d14]/5 text-left group ${
              formData.deskShape === shape.id
                ? 'border-[#0b2d14] bg-[#0b2d14]/5'
                : 'border-[#3d2817]/20'
            }`}
          >
            <Square
              className="w-10 h-10 text-[#0b2d14] mb-3 group-hover:scale-110 transition-transform"
              strokeWidth={1.5}
            />
            <h3 className="text-lg text-[#3d2817] mb-2">{shape.label}</h3>
            <p className="text-sm text-[#3d2817]/70">{shape.description}</p>
          </button>
        ))}
      </div>
    </div>
  );
}

// L-Shape Flow - Step 2: Left Leg Design
export function DeskLeftLegDesignStep({ formData, updateFormData, onNext }: DeskStepProps) {
  const [customIdea, setCustomIdea] = useState('');
  const [customFile, setCustomFile] = useState<File | null>(null);

  const legDesigns = [
    { id: 'square', label: 'Square' },
    { id: 'round', label: 'Round' },
    { id: 'x-legs', label: 'X Legs' },
    { id: 'drawers', label: 'Drawers' },
    { id: 'shelves', label: 'Shelves' },
  ];

  const handleLegSelect = (legId: string) => {
    updateFormData({ leftLegDesign: legId });
    setTimeout(() => onNext(), 300);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setCustomFile(file);
      updateFormData({ leftLegCustomFileName: file.name });
    }
  };

  const handleCustomNext = () => {
    if (customIdea || customFile) {
      updateFormData({ 
        leftLegDesign: 'custom',
        leftLegCustomIdea: customIdea 
      });
      onNext();
    }
  };

  return (
    <div className="bg-white rounded-lg p-8 shadow-sm">
      <div className="mb-8">
        <h2 className="text-2xl text-[#3d2817] mb-2">Left Leg Design</h2>
        <p className="text-[#3d2817]/70">Select the leg style for the left side of your L-shaped desk.</p>
      </div>

      <div className="space-y-6">
        <div className="grid md:grid-cols-3 gap-4">
          {legDesigns.map((leg) => (
            <button
              key={leg.id}
              onClick={() => handleLegSelect(leg.id)}
              className={`p-6 rounded-lg border-2 transition-all duration-200 hover:border-[#0b2d14] hover:bg-[#0b2d14]/5 ${
                formData.leftLegDesign === leg.id
                  ? 'border-[#0b2d14] bg-[#0b2d14]/5'
                  : 'border-[#3d2817]/20'
              }`}
            >
              <p className="text-[#3d2817]">{leg.label}</p>
            </button>
          ))}
        </div>

        {/* Custom Option */}
        <div className="border-t border-[#3d2817]/20 pt-6">
          <h3 className="text-lg text-[#3d2817] mb-4">Custom Idea</h3>
          
          <textarea
            value={customIdea}
            onChange={(e) => setCustomIdea(e.target.value)}
            rows={3}
            placeholder="Describe your custom leg design idea..."
            className="w-full px-4 py-3 bg-[#efeeea] border border-[#3d2817]/20 rounded focus:outline-none focus:ring-2 focus:ring-[#0b2d14] text-[#3d2817] resize-none mb-4"
          />

          <div className="border-2 border-dashed border-[#3d2817]/20 rounded-lg p-6 text-center hover:border-[#0b2d14] transition-colors">
            <input
              type="file"
              id="left-leg-custom"
              accept="image/*"
              onChange={handleFileChange}
              className="hidden"
            />
            <label htmlFor="left-leg-custom" className="cursor-pointer flex flex-col items-center gap-3">
              <Upload className="w-10 h-10 text-[#0b2d14]" strokeWidth={1.5} />
              {customFile || formData.leftLegCustomFileName ? (
                <p className="text-[#3d2817]">{customFile?.name || formData.leftLegCustomFileName}</p>
              ) : (
                <p className="text-[#3d2817]/70">Upload reference image (optional)</p>
              )}
            </label>
          </div>

          {(customIdea || customFile) && (
            <button
              onClick={handleCustomNext}
              className="w-full mt-4 bg-[#0b2d14] text-[#efeeea] px-8 py-4 rounded hover:bg-[#0b2d14]/90 transition-colors duration-200"
            >
              Continue with Custom Design
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

// L-Shape Flow - Step 3: Right Leg Design
export function DeskRightLegDesignStep({ formData, updateFormData, onNext }: DeskStepProps) {
  const [customIdea, setCustomIdea] = useState('');
  const [customFile, setCustomFile] = useState<File | null>(null);

  const legDesigns = [
    { id: 'square', label: 'Square' },
    { id: 'round', label: 'Round' },
    { id: 'x-legs', label: 'X Legs' },
    { id: 'drawers', label: 'Drawers' },
    { id: 'shelves', label: 'Shelves' },
  ];

  const handleLegSelect = (legId: string) => {
    updateFormData({ rightLegDesign: legId });
    setTimeout(() => onNext(), 300);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setCustomFile(file);
      updateFormData({ rightLegCustomFileName: file.name });
    }
  };

  const handleCustomNext = () => {
    if (customIdea || customFile) {
      updateFormData({ 
        rightLegDesign: 'custom',
        rightLegCustomIdea: customIdea 
      });
      onNext();
    }
  };

  return (
    <div className="bg-white rounded-lg p-8 shadow-sm">
      <div className="mb-8">
        <h2 className="text-2xl text-[#3d2817] mb-2">Right Leg Design</h2>
        <p className="text-[#3d2817]/70">Select the leg style for the right side of your L-shaped desk.</p>
      </div>

      <div className="space-y-6">
        <div className="grid md:grid-cols-3 gap-4">
          {legDesigns.map((leg) => (
            <button
              key={leg.id}
              onClick={() => handleLegSelect(leg.id)}
              className={`p-6 rounded-lg border-2 transition-all duration-200 hover:border-[#0b2d14] hover:bg-[#0b2d14]/5 ${
                formData.rightLegDesign === leg.id
                  ? 'border-[#0b2d14] bg-[#0b2d14]/5'
                  : 'border-[#3d2817]/20'
              }`}
            >
              <p className="text-[#3d2817]">{leg.label}</p>
            </button>
          ))}
        </div>

        {/* Custom Option */}
        <div className="border-t border-[#3d2817]/20 pt-6">
          <h3 className="text-lg text-[#3d2817] mb-4">Custom Idea</h3>
          
          <textarea
            value={customIdea}
            onChange={(e) => setCustomIdea(e.target.value)}
            rows={3}
            placeholder="Describe your custom leg design idea..."
            className="w-full px-4 py-3 bg-[#efeeea] border border-[#3d2817]/20 rounded focus:outline-none focus:ring-2 focus:ring-[#0b2d14] text-[#3d2817] resize-none mb-4"
          />

          <div className="border-2 border-dashed border-[#3d2817]/20 rounded-lg p-6 text-center hover:border-[#0b2d14] transition-colors">
            <input
              type="file"
              id="right-leg-custom"
              accept="image/*"
              onChange={handleFileChange}
              className="hidden"
            />
            <label htmlFor="right-leg-custom" className="cursor-pointer flex flex-col items-center gap-3">
              <Upload className="w-10 h-10 text-[#0b2d14]" strokeWidth={1.5} />
              {customFile || formData.rightLegCustomFileName ? (
                <p className="text-[#3d2817]">{customFile?.name || formData.rightLegCustomFileName}</p>
              ) : (
                <p className="text-[#3d2817]/70">Upload reference image (optional)</p>
              )}
            </label>
          </div>

          {(customIdea || customFile) && (
            <button
              onClick={handleCustomNext}
              className="w-full mt-4 bg-[#0b2d14] text-[#efeeea] px-8 py-4 rounded hover:bg-[#0b2d14]/90 transition-colors duration-200"
            >
              Continue with Custom Design
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

// Rectangle/Live Edge/Corner Flow - Step 2: Leg Design (single)
export function DeskLegDesignStep({ formData, updateFormData, onNext }: DeskStepProps) {
  const [customIdea, setCustomIdea] = useState('');
  const [customFile, setCustomFile] = useState<File | null>(null);

  const legDesigns = [
    { id: 'square', label: 'Square' },
    { id: 'round', label: 'Round' },
    { id: 'x-legs', label: 'X Legs' },
    { id: 'drawers', label: 'Drawers' },
    { id: 'shelves', label: 'Shelves' },
  ];

  const handleLegSelect = (legId: string) => {
    updateFormData({ deskLegDesign: legId });
    setTimeout(() => onNext(), 300);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setCustomFile(file);
      updateFormData({ deskLegCustomFileName: file.name });
    }
  };

  const handleCustomNext = () => {
    if (customIdea || customFile) {
      updateFormData({ 
        deskLegDesign: 'custom',
        deskLegCustomIdea: customIdea 
      });
      onNext();
    }
  };

  return (
    <div className="bg-white rounded-lg p-8 shadow-sm">
      <div className="mb-8">
        <h2 className="text-2xl text-[#3d2817] mb-2">Leg Design</h2>
        <p className="text-[#3d2817]/70">Select the leg style for your desk.</p>
      </div>

      <div className="space-y-6">
        <div className="grid md:grid-cols-3 gap-4">
          {legDesigns.map((leg) => (
            <button
              key={leg.id}
              onClick={() => handleLegSelect(leg.id)}
              className={`p-6 rounded-lg border-2 transition-all duration-200 hover:border-[#0b2d14] hover:bg-[#0b2d14]/5 ${
                formData.deskLegDesign === leg.id
                  ? 'border-[#0b2d14] bg-[#0b2d14]/5'
                  : 'border-[#3d2817]/20'
              }`}
            >
              <p className="text-[#3d2817]">{leg.label}</p>
            </button>
          ))}
        </div>

        {/* Custom Option */}
        <div className="border-t border-[#3d2817]/20 pt-6">
          <h3 className="text-lg text-[#3d2817] mb-4">Custom Idea</h3>
          
          <textarea
            value={customIdea}
            onChange={(e) => setCustomIdea(e.target.value)}
            rows={3}
            placeholder="Describe your custom leg design idea..."
            className="w-full px-4 py-3 bg-[#efeeea] border border-[#3d2817]/20 rounded focus:outline-none focus:ring-2 focus:ring-[#0b2d14] text-[#3d2817] resize-none mb-4"
          />

          <div className="border-2 border-dashed border-[#3d2817]/20 rounded-lg p-6 text-center hover:border-[#0b2d14] transition-colors">
            <input
              type="file"
              id="desk-leg-custom"
              accept="image/*"
              onChange={handleFileChange}
              className="hidden"
            />
            <label htmlFor="desk-leg-custom" className="cursor-pointer flex flex-col items-center gap-3">
              <Upload className="w-10 h-10 text-[#0b2d14]" strokeWidth={1.5} />
              {customFile || formData.deskLegCustomFileName ? (
                <p className="text-[#3d2817]">{customFile?.name || formData.deskLegCustomFileName}</p>
              ) : (
                <p className="text-[#3d2817]/70">Upload reference image (optional)</p>
              )}
            </label>
          </div>

          {(customIdea || customFile) && (
            <button
              onClick={handleCustomNext}
              className="w-full mt-4 bg-[#0b2d14] text-[#efeeea] px-8 py-4 rounded hover:bg-[#0b2d14]/90 transition-colors duration-200"
            >
              Continue with Custom Design
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

// Rectangle/Live Edge/Corner - Left Side Length
export function DeskLeftSideLengthStep({ formData, updateFormData, onNext }: DeskStepProps) {
  const standardLengths = [48, 54, 60, 66, 72];
  const [customLength, setCustomLength] = useState('');

  const handleStandardSelect = (length: number) => {
    updateFormData({ leftSideLength: length.toString() });
    setTimeout(() => onNext(), 300);
  };

  const handleCustomNext = () => {
    if (customLength) {
      updateFormData({ leftSideLength: customLength });
      onNext();
    }
  };

  return (
    <div className="bg-white rounded-lg p-8 shadow-sm">
      <div className="mb-8">
        <h2 className="text-2xl text-[#3d2817] mb-2">Left Side Length</h2>
        <p className="text-[#3d2817]/70">Choose from standard sizes or enter custom dimensions.</p>
      </div>

      <div className="space-y-6">
        <div className="grid grid-cols-3 gap-4">
          {standardLengths.map((length) => (
            <button
              key={length}
              onClick={() => handleStandardSelect(length)}
              className={`p-4 rounded-lg border-2 transition-all duration-200 hover:border-[#0b2d14] hover:bg-[#0b2d14]/5 ${
                formData.leftSideLength === length.toString()
                  ? 'border-[#0b2d14] bg-[#0b2d14]/5'
                  : 'border-[#3d2817]/20'
              }`}
            >
              <p className="text-[#3d2817] text-lg">{length}"</p>
            </button>
          ))}
        </div>

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-[#3d2817]/20"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-4 bg-white text-[#3d2817]/60">OR</span>
          </div>
        </div>

        <div>
          <label htmlFor="custom-left-length" className="block text-[#3d2817] mb-2">
            Custom Length (6" increments)
          </label>
          <input
            type="number"
            id="custom-left-length"
            min="48"
            max="72"
            step="6"
            value={customLength}
            onChange={(e) => setCustomLength(e.target.value)}
            placeholder="e.g., 60"
            className="w-full px-4 py-3 bg-[#efeeea] border border-[#3d2817]/20 rounded focus:outline-none focus:ring-2 focus:ring-[#0b2d14] text-[#3d2817]"
          />
          {customLength && (
            <button
              onClick={handleCustomNext}
              className="w-full mt-4 bg-[#0b2d14] text-[#efeeea] px-8 py-4 rounded hover:bg-[#0b2d14]/90 transition-colors duration-200"
            >
              Continue
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

// Rectangle/Live Edge/Corner - Right Side Length
export function DeskRightSideLengthStep({ formData, updateFormData, onNext }: DeskStepProps) {
  const standardLengths = [48, 54, 60, 66, 72];
  const [customLength, setCustomLength] = useState('');

  const handleStandardSelect = (length: number) => {
    updateFormData({ rightSideLength: length.toString() });
    setTimeout(() => onNext(), 300);
  };

  const handleCustomNext = () => {
    if (customLength) {
      updateFormData({ rightSideLength: customLength });
      onNext();
    }
  };

  return (
    <div className="bg-white rounded-lg p-8 shadow-sm">
      <div className="mb-8">
        <h2 className="text-2xl text-[#3d2817] mb-2">Right Side Length</h2>
        <p className="text-[#3d2817]/70">Choose from standard sizes or enter custom dimensions.</p>
      </div>

      <div className="space-y-6">
        <div className="grid grid-cols-3 gap-4">
          {standardLengths.map((length) => (
            <button
              key={length}
              onClick={() => handleStandardSelect(length)}
              className={`p-4 rounded-lg border-2 transition-all duration-200 hover:border-[#0b2d14] hover:bg-[#0b2d14]/5 ${
                formData.rightSideLength === length.toString()
                  ? 'border-[#0b2d14] bg-[#0b2d14]/5'
                  : 'border-[#3d2817]/20'
              }`}
            >
              <p className="text-[#3d2817] text-lg">{length}"</p>
            </button>
          ))}
        </div>

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-[#3d2817]/20"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-4 bg-white text-[#3d2817]/60">OR</span>
          </div>
        </div>

        <div>
          <label htmlFor="custom-right-length" className="block text-[#3d2817] mb-2">
            Custom Length (6" increments)
          </label>
          <input
            type="number"
            id="custom-right-length"
            min="48"
            max="72"
            step="6"
            value={customLength}
            onChange={(e) => setCustomLength(e.target.value)}
            placeholder="e.g., 60"
            className="w-full px-4 py-3 bg-[#efeeea] border border-[#3d2817]/20 rounded focus:outline-none focus:ring-2 focus:ring-[#0b2d14] text-[#3d2817]"
          />
          {customLength && (
            <button
              onClick={handleCustomNext}
              className="w-full mt-4 bg-[#0b2d14] text-[#efeeea] px-8 py-4 rounded hover:bg-[#0b2d14]/90 transition-colors duration-200"
            >
              Continue
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

// L-Shape - Length
export function DeskLengthStep({ formData, updateFormData, onNext }: DeskStepProps) {
  const standardLengths = [48, 54, 60, 66, 72];
  const [customLength, setCustomLength] = useState('');

  const handleStandardSelect = (length: number) => {
    updateFormData({ deskLength: length.toString() });
    setTimeout(() => onNext(), 300);
  };

  const handleCustomNext = () => {
    if (customLength) {
      updateFormData({ deskLength: customLength });
      onNext();
    }
  };

  return (
    <div className="bg-white rounded-lg p-8 shadow-sm">
      <div className="mb-8">
        <h2 className="text-2xl text-[#3d2817] mb-2">Length</h2>
        <p className="text-[#3d2817]/70">Choose from standard sizes or enter custom dimensions.</p>
      </div>

      <div className="space-y-6">
        <div className="grid grid-cols-3 gap-4">
          {standardLengths.map((length) => (
            <button
              key={length}
              onClick={() => handleStandardSelect(length)}
              className={`p-4 rounded-lg border-2 transition-all duration-200 hover:border-[#0b2d14] hover:bg-[#0b2d14]/5 ${
                formData.deskLength === length.toString()
                  ? 'border-[#0b2d14] bg-[#0b2d14]/5'
                  : 'border-[#3d2817]/20'
              }`}
            >
              <p className="text-[#3d2817] text-lg">{length}"</p>
            </button>
          ))}
        </div>

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-[#3d2817]/20"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-4 bg-white text-[#3d2817]/60">OR</span>
          </div>
        </div>

        <div>
          <label htmlFor="custom-desk-length" className="block text-[#3d2817] mb-2">
            Custom Length (6" increments)
          </label>
          <input
            type="number"
            id="custom-desk-length"
            min="48"
            max="72"
            step="6"
            value={customLength}
            onChange={(e) => setCustomLength(e.target.value)}
            placeholder="e.g., 60"
            className="w-full px-4 py-3 bg-[#efeeea] border border-[#3d2817]/20 rounded focus:outline-none focus:ring-2 focus:ring-[#0b2d14] text-[#3d2817]"
          />
          {customLength && (
            <button
              onClick={handleCustomNext}
              className="w-full mt-4 bg-[#0b2d14] text-[#efeeea] px-8 py-4 rounded hover:bg-[#0b2d14]/90 transition-colors duration-200"
            >
              Continue
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

// Rectangle/Live Edge/Corner - Left Side Depth
export function DeskLeftSideDepthStep({ formData, updateFormData, onNext }: DeskStepProps) {
  const standardDepths = [18, 20, 22, 24, 26, 28, 30];

  const handleDepthSelect = (depth: number) => {
    updateFormData({ leftSideDepth: depth.toString() });
    setTimeout(() => onNext(), 300);
  };

  return (
    <div className="bg-white rounded-lg p-8 shadow-sm">
      <div className="mb-8">
        <h2 className="text-2xl text-[#3d2817] mb-2">Left Side Depth</h2>
        <p className="text-[#3d2817]/70">Select the depth in 2" increments (18"-30").</p>
      </div>

      <div className="grid grid-cols-4 gap-4">
        {standardDepths.map((depth) => (
          <button
            key={depth}
            onClick={() => handleDepthSelect(depth)}
            className={`p-4 rounded-lg border-2 transition-all duration-200 hover:border-[#0b2d14] hover:bg-[#0b2d14]/5 ${
              formData.leftSideDepth === depth.toString()
                ? 'border-[#0b2d14] bg-[#0b2d14]/5'
                : 'border-[#3d2817]/20'
            }`}
          >
            <p className="text-[#3d2817] text-lg">{depth}"</p>
          </button>
        ))}
      </div>
    </div>
  );
}

// Rectangle/Live Edge/Corner - Right Side Depth
export function DeskRightSideDepthStep({ formData, updateFormData, onNext }: DeskStepProps) {
  const standardDepths = [18, 20, 22, 24, 26, 28, 30];

  const handleDepthSelect = (depth: number) => {
    updateFormData({ rightSideDepth: depth.toString() });
    setTimeout(() => onNext(), 300);
  };

  return (
    <div className="bg-white rounded-lg p-8 shadow-sm">
      <div className="mb-8">
        <h2 className="text-2xl text-[#3d2817] mb-2">Right Side Depth</h2>
        <p className="text-[#3d2817]/70">Select the depth in 2" increments (18"-30").</p>
      </div>

      <div className="grid grid-cols-4 gap-4">
        {standardDepths.map((depth) => (
          <button
            key={depth}
            onClick={() => handleDepthSelect(depth)}
            className={`p-4 rounded-lg border-2 transition-all duration-200 hover:border-[#0b2d14] hover:bg-[#0b2d14]/5 ${
              formData.rightSideDepth === depth.toString()
                ? 'border-[#0b2d14] bg-[#0b2d14]/5'
                : 'border-[#3d2817]/20'
            }`}
          >
            <p className="text-[#3d2817] text-lg">{depth}"</p>
          </button>
        ))}
      </div>
    </div>
  );
}

// Common - Height (dropdown with 1" increments from 26"-32")
export function DeskHeightStep({ formData, updateFormData, onNext }: DeskStepProps) {
  const heights = Array.from({ length: 7 }, (_, i) => 26 + i); // 26-32

  const handleNext = () => {
    if (formData.deskHeight) {
      onNext();
    }
  };

  return (
    <div className="bg-white rounded-lg p-8 shadow-sm">
      <div className="mb-8">
        <h2 className="text-2xl text-[#3d2817] mb-2">Height</h2>
        <p className="text-[#3d2817]/70">Select the desk height (standard range: 26"-32").</p>
      </div>

      <div className="space-y-6">
        <div>
          <label htmlFor="desk-height" className="block text-[#3d2817] mb-2 flex items-center gap-2">
            <Ruler size={18} className="text-[#0b2d14]" />
            Desk Height (inches)
          </label>
          <select
            id="desk-height"
            value={formData.deskHeight || ''}
            onChange={(e) => updateFormData({ deskHeight: e.target.value })}
            className="w-full px-4 py-3 bg-[#efeeea] border border-[#3d2817]/20 rounded focus:outline-none focus:ring-2 focus:ring-[#0b2d14] text-[#3d2817]"
          >
            <option value="">Select height...</option>
            {heights.map((height) => (
              <option key={height} value={height}>
                {height}" ({height} inches)
              </option>
            ))}
          </select>
          <p className="text-sm text-[#3d2817]/60 mt-2">
            Standard desk height is 29-30 inches
          </p>
        </div>

        <button
          onClick={handleNext}
          disabled={!formData.deskHeight}
          className="w-full bg-[#0b2d14] text-[#efeeea] px-8 py-4 rounded hover:bg-[#0b2d14]/90 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Continue
        </button>
      </div>
    </div>
  );
}

// L-Shape - Depth (16-30" with 2" increments)
export function DeskDepthStep({ formData, updateFormData, onNext }: DeskStepProps) {
  const standardDepths = [16, 18, 20, 22, 24, 26, 28, 30];

  const handleDepthSelect = (depth: number) => {
    updateFormData({ deskDepth: depth.toString() });
    setTimeout(() => onNext(), 300);
  };

  return (
    <div className="bg-white rounded-lg p-8 shadow-sm">
      <div className="mb-8">
        <h2 className="text-2xl text-[#3d2817] mb-2">Depth</h2>
        <p className="text-[#3d2817]/70">Select the desk depth in 2" increments (16"-30").</p>
      </div>

      <div className="grid grid-cols-4 gap-4">
        {standardDepths.map((depth) => (
          <button
            key={depth}
            onClick={() => handleDepthSelect(depth)}
            className={`p-4 rounded-lg border-2 transition-all duration-200 hover:border-[#0b2d14] hover:bg-[#0b2d14]/5 ${
              formData.deskDepth === depth.toString()
                ? 'border-[#0b2d14] bg-[#0b2d14]/5'
                : 'border-[#3d2817]/20'
            }`}
          >
            <p className="text-[#3d2817] text-lg">{depth}"</p>
          </button>
        ))}
      </div>
    </div>
  );
}

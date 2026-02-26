import { FormData } from '../../pages/custom-form';
import { Layers, Upload, Grid3x3 } from 'lucide-react';
import { useState } from 'react';

interface NightstandStepProps {
  formData: FormData;
  updateFormData: (data: Partial<FormData>) => void;
  onNext: () => void;
}

// Step 1: Style
export function NightstandStyleStep({ formData, updateFormData, onNext }: NightstandStepProps) {
  const styles = [
    {
      id: 'drawers',
      label: 'Drawers',
      description: 'Multiple drawer storage',
    },
    {
      id: '1-drawer-open-solid',
      label: '1 Drawer-Open Solid',
      description: 'One drawer with open shelf below',
    },
    {
      id: '1-door-cabinet',
      label: '1 Door-Cabinet',
      description: 'Single door cabinet design',
    },
  ];

  const handleStyleSelect = (styleId: string) => {
    updateFormData({ nightstandStyle: styleId });
    setTimeout(() => onNext(), 300);
  };

  return (
    <div className="bg-white rounded-lg p-8 shadow-sm">
      <div className="mb-8">
        <h2 className="text-2xl text-[#3d2817] mb-2">Nightstand Style</h2>
        <p className="text-[#3d2817]/70">Choose the configuration that best fits your bedroom.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {styles.map((style) => (
          <button
            key={style.id}
            onClick={() => handleStyleSelect(style.id)}
            className={`p-6 rounded-lg border-2 transition-all duration-200 hover:border-[#0b2d14] hover:bg-[#0b2d14]/5 text-left group ${
              formData.nightstandStyle === style.id
                ? 'border-[#0b2d14] bg-[#0b2d14]/5'
                : 'border-[#3d2817]/20'
            }`}
          >
            <Layers
              className="w-10 h-10 text-[#0b2d14] mb-3 group-hover:scale-110 transition-transform"
              strokeWidth={1.5}
            />
            <h3 className="text-lg text-[#3d2817] mb-2">{style.label}</h3>
            <p className="text-sm text-[#3d2817]/70">{style.description}</p>
          </button>
        ))}
      </div>
    </div>
  );
}

// Step 2: Added Edging
export function NightstandEdgingStep({ formData, updateFormData, onNext }: NightstandStepProps) {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const edgingTemplates = [
    'Simple Rounded Edge',
    'Chamfered Edge',
    'Decorative Bevel',
    'Live Edge',
    'No Edging',
  ];

  const handleEdgingChoice = (hasEdging: boolean) => {
    updateFormData({ hasEdging });
  };

  const handleTemplateSelect = (template: string) => {
    updateFormData({ edgingTemplate: template });
    setTimeout(() => onNext(), 300);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      updateFormData({ edgingPhotoName: file.name });
    }
  };

  const handleCustomEdgingNext = () => {
    if (selectedFile || formData.edgingPhotoName) {
      onNext();
    }
  };

  return (
    <div className="bg-white rounded-lg p-8 shadow-sm">
      <div className="mb-8">
        <h2 className="text-2xl text-[#3d2817] mb-2">Added Edging</h2>
        <p className="text-[#3d2817]/70">Would you like decorative edging on your nightstand?</p>
      </div>

      <div className="space-y-6">
        {/* Yes/No Choice */}
        <div>
          <label className="block text-[#3d2817] mb-4">Add Decorative Edging?</label>
          <div className="grid grid-cols-2 gap-4">
            <button
              onClick={() => handleEdgingChoice(true)}
              className={`p-4 rounded-lg border-2 transition-all duration-200 hover:border-[#0b2d14] ${
                formData.hasEdging === true
                  ? 'border-[#0b2d14] bg-[#0b2d14]/5'
                  : 'border-[#3d2817]/20'
              }`}
            >
              <p className="text-[#3d2817]">Yes</p>
            </button>
            <button
              onClick={() => {
                updateFormData({ hasEdging: false, edgingTemplate: undefined, edgingPhotoName: undefined });
                setTimeout(() => onNext(), 300);
              }}
              className={`p-4 rounded-lg border-2 transition-all duration-200 hover:border-[#0b2d14] ${
                formData.hasEdging === false
                  ? 'border-[#0b2d14] bg-[#0b2d14]/5'
                  : 'border-[#3d2817]/20'
              }`}
            >
              <p className="text-[#3d2817]">No</p>
            </button>
          </div>
        </div>

        {/* Show template/custom options if Yes is selected */}
        {formData.hasEdging === true && (
          <>
            {/* Template Selection */}
            <div>
              <label className="block text-[#3d2817] mb-4 flex items-center gap-2">
                <Grid3x3 size={18} className="text-[#0b2d14]" />
                Choose From Template
              </label>
              <div className="grid md:grid-cols-2 gap-3">
                {edgingTemplates.map((template) => (
                  <button
                    key={template}
                    onClick={() => handleTemplateSelect(template)}
                    className={`p-4 rounded-lg border-2 transition-all duration-200 hover:border-[#0b2d14] hover:bg-[#0b2d14]/5 text-left ${
                      formData.edgingTemplate === template
                        ? 'border-[#0b2d14] bg-[#0b2d14]/5'
                        : 'border-[#3d2817]/20'
                    }`}
                  >
                    <p className="text-[#3d2817]">{template}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Divider */}
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-[#3d2817]/20"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white text-[#3d2817]/60">OR</span>
              </div>
            </div>

            {/* Photo Upload for Custom */}
            <div>
              <label className="block text-[#3d2817] mb-4 flex items-center gap-2">
                <Upload size={18} className="text-[#0b2d14]" />
                Upload Photo for Custom Edging
              </label>
              <div className="border-2 border-dashed border-[#3d2817]/20 rounded-lg p-8 text-center hover:border-[#0b2d14] transition-colors">
                <input
                  type="file"
                  id="edging-photo"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="hidden"
                />
                <label
                  htmlFor="edging-photo"
                  className="cursor-pointer flex flex-col items-center gap-3"
                >
                  <Upload className="w-12 h-12 text-[#0b2d14]" strokeWidth={1.5} />
                  {selectedFile || formData.edgingPhotoName ? (
                    <div>
                      <p className="text-[#3d2817] font-medium">
                        {selectedFile?.name || formData.edgingPhotoName}
                      </p>
                      <p className="text-sm text-[#3d2817]/60 mt-1">Click to change photo</p>
                    </div>
                  ) : (
                    <div>
                      <p className="text-[#3d2817]">Click to upload a reference photo</p>
                      <p className="text-sm text-[#3d2817]/60 mt-1">
                        PNG, JPG up to 10MB
                      </p>
                    </div>
                  )}
                </label>
              </div>
              {(selectedFile || formData.edgingPhotoName) && (
                <button
                  onClick={handleCustomEdgingNext}
                  className="w-full mt-4 bg-[#0b2d14] text-[#efeeea] px-8 py-4 rounded hover:bg-[#0b2d14]/90 transition-colors duration-200"
                >
                  Continue with Custom Edging
                </button>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

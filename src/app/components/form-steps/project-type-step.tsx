import { FormData } from '../../pages/custom-form';
import { Sofa, Box, Watch, Gem, Frame, Moon, Table, Layers } from 'lucide-react';

interface ProjectTypeStepProps {
  formData: FormData;
  updateFormData: (data: Partial<FormData>) => void;
  onNext: () => void;
}

export function ProjectTypeStep({ formData, updateFormData, onNext }: ProjectTypeStepProps) {
  const projectTypes = [
    { id: 'table', label: 'Table', icon: Table },
    { id: 'desk', label: 'Desk', icon: Layers },
    { id: 'vanity', label: 'Vanity', icon: Sofa },
    { id: 'watch-box', label: 'Watch Box', icon: Watch },
    { id: 'jewelry-box', label: 'Jewelry Box', icon: Gem },
    { id: 'shadow-box', label: 'Shadow Box', icon: Frame },
    { id: 'nightstand', label: 'Nightstand', icon: Moon },
    { id: 'other', label: 'Other', icon: Box },
  ];

  const handleSelect = (typeId: string) => {
    updateFormData({ projectType: typeId });
    // Auto-advance after a short delay
    setTimeout(() => onNext(), 300);
  };

  return (
    <div className="bg-white rounded-lg p-8 shadow-sm">
      <div className="mb-8">
        <h2 className="text-2xl text-[#3d2817] mb-2">What would you like us to create?</h2>
        <p className="text-[#3d2817]/70">Select the type of piece you're interested in commissioning.</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {projectTypes.map((type) => (
          <button
            key={type.id}
            onClick={() => handleSelect(type.id)}
            className={`p-6 rounded-lg border-2 transition-all duration-200 hover:border-[#0b2d14] hover:bg-[#0b2d14]/5 ${
              formData.projectType === type.id
                ? 'border-[#0b2d14] bg-[#0b2d14]/5'
                : 'border-[#3d2817]/20'
            }`}
          >
            <type.icon className="w-8 h-8 text-[#0b2d14] mb-3 mx-auto" strokeWidth={1.5} />
            <p className="text-[#3d2817]">{type.label}</p>
          </button>
        ))}
      </div>
    </div>
  );
}
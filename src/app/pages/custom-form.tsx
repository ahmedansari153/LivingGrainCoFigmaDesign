import { useState } from 'react';
import { Header } from '../components/header';
import { Footer } from '../components/footer';
import { IntentStep, ContactInfo } from '../components/form-steps/intent-step';
import { ProjectTypeStep } from '../components/form-steps/project-type-step';
import { DetailsStep } from '../components/form-steps/details-step';
import { MaterialStep } from '../components/form-steps/material-step';
import { ContactStep } from '../components/form-steps/contact-step';
import { PreviewStep } from '../components/form-steps/preview-step';
import {
  WatchCapacityStep,
  WatchBoxShapeStep,
  WatchBoxLidStep,
  WatchBoxInlayStep,
  WatchCushionStep,
} from '../components/form-steps/watch-box-steps';
import {
  ShadowBoxDimensionsStep,
  ShadowBoxFaceStep,
  ShadowBoxShelvesStep,
  ShadowBoxBackingStep,
} from '../components/form-steps/shadow-box-steps';
import {
  JewelryBoxOrientationStep,
  JewelryBoxTopFaceStep,
  JewelryBoxInnerMaterialStep,
  JewelryBoxDrawerStep,
  JewelryBoxDoorFaceStep,
  JewelryBoxInteriorStep,
  JewelryBoxHardwareStep,
} from '../components/form-steps/jewelry-box-steps';
import {
  NightstandStyleStep,
  NightstandEdgingStep,
} from '../components/form-steps/nightstand-steps';
import {
  DeskShapeStep,
  DeskLeftLegDesignStep,
  DeskRightLegDesignStep,
  DeskLegDesignStep,
  DeskLeftSideLengthStep,
  DeskRightSideLengthStep,
  DeskLengthStep,
  DeskLeftSideDepthStep,
  DeskRightSideDepthStep,
  DeskHeightStep,
  DeskDepthStep,
} from '../components/form-steps/desk-steps';
import { ChevronLeft } from 'lucide-react';
import { motion } from 'motion/react';

export interface FormData {
  projectType: string;
  shape?: string;
  legDesign?: string;
  dimensions?: {
    length?: string;
    width?: string;
    height?: string;
  };
  material?: string;
  finish?: string;
  color?: string;
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
  // Watch box specific fields
  watchCapacity?: number;
  watchBoxShape?: string;
  watchBoxLid?: string;
  hasInlays?: boolean;
  inlayMaterial?: string;
  inlayType?: string;
  cushionMaterial?: string;
  customCushionMaterial?: string;
  // Shadow box specific fields
  shadowBoxDimensions?: {
    height?: string;
    width?: string;
  };
  shadowBoxFace?: string;
  hasShelves?: boolean;
  numberOfShelves?: number;
  backingMaterial?: string;
  // Jewelry box specific fields
  jewelryOrientation?: string;
  topFace?: string;
  innerMaterial?: string;
  customInnerMaterial?: string;
  drawerCount?: number;
  doorFace?: string;
  interiorOptions?: string;
  hardwareMaterial?: string;
  // Nightstand specific fields
  nightstandStyle?: string;
  hasEdging?: boolean;
  edgingTemplate?: string;
  edgingPhotoName?: string;
  // Desk specific fields
  deskShape?: string;
  leftLegDesign?: string;
  leftLegCustomIdea?: string;
  leftLegCustomFileName?: string;
  rightLegDesign?: string;
  rightLegCustomIdea?: string;
  rightLegCustomFileName?: string;
  deskLegDesign?: string;
  deskLegCustomIdea?: string;
  deskLegCustomFileName?: string;
  leftSideLength?: string;
  rightSideLength?: string;
  deskLength?: string;
  leftSideDepth?: string;
  rightSideDepth?: string;
  deskHeight?: string;
  deskDepth?: string;
}

export default function CustomFormPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [showContact, setShowContact] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    projectType: '',
    dimensions: {},
  });

  const isWatchBox = formData.projectType === 'watch-box';
  const isShadowBox = formData.projectType === 'shadow-box';
  const isJewelryBox = formData.projectType === 'jewelry-box';
  const isNightstand = formData.projectType === 'nightstand';
  const isDesk = formData.projectType === 'desk';
  const isHorizontalJewelry = isJewelryBox && formData.jewelryOrientation === 'horizontal';
  const isVerticalJewelry = isJewelryBox && formData.jewelryOrientation === 'vertical';
  const isLShapeDesk = isDesk && formData.deskShape === 'l-shape';
  const isRectangleLiveEdgeCornerDesk = isDesk && formData.deskShape && formData.deskShape !== 'l-shape';
  
  // Different flows have different number of steps
  let totalSteps = 6; // default for standard projects
  if (isWatchBox) totalSteps = 8;
  if (isShadowBox) totalSteps = 7;
  if (isHorizontalJewelry) totalSteps = 8;
  if (isVerticalJewelry) totalSteps = 10;
  if (isNightstand) totalSteps = 7;
  if (isLShapeDesk) totalSteps = 11; // Intent, Type, Shape, Left Leg, Right Leg, Length, Height, Depth, Material, Contact, Preview
  if (isRectangleLiveEdgeCornerDesk) totalSteps = 12; // Intent, Type, Shape, Leg Design, Left Length, Right Length, Left Depth, Right Depth, Height, Material, Contact, Preview

  const updateFormData = (data: Partial<FormData>) => {
    setFormData((prev) => ({ ...prev, ...data }));
  };

  const nextStep = () => {
    if (currentStep < totalSteps - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      if (currentStep === 1) {
        setShowContact(false);
      }
    }
  };

  const handleShowContact = () => {
    setShowContact(true);
  };

  const renderStep = () => {
    if (showContact) {
      return <ContactInfo />;
    }

    // Watch box specific flow
    if (isWatchBox) {
      switch (currentStep) {
        case 0:
          return <IntentStep formData={formData} updateFormData={updateFormData} onNext={nextStep} onShowContact={handleShowContact} />;
        case 1:
          return <ProjectTypeStep formData={formData} updateFormData={updateFormData} onNext={nextStep} />;
        case 2:
          return <WatchCapacityStep formData={formData} updateFormData={updateFormData} onNext={nextStep} />;
        case 3:
          return <WatchBoxShapeStep formData={formData} updateFormData={updateFormData} onNext={nextStep} />;
        case 4:
          return <WatchBoxLidStep formData={formData} updateFormData={updateFormData} onNext={nextStep} />;
        case 5:
          return <WatchBoxInlayStep formData={formData} updateFormData={updateFormData} onNext={nextStep} />;
        case 6:
          return <WatchCushionStep formData={formData} updateFormData={updateFormData} onNext={nextStep} />;
        case 7:
          return <ContactStep formData={formData} updateFormData={updateFormData} onNext={nextStep} />;
        default:
          return null;
      }
    }

    // Shadow box specific flow
    if (isShadowBox) {
      switch (currentStep) {
        case 0:
          return <IntentStep formData={formData} updateFormData={updateFormData} onNext={nextStep} onShowContact={handleShowContact} />;
        case 1:
          return <ProjectTypeStep formData={formData} updateFormData={updateFormData} onNext={nextStep} />;
        case 2:
          return <ShadowBoxDimensionsStep formData={formData} updateFormData={updateFormData} onNext={nextStep} />;
        case 3:
          return <ShadowBoxFaceStep formData={formData} updateFormData={updateFormData} onNext={nextStep} />;
        case 4:
          return <ShadowBoxShelvesStep formData={formData} updateFormData={updateFormData} onNext={nextStep} />;
        case 5:
          return <ShadowBoxBackingStep formData={formData} updateFormData={updateFormData} onNext={nextStep} />;
        case 6:
          return <ContactStep formData={formData} updateFormData={updateFormData} onNext={nextStep} />;
        default:
          return null;
      }
    }

    // Jewelry box specific flow
    if (isJewelryBox) {
      // Horizontal jewelry box flow
      if (isHorizontalJewelry) {
        switch (currentStep) {
          case 0:
            return <IntentStep formData={formData} updateFormData={updateFormData} onNext={nextStep} onShowContact={handleShowContact} />;
          case 1:
            return <ProjectTypeStep formData={formData} updateFormData={updateFormData} onNext={nextStep} />;
          case 2:
            return <JewelryBoxOrientationStep formData={formData} updateFormData={updateFormData} onNext={nextStep} />;
          case 3:
            return <JewelryBoxTopFaceStep formData={formData} updateFormData={updateFormData} onNext={nextStep} />;
          case 4:
            return <JewelryBoxInnerMaterialStep formData={formData} updateFormData={updateFormData} onNext={nextStep} />;
          case 5:
            return <MaterialStep formData={formData} updateFormData={updateFormData} onNext={nextStep} />;
          case 6:
            return <ContactStep formData={formData} updateFormData={updateFormData} onNext={nextStep} />;
          case 7:
            return <PreviewStep formData={formData} />;
          default:
            return null;
        }
      }
      
      // Vertical jewelry box flow
      if (isVerticalJewelry) {
        switch (currentStep) {
          case 0:
            return <IntentStep formData={formData} updateFormData={updateFormData} onNext={nextStep} onShowContact={handleShowContact} />;
          case 1:
            return <ProjectTypeStep formData={formData} updateFormData={updateFormData} onNext={nextStep} />;
          case 2:
            return <JewelryBoxOrientationStep formData={formData} updateFormData={updateFormData} onNext={nextStep} />;
          case 3:
            return <JewelryBoxDrawerStep formData={formData} updateFormData={updateFormData} onNext={nextStep} />;
          case 4:
            return <JewelryBoxDoorFaceStep formData={formData} updateFormData={updateFormData} onNext={nextStep} />;
          case 5:
            return <JewelryBoxInteriorStep formData={formData} updateFormData={updateFormData} onNext={nextStep} />;
          case 6:
            return <JewelryBoxHardwareStep formData={formData} updateFormData={updateFormData} onNext={nextStep} />;
          case 7:
            return <MaterialStep formData={formData} updateFormData={updateFormData} onNext={nextStep} />;
          case 8:
            return <ContactStep formData={formData} updateFormData={updateFormData} onNext={nextStep} />;
          case 9:
            return <PreviewStep formData={formData} />;
          default:
            return null;
        }
      }
      
      // Before orientation is selected, just show orientation step
      switch (currentStep) {
        case 0:
          return <IntentStep formData={formData} updateFormData={updateFormData} onNext={nextStep} onShowContact={handleShowContact} />;
        case 1:
          return <ProjectTypeStep formData={formData} updateFormData={updateFormData} onNext={nextStep} />;
        case 2:
          return <JewelryBoxOrientationStep formData={formData} updateFormData={updateFormData} onNext={nextStep} />;
        default:
          return null;
      }
    }

    // Nightstand specific flow
    if (isNightstand) {
      switch (currentStep) {
        case 0:
          return <IntentStep formData={formData} updateFormData={updateFormData} onNext={nextStep} onShowContact={handleShowContact} />;
        case 1:
          return <ProjectTypeStep formData={formData} updateFormData={updateFormData} onNext={nextStep} />;
        case 2:
          return <NightstandStyleStep formData={formData} updateFormData={updateFormData} onNext={nextStep} />;
        case 3:
          return <NightstandEdgingStep formData={formData} updateFormData={updateFormData} onNext={nextStep} />;
        case 4:
          return <MaterialStep formData={formData} updateFormData={updateFormData} onNext={nextStep} />;
        case 5:
          return <ContactStep formData={formData} updateFormData={updateFormData} onNext={nextStep} />;
        case 6:
          return <PreviewStep formData={formData} />;
        default:
          return null;
      }
    }

    // Desk specific flow
    if (isDesk) {
      // L-shape desk flow
      if (isLShapeDesk) {
        switch (currentStep) {
          case 0:
            return <IntentStep formData={formData} updateFormData={updateFormData} onNext={nextStep} onShowContact={handleShowContact} />;
          case 1:
            return <ProjectTypeStep formData={formData} updateFormData={updateFormData} onNext={nextStep} />;
          case 2:
            return <DeskShapeStep formData={formData} updateFormData={updateFormData} onNext={nextStep} />;
          case 3:
            return <DeskLeftLegDesignStep formData={formData} updateFormData={updateFormData} onNext={nextStep} />;
          case 4:
            return <DeskRightLegDesignStep formData={formData} updateFormData={updateFormData} onNext={nextStep} />;
          case 5:
            return <DeskLengthStep formData={formData} updateFormData={updateFormData} onNext={nextStep} />;
          case 6:
            return <DeskHeightStep formData={formData} updateFormData={updateFormData} onNext={nextStep} />;
          case 7:
            return <DeskDepthStep formData={formData} updateFormData={updateFormData} onNext={nextStep} />;
          case 8:
            return <MaterialStep formData={formData} updateFormData={updateFormData} onNext={nextStep} />;
          case 9:
            return <ContactStep formData={formData} updateFormData={updateFormData} onNext={nextStep} />;
          case 10:
            return <PreviewStep formData={formData} />;
          default:
            return null;
        }
      }
      
      // Rectangle live edge corner desk flow
      if (isRectangleLiveEdgeCornerDesk) {
        switch (currentStep) {
          case 0:
            return <IntentStep formData={formData} updateFormData={updateFormData} onNext={nextStep} onShowContact={handleShowContact} />;
          case 1:
            return <ProjectTypeStep formData={formData} updateFormData={updateFormData} onNext={nextStep} />;
          case 2:
            return <DeskShapeStep formData={formData} updateFormData={updateFormData} onNext={nextStep} />;
          case 3:
            return <DeskLegDesignStep formData={formData} updateFormData={updateFormData} onNext={nextStep} />;
          case 4:
            return <DeskLeftSideLengthStep formData={formData} updateFormData={updateFormData} onNext={nextStep} />;
          case 5:
            return <DeskRightSideLengthStep formData={formData} updateFormData={updateFormData} onNext={nextStep} />;
          case 6:
            return <DeskLeftSideDepthStep formData={formData} updateFormData={updateFormData} onNext={nextStep} />;
          case 7:
            return <DeskRightSideDepthStep formData={formData} updateFormData={updateFormData} onNext={nextStep} />;
          case 8:
            return <DeskHeightStep formData={formData} updateFormData={updateFormData} onNext={nextStep} />;
          case 9:
            return <MaterialStep formData={formData} updateFormData={updateFormData} onNext={nextStep} />;
          case 10:
            return <ContactStep formData={formData} updateFormData={updateFormData} onNext={nextStep} />;
          case 11:
            return <PreviewStep formData={formData} />;
          default:
            return null;
        }
      }
      
      // Before shape is selected, just show shape step
      switch (currentStep) {
        case 0:
          return <IntentStep formData={formData} updateFormData={updateFormData} onNext={nextStep} onShowContact={handleShowContact} />;
        case 1:
          return <ProjectTypeStep formData={formData} updateFormData={updateFormData} onNext={nextStep} />;
        case 2:
          return <DeskShapeStep formData={formData} updateFormData={updateFormData} onNext={nextStep} />;
        default:
          return null;
      }
    }

    // Standard flow for other project types
    switch (currentStep) {
      case 0:
        return <IntentStep formData={formData} updateFormData={updateFormData} onNext={nextStep} onShowContact={handleShowContact} />;
      case 1:
        return <ProjectTypeStep formData={formData} updateFormData={updateFormData} onNext={nextStep} />;
      case 2:
        return <DetailsStep formData={formData} updateFormData={updateFormData} onNext={nextStep} />;
      case 3:
        return <MaterialStep formData={formData} updateFormData={updateFormData} onNext={nextStep} />;
      case 4:
        return <ContactStep formData={formData} updateFormData={updateFormData} onNext={nextStep} />;
      case 5:
        return <PreviewStep formData={formData} />;
      default:
        return null;
    }
  };

  const getProgressStep = () => {
    if (showContact) return 1;
    return currentStep;
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 bg-[#efeeea] py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Progress Bar */}
          {!showContact && (
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <h1 className="text-3xl text-[#3d2817]">Contact Living Grain Co.</h1>
                <span className="text-[#3d2817]/70">
                  Step {getProgressStep() + 1} of {totalSteps}
                </span>
              </div>
              <div className="w-full bg-white/50 rounded-full h-2">
                <motion.div
                  className="bg-[#0b2d14] h-2 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${((getProgressStep() + 1) / totalSteps) * 100}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </div>
          )}

          {showContact && (
            <div className="mb-8">
              <h1 className="text-3xl text-[#3d2817] mb-4">Contact Information</h1>
            </div>
          )}

          {/* Back Button */}
          {(currentStep > 0 || showContact) && currentStep < totalSteps - 1 && (
            <button
              onClick={prevStep}
              className="flex items-center gap-2 text-[#3d2817] hover:text-[#0b2d14] mb-6 transition-colors"
            >
              <ChevronLeft size={20} />
              Back
            </button>
          )}

          {/* Form Step Content */}
          <motion.div
            key={showContact ? 'contact' : currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            {renderStep()}
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
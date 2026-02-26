import { useEffect, useRef, useState } from 'react';
import { FormData } from '../../pages/custom-form';
import { motion } from 'motion/react';
import { Check, Calendar } from 'lucide-react';
import modelImage from 'figma:asset/453bb96165811ede906e3dcd5c8c8c22468b9188.png';

interface PreviewStepProps {
  formData: FormData;
}

export function PreviewStep({ formData }: PreviewStepProps) {
  const [showCalendly, setShowCalendly] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    canvas.width = 800;
    canvas.height = 600;

    // Load and animate the 3D model image
    const img = new Image();
    img.src = modelImage;
    
    img.onload = () => {
      let scale = 0;
      let rotation = 0;
      let opacity = 0;

      const animate = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Animate scale, rotation, and opacity
        scale = Math.min(scale + 0.02, 1);
        rotation += 0.01;
        opacity = Math.min(opacity + 0.03, 1);

        // Save context
        ctx.save();
        
        // Set global opacity
        ctx.globalAlpha = opacity;
        
        // Move to center
        ctx.translate(canvas.width / 2, canvas.height / 2);
        
        // Rotate
        ctx.rotate(rotation * 0.5);
        
        // Scale
        const finalScale = scale * 0.8;
        ctx.scale(finalScale, finalScale);
        
        // Draw image centered
        ctx.drawImage(img, -img.width / 2, -img.height / 2);
        
        // Restore context
        ctx.restore();

        // Continue animation until fully displayed
        if (scale < 1 || opacity < 1) {
          requestAnimationFrame(animate);
        }
      };

      animate();
    };
  }, []);

  const handleBookConsultation = () => {
    setShowCalendly(true);
  };

  const getSummary = () => {
    const items: string[] = [];
    
    if (formData.projectType) {
      items.push(`Type: ${formData.projectType.charAt(0).toUpperCase() + formData.projectType.slice(1).replace('-', ' ')}`);
    }
    
    // Watch box specific fields
    if (formData.projectType === 'watch-box') {
      if (formData.watchCapacity) {
        items.push(`Capacity: ${formData.watchCapacity} watches`);
      }
      if (formData.watchBoxShape) {
        items.push(`Shape: ${formData.watchBoxShape.charAt(0).toUpperCase() + formData.watchBoxShape.slice(1)}`);
      }
      if (formData.watchBoxLid) {
        items.push(`Lid: ${formData.watchBoxLid.charAt(0).toUpperCase() + formData.watchBoxLid.slice(1)}`);
      }
      if (formData.hasInlays !== undefined) {
        if (formData.hasInlays && formData.inlayMaterial && formData.inlayType) {
          items.push(`Inlays: ${formData.inlayMaterial} - ${formData.inlayType}`);
        } else {
          items.push(`Inlays: None`);
        }
      }
      if (formData.cushionMaterial) {
        const cushion = formData.cushionMaterial === 'custom' && formData.customCushionMaterial
          ? formData.customCushionMaterial
          : formData.cushionMaterial.charAt(0).toUpperCase() + formData.cushionMaterial.slice(1);
        items.push(`Cushion: ${cushion}`);
      }
    } 
    // Shadow box specific fields
    else if (formData.projectType === 'shadow-box') {
      if (formData.shadowBoxDimensions?.height && formData.shadowBoxDimensions?.width) {
        items.push(`Dimensions: ${formData.shadowBoxDimensions.height}" H × ${formData.shadowBoxDimensions.width}" W`);
      }
      if (formData.shadowBoxFace) {
        items.push(`Face: ${formData.shadowBoxFace === 'glass' ? 'Glass Door' : 'Open Face'}`);
      }
      if (formData.hasShelves !== undefined) {
        if (formData.hasShelves && formData.numberOfShelves) {
          items.push(`Shelves: ${formData.numberOfShelves} shelves`);
        } else {
          items.push(`Shelves: None`);
        }
      }
      if (formData.backingMaterial) {
        const backing = formData.backingMaterial.split('-').map(word => 
          word.charAt(0).toUpperCase() + word.slice(1)
        ).join(' ');
        items.push(`Backing: ${backing}`);
      }
    } 
    // Jewelry box specific fields
    else if (formData.projectType === 'jewelry-box') {
      if (formData.jewelryOrientation) {
        items.push(`Style: ${formData.jewelryOrientation.charAt(0).toUpperCase() + formData.jewelryOrientation.slice(1)}`);
      }
      
      // Horizontal jewelry box details
      if (formData.jewelryOrientation === 'horizontal') {
        if (formData.topFace) {
          const topFaceLabel = formData.topFace === 'glass' ? 'Glass Top' : 'Solid w/ Mirror Inlaid';
          items.push(`Lid: ${topFaceLabel}`);
        }
        if (formData.innerMaterial) {
          const innerMat = formData.innerMaterial === 'custom' && formData.customInnerMaterial
            ? formData.customInnerMaterial
            : formData.innerMaterial.charAt(0).toUpperCase() + formData.innerMaterial.slice(1);
          items.push(`Interior: ${innerMat}`);
        }
      }
      
      // Vertical jewelry box details
      if (formData.jewelryOrientation === 'vertical') {
        if (formData.drawerCount) {
          items.push(`Drawers: ${formData.drawerCount}`);
        }
        if (formData.doorFace) {
          items.push(`Door: ${formData.doorFace === 'glass' ? 'Glass Face' : 'Solid Face'}`);
        }
        if (formData.interiorOptions) {
          const interiorLabel = formData.interiorOptions === 'necklace-hooks' ? 'Necklace Hooks' :
                               formData.interiorOptions === 'shelves' ? 'Shelves' : 'Hooks & Shelves';
          items.push(`Interior: ${interiorLabel}`);
        }
        if (formData.hardwareMaterial) {
          items.push(`Hardware: ${formData.hardwareMaterial}`);
        }
      }
      
      // Material/Finish/Color (common to both orientations)
      if (formData.material) {
        items.push(`Wood: ${formData.material}`);
      }
      if (formData.finish) {
        items.push(`Finish: ${formData.finish}`);
      }
      if (formData.color) {
        items.push(`Color: ${formData.color}`);
      }
    } 
    // Nightstand specific fields
    else if (formData.projectType === 'nightstand') {
      if (formData.nightstandStyle) {
        const styleLabel = formData.nightstandStyle === '1-drawer-open-solid' ? '1 Drawer-Open Solid' :
                          formData.nightstandStyle === '1-door-cabinet' ? '1 Door-Cabinet' :
                          'Drawers';
        items.push(`Style: ${styleLabel}`);
      }
      if (formData.hasEdging !== undefined) {
        if (formData.hasEdging) {
          if (formData.edgingTemplate) {
            items.push(`Edging: ${formData.edgingTemplate}`);
          } else if (formData.edgingPhotoName) {
            items.push(`Edging: Custom (photo provided)`);
          }
        } else {
          items.push(`Edging: None`);
        }
      }
      if (formData.material) {
        items.push(`Wood: ${formData.material}`);
      }
      if (formData.finish) {
        items.push(`Finish: ${formData.finish}`);
      }
      if (formData.color) {
        items.push(`Color: ${formData.color}`);
      }
    } 
    // Standard project fields
    else {
      if (formData.shape) {
        items.push(`Shape: ${formData.shape}`);
      }
      if (formData.legDesign) {
        items.push(`Legs: ${formData.legDesign}`);
      }
      if (formData.dimensions?.length || formData.dimensions?.width || formData.dimensions?.height) {
        const dims = [];
        if (formData.dimensions.length) dims.push(`${formData.dimensions.length}"`);
        if (formData.dimensions.width) dims.push(`${formData.dimensions.width}"`);
        if (formData.dimensions.height) dims.push(`${formData.dimensions.height}"`);
        items.push(`Dimensions: ${dims.join(' × ')}`);
      }
      if (formData.material) {
        items.push(`Wood: ${formData.material}`);
      }
      if (formData.finish) {
        items.push(`Finish: ${formData.finish}`);
      }
    }
    
    return items;
  };

  if (showCalendly) {
    return (
      <div className="bg-white rounded-lg p-8 shadow-sm">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-[#0b2d14] rounded-full mb-4">
            <Check className="w-8 h-8 text-[#efeeea]" />
          </div>
          <h2 className="text-2xl text-[#3d2817] mb-2">Almost There!</h2>
          <p className="text-[#3d2817]/70">
            Book a consultation to discuss your custom piece with Seth.
          </p>
        </div>

        {/* Calendly Embed Placeholder */}
        <div className="bg-[#efeeea] rounded-lg p-12 text-center min-h-[600px] flex flex-col items-center justify-center">
          <Calendar className="w-16 h-16 text-[#0b2d14] mb-4" />
          <h3 className="text-xl text-[#3d2817] mb-4">Schedule Your Consultation</h3>
          <p className="text-[#3d2817]/70 mb-6 max-w-md">
            In a real implementation, the Calendly widget would be embedded here using their inline widget API.
          </p>
          <div className="space-y-2 text-sm text-[#3d2817]/60">
            <p>URL: https://calendly.com/livinggrainco/30min</p>
            <p>Duration: 30 minutes</p>
          </div>
        </div>

        <div className="mt-6 text-center text-sm text-[#3d2817]/60">
          <p>Your form details have been saved and will be referenced during the consultation.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg p-8 shadow-sm">
      <div className="text-center mb-8">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', duration: 0.6 }}
          className="inline-flex items-center justify-center w-16 h-16 bg-[#0b2d14] rounded-full mb-4"
        >
          <Check className="w-8 h-8 text-[#efeeea]" />
        </motion.div>
        <h2 className="text-2xl text-[#3d2817] mb-2">Your Custom Piece Awaits</h2>
        <p className="text-[#3d2817]/70">
          Here's a preview of the craftsmanship that goes into each Living Grain Co. creation.
        </p>
      </div>

      {/* 3D Model Canvas */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="mb-8 bg-black rounded-lg overflow-hidden"
      >
        <canvas
          ref={canvasRef}
          className="w-full h-auto"
          style={{ maxHeight: '600px' }}
        />
      </motion.div>

      {/* Summary */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="mb-8 p-6 bg-[#efeeea] rounded-lg"
      >
        <h3 className="text-lg text-[#3d2817] mb-4">Your Selections</h3>
        <ul className="space-y-2">
          {getSummary().map((item, index) => (
            <li key={index} className="flex items-start gap-2 text-[#3d2817]/80">
              <span className="text-[#0b2d14]">•</span>
              {item}
            </li>
          ))}
        </ul>
      </motion.div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.6 }}
      >
        <button
          onClick={handleBookConsultation}
          className="w-full bg-[#0b2d14] text-[#efeeea] px-8 py-4 rounded hover:bg-[#0b2d14]/90 transition-colors duration-200 flex items-center justify-center gap-2"
        >
          <Calendar size={20} />
          Book Your Consultation
        </button>
        <p className="text-center text-sm text-[#3d2817]/60 mt-4">
          Typical build time: 8-12 weeks | Free consultation & quote
        </p>
      </motion.div>
    </div>
  );
}
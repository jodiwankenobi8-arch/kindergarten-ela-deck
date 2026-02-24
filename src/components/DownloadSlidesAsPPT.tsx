import { useState } from 'react';
import { Presentation } from 'lucide-react';
import html2canvas from 'html2canvas';
import PptxGenJS from 'pptxgenjs';

interface DownloadSlidesAsPPTProps {
  totalSlides: number;
  currentSlide: number;
  setCurrentSlide: (slide: number) => void;
  slideTitles: string[];
  inline?: boolean;
}

export function DownloadSlidesAsPPT({ 
  totalSlides, 
  currentSlide, 
  setCurrentSlide,
  slideTitles,
  inline = false
}: DownloadSlidesAsPPTProps) {
  const [isCapturing, setIsCapturing] = useState(false);
  const [progress, setProgress] = useState(0);

  const captureSlide = async (slideIndex: number): Promise<string> => {
    setCurrentSlide(slideIndex);
    
    // Wait for slide to render
    await new Promise(resolve => setTimeout(resolve, 500));
    
    const slideContainer = document.querySelector('[data-slide-container]') as HTMLElement;
    if (!slideContainer) {
      throw new Error('Slide container not found');
    }

    const canvas = await html2canvas(slideContainer, {
      backgroundColor: '#F4E9DA',
      scale: 2,
      logging: false,
      useCORS: true,
      allowTaint: true,
    });

    // Convert canvas to base64 image data
    return canvas.toDataURL('image/png');
  };

  const handleDownloadPPT = async () => {
    setIsCapturing(true);
    setProgress(0);

    const startingSlide = currentSlide;

    try {
      // Create new PowerPoint presentation
      const pptx = new PptxGenJS();
      
      // Set presentation properties
      pptx.author = 'Kindergarten ELA';
      pptx.company = 'Education';
      pptx.subject = 'UFLI Foundations - Day 1 Lesson';
      pptx.title = 'Kindergarten ELA Interactive Lesson Deck';
      
      // Define slide layout (16:9 aspect ratio)
      pptx.layout = 'LAYOUT_16x9';

      // Capture and add each slide
      for (let i = 0; i < totalSlides; i++) {
        const imageData = await captureSlide(i);
        
        // Create new slide
        const slide = pptx.addSlide();
        
        // Add captured image to fill the entire slide
        slide.addImage({
          data: imageData,
          x: 0,
          y: 0,
          w: '100%',
          h: '100%'
        });

        // Add slide title as a note (visible in presenter notes)
        slide.addNotes(`Slide ${i + 1}/${totalSlides}: ${slideTitles[i]}`);

        setProgress(Math.round(((i + 1) / totalSlides) * 100));
      }

      // Save the PowerPoint file
      await pptx.writeFile({ fileName: 'kindergarten-ela-lesson-deck.pptx' });

      // Return to starting slide
      setCurrentSlide(startingSlide);
    } catch (error) {
      console.error('Error creating PowerPoint:', error);
      alert('Failed to create PowerPoint. Please try again.');
    } finally {
      setIsCapturing(false);
      setProgress(0);
    }
  };

  if (inline) {
    return (
      <button
        onClick={handleDownloadPPT}
        disabled={isCapturing}
        className="w-full flex items-center gap-2 px-4 py-3 rounded-lg transition-all hover:scale-105 disabled:opacity-50"
        style={{
          backgroundColor: 'var(--ocean-blue)',
          color: 'white',
        }}
      >
        <Presentation className="w-5 h-5" />
        <div className="flex-1 text-left">
          <div className="font-semibold">
            {isCapturing ? `Creating PowerPoint... ${progress}%` : 'All Slides as PowerPoint'}
          </div>
          <div className="text-xs opacity-90">{totalSlides} slides in PPTX format</div>
        </div>
      </button>
    );
  }

  return (
    <button
      onClick={handleDownloadPPT}
      disabled={isCapturing}
      className="p-3 rounded-full shadow-lg transition-all hover:scale-105 disabled:opacity-50"
      style={{
        backgroundColor: 'var(--ocean-blue)',
        color: 'white',
      }}
      title="Download all slides as PowerPoint"
    >
      <Presentation className="w-6 h-6" />
    </button>
  );
}

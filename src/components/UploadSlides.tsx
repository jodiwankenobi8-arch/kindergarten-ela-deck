import { useState } from 'react';
import { FileText, Presentation, Image, Download } from 'lucide-react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import PptxGenJS from 'pptxgenjs';
import JSZip from 'jszip';

/**
 * UploadSlides Component - Complete Download/Export Functionality
 * 
 * This component provides comprehensive slide export capabilities:
 * - PDF Export: All slides as a single PDF document
 * - PowerPoint Export: Editable PPTX presentation
 * - Images Export: ZIP file with high-quality PNG images
 */

interface UploadSlidesProps {
  totalSlides: number;
  currentSlide: number;
  setCurrentSlide: (slide: number) => void;
  slideTitles: string[];
}

export function UploadSlides({ 
  totalSlides, 
  currentSlide, 
  setCurrentSlide,
  slideTitles
}: UploadSlidesProps) {
  const [isCapturing, setIsCapturing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [exportType, setExportType] = useState<'pdf' | 'ppt' | 'images' | null>(null);

  /**
   * Captures a single slide as an HTML canvas
   */
  const captureSlideAsCanvas = async (slideIndex: number): Promise<HTMLCanvasElement> => {
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

    return canvas;
  };

  /**
   * Captures a single slide as a base64 image string
   */
  const captureSlideAsImage = async (slideIndex: number): Promise<string> => {
    const canvas = await captureSlideAsCanvas(slideIndex);
    return canvas.toDataURL('image/png');
  };

  /**
   * Captures a single slide as a Blob
   */
  const captureSlideAsBlob = async (slideIndex: number): Promise<Blob | null> => {
    try {
      const canvas = await captureSlideAsCanvas(slideIndex);
      
      return new Promise((resolve) => {
        canvas.toBlob((blob) => {
          resolve(blob);
        }, 'image/png');
      });
    } catch (error) {
      console.error(`Error capturing slide ${slideIndex}:`, error);
      return null;
    }
  };

  /**
   * Export all slides as PDF
   */
  const exportAsPDF = async () => {
    setIsCapturing(true);
    setExportType('pdf');
    setProgress(0);

    const startingSlide = currentSlide;

    try {
      // Create PDF in landscape orientation (16:9 aspect ratio)
      const pdf = new jsPDF({
        orientation: 'landscape',
        unit: 'mm',
        format: 'a4'
      });

      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();

      for (let i = 0; i < totalSlides; i++) {
        const canvas = await captureSlideAsCanvas(i);
        
        // Convert canvas to image data
        const imgData = canvas.toDataURL('image/jpeg', 0.95);
        
        // Add new page if not first slide
        if (i > 0) {
          pdf.addPage();
        }

        // Calculate dimensions to fit page while maintaining aspect ratio
        const imgWidth = canvas.width;
        const imgHeight = canvas.height;
        const ratio = Math.min(pageWidth / imgWidth, pageHeight / imgHeight);
        
        const scaledWidth = imgWidth * ratio;
        const scaledHeight = imgHeight * ratio;
        
        // Center the image on the page
        const x = (pageWidth - scaledWidth) / 2;
        const y = (pageHeight - scaledHeight) / 2;

        // Add image to PDF
        pdf.addImage(imgData, 'JPEG', x, y, scaledWidth, scaledHeight);

        // Add slide number and title as footer
        pdf.setFontSize(8);
        pdf.setTextColor(30, 58, 95); // Deep navy color
        const footerText = `Slide ${i + 1}/${totalSlides}: ${slideTitles[i]}`;
        pdf.text(footerText, pageWidth / 2, pageHeight - 5, { align: 'center' });

        setProgress(Math.round(((i + 1) / totalSlides) * 100));
      }

      // Save the PDF
      pdf.save('kindergarten-ela-lesson-deck.pdf');

      // Return to starting slide
      setCurrentSlide(startingSlide);
      
      alert('✅ PDF exported successfully!');
    } catch (error) {
      console.error('Error creating PDF:', error);
      alert('❌ Failed to create PDF. Please try again.');
    } finally {
      setIsCapturing(false);
      setExportType(null);
      setProgress(0);
    }
  };

  /**
   * Export all slides as PowerPoint
   */
  const exportAsPowerPoint = async () => {
    setIsCapturing(true);
    setExportType('ppt');
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
        const imageData = await captureSlideAsImage(i);
        
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
      
      alert('✅ PowerPoint exported successfully!');
    } catch (error) {
      console.error('Error creating PowerPoint:', error);
      alert('❌ Failed to create PowerPoint. Please try again.');
    } finally {
      setIsCapturing(false);
      setExportType(null);
      setProgress(0);
    }
  };

  /**
   * Export all slides as images in a ZIP file
   */
  const exportAsImages = async () => {
    setIsCapturing(true);
    setExportType('images');
    setProgress(0);

    const originalSlide = currentSlide;

    try {
      const zip = new JSZip();
      const slidesFolder = zip.folder('kindergarten-ela-slides');

      // Iterate through all slides
      for (let i = 0; i < totalSlides; i++) {
        const blob = await captureSlideAsBlob(i);
        
        if (blob && slidesFolder) {
          // Clean the slide title for filename
          const slideTitle = slideTitles[i] || `Slide ${i + 1}`;
          const cleanTitle = slideTitle
            .replace(/[^a-z0-9]/gi, '_')
            .replace(/_+/g, '_')
            .substring(0, 50);
          
          const fileName = `slide_${String(i + 1).padStart(3, '0')}_${cleanTitle}.png`;
          slidesFolder.file(fileName, blob);
        }

        // Update progress
        setProgress(Math.round(((i + 1) / totalSlides) * 100));
      }

      // Add a README file to the zip
      const readmeContent = `# Kindergarten ELA Lesson Slides

This ZIP file contains all ${totalSlides} slides from your kindergarten ELA lesson deck.

## Slide Organization
- Slides are numbered sequentially: slide_001 through slide_${String(totalSlides).padStart(3, '0')}
- Each filename includes the slide title for easy identification
- Images are high-quality PNG format (1920x1080)

## Lesson Sections
1. Introduction & Songs (Slides 1-7)
2. UFLI Phonics Lesson 54 Day 1 (Slides 8-68)
3. Sight Words (Slides 69-77)
4. Savvas Reading (Slides 78-92)
5. Celebration (Slides 93-95)

## Usage
- Print for handouts or teacher reference
- Share with administrators for review
- Create backup copies for offline use
- Import into PowerPoint or Google Slides
- Use for lesson planning documentation

## Technical Details
- Total Slides: ${totalSlides}
- Resolution: 1920x1080 (Full HD)
- Format: PNG
- Generated: ${new Date().toLocaleDateString()}

---
Beach-themed Kindergarten ELA Interactive Lesson Deck
UFLI Foundations • Science of Reading Aligned
`;

      zip.file('README.txt', readmeContent);

      // Generate the zip file
      const zipBlob = await zip.generateAsync({ 
        type: 'blob',
        compression: 'DEFLATE',
        compressionOptions: { level: 6 }
      });

      // Download the zip file
      const url = URL.createObjectURL(zipBlob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `kindergarten-ela-slides-${new Date().toISOString().split('T')[0]}.zip`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);

      // Return to original slide
      setCurrentSlide(originalSlide);
      
      alert(`✅ Successfully exported ${totalSlides} slides!`);
    } catch (error) {
      console.error('Error creating slide images:', error);
      alert('❌ Error creating slide images. Please try again.');
    } finally {
      setIsCapturing(false);
      setExportType(null);
      setProgress(0);
    }
  };

  return (
    <div className="space-y-3">
      {/* PDF Export Button */}
      <button
        onClick={exportAsPDF}
        disabled={isCapturing}
        className="w-full flex items-center gap-2 px-4 py-3 rounded-lg transition-all hover:scale-105 disabled:opacity-50"
        style={{
          backgroundColor: 'var(--sunset)',
          color: 'white',
        }}
      >
        <FileText className="w-5 h-5" />
        <div className="flex-1 text-left">
          <div className="font-semibold">
            {isCapturing && exportType === 'pdf' 
              ? `Creating PDF... ${progress}%` 
              : 'All Slides as PDF'}
          </div>
          <div className="text-xs opacity-90">{totalSlides} slides in one document</div>
        </div>
      </button>

      {/* PowerPoint Export Button */}
      <button
        onClick={exportAsPowerPoint}
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
            {isCapturing && exportType === 'ppt' 
              ? `Creating PowerPoint... ${progress}%` 
              : 'All Slides as PowerPoint'}
          </div>
          <div className="text-xs opacity-90">{totalSlides} slides in PPTX format</div>
        </div>
      </button>

      {/* Images Export Button */}
      <button
        onClick={exportAsImages}
        disabled={isCapturing}
        className="w-full flex items-center gap-2 px-4 py-3 rounded-lg transition-all hover:scale-105 disabled:opacity-50"
        style={{
          backgroundColor: 'var(--coral)',
          color: 'white',
        }}
      >
        <Image className="w-5 h-5" />
        <div className="flex-1 text-left">
          <div className="font-semibold">
            {isCapturing && exportType === 'images' 
              ? `Capturing... ${progress}%` 
              : 'All Slides as Images'}
          </div>
          <div className="text-xs opacity-90">ZIP file with {totalSlides} PNG images</div>
        </div>
      </button>
    </div>
  );
}

import { useState } from 'react';
import { FileText } from 'lucide-react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

interface DownloadSlidesAsPDFProps {
  totalSlides: number;
  currentSlide: number;
  setCurrentSlide: (slide: number) => void;
  slideTitles: string[];
  inline?: boolean;
}

export function DownloadSlidesAsPDF({ 
  totalSlides, 
  currentSlide, 
  setCurrentSlide,
  slideTitles,
  inline = false
}: DownloadSlidesAsPDFProps) {
  const [isCapturing, setIsCapturing] = useState(false);
  const [progress, setProgress] = useState(0);

  const captureSlide = async (slideIndex: number): Promise<HTMLCanvasElement> => {
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

  const handleDownloadPDF = async () => {
    setIsCapturing(true);
    setProgress(0);

    const startingSlide = currentSlide;

    try {
      // Create PDF in landscape orientation (16:9 aspect ratio)
      // Using A4 landscape: 297mm x 210mm
      const pdf = new jsPDF({
        orientation: 'landscape',
        unit: 'mm',
        format: 'a4'
      });

      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();

      for (let i = 0; i < totalSlides; i++) {
        const canvas = await captureSlide(i);
        
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
    } catch (error) {
      console.error('Error creating PDF:', error);
      alert('Failed to create PDF. Please try again.');
    } finally {
      setIsCapturing(false);
      setProgress(0);
    }
  };

  if (inline) {
    return (
      <button
        onClick={handleDownloadPDF}
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
            {isCapturing ? `Creating PDF... ${progress}%` : 'All Slides as PDF'}
          </div>
          <div className="text-xs opacity-90">{totalSlides} slides in one document</div>
        </div>
      </button>
    );
  }

  return (
    <button
      onClick={handleDownloadPDF}
      disabled={isCapturing}
      className="p-3 rounded-full shadow-lg transition-all hover:scale-105 disabled:opacity-50"
      style={{
        backgroundColor: 'var(--sunset)',
        color: 'white',
      }}
      title="Download all slides as PDF"
    >
      <FileText className="w-6 h-6" />
    </button>
  );
}
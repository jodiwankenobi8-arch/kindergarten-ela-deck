import { useState } from 'react';
import { Image, Download } from 'lucide-react';
import html2canvas from 'html2canvas';
import JSZip from 'jszip';

interface DownloadSlidesAsImagesProps {
  totalSlides: number;
  currentSlide: number;
  setCurrentSlide: (slide: number) => void;
  slideTitles: string[];
  inline?: boolean;
}

export function DownloadSlidesAsImages({ 
  totalSlides, 
  currentSlide, 
  setCurrentSlide,
  slideTitles,
  inline = false
}: DownloadSlidesAsImagesProps) {
  const [isCapturing, setIsCapturing] = useState(false);
  const [progress, setProgress] = useState(0);

  const captureSlide = async (slideNumber: number): Promise<Blob | null> => {
    try {
      // Find the slide container element
      const slideElement = document.querySelector('[data-slide-container]') as HTMLElement;
      
      if (!slideElement) {
        console.error('Slide container not found');
        return null;
      }

      // Capture the slide as canvas
      const canvas = await html2canvas(slideElement, {
        backgroundColor: '#F5E6D3',
        scale: 2, // Higher quality
        logging: false,
        useCORS: true,
        allowTaint: true,
        windowWidth: 1920,
        windowHeight: 1080,
      });

      // Convert canvas to blob
      return new Promise((resolve) => {
        canvas.toBlob((blob) => {
          resolve(blob);
        }, 'image/png');
      });
    } catch (error) {
      console.error(`Error capturing slide ${slideNumber}:`, error);
      return null;
    }
  };

  const handleDownloadAllSlides = async () => {
    setIsCapturing(true);
    setProgress(0);

    try {
      const zip = new JSZip();
      const originalSlide = currentSlide;

      // Create a folder in the zip for the slides
      const slidesFolder = zip.folder('kindergarten-ela-slides');

      // Iterate through all slides
      for (let i = 0; i < totalSlides; i++) {
        // Navigate to the slide
        setCurrentSlide(i);
        
        // Wait for slide to render
        await new Promise(resolve => setTimeout(resolve, 800));

        // Capture the slide
        const blob = await captureSlide(i);
        
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
      
      // Success message
      alert(`✅ Successfully exported ${totalSlides} slides!`);
    } catch (error) {
      console.error('Error creating slide images:', error);
      alert('❌ Error creating slide images. Please try again.');
    } finally {
      setIsCapturing(false);
      setProgress(0);
    }
  };

  return (
    <button
      onClick={handleDownloadAllSlides}
      disabled={isCapturing}
      className={inline
        ? "w-full flex items-center justify-center gap-2 p-3 rounded-lg transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
        : "fixed top-4 right-60 z-50 flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-opacity-90 transition-all shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
      }
      style={{ 
        backgroundColor: isCapturing ? '#999' : (inline ? 'var(--coral)' : 'var(--coral)'),
        color: 'white'
      }}
      title="Download all slides as PNG images in a ZIP file"
    >
      {isCapturing ? (
        <>
          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
          <span className="font-medium">
            Capturing... {progress}%
          </span>
        </>
      ) : (
        <>
          <Image className="w-5 h-5" />
          <Download className="w-4 h-4 -ml-1" />
          <span className="font-medium">
            {inline ? 'All Slides as Images' : 'Download All Slides as Images'}
          </span>
        </>
      )}
    </button>
  );
}
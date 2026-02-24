import { useState } from 'react';
import { Download, FileText, Image, File, X, Presentation } from 'lucide-react';
import { DownloadProject } from './DownloadProject';
import { DownloadSlidesAsImages } from './DownloadSlidesAsImages';
import { DownloadSlidesAsPDF } from './DownloadSlidesAsPDF';
import { DownloadSlidesAsPPT } from './DownloadSlidesAsPPT';

interface DownloadMenuProps {
  totalSlides: number;
  currentSlide: number;
  setCurrentSlide: (slide: number) => void;
  slideTitles: string[];
}

export function DownloadMenu({ 
  totalSlides, 
  currentSlide, 
  setCurrentSlide,
  slideTitles 
}: DownloadMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Download Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-3 rounded-full shadow-lg transition-all hover:scale-105"
        style={{
          backgroundColor: isOpen ? 'var(--coral-accent)' : 'var(--sunset)',
          color: 'white'
        }}
        title="Download Options"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Download className="w-6 h-6" />}
      </button>

      {/* Download Options Panel */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/20 z-30"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Menu Panel */}
          <div 
            className="fixed top-20 left-6 w-96 p-6 rounded-2xl shadow-2xl z-40"
            style={{ backgroundColor: 'white', border: '3px solid var(--sunset)' }}
          >
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2" style={{ color: 'var(--deep-navy)' }}>
              <Download className="w-6 h-6" style={{ color: 'var(--sunset)' }} />
              Download Options
            </h3>
            
            <div className="space-y-3">
              {/* PDF Download */}
              <div onClick={() => setIsOpen(false)}>
                <DownloadSlidesAsPDF 
                  totalSlides={totalSlides}
                  currentSlide={currentSlide}
                  setCurrentSlide={setCurrentSlide}
                  slideTitles={slideTitles}
                  inline={true}
                />
              </div>

              {/* PowerPoint Download */}
              <div onClick={() => setIsOpen(false)}>
                <DownloadSlidesAsPPT 
                  totalSlides={totalSlides}
                  currentSlide={currentSlide}
                  setCurrentSlide={setCurrentSlide}
                  slideTitles={slideTitles}
                  inline={true}
                />
              </div>

              {/* Images ZIP Download */}
              <div onClick={() => setIsOpen(false)}>
                <DownloadSlidesAsImages 
                  totalSlides={totalSlides}
                  currentSlide={currentSlide}
                  setCurrentSlide={setCurrentSlide}
                  slideTitles={slideTitles}
                  inline={true}
                />
              </div>

              {/* Project Documentation */}
              <div onClick={() => setIsOpen(false)}>
                <DownloadProject inline={true} />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
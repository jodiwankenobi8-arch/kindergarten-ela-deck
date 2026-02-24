import { useState, useEffect, useRef } from 'react';
import { Menu, X, Home, Download, Image } from 'lucide-react';
import { DownloadProject } from './DownloadProject';
import { DownloadSlidesAsImages } from './DownloadSlidesAsImages';
import { DownloadSlidesAsPDF } from './DownloadSlidesAsPDF';
import { DownloadMenu } from './DownloadMenu';

interface Slide {
  title: string;
}

interface TableOfContentsProps {
  slides: Slide[];
  currentSlide: number;
  onGoToSlide: (index: number) => void;
  setCurrentSlide: (slide: number) => void;
}

export function TableOfContents({ slides, currentSlide, onGoToSlide, setCurrentSlide }: TableOfContentsProps) {
  const [isOpen, setIsOpen] = useState(false);
  const currentSlideRef = useRef<HTMLButtonElement>(null);

  // Scroll to current slide when TOC opens
  useEffect(() => {
    if (isOpen && currentSlideRef.current) {
      currentSlideRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [isOpen]);

  return (
    <>
      {/* Toggle button, Home button, and Download Menu */}
      <div className="fixed top-6 left-6 z-50 flex gap-3">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-3 rounded-full shadow-lg transition-all hover:scale-105"
          style={{
            backgroundColor: isOpen ? 'var(--coral-accent)' : 'var(--ocean-blue)',
            color: 'white'
          }}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        <button
          onClick={() => onGoToSlide(2)}
          className="p-3 rounded-full shadow-lg transition-all hover:scale-105"
          style={{
            backgroundColor: 'var(--seafoam)',
            color: 'var(--deep-navy)'
          }}
        >
          <Home className="w-6 h-6" />
        </button>

        {/* Download Menu */}
        <DownloadMenu 
          totalSlides={slides.length}
          currentSlide={currentSlide}
          setCurrentSlide={setCurrentSlide}
          slideTitles={slides.map(s => s.title)}
        />
      </div>

      {/* TOC panel */}
      {isOpen && (
        <div 
          className="fixed top-20 left-6 w-96 max-h-[80vh] overflow-y-auto p-6 rounded-2xl shadow-2xl z-40 flex flex-col"
          style={{ backgroundColor: 'white', border: '3px solid var(--ocean-blue)' }}
        >
          <h3 className="text-xl font-bold mb-4" style={{ color: 'var(--deep-navy)' }}>
            📚 Table of Contents
          </h3>
          
          <div className="space-y-2 flex-1 overflow-y-auto">
            {slides.map((slide, index) => (
              <button
                key={index}
                ref={index === currentSlide ? currentSlideRef : null}
                onClick={() => {
                  onGoToSlide(index);
                  setIsOpen(false);
                }}
                className="w-full text-left p-3 rounded-lg transition-all hover:scale-105"
                style={{
                  backgroundColor: index === currentSlide ? 'var(--ocean-blue)' : 'var(--seafoam)',
                  color: index === currentSlide ? 'white' : 'var(--deep-navy)'
                }}
              >
                <div className="flex items-start gap-3">
                  <span className="font-bold text-sm shrink-0">
                    {index + 1}.
                  </span>
                  <span className="text-sm">
                    {slide.title}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
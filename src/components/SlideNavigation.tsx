import { ChevronLeft, ChevronRight } from 'lucide-react';

interface SlideNavigationProps {
  currentSlide: number;
  totalSlides: number;
  onNext: () => void;
  onPrevious: () => void;
  onGoToSlide: (index: number) => void;
  currentTitle?: string;
}

export function SlideNavigation({ 
  currentSlide, 
  totalSlides, 
  onNext, 
  onPrevious
}: SlideNavigationProps) {
  const handleNext = () => {
    // Dispatch event that slides can intercept
    const event = new CustomEvent('requestNavigation', { 
      detail: { direction: 'next' },
      cancelable: true,
      bubbles: true
    });
    window.dispatchEvent(event);
    
    // Small delay to allow slides to intercept
    setTimeout(() => {
      if (!event.defaultPrevented) {
        onNext();
      }
    }, 0);
  };

  const handlePrevious = () => {
    // Dispatch event that slides can intercept
    const event = new CustomEvent('requestNavigation', { 
      detail: { direction: 'previous' },
      cancelable: true,
      bubbles: true
    });
    window.dispatchEvent(event);
    
    // Small delay to allow slides to intercept
    setTimeout(() => {
      if (!event.defaultPrevented) {
        onPrevious();
      }
    }, 0);
  };

  return (
    <>
      {/* Left Arrow */}
      {currentSlide > 0 && (
        <button
          onClick={handlePrevious}
          className="fixed left-8 top-1/2 -translate-y-1/2 z-50 opacity-10 hover:opacity-100 transition-opacity duration-300 p-4 rounded-full bg-white shadow-lg"
          style={{ border: '2px solid var(--ocean-blue)' }}
        >
          <ChevronLeft className="w-8 h-8" style={{ color: 'var(--deep-navy)' }} />
        </button>
      )}

      {/* Right Arrow */}
      {currentSlide < totalSlides - 1 && (
        <button
          onClick={handleNext}
          className="fixed right-8 top-1/2 -translate-y-1/2 z-50 opacity-10 hover:opacity-100 transition-opacity duration-300 p-4 rounded-full bg-white shadow-lg"
          style={{ border: '2px solid var(--ocean-blue)' }}
        >
          <ChevronRight className="w-8 h-8" style={{ color: 'var(--deep-navy)' }} />
        </button>
      )}
    </>
  );
}
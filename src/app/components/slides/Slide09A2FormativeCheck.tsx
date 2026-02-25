import { SlideLayout } from '@/components/SlideLayout';
import { useState, useEffect } from 'react';

export function Slide09A2FormativeCheck() {
  const [currentWord, setCurrentWord] = useState(0);
  const [revealed, setRevealed] = useState(false);

  const words = [
    { word: 'cape', type: 'long', sound: '/kāp/' },
    { word: 'cat', type: 'short', sound: '/kat/' },
    { word: 'tape', type: 'long', sound: '/tāp/' },
    { word: 'mat', type: 'short', sound: '/mat/' },
    { word: 'made', type: 'long', sound: '/mād/' },
    { word: 'tap', type: 'short', sound: '/tap/' },
  ];

  const current = words[currentWord];

  // Helper to render word with underlined 'e' for long A words
  const renderWord = (word: string, type: string, isRevealed: boolean) => {
    if (type === 'long' && isRevealed) {
      // Find the 'e' and underline it
      const eIndex = word.indexOf('e');
      if (eIndex !== -1) {
        return (
          <>
            {word.substring(0, eIndex)}
            <span style={{ textDecoration: 'underline', textDecorationThickness: '8px' }}>e</span>
            {word.substring(eIndex + 1)}
          </>
        );
      }
    }
    return word;
  };

  // Listen for navigation events to progress through words
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (['ArrowRight', 'ArrowDown', 'PageDown', ' '].includes(e.key)) {
        // Always prevent default first
        e.preventDefault();
        e.stopPropagation();
        
        // Check if we're done with all words
        if (revealed && currentWord === words.length - 1) {
          // On last word and revealed - manually trigger navigation to next slide
          const event = new CustomEvent('navigateToSlide', {
            detail: { direction: 'next' }
          });
          window.dispatchEvent(event);
          return;
        }
        
        if (!revealed) {
          // First click: reveal answer
          setRevealed(true);
        } else if (currentWord < words.length - 1) {
          // Second click: next word
          setCurrentWord(currentWord + 1);
          setRevealed(false);
        }
      } else if (['ArrowLeft', 'ArrowUp', 'PageUp'].includes(e.key)) {
        // Always prevent default first
        e.preventDefault();
        e.stopPropagation();
        
        // Check if we should go to previous slide
        if (!revealed && currentWord === 0) {
          // On first word and not revealed - manually trigger navigation to previous slide
          const event = new CustomEvent('navigateToSlide', {
            detail: { direction: 'previous' }
          });
          window.dispatchEvent(event);
          return;
        }
        
        if (revealed) {
          // Going back: hide answer
          setRevealed(false);
        } else if (currentWord > 0) {
          // Going back: previous word (show it revealed)
          setCurrentWord(currentWord - 1);
          setRevealed(true);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown, { capture: true });
    return () => window.removeEventListener('keydown', handleKeyDown, { capture: true });
  }, [currentWord, revealed, words.length]);

  return (
    <SlideLayout 
      title="Show me!" 
      subtitle=""
    >
      <div className="flex flex-col items-center justify-center gap-8">
        {/* Simple visual instructions */}
        <div className="flex gap-20">
          <div 
            className="text-center transition-all duration-500"
            style={{
              transform: revealed && current.type === 'long' ? 'scale(1.5)' : 'scale(1)',
              opacity: revealed && current.type === 'short' ? 0.3 : 1
            }}
          >
            <div className="text-8xl mb-2">👍</div>
            <div className="text-4xl font-bold" style={{ color: 'var(--ocean-blue)' }}>
              Long A
            </div>
          </div>
          
          <div 
            className="text-center transition-all duration-500"
            style={{
              transform: revealed && current.type === 'short' ? 'scale(1.5)' : 'scale(1)',
              opacity: revealed && current.type === 'long' ? 0.3 : 1
            }}
          >
            <div className="text-8xl mb-2">👎</div>
            <div className="text-4xl font-bold" style={{ color: 'var(--coral)' }}>
              Short A
            </div>
          </div>
        </div>

        {/* Current word - BIG */}
        <div 
          className="px-20 py-12 rounded-3xl shadow-2xl transition-all duration-500"
          style={{ 
            backgroundColor: revealed 
              ? (current.type === 'long' ? 'var(--ocean-blue)' : 'var(--coral)')
              : 'var(--sand)'
          }}
        >
          <div className="text-[140px] font-black leading-none" style={{ 
            color: revealed ? 'white' : 'var(--deep-navy)' 
          }}>
            {renderWord(current.word, current.type, revealed)}
          </div>
        </div>

        {/* Reveal answer - just the sound */}
        {revealed && (
          <div className="text-7xl font-black animate-bounce" style={{ color: 'var(--deep-navy)' }}>
            {current.sound}
          </div>
        )}

        {/* Progress indicator */}
        <div className="flex gap-3 mt-4">
          {words.map((_, index) => (
            <div
              key={index}
              className="w-5 h-5 rounded-full transition-all"
              style={{
                backgroundColor: index === currentWord 
                  ? 'var(--ocean-blue)' 
                  : index < currentWord 
                    ? 'var(--seafoam)'
                    : '#D1D5DB'
              }}
            />
          ))}
        </div>
      </div>
    </SlideLayout>
  );
}
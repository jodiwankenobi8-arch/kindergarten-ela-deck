import { SlideLayout } from '../SlideLayout';
import { useState, useEffect } from 'react';
import { Eye, Shuffle } from 'lucide-react';

export function Slide11BSightWordFlash() {
  const originalWords = ['away', 'give', 'little', 'get'];
  const [sightWords, setSightWords] = useState(originalWords);
  const [currentWord, setCurrentWord] = useState(0);
  const [allWordsShown, setAllWordsShown] = useState(false);

  const shuffleWords = () => {
    const shuffled = [...sightWords].sort(() => Math.random() - 0.5);
    setSightWords(shuffled);
    setCurrentWord(0);
    setAllWordsShown(false);
  };

  const nextWord = () => {
    if (currentWord < sightWords.length - 1) {
      setCurrentWord(currentWord + 1);
    } else {
      // Mark all words as shown
      setAllWordsShown(true);
    }
  };

  const prevWord = () => {
    if (currentWord > 0) {
      setCurrentWord(currentWord - 1);
    }
  };

  // Block navigation until all cards are shown
  useEffect(() => {
    // Create a blocking handler for navigation attempts
    const blockNavigation = (e: Event) => {
      if (!allWordsShown) {
        e.stopImmediatePropagation();
        e.preventDefault();
        // Instead of navigating, advance to next card
        nextWord();
      }
    };

    // Listen for navigation requests and block them if needed
    const handleNavigationRequest = (e: Event) => {
      const customEvent = e as CustomEvent;
      if (customEvent.detail?.direction === 'next' && !allWordsShown) {
        e.stopImmediatePropagation();
        e.preventDefault();
        nextWord();
      } else if (customEvent.detail?.direction === 'previous' && currentWord > 0) {
        e.stopImmediatePropagation();
        e.preventDefault();
        prevWord();
      }
    };

    window.addEventListener('requestNavigation', handleNavigationRequest, true);
    
    return () => {
      window.removeEventListener('requestNavigation', handleNavigationRequest, true);
    };
  }, [currentWord, allWordsShown, sightWords.length]);

  // Handle keyboard navigation - block App.tsx navigation until all cards shown
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // If not all words shown yet, intercept navigation keys
      if (!allWordsShown && ['ArrowRight', 'ArrowDown', 'PageDown', ' '].includes(e.key)) {
        e.preventDefault();
        e.stopImmediatePropagation(); // Stop App.tsx from handling this
        nextWord();
      } else if (['ArrowLeft', 'ArrowUp', 'PageUp'].includes(e.key) && currentWord > 0) {
        e.preventDefault();
        e.stopImmediatePropagation();
        prevWord();
      }
    };

    // Use capture phase to intercept before App.tsx handler
    window.addEventListener('keydown', handleKeyDown, true);
    return () => window.removeEventListener('keydown', handleKeyDown, true);
  }, [currentWord, sightWords.length, allWordsShown]);

  return (
    <SlideLayout 
      type="interactive" 
      title="Flashcard Drill" 
      subtitle={allWordsShown ? "Great job! Press → to continue" : "Read it fast!"}
    >
      <div className="flex flex-col items-center gap-12">
        {/* Flashcard */}
        <div
          className="w-[600px] h-96 rounded-3xl flex items-center justify-center shadow-2xl cursor-pointer transition-transform hover:scale-105"
          style={{ 
            backgroundColor: allWordsShown ? 'var(--seafoam)' : 'white', 
            border: `8px solid ${allWordsShown ? 'var(--coral-accent)' : 'var(--ocean-blue)'}`
          }}
          onClick={nextWord}
        >
          <p className="text-9xl font-bold" style={{ 
            color: 'var(--deep-navy)',
            fontFamily: 'var(--font-header)'
          }}>
            {allWordsShown ? '✓' : sightWords[currentWord]}
          </p>
        </div>

        {/* Navigation */}
        <div className="flex gap-8 items-center">
          <button
            onClick={prevWord}
            disabled={currentWord === 0}
            className="px-10 py-4 rounded-2xl text-3xl font-bold text-white transition-transform hover:scale-105 disabled:opacity-30"
            style={{ backgroundColor: 'var(--seafoam)' }}
          >
            ← Previous
          </button>
          
          <div className="flex items-center gap-4">
            <Eye className="w-10 h-10" style={{ color: 'var(--ocean-blue)' }} />
            <span className="text-3xl font-bold" style={{ color: 'var(--deep-navy)' }}>
              {allWordsShown ? 'All Done!' : `${currentWord + 1} / ${sightWords.length}`}
            </span>
          </div>

          <button
            onClick={nextWord}
            className="px-10 py-4 rounded-2xl text-3xl font-bold text-white transition-transform hover:scale-105"
            style={{ 
              backgroundColor: allWordsShown ? 'var(--coral-accent)' : currentWord === sightWords.length - 1 ? 'var(--ocean-blue)' : 'var(--coral-accent)'
            }}
          >
            {allWordsShown ? 'Complete! ✓' : currentWord === sightWords.length - 1 ? 'Last Word! →' : 'Next →'}
          </button>
        </div>

        {/* Shuffle Button */}
        <button
          onClick={shuffleWords}
          className="px-8 py-4 rounded-2xl text-2xl font-bold text-white transition-transform hover:scale-105 flex items-center gap-3"
          style={{ backgroundColor: 'var(--ocean-blue)' }}
        >
          <Shuffle className="w-6 h-6" />
          Shuffle & Restart
        </button>

        {/* Progress dots */}
        <div className="flex gap-3">
          {sightWords.map((_, index) => (
            <div
              key={index}
              className="w-4 h-4 rounded-full transition-all"
              style={{
                backgroundColor: index <= currentWord || allWordsShown ? 'var(--ocean-blue)' : 'var(--seafoam)'
              }}
            />
          ))}
        </div>
      </div>
    </SlideLayout>
  );
}

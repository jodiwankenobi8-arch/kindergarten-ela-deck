import { SlideLayout } from '@/components/SlideLayout';
import { useState, useEffect, useMemo } from 'react';

const targetWord = 'away';
const words = ['away', 'way', 'play', 'say', 'today', 'always'];

export function Slide11A1SelectAway() {
  const [selectedWord, setSelectedWord] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [shake, setShake] = useState(false);

  // Shuffle words once on mount to randomize position
  const shuffledWords = useMemo(() => {
    return [...words].sort(() => Math.random() - 0.5);
  }, []);

  useEffect(() => {
    // Play audio on mount with calming, sweet voice
    const utterance = new SpeechSynthesisUtterance(`Select the word ${targetWord}`);
    utterance.rate = 0.8; // Slower, more calming
    utterance.pitch = 1.3; // Higher, sweeter pitch for kindergarten
    utterance.volume = 1.0;
    
    setTimeout(() => {
      window.speechSynthesis.speak(utterance);
    }, 500);
  }, []);

  const handleWordClick = (word: string) => {
    if (isCorrect) return; // Already correct, don't allow more clicks

    setSelectedWord(word);
    
    if (word === targetWord) {
      setIsCorrect(true);
      
      // Play celebration sound
      const successUtterance = new SpeechSynthesisUtterance('Correct! Great job!');
      successUtterance.rate = 1.0;
      successUtterance.pitch = 1.2;
      window.speechSynthesis.speak(successUtterance);

      // Play celebration audio (ding)
      const celebrationAudio = new Audio();
      celebrationAudio.src = 'data:audio/wav;base64,UklGRhIFAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YW4EAACAgICAgICAgICAgICAgICAgICAgH9/f39/f39/f39/f39/f39+fn5+fn5+fn5+fn5+fn59fX19fX19fX19fX19fXx8fHx8fHx8fHx8fHx7e3t7e3t7e3t7e3t6enp6enp6enp6enl5eXl5eXl5eXl4eHh4eHh4eHd3d3d3d3d2dnZ2dnZ1dXV1dXR0dHR0c3Nzc3JycnJxcXFxcHBwb29vbm5ubW1tbGxsa2traGhoZmZmZGRkYmJiYGBgXl5eXFxcWlpaWFhYVlZWVFRUUlJSUFBQTk5OTExMSkpKSEhIRkZGRERCQkJAQD4+Pjw8PDo6Ojg4ODY2NjQ0NjY2ODg4Ojo6PDw+Pj5AQEJCQkREREZGRkhISEpKSkxMTE5OTlBQUFJSUlRUVFZWVlhYWFpaWlxcXF5eXmBgYGJiYmRkZGZmZmhoaGtra2xsbG1tbW5ubm9vb3BwcHFxcXJycnNzc3R0dHR1dXV1dnZ2d3d3d3h4eHh4eHl5eXl5eXp6enp6enp7e3t7e3t7e3x8fHx8fHx8fX19fX19fX5+fn5+fn5+f39/f39/f3+AgICAgICAgICAgICAgICA';
      celebrationAudio.volume = 0.8;
      celebrationAudio.play().catch(() => {});

      // Auto-advance after 1.5 seconds
      setTimeout(() => {
        window.dispatchEvent(new CustomEvent('navigateToSlide', { detail: { direction: 'next' } }));
      }, 1500);
    } else {
      setIsCorrect(false);
      setShake(true);
      
      // Play buzzer sound
      const buzzerAudio = new Audio();
      buzzerAudio.src = 'data:audio/wav;base64,UklGRhIFAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YW4EAABAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBA';
      buzzerAudio.volume = 0.6;
      buzzerAudio.play().catch(() => {});
      
      // Play "try again" audio
      const tryAgainUtterance = new SpeechSynthesisUtterance('Try again!');
      tryAgainUtterance.rate = 1.0;
      tryAgainUtterance.pitch = 0.9;
      window.speechSynthesis.speak(tryAgainUtterance);

      // Reset after animation
      setTimeout(() => {
        setShake(false);
        setSelectedWord(null);
        setIsCorrect(null);
      }, 1000);
    }
  };

  const handleReplay = () => {
    const utterance = new SpeechSynthesisUtterance(`Select the word ${targetWord}`);
    utterance.rate = 0.9;
    utterance.pitch = 1.1;
    utterance.volume = 1.0;
    window.speechSynthesis.speak(utterance);
  };

  return (
    <SlideLayout type="interactive" title="Word Selection" subtitle="Listen carefully and select the correct word">
      <div className="flex flex-col items-center justify-center gap-12 h-full">
        {/* Replay button */}
        <button
          onClick={handleReplay}
          className="px-8 py-4 rounded-2xl text-2xl font-bold text-white transition-transform hover:scale-105"
          style={{ backgroundColor: 'var(--ocean-blue)' }}
        >
          🔊 Replay Audio
        </button>

        {/* Word grid */}
        <div className="grid grid-cols-3 gap-8">
          {shuffledWords.map((word) => (
            <button
              key={word}
              onClick={() => handleWordClick(word)}
              disabled={isCorrect !== null && selectedWord === word}
              className={`w-64 h-40 rounded-3xl flex items-center justify-center shadow-2xl transition-all hover:scale-105 relative ${
                shake && selectedWord === word ? 'animate-shake' : ''
              }`}
              style={{ 
                backgroundColor: selectedWord === word && isCorrect === true ? '#4ade80' : 
                               selectedWord === word && isCorrect === false ? '#ef4444' :
                               'white',
                border: `6px solid ${selectedWord === word && isCorrect === true ? '#22c55e' :
                                    selectedWord === word && isCorrect === false ? '#dc2626' :
                                    'var(--ocean-blue)'}`,
                animation: shake && selectedWord === word ? 'shake 0.5s' : 'none'
              }}
            >
              <span className="text-6xl font-bold" style={{ 
                color: 'var(--deep-navy)',
                fontFamily: 'var(--font-header)'
              }}>
                {word}
              </span>
              {selectedWord === word && isCorrect === true && (
                <div className="absolute top-4 right-4 text-6xl">✓</div>
              )}
              {selectedWord === word && isCorrect === false && (
                <div className="absolute top-4 right-4 text-6xl">✗</div>
              )}
            </button>
          ))}
        </div>
      </div>
      <style>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          10%, 30%, 50%, 70%, 90% { transform: translateX(-10px); }
          20%, 40%, 60%, 80% { transform: translateX(10px); }
        }
        .animate-shake {
          animation: shake 0.5s;
        }
      `}</style>
    </SlideLayout>
  );
}
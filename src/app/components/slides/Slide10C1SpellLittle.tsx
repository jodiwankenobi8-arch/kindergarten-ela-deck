import { SlideLayout } from '@/components/SlideLayout';
import { useState, useEffect } from 'react';

export function Slide10C1SpellLittle() {
  const word = 'little';
  const letters = word.split('');
  const [step, setStep] = useState(0); // 0: first question, 1: second question, 2+: letters, final: combined word

  useEffect(() => {
    const timers: NodeJS.Timeout[] = [];

    // Step 0: "What was the sight word?" - wait 3 seconds for teacher to ask and students to answer
    timers.push(setTimeout(() => setStep(1), 3000));

    // Step 1: "How do you spell it?" appears - wait 2 seconds to read
    timers.push(setTimeout(() => setStep(2), 5000));

    // Steps 2+: Show letters one at a time (1 second each for kids to read)
    letters.forEach((_, index) => {
      timers.push(setTimeout(() => setStep(2 + index), 5000 + (index + 1) * 1000));
    });

    // Final step: Combine into one word box
    timers.push(setTimeout(() => setStep(2 + letters.length), 5000 + (letters.length + 1) * 1000));

    return () => timers.forEach(timer => clearTimeout(timer));
  }, [letters.length]);

  const visibleLetters = Math.max(0, step - 1);
  const showCombined = step >= 2 + letters.length;

  return (
    <SlideLayout type="presentation" hideHeader>
      <div className="flex flex-col items-center justify-start h-full pt-16">
        {/* Questions section - fixed at top, never moves */}
        <div className="flex flex-col gap-6 items-center mb-16">
          <h2 className="text-6xl font-bold text-center h-20" style={{ color: 'var(--deep-navy)' }}>
            {step >= 0 ? 'What was the sight word?' : ''}
          </h2>
          <h2 className="text-6xl font-bold text-center h-20" style={{ color: 'var(--deep-navy)' }}>
            {step >= 1 ? 'How do you spell it?' : ''}
          </h2>
        </div>

        {/* Letter/word area - always occupies the same space */}
        <div className="relative flex items-center justify-center" style={{ minHeight: '200px' }}>
          {!showCombined && step >= 2 && (
            <div className="flex gap-6">
              {letters.map((letter, index) => (
                <div
                  key={index}
                  className={`w-40 h-40 rounded-3xl flex items-center justify-center shadow-2xl transition-all duration-500 ${
                    index < visibleLetters ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
                  }`}
                  style={{ 
                    backgroundColor: index < visibleLetters ? 'var(--coral-accent)' : 'transparent',
                    border: `6px solid var(--coral-accent)`
                  }}
                >
                  <span className="text-8xl font-bold text-white leading-none" style={{ fontFamily: 'Comic Sans MS, Nunito, cursive' }}>
                    {index < visibleLetters ? letter : ''}
                  </span>
                </div>
              ))}
            </div>
          )}

          {showCombined && (
            <div className="absolute">
              <div className="p-12 rounded-3xl shadow-xl animate-merge flex items-center justify-center" style={{ backgroundColor: 'var(--ocean-blue)' }}>
                <span className="text-9xl font-bold text-white leading-none" style={{ fontFamily: 'Comic Sans MS, Nunito, cursive', marginTop: '-0.2em' }}>{word}</span>
              </div>
            </div>
          )}
        </div>
      </div>
      <style>{`
        @keyframes merge {
          0% { transform: scaleX(0.3); }
          100% { transform: scaleX(1); }
        }
        .animate-merge {
          animation: merge 0.8s ease-out;
        }
      `}</style>
    </SlideLayout>
  );
}
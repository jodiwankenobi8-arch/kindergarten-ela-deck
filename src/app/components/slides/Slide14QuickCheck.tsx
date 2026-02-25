import { SlideLayout } from '@/components/SlideLayout';
import { useState } from 'react';
import { CheckCircle } from 'lucide-react';

export function Slide14QuickCheck() {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const correctAnswer = 1; // "make" is correct

  return (
    <SlideLayout type="interactive" title="Quick Check" subtitle="Let's see what we learned!">
      <div className="flex flex-col items-center gap-8">
        {/* Question */}
        <div
          className="w-full max-w-4xl p-10 rounded-3xl shadow-xl text-center"
          style={{ backgroundColor: 'var(--seafoam)' }}
        >
          <p className="text-5xl font-bold" style={{ color: 'var(--deep-navy)' }}>
            Blend this word: m-a-k-e
          </p>
        </div>

        {/* Answer options */}
        <div className="flex gap-8">
          {["make", "mate", "mark"].map((option, index) => {
            const isSelected = selectedAnswer === index;
            const showResult = isSelected && selectedAnswer !== null;
            const backgroundColor = showResult 
              ? (index === correctAnswer ? 'var(--seafoam)' : 'var(--coral)')
              : 'white';

            return (
              <button
                key={option}
                onClick={() => !selectedAnswer && setSelectedAnswer(index)}
                disabled={!!selectedAnswer}
                className="px-12 py-8 rounded-3xl text-5xl font-bold transition-all hover:scale-105 disabled:cursor-default shadow-lg"
                style={{
                  backgroundColor,
                  border: '4px solid var(--ocean-blue)',
                  color: showResult ? 'white' : 'var(--deep-navy)'
                }}
              >
                {option}
                {isSelected && index === correctAnswer && (
                  <CheckCircle className="inline-block ml-4 w-12 h-12" />
                )}
              </button>
            );
          })}
        </div>

        {/* Feedback */}
        {selectedAnswer !== null && (
          <div className="text-center space-y-4 animate-fade-in">
            <p className="text-6xl">
              {selectedAnswer === correctAnswer ? '🎉' : '💪'}
            </p>
            <p className="text-4xl font-bold" style={{ color: 'var(--ocean-blue)' }}>
              {selectedAnswer === correctAnswer ? 'Great job!' : 'Nice try! Keep practicing!'}
            </p>
          </div>
        )}
      </div>

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }
      `}</style>
    </SlideLayout>
  );
}
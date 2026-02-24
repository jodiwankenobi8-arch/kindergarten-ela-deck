import { SlideLayout } from '../SlideLayout';
import { useState } from 'react';
import { Check, Star } from 'lucide-react';

export function Slide15ProgressReflection() {
  const [mood, setMood] = useState<string | null>(null);

  return (
    <SlideLayout type="interactive" title="How did we do today?" subtitle="Share how you're feeling!">
      <div className="flex flex-col items-center gap-12">
        {/* Mood selection */}
        <div className="space-y-6">
          <button
            onClick={() => setMood('happy')}
            className="flex items-center gap-6 p-8 rounded-3xl cursor-pointer transition-all hover:scale-105 shadow-lg"
            style={{
              backgroundColor: mood === 'happy' ? 'var(--seafoam)' : 'white',
              border: '4px solid',
              borderColor: mood === 'happy' ? 'var(--ocean-blue)' : 'var(--seafoam)'
            }}
          >
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0 transition-all"
              style={{
                backgroundColor: mood === 'happy' ? 'var(--ocean-blue)' : 'white',
                border: '4px solid var(--ocean-blue)'
              }}
            >
              {mood === 'happy' && <Check className="w-10 h-10 text-white" strokeWidth={3} />}
            </div>
            <span className="text-6xl">😊</span>
            <p className="text-4xl flex-1" style={{ color: 'var(--deep-navy)' }}>
              Happy
            </p>
          </button>
          <button
            onClick={() => setMood('okay')}
            className="flex items-center gap-6 p-8 rounded-3xl cursor-pointer transition-all hover:scale-105 shadow-lg"
            style={{
              backgroundColor: mood === 'okay' ? 'var(--seafoam)' : 'white',
              border: '4px solid',
              borderColor: mood === 'okay' ? 'var(--ocean-blue)' : 'var(--seafoam)'
            }}
          >
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0 transition-all"
              style={{
                backgroundColor: mood === 'okay' ? 'var(--ocean-blue)' : 'white',
                border: '4px solid var(--ocean-blue)'
              }}
            >
              {mood === 'okay' && <Check className="w-10 h-10 text-white" strokeWidth={3} />}
            </div>
            <span className="text-6xl">😐</span>
            <p className="text-4xl flex-1" style={{ color: 'var(--deep-navy)' }}>
              Okay
            </p>
          </button>
          <button
            onClick={() => setMood('sad')}
            className="flex items-center gap-6 p-8 rounded-3xl cursor-pointer transition-all hover:scale-105 shadow-lg"
            style={{
              backgroundColor: mood === 'sad' ? 'var(--seafoam)' : 'white',
              border: '4px solid',
              borderColor: mood === 'sad' ? 'var(--ocean-blue)' : 'var(--seafoam)'
            }}
          >
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0 transition-all"
              style={{
                backgroundColor: mood === 'sad' ? 'var(--ocean-blue)' : 'white',
                border: '4px solid var(--ocean-blue)'
              }}
            >
              {mood === 'sad' && <Check className="w-10 h-10 text-white" strokeWidth={3} />}
            </div>
            <span className="text-6xl">😢</span>
            <p className="text-4xl flex-1" style={{ color: 'var(--deep-navy)' }}>
              Sad
            </p>
          </button>
        </div>

        {/* Celebration message */}
        {mood && (
          <div 
            className="p-10 rounded-3xl text-center space-y-6 animate-bounce-in shadow-xl"
            style={{ backgroundColor: 'var(--coral)' }}
          >
            <div className="flex justify-center gap-4 text-6xl">
              <Star className="w-16 h-16 text-yellow-300" fill="currentColor" />
              <Star className="w-16 h-16 text-yellow-300" fill="currentColor" />
              <Star className="w-16 h-16 text-yellow-300" fill="currentColor" />
            </div>
            <p className="text-5xl font-bold text-white">
              Amazing! You're a reading star! 🌟
            </p>
          </div>
        )}
      </div>

      <style>{`
        @keyframes bounce-in {
          0% { opacity: 0; transform: scale(0.8); }
          50% { transform: scale(1.05); }
          100% { opacity: 1; transform: scale(1); }
        }
        .animate-bounce-in {
          animation: bounce-in 0.6s ease-out;
        }
      `}</style>
    </SlideLayout>
  );
}
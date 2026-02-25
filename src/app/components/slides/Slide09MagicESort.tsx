import { SlideLayout } from '@/components/SlideLayout';
import { useState } from 'react';

export function Slide09MagicESort() {
  const [droppedWords, setDroppedWords] = useState<{ [key: string]: string }>({});

  return (
    <SlideLayout title="Silent E Sorting Activity" subtitle="Which words have the silent E?">
      <div className="flex flex-col items-center gap-8">
        {/* Words to sort */}
        <div className="flex justify-center gap-4 flex-wrap min-h-24">
          {['cap', 'cape', 'mat', 'mate', 'tap', 'tape'].map(word => (
            <div key={word} className="flex gap-2">
              <button
                onClick={() => setDroppedWords({ ...droppedWords, [word]: 'short' })}
                className="px-8 py-4 rounded-2xl text-4xl font-bold transition-transform hover:scale-105"
                style={{
                  backgroundColor: 'white',
                  border: '3px solid var(--ocean-blue)',
                  color: 'var(--deep-navy)'
                }}
              >
                {word}
              </button>
            </div>
          ))}
        </div>

        {/* Sorting buckets */}
        <div className="grid grid-cols-2 gap-8">
          {/* Short A bucket */}
          <div
            className="p-8 rounded-3xl min-h-64"
            style={{ backgroundColor: 'var(--coral)', opacity: 0.9 }}
          >
            <h3 className="text-4xl font-bold text-white text-center mb-6">
              Short A
            </h3>
            <p className="text-5xl text-center mb-6">🐱 /a/</p>
            <div className="space-y-3">
              {['cap', 'mat', 'tap'].map(word => (
                <div
                  key={word}
                  className="px-6 py-3 rounded-xl text-3xl font-bold text-center bg-white"
                  style={{ color: 'var(--deep-navy)' }}
                >
                  {word}
                </div>
              ))}
            </div>
          </div>

          {/* Long A bucket */}
          <div
            className="p-8 rounded-3xl min-h-64"
            style={{ backgroundColor: 'var(--ocean-blue)', opacity: 0.9 }}
          >
            <h3 className="text-4xl font-bold text-white text-center mb-6">
              Long A (Silent E)
            </h3>
            <p className="text-5xl text-center mb-6">✨ /ā/</p>
            <div className="space-y-3">
              {['cape', 'mate', 'tape'].map(word => (
                <div
                  key={word}
                  className="px-6 py-3 rounded-xl text-3xl font-bold text-center bg-white"
                  style={{ color: 'var(--deep-navy)' }}
                >
                  {word}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
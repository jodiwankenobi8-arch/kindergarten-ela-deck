import { SlideLayout } from '@/components/SlideLayout';
import { Circle, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';

export function Slide13ReflectionCheckoff() {
  const [checked, setChecked] = useState([false, false, false]);

  const toggleCheck = (index: number) => {
    const newChecked = [...checked];
    newChecked[index] = !newChecked[index];
    setChecked(newChecked);
  };

  return (
    <SlideLayout>
      <div className="flex flex-col items-center justify-center h-full gap-8">
        <h1 className="text-6xl mb-8" style={{ color: 'var(--deep-navy)', fontFamily: 'var(--font-header)' }}>
          Now I can...
        </h1>
        <div className="flex flex-col gap-6 w-full max-w-5xl">
          <div
            className="flex items-center gap-6 p-8 rounded-2xl cursor-pointer transition-all hover:shadow-xl"
            style={{
              backgroundColor: checked[0] ? 'var(--seafoam)' : 'white',
              border: `3px solid ${checked[0] ? 'var(--coral)' : 'var(--ocean-blue)'}`
            }}
            onClick={() => toggleCheck(0)}
          >
            {checked[0] ? (
              <CheckCircle2 className="w-12 h-12 flex-shrink-0" style={{ color: 'var(--coral)', strokeWidth: 3 }} />
            ) : (
              <Circle className="w-12 h-12 flex-shrink-0" style={{ color: 'var(--ocean-blue)', strokeWidth: 3 }} />
            )}
            <p className="text-4xl" style={{ color: 'var(--deep-navy)' }}>
              Read words with silent E (long A)
            </p>
          </div>
          <div
            className="flex items-center gap-6 p-8 rounded-2xl cursor-pointer transition-all hover:shadow-xl"
            style={{
              backgroundColor: checked[1] ? 'var(--seafoam)' : 'white',
              border: `3px solid ${checked[1] ? 'var(--coral)' : 'var(--ocean-blue)'}`
            }}
            onClick={() => toggleCheck(1)}
          >
            {checked[1] ? (
              <CheckCircle2 className="w-12 h-12 flex-shrink-0" style={{ color: 'var(--coral)', strokeWidth: 3 }} />
            ) : (
              <Circle className="w-12 h-12 flex-shrink-0" style={{ color: 'var(--ocean-blue)', strokeWidth: 3 }} />
            )}
            <p className="text-4xl" style={{ color: 'var(--deep-navy)' }}>
              Read sight words fast without sounding them out
            </p>
          </div>
          <div
            className="flex items-center gap-6 p-8 rounded-2xl cursor-pointer transition-all hover:shadow-xl"
            style={{
              backgroundColor: checked[2] ? 'var(--seafoam)' : 'white',
              border: `3px solid ${checked[2] ? 'var(--coral)' : 'var(--ocean-blue)'}`
            }}
            onClick={() => toggleCheck(2)}
          >
            {checked[2] ? (
              <CheckCircle2 className="w-12 h-12 flex-shrink-0" style={{ color: 'var(--coral)', strokeWidth: 3 }} />
            ) : (
              <Circle className="w-12 h-12 flex-shrink-0" style={{ color: 'var(--ocean-blue)', strokeWidth: 3 }} />
            )}
            <p className="text-4xl" style={{ color: 'var(--deep-navy)' }}>
              Tell why an author wrote a story
            </p>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}

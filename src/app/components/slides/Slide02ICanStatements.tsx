import { SlideLayout } from '@/components/SlideLayout';
import { Check } from 'lucide-react';
import { useState } from 'react';

export function Slide02ICanStatements() {
  const [checked, setChecked] = useState<boolean[]>([false, false, false]);

  const toggleCheck = (index: number) => {
    const newChecked = [...checked];
    newChecked[index] = !newChecked[index];
    setChecked(newChecked);
  };

  const statements = [
    "Read long A words with silent E",
    "Read sight words fast without sounding them out",
    "Tell why an author wrote a story"
  ];

  return (
    <SlideLayout>
      <div className="flex flex-col items-center justify-center h-full gap-8">
        <h1 className="text-6xl mb-8" style={{ color: 'var(--deep-navy)', fontFamily: 'var(--font-header)' }}>
          Today I will be able to...
        </h1>
        <div className="flex flex-col gap-6 w-full max-w-5xl">
          {statements.map((statement, index) => (
            <div
              key={index}
              onClick={() => toggleCheck(index)}
              className="flex items-center gap-6 p-8 rounded-2xl cursor-pointer transition-all duration-300 hover:shadow-lg"
              style={{
                backgroundColor: 'white',
                border: '3px solid var(--ocean-blue)',
              }}
            >
              <div 
                className="w-12 h-12 flex-shrink-0 rounded-full flex items-center justify-center transition-all duration-300"
                style={{ 
                  border: '3px solid var(--ocean-blue)',
                  backgroundColor: checked[index] ? 'var(--ocean-blue)' : 'transparent'
                }}
              >
                {checked[index] && (
                  <Check 
                    className="w-8 h-8" 
                    style={{ color: 'white', strokeWidth: 4 }} 
                  />
                )}
              </div>
              <p className="text-4xl" style={{ color: 'var(--deep-navy)' }}>
                {statement}
              </p>
            </div>
          ))}
        </div>
      </div>
    </SlideLayout>
  );
}
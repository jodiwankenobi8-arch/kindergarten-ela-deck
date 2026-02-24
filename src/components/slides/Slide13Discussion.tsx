import { SlideLayout } from '../SlideLayout';
import { MessageCircle, Lightbulb, CircleCheckBig } from 'lucide-react';
import { useState } from 'react';

export function Slide13Discussion() {
  const [checked, setChecked] = useState<{ [key: number]: boolean }>({
    1: false,
    2: false,
    3: false,
  });

  const toggleCheck = (questionNum: number) => {
    setChecked(prev => ({ ...prev, [questionNum]: !prev[questionNum] }));
  };

  return (
    <SlideLayout title="Discussion Time" subtitle="Let's talk about the author's purpose!">
      <div className="flex flex-col items-center gap-6 px-8 w-full max-w-5xl mx-auto">
        {/* Main question */}
        <div
          className="w-full p-6 rounded-2xl shadow-xl text-center"
          style={{ backgroundColor: 'var(--coral)', border: '3px solid var(--ocean-blue)' }}
        >
          <p className="text-3xl font-bold leading-tight" style={{ color: 'var(--navy-text)' }}>
            Why did the author write "The Best Story"?
          </p>
        </div>

        {/* Discussion questions */}
        <div className="grid grid-cols-1 gap-5 w-full">
          <div
            className="p-5 rounded-2xl shadow-lg cursor-pointer transition-opacity"
            style={{ 
              backgroundColor: 'var(--seafoam)', 
              border: '3px solid var(--ocean-blue)',
              opacity: checked[1] ? 0.7 : 1
            }}
            onClick={() => toggleCheck(1)}
          >
            <div className="flex items-start gap-3">
              {checked[1] ? (
                <CircleCheckBig className="w-7 h-7 shrink-0 mt-1" style={{ color: 'var(--ocean-blue)' }} />
              ) : (
                <MessageCircle className="w-7 h-7 shrink-0 mt-1" style={{ color: 'var(--ocean-blue)' }} />
              )}
              <p className="text-xl leading-snug" style={{ color: 'var(--navy-text)' }}>
                <span className="font-bold">Did the author write to ENTERTAIN us or to INFORM us?</span> How do you know?
              </p>
            </div>
          </div>

          <div
            className="p-5 rounded-2xl shadow-lg cursor-pointer transition-opacity"
            style={{ 
              backgroundColor: 'var(--seafoam)', 
              border: '3px solid var(--ocean-blue)',
              opacity: checked[2] ? 0.7 : 1
            }}
            onClick={() => toggleCheck(2)}
          >
            <div className="flex items-start gap-3">
              {checked[2] ? (
                <CircleCheckBig className="w-7 h-7 shrink-0 mt-1" style={{ color: 'var(--ocean-blue)' }} />
              ) : (
                <MessageCircle className="w-7 h-7 shrink-0 mt-1" style={{ color: 'var(--ocean-blue)' }} />
              )}
              <p className="text-xl leading-snug" style={{ color: 'var(--navy-text)' }}>
                <span className="font-bold">What parts of the story were fun or funny?</span>
              </p>
            </div>
          </div>

          <div
            className="p-5 rounded-2xl shadow-lg cursor-pointer transition-opacity"
            style={{ 
              backgroundColor: 'var(--seafoam)', 
              border: '3px solid var(--ocean-blue)',
              opacity: checked[3] ? 0.7 : 1
            }}
            onClick={() => toggleCheck(3)}
          >
            <div className="flex items-start gap-3">
              {checked[3] ? (
                <CircleCheckBig className="w-7 h-7 shrink-0 mt-1" style={{ color: 'var(--ocean-blue)' }} />
              ) : (
                <MessageCircle className="w-7 h-7 shrink-0 mt-1" style={{ color: 'var(--ocean-blue)' }} />
              )}
              <p className="text-xl leading-snug" style={{ color: 'var(--navy-text)' }}>
                <span className="font-bold">What do you think the author wants us to learn about reading?</span>
              </p>
            </div>
          </div>
        </div>

        {/* Sentence frame helper */}
        <div
          className="w-full p-5 rounded-2xl shadow-xl"
          style={{ backgroundColor: 'var(--sand)', border: '3px solid var(--coral)' }}
        >
          <div className="flex items-center gap-3 mb-2">
            <Lightbulb className="w-6 h-6" style={{ color: 'var(--coral)' }} />
            <p className="text-lg font-bold" style={{ color: 'var(--navy-text)' }}>
              Sentence Starter:
            </p>
          </div>
          <p className="text-xl leading-snug pl-9" style={{ color: 'var(--navy-text)' }}>
            "I think the author wrote to _______ the reader because _______."
          </p>
        </div>
      </div>
    </SlideLayout>
  );
}
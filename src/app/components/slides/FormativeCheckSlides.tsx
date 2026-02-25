import { SlideLayout } from '@/components/SlideLayout';

// Helper component for word question slides
function FormativeWordSlide({ word, questionNumber }: { word: string; questionNumber: number }) {
  return (
    <SlideLayout title={`Question ${questionNumber}`} subtitle="">
      <div className="flex flex-col items-center justify-center gap-8">
        {/* Instructions */}
        <div className="flex gap-20">
          <div className="text-center">
            <div className="text-8xl mb-2">👍</div>
            <div className="text-4xl font-bold" style={{ color: 'var(--ocean-blue)' }}>
              Long A
            </div>
          </div>
          
          <div className="text-center">
            <div className="text-8xl mb-2">👎</div>
            <div className="text-4xl font-bold" style={{ color: 'var(--coral)' }}>
              Short A
            </div>
          </div>
        </div>

        {/* Current word */}
        <div 
          className="px-20 py-12 rounded-3xl shadow-2xl"
          style={{ backgroundColor: 'var(--sand)' }}
        >
          <div className="text-[140px] font-black leading-none" style={{ color: 'var(--deep-navy)' }}>
            {word}
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}

// Helper component for answer slides
function FormativeAnswerSlide({ 
  word, 
  type, 
  sound,
  questionNumber 
}: { 
  word: string; 
  type: 'long' | 'short'; 
  sound: string;
  questionNumber: number; 
}) {
  const renderWord = () => {
    if (type === 'long') {
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

  return (
    <SlideLayout title={`Question ${questionNumber} Answer`} subtitle="">
      <div className="flex flex-col items-center justify-center gap-8">
        {/* Instructions with highlighted correct answer */}
        <div className="flex gap-20">
          <div 
            className="text-center transition-all duration-500 px-8 py-4 rounded-2xl"
            style={{
              backgroundColor: type === 'long' ? 'var(--ocean-blue)' : 'transparent',
              opacity: type === 'short' ? 0.3 : 1
            }}
          >
            <div className="text-8xl mb-2">👍</div>
            <div 
              className="text-4xl font-bold" 
              style={{ color: type === 'long' ? 'white' : 'var(--ocean-blue)' }}
            >
              Long A
            </div>
          </div>
          
          <div 
            className="text-center transition-all duration-500 px-8 py-4 rounded-2xl"
            style={{
              backgroundColor: type === 'short' ? 'var(--ocean-blue)' : 'transparent',
              opacity: type === 'long' ? 0.3 : 1
            }}
          >
            <div className="text-8xl mb-2">👎</div>
            <div 
              className="text-4xl font-bold" 
              style={{ color: type === 'short' ? 'white' : 'var(--coral)' }}
            >
              Short A
            </div>
          </div>
        </div>

        {/* Word with original sand background */}
        <div 
          className="px-20 py-12 rounded-3xl shadow-2xl transition-all duration-500"
          style={{ 
            backgroundColor: 'var(--sand)'
          }}
        >
          <div className="text-[140px] font-black leading-none" style={{ color: 'var(--deep-navy)' }}>
            {renderWord()}
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}

// Word 1: cape
export function FormativeCheck1Word() {
  return <FormativeWordSlide word="cape" questionNumber={1} />;
}

export function FormativeCheck1Answer() {
  return <FormativeAnswerSlide word="cape" type="long" sound="/kāp/" questionNumber={1} />;
}

// Word 2: cat
export function FormativeCheck2Word() {
  return <FormativeWordSlide word="cat" questionNumber={2} />;
}

export function FormativeCheck2Answer() {
  return <FormativeAnswerSlide word="cat" type="short" sound="/kat/" questionNumber={2} />;
}

// Word 3: tape
export function FormativeCheck3Word() {
  return <FormativeWordSlide word="tape" questionNumber={3} />;
}

export function FormativeCheck3Answer() {
  return <FormativeAnswerSlide word="tape" type="long" sound="/tāp/" questionNumber={3} />;
}

// Word 4: mat
export function FormativeCheck4Word() {
  return <FormativeWordSlide word="mat" questionNumber={4} />;
}

export function FormativeCheck4Answer() {
  return <FormativeAnswerSlide word="mat" type="short" sound="/mat/" questionNumber={4} />;
}

// Word 5: made
export function FormativeCheck5Word() {
  return <FormativeWordSlide word="made" questionNumber={5} />;
}

export function FormativeCheck5Answer() {
  return <FormativeAnswerSlide word="made" type="long" sound="/mād/" questionNumber={5} />;
}

// Word 6: tap
export function FormativeCheck6Word() {
  return <FormativeWordSlide word="tap" questionNumber={6} />;
}

export function FormativeCheck6Answer() {
  return <FormativeAnswerSlide word="tap" type="short" sound="/tap/" questionNumber={6} />;
}
import { SlideLayout } from '../SlideLayout';
import { MessageCircle } from 'lucide-react';

export function Slide18A1TurnAndTalk() {
  return (
    <SlideLayout 
      title="Turn & Talk" 
      subtitle=""
    >
      <div className="flex flex-col items-center justify-center gap-6 px-8">
        {/* Main question */}
        <div className="text-4xl font-black text-center" style={{ color: 'var(--deep-navy)' }}>
          Why did the author write this story?
        </div>

        {/* Let's Talk Like Readers heading */}
        <div className="text-3xl font-bold text-center" style={{ color: 'var(--ocean-blue)' }}>
          Let's Talk Like Readers!
        </div>

        {/* Sentence Stems Box */}
        <div 
          className="p-6 rounded-3xl shadow-2xl w-full max-w-4xl"
          style={{ backgroundColor: 'var(--seafoam)', border: '4px solid var(--ocean-blue)' }}
        >
          <h3 className="text-3xl font-bold text-center mb-4" style={{ color: 'var(--deep-navy)' }}>
            You Can Say...
          </h3>
          <div className="space-y-3">
            <p className="text-2xl font-semibold" style={{ color: 'var(--deep-navy)' }}>
              💬 "I think the author wrote this story to..."
            </p>
            <p className="text-2xl font-semibold" style={{ color: 'var(--deep-navy)' }}>
              💬 "The author wanted to..."
            </p>
            <p className="text-2xl font-semibold" style={{ color: 'var(--deep-navy)' }}>
              💬 "This story is to _______ because..."
            </p>
          </div>
        </div>

        {/* Icon with Turn and Talk label */}
        <div className="flex flex-col items-center gap-3">
          <div 
            className="p-8 rounded-full shadow-2xl"
            style={{ backgroundColor: 'var(--ocean-blue)' }}
          >
            <MessageCircle 
              className="w-24 h-24 text-white"
              strokeWidth={3}
            />
          </div>
          <div className="text-3xl font-bold" style={{ color: 'var(--ocean-blue)' }}>
            Turn & Talk
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
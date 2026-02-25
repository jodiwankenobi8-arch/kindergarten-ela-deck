import { SlideLayout } from '@/components/SlideLayout';
import { CheckCircle, BookOpen, Eye } from 'lucide-react';

export function Slide13A1ExitReflection() {
  return (
    <SlideLayout 
      title="Today I learned..." 
      subtitle=""
    >
      <div className="flex flex-col items-center justify-center gap-12">
        {/* Three simple statements with icons */}
        <div className="space-y-8 w-full max-w-5xl">
          {/* Silent E */}
          <div
            className="p-10 rounded-3xl shadow-2xl text-center"
            style={{ backgroundColor: 'var(--seafoam)' }}
          >
            <p className="text-5xl font-black" style={{ color: 'var(--deep-navy)' }}>
              ✨ Silent e makes long A
            </p>
          </div>

          {/* Reading words */}
          <div
            className="p-10 rounded-3xl shadow-2xl text-center"
            style={{ backgroundColor: 'var(--coral)' }}
          >
            <p className="text-5xl font-black text-white">
              📖 I can read long A words with silent E
            </p>
          </div>

          {/* Author's purpose */}
          <div
            className="p-10 rounded-3xl shadow-2xl text-center"
            style={{ backgroundColor: 'var(--sand)' }}
          >
            <p className="text-5xl font-black" style={{ color: 'var(--deep-navy)' }}>
              🎯 I know why authors write
            </p>
          </div>
        </div>

        {/* Celebration */}
        <div 
          className="p-12 rounded-3xl shadow-2xl text-center max-w-4xl mt-8"
          style={{ backgroundColor: 'var(--ocean-blue)' }}
        >
          <p className="text-6xl font-black text-white">
            🌟 You did it! 🌟
          </p>
        </div>
      </div>
    </SlideLayout>
  );
}
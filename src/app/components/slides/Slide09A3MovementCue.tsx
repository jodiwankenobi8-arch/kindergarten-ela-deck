import { SlideLayout } from '@/components/SlideLayout';

export function Slide09A3MovementCue() {
  return (
    <SlideLayout 
      title="Let's Move!" 
      subtitle=""
    >
      <div className="flex flex-col items-center justify-center gap-20">
        {/* First action */}
        <div className="text-center space-y-6">
          <div className="text-9xl">✋</div>
          <p className="text-6xl font-black" style={{ color: 'var(--ocean-blue)' }}>
            Trace silent e in the air
          </p>
        </div>

        {/* Second action */}
        <div className="text-center space-y-6">
          <div className="text-9xl">🦒</div>
          <p className="text-6xl font-black" style={{ color: 'var(--coral)' }}>
            Stretch the long A sound
          </p>
        </div>
      </div>
    </SlideLayout>
  );
}

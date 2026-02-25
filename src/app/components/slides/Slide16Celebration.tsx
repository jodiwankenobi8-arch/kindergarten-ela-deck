import { SlideLayout } from '@/components/SlideLayout';

export function Slide16Celebration() {
  return (
    <SlideLayout title="Great Work Today! 🌟" subtitle="You're amazing readers!">
      <div className="flex flex-col items-center justify-center h-full gap-12">
        {/* Main content */}
        <div className="flex flex-col items-center gap-10">
          {/* Stars with animation */}
          <div className="flex gap-8 items-center">
            <span className="text-9xl animate-pulse">⭐</span>
            <span className="text-9xl animate-pulse">✨</span>
            <span className="text-9xl animate-pulse">⭐</span>
          </div>

          {/* You Did It with colorful background */}
          <div 
            className="px-16 py-10 rounded-3xl shadow-2xl"
            style={{ 
              background: 'linear-gradient(135deg, var(--seafoam) 0%, var(--ocean-blue) 100%)',
              border: '6px solid var(--sunshine-yellow)'
            }}
          >
            <h1 className="text-9xl font-black text-center text-white drop-shadow-lg">
              You Did It!
            </h1>
          </div>

          {/* Simple badges */}
          <div className="flex gap-6 justify-center">
            <div 
              className="px-10 py-5 rounded-full shadow-xl"
              style={{ backgroundColor: 'var(--sand)' }}
            >
              <span className="text-4xl font-bold" style={{ color: 'var(--deep-navy)' }}>
                🌟 Great Job! 🌟
              </span>
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
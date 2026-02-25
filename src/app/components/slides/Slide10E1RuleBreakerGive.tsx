import { SlideLayout } from '@/components/SlideLayout';

export function Slide10E1RuleBreakerGive() {
  return (
    <SlideLayout 
      title="⚠️ Tricky Word" 
      subtitle=""
    >
      <div className="flex flex-col items-center justify-center gap-16">
        {/* The word GIVE - BIG */}
        <div 
          className="px-24 py-20 rounded-3xl shadow-2xl"
          style={{ 
            backgroundColor: '#FEF3C7'
          }}
        >
          <div className="text-[180px] font-black" style={{ color: '#92400E' }}>
            give
          </div>
        </div>

        {/* Simple message */}
        <div className="text-6xl font-bold text-center" style={{ color: '#92400E' }}>
          <p>We remember this by heart.</p>
        </div>

        {/* Practice */}
        <div className="text-5xl font-bold text-center" style={{ color: 'var(--deep-navy)' }}>
          <p className="text-7xl">give • give • give</p>
        </div>
      </div>
    </SlideLayout>
  );
}
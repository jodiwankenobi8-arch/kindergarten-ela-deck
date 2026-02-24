import { SlideLayout } from '../SlideLayout';
import { useState } from 'react';

export function Slide09A1SilentETransformation() {
  const [showE, setShowE] = useState(false);

  return (
    <SlideLayout title="Watch!" subtitle="">
      <div className="flex flex-col items-center justify-center gap-16">
        {/* tap → tape transformation */}
        <div className="flex items-center gap-12">
          <div 
            className="px-16 py-12 rounded-3xl shadow-2xl"
            style={{ backgroundColor: showE ? 'var(--seafoam)' : 'var(--coral)' }}
          >
            <div className="text-8xl font-black text-white">
              tap{showE && <span className="text-[#2F3E46]">e</span>}
            </div>
          </div>
          
          {showE && (
            <div className="text-7xl">
              ➡️
            </div>
          )}
          
          {showE && (
            <div 
              className="px-16 py-12 rounded-3xl shadow-2xl"
              style={{ backgroundColor: 'var(--ocean-blue)' }}
            >
              <div className="text-8xl font-black text-white flex items-center gap-4">
                tape
              </div>
            </div>
          )}
        </div>

        {/* cap → cape transformation */}
        {showE && (
          <div className="flex items-center gap-12">
            <div 
              className="px-16 py-12 rounded-3xl shadow-2xl"
              style={{ backgroundColor: 'var(--seafoam)' }}
            >
              <div className="text-8xl font-black text-white">
                cap<span className="text-[#2F3E46]">e</span>
              </div>
            </div>
            
            <div className="text-7xl">
              ➡️
            </div>
            
            <div 
              className="px-16 py-12 rounded-3xl shadow-2xl"
              style={{ backgroundColor: 'var(--ocean-blue)' }}
            >
              <div className="text-8xl font-black text-white flex items-center gap-4">
                cape
              </div>
            </div>
          </div>
        )}

        {/* Interactive button */}
        <button
          onClick={() => setShowE(!showE)}
          className="px-12 py-6 rounded-2xl text-4xl font-bold shadow-xl transition-all hover:scale-110"
          style={{
            backgroundColor: 'var(--ocean-blue)',
            color: 'white'
          }}
        >
          {showE ? '🔄 Again' : '✨ Add e!'}
        </button>

        {/* Simple prompts - minimal text */}
        {showE && (
          <div className="text-5xl font-bold text-center" style={{ color: 'var(--deep-navy)' }}>
            <p>👉 What changed?</p>
          </div>
        )}
      </div>
    </SlideLayout>
  );
}
import { useState } from 'react';
import { SlideLayout } from '@/components/SlideLayout';
import { Button } from '../ui/button';

interface UFLICVCtoCVCeProps {
  cvcWord: string;
  cvceWord: string;
}

export function UFLICVCtoCVCe({ cvcWord, cvceWord }: UFLICVCtoCVCeProps) {
  const [showE, setShowE] = useState(false);
  
  const teacherNotes = `**CVC to CVCe Comparison: ${cvcWord} → ${cvceWord}**

**Purpose:** Show visual transformation when adding silent E

**Teacher Action:**
1. Start with CVC word: "${cvcWord}"
2. Students read together: "${cvcWord}"
3. Click to add the E
4. Point out that A now says its name
5. Students read new word: "${cvceWord}"

**Key Points:**
- Segment each sound first
- Add the E
- Re-blend with new vowel sound
- Compare the two words

**Student Response:**
- Choral reading
- Notice the vowel sound change
- Practice blending

**This is the CORE of Day 1 instruction.**`;

  return (
    <SlideLayout
      teacherNotes={teacherNotes}
      showTimer={false}
      className="bg-white"
    >
      <div className="w-full h-full flex flex-col items-center justify-center gap-16 px-16">
        {/* Title */}
        <div className="text-[#2F3E46] font-bold text-4xl text-center">
          Watch what happens when we add E!
        </div>

        {/* Word transformation display */}
        <div className="flex items-center gap-16">
          {/* CVC word */}
          <div className="flex flex-col items-center gap-6">
            <div className="text-[#94a3b8] text-2xl font-bold uppercase tracking-wider">
              Before
            </div>
            <div className="bg-[#FFE5E5] border-4 border-[#F4A7A1] rounded-3xl p-12 min-w-[280px]">
              <div className="text-[#2F3E46] font-black text-8xl text-center tracking-wide">
                {cvcWord}
              </div>
            </div>
            <div className="text-[#F4A7A1] text-xl font-bold">
              short A
            </div>
          </div>

          {/* Arrow */}
          <div className="text-[#6FA8DC] text-7xl font-bold">
            →
          </div>

          {/* CVCe word */}
          <div className="flex flex-col items-center gap-6">
            <div className="text-[#94a3b8] text-2xl font-bold uppercase tracking-wider">
              After
            </div>
            <div className={`bg-[#CFE8E5] border-4 border-[#6FA8DC] rounded-3xl p-12 min-w-[280px] transition-all duration-500 ${showE ? 'scale-105' : 'scale-100'}`}>
              <div className="text-[#2F3E46] font-black text-8xl text-center tracking-wide flex items-center justify-center gap-2">
                {cvcWord}
                <span className={`text-[#F4A7A1] transition-all duration-500 ${showE ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}>
                  e
                </span>
              </div>
            </div>
            <div className={`text-[#6FA8DC] text-xl font-bold transition-opacity duration-500 ${showE ? 'opacity-100' : 'opacity-0'}`}>
              long A
            </div>
          </div>
        </div>

        {/* Click button to reveal */}
        <Button 
          onClick={() => setShowE(!showE)}
          size="lg"
          className="bg-[#6FA8DC] hover:bg-[#5A8ABD] text-white text-2xl px-12 py-8 h-auto"
        >
          {showE ? 'Hide E' : 'Add Silent E'}
        </Button>

        {/* Pronunciation guide */}
        {showE && (
          <div className="bg-[#F4E9DA] rounded-xl p-6 text-[#2F3E46] text-2xl animate-in fade-in duration-300">
            <span className="font-bold">{cvcWord}</span> → <span className="font-bold text-[#6FA8DC]">{cvceWord}</span>
          </div>
        )}
      </div>
    </SlideLayout>
  );
}

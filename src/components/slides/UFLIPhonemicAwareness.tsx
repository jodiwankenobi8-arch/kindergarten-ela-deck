import { SlideLayout } from '../SlideLayout';

export function UFLIPhonemicAwareness() {
  const teacherNotes = `**Phonemic Awareness - Sound Isolation**

**Purpose:** Train ears BEFORE eyes. Students process sounds only, no reading yet.

**Teacher Script:**
"I am going to say a word. Tell me all the sounds you hear."

**Words to use (model first, then students respond):**
1. "made" → Students: /m/ /ā/ /d/
2. "cape" → Students: /k/ /ā/ /p/
3. "same" → Students: /s/ /ā/ /m/
4. "gate" → Students: /g/ /ā/ /t/

**Key:** 
- Teacher models first
- Students echo/repeat
- All oral, no visual letters yet
- Listen for long A sound in each word

**Time:** 2 minutes`;

  return (
    <SlideLayout
      teacherNotes={teacherNotes}
      showTimer={true}
      timerDuration={2}
      className="bg-white"
    >
      <div className="w-full h-full flex flex-col items-center justify-center gap-12 px-16">
        {/* Title */}
        <div className="text-[#2F3E46] font-bold text-5xl text-center">
          Phonemic Awareness
        </div>

        {/* Instruction for teacher */}
        <div className="text-[#2F3E46] text-3xl text-center max-w-4xl leading-relaxed">
          Listen for the sounds in each word
        </div>

        {/* Example words list */}
        <div className="bg-[#F4E9DA] border-4 border-[#6FA8DC] rounded-2xl p-12 max-w-3xl">
          <div className="space-y-4 text-2xl text-[#2F3E46]">
            <div className="flex items-center gap-6">
              <span className="font-bold min-w-[120px]">made</span>
              <span className="text-[#6FA8DC]">→</span>
              <span>/m/ /ā/ /d/</span>
            </div>
            <div className="flex items-center gap-6">
              <span className="font-bold min-w-[120px]">cape</span>
              <span className="text-[#6FA8DC]">→</span>
              <span>/k/ /ā/ /p/</span>
            </div>
            <div className="flex items-center gap-6">
              <span className="font-bold min-w-[120px]">same</span>
              <span className="text-[#6FA8DC]">→</span>
              <span>/s/ /ā/ /m/</span>
            </div>
            <div className="flex items-center gap-6">
              <span className="font-bold min-w-[120px]">gate</span>
              <span className="text-[#6FA8DC]">→</span>
              <span>/g/ /ā/ /t/</span>
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}

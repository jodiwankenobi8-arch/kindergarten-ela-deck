import { SlideLayout } from '../SlideLayout';

interface UFLIVisualDrillProps {
  letter: string;
  slideNumber?: number;
  totalSlides?: number;
}

export function UFLIVisualDrill({ letter, slideNumber, totalSlides }: UFLIVisualDrillProps) {
  const teacherNotes = `**Visual Drill - Letter ${letter}**

**Purpose:** Rapid automatic recall of letter sounds (NOT letter names)

**Teacher Action:**
- Point to the letter
- Students say the sound immediately
- Move quickly (~1-2 seconds per letter)
- No explanation, just fast recall

**Student Response:**
- Say sound only (not letter name)
- Choral response
- Instant recall

**Pacing:** This is muscle memory practice, not teaching. Keep it fast and energetic.`;

  return (
    <SlideLayout
      teacherNotes={teacherNotes}
      showTimer={false}
      className="bg-white"
    >
      <div className="w-full h-full flex items-center justify-center">
        {/* Minimalist UFLI design - single letter, centered, very large */}
        <div className="text-[#2F3E46] font-black text-[280px] leading-none select-none">
          {letter}
        </div>
      </div>

      {/* Small counter at bottom right for teacher reference */}
      {slideNumber && totalSlides && (
        <div className="absolute bottom-8 right-8 text-[#94a3b8] text-sm font-medium">
          {slideNumber}/{totalSlides}
        </div>
      )}
    </SlideLayout>
  );
}

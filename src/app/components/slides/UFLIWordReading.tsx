import { SlideLayout } from '@/components/SlideLayout';

interface UFLIWordReadingProps {
  words: string[];
  title?: string;
}

export function UFLIWordReading({ words, title = "Read Together" }: UFLIWordReadingProps) {
  const teacherNotes = `**Word Reading: ${title}**

**Purpose:** Build fluency and confidence with the new a_e pattern

**Instructional Routine:**
1. **Choral Read First**
   - "Let's read these words together"
   - Point to each word
   - Whole class reads in unison
   
2. **Individual Turns (after choral)**
   - Cold call 3-5 students
   - Quick, rapid pace
   - Specific praise for decoding

**Teacher Prompts:**
- "Sound it out if you need to"
- "Remember the silent E"
- "What does the A say?"

**Goal:** Accuracy → Fluency → Confidence

**Pacing:** Quick and energetic. High engagement.

**DP8 Opportunities:**
- 🌟 Classwide: "You're all using the silent E rule!"
- ⭐ Individual: "[Name], you sounded that out perfectly!"`;

  return (
    <SlideLayout
      teacherNotes={teacherNotes}
      showTimer={false}
      className="bg-white"
    >
      <div className="w-full h-full flex flex-col items-center justify-center gap-12 px-16">
        {/* Title */}
        <div className="text-[#2F3E46] font-bold text-5xl text-center">
          {title}
        </div>

        {/* Words grid */}
        <div className="grid grid-cols-3 gap-8 max-w-5xl">
          {words.map((word, index) => (
            <div 
              key={index}
              className="bg-[#CFE8E5] border-4 border-[#6FA8DC] rounded-2xl p-8 hover:bg-[#B8DDD9] transition-colors duration-200 cursor-pointer"
            >
              <div className="text-[#2F3E46] font-black text-6xl text-center tracking-wide">
                {word}
              </div>
            </div>
          ))}
        </div>

        {/* Instruction reminder */}
        <div className="text-[#6FA8DC] text-2xl font-medium text-center mt-4">
          👉 Point and read together
        </div>
      </div>
    </SlideLayout>
  );
}

import { SlideLayout } from '../SlideLayout';

export function UFLIAuditoryDrill() {
  const teacherNotes = `**Auditory Drill - Short A vs Long A**

**Purpose:** Sound manipulation in the brain. All listening, no reading yet.

**Part A: Sound Identification**
Teacher says words. Students identify if they hear SHORT A or LONG A.

**Gesture system:**
- Short A: Thumbs down
- Long A: Thumbs up

**Words to use:**
- cat (short A) 👎
- cake (long A) 👍
- mat (short A) 👎
- make (long A) 👍
- tap (short A) 👎
- tape (long A) 👍
- mad (short A) 👎
- made (long A) 👍

**Part B: Word Change (Oral Only)**
Teacher says CVC word, students change to CVCe mentally:
- "Change 'cap' to 'cape'"
- "Change 'tap' to 'tape'"
- "Change 'mat' to 'mate'"

**No writing, no board work yet. Pure auditory processing.**

**Time:** 5 minutes`;

  return (
    <SlideLayout
      teacherNotes={teacherNotes}
      showTimer={true}
      timerDuration={5}
      className="bg-white"
    >
      <div className="w-full h-full flex flex-col items-center justify-center gap-12 px-16">
        {/* Title */}
        <div className="text-[#2F3E46] font-bold text-5xl text-center">
          Auditory Drill
        </div>

        {/* Subtitle */}
        <div className="text-[#2F3E46] text-3xl text-center">
          Short A vs. Long A
        </div>

        {/* Two columns showing the difference */}
        <div className="grid grid-cols-2 gap-16 max-w-5xl w-full">
          {/* Short A */}
          <div className="bg-[#FFE5E5] border-4 border-[#F4A7A1] rounded-2xl p-8">
            <div className="text-center mb-6">
              <div className="text-6xl mb-4">👎</div>
              <div className="text-3xl font-bold text-[#2F3E46] mb-4">Short A</div>
              <div className="text-5xl font-black text-[#2F3E46] mb-6">ă</div>
            </div>
            <div className="space-y-3 text-2xl text-[#2F3E46] font-bold text-center">
              <div>cat</div>
              <div>mat</div>
              <div>tap</div>
              <div>cap</div>
            </div>
          </div>

          {/* Long A */}
          <div className="bg-[#CFE8E5] border-4 border-[#6FA8DC] rounded-2xl p-8">
            <div className="text-center mb-6">
              <div className="text-6xl mb-4">👍</div>
              <div className="text-3xl font-bold text-[#2F3E46] mb-4">Long A</div>
              <div className="text-5xl font-black text-[#2F3E46] mb-6">ā</div>
            </div>
            <div className="space-y-3 text-2xl text-[#2F3E46] font-bold text-center">
              <div>cake</div>
              <div>mate</div>
              <div>tape</div>
              <div>cape</div>
            </div>
          </div>
        </div>

        {/* Instruction */}
        <div className="text-[#6FA8DC] text-2xl text-center font-medium">
          Listen carefully and show thumbs up or thumbs down!
        </div>
      </div>
    </SlideLayout>
  );
}

import { SlideLayout } from '@/components/SlideLayout';

export function UFLINewConceptIntro() {
  const teacherNotes = `**New Concept: Long A with Silent E (a_e pattern / CVCe)**

**Purpose:** Introduce the phonics rule that silent E makes the vowel say its name.

**Teacher Direct Instruction:**
"Today we're learning about a special pattern called 'silent e'. When we add an 'e' to the end of a word, it doesn't make a sound, but it makes the vowel in the middle say its NAME instead of its sound."

**Visual Focus:** Students see the a_e pattern clearly labeled.

**Key Teaching Points:**
1. The 'e' is silent (doesn't make a sound)
2. The 'e' makes the 'a' say its name: "ā" 
3. This is called the CVCe pattern (consonant-vowel-consonant-e)

**Next:** You'll show them examples (tap→tape, cap→cape, mat→mate)

**Time:** Part of 15-minute New Concept block`;

  return (
    <SlideLayout
      teacherNotes={teacherNotes}
      showTimer={true}
      timerDuration={15}
      className="bg-white"
    >
      <div className="w-full h-full flex flex-col items-center justify-center gap-16 px-16">
        {/* Title */}
        <div className="text-[#2F3E46] font-bold text-6xl text-center">
          New Concept: Silent E
        </div>

        {/* The pattern - hero display */}
        <div className="relative">
          <div className="text-[#2F3E46] font-black text-[180px] tracking-[0.3em] flex items-center gap-8">
            <span>a</span>
            <span className="text-[#94a3b8] text-[120px]">_</span>
            <span className="text-[#F4A7A1]">e</span>
          </div>
          {/* Label for pattern */}
          <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 text-[#6FA8DC] text-3xl font-bold whitespace-nowrap">
            long A with silent E
          </div>
        </div>

        {/* The rule */}
        <div className="bg-[#CFE8E5] border-4 border-[#6FA8DC] rounded-2xl p-10 max-w-4xl mt-8">
          <div className="text-[#2F3E46] text-3xl text-center leading-relaxed">
            When we add <span className="font-black text-[#F4A7A1] text-4xl">e</span> to the end,
            <br />
            the <span className="font-black text-[#6FA8DC] text-4xl">a</span> says its name: <span className="font-black text-4xl">"ā"</span>
          </div>
        </div>

        {/* Silent E reminder */}
        <div className="text-[#F4A7A1] text-2xl font-bold">
          🤫 The E is silent!
        </div>
      </div>
    </SlideLayout>
  );
}
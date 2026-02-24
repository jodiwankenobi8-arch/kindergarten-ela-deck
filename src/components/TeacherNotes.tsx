import { useState } from 'react';
import { FileText, X } from 'lucide-react';

interface TeacherNote {
  slideNumber: number;
  notes: string[];
}

const teacherNotes: TeacherNote[] = [
  {
    slideNumber: 0,
    notes: [
      "Welcome students warmly",
      "Set expectations for engagement",
      "Quick brain break if needed"
    ]
  },
  {
    slideNumber: 1,
    notes: [
      "Read each I Can statement aloud",
      "Students repeat",
      "Preview what we'll learn today"
    ]
  },
  {
    slideNumber: 7,
    notes: [
      "Transition point: Insert UFLI slides",
      "Follow UFLI pacing guide",
      "DP8 reminder: Check for understanding"
    ]
  },
  {
    slideNumber: 8,
    notes: [
      "Model blending first",
      "Call on volunteers",
      "Use hand motions for blending",
      "DP8: Check multiple students"
    ]
  },
  {
    slideNumber: 9,
    notes: [
      "Think aloud strategy",
      "Listen for silent e",
      "Discuss word pairs (cap/cape)",
      "Formative check moment"
    ]
  },
  {
    slideNumber: 11,
    notes: [
      "Transition point: Insert Savvas slides",
      "Use story discussion questions",
      "Connect to author's purpose"
    ]
  },
  {
    slideNumber: 12,
    notes: [
      "Open discussion - no wrong answers",
      "Use sentence frames if needed",
      "Evidence from the text",
      "DP8: Multiple student responses"
    ]
  },
  {
    slideNumber: 14,
    notes: [
      "Exit ticket moment",
      "Note students who need reteaching",
      "Data point for tomorrow's groups"
    ]
  }
];

interface TeacherNotesProps {
  currentSlide: number;
}

export function TeacherNotes({ currentSlide }: TeacherNotesProps) {
  const [isOpen, setIsOpen] = useState(false);

  const currentNotes = teacherNotes.find(note => note.slideNumber === currentSlide);

  return (
    <>
      {/* Toggle button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-6 left-6 z-50 p-3 rounded-full shadow-lg transition-all hover:scale-105"
        style={{
          backgroundColor: isOpen ? 'var(--coral-accent)' : 'var(--ocean-blue)',
          color: 'white'
        }}
      >
        {isOpen ? <X className="w-6 h-6" /> : <FileText className="w-6 h-6" />}
      </button>

      {/* Notes panel */}
      {isOpen && (
        <div 
          className="fixed top-20 left-6 w-80 p-6 rounded-2xl shadow-2xl z-40"
          style={{ backgroundColor: 'white', border: '3px solid var(--ocean-blue)' }}
        >
          <h3 className="text-xl font-bold mb-4" style={{ color: 'var(--deep-navy)' }}>
            📝 Teacher Notes
          </h3>
          
          {currentNotes ? (
            <ul className="space-y-2">
              {currentNotes.notes.map((note, index) => (
                <li 
                  key={index} 
                  className="text-sm pl-4 border-l-4"
                  style={{ 
                    color: 'var(--deep-navy)',
                    borderColor: 'var(--seafoam)'
                  }}
                >
                  {note}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-sm opacity-75" style={{ color: 'var(--deep-navy)' }}>
              No notes for this slide
            </p>
          )}

          <div className="mt-4 pt-4 border-t" style={{ borderColor: 'var(--seafoam)' }}>
            <p className="text-xs opacity-75" style={{ color: 'var(--deep-navy)' }}>
              Slide {currentSlide + 1}
            </p>
          </div>
        </div>
      )}
    </>
  );
}

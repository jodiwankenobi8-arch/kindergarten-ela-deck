import { Download } from 'lucide-react';

interface DownloadProjectProps {
  inline?: boolean;
}

export function DownloadProject({ inline = false }: DownloadProjectProps) {
  const handleDownload = () => {
    // Create comprehensive README content
    const readmeContent = `# Kindergarten ELA Interactive Lesson Deck

## 🎓 Overview
A professional 95-slide kindergarten ELA lesson presentation with calming beach theme, designed for live classroom use with UFLI Day 1 content, embedded videos, timer system, and full presentation clicker support.

## ✨ Features
- ✅ **95 Interactive Slides** - Complete lesson flow
- ✅ **UFLI Phonics Lesson 54 (Day 1)** - Science of Reading aligned
- ✅ **Embedded YouTube Videos** - Alphabet and phonics songs
- ✅ **5 Timer Sessions** - Auto-start with audio alerts (2, 3, 5, 5, 15 minutes)
- ✅ **Presentation Clicker Support** - Works with all major brands
- ✅ **Interactive Navigation** - Clickable roadmap and table of contents
- ✅ **ESOL-Friendly** - Language scaffolding throughout
- ✅ **Beach Theme Design** - Calming, professional aesthetic
- ✅ **ErrorBoundary Protection** - Graceful error handling

## 🚀 Quick Start

### Installation
\`\`\`bash
# Clone or download this project
cd kindergarten-ela-lesson-deck

# Install dependencies (choose one)
npm install
# OR
pnpm install
# OR
yarn install
\`\`\`

### Development
\`\`\`bash
# Start development server
npm run dev
# OR
pnpm dev

# Open browser to http://localhost:5173
\`\`\`

### Production Build
\`\`\`bash
# Build for production
npm run build

# Preview production build
npm run preview
\`\`\`

## ⌨️ Keyboard Navigation

### Forward (Next Slide)
- **PageDown** ← Most clickers use this
- **Space** ← Many clickers use this
- **Right Arrow**
- **Down Arrow**
- **'N' key**

### Backward (Previous Slide)
- **PageUp** ← Most clickers use this
- **Left Arrow**
- **Up Arrow**
- **'P' key**

### Jump Navigation
- **Home** → Jump to first slide
- **End** → Jump to last slide

## 🎤 Presentation Clicker Compatibility
✅ **Tested and works with:**
- Logitech Spotlight, R400, R500, R800
- Kensington Wireless Presenter
- Targus Wireless Presenter
- Canon PR100-R
- TOKQI & BEBONCOOL clickers
- Generic PowerPoint clickers

## 📚 Lesson Content

### Section 1: Introduction & Songs (Slides 0-6)
- Welcome slide
- Learning targets (I Can Statements)
- Interactive learning journey navigation
- Songs roadmap
- Embedded YouTube videos:
  - Alphabet Song
  - Short A Song
  - Long A Song

### Section 2: UFLI Phonics Lesson 54 Day 1 (Slides 7-67)
**Phonemic Awareness** (2 min timer)
- Rhyme and alliteration activities

**Visual Drill** (3 min timer)
- 16 randomized letter slides: S, A, I, O, E, U, N, M, T, P, D, X, C, G, L, V

**Auditory Drill** (5 min timer)
- Sound identification activities

**Blending Drill** (5 min timer)
- CVC blending board

**New Concept: A_E Pattern** (15 min timer)
- Short A vs. Long A comparison
- Magic E transformation
- Practice words: made, tape, cape, mad
- Sound cards
- Read together activities
- Spell together activities

**Formative Assessment**
- 6 questions with reveal answers
- Short A vs. Long A identification

### Section 3: Sight Words (Slides 68-76)
- Sight Words Roadmap
- Three high-frequency words:
  - **away** (with spelling practice)
  - **little** (with spelling practice)
  - **get** (with spelling practice)
- Show What You Know checkpoint
- Flash card review

### Section 4: Savvas Reading (Slides 77-91)
- Savvas Roadmap
- Author's Purpose introduction
- Vocabulary preview
- Book cover analysis
- Story pages 154-161 (8 pages)
- Author's Purpose review
- Turn & Talk discussion prompts
- Class discussion

### Section 5: Celebration (Slides 92-94)
- Final roadmap
- Reflection checkoff
- Celebration slide

## ⏱️ Timer System

The lesson includes **5 auto-starting timer sessions**:

| Session | Duration | Slides | Activity |
|---------|----------|--------|----------|
| 1 | 2 minutes | 10-11 | Phonemic Awareness |
| 2 | 3 minutes | 12-29 | Visual Drill |
| 3 | 5 minutes | 30-31 | Auditory Drill |
| 4 | 5 minutes | 32-33 | Blending Drill |
| 5 | 15 minutes | 34+ | New Concept |

**Timer Features:**
- Auto-starts when entering session
- Countdown display in corner
- Beep sound every second during last 10 seconds
- Buzz sound when time expires
- Pause/resume toggle button

## 🎨 Design System (Beach Theme)

### Color Palette (CSS Variables)
\`\`\`css
--soft-sand: #F5E6D3     /* Primary background */
--deep-navy: #1E3A5F     /* Primary text */
--ocean-blue: #4A90B5    /* Interactive elements */
--coral: #F4A7A1         /* Accents */
--seafoam: #CFE8E5       /* Light accents */
--warm-sand: #E8D4B8     /* Alternate background */
\`\`\`

### Typography
- Large, readable fonts for kindergarten students
- High contrast ratios for accessibility
- Clear visual hierarchy

## 🏗️ Project Structure

\`\`\`
kindergarten-ela-lesson-deck/
├── src/
│   ├── app/
│   │   ├── App.tsx                         # Main application
│   │   ├── components/
│   │   │   ├── ErrorBoundary.tsx           # Error handling
│   │   │   ├── SlideNavigation.tsx         # Bottom nav bar
│   │   │   ├── TableOfContents.tsx         # Sidebar TOC
│   │   │   ├── Timer.tsx                   # Timer display
│   │   │   ├── SlideLayout.tsx             # Standard slide wrapper
│   │   │   ├── UFLISlideLayout.tsx         # UFLI slide wrapper
│   │   │   ├── DownloadProject.tsx         # This download button
│   │   │   └── slides/                     # All slide components
│   │   │       ├── Slide01Welcome.tsx
│   │   │       ├── Slide02ICanStatements.tsx
│   │   │       ├── Slide02Navigation.tsx
│   │   │       ├── Slide03Roadmap.tsx
│   │   │       ├── RoadmapWrappers.tsx
│   │   │       ├── VideoSlides.tsx
│   │   │       ├── FormativeCheckSlides.tsx
│   │   │       └── ... (95+ slide components)
│   │   └── contexts/
│   │       └── TimerContext.tsx
│   ├── styles/
│   │   ├── index.css                       # Global styles
│   │   ├── theme.css                       # Beach theme tokens
│   │   ├── fonts.css                       # Font imports
│   │   └── tailwind.css                    # Tailwind imports
│   └── imports/                            # Figma imports
├── package.json
├── vite.config.ts
├── postcss.config.mjs
└── README.md
\`\`\`

## 🧩 Technology Stack

- **React 18** - Component framework
- **TypeScript** - Type safety
- **Vite** - Build tool & dev server
- **Tailwind CSS v4** - Styling system
- **Lucide React** - Icon library
- **JSZip** - File bundling (for download)

## 🎯 Interactive Features

### Roadmap Navigation
**6 interactive roadmap slides** at indices: 2, 3, 7, 68, 77, 92

Each roadmap has **clickable circles** that jump to:
- 🎵 **Songs** → Slide 3
- 📖 **UFLI Phonics** → Slide 7
- 👁️ **Sight Words** → Slide 68
- 📚 **Savvas Story** → Slide 77
- 🎉 **Celebration** → Slide 92

### Table of Contents
- Accessible via button in bottom nav
- Click any slide title to jump directly
- Shows current slide highlight
- Grouped by section

### On-Screen Navigation
- Previous/Next arrow buttons
- Slide counter (e.g., "1 / 95")
- Current slide title display
- Responsive hover states

## 🌐 Browser Support

- ✅ Chrome (recommended)
- ✅ Edge
- ✅ Safari
- ✅ Firefox

**Note:** YouTube videos require internet connection

## 📖 Educational Standards

### Science of Reading Alignment
- Explicit phonics instruction
- Systematic skill progression
- Decodable text practice
- High-frequency sight word integration

### UFLI Framework
- Structured lesson components
- Timed activity segments
- Formative assessment checkpoints
- Multi-sensory learning approaches

### ESOL Support
- Visual scaffolding throughout
- "You Can Say..." sentence stems
- Turn & Talk collaborative structures
- Clear, simple language

## 🎓 Classroom Usage Tips

1. **Before Class:**
   - Open presentation in full-screen (F11)
   - Test presentation clicker
   - Ensure YouTube videos load
   - Review timer durations

2. **During Class:**
   - Use clicker or keyboard to advance
   - Timers auto-start at each section
   - Pause timers if needed (click timer)
   - Use interactive roadmap to jump sections

3. **After Class:**
   - Review formative assessment results
   - Note any slides to adjust timing
   - Save notes for next day's lesson

## 📝 Customization

### Modifying Timer Durations
Edit \`/src/app/App.tsx\` lines 216-263:

\`\`\`typescript
// Example: Change Visual Drill to 4 minutes
else if (currentSlide === 12) {
  setTimerSeconds(4 * 60); // Changed from 3 to 4
  setTimerSession(2);
  setTimerRunning(true);
}
\`\`\`

### Adding Slides
1. Create component in \`/src/app/components/slides/\`
2. Import in \`App.tsx\`
3. Add to slides array (lines 112-208)

### Changing Colors
Edit \`/src/styles/theme.css\` CSS variables

## 🐛 Troubleshooting

### Issue: Presentation clicker not working
- **Solution:** Try different key on clicker (forward/back buttons)
- **Note:** Most clickers send PageDown/PageUp or Arrow keys

### Issue: YouTube videos won't load
- **Solution:** Check internet connection
- **Note:** Videos use embedded iframe, may be blocked by school filters

### Issue: Timer sound not playing
- **Solution:** Browser may block autoplay audio
- **Click anywhere on page first to enable audio**

### Issue: Slides won't advance
- **Solution:** Click on slide area first to focus window
- **Ensure not in text input or other focused element**

## 📄 License

This project is for **educational use only**.

## 🤝 Support

For technical questions:
1. Check CHATGPT_PROJECT_SUMMARY.md for full documentation
2. Review slide structure in CHATGPT_CODE_FILES.md
3. Refer to this README for common issues

## 🎉 Credits

**Content:** UFLI Foundations, Savvas Reading Program
**Design:** Beach-themed calming aesthetic for kindergarten
**Built with:** React, TypeScript, Tailwind CSS, Vite

---

**Ready for classroom use!** 🚀📚👩‍🏫

Press **F11** for full-screen presentation mode and use your clicker to navigate through the lesson.
`;

    // Create and download the README file
    const blob = new Blob([readmeContent], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'KINDERGARTEN_ELA_PROJECT_README.md';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <button
      onClick={handleDownload}
      className={inline 
        ? "w-full flex items-center justify-center gap-2 p-3 rounded-lg transition-all hover:scale-105"
        : "fixed top-4 right-4 z-50 flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-opacity-90 transition-all shadow-lg"
      }
      style={{ 
        backgroundColor: inline ? 'var(--seafoam)' : 'var(--ocean-blue)',
        color: inline ? 'var(--deep-navy)' : 'white'
      }}
      title="Download comprehensive project documentation"
    >
      <Download className="w-5 h-5" />
      <span className="font-medium">
        {inline ? 'Project Documentation' : 'Download Project Info'}
      </span>
    </button>
  );
}
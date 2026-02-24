# COMPLETE KINDERGARTEN ELA LESSON DECK - FULL RECREATION GUIDE

## 📋 PROJECT OVERVIEW

**Project Name:** Professional Kindergarten ELA Interactive Lesson Deck  
**Framework:** React 18.3.1 + TypeScript + Vite  
**Styling:** Tailwind CSS v4  
**Total Slides:** 95 slides  
**Theme:** Calming Beach Theme  
**Standards:** Science of Reading Aligned, UFLI Foundations Day 1  
**Target Audience:** Kindergarten students (including ESOL learners)

---

## 🎯 KEY FEATURES

### Core Functionality
- ✅ 95 fully functional slides with beach theme
- ✅ Keyboard navigation (Arrow keys, Page Up/Down, Home/End)
- ✅ Presentation clicker support (all major brands)
- ✅ Interactive timer system (5min, 10min, 15min, 20min presets + custom)
- ✅ Embedded YouTube videos for songs
- ✅ Table of Contents with roadmap navigation
- ✅ Teacher notes panel
- ✅ Formative assessment slides with reveal answers
- ✅ ErrorBoundary implementation
- ✅ TypeScript fully typed throughout

### Export Capabilities
- 📄 PDF Export (all slides as one document)
- 📊 PowerPoint Export (PPTX format)
- 🖼️ Images Export (ZIP with PNG files)
- 📝 Project Documentation Download

### Lesson Content
1. **Introduction & Songs** (Slides 1-7)
2. **UFLI Phonics Lesson 54 Day 1** (Slides 8-68)
   - Visual Drill (18 letters)
   - Auditory Drill
   - Blending Drill
   - New Concept: Long A (a_e pattern)
3. **Sight Words** (Slides 69-77): away, little, get
4. **Savvas Reading** (Slides 78-92): "Kate and Jake Play" story
5. **Celebration** (Slides 93-95)

---

## 📦 DEPENDENCIES (package.json)

```json
{
  "dependencies": {
    "@emotion/react": "11.14.0",
    "@emotion/styled": "11.14.1",
    "@mui/icons-material": "7.3.5",
    "@mui/material": "7.3.5",
    "@popperjs/core": "2.11.8",
    "@radix-ui/react-accordion": "1.2.3",
    "@radix-ui/react-dialog": "1.1.6",
    "@radix-ui/react-progress": "1.1.2",
    "@radix-ui/react-slot": "1.1.2",
    "class-variance-authority": "0.7.1",
    "clsx": "2.1.1",
    "html2canvas": "^1.4.1",
    "jspdf": "^4.2.0",
    "jszip": "^3.10.1",
    "lucide-react": "0.487.0",
    "motion": "12.23.24",
    "pptxgenjs": "^4.0.1",
    "react": "18.3.1",
    "react-dom": "18.3.1",
    "tailwind-merge": "3.2.0"
  },
  "devDependencies": {
    "@tailwindcss/vite": "4.1.12",
    "@vitejs/plugin-react": "4.7.0",
    "tailwindcss": "4.1.12",
    "vite": "6.3.5"
  }
}
```

---

## 🎨 THEME & STYLING

### Color Palette (Beach Theme)
```css
:root {
  /* Beach Theme Colors */
  --soft-sand: #F4E9DA;
  --seafoam: #CFE8E5;
  --ocean-blue: #6FA8DC;
  --coral-accent: #F4A7A1;
  --deep-navy: #2F3E46;
  --white: #FFFFFF;
  
  /* Additional Colors */
  --sunset: #FF8C69;
  --coral: #FF6B9D;
  
  /* Typography */
  --font-header: 'Poppins', sans-serif;
  --font-body: 'Nunito', sans-serif;
}
```

### Fonts
- **Headers:** Poppins (Google Fonts)
- **Body:** Nunito (Google Fonts)

---

## 📁 COMPLETE FILE STRUCTURE

```
/
├── src/
│   ├── app/
│   │   ├── App.tsx                           # Main application entry
│   │   ├── components/
│   │   │   ├── DownloadMenu.tsx              # Download button & menu
│   │   │   ├── DownloadProject.tsx           # Documentation download
│   │   │   ├── DownloadSlidesAsImages.tsx    # ZIP export
│   │   │   ├── DownloadSlidesAsPDF.tsx       # PDF export
│   │   │   ├── DownloadSlidesAsPPT.tsx       # PowerPoint export
│   │   │   ├── UploadSlides.tsx              # Consolidated export component
│   │   │   ├── ErrorBoundary.tsx             # Error handling
│   │   │   ├── SlideLayout.tsx               # Main slide wrapper
│   │   │   ├── SlideNavigation.tsx           # Navigation controls
│   │   │   ├── TableOfContents.tsx           # TOC with roadmap
│   │   │   ├── TeacherNotes.tsx              # Notes panel
│   │   │   ├── Timer.tsx                     # Timer system
│   │   │   ├── UFLISlideLayout.tsx           # UFLI-specific layout
│   │   │   ├── slides/                       # All 95 slide components
│   │   │   │   ├── Slide01Welcome.tsx
│   │   │   │   ├── Slide02ICanStatements.tsx
│   │   │   │   ├── Slide02Navigation.tsx
│   │   │   │   ├── RoadmapWrappers.tsx
│   │   │   │   ├── VideoSlides.tsx
│   │   │   │   ├── FormativeCheckSlides.tsx
│   │   │   │   ├── Slide07AUFLITitle.tsx
│   │   │   │   ├── Slide07BUFLISchedule.tsx
│   │   │   │   ├── Slide07CUFLIPhonemic.tsx
│   │   │   │   ├── [70+ more slide files]
│   │   │   │   └── Slide16Celebration.tsx
│   │   │   └── figma/
│   │   │       └── ImageWithFallback.tsx     # Protected file
│   ├── styles/
│   │   ├── theme.css                         # Theme variables
│   │   ├── fonts.css                         # Font imports
│   │   └── main.css                          # Global styles
│   └── main.tsx                              # React entry point
├── package.json
├── vite.config.ts
├── tsconfig.json
└── index.html
```

---

## 📚 ALL 95 SLIDES - COMPLETE LIST

### Introduction Section (Slides 1-7)
1. **Welcome Slide** - Beach-themed welcome with palm trees
2. **I Can Statements** - Learning objectives
3. **Navigation Guide** - Keyboard controls overview
4. **Roadmap (Initial)** - Lesson flow visualization
5. **Alphabet Song** - YouTube video embed
6. **Short A Song** - YouTube video embed
7. **Long A Song** - YouTube video embed

### UFLI Section (Slides 8-68)
8. **UFLI Title** - Lesson 54 Day 1 introduction
9. **UFLI Schedule Overview** - Daily schedule display
10. **Phonemic Awareness** - Sound isolation activities
11-16. **Formative Check Questions** - 6 questions with reveal answers
17. **Visual Drill Schedule**
18. **Visual Drill Introduction**
19-36. **Individual Letter Cards** - S, A, I, O, E, U, N, NN, T, P, D, X, C, G, L, V (18 letters)
37. **Auditory Drill Schedule**
38. **Auditory Drill Activities**
39. **Blending Drill Schedule**
40. **Blending Drill Title**
41. **Blending Board** - CVC word practice
42. **New Concept Schedule**
43. **New Concept Title** - Long A introduction
44. **Letter A with Apple** - Short A review
45. **Letter A with Acorn** - Long A introduction
46. **Pattern: a_e** - Magic E explanation
47. **Example Word: made**
48. **Example Word: tape**
49. **Pattern Words Display**
50. **Word Pair: tap vs tape**
51. **Word Pair: tape vs tapeE** - Redundancy check
52. **Word Pair: cap vs cape**
53. **Word Pair: cape vs capeE**
54. **Word Pair: mad vs made (1)**
55. **Word Pair: mad vs made (2)**
56. **Sound Card Review**
57. **Watch Me Read** - Teacher modeling
58. **Read Together** - Choral reading
59. **Read Together (continued)**
60. **Watch Me Spell** - Spelling demonstration
61. **Spell Together** - Guided spelling
62. **Schedule Summary**
63. **Show What You Know Transition**

### Sight Words Section (Slides 64-72)
64. **Sight Word: away** - Introduction
65. **Spell: away** - Letter-by-letter practice
66. **Sight Word: little** - Introduction
67. **Spell: little** - Letter-by-letter practice
68. **Sight Word: get** - Introduction
69. **Spell: get** - Letter-by-letter practice
70. **Show What You Know: Sight Words**
71. **Sight Word Flash Cards** - Review all three
72. **Roadmap (After Sight Words)**

### Savvas Reading Section (Slides 73-87)
73. **Author's Purpose** - Teaching point
74. **Vocabulary Preview** - Key words
75. **Book Cover** - "Kate and Jake Play"
76-83. **Story Pages 154-161** - Full story with illustrations
84. **Author's Purpose Review**
85. **Turn and Talk** - Discussion prompt
86. **Discussion Questions**
87. **Reflection Checkoff**
88. **Roadmap (After Savvas)**

### Celebration Section (Slides 88-95)
89-95. **Celebration Slides** - End of lesson recognition

---

## 🔧 KEY COMPONENT STRUCTURES

### 1. App.tsx Structure
```typescript
export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showTOC, setShowTOC] = useState(false);
  const [showNotes, setShowNotes] = useState(false);
  
  const totalSlides = 95;
  
  // All slide components in array
  const slides = [
    <Slide01Welcome />,
    <Slide02ICanStatements />,
    // ... 93 more slides
  ];
  
  // Slide titles for navigation
  const slideTitles = [
    "Welcome to ELA!",
    "I Can Statements",
    // ... 93 more titles
  ];
  
  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      switch(e.key) {
        case 'ArrowRight':
        case 'ArrowDown':
        case 'PageDown':
          navigateToNextSlide();
          break;
        case 'ArrowLeft':
        case 'ArrowUp':
        case 'PageUp':
          navigateToPreviousSlide();
          break;
        case 'Home':
          setCurrentSlide(0);
          break;
        case 'End':
          setCurrentSlide(totalSlides - 1);
          break;
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide]);
  
  return (
    <ErrorBoundary>
      <div className="relative min-h-screen" style={{ backgroundColor: 'var(--soft-sand)' }}>
        {/* Download Menu */}
        <div className="fixed top-6 left-6 z-50">
          <DownloadMenu 
            totalSlides={totalSlides}
            currentSlide={currentSlide}
            setCurrentSlide={setCurrentSlide}
            slideTitles={slideTitles}
          />
        </div>
        
        {/* Timer */}
        <div className="fixed top-6 right-6 z-50">
          <Timer />
        </div>
        
        {/* Main Slide Container */}
        <div data-slide-container>
          {slides[currentSlide]}
        </div>
        
        {/* Navigation */}
        <SlideNavigation 
          currentSlide={currentSlide}
          totalSlides={totalSlides}
          onNavigate={setCurrentSlide}
          onToggleTOC={() => setShowTOC(!showTOC)}
          onToggleNotes={() => setShowNotes(!showNotes)}
        />
        
        {/* Table of Contents */}
        {showTOC && (
          <TableOfContents 
            currentSlide={currentSlide}
            slideTitles={slideTitles}
            onNavigate={setCurrentSlide}
            onClose={() => setShowTOC(false)}
          />
        )}
        
        {/* Teacher Notes */}
        {showNotes && (
          <TeacherNotes 
            currentSlide={currentSlide}
            onClose={() => setShowNotes(false)}
          />
        )}
      </div>
    </ErrorBoundary>
  );
}
```

### 2. SlideLayout Component
```typescript
interface SlideLayoutProps {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
  beachElements?: boolean;
}

export function SlideLayout({ children, title, subtitle, beachElements = true }: SlideLayoutProps) {
  return (
    <div className="relative w-full h-screen flex flex-col items-center justify-center p-8"
         style={{ backgroundColor: 'var(--soft-sand)' }}>
      
      {/* Beach decorative elements */}
      {beachElements && (
        <>
          <div className="absolute top-4 left-4">🌊</div>
          <div className="absolute top-4 right-4">🏖️</div>
          <div className="absolute bottom-4 left-4">🐚</div>
          <div className="absolute bottom-4 right-4">⭐</div>
        </>
      )}
      
      {/* Title */}
      {title && (
        <h1 className="text-6xl font-bold mb-4" style={{ color: 'var(--deep-navy)' }}>
          {title}
        </h1>
      )}
      
      {/* Subtitle */}
      {subtitle && (
        <h2 className="text-3xl mb-8" style={{ color: 'var(--ocean-blue)' }}>
          {subtitle}
        </h2>
      )}
      
      {/* Content */}
      <div className="w-full max-w-6xl">
        {children}
      </div>
    </div>
  );
}
```

### 3. Timer Component
```typescript
export function Timer() {
  const [timeLeft, setTimeLeft] = useState<number | null>(null);
  const [isRunning, setIsRunning] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [customMinutes, setCustomMinutes] = useState('');
  
  const presetTimes = [5, 10, 15, 20]; // minutes
  
  useEffect(() => {
    if (isRunning && timeLeft && timeLeft > 0) {
      const interval = setInterval(() => {
        setTimeLeft(prev => prev ? prev - 1 : null);
      }, 1000);
      return () => clearInterval(interval);
    } else if (timeLeft === 0) {
      setIsRunning(false);
      // Play sound or show alert
      alert('⏰ Time is up!');
    }
  }, [isRunning, timeLeft]);
  
  const startTimer = (minutes: number) => {
    setTimeLeft(minutes * 60);
    setIsRunning(true);
    setShowMenu(false);
  };
  
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };
  
  return (
    <div className="relative">
      {/* Timer Display */}
      <button
        onClick={() => setShowMenu(!showMenu)}
        className="p-3 rounded-full shadow-lg"
        style={{ backgroundColor: 'var(--ocean-blue)', color: 'white' }}
      >
        <Clock className="w-6 h-6" />
        {timeLeft !== null && <span className="ml-2">{formatTime(timeLeft)}</span>}
      </button>
      
      {/* Timer Menu */}
      {showMenu && (
        <div className="absolute top-16 right-0 bg-white rounded-lg shadow-xl p-4 w-64">
          <h3 className="font-bold mb-3">Set Timer</h3>
          
          {/* Preset buttons */}
          <div className="grid grid-cols-2 gap-2 mb-4">
            {presetTimes.map(mins => (
              <button
                key={mins}
                onClick={() => startTimer(mins)}
                className="p-2 rounded-lg bg-blue-500 text-white"
              >
                {mins} min
              </button>
            ))}
          </div>
          
          {/* Custom time input */}
          <div className="flex gap-2">
            <input
              type="number"
              placeholder="Custom minutes"
              value={customMinutes}
              onChange={(e) => setCustomMinutes(e.target.value)}
              className="flex-1 p-2 border rounded"
            />
            <button
              onClick={() => startTimer(parseInt(customMinutes))}
              className="px-3 py-2 bg-green-500 text-white rounded"
            >
              Start
            </button>
          </div>
          
          {/* Control buttons */}
          {isRunning && (
            <button
              onClick={() => setIsRunning(false)}
              className="w-full mt-2 p-2 bg-yellow-500 text-white rounded"
            >
              Pause
            </button>
          )}
          
          <button
            onClick={() => { setTimeLeft(null); setIsRunning(false); }}
            className="w-full mt-2 p-2 bg-red-500 text-white rounded"
          >
            Reset
          </button>
        </div>
      )}
    </div>
  );
}
```

### 4. DownloadMenu Component
```typescript
export function DownloadMenu({ totalSlides, currentSlide, setCurrentSlide, slideTitles }) {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-3 rounded-full shadow-lg"
        style={{ backgroundColor: isOpen ? 'var(--coral-accent)' : 'var(--sunset)', color: 'white' }}
      >
        {isOpen ? <X className="w-6 h-6" /> : <Download className="w-6 h-6" />}
      </button>
      
      {/* Menu Panel */}
      {isOpen && (
        <>
          <div className="fixed inset-0 bg-black/20 z-30" onClick={() => setIsOpen(false)} />
          
          <div className="fixed top-20 left-6 w-96 p-6 rounded-2xl shadow-2xl z-40 bg-white">
            <h3 className="text-xl font-bold mb-4">Download Options</h3>
            
            <div className="space-y-3">
              {/* PDF Download */}
              <div onClick={() => setIsOpen(false)}>
                <DownloadSlidesAsPDF {...props} inline={true} />
              </div>
              
              {/* PowerPoint Download */}
              <div onClick={() => setIsOpen(false)}>
                <DownloadSlidesAsPPT {...props} inline={true} />
              </div>
              
              {/* Images Download */}
              <div onClick={() => setIsOpen(false)}>
                <DownloadSlidesAsImages {...props} inline={true} />
              </div>
              
              {/* Documentation */}
              <div onClick={() => setIsOpen(false)}>
                <DownloadProject inline={true} />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
```

### 5. Export Components Pattern

All three export components (PDF, PowerPoint, Images) follow this pattern:

```typescript
export function DownloadSlidesAsPDF({ totalSlides, currentSlide, setCurrentSlide, slideTitles, inline }) {
  const [isCapturing, setIsCapturing] = useState(false);
  const [progress, setProgress] = useState(0);
  
  const captureSlide = async (slideIndex: number) => {
    setCurrentSlide(slideIndex);
    await new Promise(resolve => setTimeout(resolve, 500)); // Wait for render
    
    const slideContainer = document.querySelector('[data-slide-container]');
    const canvas = await html2canvas(slideContainer, {
      backgroundColor: '#F4E9DA',
      scale: 2,
      logging: false,
      useCORS: true,
      allowTaint: true,
    });
    
    return canvas;
  };
  
  const handleDownload = async () => {
    setIsCapturing(true);
    const startingSlide = currentSlide;
    
    try {
      const pdf = new jsPDF({ orientation: 'landscape', format: 'a4' });
      
      for (let i = 0; i < totalSlides; i++) {
        const canvas = await captureSlide(i);
        const imgData = canvas.toDataURL('image/jpeg', 0.95);
        
        if (i > 0) pdf.addPage();
        pdf.addImage(imgData, 'JPEG', 0, 0, pageWidth, pageHeight);
        
        setProgress(Math.round(((i + 1) / totalSlides) * 100));
      }
      
      pdf.save('kindergarten-ela-lesson-deck.pdf');
      setCurrentSlide(startingSlide);
    } catch (error) {
      console.error('Error creating PDF:', error);
      alert('Failed to create PDF');
    } finally {
      setIsCapturing(false);
      setProgress(0);
    }
  };
  
  return (
    <button onClick={handleDownload} disabled={isCapturing}>
      {isCapturing ? `Creating PDF... ${progress}%` : 'All Slides as PDF'}
    </button>
  );
}
```

### 6. Video Slide Component
```typescript
export function Slide04AlphabetSong() {
  return (
    <SlideLayout title="🎵 Alphabet Song" subtitle="Let's sing the ABCs!">
      <div className="w-full max-w-4xl mx-auto">
        <iframe
          width="100%"
          height="600"
          src="https://www.youtube.com/embed/36IBDpTRVNE"
          title="Alphabet Song"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </SlideLayout>
  );
}
```

### 7. Formative Check Pattern
```typescript
export function FormativeCheck1Word() {
  return (
    <UFLISlideLayout subtitle="Formative Check 1 of 6">
      <div className="text-center">
        <div className="text-8xl mb-8">🎯</div>
        <div className="text-6xl font-bold" style={{ color: 'var(--deep-navy)' }}>
          mat
        </div>
        <p className="text-3xl mt-8" style={{ color: 'var(--ocean-blue)' }}>
          How many sounds do you hear?
        </p>
      </div>
    </UFLISlideLayout>
  );
}

export function FormativeCheck1Answer() {
  return (
    <UFLISlideLayout subtitle="Formative Check 1 - Answer">
      <div className="text-center">
        <div className="text-8xl mb-8">✅</div>
        <div className="text-6xl font-bold mb-4" style={{ color: 'var(--deep-navy)' }}>
          mat
        </div>
        <div className="text-9xl font-bold" style={{ color: 'var(--coral-accent)' }}>
          3
        </div>
        <p className="text-3xl mt-8" style={{ color: 'var(--ocean-blue)' }}>
          /m/ /a/ /t/
        </p>
      </div>
    </UFLISlideLayout>
  );
}
```

### 8. Roadmap Component
```typescript
export function RoadmapInitial() {
  const sections = [
    { title: "Songs", icon: "🎵", status: "upcoming" },
    { title: "UFLI Phonics", icon: "📚", status: "upcoming" },
    { title: "Sight Words", icon: "👀", status: "upcoming" },
    { title: "Savvas Reading", icon: "📖", status: "upcoming" },
    { title: "Celebration", icon: "🎉", status: "upcoming" }
  ];
  
  return (
    <SlideLayout title="🗺️ Today's Learning Journey">
      <div className="grid grid-cols-5 gap-6 mt-8">
        {sections.map((section, index) => (
          <div key={index} className={`
            p-6 rounded-2xl text-center transition-all
            ${section.status === 'completed' ? 'bg-green-100' : ''}
            ${section.status === 'current' ? 'bg-yellow-100 scale-110' : ''}
            ${section.status === 'upcoming' ? 'bg-white opacity-70' : ''}
          `}>
            <div className="text-6xl mb-4">{section.icon}</div>
            <h3 className="text-2xl font-bold">{section.title}</h3>
          </div>
        ))}
      </div>
    </SlideLayout>
  );
}
```

---

## 🎯 EXAMPLE SLIDE IMPLEMENTATIONS

### Welcome Slide (Slide 1)
```typescript
export function Slide01Welcome() {
  return (
    <SlideLayout beachElements={true}>
      <div className="text-center">
        <div className="text-8xl mb-8">🏖️</div>
        <h1 className="text-8xl font-bold mb-6" style={{ color: 'var(--deep-navy)' }}>
          Welcome to ELA!
        </h1>
        <h2 className="text-5xl mb-8" style={{ color: 'var(--ocean-blue)' }}>
          Let's Learn at the Beach!
        </h2>
        <div className="flex justify-center gap-8 text-6xl">
          <span>🌊</span>
          <span>🐚</span>
          <span>⭐</span>
          <span>🌴</span>
        </div>
      </div>
    </SlideLayout>
  );
}
```

### I Can Statements (Slide 2)
```typescript
export function Slide02ICanStatements() {
  const statements = [
    "I can say the sounds of letters I know",
    "I can blend sounds to read words",
    "I can read the new pattern: a_e (magic e)",
    "I can read my new sight words",
    "I can read a story with my class"
  ];
  
  return (
    <SlideLayout title="📋 I Can..." subtitle="Learning Goals for Today">
      <div className="space-y-6 mt-8">
        {statements.map((statement, index) => (
          <div key={index} className="flex items-center gap-4 p-6 bg-white rounded-2xl shadow-lg">
            <div className="text-5xl">✨</div>
            <p className="text-3xl" style={{ color: 'var(--deep-navy)' }}>
              {statement}
            </p>
          </div>
        ))}
      </div>
    </SlideLayout>
  );
}
```

### Visual Drill Letter Card (Example: Letter S)
```typescript
export function Slide09CLetterS() {
  return (
    <UFLISlideLayout subtitle="Visual Drill">
      <div className="flex flex-col items-center justify-center">
        <div className="w-96 h-96 bg-white rounded-3xl shadow-2xl flex items-center justify-center mb-8"
             style={{ border: '8px solid var(--ocean-blue)' }}>
          <span className="text-[280px] font-bold" style={{ color: 'var(--deep-navy)' }}>
            S
          </span>
        </div>
        <div className="text-6xl font-bold" style={{ color: 'var(--coral-accent)' }}>
          /s/ /s/ /s/
        </div>
      </div>
    </UFLISlideLayout>
  );
}
```

### Sight Word Teaching Slide
```typescript
export function Slide10ASightWordAway() {
  return (
    <SlideLayout title="👀 New Sight Word" subtitle="Sight Word #1">
      <div className="text-center">
        <div className="text-9xl font-bold mb-8 p-12 bg-white rounded-3xl shadow-2xl inline-block"
             style={{ color: 'var(--deep-navy)', border: '8px solid var(--coral-accent)' }}>
          away
        </div>
        
        <div className="mt-12 text-4xl" style={{ color: 'var(--ocean-blue)' }}>
          <p className="mb-4">👉 This is a tricky word</p>
          <p className="mb-4">👁️ We need to remember it by sight</p>
          <p>🗣️ Let's say it together: <strong>away</strong></p>
        </div>
      </div>
    </SlideLayout>
  );
}
```

### Story Page Example
```typescript
export function Slide12AStoryPage154() {
  return (
    <SlideLayout title="📖 Kate and Jake Play" subtitle="Page 154">
      <div className="flex gap-8">
        {/* Illustration side */}
        <div className="w-1/2 bg-white rounded-2xl p-8 shadow-lg">
          <div className="text-8xl text-center mb-4">👧👦</div>
          <div className="text-6xl text-center">🏖️</div>
        </div>
        
        {/* Text side */}
        <div className="w-1/2 flex items-center">
          <p className="text-5xl leading-relaxed" style={{ color: 'var(--deep-navy)' }}>
            Kate and Jake like to play.
          </p>
        </div>
      </div>
    </SlideLayout>
  );
}
```

---

## 🎮 KEYBOARD NAVIGATION IMPLEMENTATION

```typescript
useEffect(() => {
  const handleKeyDown = (e: KeyboardEvent) => {
    // Prevent default for navigation keys
    if (['ArrowRight', 'ArrowLeft', 'ArrowUp', 'ArrowDown', 'PageUp', 'PageDown', 'Home', 'End'].includes(e.key)) {
      e.preventDefault();
    }
    
    switch(e.key) {
      // Next slide
      case 'ArrowRight':
      case 'ArrowDown':
      case 'PageDown':
      case ' ': // Spacebar
        if (currentSlide < totalSlides - 1) {
          setCurrentSlide(currentSlide + 1);
        }
        break;
      
      // Previous slide
      case 'ArrowLeft':
      case 'ArrowUp':
      case 'PageUp':
        if (currentSlide > 0) {
          setCurrentSlide(currentSlide - 1);
        }
        break;
      
      // First slide
      case 'Home':
        setCurrentSlide(0);
        break;
      
      // Last slide
      case 'End':
        setCurrentSlide(totalSlides - 1);
        break;
      
      // Toggle TOC
      case 't':
      case 'T':
        setShowTOC(!showTOC);
        break;
      
      // Toggle Notes
      case 'n':
      case 'N':
        setShowNotes(!showNotes);
        break;
    }
  };
  
  window.addEventListener('keydown', handleKeyDown);
  return () => window.removeEventListener('keydown', handleKeyDown);
}, [currentSlide, showTOC, showNotes]);
```

---

## 🎯 PRESENTATION CLICKER SUPPORT

Presentation clickers send these keycodes:
- **Next:** PageDown, ArrowRight, Space
- **Previous:** PageUp, ArrowLeft
- **Start:** Home
- **End:** End

All major brands supported:
- Logitech Spotlight/R400/R500
- Kensington Wireless Presenter
- Canon PR100-R
- SMK-Link RemotePoint
- Generic USB presenters

---

## 📝 TEACHER NOTES SYSTEM

```typescript
export function TeacherNotes({ currentSlide, onClose }) {
  // Notes for each slide
  const notes = {
    0: "Welcome students warmly. Set positive expectations for beach-themed learning.",
    1: "Review I Can statements. Ask students to repeat after you.",
    2: "Explain keyboard controls for interactive features.",
    // ... notes for all 95 slides
  };
  
  return (
    <div className="fixed right-0 top-0 h-full w-96 bg-white shadow-2xl z-40 p-6 overflow-y-auto">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-2xl font-bold">Teacher Notes</h3>
        <button onClick={onClose}>
          <X className="w-6 h-6" />
        </button>
      </div>
      
      <div className="text-sm text-gray-600 mb-4">
        Slide {currentSlide + 1} of {95}
      </div>
      
      <div className="prose">
        <p>{notes[currentSlide] || "No notes for this slide."}</p>
      </div>
      
      {/* Quick navigation */}
      <div className="mt-6 pt-6 border-t">
        <h4 className="font-bold mb-2">Quick Tips:</h4>
        <ul className="text-sm space-y-1">
          <li>🎯 Use timer for pacing</li>
          <li>⌨️ Arrow keys to navigate</li>
          <li>📋 Press T for table of contents</li>
        </ul>
      </div>
    </div>
  );
}
```

---

## 🔥 ERROR BOUNDARY IMPLEMENTATION

```typescript
import React from 'react';

interface Props {
  children: React.ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-red-50">
          <div className="text-center p-8 bg-white rounded-2xl shadow-xl max-w-2xl">
            <div className="text-6xl mb-4">⚠️</div>
            <h1 className="text-3xl font-bold mb-4">Oops! Something went wrong</h1>
            <p className="text-gray-600 mb-6">
              {this.state.error?.message || 'An unexpected error occurred'}
            </p>
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            >
              Reload Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
```

---

## 🚀 SETUP INSTRUCTIONS

### 1. Initialize Project
```bash
npm create vite@latest kindergarten-ela -- --template react-ts
cd kindergarten-ela
npm install
```

### 2. Install Dependencies
```bash
npm install lucide-react html2canvas jspdf jszip pptxgenjs
npm install motion clsx tailwind-merge
npm install @radix-ui/react-dialog @radix-ui/react-progress
npm install -D tailwindcss @tailwindcss/vite
```

### 3. Configure Tailwind CSS v4
Create `src/styles/main.css`:
```css
@import "tailwindcss";
@import "./theme.css";
@import "./fonts.css";
```

### 4. Configure Vite
```typescript
// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
});
```

### 5. Add Google Fonts
Create `src/styles/fonts.css`:
```css
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700&display=swap');
```

### 6. Create File Structure
```bash
mkdir -p src/app/components/slides
mkdir -p src/app/components/figma
mkdir -p src/styles
```

### 7. Build and Run
```bash
npm run dev
```

---

## 🎨 CUSTOM CSS VARIABLES USAGE

```typescript
// In any component, use CSS variables:
style={{ 
  backgroundColor: 'var(--soft-sand)',
  color: 'var(--deep-navy)',
  borderColor: 'var(--ocean-blue)'
}}
```

Available variables:
- `--soft-sand` - Background (#F4E9DA)
- `--seafoam` - Light accent (#CFE8E5)
- `--ocean-blue` - Primary blue (#6FA8DC)
- `--coral-accent` - Coral pink (#F4A7A1)
- `--deep-navy` - Dark text (#2F3E46)
- `--sunset` - Orange (#FF8C69)
- `--coral` - Pink (#FF6B9D)

---

## 📊 EXPORT FUNCTIONALITY DETAILS

### PDF Export
- **Format:** A4 Landscape
- **Quality:** JPEG 95% compression
- **Features:** Page numbers, slide titles in footer
- **Library:** jsPDF

### PowerPoint Export
- **Format:** PPTX (16:9)
- **Features:** Presenter notes with slide titles
- **Compatibility:** Microsoft PowerPoint, Google Slides, Keynote
- **Library:** pptxgenjs

### Images Export
- **Format:** PNG
- **Resolution:** 1920x1080 (Full HD, 2x scale)
- **Package:** ZIP with organized files
- **Naming:** slide_001_Title.png format
- **Extras:** README.txt included
- **Library:** html2canvas + JSZip

---

## 🎯 ACCESSIBILITY FEATURES

1. **ESOL Support:**
   - Visual aids on every slide
   - Icons and emojis for comprehension
   - Simplified language
   - Repetitive patterns

2. **Keyboard Navigation:**
   - Full keyboard control
   - No mouse required
   - Presentation clicker support

3. **Visual Design:**
   - High contrast text
   - Large fonts (3xl-9xl)
   - Clear section divisions
   - Consistent color coding

4. **Pacing Tools:**
   - Built-in timer system
   - Visual progress indicators
   - Clear lesson roadmap

---

## 💡 ADVANCED FEATURES

### 1. Slide Transitions
```typescript
// In App.tsx, add transition animation
<motion.div
  key={currentSlide}
  initial={{ opacity: 0, x: 100 }}
  animate={{ opacity: 1, x: 0 }}
  exit={{ opacity: 0, x: -100 }}
  transition={{ duration: 0.3 }}
>
  {slides[currentSlide]}
</motion.div>
```

### 2. Progress Bar
```typescript
<div className="fixed top-0 left-0 w-full h-2 bg-gray-200 z-50">
  <div 
    className="h-full bg-blue-500 transition-all"
    style={{ width: `${(currentSlide / totalSlides) * 100}%` }}
  />
</div>
```

### 3. Auto-Save Progress
```typescript
useEffect(() => {
  localStorage.setItem('currentSlide', currentSlide.toString());
}, [currentSlide]);

// On load:
const savedSlide = parseInt(localStorage.getItem('currentSlide') || '0');
setCurrentSlide(savedSlide);
```

### 4. Fullscreen Mode
```typescript
const toggleFullscreen = () => {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
  } else {
    document.exitFullscreen();
  }
};
```

---

## 🎓 EDUCATIONAL STANDARDS ALIGNMENT

### Science of Reading
- ✅ Explicit phonics instruction
- ✅ Systematic scope and sequence
- ✅ Phonemic awareness activities
- ✅ Decodable text practice
- ✅ High-frequency word instruction

### UFLI Foundations
- ✅ Lesson 54 Day 1 structure
- ✅ Visual drill (18 letters)
- ✅ Auditory drill
- ✅ Blending drill
- ✅ New concept: Long A (a_e)
- ✅ Encoding and decoding practice

---

## 🔧 TROUBLESHOOTING

### Issue: Slides not capturing correctly
**Solution:** Ensure `data-slide-container` attribute is on main slide wrapper

### Issue: Timer not working
**Solution:** Check useEffect dependencies and clearInterval cleanup

### Issue: Keyboard navigation conflicts
**Solution:** Add `e.preventDefault()` for navigation keys

### Issue: Export taking too long
**Solution:** Reduce html2canvas scale from 2 to 1.5

### Issue: Videos not loading
**Solution:** Check YouTube embed URLs and iframe permissions

---

## 📈 PERFORMANCE OPTIMIZATION

1. **Lazy Load Slides:**
```typescript
const slides = useMemo(() => [
  <Slide01Welcome />,
  // ... rest of slides
], []);
```

2. **Memoize Heavy Components:**
```typescript
const MemoizedSlide = memo(VideoSlide);
```

3. **Optimize Images:**
- Use WebP format where possible
- Lazy load images
- Use appropriate sizes

4. **Code Splitting:**
```typescript
const VideoSlides = lazy(() => import('./components/slides/VideoSlides'));
```

---

## 🎯 DEPLOYMENT

### Build for Production
```bash
npm run build
```

### Deploy to Vercel
```bash
npm install -g vercel
vercel
```

### Deploy to Netlify
```bash
npm install -g netlify-cli
netlify deploy --prod
```

### Deploy to GitHub Pages
```bash
npm install gh-pages --save-dev
npm run build
npx gh-pages -d dist
```

---

## 📝 FINAL CHECKLIST

Before giving to ChatGPT, ensure you have:

- ✅ Complete component list (all 95 slides)
- ✅ All slide titles documented
- ✅ Theme colors and CSS variables
- ✅ Navigation logic explained
- ✅ Export functionality detailed
- ✅ Timer system implemented
- ✅ Error boundary in place
- ✅ TypeScript types defined
- ✅ Keyboard shortcuts documented
- ✅ YouTube video embed URLs
- ✅ Accessibility features
- ✅ Educational standards alignment

---

## 🚀 QUICK START COMMAND FOR CHATGPT

**Copy this to ChatGPT:**

"Create a professional kindergarten ELA lesson deck with 95 slides, beach theme, using React + TypeScript + Tailwind CSS v4. Include:
- All 95 slides from the complete list above
- Beach-themed colors (soft sand background, ocean blue, coral accent)
- Keyboard navigation + presentation clicker support
- Timer system (5/10/15/20 min presets + custom)
- Export to PDF, PowerPoint, and Images (ZIP)
- UFLI Foundations Lesson 54 Day 1 content
- 3 sight words (away, little, get)
- Savvas reading story 'Kate and Jake Play'
- ErrorBoundary, TypeScript types, proper structure
- Use the exact file structure, component patterns, and code examples from this guide"

---

## 📞 SUPPORT & RESOURCES

- **React Docs:** https://react.dev
- **Tailwind CSS v4:** https://tailwindcss.com
- **UFLI Foundations:** https://ufli.education.ufl.edu
- **Lucide Icons:** https://lucide.dev
- **html2canvas:** https://html2canvas.hertzen.com
- **jsPDF:** https://github.com/parallax/jsPDF
- **pptxgenjs:** https://gitbrent.github.io/PptxGenJS

---

**END OF COMPLETE RECREATION GUIDE**

*This document contains everything needed to fully recreate the Kindergarten ELA Interactive Lesson Deck from scratch.*

---

**Generated:** February 24, 2026  
**Version:** 1.0  
**Total Slides:** 95  
**Framework:** React 18.3.1 + TypeScript + Vite + Tailwind CSS v4

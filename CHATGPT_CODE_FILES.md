# Key Code Files for ChatGPT

Copy this entire file into ChatGPT along with the PROJECT_SUMMARY.md

---

## File 1: package.json

```json
{
  "name": "@figma/my-make-file",
  "private": true,
  "version": "0.0.1",
  "type": "module",
  "dependencies": {
    "@emotion/react": "11.14.0",
    "@emotion/styled": "11.14.1",
    "@mui/icons-material": "7.3.5",
    "@mui/material": "7.3.5",
    "@radix-ui/react-*": "[20+ radix components]",
    "lucide-react": "0.487.0",
    "motion": "12.23.24",
    "react": "18.3.1",
    "react-dom": "18.3.1",
    "recharts": "2.15.2",
    "sonner": "2.0.3"
  },
  "devDependencies": {
    "@tailwindcss/vite": "4.1.12",
    "tailwindcss": "4.1.12",
    "vite": "6.3.5"
  }
}
```

---

## File 2: /src/app/components/slides/RoadmapWrappers.tsx

```typescript
import { Slide03Roadmap } from './Slide03Roadmap';

// Initial roadmap - Songs is current (what we're going into)
export function RoadmapInitial(props: any) {
  return <Slide03Roadmap onGoToSlide={props.onGoToSlide} currentStep={0} />;
}

// After Songs - UFLI is current
export function RoadmapAfterSongs(props: any) {
  return <Slide03Roadmap onGoToSlide={props.onGoToSlide} currentStep={1} />;
}

// After UFLI - Sight Words is current
export function RoadmapAfterUFLI(props: any) {
  return <Slide03Roadmap onGoToSlide={props.onGoToSlide} currentStep={2} />;
}

// After Sight Words - Savvas is current
export function RoadmapAfterSightWords(props: any) {
  return <Slide03Roadmap onGoToSlide={props.onGoToSlide} currentStep={3} />;
}

// After Savvas - Celebration is current
export function RoadmapAfterSavvas(props: any) {
  return <Slide03Roadmap onGoToSlide={props.onGoToSlide} currentStep={4} />;
}
```

---

## File 3: /src/app/components/UFLISlideLayout.tsx

```typescript
import { ReactNode } from 'react';
import { Clock } from 'lucide-react';

interface UFLISlideLayoutProps {
  children: ReactNode;
  timerProps?: {
    minutes: number;
    seconds: number;
    running: boolean;
    onToggle: () => void;
  } | null;
}

export function UFLISlideLayout({ 
  children, 
  timerProps
}: UFLISlideLayoutProps) {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center relative overflow-hidden"
      style={{
        background: '#F4E9DA'
      }}
    >
      {/* Timer in top right */}
      {timerProps && (
        <div className="absolute top-6 right-6 z-10">
          <div className="flex items-center gap-2">
            <div 
              className="relative flex items-center justify-center w-16 h-16 cursor-pointer"
              onClick={timerProps.onToggle}
              style={{
                background: `conic-gradient(var(--ocean-blue) ${(timerProps.seconds / (timerProps.minutes * 60)) * 100}%, var(--seafoam) ${(timerProps.seconds / (timerProps.minutes * 60)) * 100}%)`,
                borderRadius: '50%',
                animation: timerProps.running ? 'pulse 2s infinite' : 'none'
              }}
            >
              <div className="absolute inset-1 bg-white rounded-full flex items-center justify-center">
                <div className="text-center">
                  <Clock className="w-4 h-4 mx-auto mb-0.5" style={{ color: 'var(--ocean-blue)' }} />
                  <div className="text-xs font-semibold" style={{ color: 'var(--deep-navy)' }}>
                    {Math.floor(timerProps.seconds / 60)}:{(timerProps.seconds % 60).toString().padStart(2, '0')}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Content - 80% of screen */}
      <div className="flex items-center justify-center" style={{ height: '80%', width: '80%' }}>
        {children}
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.8; }
        }
      `}</style>
    </div>
  );
}
```

---

## File 4: /src/styles/theme.css (Color Variables)

```css
:root {
  /* Beach Theme Colors */
  --soft-sand: #F4E9DA;
  --seafoam: #CFE8E5;
  --ocean-blue: #6FA8DC;
  --coral-accent: #F4A7A1;
  --deep-navy: #2F3E46;
  
  /* Typography */
  --font-header: 'Poppins', sans-serif;
  --font-body: 'Nunito', sans-serif;
  
  /* Tailwind theme mappings */
  --background: #F4E9DA;
  --foreground: #2F3E46;
  --primary: #6FA8DC;
  --accent: #F4A7A1;
  --secondary: #CFE8E5;
}
```

---

## File 5: App.tsx Structure (Simplified)

```typescript
import { useState, useEffect } from 'react';
import { SlideNavigation } from './components/SlideNavigation';
// ... 100+ slide imports

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Timer state
  const [timerSeconds, setTimerSeconds] = useState(0);
  const [timerRunning, setTimerRunning] = useState(false);
  const [timerSession, setTimerSession] = useState<number | null>(null);

  // 102 slides array
  const [slides] = useState(() => {
    const allSlides = [
      { component: Slide01Welcome, title: "Welcome" },
      { component: Slide02ICanStatements, title: "Learning Targets" },
      { component: Slide02Navigation, title: "Learning Journey" },
      { component: RoadmapInitial, title: "Songs" }, // Slide 3
      { component: Slide04AlphabetSong, title: "Alphabet Song" },
      { component: Slide05ShortASong, title: "Short A Song" },
      { component: Slide06LongASong, title: "Long A Song" },
      { component: RoadmapAfterSongs, title: "UFLI" }, // Slide 7
      // ... UFLI slides 8-66
      { component: RoadmapAfterUFLI, title: "Sight Words" }, // Slide 67
      // ... Sight word slides 68-74
      { component: RoadmapAfterSightWords, title: "Savvas" }, // Slide 75
      // ... Story slides 76-89
      { component: RoadmapAfterSavvas, title: "Celebration" }, // Slide 90
      // ... Reflection slides 91-102
    ];
    return allSlides;
  });

  // Timer management by session (lines 211-258)
  useEffect(() => {
    if (currentSlide === 10) { // Phonemic Awareness
      setTimerSeconds(2 * 60);
      setTimerSession(1);
      setTimerRunning(true);
    } else if (currentSlide === 12) { // Visual Drill
      setTimerSeconds(3 * 60);
      setTimerSession(2);
      setTimerRunning(true);
    }
    // ... 3 more timer sessions
  }, [currentSlide, timerSession]);

  // Timer countdown with audio alerts
  useEffect(() => {
    if (!timerRunning || timerSeconds <= 0) return;
    
    const timer = setInterval(() => {
      setTimerSeconds((prev) => {
        const newTime = Math.max(0, prev - 1);
        
        // Beep at 10 seconds
        if (newTime > 0 && newTime <= 10) {
          const beep = new Audio();
          beep.src = 'data:audio/wav;base64,...';
          beep.play().catch(() => {});
        }
        
        // Buzz when time's up
        if (prev === 1 && newTime === 0) {
          const buzz = new Audio();
          buzz.src = 'data:audio/wav;base64,...';
          buzz.play().catch(() => {});
        }
        
        return newTime;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [timerRunning, timerSeconds]);

  // Keyboard navigation (lines 315-334)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (['ArrowRight', 'ArrowDown', 'PageDown', ' '].includes(e.key)) {
        e.preventDefault();
        if (currentSlide < slides.length - 1) {
          setCurrentSlide(currentSlide + 1);
        }
      } else if (['ArrowLeft', 'ArrowUp', 'PageUp'].includes(e.key)) {
        e.preventDefault();
        if (currentSlide > 0) {
          setCurrentSlide(currentSlide - 1);
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide, slides.length]);

  // Render current slide with timer props
  const CurrentSlideComponent = slides[currentSlide]?.component;
  const timerProps = getTimerProps(); // Returns timer props or null

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <CurrentSlideComponent 
        onGoToSlide={(index: number) => setCurrentSlide(index)}
        timerProps={timerProps}
      />
      <SlideNavigation 
        currentSlide={currentSlide}
        totalSlides={slides.length}
        onNext={() => setCurrentSlide(Math.min(currentSlide + 1, slides.length - 1))}
        onPrevious={() => setCurrentSlide(Math.max(currentSlide - 1, 0))}
      />
    </div>
  );
}
```

---

## File 6: Project Structure

```
/src
  /app
    App.tsx (main application - 400+ lines)
    /components
      SlideNavigation.tsx
      TableOfContents.tsx
      TeacherNotes.tsx
      Timer.tsx
      UFLISlideLayout.tsx
      SlideLayout.tsx
      
      /slides (100+ files)
        RoadmapWrappers.tsx ⭐
        Slide01Welcome.tsx
        Slide02ICanStatements.tsx
        Slide03Roadmap.tsx ⭐
        VideoSlides.tsx
        FormativeCheckSlides.tsx
        [90+ UFLI/sight word/story slides]
        
      /ui (40+ shadcn components)
        button.tsx
        card.tsx
        dialog.tsx
        [etc...]
        
  /styles
    theme.css ⭐
    tailwind.css
    fonts.css
    
  /imports
    [Figma SVG assets]
```

---

## Key Insights for Evaluation

1. **Timer System:** Centralized in App.tsx, passes down via props, 5 distinct sessions
2. **Navigation:** Keyboard shortcuts, roadmap circles, next/prev buttons all integrated
3. **Type Safety:** RoadmapWrappers uses `props: any` to handle dynamic prop passing
4. **Theming:** CSS variables in theme.css, Tailwind v4 without config file
5. **Content:** 102 slides spanning full 60-minute lesson with Science of Reading alignment
6. **Audio Feedback:** Base64-encoded beep/buzz sounds for timer alerts
7. **Responsive:** Designed for projection (classroom smartboard/screen)

---

**Total Lines of Code:** ~5,000+ across all files  
**Main Components:** 15  
**Slide Components:** 100+  
**UI Components:** 40+

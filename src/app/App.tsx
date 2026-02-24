import { useState, useEffect } from 'react';
import { SlideNavigation } from './components/SlideNavigation';
import { TableOfContents } from './components/TableOfContents';
import { ErrorBoundary } from './components/ErrorBoundary';

// Import all slides
import { Slide01Welcome } from './components/slides/Slide01Welcome';
import { Slide02ICanStatements } from './components/slides/Slide02ICanStatements';
import { Slide02Navigation } from './components/slides/Slide02Navigation';
import { RoadmapInitial, RoadmapAfterSongs, RoadmapAfterUFLI, RoadmapAfterSightWords, RoadmapAfterSavvas } from './components/slides/RoadmapWrappers';
import { Slide04AlphabetSong, Slide05ShortASong, Slide06LongASong } from './components/slides/VideoSlides';
import { Slide07AUFLITitle } from './components/slides/Slide07AUFLITitle';
import { Slide07BUFLISchedule } from './components/slides/Slide07BUFLISchedule';
import { Slide07CUFLIPhonemic } from './components/slides/Slide07CUFLIPhonemic';
import { 
  FormativeCheck1Word, 
  FormativeCheck1Answer, 
  FormativeCheck2Word, 
  FormativeCheck2Answer,
  FormativeCheck3Word,
  FormativeCheck3Answer,
  FormativeCheck4Word,
  FormativeCheck4Answer,
  FormativeCheck5Word,
  FormativeCheck5Answer,
  FormativeCheck6Word,
  FormativeCheck6Answer
} from './components/slides/FormativeCheckSlides';
import { Slide09ASchedule } from './components/slides/Slide09ASchedule';
import { Slide09BVisualDrill } from './components/slides/Slide09BVisualDrill';
import { Slide09CLetterS } from './components/slides/Slide09CLetterS';
import { Slide09DLetterA } from './components/slides/Slide09DLetterA';
import { Slide09ELetterI } from './components/slides/Slide09ELetterI';
import { Slide09FLetterO } from './components/slides/Slide09FLetterO';
import { Slide09GLetterE } from './components/slides/Slide09GLetterE';
import { Slide09HLetterU } from './components/slides/Slide09HLetterU';
import { Slide09ILetterN } from './components/slides/Slide09ILetterN';
import { Slide09JLetterNN } from './components/slides/Slide09JLetterNN';
import { Slide09KLetterT } from './components/slides/Slide09KLetterT';
import { Slide09LLetterP } from './components/slides/Slide09LLetterP';
import { Slide09MLetterD } from './components/slides/Slide09MLetterD';
import { Slide09NLetterX } from './components/slides/Slide09NLetterX';
import { Slide09OLetterC } from './components/slides/Slide09OLetterC';
import { Slide09PLetterG } from './components/slides/Slide09PLetterG';
import { Slide09QLetterL } from './components/slides/Slide09QLetterL';
import { Slide09RLetterV } from './components/slides/Slide09RLetterV';
import { Slide09SScheduleAuditory } from './components/slides/Slide09SScheduleAuditory';
import { Slide09TAuditoryDrill } from './components/slides/Slide09TAuditoryDrill';
import { Slide09UScheduleBlending } from './components/slides/Slide09UScheduleBlending';
import { Slide09VBlendingDrillTitle } from './components/slides/Slide09VBlendingDrillTitle';
import { Slide09WBlendingBoard } from './components/slides/Slide09WBlendingBoard';
import { Slide09XScheduleNewConcept } from './components/slides/Slide09XScheduleNewConcept';
import { Slide09YNewConcept } from './components/slides/Slide09YNewConcept';
import { Slide09ZLetterAApple } from './components/slides/Slide09ZLetterAApple';
import { Slide09AALetterAAcorn } from './components/slides/Slide09AALetterAAcorn';
import { Slide09ABPatternAE } from './components/slides/Slide09ABPatternAE';
import { Slide09ACPatternMade } from './components/slides/Slide09ACPatternMade';
import { Slide09ADPatternTape } from './components/slides/Slide09ADPatternTape';
import { Slide09AEPatternWords } from './components/slides/Slide09AEPatternWords';
import { Slide09AFPatternTap } from './components/slides/Slide09AFPatternTap';
import { Slide09AGPatternTapeE } from './components/slides/Slide09AGPatternTapeE';
import { Slide09AHPatternCap } from './components/slides/Slide09AHPatternCap';
import { Slide09AIPatternCape } from './components/slides/Slide09AIPatternCape';
import { Slide09AJ1PatternMad } from './components/slides/Slide09AJ1PatternMad';
import { Slide09AJ2PatternMade } from './components/slides/Slide09AJ2PatternMade';
import { Slide09AJSoundCard } from './components/slides/Slide09AJSoundCard';
import { Slide09AJ3WatchMeRead } from './components/slides/Slide09AJ3WatchMeRead';
import { Slide09AKReadTogether } from './components/slides/Slide09AKReadTogether';
import { Slide09AL1ReadTogether } from './components/slides/Slide09AL1ReadTogether';
import { Slide09AL2WatchMeSpell } from './components/slides/Slide09AL2WatchMeSpell';
import { Slide09AL3SpellTogether } from './components/slides/Slide09AL3SpellTogether';
import { Slide09AL4ScheduleSummary } from './components/slides/Slide09AL4ScheduleSummary';
import { Slide09AM_ShowWhatYouKnowTransition } from './components/slides/Slide09AM_ShowWhatYouKnowTransition';
import { Slide10ASightWordAway } from './components/slides/Slide10ASightWordAway';
import { Slide10A1SpellAway } from './components/slides/Slide10A1SpellAway';
import { Slide10CSightWordLittle } from './components/slides/Slide10CSightWordLittle';
import { Slide10C1SpellLittle } from './components/slides/Slide10C1SpellLittle';
import { Slide10DSightWordGet } from './components/slides/Slide10DSightWordGet';
import { Slide10D1SpellGet } from './components/slides/Slide10D1SpellGet';
import { Slide10E_ShowWhatYouKnowSightWords } from './components/slides/Slide10E_ShowWhatYouKnowSightWords';
import { Slide11BSightWordFlash } from './components/slides/Slide11BSightWordFlash';
import { Slide18AAuthorsPurpose } from './components/slides/Slide18AAuthorsPurpose';
import { Slide18Vocabulary } from './components/slides/Slide18Vocabulary';
import { Slide12BookCover } from './components/slides/Slide12BookCover';
import { Slide12AStoryPage154 } from './components/slides/Slide12AStoryPage154';
import { Slide12BStoryPage155 } from './components/slides/Slide12BStoryPage155';
import { Slide12CStoryPage156 } from './components/slides/Slide12CStoryPage156';
import { Slide12DStoryPage157 } from './components/slides/Slide12DStoryPage157';
import { Slide12EStoryPage158 } from './components/slides/Slide12EStoryPage158';
import { Slide12FStoryPage159 } from './components/slides/Slide12FStoryPage159';
import { Slide12GStoryPage160 } from './components/slides/Slide12GStoryPage160';
import { Slide12HStoryPage161 } from './components/slides/Slide12HStoryPage161';
import { Slide18AAuthorsPurposeReview } from './components/slides/Slide18AAuthorsPurposeReview';
import { Slide18A1TurnAndTalk } from './components/slides/Slide18A1TurnAndTalk';
import { Slide13Discussion } from './components/slides/Slide13Discussion';
import { Slide13ReflectionCheckoff } from './components/slides/Slide13ReflectionCheckoff';
import { Slide16Celebration } from './components/slides/Slide16Celebration';

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Timer state management
  const [timerSeconds, setTimerSeconds] = useState(0);
  const [timerRunning, setTimerRunning] = useState(false);
  const [timerSession, setTimerSession] = useState<number | null>(null);

  // Create slides array with randomized letter slides (12-27)
  const [slides] = useState(() => {
    const allSlides = [
      { component: Slide01Welcome, title: "Welcome" },
      { component: Slide02ICanStatements, title: "Learning Targets" },
      { component: Slide02Navigation, title: "Learning Journey" },
      { component: RoadmapInitial, title: "Songs" },
      { component: Slide04AlphabetSong, title: "Alphabet Song" },
      { component: Slide05ShortASong, title: "Short A Song" },
      { component: Slide06LongASong, title: "Long A Song" },
      { component: RoadmapAfterSongs, title: "UFLI" },
      { component: Slide07AUFLITitle, title: "Lesson 54 - Day 1" },
      { component: Slide07BUFLISchedule, title: "Our Schedule - Day 1" },
      { component: Slide07CUFLIPhonemic, title: "Phonemic Awareness" },
      { component: Slide09ASchedule, title: "Phonemic Awareness - Check!" },
      { component: Slide09BVisualDrill, title: "Visual Drill" },
      { component: Slide09CLetterS, title: "Letter S" },
      { component: Slide09DLetterA, title: "Letter A" },
      { component: Slide09ELetterI, title: "Letter I" },
      { component: Slide09FLetterO, title: "Letter O" },
      { component: Slide09GLetterE, title: "Letter E" },
      { component: Slide09HLetterU, title: "Letter U" },
      { component: Slide09ILetterN, title: "Letter N" },
      { component: Slide09JLetterNN, title: "Letter M" },
      { component: Slide09KLetterT, title: "Letter T" },
      { component: Slide09LLetterP, title: "Letter P" },
      { component: Slide09MLetterD, title: "Letter D" },
      { component: Slide09NLetterX, title: "Letter X" },
      { component: Slide09OLetterC, title: "Letter C" },
      { component: Slide09PLetterG, title: "Letter G" },
      { component: Slide09QLetterL, title: "Letter L" },
      { component: Slide09RLetterV, title: "Letter V" },
      { component: Slide09SScheduleAuditory, title: "Visual Drill - Check!" },
      { component: Slide09TAuditoryDrill, title: "Auditory Drill" },
      { component: Slide09UScheduleBlending, title: "Auditory Drill - Check!" },
      { component: Slide09VBlendingDrillTitle, title: "Blending Drill" },
      { component: Slide09WBlendingBoard, title: "Blending Board" },
      { component: Slide09XScheduleNewConcept, title: "Blending Drill - Check!" },
      { component: Slide09YNewConcept, title: "New Concept" },
      { component: Slide09ZLetterAApple, title: "Short Letter A - Apple" },
      { component: Slide09AALetterAAcorn, title: "Long Letter A - Acorn" },
      { component: Slide09ABPatternAE, title: "A_E Pattern" },
      { component: Slide09ACPatternMade, title: "Made" },
      { component: Slide09ADPatternTape, title: "Tape" },
      { component: Slide09AEPatternWords, title: "A_E Words" },
      { component: Slide09AFPatternTap, title: "Tap" },
      { component: Slide09AGPatternTapeE, title: "Tape" },
      { component: Slide09AHPatternCap, title: "Cap" },
      { component: Slide09AIPatternCape, title: "Cape" },
      { component: Slide09AJ1PatternMad, title: "Mad" },
      { component: Slide09AJ2PatternMade, title: "Made" },
      { component: Slide09AJSoundCard, title: "Sound Card" },
      { component: Slide09AJ3WatchMeRead, title: "Watch Me Read" },
      { component: Slide09AKReadTogether, title: "Read Together" },
      { component: Slide09AL1ReadTogether, title: "Read Together - Pt. 2" },
      { component: Slide09AL2WatchMeSpell, title: "Watch Me Spell" },
      { component: Slide09AL3SpellTogether, title: "Spell Together" },
      { component: Slide09AL4ScheduleSummary, title: "New Concept - Check!" },
      { component: Slide09AM_ShowWhatYouKnowTransition, title: "Show What You Know" },
      { component: FormativeCheck1Word, title: "Question 1" },
      { component: FormativeCheck1Answer, title: "Question 1 Answer" },
      { component: FormativeCheck2Word, title: "Question 2" },
      { component: FormativeCheck2Answer, title: "Question 2 Answer" },
      { component: FormativeCheck3Word, title: "Question 3" },
      { component: FormativeCheck3Answer, title: "Question 3 Answer" },
      { component: FormativeCheck4Word, title: "Question 4" },
      { component: FormativeCheck4Answer, title: "Question 4 Answer" },
      { component: FormativeCheck5Word, title: "Question 5" },
      { component: FormativeCheck5Answer, title: "Question 5 Answer" },
      { component: FormativeCheck6Word, title: "Question 6" },
      { component: FormativeCheck6Answer, title: "Question 6 Answer" },
      { component: RoadmapAfterUFLI, title: "Sight Words" },
      { component: Slide10ASightWordAway, title: "Sight Word - Away" },
      { component: Slide10A1SpellAway, title: "Spell Word - Away" },
      { component: Slide10CSightWordLittle, title: "Sight Word - Little" },
      { component: Slide10C1SpellLittle, title: "Spell Word - Little" },
      { component: Slide10DSightWordGet, title: "Sight Word - Get" },
      { component: Slide10D1SpellGet, title: "Spell Word - Get" },
      { component: Slide10E_ShowWhatYouKnowSightWords, title: "Show What You Know" },
      { component: Slide11BSightWordFlash, title: "Sight Word Flash Cards" },
      { component: RoadmapAfterSightWords, title: "Savvas" },
      { component: Slide18AAuthorsPurpose, title: "Author's Purpose" },
      { component: Slide18Vocabulary, title: "Vocabulary" },
      { component: Slide12BookCover, title: "Book Cover" },
      { component: Slide12AStoryPage154, title: "Story Page 154" },
      { component: Slide12BStoryPage155, title: "Story Page 155" },
      { component: Slide12CStoryPage156, title: "Story Page 156" },
      { component: Slide12DStoryPage157, title: "Story Page 157" },
      { component: Slide12EStoryPage158, title: "Story Page 158" },
      { component: Slide12FStoryPage159, title: "Story Page 159" },
      { component: Slide12GStoryPage160, title: "Story Page 160" },
      { component: Slide12HStoryPage161, title: "Story Page 161" },
      { component: Slide18AAuthorsPurposeReview, title: "Author's Purpose Review" },
      { component: Slide18A1TurnAndTalk, title: "Turn and Talk" },
      { component: Slide13Discussion, title: "Discussion" },
      { component: RoadmapAfterSavvas, title: "Celebration" },
      { component: Slide13ReflectionCheckoff, title: "Reflection Checkoff" },
      { component: Slide16Celebration, title: "Celebration" }
    ];

    return allSlides;
  });

  const CurrentSlideComponent = slides[currentSlide]?.component;

  // Timer management - determine which timer session based on slide
  useEffect(() => {
    // Session 1: 2 min - Slides 10-11 (Phonemic Awareness → Schedule Day 1)
    if (currentSlide === 10) {
      setTimerSeconds(2 * 60);
      setTimerSession(1);
      setTimerRunning(true); // Auto-start
    } else if (currentSlide === 11 && timerSession !== 1) {
      setTimerSeconds(2 * 60);
      setTimerSession(1);
      setTimerRunning(true); // Auto-start
    }
    // Session 2: 3 min - Slides 12-29 (Visual Drill → Letters → Schedule Auditory)
    else if (currentSlide === 12) {
      setTimerSeconds(3 * 60);
      setTimerSession(2);
      setTimerRunning(true); // Auto-start
    } else if (currentSlide >= 13 && currentSlide <= 29 && timerSession !== 2) {
      setTimerSeconds(3 * 60);
      setTimerSession(2);
      setTimerRunning(true); // Auto-start
    }
    // Session 3: 5 min - Slides 30-31 (Auditory Drill → Schedule Blending)
    else if (currentSlide === 30) {
      setTimerSeconds(5 * 60);
      setTimerSession(3);
      setTimerRunning(true); // Auto-start
    } else if (currentSlide === 31 && timerSession !== 3) {
      setTimerSeconds(5 * 60);
      setTimerSession(3);
      setTimerRunning(true); // Auto-start
    }
    // Session 4: 5 min - Slides 32-33 (Blending Drill Title → Blending Board)
    else if (currentSlide === 32) {
      setTimerSeconds(5 * 60);
      setTimerSession(4);
      setTimerRunning(true); // Auto-start
    } else if (currentSlide === 33 && timerSession !== 4) {
      setTimerSeconds(5 * 60);
      setTimerSession(4);
      setTimerRunning(true); // Auto-start
    }
    // Session 5: 15 min - Slides 34+ (remainder of UFLI content)
    else if (currentSlide === 34) {
      setTimerSeconds(15 * 60);
      setTimerSession(5);
      setTimerRunning(true); // Auto-start
    }
  }, [currentSlide, timerSession]);

  // Timer countdown
  useEffect(() => {
    if (!timerRunning || timerSeconds <= 0) return;
    
    const timer = setInterval(() => {
      setTimerSeconds((prev) => {
        const newTime = Math.max(0, prev - 1);
        
        // Play beep sound when 10 seconds left (and every second until time up)
        if (newTime > 0 && newTime <= 10) {
          const beep = new Audio();
          beep.src = 'data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBSuBzvLZijcIHmm98OScTRARU6vl8bllHgg8lNjxxHwyBSp+zPDajz4IEly28eutWhQLTKLj87prJAU1iPDx1o1A';
          beep.volume = 0.5;
          beep.play().catch(() => {}); // Ignore errors if audio fails
        }
        
        // Play buzz sound when time is up
        if (prev === 1 && newTime === 0) {
          const buzz = new Audio();
          buzz.src = 'data:audio/wav;base64,UklGRhIFAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YW4EAACAgICAgICAgICAgICAgICAgICAgH9/f39/f39/f39/f39/f39+fn5+fn5+fn5+fn5+fn59fX19fX19fX19fX19fXx8fHx8fHx8fHx8fHx7e3t7e3t7e3t7e3t6enp6enp6enp6enl5eXl5eXl5eXl4eHh4eHh4eHd3d3d3d3d2dnZ2dnZ1dXV1dXR0dHR0c3Nzc3JycnJxcXFxcHBwb29vbm5ubW1tbGxsa2traGhoZmZmZGRkYmJiYGBgXl5eXFxcWlpaWFhYVlZWVFRUUlJSUFBQTk5OTExMSkpKSEhIRkZGRERCQkJAQD4+Pjw8PDo6Ojg4ODY2NjQ0NjY2ODg4Ojo6PDw+Pj5AQEJCQkREREZGRkhISEpKSkxMTE5OTlBQUFJSUlRUVFZWVlhYWFpaWlxcXF5eXmBgYGJiYmRkZGZmZmhoaGtra2xsbG1tbW5ubm9vb3BwcHFxcXJycnNzc3R0dHR1dXV1dnZ2d3d3d3h4eHh4eHl5eXl5eXp6enp6enp7e3t7e3t7e3x8fHx8fHx8fX19fX19fX5+fn5+fn5+f39/f39/f3+AgICAgICAgICAgICAgICA';
          buzz.volume = 0.7;
          buzz.play().catch(() => {}); // Ignore errors if audio fails
        }
        
        return newTime;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [timerRunning, timerSeconds]);

  // Determine timer props for current slide
  const getTimerProps = () => {
    // Slides with timer sessions
    if (currentSlide >= 10 && currentSlide <= 11 && timerSession === 1) {
      return { minutes: 2, seconds: timerSeconds, running: timerRunning, onToggle: () => setTimerRunning(!timerRunning) };
    }
    if (currentSlide >= 12 && currentSlide <= 29 && timerSession === 2) {
      return { minutes: 3, seconds: timerSeconds, running: timerRunning, onToggle: () => setTimerRunning(!timerRunning) };
    }
    if (currentSlide >= 30 && currentSlide <= 31 && timerSession === 3) {
      return { minutes: 5, seconds: timerSeconds, running: timerRunning, onToggle: () => setTimerRunning(!timerRunning) };
    }
    if (currentSlide >= 32 && currentSlide <= 33 && timerSession === 4) {
      return { minutes: 5, seconds: timerSeconds, running: timerRunning, onToggle: () => setTimerRunning(!timerRunning) };
    }
    if (currentSlide >= 34 && timerSession === 5) {
      return { minutes: 15, seconds: timerSeconds, running: timerRunning, onToggle: () => setTimerRunning(!timerRunning) };
    }
    return null;
  };

  const timerProps = getTimerProps();

  // Keyboard navigation - supports presentation clickers
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Prevent default behavior for navigation keys to avoid page scrolling
      if (['ArrowRight', 'ArrowLeft', 'ArrowUp', 'ArrowDown', 'PageDown', 'PageUp', ' ', 'n', 'N', 'p', 'P'].includes(e.key)) {
        e.preventDefault();
      }

      // Next slide: Right arrow, Down arrow, Page Down, Space, or 'N'
      // Presentation clickers typically send: PageDown, Space, or ArrowRight
      if ((e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === 'PageDown' || e.key === ' ' || e.key === 'n' || e.key === 'N') && currentSlide < slides.length - 1) {
        setCurrentSlide(currentSlide + 1);
      } 
      // Previous slide: Left arrow, Up arrow, Page Up, or 'P'
      // Presentation clickers typically send: PageUp or ArrowLeft
      else if ((e.key === 'ArrowLeft' || e.key === 'ArrowUp' || e.key === 'PageUp' || e.key === 'p' || e.key === 'P') && currentSlide > 0) {
        setCurrentSlide(currentSlide - 1);
      }
      // Home key - go to first slide
      else if (e.key === 'Home') {
        e.preventDefault();
        setCurrentSlide(0);
      }
      // End key - go to last slide
      else if (e.key === 'End') {
        e.preventDefault();
        setCurrentSlide(slides.length - 1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide, slides.length]);

  // Custom navigation event listener
  useEffect(() => {
    const handleNavigateEvent = (e: Event) => {
      const customEvent = e as CustomEvent;
      if (customEvent.detail?.direction === 'next') {
        handleNext();
      } else if (customEvent.detail?.direction === 'previous') {
        handlePrevious();
      } else if (typeof customEvent.detail?.slideIndex === 'number') {
        handleGoToSlide(customEvent.detail.slideIndex);
      }
    };

    window.addEventListener('navigateToSlide', handleNavigateEvent);
    return () => window.removeEventListener('navigateToSlide', handleNavigateEvent);
  }, [currentSlide, slides.length]);

  const handleNext = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const handlePrevious = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const handleGoToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Safety check
  if (!CurrentSlideComponent) {
    return <div>Loading...</div>;
  }

  // Roadmap slides that need the onGoToSlide function
  const roadmapSlides = [2, 3, 7, 68, 77, 92];
  const isRoadmapSlide = roadmapSlides.includes(currentSlide);

  return (
    <div className="h-screen overflow-hidden flex flex-col" style={{ backgroundColor: 'var(--soft-sand)' }}>
      <div className="flex-1 overflow-hidden" data-slide-container>
        <ErrorBoundary>
          <CurrentSlideComponent 
            onGoToSlide={isRoadmapSlide ? handleGoToSlide : undefined}
            timerProps={timerProps}
          />
        </ErrorBoundary>
      </div>
      <SlideNavigation
        currentSlide={currentSlide}
        totalSlides={slides.length}
        onNext={handleNext}
        onPrevious={handlePrevious}
        onGoToSlide={handleGoToSlide}
        currentTitle={slides[currentSlide]?.title || ''}
      />
      <TableOfContents 
        slides={slides}
        currentSlide={currentSlide}
        onGoToSlide={handleGoToSlide}
        setCurrentSlide={setCurrentSlide}
      />
    </div>
  );
}
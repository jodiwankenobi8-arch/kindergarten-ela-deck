import { createContext, useContext, useState, useEffect, ReactNode, useRef, memo } from 'react';

interface TimerSession {
  id: number;
  duration: number; // in seconds
  label: string;
}

interface TimerContextValue {
  currentSession: number | null;
  isRunning: boolean;
  seconds: number;
  startSession: (sessionId: number) => void;
  toggle: () => void;
  getTimerProps: (sessionId: number) => TimerProps | null;
}

export interface TimerProps {
  minutes: number;
  seconds: number;
  running: boolean;
  onToggle: () => void;
}

const TimerContext = createContext<TimerContextValue | null>(null);

export function useTimerContext() {
  const context = useContext(TimerContext);
  if (!context) {
    throw new Error('useTimerContext must be used within TimerProvider');
  }
  return context;
}

const TIMER_SESSIONS: Record<number, TimerSession> = {
  1: { id: 1, duration: 2 * 60, label: 'Phonemic Awareness' },
  2: { id: 2, duration: 3 * 60, label: 'Visual Drill' },
  3: { id: 3, duration: 5 * 60, label: 'Auditory Drill' },
  4: { id: 4, duration: 5 * 60, label: 'Blending' },
  5: { id: 5, duration: 15 * 60, label: 'New Concept' },
};

export function TimerProvider({ children }: { children: ReactNode }) {
  const [currentSession, setCurrentSession] = useState<number | null>(null);
  const [isRunning, setIsRunning] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const audioContextRef = useRef<{ beep?: HTMLAudioElement; buzz?: HTMLAudioElement }>({});

  // Pre-create audio objects
  useEffect(() => {
    const beep = new Audio();
    beep.src = 'data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBSuBzvLZijcIHmm98OScTRARU6vl8bllHgg8lNjxxHwyBSp+zPDajz4IEly28eutWhQLTKLj87prJAU1iPDx1o1A';
    beep.volume = 0.5;

    const buzz = new Audio();
    buzz.src = 'data:audio/wav;base64,UklGRhIFAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YW4EAACAgICAgICAgICAgICAgICAgICAgH9/f39/f39/f39/f39/f39+fn5+fn5+fn5+fn5+fn59fX19fX19fX19fX19fXx8fHx8fHx8fHx8fHx7e3t7e3t7e3t7e3t6enp6enp6enp6enl5eXl5eXl5eXl4eHh4eHh4eHd3d3d3d3d2dnZ2dnZ1dXV1dXR0dHR0c3Nzc3JycnJxcXFxcHBwb29vbm5ubW1tbGxsa2traGhoZmZmZGRkYmJiYGBgXl5eXFxcWlpaWFhYVlZWVFRUUlJSUFBQTk5OTExMSkpKSEhIRkZGRERCQkJAQD4+Pjw8PDo6Ojg4ODY2NjQ0NjY2ODg4Ojo6PDw+Pj5AQEJCQkREREZGRkhISEpKSkxMTE5OTlBQUFJSUlRUVFZWVlhYWFpaWlxcXF5eXmBgYGJiYmRkZGZmZmhoaGtra2xsbG1tbW5ubm9vb3BwcHFxcXJycnNzc3R0dHR1dXV1dnZ2d3d3d3h4eHh4eHl5eXl5eXp6enp6enp7e3t7e3t7e3x8fHx8fHx8fX19fX19fX5+fn5+fn5+f39/f39/f3+AgICAgICAgICAgICAgICA';
    buzz.volume = 0.7;

    audioContextRef.current = { beep, buzz };

    return () => {
      beep.src = '';
      buzz.src = '';
    };
  }, []);

  // Timer countdown - isolated from parent component
  useEffect(() => {
    if (!isRunning || seconds <= 0 || currentSession === null) return;
    
    const timer = setInterval(() => {
      setSeconds((prev) => {
        const newTime = Math.max(0, prev - 1);
        
        // Play beep sound when 10 seconds left
        if (newTime > 0 && newTime <= 10 && audioContextRef.current.beep) {
          audioContextRef.current.beep.play().catch(() => {});
        }
        
        // Play buzz sound when time is up
        if (prev === 1 && newTime === 0) {
          if (audioContextRef.current.buzz) {
            audioContextRef.current.buzz.play().catch(() => {});
          }
          setIsRunning(false);
        }
        
        return newTime;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isRunning, seconds, currentSession]);

  const startSession = (sessionId: number) => {
    const session = TIMER_SESSIONS[sessionId];
    if (!session) return;
    
    // Only restart if it's a different session or if the timer has run out
    if (currentSession !== sessionId || seconds === 0) {
      setCurrentSession(sessionId);
      setSeconds(session.duration);
      setIsRunning(true);
    }
  };

  const toggle = () => {
    setIsRunning((prev) => !prev);
  };

  const getTimerProps = (sessionId: number): TimerProps | null => {
    if (currentSession !== sessionId) return null;
    
    const session = TIMER_SESSIONS[sessionId];
    if (!session) return null;

    return {
      minutes: Math.floor(session.duration / 60),
      seconds,
      running: isRunning,
      onToggle: toggle,
    };
  };

  const value: TimerContextValue = {
    currentSession,
    isRunning,
    seconds,
    startSession,
    toggle,
    getTimerProps,
  };

  return <TimerContext.Provider value={value}>{children}</TimerContext.Provider>;
}

// Memoized timer display component to prevent unnecessary re-renders in slides
export const TimerDisplay = memo(function TimerDisplay({ sessionId }: { sessionId: number }) {
  const { getTimerProps } = useTimerContext();
  const timerProps = getTimerProps(sessionId);
  
  if (!timerProps) return null;
  
  // This component can be enhanced with the UFLISlideLayout timer UI
  return null; // The actual display is handled by UFLISlideLayout
});

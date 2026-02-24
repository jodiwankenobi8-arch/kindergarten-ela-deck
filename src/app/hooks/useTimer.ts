import { useState, useEffect, useRef } from 'react';

interface UseTimerOptions {
  initialSeconds: number;
  autoStart?: boolean;
  onComplete?: () => void;
}

interface UseTimerReturn {
  seconds: number;
  isRunning: boolean;
  toggle: () => void;
  reset: (newSeconds?: number) => void;
  start: () => void;
  stop: () => void;
}

export function useTimer({ 
  initialSeconds, 
  autoStart = false, 
  onComplete 
}: UseTimerOptions): UseTimerReturn {
  const [seconds, setSeconds] = useState(initialSeconds);
  const [isRunning, setIsRunning] = useState(autoStart);
  const audioContextRef = useRef<{ beep?: HTMLAudioElement; buzz?: HTMLAudioElement }>({});

  // Pre-create audio objects for better performance
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

  // Timer countdown effect
  useEffect(() => {
    if (!isRunning || seconds <= 0) return;
    
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
          if (onComplete) {
            onComplete();
          }
        }
        
        return newTime;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isRunning, seconds, onComplete]);

  const toggle = () => setIsRunning((prev) => !prev);
  const start = () => setIsRunning(true);
  const stop = () => setIsRunning(false);
  const reset = (newSeconds?: number) => {
    setSeconds(newSeconds ?? initialSeconds);
    setIsRunning(false);
  };

  return {
    seconds,
    isRunning,
    toggle,
    reset,
    start,
    stop,
  };
}

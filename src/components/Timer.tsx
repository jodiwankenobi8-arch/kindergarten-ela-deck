import { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

interface TimerProps {
  minutes: number;
  active?: boolean;
}

export function Timer({ minutes, active = false }: TimerProps) {
  const [secondsLeft, setSecondsLeft] = useState(minutes * 60);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    setSecondsLeft(minutes * 60);
    setIsRunning(false);
  }, [minutes, active]);

  useEffect(() => {
    if (!isRunning || secondsLeft <= 0) return;
    
    const timer = setInterval(() => {
      setSecondsLeft((prev) => Math.max(0, prev - 1));
    }, 1000);

    return () => clearInterval(timer);
  }, [isRunning, secondsLeft]);

  const displayMinutes = Math.floor(secondsLeft / 60);
  const displaySeconds = secondsLeft % 60;
  const progress = (secondsLeft / (minutes * 60)) * 100;

  return (
    <div className="flex items-center gap-2">
      <div 
        className="relative flex items-center justify-center w-16 h-16 cursor-pointer"
        onClick={() => setIsRunning(!isRunning)}
        style={{
          background: `conic-gradient(var(--ocean-blue) ${progress}%, var(--seafoam) ${progress}%)`,
          borderRadius: '50%',
          animation: isRunning ? 'pulse 2s infinite' : 'none'
        }}
      >
        <div className="absolute inset-1 bg-white rounded-full flex items-center justify-center">
          <div className="text-center">
            <Clock className="w-4 h-4 mx-auto mb-0.5" style={{ color: 'var(--ocean-blue)' }} />
            <div className="text-xs font-semibold" style={{ color: 'var(--deep-navy)' }}>
              {displayMinutes}:{displaySeconds.toString().padStart(2, '0')}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

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
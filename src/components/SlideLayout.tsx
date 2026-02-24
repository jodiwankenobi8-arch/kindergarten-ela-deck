import { ReactNode } from 'react';
import { Timer } from './Timer';

interface SlideLayoutProps {
  type?: 'welcome' | 'instruction' | 'video' | 'interactive' | 'placeholder' | 'review';
  title?: string;
  subtitle?: string;
  children: ReactNode;
  timer?: number;
  activeTimer?: boolean;
}

export function SlideLayout({ 
  type = 'instruction', 
  title, 
  subtitle, 
  children, 
  timer,
  activeTimer = false
}: SlideLayoutProps) {
  return (
    <div className="w-full h-full flex flex-col relative overflow-hidden"
      style={{
        background: '#F4E9DA'
      }}
    >
      {/* Wave decoration for welcome slides */}
      {type === 'welcome' && (
        <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full">
            <path 
              d="M0,0 Q300,50 600,0 T1200,0 L1200,120 L0,120 Z" 
              fill="#6FA8DC" 
              opacity="0.3"
              className="animate-wave"
            />
            <path 
              d="M0,20 Q300,70 600,20 T1200,20 L1200,120 L0,120 Z" 
              fill="#6FA8DC" 
              opacity="0.2"
              className="animate-wave-slow"
            />
          </svg>
        </div>
      )}

      {/* Timer in top right */}
      {timer && (
        <div className="absolute top-6 right-6 z-10">
          <Timer minutes={timer} active={activeTimer} />
        </div>
      )}

      {/* Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-12 py-4 relative z-0">
        {title && (
          <h1 
            className="text-6xl mb-2 text-center"
            style={{ 
              color: 'var(--deep-navy)',
              fontFamily: 'var(--font-header)'
            }}
          >
            {title}
          </h1>
        )}
        {subtitle && (
          <p 
            className="text-2xl text-center mb-4"
            style={{ color: 'var(--ocean-blue)' }}
          >
            {subtitle}
          </p>
        )}
        <div className="w-full max-w-6xl">
          {children}
        </div>
      </div>

      <style>{`
        @keyframes wave {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(-25px); }
        }
        @keyframes wave-slow {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(-15px); }
        }
        .animate-wave {
          animation: wave 3s ease-in-out infinite;
        }
        .animate-wave-slow {
          animation: wave-slow 4s ease-in-out infinite;
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.8; }
        }
      `}</style>
    </div>
  );
}
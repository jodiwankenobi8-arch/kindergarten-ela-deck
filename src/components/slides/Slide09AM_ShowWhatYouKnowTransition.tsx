export function Slide09AM_ShowWhatYouKnowTransition() {
  return (
    <div 
      className="h-full w-full flex flex-col items-center justify-start pt-32 relative"
      style={{
        background: 'linear-gradient(135deg, var(--ocean-blue) 0%, var(--sky-blue) 100%)'
      }}
    >
      {/* Decorative elements */}
      <div className="absolute top-8 left-8 text-6xl opacity-30">⭐</div>
      <div className="absolute top-16 right-16 text-5xl opacity-30">✨</div>
      <div className="absolute bottom-16 left-20 text-5xl opacity-30">🌟</div>
      <div className="absolute bottom-12 right-24 text-6xl opacity-30">⭐</div>

      {/* Main content */}
      <div className="text-center space-y-8 z-10">
        <div 
          className="text-6xl mb-4"
          style={{
            filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.1))'
          }}
        >
          ⭐
        </div>
        
        <h1 
          className="text-[120px] leading-tight mb-4"
          style={{
            color: 'var(--white)',
            textShadow: '4px 4px 8px rgba(0,0,0,0.3)',
            fontWeight: 700
          }}
        >
          Show What You Know!
        </h1>
        
        <p 
          className="text-6xl"
          style={{
            color: 'var(--white)',
            textShadow: '2px 2px 4px rgba(0,0,0,0.2)',
            fontWeight: 500
          }}
        >
          Time to show your learning ✏️
        </p>
      </div>
    </div>
  );
}
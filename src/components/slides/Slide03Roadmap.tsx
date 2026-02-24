import { SlideLayout } from '../SlideLayout';
import { Music, BookOpen, Eye, BookText, CheckCircle } from 'lucide-react';

interface Slide03RoadmapProps {
  onGoToSlide?: (index: number) => void;
  currentStep?: number; // 0=Songs, 1=UFLI, 2=Sight Words, 3=Savvas, 4=Celebration
}

export function Slide03Roadmap({ onGoToSlide, currentStep = -1 }: Slide03RoadmapProps) {
  const activities = [
    { icon: Music, label: "Songs", time: "8 min", color: '#F4A7A1', slideIndex: 3 },
    { icon: BookOpen, label: "UFLI Phonics", time: "30 min", color: '#6FA8DC', slideIndex: 7 },
    { icon: Eye, label: "Sight Words", time: "8 min", color: '#CFE8E5', slideIndex: 68 },
    { icon: BookText, label: "Savvas Story", time: "15 min", color: '#F4A7A1', slideIndex: 77 },
    { icon: CheckCircle, label: "Celebration", time: "2 min", color: '#6FA8DC', slideIndex: 92 }
  ];

  return (
    <SlideLayout title="Today's Journey" subtitle={currentStep === -1 ? "What adventures await us!" : "Where we are now"}>
      <div className="flex justify-around items-center gap-4">
        {activities.map((activity, index) => {
          const isCurrent = index === currentStep;
          
          // Current is larger and in color, all others are gray and regular size
          const circleColor = isCurrent ? activity.color : '#D1D5DB';
          const textColor = isCurrent ? 'var(--deep-navy)' : '#9CA3AF';
          const timeColor = isCurrent ? 'var(--ocean-blue)' : '#D1D5DB';
          
          // Use scale transform on the entire container - everything scales together
          const scale = isCurrent ? 1.3 : 1;
          
          return (
            <div 
              key={index} 
              className="flex flex-col items-center gap-3 transition-all duration-300"
              style={{ 
                transform: `scale(${scale})`,
                transformOrigin: 'center'
              }}
            >
              <div
                onClick={() => {
                  if (onGoToSlide) {
                    onGoToSlide(activity.slideIndex);
                  } else {
                    alert(`onGoToSlide is not defined! Trying to go to ${activity.label} at index ${activity.slideIndex}`);
                  }
                }}
                className="w-24 h-24 rounded-full flex items-center justify-center shadow-lg cursor-pointer transition-all duration-300 hover:scale-110 hover:shadow-2xl"
                style={{ 
                  backgroundColor: circleColor,
                  border: isCurrent ? '4px solid var(--coral)' : 'none',
                  boxShadow: isCurrent ? '0 0 20px rgba(244, 167, 161, 0.5)' : undefined
                }}
              >
                <activity.icon 
                  className="w-12 h-12 text-white transition-all duration-300"
                />
              </div>
              <p className="text-2xl font-bold text-center transition-all duration-300" style={{ 
                color: textColor
              }}>
                {activity.label}
              </p>
              <p className="text-xl transition-all duration-300" style={{ 
                color: timeColor
              }}>
                {activity.time}
              </p>
            </div>
          );
        })}
      </div>
    </SlideLayout>
  );
}
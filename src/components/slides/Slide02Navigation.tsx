import { SlideLayout } from '../SlideLayout';
import { Music, BookOpen, Eye, BookText, CheckCircle } from 'lucide-react';

interface Slide02NavigationProps {
  onGoToSlide?: (index: number) => void;
}

export function Slide02Navigation({ onGoToSlide }: Slide02NavigationProps) {
  const activities = [
    { icon: Music, label: "Songs", time: "8 min", color: '#F4A7A1', slideIndex: 3 },
    { icon: BookOpen, label: "UFLI Phonics", time: "30 min", color: '#6FA8DC', slideIndex: 7 },
    { icon: Eye, label: "Sight Words", time: "8 min", color: '#CFE8E5', slideIndex: 68 },
    { icon: BookText, label: "Savvas Story", time: "15 min", color: '#F4A7A1', slideIndex: 77 },
    { icon: CheckCircle, label: "Celebration", time: "2 min", color: '#6FA8DC', slideIndex: 92 }
  ];

  return (
    <SlideLayout title="Today's Reading Journey">
      <div className="flex justify-around items-center gap-4">
        {activities.map((activity, index) => (
          <div key={index} className="flex flex-col items-center gap-3">
            <div
              onClick={() => {
                if (onGoToSlide) {
                  onGoToSlide(activity.slideIndex);
                }
              }}
              className="w-24 h-24 rounded-full flex items-center justify-center shadow-lg cursor-pointer transition-transform hover:scale-110 hover:shadow-2xl"
              style={{ backgroundColor: activity.color }}
            >
              <activity.icon className="w-12 h-12 text-white" />
            </div>
            <p className="text-2xl font-bold text-center" style={{ color: 'var(--deep-navy)' }}>
              {activity.label}
            </p>
            <p className="text-xl" style={{ color: 'var(--ocean-blue)' }}>
              {activity.time}
            </p>
          </div>
        ))}
      </div>
    </SlideLayout>
  );
}
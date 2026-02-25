import { SlideLayout } from '../SlideLayout';
import { Waves } from 'lucide-react';
import birdImage from '../../assets/3c5f456ff361271f7d99297678004fcd37902fc2.png';

export function Slide01Welcome() {
  return (
    <SlideLayout type="welcome">
      <div className="flex flex-col items-center justify-center h-full">
        <div className="flex flex-col items-center gap-1 -mt-32">
          <div className="flex justify-center">
            <img src={birdImage} alt="Reading bird mascot" className="w-48 h-48 object-contain" />
          </div>
          <h1 className="text-7xl" style={{ color: 'var(--deep-navy)', fontFamily: 'var(--font-header)' }}>
            Welcome Readers!
          </h1>
          <p className="text-4xl" style={{ color: 'var(--ocean-blue)' }}>
            Get your brain ready to learn!
          </p>
        </div>
      </div>
    </SlideLayout>
  );
}
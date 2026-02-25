import { SlideLayout } from '@/components/SlideLayout';
import vocabularyImage from '@/assets/0f6f56e82aea4412e4fd66ad49d91c9be009de3e.png';

export function Slide18Vocabulary() {
  return (
    <SlideLayout title="Story Vocabulary" subtitle="Let's learn these words before we read!">
      <div className="flex items-center justify-center mt-2" style={{ height: 'calc(100vh - 230px)' }}>
        <img 
          src={vocabularyImage} 
          alt="Story Vocabulary showing castle, pretend, explorer, and adventure" 
          style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
        />
      </div>
    </SlideLayout>
  );
}
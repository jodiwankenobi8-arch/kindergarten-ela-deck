import { UFLISlideLayout } from '@/components/UFLISlideLayout';
import { UFLISlideProps } from './UFLISlideProps';
import patternAEImg from '@/assets/275e0f57de227666dd92a53934983e33cf3e46e4.png';

export function Slide09ABPatternAE({ timerProps }: UFLISlideProps = {}) {
  return (
    <UFLISlideLayout timerProps={timerProps}>
      <div className="flex items-center justify-center h-full w-full">
        <img 
          src={patternAEImg} 
          alt="Pattern _a_e"
          className="object-contain"
          style={{ width: '95%', height: '95%' }}
        />
      </div>
    </UFLISlideLayout>
  );
}
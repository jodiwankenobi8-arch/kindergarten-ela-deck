import { UFLISlideLayout } from '@/components/UFLISlideLayout';
import { UFLISlideProps } from './UFLISlideProps';
import patternTapeImg from '@/assets/c4f381912aa51f7f5b772ffd8f9655ed6e5a3ec3.png';

export function Slide09ADPatternTape({ timerProps }: UFLISlideProps = {}) {
  return (
    <UFLISlideLayout timerProps={timerProps}>
      <div className="flex items-center justify-center h-full w-full">
        <img 
          src={patternTapeImg} 
          alt="Pattern t_a_p_e"
          className="object-contain"
          style={{ width: '95%', height: '95%' }}
        />
      </div>
    </UFLISlideLayout>
  );
}
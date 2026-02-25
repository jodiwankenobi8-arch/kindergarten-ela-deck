import { UFLISlideLayout } from '@/components/UFLISlideLayout';
import { UFLISlideProps } from './UFLISlideProps';
import patternMadeImg from '@/assets/e33049d3dcea4049dd0631dd09c7a9301026b687.png';

export function Slide09ACPatternMade({ timerProps }: UFLISlideProps = {}) {
  return (
    <UFLISlideLayout timerProps={timerProps}>
      <div className="flex items-center justify-center h-full w-full">
        <img 
          src={patternMadeImg} 
          alt="Pattern m_a_d_e"
          className="object-contain"
          style={{ width: '95%', height: '95%' }}
        />
      </div>
    </UFLISlideLayout>
  );
}
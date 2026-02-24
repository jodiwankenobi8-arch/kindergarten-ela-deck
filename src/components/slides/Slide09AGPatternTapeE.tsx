import { UFLISlideLayout } from '../UFLISlideLayout';
import { UFLISlideProps } from './UFLISlideProps';
import patternTapeEImg from 'figma:asset/20975fb1bf6c429da886c5c6565a53feeb771bb1.png';

export function Slide09AGPatternTapeE({ timerProps }: UFLISlideProps = {}) {
  return (
    <UFLISlideLayout timerProps={timerProps}>
      <div className="flex items-center justify-center h-full w-full">
        <img 
          src={patternTapeEImg} 
          alt="Pattern tape with e"
          className="object-contain"
          style={{ width: '95%', height: '95%' }}
        />
      </div>
    </UFLISlideLayout>
  );
}
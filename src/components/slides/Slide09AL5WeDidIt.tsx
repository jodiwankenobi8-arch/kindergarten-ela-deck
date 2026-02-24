import { UFLISlideLayout } from '../UFLISlideLayout';
import { UFLISlideProps } from './UFLISlideProps';
import weDidItImg from 'figma:asset/3fdc4b4f5ede10bd831c6e11796285db9717fcf6.png';

export function Slide09AL5WeDidIt({ timerProps }: UFLISlideProps = {}) {
  return (
    <UFLISlideLayout timerProps={timerProps}>
      <div className="flex items-center justify-center h-full w-full">
        <img 
          src={weDidItImg} 
          alt="We did it! Transition slide"
          className="object-contain"
          style={{ width: '95%', height: '95%' }}
        />
      </div>
    </UFLISlideLayout>
  );
}
import { UFLISlideLayout } from '../UFLISlideLayout';
import { UFLISlideProps } from './UFLISlideProps';
import readTogetherImg from 'figma:asset/b0d223dadb632e63bb47a490f7b7cd6e1bd21c60.png';

export function Slide09AKReadTogether({ timerProps }: UFLISlideProps = {}) {
  return (
    <UFLISlideLayout timerProps={timerProps}>
      <div className="flex items-center justify-center h-full w-full">
        <img 
          src={readTogetherImg} 
          alt="Let's read together - make, name, gave, take"
          className="object-contain"
          style={{ width: '95%', height: '95%' }}
        />
      </div>
    </UFLISlideLayout>
  );
}
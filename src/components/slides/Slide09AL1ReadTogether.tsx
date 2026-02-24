import { UFLISlideLayout } from '../UFLISlideLayout';
import { UFLISlideProps } from './UFLISlideProps';
import readTogetherImg from 'figma:asset/a1e15549c73caf3696157136310f8b488dcc803f.png';

export function Slide09AL1ReadTogether({ timerProps }: UFLISlideProps = {}) {
  return (
    <UFLISlideLayout timerProps={timerProps}>
      <div className="flex items-center justify-center h-full w-full">
        <img 
          src={readTogetherImg} 
          alt="Let's read together - games, state, skate"
          className="object-contain"
          style={{ width: '95%', height: '95%' }}
        />
      </div>
    </UFLISlideLayout>
  );
}
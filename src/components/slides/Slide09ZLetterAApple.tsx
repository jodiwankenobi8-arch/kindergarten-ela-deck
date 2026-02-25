import { UFLISlideLayout } from '../UFLISlideLayout';
import { UFLISlideProps } from './UFLISlideProps';
import letterAAppleImg from '../../assets/05f46c0f2a2a28e80b238963992eb1a5433892e9.png';

export function Slide09ZLetterAApple({ timerProps }: UFLISlideProps = {}) {
  return (
    <UFLISlideLayout timerProps={timerProps}>
      <div className="flex items-center justify-center h-full w-full">
        <img 
          src={letterAAppleImg} 
          alt="Letter A with Apple"
          className="object-contain"
          style={{ width: '95%', height: '95%' }}
        />
      </div>
    </UFLISlideLayout>
  );
}
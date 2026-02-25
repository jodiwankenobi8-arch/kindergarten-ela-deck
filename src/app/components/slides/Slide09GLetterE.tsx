import { UFLISlideLayout } from '@/components/UFLISlideLayout';
import { UFLISlideProps } from './UFLISlideProps';
import letterEImg from '@/assets/a7e4485c7dd89900f261d7270ca2a42753f7c766.png';

export function Slide09GLetterE({ timerProps }: UFLISlideProps = {}) {
  return (
    <UFLISlideLayout timerProps={timerProps}>
      <div className="flex items-center justify-center h-full w-full">
        <img 
          src={letterEImg} 
          alt="Letter E"
          className="object-contain"
          style={{ width: '95%', height: '95%' }}
        />
      </div>
    </UFLISlideLayout>
  );
}
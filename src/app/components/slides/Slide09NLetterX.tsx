import { UFLISlideLayout } from '@/components/UFLISlideLayout';
import { UFLISlideProps } from './UFLISlideProps';
import letterXImg from '@/assets/abd3124f040c0af12c0ed248be8faf08b628ab03.png';

export function Slide09NLetterX({ timerProps }: UFLISlideProps = {}) {
  return (
    <UFLISlideLayout timerProps={timerProps}>
      <div className="flex items-center justify-center h-full w-full">
        <img 
          src={letterXImg} 
          alt="Letter M"
          className="object-contain"
          style={{ width: '95%', height: '95%' }}
        />
      </div>
    </UFLISlideLayout>
  );
}
import { UFLISlideLayout } from '@/components/UFLISlideLayout';
import { UFLISlideProps } from './UFLISlideProps';
import ufliTitleImg from '@/assets/9a9e7e65002e7d9167d15d82f5555765c590d6c5.png';

export function Slide07AUFLITitle({ timerProps }: UFLISlideProps = {}) {
  return (
    <UFLISlideLayout timerProps={timerProps}>
      <div className="flex items-center justify-center h-full w-full">
        <img 
          src={ufliTitleImg} 
          alt="UFLI Foundations - Title Slide"
          className="object-contain"
          style={{ width: '95%', height: '95%' }}
        />
      </div>
    </UFLISlideLayout>
  );
}
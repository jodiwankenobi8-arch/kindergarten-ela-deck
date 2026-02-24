import { UFLISlideLayout } from '../UFLISlideLayout';
import { UFLISlideProps } from './UFLISlideProps';
import ufliPhonemicImg from 'figma:asset/ec58be06b2a7811f662914d27cfaa63f7e2a288f.png';

export function Slide07CUFLIPhonemic({ timerProps }: UFLISlideProps = {}) {
  return (
    <UFLISlideLayout timerProps={timerProps}>
      <div className="flex items-center justify-center h-full w-full">
        <img 
          src={ufliPhonemicImg} 
          alt="UFLI Phonemic Awareness Activities"
          className="object-contain"
          style={{ width: '95%', height: '95%' }}
        />
      </div>
    </UFLISlideLayout>
  );
}
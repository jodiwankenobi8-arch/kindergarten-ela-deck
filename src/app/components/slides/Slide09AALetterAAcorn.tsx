import { UFLISlideLayout } from '@/components/UFLISlideLayout';
import { UFLISlideProps } from './UFLISlideProps';
import letterAAcornImg from '@/assets/ee78aed28fc93977e29c53f9c0b16b48a4699a9a.png';

export function Slide09AALetterAAcorn({ timerProps }: UFLISlideProps = {}) {
  return (
    <UFLISlideLayout timerProps={timerProps}>
      <div className="flex items-center justify-center h-full w-full">
        <img 
          src={letterAAcornImg} 
          alt="Letter A with Acorn"
          className="object-contain"
          style={{ width: '95%', height: '95%' }}
        />
      </div>
    </UFLISlideLayout>
  );
}

import { UFLISlideLayout } from '../UFLISlideLayout';
import { UFLISlideProps } from './UFLISlideProps';
import scheduleImg from 'figma:asset/059a4077be06b2c94060030e3e2800f6fe99c271.png';

export function Slide09XScheduleNewConcept({ timerProps }: UFLISlideProps = {}) {
  return (
    <UFLISlideLayout timerProps={timerProps}>
      <div className="flex items-center justify-center h-full w-full">
        <img 
          src={scheduleImg} 
          alt="Our Schedule - Day 1"
          className="object-contain"
          style={{ width: '95%', height: '95%' }}
        />
      </div>
    </UFLISlideLayout>
  );
}
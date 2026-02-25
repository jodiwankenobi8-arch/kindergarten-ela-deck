import { UFLISlideLayout } from '../UFLISlideLayout';
import { UFLISlideProps } from './UFLISlideProps';
import ufliScheduleImg from '../../assets/d71bdbaf589ec1fc8b98cc9e3ad3a01be4532e6a.png';

export function Slide07BUFLISchedule({ timerProps }: UFLISlideProps = {}) {
  return (
    <UFLISlideLayout timerProps={timerProps}>
      <div className="flex items-center justify-center h-full w-full">
        <img 
          src={ufliScheduleImg} 
          alt="UFLI Schedule - Day 1"
          className="object-contain"
          style={{ width: '95%', height: '95%' }}
        />
      </div>
    </UFLISlideLayout>
  );
}
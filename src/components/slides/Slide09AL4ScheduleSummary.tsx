import { UFLISlideLayout } from '../UFLISlideLayout';
import { UFLISlideProps } from './UFLISlideProps';
import scheduleImg from '../../assets/0f732e25c80242df39eb2433a76e5d452f2f38b3.png';

export function Slide09AL4ScheduleSummary({ timerProps }: UFLISlideProps = {}) {
  return (
    <UFLISlideLayout timerProps={timerProps}>
      <div className="flex items-center justify-center h-full w-full">
        <img 
          src={scheduleImg} 
          alt="Our Schedule Day 1 summary"
          className="object-contain"
          style={{ width: '95%', height: '95%' }}
        />
      </div>
    </UFLISlideLayout>
  );
}
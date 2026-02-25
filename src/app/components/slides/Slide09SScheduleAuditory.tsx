import { UFLISlideLayout } from '@/components/UFLISlideLayout';
import { UFLISlideProps } from './UFLISlideProps';
import scheduleImg from '@/assets/6d4fe511f176c84eb5a8d77e8cd876158b2fbe6f.png';

export function Slide09SScheduleAuditory({ timerProps }: UFLISlideProps = {}) {
  return (
    <UFLISlideLayout timerProps={timerProps}>
      <div className="flex items-center justify-center h-full w-full">
        <img 
          src={scheduleImg} 
          alt="Schedule - Auditory Drill"
          className="object-contain"
          style={{ width: '95%', height: '95%' }}
        />
      </div>
    </UFLISlideLayout>
  );
}
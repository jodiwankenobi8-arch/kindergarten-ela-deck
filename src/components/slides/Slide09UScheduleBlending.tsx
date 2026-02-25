import { UFLISlideLayout } from '../UFLISlideLayout';
import { UFLISlideProps } from './UFLISlideProps';
import scheduleImg from '../../assets/86304c23da204e65ffbc87acd45bede7d61aa142.png';

export function Slide09UScheduleBlending({ timerProps }: UFLISlideProps = {}) {
  return (
    <UFLISlideLayout timerProps={timerProps}>
      <div className="flex items-center justify-center h-full w-full">
        <img 
          src={scheduleImg} 
          alt="Schedule - Blending Drill"
          className="object-contain"
          style={{ width: '95%', height: '95%' }}
        />
      </div>
    </UFLISlideLayout>
  );
}
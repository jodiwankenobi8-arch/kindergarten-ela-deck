import { UFLISlideLayout } from '../UFLISlideLayout';
import { UFLISlideProps } from './UFLISlideProps';
import auditoryDrillImg from '../../assets/7cc6a55de5d1f9aeeaa656f076f624428557803d.png';

export function Slide09TAuditoryDrill({ timerProps }: UFLISlideProps = {}) {
  return (
    <UFLISlideLayout timerProps={timerProps}>
      <div className="flex items-center justify-center h-full w-full">
        <img 
          src={auditoryDrillImg} 
          alt="Auditory Drill"
          className="object-contain"
          style={{ width: '95%', height: '95%' }}
        />
      </div>
    </UFLISlideLayout>
  );
}
import { UFLISlideLayout } from '@/components/UFLISlideLayout';
import { UFLISlideProps } from './UFLISlideProps';
import letterAImg from '@/assets/ac8caa811631e6f00a708cd684ff87c3d0dfb2de.png';

export function Slide09DLetterA({ timerProps }: UFLISlideProps = {}) {
  return (
    <UFLISlideLayout timerProps={timerProps}>
      <div className="flex items-center justify-center h-full w-full">
        <img 
          src={letterAImg} 
          alt="Letter A"
          className="object-contain"
          style={{ width: '95%', height: '95%' }}
        />
      </div>
    </UFLISlideLayout>
  );
}
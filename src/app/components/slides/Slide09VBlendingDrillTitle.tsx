import { UFLISlideLayout } from '@/components/UFLISlideLayout';
import { UFLISlideProps } from './UFLISlideProps';
import blendingDrillImg from '@/assets/f8e0511fc9fbeeec073a5b860312e6c8a20b0335.png';

export function Slide09VBlendingDrillTitle({ timerProps }: UFLISlideProps = {}) {
  return (
    <UFLISlideLayout timerProps={timerProps}>
      <div className="flex items-center justify-center h-full w-full">
        <img 
          src={blendingDrillImg} 
          alt="Blending Drill"
          className="object-contain"
          style={{ width: '95%', height: '95%' }}
        />
      </div>
    </UFLISlideLayout>
  );
}
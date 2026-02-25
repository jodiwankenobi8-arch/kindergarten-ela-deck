import { UFLISlideLayout } from '@/components/UFLISlideLayout';
import { UFLISlideProps } from './UFLISlideProps';
import soundCardImg from '@/assets/dd0e9fb109116483b0dd22a0d5b546d4b5d25f54.png';

export function Slide09AJSoundCard({ timerProps }: UFLISlideProps = {}) {
  return (
    <UFLISlideLayout timerProps={timerProps}>
      <div className="flex items-center justify-center h-full w-full">
        <img 
          src={soundCardImg} 
          alt="Sound Card /ā/ a_e"
          className="object-contain"
          style={{ width: '95%', height: '95%' }}
        />
      </div>
    </UFLISlideLayout>
  );
}
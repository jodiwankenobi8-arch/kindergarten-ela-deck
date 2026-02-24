import { UFLISlideLayout } from '../UFLISlideLayout';
import { UFLISlideProps } from './UFLISlideProps';
import watchMeReadImg from 'figma:asset/bf7377207e747159e09a4c1e6f3ca25a4f47ca99.png';

export function Slide09AJ3WatchMeRead({ timerProps }: UFLISlideProps = {}) {
  return (
    <UFLISlideLayout timerProps={timerProps}>
      <div className="flex items-center justify-center h-full w-full">
        <img 
          src={watchMeReadImg} 
          alt="Watch me read - made and came"
          className="object-contain"
          style={{ width: '95%', height: '95%' }}
        />
      </div>
    </UFLISlideLayout>
  );
}
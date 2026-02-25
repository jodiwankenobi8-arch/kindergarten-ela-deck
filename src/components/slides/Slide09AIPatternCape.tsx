import { UFLISlideLayout } from '../UFLISlideLayout';
import { UFLISlideProps } from './UFLISlideProps';
import capeImg from '../../assets/36e3b98ced6bd63ca764d55998ec024ceb3d8d11.png';

export function Slide09AIPatternCape({ timerProps }: UFLISlideProps = {}) {
  return (
    <UFLISlideLayout timerProps={timerProps}>
      <div className="flex items-center justify-center h-full w-full">
        <img 
          src={capeImg} 
          alt="Pattern cape with silent E"
          className="object-contain"
          style={{ width: '95%', height: '95%' }}
        />
      </div>
    </UFLISlideLayout>
  );
}
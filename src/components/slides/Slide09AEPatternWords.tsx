import { UFLISlideLayout } from '../UFLISlideLayout';
import { UFLISlideProps } from './UFLISlideProps';
import patternWordsImg from '../../assets/d7582ca7be155b22977d308976fe464e8713399b.png';

export function Slide09AEPatternWords({ timerProps }: UFLISlideProps = {}) {
  return (
    <UFLISlideLayout timerProps={timerProps}>
      <div className="flex items-center justify-center h-full w-full">
        <img 
          src={patternWordsImg} 
          alt="Pattern Words"
          className="object-contain"
          style={{ width: '95%', height: '95%' }}
        />
      </div>
    </UFLISlideLayout>
  );
}
import { UFLISlideLayout } from '@/components/UFLISlideLayout';
import { UFLISlideProps } from './UFLISlideProps';
import spellTogetherImg from '@/assets/26b7ad85b02e54a9dd513ef086045a52e31f002c.png';

export function Slide09AL3SpellTogether({ timerProps }: UFLISlideProps = {}) {
  return (
    <UFLISlideLayout timerProps={timerProps}>
      <div className="flex items-center justify-center h-full w-full">
        <img 
          src={spellTogetherImg} 
          alt="Let's spell together with writing lines"
          className="object-contain"
          style={{ width: '95%', height: '95%' }}
        />
      </div>
    </UFLISlideLayout>
  );
}
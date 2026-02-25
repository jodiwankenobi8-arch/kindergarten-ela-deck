import { UFLISlideLayout } from '@/components/UFLISlideLayout';
import { UFLISlideProps } from './UFLISlideProps';
import watchMeSpellImg from '@/assets/537eca6cd7d654e855fac6531665b739befdb244.png';

export function Slide09AL2WatchMeSpell({ timerProps }: UFLISlideProps = {}) {
  return (
    <UFLISlideLayout timerProps={timerProps}>
      <div className="flex items-center justify-center h-full w-full">
        <img 
          src={watchMeSpellImg} 
          alt="Watch me spell with writing lines"
          className="object-contain"
          style={{ width: '95%', height: '95%' }}
        />
      </div>
    </UFLISlideLayout>
  );
}
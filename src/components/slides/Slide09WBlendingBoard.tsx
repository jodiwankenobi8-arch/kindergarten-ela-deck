import { UFLISlideLayout } from '../UFLISlideLayout';
import { UFLISlideProps } from './UFLISlideProps';

export function Slide09WBlendingBoard({ timerProps }: UFLISlideProps = {}) {
  return (
    <UFLISlideLayout timerProps={timerProps}>
      <div className="flex items-center justify-center h-full w-full">
        <iframe
          src="https://research.dwi.ufl.edu/op.n/file/bca9ju45kvvrvoan/?embed"
          className="rounded-2xl object-contain"
          style={{ width: '95%', height: '95%', border: '4px solid var(--ocean-blue)' }}
          title="UFLI Blending Board"
          allow="fullscreen"
        />
      </div>
    </UFLISlideLayout>
  );
}
import { SlideLayout } from '@/components/SlideLayout';

export function Slide10ASightWordAway() {
  return (
    <SlideLayout type="video" title="Sight Word: away" subtitle="Sing along with HeidiSongs!">
      <div className="flex flex-col items-center h-full justify-center">
        <div className="rounded-3xl shadow-2xl p-4" style={{ backgroundColor: '#CFE8E5' }}>
          <iframe
            src="https://www.youtube.com/embed/rKFSPUJtH7Q?autoplay=1"
            width="800"
            height="450"
            className="rounded-2xl shadow-2xl"
            allow="autoplay; fullscreen"
            style={{ border: 'none' }}
          />
        </div>
      </div>
    </SlideLayout>
  );
}
import { UFLISlideLayout } from '../UFLISlideLayout';
import page160 from 'figma:asset/e7945a9a3792ecafcacd46b6ce2f47b79bd5bc60.png';

export function Slide12GStoryPage160() {
  return (
    <UFLISlideLayout>
      <div className="flex items-center justify-center h-full">
        <img 
          src={page160} 
          alt="The Best Story - Page 160"
          className="max-h-[80vh] w-auto object-contain rounded-2xl shadow-2xl"
        />
      </div>
    </UFLISlideLayout>
  );
}

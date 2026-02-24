import { UFLISlideLayout } from '../UFLISlideLayout';
import bookCover from 'figma:asset/f7f02bb85adb231cf9b1bb7766f66d76bcc3ae48.png';

export function Slide12BookCover() {
  return (
    <UFLISlideLayout>
      <div className="flex items-center justify-center h-full">
        <img 
          src={bookCover} 
          alt="The Best Story - Book Cover - Page 153"
          className="max-h-[80vh] w-auto object-contain rounded-2xl shadow-2xl"
        />
      </div>
    </UFLISlideLayout>
  );
}

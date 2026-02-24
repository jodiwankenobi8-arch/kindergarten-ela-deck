import { SlideLayout } from '../SlideLayout';
import entertainImage from 'figma:asset/7e4cea7dbf12c62700bce1b2137b5f36fbea5441.png';
import informImage from 'figma:asset/0e8d3dbcb6812fc35e7168744b2f4650a5ddef84.png';

export function Slide18AAuthorsPurpose() {
  return (
    <SlideLayout 
      title="Author's Purpose" 
      subtitle="Why did the author write this story?"
    >
      <div className="flex flex-col items-center gap-4 px-8 w-full max-w-6xl mx-auto h-full justify-center">
        {/* Two purposes side by side */}
        <div className="grid grid-cols-2 gap-6 w-full">
          {/* Entertain */}
          <div
            className="p-6 rounded-3xl shadow-2xl flex flex-col items-center gap-3"
            style={{ backgroundColor: 'var(--sand)', border: '4px solid var(--ocean-blue)' }}
          >
            <div className="h-43 flex items-center justify-center">
              <img src={entertainImage} alt="Entertain" className="w-55 h-41 object-contain" />
            </div>
            <h3 className="text-5xl font-bold" style={{ color: 'var(--deep-navy)' }}>
              ENTERTAIN 😊
            </h3>
            <p className="text-2xl text-center font-semibold" style={{ color: 'var(--deep-navy)' }}>
              To make us laugh or feel happy (for fun!)
            </p>
          </div>

          {/* Inform */}
          <div
            className="p-6 rounded-3xl shadow-2xl flex flex-col items-center gap-3"
            style={{ backgroundColor: 'var(--seafoam)', border: '4px solid var(--ocean-blue)' }}
          >
            <div className="h-43 flex items-center justify-center">
              <img src={informImage} alt="Inform" className="w-67 h-49 object-contain mt-2" />
            </div>
            <h3 className="text-5xl font-bold" style={{ color: 'var(--deep-navy)' }}>
              INFORM 📚
            </h3>
            <p className="text-2xl text-center font-semibold" style={{ color: 'var(--deep-navy)' }}>
              To teach us something new
            </p>
          </div>
        </div>

        {/* Bottom prompt */}
        <div 
          className="p-6 rounded-3xl shadow-2xl w-full text-center"
          style={{ backgroundColor: 'white' }}
        >
          <p className="text-2xl font-semibold" style={{ color: 'var(--deep-navy)' }}>
            As we are reading think about why the author wrote "The Best Story"
          </p>
        </div>
      </div>
    </SlideLayout>
  );
}
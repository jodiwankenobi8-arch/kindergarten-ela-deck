import { Slide03Roadmap } from './Slide03Roadmap';
import type { ComponentProps } from 'react';

type RoadmapProps = ComponentProps<typeof Slide03Roadmap>;

// Initial roadmap - Songs is current (what we're going into)
export function RoadmapInitial(props: Omit<RoadmapProps, 'currentStep'>) {
  return <Slide03Roadmap {...props} currentStep={0} />;
}

// After Songs - UFLI is current
export function RoadmapAfterSongs(props: Omit<RoadmapProps, 'currentStep'>) {
  return <Slide03Roadmap {...props} currentStep={1} />;
}

// After UFLI - Sight Words is current
export function RoadmapAfterUFLI(props: Omit<RoadmapProps, 'currentStep'>) {
  return <Slide03Roadmap {...props} currentStep={2} />;
}

// After Sight Words - Savvas is current
export function RoadmapAfterSightWords(props: Omit<RoadmapProps, 'currentStep'>) {
  return <Slide03Roadmap {...props} currentStep={3} />;
}

// After Savvas - Celebration is current
export function RoadmapAfterSavvas(props: Omit<RoadmapProps, 'currentStep'>) {
  return <Slide03Roadmap {...props} currentStep={4} />;
}
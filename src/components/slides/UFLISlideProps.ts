export interface UFLISlideProps {
  timerProps?: {
    minutes: number;
    seconds: number;
    running: boolean;
    onToggle: () => void;
  } | null;
}

import { SlideLayout } from '@/components/SlideLayout';
import { Play } from 'lucide-react';
import { useEffect, useRef } from 'react';

// Declare YouTube API types
declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: () => void;
  }
}

export function Slide04AlphabetSong() {
  const playerRef = useRef<any>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load YouTube API if not already loaded
    if (!window.YT) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);
    }

    const initPlayer = () => {
      if (containerRef.current && window.YT && window.YT.Player) {
        playerRef.current = new window.YT.Player(containerRef.current, {
          height: '450',
          width: '800',
          videoId: 'EjOd6uPj_6c',
          playerVars: {
            autoplay: 1,
            mute: 1, // Start muted to allow autoplay
            controls: 1,
            rel: 0,
          },
          events: {
            onReady: (event: any) => {
              try {
                event.target.playVideo();
                // Unmute after a brief delay to ensure playback started
                setTimeout(() => {
                  if (playerRef.current) {
                    event.target.unMute();
                    event.target.setVolume(100);
                  }
                }, 100);
              } catch (e) {
                console.log('YouTube player error:', e);
              }
            },
          },
        });
      }
    };

    if (window.YT && window.YT.Player) {
      initPlayer();
    } else {
      window.onYouTubeIframeAPIReady = initPlayer;
    }

    return () => {
      if (playerRef.current && playerRef.current.destroy) {
        try {
          playerRef.current.destroy();
        } catch (e) {
          console.log('YouTube cleanup error:', e);
        }
      }
      playerRef.current = null;
    };
  }, []);

  return (
    <SlideLayout type="video" title="Alphabet Song" subtitle="Let's sing together!">
      <div className="flex flex-col items-center gap-8">
        <div className="rounded-3xl shadow-2xl p-4" style={{ backgroundColor: '#CFE8E5' }}>
          <div ref={containerRef} className="rounded-2xl shadow-2xl overflow-hidden"></div>
        </div>
        <p className="text-3xl text-center" style={{ color: 'var(--deep-navy)' }}>
          "Meet the Phonics - ABC Song"
        </p>
      </div>
    </SlideLayout>
  );
}

export function Slide05ShortASong() {
  const playerRef = useRef<any>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load YouTube API if not already loaded
    if (!window.YT) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);
    }

    const initPlayer = () => {
      if (containerRef.current && window.YT && window.YT.Player) {
        playerRef.current = new window.YT.Player(containerRef.current, {
          height: '450',
          width: '800',
          videoId: 't2MfGBsnyZM',
          playerVars: {
            autoplay: 1,
            mute: 1, // Start muted to allow autoplay
            controls: 1,
            rel: 0,
          },
          events: {
            onReady: (event: any) => {
              try {
                event.target.playVideo();
                // Unmute after a brief delay to ensure playback started
                setTimeout(() => {
                  if (playerRef.current) {
                    event.target.unMute();
                    event.target.setVolume(100);
                  }
                }, 100);
              } catch (e) {
                console.log('YouTube player error:', e);
              }
            },
          },
        });
      }
    };

    if (window.YT && window.YT.Player) {
      initPlayer();
    } else {
      window.onYouTubeIframeAPIReady = initPlayer;
    }

    return () => {
      if (playerRef.current && playerRef.current.destroy) {
        try {
          playerRef.current.destroy();
        } catch (e) {
          console.log('YouTube cleanup error:', e);
        }
      }
      playerRef.current = null;
    };
  }, []);

  return (
    <SlideLayout type="video" title="Short A Song" subtitle="Listen for the /a/ sound!">
      <div className="flex flex-col items-center gap-8">
        <div className="rounded-3xl shadow-2xl p-4" style={{ backgroundColor: '#CFE8E5' }}>
          <div ref={containerRef} className="rounded-2xl shadow-2xl overflow-hidden"></div>
        </div>
        <p className="text-3xl text-center" style={{ color: 'var(--deep-navy)' }}>
          "Letter A Song" by Jack Hartmann
        </p>
      </div>
    </SlideLayout>
  );
}

export function Slide06LongASong() {
  const playerRef = useRef<any>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load YouTube API if not already loaded
    if (!window.YT) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);
    }

    const initPlayer = () => {
      if (containerRef.current && window.YT && window.YT.Player) {
        playerRef.current = new window.YT.Player(containerRef.current, {
          height: '450',
          width: '800',
          videoId: 'HxoTZ_i2rcs',
          playerVars: {
            autoplay: 1,
            mute: 1, // Start muted to allow autoplay
            controls: 1,
            rel: 0,
          },
          events: {
            onReady: (event: any) => {
              try {
                event.target.playVideo();
                // Unmute after a brief delay to ensure playback started
                setTimeout(() => {
                  if (playerRef.current) {
                    event.target.unMute();
                    event.target.setVolume(100);
                  }
                }, 100);
              } catch (e) {
                console.log('YouTube player error:', e);
              }
            },
            onStateChange: (event: any) => {
              try {
                // When video starts playing, unmute it
                if (event.data === window.YT.PlayerState.PLAYING && playerRef.current) {
                  event.target.unMute();
                  event.target.setVolume(100);
                }
              } catch (e) {
                console.log('YouTube state change error:', e);
              }
            },
          },
        });
      }
    };

    if (window.YT && window.YT.Player) {
      initPlayer();
    } else {
      window.onYouTubeIframeAPIReady = initPlayer;
    }

    return () => {
      if (playerRef.current && playerRef.current.destroy) {
        try {
          playerRef.current.destroy();
        } catch (e) {
          console.log('YouTube cleanup error:', e);
        }
      }
      playerRef.current = null;
    };
  }, []);

  return (
    <SlideLayout type="video" title="Long A Song" subtitle="Silent E makes it say its name!">
      <div className="flex flex-col items-center gap-8">
        <div className="rounded-3xl shadow-2xl p-4" style={{ backgroundColor: '#CFE8E5' }}>
          <div ref={containerRef} className="rounded-2xl shadow-2xl overflow-hidden"></div>
        </div>
        <p className="text-3xl text-center" style={{ color: 'var(--deep-navy)' }}>
          "Long A Song" by Little Fox
        </p>
      </div>
    </SlideLayout>
  );
}
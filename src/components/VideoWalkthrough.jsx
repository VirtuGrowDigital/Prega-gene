
import { useRef, useState, useEffect } from "react";
import { Play } from "lucide-react";
import walkthroughVideo from "../assets/videos/prega-gene-walkthrough.mp4";

export default function VideoWalkthrough() {
  const videoRef = useRef(null);
  const sectionRef = useRef(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    const video = videoRef.current;

    if (!section || !video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Autoplay muted when the section enters the viewport
          video.muted = true;

          video.play()
            .then(() => setHasStarted(true))
            .catch((error) => {
              console.log("Autoplay was blocked:", error);
            });
        } else {
          // Pause when the section leaves the viewport
          video.pause();
        }
      },
      {
        threshold: 0.5,
      }
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
      video.pause();
    };
  }, []);

  const handlePlay = async () => {
    if (!videoRef.current) return;

    try {
      videoRef.current.muted = false;
      await videoRef.current.play();
      setHasStarted(true);
    } catch (error) {
      console.error("Unable to play the walkthrough video:", error);
    }
  };

  return (
    <section
      ref={sectionRef}
      id="video-walkthrough"
      className="bg-[#f0f1ff] px-4 py-14 sm:px-6 sm:py-16 lg:px-8"
    >
      <div className="mx-auto max-w-[1200px]">
        <div className="mx-auto mb-7 max-w-2xl text-center sm:mb-8">
          <p className="mb-2 text-[9px] font-bold uppercase tracking-[0.2em] text-[#bd2d79] sm:text-[10px]">
            Video Walkthrough
          </p>

          <h2 className="text-2xl font-semibold tracking-tight text-[#092c60] sm:text-3xl lg:text-[36px]">
            Watch. Learn. Test.
          </h2>

          <p className="mx-auto mt-2 max-w-lg text-xs leading-5 text-[#5d5b6b] sm:text-sm sm:leading-6">
            Follow the demonstration to see how to collect your urine sample,
            use the Prega Gene test device, and interpret the result according
            to the product instructions.
          </p>
        </div>

        <div className="mx-auto max-w-[740px] overflow-hidden rounded-2xl bg-[#092c60] shadow-[0_12px_30px_rgba(9,44,96,0.18)]">
          <div className="relative aspect-video">
            <video
              ref={videoRef}
              className="h-full w-full object-cover"
              muted
              playsInline
              controls
              preload="metadata"
              onPlay={() => setHasStarted(true)}
              onPause={() => setHasStarted(false)}
              aria-label="Prega Gene pregnancy test kit demonstration"
            >
              <source src={walkthroughVideo} type="video/mp4" />
              Your browser does not support HTML video.
            </video>

            {!hasStarted && (
              <button
                type="button"
                onClick={handlePlay}
                aria-label="Play Prega Gene video walkthrough"
                className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[#bd2d79] shadow-lg transition hover:scale-105 hover:bg-[#fff7fb] sm:h-16 sm:w-16"
              >
                <Play size={23} fill="currentColor" />
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

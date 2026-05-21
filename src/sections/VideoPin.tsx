import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useMediaQuery } from "react-responsive";

const VideoPin = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });

  useGSAP(() => {
    {
      /* Only apply the pin and clipPath animation on desktop */
    }
    if (!isMobile) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".vd-pin-section",
          start: "-15% top",
          end: "200% top",
          scrub: 1.5,
          pin: true,
        },
      });

      tl.to(".video-box", {
        clipPath: "circle(100% at 50% 50%)",
        ease: "power1.inOut",
      });
    }
  });

  return (
    <section className="vd-pin-section">
      <div
        style={{
          clipPath: isMobile
            ? "circle(100% at 50% 50%)"
            : "circle(6% at 50% 50%)",
        }}
        className="size-full video-box"
      >
        {/* Video */}
        <video
          src="https://res.cloudinary.com/dosqnvzhy/video/upload/v1779331113/pin-video_ah2xtq.mp4"
          playsInline
          muted
          loop
          autoPlay
        />

        <div className="abs-center md:scale-100 scale-200">
          {/* Circular text overlay */}
          <img
            src="/images/circle-text.svg"
            alt="Circular text overlay"
            className="spin-circle"
          />
          {/* Play button */}
          <div className="play-btn">
            <img
              src="/images/play.svg"
              alt="White play button in the center of the video section"
              className="size-[3vw] ml-[.5vw]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoPin;

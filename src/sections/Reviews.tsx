import { useRef } from "react";
import { cards } from "../constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Reviews = () => {
  const vdRef = useRef<(HTMLVideoElement | null)[]>([]);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".testimonials-section",
        start: "top bottom",
        end: "200% top",
        scrub: true,
      },
    });

    tl.to(".testimonials-section .first-title", {
      xPercent: 70,
    })
      .to(
        ".testimonials-section .sec-title",
        {
          xPercent: 25,
        },
        "<",
      )
      .to(
        ".testimonials-section .third-title",
        {
          xPercent: -50,
        },
        "<",
      );

    const pinTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".testimonials-section",
        start: "10% top",
        end: "200% top",
        scrub: 1.5,
        pin: true,
      },
    });

    pinTl.from(".vd-card", {
      yPercent: 150,
      stagger: 0.2,
      ease: "power1.inOut",
    });
  });

  {
    /* Handle video play and pause on hover */
  }
  const handlePlay = (index: number) => {
    const video = vdRef.current[index];
    video?.play();
  };

  const handlePause = (index: number) => {
    const video = vdRef.current[index];
    video?.pause();
  };

  return (
    <section className="testimonials-section">
      {/* Title */}
      <div className="absolute size-full flex flex-col items-center pt-[5vw]">
        <h2 className="text-black first-title">What's</h2>
        <h2 className="text-light-brown sec-title">Everyone</h2>
        <h2 className="text-black third-title">Talking</h2>
      </div>

      {/* Review cards */}
      <div className="pin-box">
        {cards.map((card, index: number) => (
          <div
            key={index}
            className={`vd-card ${card.translation} ${card.rotation}`}
            onMouseEnter={() => handlePlay(index)}
            onMouseLeave={() => handlePause(index)}
          >
            <video
              src={card.src}
              playsInline
              muted
              loop
              autoPlay
              className="size-full object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Reviews;

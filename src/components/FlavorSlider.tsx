import { useGSAP } from "@gsap/react";
import { flavorlists } from "../constants";
import gsap from "gsap";
import { useRef } from "react";
import { useMediaQuery } from "react-responsive";

const FlavorSlider = () => {
  const sliderRef = useRef<HTMLDivElement>(null);

  const isDesktop = useMediaQuery({
    query: "(min-width: 1280px)",
  });

  useGSAP(() => {
    if (!sliderRef.current || !isDesktop) return;

    {
      /* Calculate the total scrollable width of the slider and 
      create a GSAP timeline that animates the horizontal movement of the flavor section based on the scroll position. 
      The section will be pinned during the animation to create a smooth scrolling effect. */
    }
    const scrollAmount = sliderRef.current.scrollWidth - window.innerWidth;
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".flavor-section",
        start: "2% top",
        end: `+=${scrollAmount + 1500}px`,
        scrub: true,
        pin: true,
      },
    });

    tl.to(".flavor-section", {
      x: `-${scrollAmount + 1500}px`,
      ease: "power1.inOut",
    });

    {
      /* Create a separate timeline for the title animations that are synchronized with the scroll position of the flavor section. */
    }
    const titleTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".flavor-section",
        start: "top top",
        end: "bottom 80%",
        scrub: true,
      },
    });

    titleTl
      .to(".first-text-split", {
        xPercent: -30,
        ease: "power1.inOut",
      })
      .to(
        ".flavor-text-scroll",
        {
          xPercent: -22,
          ease: "power1.inOut",
        },
        "<",
      )
      .to(
        ".second-text-split",
        {
          xPercent: -10,
          ease: "power1.inOut",
        },
        "<",
      );
  });

  return (
    <div ref={sliderRef} className="slider-wrapper">
      <div className="flavors">
        {flavorlists.map((flavor) => (
          <div
            key={flavor.name}
            className={`relative z-30 xl:w-[50vw] w-96 xl:h-[70vh] lg:h-[50vh] lg:w-[50vw] h-80 flex-none ${flavor.rotation}`}
          >
            {/* Background */}
            <img
              src={`/images/flavors/${flavor.color}-bg.svg`}
              alt=""
              className="absolute bottom-0"
            />

            {/* Drink */}
            <img
              src={`/images/flavors/${flavor.color}-drink.webp`}
              alt=""
              className="drinks"
            />

            {/* Elements */}
            <img
              src={`/images/flavors/${flavor.color}-elements.webp`}
              alt=""
              className="elements"
            />

            {/* Flavor Name */}
            <h2>{flavor.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlavorSlider;

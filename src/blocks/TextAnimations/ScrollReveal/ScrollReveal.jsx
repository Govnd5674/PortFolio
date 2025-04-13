import { useEffect, useRef, useMemo } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ScrollReveal = ({
  children,
  enableBlur = true,
  blurStrength = 4,
  containerClassName = "",
  textClassName = "",
}) => {
  const containerRef = useRef(null);

  const splitText = useMemo(() => {
    const text = children?.props?.children || "";
    return text.split(" ").map((word, index) => (
      <span
        className="inline-block word mx-0.5 sm:mx-1 text-gray-500 will-change-transform text-xs sm:text-sm md:text-base lg:text-lg"
        key={index}
      >
        {word}
      </span>
    ));
  }, [children]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const updateAnimation = () => {
      const isMobile = window.innerWidth < 768;
      const isTablet = window.innerWidth >= 768 && window.innerWidth < 1024;

      const wordElements = el.querySelectorAll(".word");
      if (!wordElements.length) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: isMobile ? "top 80%" : "top bottom",
          end: isMobile ? "top 60%" : "top center",
          toggleActions: "play none none reverse",
        },
      });

      tl.fromTo(
        wordElements,
        {
          y: isMobile ? 15 : 30,
          autoAlpha: 0,
        },
        {
          y: 0,
          autoAlpha: 1,
          duration: isMobile ? 0.3 : 0.4,
          stagger: isMobile ? 0.02 : 0.03,
          ease: "power2.out",
        }
      );

      return tl;
    };

    const timeline = updateAnimation();
    window.addEventListener("resize", () => {
      timeline.kill();
      updateAnimation();
    });

    return () => {
      timeline.kill();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <h2
      ref={containerRef}
      className={`my-3 sm:my-4 md:my-5 ${containerClassName}`}
    >
      <p
        className={`text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed sm:leading-relaxed font-normal sm:font-semibold ${textClassName}`}
      >
        {splitText}
      </p>
    </h2>
  );
};

export default ScrollReveal;

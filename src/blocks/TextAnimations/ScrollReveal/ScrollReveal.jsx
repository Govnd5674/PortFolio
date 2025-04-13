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
        className="inline-block word mx-1 text-gray-500 will-change-transform"
        key={index}
      >
        {word}
      </span>
    ));
  }, [children]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const wordElements = el.querySelectorAll(".word");
    if (!wordElements.length) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: el,
        start: "top bottom",
        end: "top center",
        toggleActions: "play none none reverse",
      },
    });

    tl.fromTo(
      wordElements,
      { y: 30, autoAlpha: 0 },
      {
        y: 0,
        autoAlpha: 1,
        duration: 0.4,
        stagger: 0.03,
        ease: "power2.out",
      }
    );

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <h2 ref={containerRef} className={`my-5 ${containerClassName}`}>
      <p
        className={`text-[clamp(1.6rem,1vw,3rem)] leading-[1.5] font-semibold ${textClassName}`}
      >
        {splitText}
      </p>
    </h2>
  );
};

export default ScrollReveal;

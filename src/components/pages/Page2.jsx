import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitText from "../../blocks/TextAnimations/SplitText/SplitText";
import ScrollReveal from "../../blocks/TextAnimations/ScrollReveal/ScrollReveal";

const Page2 = () => {
  gsap.registerPlugin(ScrollTrigger);
  const rocketRef = useRef(null);
  const astroRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      astroRef.current,
      {
        x: "100%",
        y: "-50%",
        scale: 0.2,
        opacity: 0,
        rotate: 45,
      },
      {
        x: "20%",
        y: "-100%",
        scale: 2,
        rotate: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top center",
          end: "center center",
          scrub: true,
          toggleActions: "play none none reverse"
        },
      }
    );
  }, []);

  return (
    <div className="relative flex h-[100vh] justify-center items-center select-none w-full">
      <section ref={sectionRef} className="relative flex flex-col justify-center items-center h-screen max-w-9xl mx-auto px-4 bg-gray-950 text-gray-100">
        <div className="font-Mogra text-center font-bold mb-12">
          <SplitText
            text="ABOUT ME ..."
            className="text-8xl text-gray-500"
            delay={100}
            animationFrom={{ opacity: 0, transform: "translateY(50px)" }}
            animationTo={{ opacity: 1, transform: "translateY(0)" }}
          />
        </div>
        
        <div className="absolute top-[30%] right-[0%] z-10" ref={astroRef}>
          <img
            src="https://github.com/Govnd5674/PortFolio/blob/main/src/assets/png/astro2.png?raw=true"
            alt="astronaut"
            className="w-40 h-40 object-contain"
          />
        </div>
        <div className="font-Mogra text-sm font-normal text-gray-500 text-center max-w-6xl">
          <ScrollReveal
            className="text-gray-500 text-sm font-normal"
            baseOpacity={0}
            enableBlur={true}
            baseRotation={5}
            blurStrength={10}
          >
            <p className="text-sm">
              I'm a web developer with a growing passion for AI and machine
              learning. I specialize in building modern, responsive websites and
              interactive user experiences using technologies like React,
              Tailwind, and Node.js. Alongside web development, I’m exploring
              how AI/ML can enhance digital experiences — from intelligent UI
              behaviors to real-time personalization. I'm driven by curiosity,
              always learning, and excited to bridge the gap between clean
              frontend design and smart backend intelligence.
            </p>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default Page2;

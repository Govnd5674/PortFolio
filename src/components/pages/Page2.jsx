import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitText from "../../blocks/TextAnimations/SplitText/SplitText";
import ScrollReveal from "../../blocks/TextAnimations/ScrollReveal/ScrollReveal";

const Page2 = () => {
  gsap.registerPlugin(ScrollTrigger);
  const astroRef = useRef(null);
  const sectionRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const updateAnimation = () => {
      const isMobile = window.innerWidth < 768;
      const isTablet = window.innerWidth >= 768 && window.innerWidth < 1024;

      // Astronaut animation with adjusted mobile position
      gsap.fromTo(
        astroRef.current,
        {
          x: isMobile ? "100%" : "100%",
          y: isMobile ? "-100%" : "-50%", 
          scale: isMobile ? 0.05 : 0.2,
          opacity: 0,
          rotate: isMobile ? 30 : 45,
        },
        {
          x: isMobile ? "5%" : isTablet ? "10%" : "20%",
          y: isMobile ? "-170%" : isTablet ? "-60%" : "-150%", 
          scale: isMobile ? 1.5 : isTablet ? 1.2 : 2,
          rotate: 0,
          opacity: 1,
          duration: isMobile ? 0.3 : 1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: isMobile ? "top 85%" : "top center", // Moved up trigger point for mobile
            end: isMobile ? "center 85%" : "center center",
            scrub: true,
            toggleActions: "play none none reverse",
          },
        }
      );

      // Text content animation with adjusted mobile position
      gsap.fromTo(
        textRef.current,
        {
          y: isMobile ? 30 : 50, // Reduced starting offset for mobile
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: isMobile ? 0.5 : 0.8,
          scrollTrigger: {
            trigger: textRef.current,
            start: isMobile ? "top 90%" : "top 80%", // Moved up trigger point for mobile
            end: isMobile ? "top 70%" : "top 60%",
            toggleActions: "play none none reverse",
          },
        }
      );
    };

    updateAnimation();
    window.addEventListener("resize", updateAnimation);
    return () => window.removeEventListener("resize", updateAnimation);
  }, []);

  return (
    <div
      id="about"
      className="relative flex h-screen justify-center items-center select-none w-full px-3 sm:px-4 md:px-6 lg:px-8"
    >
      <section
        ref={sectionRef}
        className="relative flex flex-col justify-center items-center py-8 md:py-12 max-w-9xl mx-auto bg-gray-950 text-gray-100"
      >
        <div className="font-Mogra text-center font-bold mb-6 sm:mb-8 md:mb-12">
          <SplitText
            text="ABOUT ME ..."
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-gray-500"
            delay={100}
            animationFrom={{ opacity: 0, transform: "translateY(30px)" }}
            animationTo={{ opacity: 1, transform: "translateY(0)" }}
          />
        </div>

        <div
          className="absolute top-[30%] right-[0%] z-10 transform scale-75 sm:scale-90 md:scale-100"
          ref={astroRef}
        >
          <img
            src="https://github.com/Govnd5674/PortFolio/blob/main/src/assets/png/astro2.png?raw=true"
            alt="astronaut"
            className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 object-contain"
          />
        </div>

        <div
          ref={textRef}
          className="font-Mogra font-normal text-gray-500 text-center w-full max-w-[95%] sm:max-w-[85%] md:max-w-[75%] lg:max-w-6xl px-2 sm:px-4"
        >
          <ScrollReveal
            className="text-[0.8rem] sm:text-sm md:text-base lg:text-lg text-gray-500 font-normal leading-relaxed sm:leading-relaxed"
            baseOpacity={0}
            enableBlur={true}
            baseRotation={window.innerWidth < 768 ? 2 : 4}
            blurStrength={window.innerWidth < 768 ? 3 : 8}
          >
            <p className="tracking-wide sm:tracking-normal">
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
            <div className="block md:hidden mt-8 mb-4">
              <button
                onClick={() =>
                  document
                    .getElementById("contact")
                    .scrollIntoView({ behavior: "smooth" })
                }
                className="px-8 py-3 rounded-full font-Mogra text-gray-950 
                  bg-gradient-to-r from-[#804D3E] to-[#7E497D]
                  transform transition-all duration-300 ease-in-out
                  hover:scale-105 hover:shadow-lg hover:from-[#7E497D] hover:to-[#804D3E]
                  active:scale-95"
              >
                Contact Me
              </button>
            </div>
        </div>
      </section>
    </div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="min-h-screen">
      {/* ...existing code... */}
    </section>
  );
};

export default Page2;

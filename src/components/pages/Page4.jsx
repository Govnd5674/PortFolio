import React, { useEffect, useState, useRef } from "react";
import styles from "./Page4.module.css";
import InfiniteMenu from "../../blocks/Components/InfiniteMenu/InfiniteMenu";
import SplitText from "../../blocks/TextAnimations/SplitText/SplitText";

const Page4 = () => {
  const items = [
    {
      image:
        "https://raw.githubusercontent.com/Govnd5674/PortFolio/main/src/assets/Project%20Images/%20%20(2).png",
      link: "https://google.com/",
      title: "Project 1",
      description: "React Js Apple Clone, Project",
    },
    {
      image:
        "https://raw.githubusercontent.com/Govnd5674/PortFolio/main/src/assets/Project%20Images/%20%20(1).png",
      link: "https://google.com/",
      title: "Project 2",
      description: "Responsive Web-Application",
    },
    {
      image:
        "https://raw.githubusercontent.com/Govnd5674/PortFolio/main/src/assets/Project%20Images/%20%20(3).png",
      link: "https://google.com/",
      title: "Project 3",
      description: "GSAP Animation",
    },
    {
      image:
        "https://raw.githubusercontent.com/Govnd5674/PortFolio/main/src/assets/Project%20Images/%20%20(4).png",
      link: "https://github.com/Govnd5674/Web-Projects/tree/main/Sid%20Cup%20Family",
      title: "Project 4",
      description: "Side Cup Clone",
    },
  ];

  const [loading, setLoading] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !loading) {
          setLoading(true);
          setTimeout(() => {
            setLoading(false);
          }, 2000);
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="h-[100vh]" ref={containerRef}>
      {loading ? (
        <div className="flex flex-col items-center justify-center h-full bg-gray-950">
          <SplitText
            text="PROJECTS ..."
            className="text-8xl text-gray-500 font-Mogra font-bold mb-12"
            delay={100}
            animationFrom={{ opacity: 0, transform: "translateY(50px)" }}
            animationTo={{ opacity: 1, transform: "translateY(0)" }}
          />
        </div>
      ) : (
        <div className={styles.fadeInContainer}>
          <div className="bg-gray-950">
            <div className="bg-gray-950 relative">
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-gray-950 to-transparent z-10"></div>
              <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-gray-950 to-transparent z-10"></div>
              <InfiniteMenu items={items} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Page4;

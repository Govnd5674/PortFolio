import React, { useEffect, useState, useRef } from "react";
import styles from "./Page4.module.css";
import InfiniteMenu from "../../blocks/Components/InfiniteMenu/InfiniteMenu";
import SplitText from "../../blocks/TextAnimations/SplitText/SplitText";

const Page4 = () => {
  const items = [
    {
      image: "https://picsum.photos/300/300?grayscale",
      link: "https://google.com/",
      title: "Item 1",
      description: "This is pretty cool, right?",
    },
    {
      image: "https://picsum.photos/400/400?grayscale",
      link: "https://google.com/",
      title: "Item 2",
      description: "This is pretty cool, right?",
    },
    {
      image: "https://picsum.photos/500/500?grayscale",
      link: "https://google.com/",
      title: "Item 3",
      description: "This is pretty cool, right?",
    },
    {
      image: "https://picsum.photos/600/600?grayscale",
      link: "https://google.com/",
      title: "Item 4",
      description: "This is pretty cool, right?",
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

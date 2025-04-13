import React from "react";
import Spline from "@splinetool/react-spline";
import Band from "../band";
import Introname from "../introname";

const Page1 = () => {
  return (
    <section className="relative bg-gray-950 text-gray-100 min-h-screen w-full overflow-hidden">
      <div className="w-full">
        <div className="absolute z-60 w-full">
          <Band position={[0, 0, 20]} gravity={[0, -40, 0]} />
        </div>
        <div
          className="hidden md:block absolute w-full 
          2k:w-[1400px] hd:w-[675px] fhd:w-[900px]
          2k:h-[778px] hd:h-[375px] fhd:h-[500px]
          2k:top-[40%] hd:top-[38%] fhd:top-[41%]
          2k:left-[0%] hd:left-[-4%] fhd:left-[0%]
          z-10"
        >
          <Spline scene="https://prod.spline.design/MDtbA2XKUyIYvkFk/scene.splinecode?hideUI=1&hideBranding=1" />
          <div
            className="absolute z-20 box 
            2k:h-[80px] hd:h-[60px] fhd:h-[70px]
            2k:w-[400px] hd:w-[300px] fhd:w-[350px]
            bg-gray-950 bottom-0 right-0"
          ></div>
        </div>
        <div className="w-full pt-10 md:pt-0">
          <Introname />
        </div>
      </div>
    </section>
  );
};

export default Page1;

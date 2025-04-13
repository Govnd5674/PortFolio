import React from "react";
import Spline from "@splinetool/react-spline";
import Band from "../band";
import Introname from "../introname";

const Page1 = () => {
  return (
    <section className="relative bg-gray-950 text-gray-100 min-h-screen w-full overflow-hidden">
      <div className="w-full">
        <div className="absolute z-0 w-full">
          <Band position={[0, 0, 20]} gravity={[0, -40, 0]} />
        </div>
        <div className="absolute w-[1000px] h-[600px] top-[35%] z-10">
          <Spline scene="https://prod.spline.design/MDtbA2XKUyIYvkFk/scene.splinecode" />
        </div>
        <div className="absolute z-20 box h-[70px] w-[300px] bg-gray-950 bottom-0 left-1/2 transform -translate-x-1/2"></div>
        <div className="w-full">
          <Introname />
        </div>
      </div>
    </section>
  );
};

export default Page1;

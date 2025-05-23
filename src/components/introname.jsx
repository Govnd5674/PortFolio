import React from "react";

import "../index.css";
import "../animation.css";

const Introname = React.memo(() => {
  return (
    <div className="tracking-in-expand-fwd-bottom font-Mogra antialiased overflow-hidden will-change-transform">
      <div className="h-[100%]">
        <h1
          className="tracking-in-contract-bck mt-32 sm:mt-24 md:mt-16 select-none text-gray-500 text-[14vw] sm:text-[14vw] md:text-[14vw] font-bold flex justify-center transform-gpu"
          style={{
            backfaceVisibility: "hidden",
            WebkitFontSmoothing: "antialiased",
            perspective: 1000,
          }}
        >
          HI, I'M GOVIND!
        </h1>
      </div>
    </div>
  );
});

Introname.displayName = "Introname";
export default Introname;

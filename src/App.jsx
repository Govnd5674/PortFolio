import React, { useEffect, useState } from "react";
import BarLoader from "react-spinners/BarLoader";
import "./index.css";
import "./animation.css";
import Nav from "./components/nav";
import WelcomeText from "./components/WelcomeText";
import Page1 from "./components/pages/Page1";
import Page2 from "./components/pages/Page2";
import Page3 from "./components/pages/Page3";
import Page4 from "./components/pages/Page4";
import Page5 from "./components/pages/Page5";

const App = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3100);
  }, []);

  return (
    <div className="bg-gray-950 select-none flex justify-center items-center min-h-screen">
      {/* {loading ? (
        <div className="flex flex-col items-center gap-4">
          <WelcomeText />
          <BarLoader loading={loading} size={30} color="#99a1af" />
          <p className="text-gray-500 text-bold mt-2">npm run dev....</p>
        </div>
      ) : ( */}
        <div className="w-full">
          <Nav />
          <div className="flex flex-col">
            <Page1 />
            <Page2 />
            <Page3 />
            <Page4 />
            <Page5 />
          </div>
        </div>
      {/* )} */}
    </div>
  );
};

export default App;

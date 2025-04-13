import React, { useEffect, useState, Suspense } from "react";
import BarLoader from "react-spinners/BarLoader";
import "./index.css";
import "./animation.css";
import Nav from "./components/nav";
import WelcomeText from "./components/WelcomeText";
import { pages } from "./router";
import { loadComponent } from "./utils/componentLoader";

// Dynamic imports with chunk names
const PageComponents = {
  Page1: React.lazy(() => loadComponent("Page1")),
  Page2: React.lazy(() => loadComponent("Page2")),
  Page3: React.lazy(() => loadComponent("Page3")),
  Page4: React.lazy(() => loadComponent("Page4")),
  Page5: React.lazy(() => loadComponent("Page5")),
};

const App = () => {
  const [loading, setLoading] = useState(false);
  const [showContactButton, setShowContactButton] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3100);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        const rect = contactSection.getBoundingClientRect();
        const shouldShow = rect.top > window.innerHeight;
        if (shouldShow !== showContactButton) {
          setShowContactButton(shouldShow);
        }
      }
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [showContactButton]);

  useEffect(() => {
    const handleError = (error) => {
      console.error("Application Error:", error);
      setError(error);
    };

    window.addEventListener("error", handleError);
    return () => window.removeEventListener("error", handleError);
  }, []);

  // Add intersection observer for lazy loading
  useEffect(() => {
    const observerOptions = {
      rootMargin: "50px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const component = entry.target.dataset.component;
          if (component) {
            import(`./components/pages/${component}.jsx`);
          }
        }
      });
    }, observerOptions);

    document
      .querySelectorAll("[data-component]")
      .forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-950 text-gray-500">
        <h1 className="text-2xl mb-4">Something went wrong</h1>
        <button
          onClick={() => window.location.reload()}
          className="px-4 py-2 bg-gradient-to-r from-[#804D3E] to-[#7E497D] rounded-lg"
        >
          Reload Page
        </button>
      </div>
    );
  }

  return (
    <div className="bg-gray-950 select-none flex justify-center items-center min-h-screen w-full overflow-hidden">
      {loading ? (
        <div className="flex flex-col items-center gap-4">
          <WelcomeText />
          <BarLoader loading={loading} size={30} color="#99a1af" />
          <p className="text-gray-500 text-bold mt-2">npm run dev....</p>
        </div>
      ) : (
        <Suspense
          fallback={
            <div className="flex justify-center items-center min-h-screen">
              <BarLoader color="#99a1af" />
            </div>
          }
        >
          <div className="w-full">
            <Nav />
            <div className="flex flex-col">
              {Object.entries(pages).map(([name, Component]) => (
                <div key={name} data-component={name}>
                  <Suspense
                    fallback={
                      <div className="min-h-screen flex items-center justify-center">
                        <BarLoader color="#99a1af" size={15} />
                      </div>
                    }
                  >
                    <Component />
                  </Suspense>
                </div>
              ))}
            </div>
            <button
              onClick={() =>
                document
                  .getElementById("contact")
                  .scrollIntoView({ behavior: "smooth" })
              }
              className={`fixed bottom-6 right-6 z-50 px-8 py-3 rounded-full font-Mogra
                text-gray-950 bg-gradient-to-r from-[#804D3E] to-[#7E497D]
                transform transition-all duration-500 ease-in-out
                hover:scale-105 hover:shadow-lg hover:from-[#7E497D] hover:to-[#804D3E]
                active:scale-95 hidden sm:block
                ${
                  showContactButton
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10 pointer-events-none"
                }`}
            >
              Contact Me
            </button>
          </div>
        </Suspense>
      )}
    </div>
  );
};

export default React.memo(App);

import "../animation.css";
import GradientText from "../blocks/TextAnimations/GradientText/GradientText";

const Nav = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else {
      console.warn(`Section ${sectionId} not found`);
    }
  };

  return (
    <header className="absolute top-0 w-full py-2 md:py-4 select-none z-50 font-Mogra bg-gray-950/50">
      <nav className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 w-full">
        <div className="tracking-in-contract-bck flex items-center justify-center h-12 md:h-16">
          <div className="flex flex-wrap md:flex-nowrap justify-center gap-4 sm:gap-6 md:gap-20 lg:gap-40 text-sm md:text-xl text-gray-600">
            <GradientText
              colors={["#804D3E", "#7E497D"]}
              animationSpeed={8}
              showBorder={false}
              className="custom-class"
            >
              <button
                onClick={() => scrollToSection("about")}
                className="hover:text-royalOrange transition-colors duration-300"
              >
                About
              </button>
            </GradientText>

            <GradientText
              colors={["#804D3E", "#7E497D"]}
              animationSpeed={8}
              showBorder={false}
              className="custom-class"
            >
              <button
                onClick={() => scrollToSection("skills")}
                className="hover:text-royalOrange transition-colors duration-300"
              >
                Skills
              </button>
            </GradientText>
            <GradientText
              colors={["#804D3E", "#7E497D"]}
              animationSpeed={8}
              showBorder={false}
              className="custom-class"
            >
              <button
                onClick={() => scrollToSection("projects")}
                className="hover:text-royalOrange transition-colors duration-300"
              >
                Projects
              </button>
            </GradientText>
            <GradientText
              colors={["#804D3E", "#7E497D"]}
              animationSpeed={8}
              showBorder={false}
              className="custom-class"
            >
              <button
                onClick={() => scrollToSection("contact")}
                className="hover:text-royalOrange transition-colors duration-300"
              >
                Contact Us
              </button>
            </GradientText>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Nav;

import "../animation.css";
import GradientText from "../blocks/TextAnimations/GradientText/GradientText";

const Nav = () => {
  return (
    <header className="absolute w-full py-2 md:py-4 select-none z-50 font-Mogra overflow-hidden">
      <nav className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 w-full">
        <div className="tracking-in-contract-bck flex items-center justify-center h-12 md:h-16">
          <div className="flex flex-wrap md:flex-nowrap justify-center gap-4 sm:gap-6 md:gap-20 lg:gap-40 text-sm md:text-xl text-gray-600">
            <GradientText
              colors={["#804D3E", "#7E497D"]}
              animationSpeed={8}
              showBorder={false}
              className="custom-class"
            >
              <a
                href="#about"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("about")
                    .scrollIntoView({ behavior: "smooth" });
                }}
                className="hover:text-royalOrange transition-colors duration-300"
              >
                About
              </a>
            </GradientText>

            <GradientText
              colors={["#804D3E", "#7E497D"]}
              animationSpeed={8}
              showBorder={false}
              className="custom-class"
            >
              <a
                href="#skills"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("skills")
                    .scrollIntoView({ behavior: "smooth" });
                }}
                className="hover:text-royalOrange transition-colors duration-300"
              >
                Skills
              </a>
            </GradientText>
            <GradientText
              colors={["#804D3E", "#7E497D"]}
              animationSpeed={8}
              showBorder={false}
              className="custom-class"
            >
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("projects")
                    .scrollIntoView({ behavior: "smooth" });
                }}
                className="hover:text-royalOrange transition-colors duration-300"
              >
                Projects
              </a>
            </GradientText>
            <GradientText
              colors={["#804D3E", "#7E497D"]}
              animationSpeed={8}
              showBorder={false}
              className="custom-class"
            >
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("contact")
                    .scrollIntoView({ behavior: "smooth" });
                }}
                className="hover:text-royalOrange transition-colors duration-300"
              >
                Contact Us
              </a>
            </GradientText>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Nav;

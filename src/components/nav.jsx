import "../animation.css";
import GradientText from "../blocks/TextAnimations/GradientText/GradientText";

const Nav = () => {
  return (
    <header className="fixed w-full py-4 select-none z-50 font-Mogra overflow-hidden">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="tracking-in-contract-bck flex items-center justify-center h-16">
          <div className="flex justify-center gap-40 text-xl text-gray-600">
            <GradientText
              colors={[
                "#804D3E",
                "#7E497D",
                "#7E497D",
                "#804D3E",
                "#804D3E",
                "#7E497D",
                "#7E497D",
              ]}
              animationSpeed={8}
              showBorder={false}
              className="custom-class"
            >
              <a
                href="#about"
                className="hover:text-royalOrange transition-colors duration-300"
              >
                About
              </a>
            </GradientText>

            <GradientText
              colors={[
                "#804D3E",
                "#7E497D",
                "#7E497D",
                "#804D3E",
                "#804D3E",
                "#7E497D",
                "#7E497D",
              ]}
              animationSpeed={8}
              showBorder={false}
              className="custom-class"
            >
              <a
                href="#services"
                className="hover:text-royalOrange transition-colors duration-300"
              >
                Services
              </a>
            </GradientText>
            <GradientText
              colors={[
                "#804D3E",
                "#7E497D",
                "#7E497D",
                "#804D3E",
                "#804D3E",
                "#7E497D",
                "#7E497D",
              ]}
              animationSpeed={8}
              showBorder={false}
              className="custom-class"
            >
              <a
                href="#projects"
                className="hover:text-royalOrange transition-colors duration-300"
              >
                Projects
              </a>
            </GradientText>
            <GradientText
              colors={[
                "#804D3E",
                "#7E497D",
                "#7E497D",
                "#804D3E",
                "#804D3E",
                "#7E497D",
                "#7E497D",
              ]}
              animationSpeed={8}
              showBorder={false}
              className="custom-class"
            >
              <a
                href="#contact"
                className="hover:text-royalOrange transition-colors duration-300"
              >
                Contact Us
              </a>
            </GradientText>
          </div>
        </div>
        {/* </GradientText> */}
      </nav>
    </header>
  );
};

export default Nav;

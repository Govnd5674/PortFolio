import React from "react";
import Ballpit from "../../blocks/Backgrounds/Ballpit/Ballpit";
import {
  FaGithub,
  FaLinkedin,
  FaPhone,
  FaEnvelope,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";
import SplitText from "../../blocks/TextAnimations/SplitText/SplitText";

const Page5 = () => {
  const socialLinks = [
    {
      icon: <FaGithub size={24} />,
      url: "https://github.com/Govnd5674",
      label: "GitHub",
    },
    {
      icon: <FaLinkedin size={24} />,
      url: "https://www.linkedin.com/in/govind-chudari/",
      label: "LinkedIn",
    },
    {
      icon: <FaInstagram size={24} />,
      url: "https://instagram.com/govind_chudari",
      label: "Instagram",
    },
    {
      icon: <FaWhatsapp size={24} />,
      url: "https://wa.me/919383860325",
      label: "WhatsApp",
    },
    {
      icon: <FaPhone size={24} />,
      url: "tel:+919383860325",
      label: "Phone",
    },
    {
      icon: <FaEnvelope size={24} />,
      url: "mailto:govindchudari@email.com",
      label: "Email",
    },
  ];

  return (
    <div
      id="contact"
      className="min-h-screen bg-gray-950 text-gray-500 flex flex-col justify-center items-center"
    >
      {/* Contact Form Section */}
      <div className="flex-grow max-w-4xl w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16 flex flex-col justify-center">
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <SplitText
            text="GET IN TOUCH ..."
            className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-gray-500 font-Mogra font-bold"
            delay={100}
            animationFrom={{ opacity: 0, transform: "translateY(50px)" }}
            animationTo={{ opacity: 1, transform: "translateY(0)" }}
          />
        </div>

        <form className="space-y-4 sm:space-y-6 max-w-2xl mx-auto w-full">
          <div className="grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-2">
            <input
              type="text"
              placeholder="Name"
              className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-2 sm:py-3 focus:outline-none focus:border-[#7E497D]"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-2 sm:py-3 focus:outline-none focus:border-[#7E497D]"
            />
          </div>
          <textarea
            placeholder="Message"
            rows={6}
            className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-2 sm:py-3 focus:outline-none focus:border-[#7E497D]"
          />
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-[#804D3E] to-[#7E497D] text-white py-2 sm:py-3 rounded-lg hover:opacity-90 transition-opacity text-sm sm:text-base"
          >
            Send Message
          </button>
        </form>
      </div>

      <div className="relative w-full h-16">
        <button
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}
          className="absolute right-6 bottom-6 z-[100] w-12 h-12
                        grid place-items-center
                        bg-gradient-to-r from-[#804D3E] to-[#7E497D]
                        border-2 border-black rounded-full
                        transform transition-all duration-500 ease-in-out
                        hover:scale-105 hover:shadow-lg hover:from-[#7E497D] hover:to-[#804D3E]
                        active:scale-95"
        >
          <span className="text-gray-950 text-2xl">↑</span>
        </button>
      </div>

      <footer className="border-t border-gray-800 w-full">
        <div className="max-w-7xl mx-auto py-6 sm:py-8 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center space-y-4">
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#804D3E] transition-colors duration-300 scale-90 sm:scale-100"
                >
                  <span className="sr-only">{link.label}</span>
                  {React.cloneElement(link.icon, {
                    size:
                      typeof window !== "undefined" && window.innerWidth < 640
                        ? 20
                        : 24,
                  })}
                </a>
              ))}
            </div>
            <div className="text-center">
              <p className="text-xs sm:text-sm text-gray-500">
                © {new Date().getFullYear()} Portfolio. Built with passion.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Page5;

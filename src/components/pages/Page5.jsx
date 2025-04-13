import React from "react";
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
      url: "https://instagram.com/govind_chudari", // Replace with your Instagram profile
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
    <div className="min-h-screen bg-gray-950 text-gray-300">
      {/* Contact Form Section */}
      <div className="max-w-4xl mx-auto pt-20 px-4 sm:px-6 lg:px-8">
        <div className="text-4xl font-bold text-center mb-20 mt-28 text-gray-500">
          <SplitText
            text="GET IN TOUCH ..."
            className="text-8xl text-gray-500 font-Mogra font-bold mb-12"
            delay={100}
            animationFrom={{ opacity: 0, transform: "translateY(50px)" }}
            animationTo={{ opacity: 1, transform: "translateY(0)" }}
          />
        </div>

        <form className="space-y-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <input
              type="text"
              placeholder="Name"
              className="bg-gray-900 border border-gray-800 rounded-lg px-4 py-2 focus:outline-none focus:border-[#7E497D]"
            />
            <input
              type="email"
              placeholder="Email"
              className="bg-gray-900 border border-gray-800 rounded-lg px-4 py-2 focus:outline-none focus:border-[#7E497D]"
            />
          </div>
          <textarea
            placeholder="Message"
            rows={6}
            className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-2 focus:outline-none focus:border-[#7E497D]"
          />
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-[#804D3E] to-[#7E497D] text-white py-3 rounded-lg hover:opacity-90 transition-opacity"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Footer Section */}
      <footer className="mt-20 border-t border-gray-800">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center space-y-4">
            <div className="flex space-x-6">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#804D3E] transition-colors duration-300 group"
                >
                  <span className="sr-only">{link.label}</span>
                  {link.icon}
                </a>
              ))}
            </div>
            <div className="text-center">
              <p className="text-sm text-gray-500">
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

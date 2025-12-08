import { useState } from "react";
import Placeholder from "../assets/user-profile.svg";

const About: React.FC = () => {
  //const [isVisible, setIsVisible] = useState(false);
  const [hasHovered, setHasHovered] = useState(false);

  return (
    <section id="about" className="max-w-6xl mx-auto px-6 py-20">
      <h2 className="text-4xl md:text-5xl font-bold font-orbitron gradient-text mb-12 relative inline-block">
        About Me
        <div className="absolute -bottom-4 left-0 w-12 h-1 bg-linear-to-r from-yellow-300 to-orange-300 rounded"></div>
      </h2>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <p className="text-lg text-white/90 leading-relaxed">
            Hello! I'm <strong className="text-white">Joel Ojukwu</strong>, a
            Junior Frontend Developer. My current focus lies within my expertise
            in React, Typescript, TailwindCSS, Figma, Python, React Native, Git
            and more. I specialize in creating engaging and enjoyable user
            experience.
          </p>

          <p className="text-lg text-white/90 leading-relaxed">
            I've developed a strong foundation in React Typescript and
            TailwindCSS. I enjoy studying other projects to use as inspiration
            as I aim to improve whilst building my own projects.
          </p>
          <p className="text-lg text-white/90 leading-relaxed">
            I continue to learn new technology and frameworks in this expansive
            ecosytem and gain expertise in more disciplines. Currently employed
            at CloudSpace Tech.
          </p>
        </div>

        <div className="relative">
          <div
            className="relative z-10 rounded-xl overflow-hidden shadow-2xl transition-transform duration-500 hover:scale-105"
            onMouseEnter={() => setHasHovered(true)}
          >
            <img
              src={Placeholder}
              alt="Ojukwu Joel"
              className="w-full h-full object-cover"
            />
          </div>

          <div
            className={`absolute -top-6 -left-6 w-full h-full border-2 border-green-500 rounded-xl z-0 transition-all duration-500 ${
              hasHovered ? "-top-4 -left-4" : ""
            }`}
          />
          <div
            className={`absolute -bottom-6 -right-6 w-full h-full border-2 border-fuchsia-500 rounded-xl z-0 transition-all duration-500 ${
              hasHovered ? "-bottom-4 -right-4" : ""
            }`}
          />
        </div>
      </div>
    </section>
  );
};

export default About;

import { useState } from "react";
import Placeholder from "../assets/user-profile.svg";
import ProfileCard from "../animations/ProfileCard";
import AboutmeText from "@/Text/aboutme";

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
          <div className="text-lg text-white/90 leading-relaxed about-me-text">
            <AboutmeText />
          </div>
        </div>

        <div className="relative">
          <div
            className="relative z-10 rounded-xl overflow-hidden shadow-2xl transition-transform duration-500 hover:scale-105"
            onMouseEnter={() => setHasHovered(true)}
          >
            <ProfileCard
              name="Joel Ojukwu"
              title="Junior Frontend Developer"
              handle="joeljokyu"
              status="Online"
              contactText="Contact Me"
              avatarUrl={Placeholder}
              showUserInfo={false}
              enableTilt={true}
              enableMobileTilt={true}
              onContactClick={() => console.log("Contact clicked")}
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

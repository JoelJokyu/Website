import { useEffect, useState } from "react";
import Github from "../assets/github.svg";
import Linkedin from "../assets/linkedin.svg";
import ArrowUp from "../assets/arrow-up.svg";
import myPdf from "../assets/Joel_Ojukwu_Resume.pdf";
import CV from "../assets/cv.svg"

const Footer: React.FC = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-white/10 bg-slate-950/50 backdrop-blur-sm mt-20">
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* social links */}
        <div className="flex justify-center gap-6 mb-8">
          {[
            { icon: Github, link: "https://github.com/JoelJokyu" },
            { icon: Linkedin, link: "/" },
            { icon: CV, link: myPdf },
          ].map((social) => {
            const IconComponent = social.icon;
            return (
              <a
                key={social.link}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-white/10 hover:bg-linear-to-r hover:from-yellow-300 hover:to-orange-300 flex items-center justify-center text-white hover:-translate-y-1 transition-all duration-300"
              >
                <img src={IconComponent} className="w-6 h-6" />
              </a>
            );
          })}
        </div>

        {/* copyright */}
        <p className="text-center text-white/50 text-sm">
          &copy; {new Date().getFullYear()} Ojukwu Joel. All rights reserved.
        </p>
      </div>

      {/* back to top button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-linear-to-r from-yellow-300 to-orange-300 flex items-center justify-center text-white hover:-translate-y-1 transition-all duration-300 shadow-lg shadow-yellow-300/50"
          aria-label="Back to top"
        >
          <img src={ArrowUp} className="w-6 h-6 " />
        </button>
      )}
    </footer>
  );
};

export default Footer;

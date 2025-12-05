import { useEffect, useState } from "react";
import myPdf from "../assets/Joel_Ojukwu_Resume.pdf";
import close from "../assets/close.svg";
import menu from "../assets/menu.svg";

const Navigation: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 py-6 transition-all duration-300 ${
        scrollY > 0
          ? "bg-slate-950/80 backdrop-blur-lg border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="gradient-text text-2xl font-bold font-orbitron">
        <a href={myPdf} target="_blank">
          <span className="font-extralight text-[10px]">click for</span> My
          Resumé
        </a>
      </div>

      <div className="hidden md:flex gap-8">
        {["about", "skills", "projects", "experience", "contact"].map(
          (link) => (
            <button
              key={link}
              onClick={() => scrollToSection(link)}
              className="text-white/90 hover:text-green-500 capitalize font-mediumtransition-colors duration-300 relative group"
            >
              {link}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-linear-to-r from-yellow-300 to-orange-300 group-hover:w-full transition-all duration-300"></span>
            </button>
          )
        )}
      </div>
      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="md:hidden text-white"
        aria-label="Toggle menu"
      >
        {mobileMenuOpen ? (
          <img src={close} className="h-8 w-8 bg-gray-100" />
        ) : (
          <img src={menu} className="h-8 w-8 bg-gray-100" />
        )}
      </button>

      <div
        className={`fixed top-0 right-0 h-full w-64 bg-slate-950/95 backdrop-blur-lg border-l border-white/10 transform transition-transform duration-300 ease-in-out md:hidden ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ paddingTop: "80px" }}
      >
        <div className="flex flex-col gap-6 px-6">
          {["about", "skills", "experience", "projects", "contact"].map(
            (link) => (
              <button
                key={link}
                onClick={() => scrollToSection(link)}
                className="text-white/90 capitalize font-medium transition-colors text-left text-lg"
              >
                {link}
              </button>
            )
          )}
        </div>
      </div>

      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/40 md:hidden z-40"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}
    </nav>
  );
};

export default Navigation;

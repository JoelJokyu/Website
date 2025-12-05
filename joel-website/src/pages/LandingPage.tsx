import React from "react";
import About from "../components/about";
import Contact from "../components/contacts";
import Header from "../components/header";
import Projects from "../components/projects";
import Skills from "../components/skills";
import Experience from "../components/experience";


const LandingPage: React.FC = () => {
  return (
    <div>
      <Header />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </div>
  );
};

export default LandingPage;

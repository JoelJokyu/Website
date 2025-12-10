import React from "react";
import TextType from "@/animations/TextType";

const AboutmeText: React.FC = () => {
  const paragraph1 = `Hello! I'm Joel, a Junior Frontend Developer. My current focus lies within my expertise in React, Typescript, TailwindCSS, Figma, Svelte and more. I specialise in creating engaging and enjoyable user experience.`;
  const paragraph2 = `I've developed a strong foundation in React Typescript and TailwindCSS. I enjoy studying other projects to use as inspiration as I aim to improve whilst building my own projects.`;
  const paragraph3 = `I continue to learn new technology and frameworks in this expansive ecosystem and gain expertise in more disciplines. Currently employed at CloudSpace Tech.`;
  return (
    <div>
      <TextType
        text={[paragraph1, paragraph2, paragraph3]}
        typingSpeed={100}
        pauseDuration={5000}
        showCursor={true}
        cursorCharacter="_"
        className="about-me-text"
      />
    </div>
  );
};

export default AboutmeText;

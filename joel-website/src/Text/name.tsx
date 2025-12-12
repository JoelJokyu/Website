import DecryptedText from "../animations/DecryptedText";

import React from "react";

const Name: React.FC = () => {
  return (
    <div style={{ marginTop: "4rem" }}>
      <DecryptedText
        text="Ojukwu Joel C."
        animateOn="both"
        revealDirection="center"
      />
    </div>
  );
};

export default Name;

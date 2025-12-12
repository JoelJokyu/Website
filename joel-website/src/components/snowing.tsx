import React from "react";

const Snowing: React.FC = () => {
  const count = 15; // number of snowflakes
  const snowflakes = Array.from({ length: count });

  return (
    <div>
      {snowflakes.map((_, i) => (
        <div key={i} className="snowflake">
          ❄
        </div>
      ))}
    </div>
  );
};

export default Snowing;

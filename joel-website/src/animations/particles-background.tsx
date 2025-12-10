import { useEffect, useRef } from "react";

const ParticlesBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const particleCount = 30;

    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement("div");

      const size = Math.random() * 4 + 2;
      const duration = Math.random() * 20 + 10;
      const delay = Math.random() * 10;
      const left = Math.random() * 100;
      const top = Math.random() * 100;

      particle.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        background: white;
        border-radius: 50%;
        opacity: 0.1;
        left: ${left}%;
        top: ${top}%;
        animation: float ${duration}s linear infinite;
        animation-delay: ${delay}s;
      `;

      containerRef.current.appendChild(particle);
    }
  }, []);
  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-0 pointer-events-none"
      style={{
        background: `
          radial-gradient(circle at 75% 30%, rgba(135, 206, 235, 0.15) 0%, transparent 50%),
          radial-gradient(circle at 25% 70%, rgba(255, 204, 51, 0.15) 0%, transparent 50%)
        `,
      }}
    />
  );
};

export default ParticlesBackground;

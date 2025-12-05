import react from "../assets/react.svg";
import tailwindcss from "../assets/tailwindcss.svg";
import typescript from "../assets/typescript.svg";
import figma from "../assets/figma.svg";

const skills = [
  {
    icon: typescript,
    title: "TypeScript",
    description:
      "Enhancing JavaScript with static typing for improved code quality and maintainability.",
  },
  {
    icon: react,
    title: "React",
    description: "Usually with Typescript for type safety and better DX.",
  },
  {
    icon: tailwindcss,
    title: "Tailwind CSS",
    description:
      "For rapid and responsive UI development with utility-first approach.",
  },
  {
    icon: figma,
    title: "Figma",
    description:
      "Designing user interfaces and experiences with Figma for prototyping and collaboration.",
  },
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="max-w-6xl mx-auto px-6 py-20">
      <h2 className="text-4xl md:text-5xl font-bold font-orbitron gradient-text mb-12 relative inline-block">
        Skills
        <div className="absolute -bottom-4 left-0 w-12 h-1 bg-linear-to-r from-yellow-300 to-orange-300 rounded"></div>
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {skills.map((skill) => {
          const IconComponent = skill.icon;
          return (
            <div
              key={skill.title}
              className="glass rounded-xl p-8 hover:-translate-y-3 hover:shadow-xl hover:shadow-yellow-300/20 transition-all duration-300 border-yellow-300 hover:border-orange-300 group cursor-pointer"
            >
              <img
                src={IconComponent}
                className="w-10 h-10 text-green-400 mb-4 group-hover:text-fuchsia-400 transition-colors"
              />
              <h3 className="text-xl font-bold mb-3 text-white">
                {skill.title}
              </h3>
              <p className="text-white/70 text-sm leading-relaxed">
                {skill.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;

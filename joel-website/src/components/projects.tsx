import Github from "../assets/github.svg";
import ExternalLink from "../assets/external-link.svg";

const projects = [
  {
    title: "Project 1",
    description: "Placeholder for Project 1 description",
    image: "../assets/user-profile.svg",
    tags: ["React", "Typescript", "Tailwind", "API"],
    links: {
      demo: "#",
      github: "https://github.com/JoelJokyu",
    },
  },
  {
    title: "Project 2",
    description: "Placeholder for Project 2 description",
    image: "../assets/user-profile.svg",
    tags: ["React", "Typescript", "Tailwind", "API"],
    links: {
      demo: "#",
      github: "https://github.com/JoelJokyu",
    },
  },
  {
    title: "Project 3",
    description: "Placeholder for Project 3 description",
    image: "../assets/user-profile.svg",
    tags: ["React", "Typescript", "Tailwind", "API"],
    links: {
      demo: "#",
      github: "https://github.com/JoelJokyu",
    },
  },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 py-20">
      <h2 className="text-4xl md:text-5xl font-bold font-orbitron gradient-text mb-12 relative inline-block">
        Personal Projects
        <div className="absolute -bottom-4 left-0 w-12 h-1 bg-linear-to-r from-yellow-300 to-orange-300 rounded"></div>
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.title}
            className="glass rounded-xl overflow-hidden hover:-translate-y-3 hover:shadow-xl hover:shadow-orange-300/20 transition-all duration-300 group border-green-600/20 hover:border-green-600/50 flex flex-col"
          >
            {/* image */}
            <div className="relative h-48 overflow-hidden">
              <img
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-linear-to-r from-yellow-300 to-orange-300 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
            </div>

            {/* content */}
            <div className="p-6 flex flex-col grow">
              <h3 className="text-xl font-bold text-white mb-2">
                {project.title}
              </h3>
              <p className="text-white/70 text-sm mb-4 grow">
                {project.description}
              </p>
              {/* tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs bg-white/5 text-white/70 px-3 py-1 rounded-full border border-white/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* links */}
              <div className="flex gap-3">
                <a
                  href={project.links.demo}
                  className="flex-1 flex items-center justify-center gap-2 bg-linear-to-r from-yellow-300 to-orange-300 hover:shadow-lg hover:shadow-yellow-300/50 rounded-full py-2 px-4 text-sm font-semibold transition-all duration-300 hover:-translate-y-1"
                >
                  <img src={ExternalLink} className="w-4 h-4" />
                  Demo
                </a>
                <a
                  href={project.links.github}
                  className="flex-1 flex items-center justify-center gap-2 glass hover:bg-white/10 rounded-full py-2 px-4 text-sm font-semibold transition-all duration-300 hover:-translate-y-1"
                >
                  <img src={Github} className="w-4 h-4" />
                  Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

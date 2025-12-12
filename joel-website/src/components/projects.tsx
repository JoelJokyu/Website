import Github from "../assets/github.svg";
import ExternalLink from "../assets/external-link.svg";
import { useState } from "react";
import ChevronDown from "../assets/chevron-down.svg";
import AnimatedContent from "@/animations/AnimatedContent";
import ElectricBorder from "@/animations/ElectricBorder";

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
  const [displayedCount, setDisplayedCount] = useState(3);
  const projectsPerLoad = 3;
  const hasMoreProjects = displayedCount < projects.length;

  const visibleProjects = projects.slice(0, displayedCount);

  const handleLoadMore = () => {
    setDisplayedCount((prev) =>
      Math.min(prev + projectsPerLoad, projects.length)
    );
  };

  return (
    <section
      id="projects"
      className="max-w-6xl mx-auto px-4 md:px-6 py-16 md:py-20"
    >
      <AnimatedContent>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-orbitron gradient-text mb-8 md:mb-12 relative inline-block">
          Personal Projects
          <div className="absolute -bottom-4 left-0 w-12 h-1 bg-linear-to-r from-yellow-300 to-orange-300 rounded"></div>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-10">
          {visibleProjects.map((project) => (
            <ElectricBorder
              color="#FDE047"
              speed={1}
              chaos={0.5}
              thickness={2}
              style={{ borderRadius: 16 }}
              className="hover:scale-105 hover:border-yellow-300/50"
            >
              <div
                key={project.title}
                className="glass rounded-xl overflow-hidden hover:scale-105 hover:shadow-xl hover:shadow-orange-300/20 transition-all duration-300 group border border-orange-300/20 hover:border-orange-300/50 flex flex-col"
              >
                <div className="relative h-40 md:h-48 overflow-hidden">
                  <img
                    src={
                      project.image ||
                      "/placeholder.svg?height=200&width=400&query=project"
                    }
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-linear-to-r from-yellow-300 to-orange-300 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                </div>

                <div className="p-4 md:p-6 flex flex-col grow">
                  <h3 className="text-lg md:text-xl font-bold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-white/70 text-xs md:text-sm mb-4 grow line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs bg-white/5 text-white/70 px-2 md:px-3 py-1 rounded-full border border-white/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-2 md:gap-3">
                    <a
                      href={project.links.demo}
                      className="flex-1 flex items-center justify-center gap-1 md:gap-2 bg-linear-to-r from-yellow-300 to-orange-300 hover:shadow-lg hover:shadow-yellow-300/50 hover:-translate-y-1 cursor-pointer rounded-full py-2 px-3 md:px-4 text-xs md:text-sm font-semibold transition-all duration-300"
                    >
                      <img
                        src={ExternalLink}
                        className="w-3 h-3 md:w-4 md:h-4"
                      />
                      <span className="hidden sm:inline">Demo</span>
                      <span className="sm:hidden">View</span>
                    </a>
                    <a
                      href={project.links.github}
                      className="flex-1 flex items-center justify-center gap-1 md:gap-2 glass hover:bg-white/10 rounded-full py-2 px-3 md:px-4 text-xs md:text-sm font-semibold transition-all duration-300 hover:-translate-y-1"
                    >
                      <img src={Github} className="w-3 h-3 md:w-4 md:h-4" />
                      <span className="hidden sm:inline">Code</span>
                      <span className="sm:hidden">Git</span>
                    </a>
                  </div>
                </div>
              </div>
            </ElectricBorder>
          ))}
        </div>

        {projects.length > 3 && (
          <div className="flex justify-center mt-8 md:mt-12">
            <button
              onClick={handleLoadMore}
              disabled={!hasMoreProjects}
              className={`flex items-center gap-2 px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold transition-all duration-300 ${
                hasMoreProjects
                  ? "bg-linear-to-r from-yellow-300 to-orange-300 hover:shadow-lg hover:shadow-yellow-300/50 hover:-translate-y-1 cursor-pointer"
                  : "bg-white/5 text-white/40 cursor-not-allowed border border-white/10"
              }`}
            >
              {hasMoreProjects ? "Load More Projects" : "All Projects Loaded"}
              <img
                src={ChevronDown}
                className={`w-5 h-5 transition-opacity ${
                  !hasMoreProjects && "opacity-40"
                }`}
              />
            </button>
          </div>
        )}

        <p className="text-center text-white/50 text-sm mt-6 md:hidden">
          Viewing {visibleProjects.length} of {projects.length} projects
        </p>
      </AnimatedContent>
    </section>
  );
};

export default Projects;

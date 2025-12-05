import Study from "../assets/study.svg";
import Work from "../assets/work.svg";

const education = [
  {
    school: "New Jersey Institute of Technology",
    degree: "B.Sc Electrical and Computer Engineering",
    period: "2019 - 2023",
  },
];

const workExperience = [
  {
    company: "CloudSpace Technology",
    position: "Junior Developer",
    period: "2025 - {current}",
  },
  {
    company: "PSE&G",
    position: "Associate Engineer",
    period: "2023 - 2024",
  },
];

const Experience: React.FC = () => {
  return (
    <section id="experience" className="max-w-6xl mx-auto px-6 py-20">
      <h2 className="text-4xl md:text-5xl font-bold font-orbitron gradient-text mb-12 relative inline-block">
        Experience & Education
        <div className="absolute -bottom-4 left-0 w-12 h-1 bg-linear-to-r from-yellow-300 to-orange-300 rounded"></div>
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {/* education */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-full bg-linear-to-r from-yellow-300 to-orange-300 flex items-center justify-center shrink-0">
              <img src={Study} className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-2xl font-bold font-orbitron text-white">
              Education
            </h3>
          </div>

          <div className="space-y-6">
            {education.map((edu, index) => (
              <div
                key={index}
                className="glass rounded-lg p-6 border-l-4 border-yellow-300 hover:border-orange-300 transition-colors duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-yellow-300/10"
              >
                <h4 className="text-lg font-bold text-white mb-2">
                  {edu.school}
                </h4>
                <p className="text-green-500 font-medium mb-2">{edu.degree}</p>
                <p className="text-white/50 text-sm">{edu.period}</p>
              </div>
            ))}
          </div>
        </div>

        {/* work experience */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-full bg-linear-to-r from-yellow-300 to-orange-300 flex items-center justify-center shrink-0">
              <img src={Work} className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-2xl font-bold font-orbitron text-white">
              Work Experience
            </h3>
          </div>

          <div className="space-y-6">
            {workExperience.map((job, index) => (
              <div
                key={index}
                className="glass rounded-lg p-6 border-l-4 border-orange-300 hover:border-yellow-300 transition-colors duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-orange-300/10"
              >
                <h4 className="text-lg font-bold text-white mb-2">
                  {job.company}
                </h4>
                <p className="text-green-500 font-medium mb-2">
                  {job.position}
                </p>
                <p className="text-white/50 text-sm">{job.period}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

const Header: React.FC = () => {
  return (
    <header className="relative pt-32 pb-20 px-6 text-center overflow-hidden border-b border-white/10 mt-12">
      {/* animated gradient background */}
      <div
        className="absolute inset-0 opacity-10 animate-spin pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom right, transparent 0%, transparent 49%, rgb(204, 204, 255) 50%, transparent 51%, transparent 100%)",
          animationDuration: "8s",
        }}
      />

      <div className="relative z-10 max-w-3xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold font-orbitron gradient-text mb-6 uppercase tracking-wider text-glow-animation">
          Ojukwu Joel C.
        </h1>

        <p className="text-xl md:text-2xl text-white/90 mb-8">
          Electrical and Computer Engineer
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          {[
            "Web Development",
            "Frontend Development",
            "UI/UX Design",
            "Web Design",
          ].map((tag) => (
            <div
              key={tag}
              className="glass px-6 py-2 rounded-full hover:bg-white/10 hover:shadow-lg hover:shadow-yellow-300/30 hover:-translate-y-1 transition-all duration-300 cursor-pointer"
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;

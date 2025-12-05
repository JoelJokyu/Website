import "./App.css";
import Footer from "./components/footer";
import Navigation from "./components/navigation";
import ParticlesBackground from "./components/particles-background";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white relative overflow-x-hidden">
      <ParticlesBackground />
      <Navigation />
      <main className="relative z-10">
        <LandingPage />
      </main>

      <Footer />
    </div>
  );
}

export default App;

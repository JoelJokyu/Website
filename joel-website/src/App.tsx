import "./App.css";
import Footer from "./components/footer";
import Navigation from "./components/navigation";
//import ParticlesBackground from "./animations/particles-background";
import LandingPage from "./pages/LandingPage";
import FadeContent from "./animations/FadeContent";

import Galaxy from "./animations/Galaxy";

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white relative overflow-x-hidden">
      <Galaxy />
      <Navigation />
      <main className="relative z-10">
        <FadeContent>
          <LandingPage />
        </FadeContent>
      </main>

      <Footer />
    </div>
  );
}

export default App;

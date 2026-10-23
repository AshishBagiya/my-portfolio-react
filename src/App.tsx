import { Experience } from "./components/experience";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { Hero } from './components/hero';
import { Projects } from "./components/projects";
import { Skills } from "./components/skills";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans">
      <Header/>
      <main className="max-w-5xl mx-auto px-6 py-4 space-y-15">
      <Hero/>
      <Skills/>
      <Experience/>
      <Projects/>
      
      </main>
      <Footer/>
    </div>
  );
}
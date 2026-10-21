import { ExternalLink } from "lucide-react";
import { Hero } from './components/hero';
import { portfolioData } from "./data/portfolio";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-slate-950/80 border-b border-slate-800 px-6 py-4 flex justify-between items-center max-w-5xl mx-auto">
        <span className="font-mono font-bold text-lg text-emerald-400">{portfolioData.name}</span>
        <div className="flex gap-4 items-center">
          <span className="text-xs bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 px-3 py-1 rounded-full font-medium">
            {portfolioData.availability}
          </span>
        </div>
      </header>



      <main className="max-w-5xl mx-auto px-6 py-16 space-y-24">
      <Hero/>

        {/* Projects */}
        <section className="space-y-8">
          <h2 className="text-2xl font-bold border-b border-slate-800 pb-3">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {portfolioData.projects.map((proj, idx) => (
              <div key={idx} className="bg-slate-900/60 border border-slate-800/80 p-6 rounded-xl hover:border-slate-700 transition flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-semibold mb-2">{proj.title}</h3>
                  <p className="text-slate-400 text-sm mb-4 leading-relaxed">{proj.description}</p>
                </div>
                <div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {proj.tech.map((t, i) => (
                      <span key={i} className="text-xs bg-slate-800 text-slate-300 px-2.5 py-1 rounded font-mono">{t}</span>
                    ))}
                  </div>
                  <a href={proj.github} target="_blank" className="inline-flex items-center gap-1.5 text-sm text-emerald-400 hover:underline">
                    View Source <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section className="space-y-8">
          <h2 className="text-2xl font-bold border-b border-slate-800 pb-3">Technical Arsenal</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {Object.entries(portfolioData.skills).map(([category, items]) => (
              <div key={category} className="bg-slate-900/40 border border-slate-800/60 p-5 rounded-xl">
                <h3 className="capitalize text-sm font-semibold text-emerald-400 mb-3 font-mono">{category}</h3>
                <ul className="space-y-1.5 text-sm text-slate-300">
                  {items.map((skill, i) => (
                    <li key={i}>• {skill}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-900 py-8 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} {portfolioData.name}. Deployed via GitHub Actions.
      </footer>
    </div>
  );
}
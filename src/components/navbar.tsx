import { portfolioData } from "../data/portfolio";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-slate-950/80 border-b border-slate-800 px-6 py-4">
      <div className="max-w-5xl mx-auto flex justify-between items-center">
        <a href="#" className="font-mono font-bold text-lg text-emerald-400">
          &lt;{portfolioData.name} /&gt;
        </a>
        <div className="flex gap-4 items-center">
          <span className="text-xs bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 px-3 py-1 rounded-full font-medium">
            {portfolioData.availability}
          </span>
        </div>
      </div>
    </header>
  );
}
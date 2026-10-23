import { Terminal } from "lucide-react";
import { portfolioData } from "../data/portfolio";

export function Hero(){
    return (
        <section className="space-y-6">
          <div className="inline-flex items-center gap-2 text-sm text-slate-400 font-mono bg-slate-900 border border-slate-800 px-3 py-1.5 rounded-lg">
            <Terminal size={16} className="text-emerald-400" /> Backend & System Design Specialist
          </div>
          <h1 className="text-4xl sm:text-6x2 font-extrabold tracking-tight">
            Building reliable, scalable backend architectures.
          </h1>
          <p className="text-lg text-slate-400 leading-relaxed">
            {portfolioData.summary}
          </p>
        </section>
    )
}

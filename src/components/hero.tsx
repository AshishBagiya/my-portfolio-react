import { Terminal } from "lucide-react";
import { portfolioData } from "../data/portfolio";
import { Contact } from "./contact";

export function Hero(){
    return (
        <main className="max-w-5xl mx-auto px-6 py-16 space-y-24">
        <section className="space-y-6">
          <div className="inline-flex items-center gap-2 text-sm text-slate-400 font-mono bg-slate-900 border border-slate-800 px-3 py-1.5 rounded-lg">
            <Terminal size={16} className="text-emerald-400" /> Backend & System Design Specialist
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight">
            Building reliable, scalable backend architectures.
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
            {portfolioData.summary}
          </p>
         <Contact></Contact>
        </section>
      </main>
    )
}

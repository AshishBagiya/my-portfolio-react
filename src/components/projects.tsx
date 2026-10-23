import { ExternalLink } from "lucide-react"
import { portfolioData } from "../data/portfolio"
export function Projects() {
    return (
         <section className="space-y-6">
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

    )
}
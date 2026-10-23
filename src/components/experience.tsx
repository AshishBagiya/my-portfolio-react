import { Briefcase, Calendar, MapPin } from "lucide-react";
import { portfolioData } from "../data/portfolio";

export function Experience() {
    return(
        <section className="py-8 max-w-4xl mx-auto">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-white tracking-tight">Work Experience</h2>
          <p className="text-slate-400 text-sm mt-1">
            A summary of my professional background and engineering contributions.
          </p>
        </div>
  
        <div className="space-y-8 relative before:absolute before:inset-0 before:left-3.5 before:w-0.5 before:bg-slate-800">
          {portfolioData.experience.map((exp) => (
            <div className="relative pl-10 group">
              {/* Timeline indicator node */}
              <div className="absolute left-1.5 top-1.5 w-4 h-4 rounded-full border-2 border-indigo-500 bg-slate-950 group-hover:bg-indigo-500 transition-colors duration-200" />
  
              <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 shadow-sm hover:border-slate-700 transition">
                {/* Header: Role & Period */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
                  <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                    <Briefcase className="w-4 h-4 text-indigo-400" />
                    {exp.role}
                  </h3>
                  <span className="text-xs font-medium text-indigo-300 bg-indigo-950/60 border border-indigo-800/50 px-2.5 py-1 rounded-full flex items-center gap-1 w-fit">
                    <Calendar className="w-3 h-3" />
                    {exp.period}
                  </span>
                </div>
  
                {/* Sub-header: Company & Location */}
                <div className="flex items-center gap-3 text-sm text-slate-400 mb-4">
                  <span className="font-medium text-slate-300">{exp.company}</span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" />
                    {exp.location}
                  </span>
                </div>
  
                {/* Point-wise list */}
                <ul className="space-y-2 mb-5">
                  {exp.highlights.map((point, idx) => (
                    <li key={idx} className="text-sm text-slate-300 flex items-start gap-2.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-indigo-400 mt-2 shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
  
                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-800/80">
                  {exp.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2.5 py-0.5 rounded-md bg-slate-800 text-slate-300 font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    )
}
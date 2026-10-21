import { portfolioData } from "../data/portfolio";
import { Mail } from "lucide-react";
import { FaGithub } from "react-icons/fa";
export function Contact() {
    return (
        <div className="flex gap-4 pt-2">
        <a href={portfolioData.socials.email} className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold px-5 py-2.5 rounded-lg flex items-center gap-2 transition">
          <Mail size={18} /> Contact Me
        </a>
        <a href={portfolioData.socials.github} target="https://github.com/AshishBagiya" className="border border-slate-800 hover:border-slate-700 bg-slate-900 px-5 py-2.5 rounded-lg flex items-center gap-2 transition">
          <FaGithub size={18} /> GitHub
        </a>
      </div>
    )

}
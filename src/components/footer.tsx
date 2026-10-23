import { portfolioData } from "../data/portfolio"
import { Contact } from "./contact"
export function Footer() {
    return (
        <footer className="border-t border-slate-900 py-8 text-center text-mm text-slate-400">
        <Contact></Contact>
         <b>© {new Date().getFullYear()} Develop & Design By {portfolioData.name}</b>  
      </footer>
    )
}
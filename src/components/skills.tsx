import { useState } from 'react';

// Lucide icons representation (You can replace these with 'lucide-react' icons if installed)
const CodeIcon = () => <span>💻</span>;
const ServerIcon = () => <span>⚙️</span>;
const DatabaseIcon = () => <span>🗄️</span>;
const CloudIcon = () => <span>☁️</span>;
const UsersIcon = () => <span>👥</span>;
const MessagesIcon = () => <span>💬</span>;
const FileTextIcon = () => <span>📄</span>;
const ShieldCheckIcon = () => <span>🔍</span>;

export function Skills() {
  const [activeTab] = useState('all');

  const techSkills = [
    {
      category: "Frontend Development",
      icon: <CodeIcon />,
      items: ["JavaScript (ES6+)", "TypeScript", "HTML5 & CSS3", "React.js (Basic)", "Angular (Basic)"]
    },
    {
      category: "Backend Development",
      icon: <ServerIcon />,
      items: ["Node.js", "NestJS Framework", "Express.js Framework", "RESTful APIs", "System Architecture"]
    },
    {
      category: "Database Management",
      icon: <DatabaseIcon />,
      items: ["MySQL (SQL)", "MongoDB (NoSQL)", "Redis (Caching)", "Database Design"]
    },
    {
      category: "DevOps & Infrastructure",
      icon: <CloudIcon />,
      items: ["AWS Services", "Docker", "CI/CD Pipelines", "Git / GitHub / Bitbucket"]
    }
  ];

  const nonTechSkills = [
    {
      category: "Project & Team Leadership",
      icon: <UsersIcon />,
      items: ["Project Management", "Team Handling", "Cross-functional Collaboration", "Agile Workflow"]
    },
    {
      category: "Communication & Integration",
      icon: <MessagesIcon />,
      items: ["Client Communication", "Stakeholder Alignment", "Third-Party Integrations Strategy"]
    },
    {
      category: "Product & Documentation",
      icon: <FileTextIcon />,
      items: ["Product Development", "Technical Documentation", "Project Blueprints", "API Specs"]
    },
    {
      category: "Quality Assurance",
      icon: <ShieldCheckIcon />,
      items: ["Customer-Centric Testing", "User Experience Validation", "Functional Testing"]
    }
  ];

  return (
    <section className="text-slate-100 font-sans">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-3xl sm:text-3xl font-extrabold tracking-tight text-white mb-4">
            Skills & Expertise
          </h2>
          <p className="text-slate-400 mx-auto text-base sm:text-lg border-t border-slate-800">
          </p>
        </div>

        {/* Grid Container */}
        <div className="space-y-12">
          {/* Technical Section */}
          {(activeTab === 'all' || activeTab === 'tech') && (
            <div>
              {activeTab === 'all' && (
                <h3 className="text-xl font-bold text-blue-400 mb-6 flex items-center gap-2">
                  <span>⚡</span> Technical Stack
                </h3>
              )}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {techSkills.map((skill, index) => (
                  <div key={index} className="bg-slate-800/60 border border-slate-700/60 rounded-xl p-5 hover:border-blue-500/50 transition-all duration-300 shadow-sm group">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-slate-700/50 rounded-lg text-xl group-hover:bg-blue-900/30 group-hover:text-blue-400 transition-colors">
                        {skill.icon}
                      </div>
                      <h4 className="font-semibold text-white text-base">{skill.category}</h4>
                    </div>
                    <ul className="space-y-2">
                      {skill.items.map((item, idx) => (
                        <li key={idx} className="text-sm text-slate-400 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Non-Technical Section */}
          {(activeTab === 'all' || activeTab === 'non-tech') && (
            <div>
              {activeTab === 'all' && (
                <h3 className="text-xl font-bold text-emerald-400 mb-6 flex items-center">
                  <span>💼</span> Product & Leadership
                </h3>
              )}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {nonTechSkills.map((skill, index) => (
                  <div key={index} className="bg-slate-800/60 border border-slate-700/60 rounded-xl p-5 hover:border-emerald-500/50 transition-all duration-300 shadow-sm group">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-slate-700/50 rounded-lg text-xl group-hover:bg-emerald-900/30 group-hover:text-emerald-400 transition-colors">
                        {skill.icon}
                      </div>
                      <h4 className="font-semibold text-white text-base">{skill.category}</h4>
                    </div>
                    <ul className="space-y-2">
                      {skill.items.map((item, idx) => (
                        <li key={idx} className="text-sm text-slate-400 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
    </section>
  );
}

import { portfolioData } from "../data/portfolio";

export function Contact() {
  return (
    <section
      id="contact"
      className="bg-slate-950 px-6 py-20 text-white sm:py-28"
    >
      <div className="mx-auto max-w-5xl">
        {/* Heading */}
        <div className="mb-12 text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Get in touch
          </p>

          <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
            Let's build something{" "}
            <span className="text-cyan-400">great</span> together.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
            I'm a Backend Software Engineer specializing in Node.js,
            NestJS, and TypeScript, with experience building logistics
            products from scratch. I'm open to new opportunities and
            available for immediate joining.
          </p>
        </div>

        {/* Contact cards */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {portfolioData.socials.map((item) => (
            <a
              key={item.name}
              href={item.href}
              target={item.name === "Email" ? undefined : "_blank"}
              rel={
                item.name === "Email" ? undefined : "noopener noreferrer"
              }
              className="group flex items-center gap-4 rounded-2xl border border-slate-800 bg-slate-900/70 p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/60 hover:bg-slate-900"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-slate-800 text-lg font-bold text-cyan-400 transition group-hover:bg-cyan-400 group-hover:text-slate-950">
                {item.icon}
              </span>

              <div className="min-w-0 flex-1">
                <h3 className="font-semibold text-white">
                  {item.name}
                </h3>
                <p className="mt-1 text-sm text-slate-400">
                  {item.description}
                </p>
              </div>

              <span className="text-lg text-slate-500 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-cyan-400">
                ↗
              </span>
            </a>
          ))}
        </div>

        {/* CTA */}
        {/* <div className="mt-10 text-center">
          <a
            href={portfolioData.email}
            className="inline-flex items-center gap-2 rounded-xl bg-cyan-400 px-7 py-3.5 font-semibold text-slate-950 transition hover:bg-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-950"
          >
            Let's Talk
            <span aria-hidden="true">↗</span>
          </a>

          <p className="mt-5 text-sm text-slate-500">
            Open to backend engineering opportunities
          </p>
        </div> */}
      </div>
    </section>
  );
}

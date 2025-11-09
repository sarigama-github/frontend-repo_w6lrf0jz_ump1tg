import { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Nuxt Commerce UI',
    desc: 'Headless e‑commerce storefront with Nuxt 3, Tailwind, and server routes.',
    tags: ['Nuxt', 'Tailwind', 'TypeScript'],
    live: '#',
    code: '#',
  },
  {
    title: 'React Dashboard',
    desc: 'Analytics dashboard with charts, dark mode, and responsive grid.',
    tags: ['React', 'Vite', 'Recharts'],
    live: '#',
    code: '#',
  },
  {
    title: 'Vue UI Kit',
    desc: 'Component library built with Vue 3, Vite, and composables.',
    tags: ['Vue', 'Vite', 'Storybook'],
    live: '#',
    code: '#',
  },
];

export default function Projects() {
  const [filter, setFilter] = useState('All');
  const tags = ['All', 'React', 'Vue', 'Nuxt'];

  const filtered = projects.filter(p =>
    filter === 'All' ? true : p.tags.includes(filter)
  );

  return (
    <section id="projects" className="relative w-full bg-black py-20 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Featured Projects</h2>
            <p className="mt-2 text-white/70">A selection of interfaces and apps I built recently.</p>
          </div>
          <div className="hidden sm:flex items-center gap-2">
            {tags.map(t => (
              <button
                key={t}
                onClick={() => setFilter(t)}
                className={`rounded-md border px-3 py-1.5 text-sm transition ${
                  filter === t ? 'border-indigo-500 bg-indigo-500/10 text-white' : 'border-white/10 text-white/70 hover:text-white'
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p, idx) => (
            <article key={idx} className="group rounded-xl border border-white/10 bg-white/5 p-5 transition hover:border-white/20 hover:bg-white/10">
              <div className="aspect-video w-full rounded-lg bg-gradient-to-br from-indigo-600/30 via-fuchsia-500/20 to-cyan-500/20" />
              <h3 className="mt-4 text-lg font-medium">{p.title}</h3>
              <p className="mt-1 text-sm text-white/70">{p.desc}</p>
              <div className="mt-3 flex flex-wrap gap-2 text-xs text-white/70">
                {p.tags.map(tag => (
                  <span key={tag} className="rounded-md border border-white/10 px-2 py-1">{tag}</span>
                ))}
              </div>
              <div className="mt-4 flex items-center gap-3">
                <a href={p.live} className="inline-flex items-center gap-1 rounded-md border border-white/10 px-3 py-1.5 text-sm text-white/90 hover:bg-white/10">
                  <ExternalLink className="h-4 w-4" /> Live
                </a>
                <a href={p.code} className="inline-flex items-center gap-1 rounded-md border border-white/10 px-3 py-1.5 text-sm text-white/90 hover:bg-white/10">
                  <Github className="h-4 w-4" /> Code
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="sm:hidden mt-6 flex items-center gap-2 overflow-x-auto">
          {tags.map(t => (
            <button
              key={t}
              onClick={() => setFilter(t)}
              className={`rounded-md border px-3 py-1.5 text-sm transition ${
                filter === t ? 'border-indigo-500 bg-indigo-500/10 text-white' : 'border-white/10 text-white/70 hover:text-white'
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

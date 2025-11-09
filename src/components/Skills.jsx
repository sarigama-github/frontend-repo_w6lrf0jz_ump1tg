import { Code2, Palette, MonitorSmartphone, Rocket } from 'lucide-react';

const stack = [
  {
    icon: Code2,
    title: 'Frameworks',
    items: ['React', 'Vue', 'Nuxt', 'React Router'],
  },
  {
    icon: Palette,
    title: 'Styling',
    items: ['Tailwind CSS', 'Bootstrap', 'CSS Modules', 'Sass'],
  },
  {
    icon: MonitorSmartphone,
    title: 'Frontend Craft',
    items: ['Accessibility', 'Animations', 'Responsive UI', 'State Mgmt'],
  },
  {
    icon: Rocket,
    title: 'Tooling',
    items: ['Vite', 'ESLint', 'Prettier', 'Git'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative w-full bg-gradient-to-b from-black to-slate-900 py-20 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Skills</h2>
        <p className="mt-2 text-white/70">Technologies I use to build modern web apps.</p>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stack.map(({ icon: Icon, title, items }) => (
            <div key={title} className="rounded-xl border border-white/10 bg-white/5 p-5">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-indigo-600/80">
                  <Icon className="h-5 w-5 text-white" />
                </span>
                <h3 className="text-lg font-medium">{title}</h3>
              </div>
              <ul className="mt-4 space-y-2 text-sm text-white/80">
                {items.map(it => (
                  <li key={it} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-white/40" />
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

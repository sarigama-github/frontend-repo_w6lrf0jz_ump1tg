import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[80vh] md:h-[90vh] w-full overflow-hidden bg-gradient-to-b from-slate-900 via-black to-black text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/10 via-black/40 to-black" />
      </div>

      <div className="relative mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-4 py-24 text-center">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs text-white/80 backdrop-blur"
        >
          <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
          Available for freelance projects
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl"
        >
          Front‑End Developer & UI Engineer
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-4 max-w-2xl text-base text-white/70 sm:text-lg"
        >
          I craft fast, accessible web apps using React, Vue, Nuxt, Tailwind and modern tooling. 3+ years building delightful user experiences.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-8 flex flex-col items-center gap-3 sm:flex-row"
        >
          <a href="#projects" className="inline-flex items-center justify-center rounded-md bg-indigo-600 px-5 py-2.5 text-sm font-medium text-white shadow hover:bg-indigo-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400">View Projects</a>
          <a href="#contact" className="inline-flex items-center justify-center rounded-md border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-medium text-white/90 hover:bg-white/10">Contact Me</a>
        </motion.div>
      </div>
    </section>
  );
}

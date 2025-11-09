import { useState } from 'react';
import { Rocket, Github, Linkedin, Mail } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 backdrop-blur bg-black/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="flex items-center gap-2 text-white">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-indigo-600">
              <Rocket className="h-5 w-5 text-white" />
            </span>
            <span className="font-semibold tracking-tight">Your Name</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
            <a href="#projects" className="hover:text-white transition">Projects</a>
            <a href="#skills" className="hover:text-white transition">Skills</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
            <div className="ml-2 flex items-center gap-3">
              <a href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-white">
                <Github className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-white">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#contact" aria-label="Email" className="hover:text-white">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </nav>

          <button
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-white/80 hover:text-white"
            onClick={() => setOpen(v => !v)}
            aria-label="Toggle Menu"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col gap-3 text-white/90">
              <a href="#projects" className="hover:text-white" onClick={() => setOpen(false)}>Projects</a>
              <a href="#skills" className="hover:text-white" onClick={() => setOpen(false)}>Skills</a>
              <a href="#contact" className="hover:text-white" onClick={() => setOpen(false)}>Contact</a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

function Footer() {
  return (
    <footer className="w-full border-t border-white/10 bg-black py-8 text-center text-white/60">
      <div className="mx-auto max-w-7xl px-4">© {new Date().getFullYear()} Your Name — Front‑End Developer</div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-black font-inter">
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

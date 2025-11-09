import { useState } from 'react';
import { Mail, Send } from 'lucide-react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className="relative w-full bg-black py-20 text-white">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Get in touch</h2>
          <p className="mt-2 text-white/70">Have a project in mind? Let’s build it together.</p>
        </div>

        <form onSubmit={onSubmit} className="mt-8 space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-1 block text-sm text-white/70">Name</label>
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm outline-none placeholder:text-white/40 focus:border-indigo-500"
                placeholder="Jane Developer"
              />
            </div>
            <div>
              <label className="mb-1 block text-sm text-white/70">Email</label>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm outline-none placeholder:text-white/40 focus:border-indigo-500"
                placeholder="jane@email.com"
              />
            </div>
          </div>
          <div>
            <label className="mb-1 block text-sm text-white/70">Message</label>
            <textarea
              required
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm outline-none placeholder:text-white/40 focus:border-indigo-500"
              placeholder="Tell me about your project..."
            />
          </div>

          <div className="flex items-center justify-between">
            <p className="flex items-center gap-2 text-sm text-white/60">
              <Mail className="h-4 w-4" /> I respond within 24 hours
            </p>
            <button type="submit" className="inline-flex items-center gap-2 rounded-md bg-indigo-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-indigo-500">
              <Send className="h-4 w-4" /> Send
            </button>
          </div>

          {sent && (
            <div className="rounded-md border border-emerald-500/30 bg-emerald-500/10 p-3 text-sm text-emerald-300">
              Thanks! Your message has been captured locally for demo purposes.
            </div>
          )}
        </form>
      </div>
    </section>
  );
}

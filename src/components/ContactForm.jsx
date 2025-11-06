import React, { useState } from 'react';
import { Send } from 'lucide-react';

const ContactForm = () => {
  const [status, setStatus] = useState('idle');
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    try {
      // This posts to the backend contact endpoint when available
      const base = import.meta.env.VITE_BACKEND_URL || '';
      const res = await fetch(`${base}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error('Network error');
      setStatus('success');
      setForm({ name: '', email: '', message: '' });
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="relative bg-[#070A0F] py-24 text-white">
      <div className="absolute inset-0 pointer-events-none [background:radial-gradient(40rem_20rem_at_50%_10%,rgba(34,211,238,0.08),transparent_60%)]" />
      <div className="relative mx-auto max-w-3xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl bg-gradient-to-r from-white via-cyan-200 to-fuchsia-300 bg-clip-text text-transparent">
            Get in touch
          </h2>
          <p className="mt-3 text-slate-300">Questions, partnerships, or press — we’ll get back within 24h.</p>
        </div>
        <form onSubmit={onSubmit} className="mt-10 space-y-4 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm text-slate-300">Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={onChange}
                required
                className="w-full rounded-lg border border-white/10 bg-[#0B0F16] px-3 py-2 text-sm text-white placeholder-slate-500 outline-none ring-cyan-500/0 transition focus:ring-2"
                placeholder="Ada Lovelace"
              />
            </div>
            <div>
              <label className="mb-2 block text-sm text-slate-300">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={onChange}
                required
                className="w-full rounded-lg border border-white/10 bg-[#0B0F16] px-3 py-2 text-sm text-white placeholder-slate-500 outline-none ring-cyan-500/0 transition focus:ring-2"
                placeholder="you@domain.com"
              />
            </div>
          </div>
          <div>
            <label className="mb-2 block text-sm text-slate-300">Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={onChange}
              required
              rows={5}
              className="w-full rounded-lg border border-white/10 bg-[#0B0F16] px-3 py-2 text-sm text-white placeholder-slate-500 outline-none ring-cyan-500/0 transition focus:ring-2"
              placeholder="Tell us about your project..."
            />
          </div>
          <button
            type="submit"
            disabled={status === 'loading'}
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-fuchsia-500 px-6 py-3 font-semibold text-white shadow-[0_0_20px_rgba(34,211,238,0.35)] transition hover:shadow-[0_0_30px_rgba(236,72,153,0.5)] disabled:opacity-60"
          >
            <Send className="h-4 w-4" />
            {status === 'loading' ? 'Sending…' : status === 'success' ? 'Sent! ✓' : 'Send message'}
          </button>
          {status === 'error' && (
            <p className="text-sm text-rose-300">Something went wrong. Please try again.</p>
          )}
        </form>
      </div>
    </section>
  );
};

export default ContactForm;

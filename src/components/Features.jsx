import React from 'react';
import { ShieldCheck, Zap, Layers, Fingerprint } from 'lucide-react';

const features = [
  {
    icon: <Fingerprint className="h-5 w-5" />,
    title: 'Authentication',
    desc: 'Email/password, magic links, and OAuth — secure and fast.',
  },
  {
    icon: <Layers className="h-5 w-5" />,
    title: 'Subscriptions',
    desc: 'Stripe-ready plans and entitlements out of the box.',
  },
  {
    icon: <ShieldCheck className="h-5 w-5" />,
    title: 'Security',
    desc: 'Best practices baked in: rate limits, audit trail, and SSO.',
  },
  {
    icon: <Zap className="h-5 w-5" />,
    title: 'Blazing UX',
    desc: 'Neon cyberpunk aesthetics with buttery 3D interactions.',
  },
];

const Features = () => {
  return (
    <section id="features" className="relative bg-[#070A0F] py-20 text-white">
      <div className="absolute inset-0 pointer-events-none [background:radial-gradient(40rem_20rem_at_50%_10%,rgba(34,211,238,0.08),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl bg-gradient-to-r from-white via-cyan-200 to-fuchsia-300 bg-clip-text text-transparent">
            Everything you need to launch
          </h2>
          <p className="mt-3 text-slate-300">Ship faster with a production-grade stack and a dazzling interface.</p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 md:grid-cols-4">
          {features.map((f) => (
            <div key={f.title} className="group rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur transition hover:shadow-[0_0_25px_rgba(34,211,238,0.2)]">
              <div className="mb-3 inline-flex items-center justify-center rounded-lg bg-gradient-to-br from-cyan-500/20 to-fuchsia-500/20 p-2 text-cyan-300">
                {f.icon}
              </div>
              <h3 className="font-semibold text-white/90">{f.title}</h3>
              <p className="mt-1 text-sm text-slate-300">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

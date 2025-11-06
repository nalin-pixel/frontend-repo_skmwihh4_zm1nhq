import React from 'react';
import { Check } from 'lucide-react';

const tiers = [
  {
    name: 'Starter',
    price: '$9',
    period: 'mo',
    features: ['Basic auth', '1 project', 'Email support'],
    highlight: false,
  },
  {
    name: 'Pro',
    price: '$29',
    period: 'mo',
    features: ['OAuth providers', 'Unlimited projects', 'Priority support', 'Team seats'],
    highlight: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    features: ['SSO/SAML', 'Custom SLAs', 'Dedicated support', 'On-prem options'],
    highlight: false,
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="relative z-10 bg-[#070A0F] py-24 text-white">
      <div className="absolute inset-0 pointer-events-none [background:radial-gradient(40rem_20rem_at_15%_10%,rgba(34,211,238,0.1),transparent_60%),radial-gradient(40rem_20rem_at_85%_10%,rgba(236,72,153,0.1),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl bg-gradient-to-r from-white via-cyan-200 to-fuchsia-300 bg-clip-text text-transparent">
            Simple, transparent pricing
          </h2>
          <p className="mt-3 text-slate-300">
            Scale from idea to enterprise with plans designed for growth.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition shadow-[0_0_0_1px_rgba(255,255,255,0.06)_inset,0_0_30px_rgba(34,211,238,0.05)] ${
                tier.highlight ? 'ring-2 ring-cyan-400/60' : ''
              }`}
            >
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-white/90">{tier.name}</h3>
                <div className="mt-2 flex items-end gap-1">
                  <span className="text-4xl font-bold">{tier.price}</span>
                  {tier.period && (
                    <span className="mb-1 text-sm text-slate-300">/{tier.period}</span>
                  )}
                </div>
              </div>
              <ul className="space-y-3 text-sm text-slate-200">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <span className="grid h-5 w-5 place-items-center rounded-full bg-cyan-500/20 text-cyan-300">
                      <Check className="h-3.5 w-3.5" />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
              <button className={`mt-8 w-full rounded-xl px-4 py-2.5 text-sm font-semibold transition ${
                tier.highlight
                  ? 'bg-gradient-to-r from-cyan-500 to-fuchsia-500 text-white shadow-[0_0_20px_rgba(34,211,238,0.35)] hover:shadow-[0_0_30px_rgba(236,72,153,0.5)]'
                  : 'bg-white/10 text-white hover:bg-white/15'
              }`}>
                Choose {tier.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;

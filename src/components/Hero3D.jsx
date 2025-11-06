import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, ArrowRight } from 'lucide-react';

const Hero3D = () => {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden bg-[#070A0F]">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/FduaNp3csZktbOi3/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-[#070A0F]/30 to-[#070A0F]" />
      <div className="pointer-events-none absolute inset-0 mix-blend-overlay [background:radial-gradient(60rem_30rem_at_50%_-10%,rgba(0,255,255,0.15),transparent_60%),radial-gradient(30rem_20rem_at_90%_10%,rgba(168,85,247,0.18),transparent_60%)]" />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 pt-28 text-center sm:pt-36">
        <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-xs font-medium tracking-wide text-cyan-300 backdrop-blur">
          <Rocket className="h-3.5 w-3.5" />
          Launch your cyber SaaS in minutes
        </span>
        <h1 className="bg-gradient-to-br from-white via-cyan-200 to-fuchsia-300 bg-clip-text text-4xl font-bold leading-tight text-transparent sm:text-6xl">
          Neon-grade platform for the next internet
        </h1>
        <p className="mt-4 max-w-2xl text-balance text-base text-slate-300 sm:text-lg">
          A sleek, futuristic toolkit to authenticate users, sell subscriptions, publish blogs, and capture leads — wrapped in a glowing cyberpunk aesthetic.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#pricing"
            className="group relative inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-fuchsia-500 px-6 py-3 font-semibold text-white shadow-[0_0_20px_rgba(34,211,238,0.45)] transition hover:shadow-[0_0_30px_rgba(236,72,153,0.6)]"
          >
            Get Started
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="#blog"
            className="rounded-xl border border-white/10 bg-white/5 px-6 py-3 font-medium text-slate-200 backdrop-blur transition hover:bg-white/10"
          >
            Read the blog
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero3D;

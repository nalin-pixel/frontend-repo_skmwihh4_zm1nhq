import React from 'react';
import { Rocket, User, CreditCard } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#070A0F]/60 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#home" className="flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br from-cyan-500 to-fuchsia-500 shadow-[0_0_20px_rgba(34,211,238,0.45)]">
            <Rocket className="h-5 w-5 text-white" />
          </span>
          <span className="bg-gradient-to-r from-white via-cyan-200 to-fuchsia-300 bg-clip-text text-lg font-bold text-transparent">
            NeonSaaS
          </span>
        </a>
        <div className="hidden items-center gap-7 text-sm text-slate-200 md:flex">
          <a href="#features" className="hover:text-white">Features</a>
          <a href="#pricing" className="hover:text-white">Pricing</a>
          <a href="#blog" className="hover:text-white">Blog</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </div>
        <div className="flex items-center gap-2">
          <a href="#pricing" className="hidden rounded-lg border border-white/10 px-3 py-2 text-sm text-slate-200 hover:bg-white/10 md:inline-block">
            <CreditCard className="mr-1 inline h-4 w-4" /> Pricing
          </a>
          <a href="#auth" className="rounded-lg bg-white/10 px-3 py-2 text-sm font-semibold text-white shadow-inner shadow-white/5 ring-1 ring-white/10 hover:bg-white/20">
            <User className="mr-1 inline h-4 w-4" /> Sign In
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

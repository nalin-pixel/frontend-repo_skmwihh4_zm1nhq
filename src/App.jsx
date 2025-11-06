import React from 'react';
import Navbar from './components/Navbar';
import Hero3D from './components/Hero3D';
import Features from './components/Features';
import Pricing from './components/Pricing';
import BlogPreview from './components/BlogPreview';
import ContactForm from './components/ContactForm';

function App() {
  return (
    <div className="min-h-screen bg-[#070A0F] text-white">
      <Navbar />
      <main>
        <Hero3D />
        <Features />
        <Pricing />
        <BlogPreview />
        <ContactForm />
      </main>
      <footer className="border-t border-white/10 bg-[#070A0F] py-8 text-center text-sm text-slate-400">
        <div className="mx-auto max-w-7xl px-6">
          <p>© {new Date().getFullYear()} NeonSaaS. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;

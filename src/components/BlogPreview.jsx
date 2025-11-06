import React from 'react';

const posts = [
  {
    id: 1,
    title: 'Designing a Cyberpunk UI in 2025',
    excerpt: 'Principles, palettes, and patterns to craft a luminous, futuristic interface without sacrificing usability.',
    tag: 'Design',
  },
  {
    id: 2,
    title: 'Auth That Scales From Solo to Enterprise',
    excerpt: 'Cognito? Clerk? DIY? We compare strategies for secure authentication across growth stages.',
    tag: 'Security',
  },
  {
    id: 3,
    title: 'Pricing Psychology for SaaS',
    excerpt: 'How to price tiers that convert, plus experiments that consistently move the needle.',
    tag: 'Growth',
  },
];

const BlogPreview = () => {
  return (
    <section id="blog" className="relative bg-[#070A0F] py-24 text-white">
      <div className="absolute inset-0 pointer-events-none [background:radial-gradient(40rem_20rem_at_20%_10%,rgba(34,211,238,0.08),transparent_60%),radial-gradient(40rem_20rem_at_80%_10%,rgba(236,72,153,0.08),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl bg-gradient-to-r from-white via-cyan-200 to-fuchsia-300 bg-clip-text text-transparent">
            From the blog
          </h2>
          <p className="mt-3 text-slate-300">Insights on product, design, and growth.</p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {posts.map((post) => (
            <article key={post.id} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <span className="inline-flex items-center rounded-full border border-cyan-500/30 bg-cyan-500/10 px-2.5 py-0.5 text-xs font-medium text-cyan-300">
                {post.tag}
              </span>
              <h3 className="mt-4 text-lg font-semibold text-white/90 group-hover:text-white">
                {post.title}
              </h3>
              <p className="mt-2 text-sm text-slate-300">{post.excerpt}</p>
              <div className="mt-4 text-sm font-semibold text-cyan-300">Read post →</div>
              <div className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100 [background:radial-gradient(30rem_15rem_at_50%_-20%,rgba(34,211,238,0.15),transparent_60%)]" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;

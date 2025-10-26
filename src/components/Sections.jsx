import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const SectionWrapper = ({ id, children, className = '' }) => (
  <section id={id} className={`relative w-full ${className}`}>{children}</section>
);

const About = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.3, once: true });
  return (
    <SectionWrapper id="about" className="py-28 md:py-32">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        <div ref={ref}>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-extrabold"
          >
            👉 Forget the Hype. Learn What Actually Works.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 text-zinc-300 leading-relaxed"
          >
            This is a workshop series designed to help designers, creators, and beginners use AI to speed up workflows and explore new styles.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-zinc-300"
          >
            No certificates. No job promises. No bullshit.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-4 text-zinc-300"
          >
            Just real skills, real tools, and practical applications in graphic design, UI/UX, and video editing.
          </motion.p>
        </div>
        <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-white/10 bg-gradient-to-br from-white/5 to-transparent">
          <div className="absolute inset-0 grid grid-cols-2">
            <div className="p-5">
              <div className="h-full w-full rounded-lg bg-zinc-900/60 border border-white/10 flex items-center justify-center text-sm text-zinc-400">
                Before AI
              </div>
            </div>
            <div className="p-5">
              <div className="h-full w-full rounded-lg bg-emerald-600/10 border border-emerald-400/20 flex items-center justify-center text-sm text-emerald-300">
                After AI
              </div>
            </div>
          </div>
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(40%_40%_at_70%_30%,rgba(99,102,241,0.18),transparent)]" />
        </div>
      </div>
    </SectionWrapper>
  );
};

const tools = [
  { name: 'ChatGPT', emoji: '💬', desc: 'Copywriting, ideation, and workflow optimization.' },
  { name: 'Gemini', emoji: '🌐', desc: 'AI visuals & quick mockups.' },
  { name: 'Ideogram', emoji: '🎨', desc: 'Illustration & concept art.' },
  { name: 'Reve', emoji: '🖥️', desc: 'Wireframes & prototyping.' },
  { name: 'UX Pilot', emoji: '📐', desc: 'Streamlined UX workflows.' },
  { name: 'VEO3', emoji: '🎥', desc: 'AI-powered video editing.' },
  { name: 'Kling', emoji: '🎬', desc: 'Motion graphics & animation.' },
];

const Tools = () => {
  return (
    <SectionWrapper id="tools" className="py-24 md:py-28">
      <div className="container mx-auto px-6">
        <h3 className="text-center text-2xl md:text-3xl font-extrabold">👉 Tools We Use. Tools You’ll Master.</h3>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {tools.map((t) => (
            <div key={t.name} className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5">
              <div className="flex items-center gap-3 p-5">
                <div className="h-12 w-12 rounded-lg border border-white/15 bg-zinc-900/50 flex items-center justify-center text-xl">
                  <span aria-hidden>{t.emoji}</span>
                </div>
                <div className="font-semibold">{t.name}</div>
              </div>
              <div className="px-5 pb-5 text-zinc-300">
                <div className="translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  {t.desc}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <a href="#curriculum" className="inline-flex rounded-md border border-white/15 px-5 py-3 hover:bg-white/5 transition-colors">
            See the Curriculum
          </a>
        </div>
      </div>
    </SectionWrapper>
  );
};

const WhoFor = () => {
  const cards = [
    { title: 'Beginners', icon: '🖌️', text: 'Haven’t used AI in design yet.' },
    { title: 'Designers', icon: '🎨', text: 'Want faster, smarter workflows.' },
    { title: 'Upskillers', icon: '🚀', text: 'Stay on top of AI + design trends.' },
  ];
  return (
    <SectionWrapper id="who" className="py-24">
      <div className="container mx-auto px-6">
        <h3 className="text-2xl md:text-3xl font-extrabold mb-6">👉 Who This Workshop Is For</h3>
        <div className="relative">
          <div className="flex gap-5 overflow-x-auto snap-x snap-mandatory pb-4 [-ms-overflow-style:none] [scrollbar-width:none]" style={{ scrollbarWidth: 'none' }}>
            {cards.map((c) => (
              <div key={c.title} className="min-w-[80%] sm:min-w-[420px] snap-start rounded-xl border border-white/10 bg-white/5 p-6">
                <div className="text-3xl">{c.icon}</div>
                <div className="mt-3 text-xl font-bold">{c.title}</div>
                <div className="mt-2 text-zinc-300">{c.text}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

const Sections = () => {
  return (
    <div>
      <About />
      <Tools />
      <WhoFor />
    </div>
  );
};

export default Sections;

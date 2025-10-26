import React from 'react';

const timeline = [
  { icon: '🎯', title: 'Intro to AI in Design', desc: 'Cut the myths, learn the reality.' },
  { icon: '🎨', title: 'Visual Design', desc: 'Generate concepts, styles, graphics faster.' },
  { icon: '📱', title: 'UI/UX Workflows', desc: 'Wireframes, flows, automation with AI.' },
  { icon: '🎬', title: 'Video & Motion', desc: 'Editing, animation basics using AI.' },
  { icon: '🖼️', title: 'Portfolio Building', desc: 'Showcase authentic, AI-assisted projects.' },
  { icon: '🤝', title: 'Mentorship & Badge', desc: 'Feedback, networking, recognition.' },
];

const Curriculum = () => {
  return (
    <section id="curriculum" className="py-24 md:py-28">
      <div className="container mx-auto px-6">
        <h3 className="text-center text-2xl md:text-3xl font-extrabold">👉 What You’ll Learn</h3>
        <div className="mt-10 max-h-[70vh] overflow-y-auto pr-2 scroll-smooth snap-y snap-mandatory">
          {timeline.map((t, idx) => (
            <div key={t.title} className="snap-start rounded-xl border border-white/10 bg-white/5 p-5 md:p-6 mb-4">
              <div className="text-2xl">{t.icon}</div>
              <div className="mt-2 text-xl font-bold">{t.title}</div>
              <div className="mt-1 text-zinc-300">{t.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Instructor = () => {
  return (
    <section id="instructor" className="py-24">
      <div className="container mx-auto px-6 grid md:grid-cols-[1fr,1.2fr] gap-10 items-center">
        <div className="relative aspect-square rounded-xl overflow-hidden border border-white/10 bg-gradient-to-br from-white/5 to-transparent">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-40 w-40 rounded-full bg-white/10 border border-white/20" />
          </div>
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(45%_45%_at_50%_50%,rgba(168,85,247,0.18),transparent)]" />
        </div>
        <div>
          <h3 className="text-2xl md:text-3xl font-extrabold">👉 Meet Your Instructor</h3>
          <div className="mt-4 text-lg font-semibold">Name: [Instructor Name]</div>
          <div className="mt-1 flex items-center gap-2 text-zinc-300">
            <span>Works at:</span>
            <span className="inline-flex items-center gap-2 rounded-md border border-white/10 px-2 py-1 text-white/90">
              <span className="h-2 w-2 rounded-full bg-emerald-400" /> [Company Logo + Name]
            </span>
          </div>
          <p className="mt-4 text-zinc-300">
            [Instructor Name] is a [Product Designer / Creative Lead / etc.] with hands-on experience integrating AI tools into everyday design workflows.
          </p>
          <p className="mt-3 text-zinc-300">
            With a background in [short 1-liner about expertise], they’ve helped teams optimize workflows, explore design trends, and adapt to AI-driven tools without losing creativity.
          </p>
          <div className="mt-6">
            <a href="#join" className="inline-flex rounded-md bg-white text-black px-5 py-3 font-semibold hover:scale-[1.02] transition-transform">
              Learn with [Instructor Name]
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

const CurriculumInstructor = () => {
  return (
    <div>
      <Curriculum />
      <Instructor />
    </div>
  );
};

export default CurriculumInstructor;

import React, { useState } from 'react';

const faqs = [
  { q: 'Do I get a certificate?', a: "No. You’ll get a badge & mentorship." },
  { q: 'Do I need design experience?', a: 'No, just curiosity.' },
  { q: 'Will this guarantee me a job?', a: 'No. You’ll gain skills, workflows, and networking.' },
  { q: 'Are the tools free?', a: 'Yes. We focus on free/trial tools.' },
];

const FAQ = () => {
  const [open, setOpen] = useState(0);
  return (
    <section id="faq" className="py-24">
      <div className="container mx-auto px-6">
        <h3 className="text-2xl md:text-3xl font-extrabold">👉 Straight Answers. No BS.</h3>
        <div className="mt-6 divide-y divide-white/10 rounded-xl border border-white/10 overflow-hidden">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className="bg-white/5">
                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-white/5 transition-colors"
                >
                  <span className="font-medium">{f.q}</span>
                  <span
                    className={`ml-4 inline-block h-5 w-5 border border-white/30 rounded-full grid place-items-center transition-transform ${isOpen ? 'rotate-90' : ''}`}
                    aria-hidden
                  >
                    <span className="block h-3 w-3 border-t border-r border-white/60 rotate-45 -translate-x-[1px]" />
                  </span>
                </button>
                <div
                  className={`px-5 overflow-hidden transition-[max-height,opacity] duration-300 ${isOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <div className="pb-5 text-zinc-300">{f.a}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const FinalCTA = () => {
  return (
    <section id="join" className="relative h-[70vh] md:h-[80vh] w-full">
      <div className="sticky top-0 h-full w-full">
        <div className="absolute inset-0 bg-[radial-gradient(55%_55%_at_50%_50%,rgba(99,102,241,0.2),transparent)]" />
        <div className="absolute inset-0 flex items-center justify-center text-center px-6">
          <div>
            <h3 className="text-4xl md:text-5xl font-extrabold">👉 Ready to Cut the Bullshit?</h3>
            <p className="mt-4 text-zinc-300">Seats are limited. Hands-on, practical learning only.</p>
            <div className="mt-8">
              <a href="#" className="inline-flex rounded-md bg-white text-black px-6 py-3 font-semibold hover:scale-[1.02] transition-transform">
                Join the Workshop
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="border-t border-white/10">
      <div className="container mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm text-white/90">NO BS: Using AI in Design</div>
        <nav className="flex items-center gap-5 text-sm text-zinc-300">
          <a href="#about" className="hover:text-white">About</a>
          <a href="#tools" className="hover:text-white">Tools</a>
          <a href="#faq" className="hover:text-white">FAQ</a>
          <a href="#join" className="hover:text-white">Join</a>
        </nav>
        <div className="flex items-center gap-4 text-sm text-zinc-300">
          <a href="#" className="hover:text-white">LinkedIn</a>
          <a href="#" className="hover:text-white">Instagram</a>
          <a href="#" className="hover:text-white">Behance</a>
        </div>
      </div>
      <div className="py-4 text-center text-xs text-zinc-400">👉 Built with honesty. No fluff. No BS.</div>
    </footer>
  );
};

const FAQCtaFooter = () => {
  return (
    <div>
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default FAQCtaFooter;

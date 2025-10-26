import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  const { scrollYProgress } = useScroll();
  const rotate = useTransform(scrollYProgress, [0, 0.3], [0, -6]);
  const scale = useTransform(scrollYProgress, [0, 0.3], [1, 0.96]);
  const opacityTitle = useTransform(scrollYProgress, [0, 0.2], [1, 0.75]);

  return (
    <section id="home" className="relative h-screen w-full sticky top-0 overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_50%,rgba(30,30,60,0.25),transparent_60%)]" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0D0D0D]/60 via-transparent to-[#0D0D0D]/80" />
      </div>

      <motion.div
        style={{ rotateX: rotate, scale }}
        className="relative z-10 flex h-full w-full items-center justify-center text-center px-6"
      >
        <div className="max-w-4xl mx-auto">
          <motion.h1
            style={{ opacity: opacityTitle }}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight"
          >
            <span className="align-middle">👉 NO BS: Using AI in Design</span>
          </motion.h1>
          <motion.p
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease: 'easeOut' }}
            className="mt-5 text-base md:text-lg text-zinc-300"
          >
            Practical workshops for designers. No fake promises. Just skills, tools, and workflows.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="mt-8 flex items-center justify-center gap-3"
          >
            <a
              href="#join"
              className="inline-flex items-center justify-center rounded-md bg-white text-black px-5 py-3 text-sm md:text-base font-semibold hover:scale-[1.02] active:scale-[0.99] transition-transform"
            >
              Join the Workshop
            </a>
            <a
              href="#tools"
              className="inline-flex items-center justify-center rounded-md border border-white/20 text-white px-5 py-3 text-sm md:text-base font-medium hover:bg-white/5 transition-colors"
            >
              See the Tools
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;

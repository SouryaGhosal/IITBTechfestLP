import { useEffect } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';

export default function Hero() {
  const { scrollYProgress } = useScroll();

  // Mouse drift — the title leans toward the cursor, echoing the 3D Core.
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 60, damping: 20 });
  const sy = useSpring(my, { stiffness: 60, damping: 20 });
  useEffect(() => {
    const onMove = (e) => {
      mx.set((e.clientX / window.innerWidth) * 2 - 1);
      my.set(-((e.clientY / window.innerHeight) * 2 - 1));
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, [mx, my]);

  const titleX = useTransform(sx, (v) => v * 28);
  const titleYmouse = useTransform(sy, (v) => v * 16);
  const titleScaleMouse = useTransform(sx, (v) => 1 + Math.abs(v) * 0.02);

  // Scroll exits — each element leaves the frame at its own pace.
  const eyebrowY = useTransform(scrollYProgress, [0, 0.08], [0, -60]);
  const eyebrowO = useTransform(scrollYProgress, [0, 0.05], [1, 0]);

  const titleYscroll = useTransform(scrollYProgress, [0, 0.12], [0, -90]);
  const titleScaleScroll = useTransform(scrollYProgress, [0, 0.12], [1, 1.18]);
  const titleO = useTransform(scrollYProgress, [0, 0.1], [1, 0]);

  const dateX = useTransform(scrollYProgress, [0, 0.1], [0, -130]);
  const dateO = useTransform(scrollYProgress, [0, 0.08], [1, 0]);

  const taglineY = useTransform(scrollYProgress, [0, 0.1], [0, 70]);
  const taglineO = useTransform(scrollYProgress, [0, 0.07], [1, 0]);

  const ctaY = useTransform(scrollYProgress, [0, 0.09], [0, 90]);
  const ctaO = useTransform(scrollYProgress, [0, 0.06], [1, 0]);

  const cornerO = useTransform(scrollYProgress, [0, 0.05], [1, 0]);
  const scrollIndO = useTransform(scrollYProgress, [0, 0.04], [1, 0]);

  return (
    <section id="hero" className="relative min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center overflow-hidden">
      {/* Faint corner coordinates */}
      <motion.div style={{ opacity: cornerO }} className="absolute top-4 left-2 lg:left-28 z-20 font-mono text-[10px] text-cyan/40 leading-relaxed">
        <div>LAT 19.1336° N</div>
        <div>LON 72.9154° E</div>
      </motion.div>
      <motion.div style={{ opacity: cornerO }} className="absolute top-4 right-2 lg:right-28 z-20 font-mono text-[10px] text-cyan/40 text-right leading-relaxed">
        <div>EDITION XXIX</div>
        <div>SYS · ONLINE</div>
      </motion.div>

      {/* Center content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4">
        <motion.p
          style={{ y: eyebrowY, opacity: eyebrowO }}
          className="font-mono text-[11px] sm:text-xs tracking-[0.5em] uppercase text-data/50 mb-10"
        >
          IIT Bombay Presents
        </motion.p>

        <motion.h1
          style={{ x: titleX, y: titleYmouse, scale: titleScaleMouse, opacity: titleO }}
          className="font-display text-[14vw] sm:text-[11vw] lg:text-[8.5rem] leading-none tracking-tighter flex"
        >
          <span className="text-data glow-cyan">TECH</span>
          <span className="text-cyan glow-cyan">FEST</span>
        </motion.h1>

        <motion.div
          style={{ x: dateX, y: titleYscroll, scale: titleScaleScroll, opacity: dateO }}
          className="mt-8 flex items-center gap-3 font-mono text-xs text-lime tracking-[0.35em]"
        >
          <span className="h-px w-10 bg-lime/50" />
          <span>22 — 24 DEC</span>
          <span className="text-data/30">/</span>
          <span className="text-cyan">2025</span>
          <span className="h-px w-10 bg-lime/50" />
        </motion.div>

        <motion.p
          style={{ y: taglineY, opacity: taglineO }}
          className="mt-8 font-heading font-bold text-xs sm:text-sm tracking-[0.3em] uppercase text-data/70"
        >
          Asia's Largest Science &amp; Technology Festival
        </motion.p>

        {/* CTA */}
        <motion.div
          style={{ y: ctaY, opacity: ctaO }}
          className="mt-14 flex flex-col sm:flex-row items-center gap-8"
        >
          <a href="#register"
            className="group relative px-7 py-3.5 border border-cyan/60 text-cyan hover:bg-cyan hover:text-void transition-all font-mono text-[11px] tracking-[0.3em] uppercase">
            Enter Techfest
          </a>
          <a href="#events"
            className="group flex items-center gap-2 font-mono text-[11px] tracking-[0.3em] uppercase text-data/50 hover:text-lime transition-colors">
            Explore Events
            <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#workshops" aria-label="Scroll to content"
        style={{ opacity: scrollIndO }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-3 group"
      >
        <span className="font-mono text-[9px] text-data/35 tracking-[0.35em] uppercase">Initiate</span>
        <span className="relative w-10 h-10 rounded-full border border-cyan/40 flex items-center justify-center group-hover:border-lime transition-colors">
          <span className="absolute inset-0 rounded-full box-glow-cyan opacity-40 group-hover:opacity-100 transition-opacity" />
          <svg viewBox="0 0 24 24" className="w-4 h-4 text-cyan group-hover:text-lime" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M12 5v14M12 19l6-6M12 19l-6-6" />
          </svg>
        </span>
      </motion.a>
    </section>
  );
}
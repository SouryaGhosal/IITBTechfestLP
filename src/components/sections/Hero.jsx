import { Image } from '@/components/ui/image';

const HERO_IMG = 'https://media.base44.com/images/public/6a736d6811970527f8956a0d/5824d4129_generated_75f083e4.png';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[calc(100vh-5rem)] flex flex-col justify-center overflow-hidden">
      {/* Background biomechanical eye */}
      <div className="absolute inset-0 z-0">
        <Image src={HERO_IMG} alt="" fittingType="fill" className="w-full h-full object-cover opacity-70" />
        <div className="absolute inset-0 bg-gradient-to-b from-void/60 via-transparent to-void" />
        <div className="absolute inset-0 bg-gradient-to-r from-void via-transparent to-void" />
      </div>

      {/* Corner coordinate stats */}
      <div className="absolute top-4 left-2 lg:left-28 z-20 font-mono text-[10px] text-cyan/60 leading-relaxed">
        <div>LAT 19.1336° N</div>
        <div>LON 72.9154° E</div>
      </div>
      <div className="absolute top-4 right-2 lg:right-28 z-20 font-mono text-[10px] text-cyan/60 text-right leading-relaxed">
        <div>EDITION XXIX</div>
        <div>SYS · ONLINE</div>
      </div>

      {/* Center content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4">
        <p className="font-heading font-bold text-sm sm:text-base tracking-[0.35em] uppercase mb-4 text-data glow-cyan">
          IIT Bombay Presents
        </p>

        {/* Split TECHFEST title */}
        <h1 className="font-display text-[15vw] sm:text-[12vw] lg:text-[9rem] leading-none tracking-tighter flex">
          <span className="text-data glow-cyan">TECH</span>
          <span className="text-cyan glow-cyan">FEST</span>
        </h1>

        <div className="mt-2 flex items-center gap-3 font-mono text-sm text-lime tracking-widest">
          <span className="h-px w-8 bg-lime/60" />
          <span>22 — 24 DECEMBER</span>
          <span className="text-data/40">/</span>
          <span className="text-cyan">2 · 0 · 2 · 5</span>
          <span className="h-px w-8 bg-lime/60" />
        </div>

        <p className="mt-6 font-heading font-bold text-base sm:text-lg tracking-[0.25em] uppercase text-data">
          Asia's Largest Science &amp; Technology Festival
        </p>
        <p className="mt-2 font-mono text-xs text-cyan/80 tracking-[0.4em] uppercase">
          A Simulated Paradigm
        </p>

        {/* CTA */}
        <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
          <a href="#register"
            className="orb-pulse group relative px-8 py-4 bg-cyan/10 border border-cyan text-cyan hover:bg-cyan hover:text-void transition-all font-heading font-bold text-sm tracking-widest uppercase">
            ⬡ Register Now
          </a>
          <a href="#events"
            className="group flex items-center gap-2 font-mono text-xs tracking-widest uppercase text-data/70 hover:text-lime transition-colors">
            Explore Events
            <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2">
        <span className="font-mono text-[9px] text-data/40 tracking-widest">SCROLL TO INITIATE</span>
        <div className="w-px h-10 bg-gradient-to-b from-cyan to-transparent" />
      </div>
    </section>
  );
}
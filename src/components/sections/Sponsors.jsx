import ScrollMotion from '@/components/three/ScrollMotion';

const SPONSORS = [
  { name: 'Marsh McLennan', tier: 'Title Sponsor', accent: true },
  { name: 'NPCI', tier: 'Associate Title' },
  { name: 'IDFC First Bank', tier: 'Powered By' },
  { name: 'SBI Bank', tier: 'Co-Powered By' },
  { name: 'Larsen & Toubro', tier: 'Platinum Sponsor' },
  { name: 'IndianOil', tier: 'Auto Expo Title' },
  { name: 'Visava', tier: 'Experience Partner' },
  { name: 'Jio Financial Services', tier: 'Financial Partner' },
];

export default function Sponsors() {
  return (
    <section id="sponsors" className="relative py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <ScrollMotion from="up">
            <div className="font-mono text-xs text-lime tracking-widest mb-3">// 05 — CORE SYNCHRONIZATION</div>
          </ScrollMotion>
          <ScrollMotion from="scale" blur delay={0.05}>
            <h2 className="font-display text-4xl sm:text-6xl text-data glow-cyan uppercase">Sponsors</h2>
          </ScrollMotion>
          <ScrollMotion from="up" delay={0.1}>
            <p className="mt-4 font-mono text-xs text-data/50 max-w-md mx-auto">
              Powered by the organizations engineering tomorrow's infrastructure.
            </p>
          </ScrollMotion>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {SPONSORS.map((s, i) => (
            <ScrollMotion key={s.name} from={s.accent ? 'scale' : i % 2 ? 'right' : 'left'} distance={70} delay={Math.min(i * 0.04, 0.2)} blur={s.accent}>
              <div
                className={`glass-panel ${s.accent ? 'glass-panel-lime border-lime/30' : 'border-cyan/20'} p-6 flex flex-col items-center justify-center text-center min-h-[120px] hover:scale-[1.03] transition-transform h-full`}>
                <div className={`font-mono text-[9px] tracking-widest mb-2 ${s.accent ? 'text-lime' : 'text-cyan/60'}`}>
                  {s.tier.toUpperCase()}
                </div>
                <div className={`font-heading font-bold text-sm uppercase leading-tight ${s.accent ? 'text-lime glow-lime' : 'text-data'}`}>
                  {s.name}
                </div>
              </div>
            </ScrollMotion>
          ))}
        </div>

        {/* Marquee strip */}
        <ScrollMotion from="up" blur delay={0.1}>
          <div className="mt-12 overflow-hidden border-y border-cyan/10 py-4">
            <div className="marquee-track flex gap-12 whitespace-nowrap">
              {[...Array(2)].map((_, k) => (
                <div key={k} className="flex gap-12 items-center font-mono text-xs text-data/30 tracking-widest">
                  <span>UNESCO</span><span className="text-cyan">◆</span>
                  <span>UNICEF</span><span className="text-cyan">◆</span>
                  <span>MAKE IN INDIA</span><span className="text-cyan">◆</span>
                  <span>GUINNESS WORLD RECORDS</span><span className="text-cyan">◆</span>
                  <span>GOVT. OF INDIA</span><span className="text-cyan">◆</span>
                  <span>IIT BOMBAY</span><span className="text-cyan">◆</span>
                </div>
              ))}
            </div>
          </div>
        </ScrollMotion>
      </div>
    </section>
  );
}
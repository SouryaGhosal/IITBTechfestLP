import { Image } from '@/components/ui/image';

const HAND_IMG = 'https://media.base44.com/images/public/6a736d6811970527f8956a0d/b2fcd6dd1_generated_5200c45c.png';

const WORKSHOPS = [
  { name: 'AI & Machine Learning', tag: 'Intelligence' },
  { name: 'Cybersecurity & Ethical Hacking', tag: 'Defense' },
  { name: 'Embedded Systems & IoT', tag: 'Hardware' },
  { name: 'AWS Cloud Architecture', tag: 'Cloud' },
  { name: 'Deep Learning & Neural Nets', tag: 'Intelligence' },
  { name: 'Automobile Mechanics', tag: 'Mobility' },
  { name: 'Nanotechnology', tag: 'Frontier' },
  { name: 'Web & Android Development', tag: 'Software' },
];

export default function Workshops() {
  return (
    <section id="workshops" className="relative py-24 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
          <div>
            <div className="font-mono text-xs text-lime tracking-widest mb-3">// 01 — SKILL UPLINK</div>
            <h2 className="font-display text-4xl sm:text-6xl text-data glow-cyan uppercase leading-tight">
              Flagship<br/>Workshops
            </h2>
            <p className="mt-4 text-sm text-data/60 leading-relaxed max-w-md">
              A curated series bridging academic fundamentals with market-driven, specialized tracks —
              from neural networks to nanotechnology.
            </p>
          </div>
          <div className="relative h-64 glass-panel border border-cyan/20 overflow-hidden">
            <Image src={HAND_IMG} alt="Robotic hand holding a glowing glass motherboard" fittingType="fill"
              className="w-full h-full object-cover opacity-80" />
            <div className="absolute inset-0 bg-gradient-to-t from-void via-transparent to-transparent" />
            <span className="absolute top-2 left-2 w-3 h-3 border-l border-t border-lime" />
            <span className="absolute bottom-2 right-2 w-3 h-3 border-r border-b border-lime" />
            <div className="absolute bottom-3 left-3 font-mono text-[10px] text-cyan/70 tracking-widest">
              // RENDER · ROBOTIC_APPENDAGE
            </div>
          </div>
        </div>

        {/* Workshop grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {WORKSHOPS.map((w, i) => (
            <article key={w.name}
              className="group glass-panel border border-cyan/15 hover:border-lime/40 p-5 transition-all cursor-pointer relative overflow-hidden">
              <div className="absolute top-2 right-2 font-mono text-[9px] text-data/30">
                WS_{String(i + 1).padStart(2, '0')}
              </div>
              <div className="font-mono text-[9px] text-cyan/60 tracking-widest mb-3 uppercase">{w.tag}</div>
              <h3 className="font-heading font-bold text-sm text-data group-hover:text-lime transition-colors uppercase leading-tight">
                {w.name}
              </h3>
              <div className="mt-4 flex items-center gap-1 font-mono text-[10px] text-data/40 group-hover:text-lime transition-colors">
                ENROLL <span className="transition-transform group-hover:translate-x-1">→</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
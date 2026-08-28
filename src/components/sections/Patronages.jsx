import ScrollMotion from '@/components/three/ScrollMotion';

const PATRONS = [
  { name: 'UNESCO', desc: 'For promotion of Technical Knowledge' },
  { name: 'UNICEF', desc: 'For various social causes taken up' },
  { name: 'Make in India', desc: 'For its Innovation Challenge' },
  { name: 'CEE', sub: 'Centre for Environment Education', desc: 'For Environment Education' },
  { name: 'SAYEN', desc: 'For Initiatives towards the Environment' },
];

export default function Patronages() {
  return (
    <section id="about" className="relative py-24 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <ScrollMotion from="up">
            <div className="font-mono text-xs text-lime tracking-widest mb-3">// 04 — SYSTEM ENDORSEMENT</div>
          </ScrollMotion>
          <ScrollMotion from="scale" blur delay={0.05}>
            <h2 className="font-display text-4xl sm:text-6xl text-data glow-cyan uppercase">
              Patronages <span className="text-data/30">Over</span> The Years
            </h2>
          </ScrollMotion>
        </div>

        {/* Patron cards — cascade from alternating sides */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-20">
          {PATRONS.map((p, i) => (
            <ScrollMotion key={p.name} from={i % 2 ? 'right' : 'left'} distance={70} delay={Math.min(i * 0.05, 0.2)}>
              <div className="glass-panel border border-cyan/20 p-5 flex flex-col items-center text-center hover:border-cyan/50 transition-colors group h-full">
                <div className="w-12 h-12 rounded-full border border-cyan/40 flex items-center justify-center mb-3 group-hover:box-glow-cyan transition-all">
                  <span className="font-display text-cyan text-sm">{p.name.slice(0, 2)}</span>
                </div>
                <div className="font-heading font-bold text-sm text-data uppercase tracking-wide">{p.name}</div>
                {p.sub && <div className="font-mono text-[9px] text-data/40 mt-0.5">{p.sub}</div>}
                <p className="mt-3 text-xs text-data/60 leading-relaxed">{p.desc}</p>
              </div>
            </ScrollMotion>
          ))}
        </div>

        {/* Recognition (left) + Leader's Appreciation (right) — meet in the middle */}
        <div className="grid md:grid-cols-2 gap-6">
          <ScrollMotion from="left" blur distance={120}>
            <article className="glass-panel border border-cyan/20 p-6 h-full">
              <h3 className="font-display text-lg text-[#FF00FF] mb-4 tracking-widest uppercase"
                style={{ textShadow: '0 0 12px rgba(255,0,255,0.5)' }}>
                Recognition
              </h3>
              <div className="border border-cyan/20 p-4 bg-void/40">
                <div className="font-heading font-bold text-data text-sm mb-2">Guinness World Records</div>
                <div className="font-mono text-[10px] text-lime mb-3">CERTIFICATE OF PARTICIPATION · Techfest 2018-19</div>
                <p className="text-xs text-data/70 leading-relaxed mb-3">
                  The most LED lights lit simultaneously is <span className="text-cyan font-bold">2,819</span>, achieved by
                  Indian Institute of Technology, Bombay and Ministry of New and Renewable Energy, Government of India
                  in Powai, Mumbai on 2 October 2018.
                </p>
                <div className="font-mono text-[10px] text-data/40 text-right">OFFICIALLY AMAZING</div>
              </div>
            </article>
          </ScrollMotion>

          <ScrollMotion from="right" blur delay={0.05} distance={120}>
            <article className="glass-panel border border-cyan/20 p-6 h-full">
              <h3 className="font-display text-lg text-[#FF00FF] mb-4 tracking-widest uppercase"
                style={{ textShadow: '0 0 12px rgba(255,0,255,0.5)' }}>
                Leader's Appreciation
              </h3>
              <div className="border border-cyan/20 p-4 bg-void/40 space-y-3">
                <div>
                  <div className="font-heading font-bold text-data text-sm">Prime Minister's Message</div>
                  <p className="text-xs text-data/60 mt-1 leading-relaxed">
                    A message of appreciation from the Hon'ble Prime Minister of India recognizing Techfest's
                    contribution to nation-building through technology and innovation.
                  </p>
                </div>
                <div className="h-px bg-cyan/10" />
                <div>
                  <div className="font-heading font-bold text-data text-sm">Global Lecture Series</div>
                  <p className="text-xs text-data/60 mt-1 leading-relaxed">
                    Endorsed by leaders, scientists, and visionaries including Nobel laureates, heads of state,
                    and pioneers across science, policy, and industry.
                  </p>
                </div>
              </div>
            </article>
          </ScrollMotion>
        </div>
      </div>
    </section>
  );
}
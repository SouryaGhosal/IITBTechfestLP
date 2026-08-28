import ScrollMotion from '@/components/three/ScrollMotion';

const TIMELINE = [
  { day: '01', date: '22 DEC', side: 'left', title: 'Inaugural Synthesis', type: 'Workshop',
    items: ['Robotic Hand & Embedded Systems Lab', 'AI/ML Foundations Bootcamp', 'Opening Ceremony · Main Arena'] },
  { day: '02', date: '23 DEC', side: 'right', title: 'Neural Convergence', type: 'Lecture',
    items: ['Keynote: N.R. Narayana Murthy', 'Keynote: Shri Nitin Gadkari', 'Int\'l Robotics Challenge Finals', 'Robowars Championship'] },
  { day: '03', date: '24 DEC', side: 'left', title: 'Final Protocol', type: 'Summit',
    items: ['Keynote: Gen. Anil Chauhan', 'Keynote: Dr. V. Narayanan (ISRO)', 'Technoholix Night', 'Closing Ceremony'] },
];

export default function NeuralTimeline() {
  return (
    <section id="timeline" className="relative py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <ScrollMotion from="up">
            <div className="font-mono text-xs text-lime tracking-widest mb-3">// 03 — NEURAL MAP</div>
          </ScrollMotion>
          <ScrollMotion from="scale" blur delay={0.05}>
            <h2 className="font-display text-4xl sm:text-6xl text-data glow-cyan uppercase">Event Timeline</h2>
          </ScrollMotion>
          <ScrollMotion from="up" delay={0.1}>
            <p className="mt-4 font-mono text-xs text-data/50 max-w-md mx-auto">
              A vertical spine connects three days of workshops and keynote lectures.
            </p>
          </ScrollMotion>
        </div>

        {/* Vertical spine */}
        <div className="relative">
          <div className="absolute left-8 sm:left-1/2 sm:-translate-x-1/2 top-0 bottom-0 w-px neural-spine" aria-hidden="true" />

          <div className="space-y-12">
            {TIMELINE.map((node, i) => (
              <div key={node.day} className={`relative flex ${node.side === 'right' ? 'sm:justify-end' : ''}`}>
                {/* Node */}
                <div className="absolute left-8 sm:left-1/2 -translate-x-1/2 -top-2 z-10">
                  <div className="w-4 h-4 rounded-full bg-cyan box-glow-cyan flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-void" />
                  </div>
                </div>

                {/* Card — slides in from its side toward the spine */}
                <ScrollMotion from={node.side} distance={130} blur delay={i * 0.05}
                  className={`ml-16 sm:ml-0 sm:w-[calc(50%-3rem)] ${node.side === 'right' ? 'sm:ml-auto' : ''}`}>
                  <article className="glass-panel border border-cyan/20 p-6 h-full">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <span className="font-display text-2xl text-lime glow-lime">{node.day}</span>
                        <div>
                          <div className="font-mono text-xs text-cyan tracking-widest">{node.date}</div>
                          <div className="font-mono text-[10px] text-data/40 uppercase">{node.type}</div>
                        </div>
                      </div>
                      <div className="font-mono text-[10px] text-data/40">DAY_{node.day}</div>
                    </div>
                    <h3 className="font-heading font-bold text-lg text-data uppercase tracking-wide mb-3">{node.title}</h3>
                    <ul className="space-y-2">
                      {node.items.map((it) => (
                        <li key={it} className="flex items-start gap-2 text-sm text-data/70">
                          <span className="text-lime mt-1">▸</span>
                          <span>{it}</span>
                        </li>
                      ))}
                    </ul>
                  </article>
                </ScrollMotion>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
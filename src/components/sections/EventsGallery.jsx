import { Image } from '@/components/ui/image';
import Tilt from '@/components/three/Tilt';
import ScrollMotion from '@/components/three/ScrollMotion';

const EVENTS = [
  {
    id: 'robowars', name: "Int'l Robowars", cat: 'Robotics',
    prize: '₹8L+', diff: 'Extreme', stack: 'Mechatronics · Combat AI',
    img: 'https://media.base44.com/images/public/6a736d6811970527f8956a0d/268e7adb6_generated_2e8bfb46.png',
    desc: 'Heavyweight combat bots clash in a reinforced arena. Sparks, steel, and survival.',
  },
  {
    id: 'drone', name: 'Drone Racing', cat: 'Aerospace',
    prize: '₹3L+', diff: 'Advanced', stack: 'FPV · Flight Control',
    img: 'https://media.base44.com/images/public/6a736d6811970527f8956a0d/ee1fbc745_generated_576dc0f0.png',
    desc: 'First-person drone piloting through neon-lit obstacle circuits at breakneck speed.',
  },
  {
    id: 'fullthrottle', name: 'Int\'l Full Throttle', cat: 'Automotive',
    prize: '₹4L+', diff: 'Advanced', stack: 'IC Engines · RC Nitro',
    img: 'https://media.base44.com/images/public/6a736d6811970527f8956a0d/ee1fbc745_generated_576dc0f0.png',
    desc: 'RC nitro buggies engineered for raw acceleration on a purpose-built dirt track.',
  },
  {
    id: 'irc', name: 'Int\'l Robotics Challenge', cat: 'Robotics',
    prize: '₹6L+', diff: 'Extreme', stack: 'Sensors · Path Planning',
    img: 'https://media.base44.com/images/public/6a736d6811970527f8956a0d/b2fcd6dd1_generated_5200c45c.png',
    desc: 'Autonomous robots solve complex tasks. 13+ nations compete for global supremacy.',
  },
  {
    id: 'algo', name: 'AlgoNinja', cat: 'Quant',
    prize: '₹10L+', diff: 'Expert', stack: 'Algo Trading · Python',
    img: 'https://media.base44.com/images/public/6a736d6811970527f8956a0d/d10fa6b22_generated_cfea0c7e.png',
    desc: 'Algorithmic trading warfare. Build strategies that dominate live market simulation.',
  },
  {
    id: 'auv', name: 'Autonomous AUV', cat: 'Aquatics',
    prize: '₹3L+', diff: 'Advanced', stack: 'Underwater · ROS',
    img: 'https://media.base44.com/images/public/6a736d6811970527f8956a0d/b2fcd6dd1_generated_5200c45c.png',
    desc: 'Self-navigating underwater vehicles traverse aquatic challenge courses autonomously.',
  },
];

export default function EventsGallery() {
  return (
    <section id="events" className="relative py-24 px-4">
      {/* Section header — label from left, title from right, meeting in the middle */}
      <div className="max-w-6xl mx-auto mb-16">
        <div className="flex items-end justify-between flex-wrap gap-4">
          <ScrollMotion from="left">
            <div className="font-mono text-xs text-lime tracking-widest mb-3">// 02 — NEXUS OF EVENTS</div>
            <h2 className="font-display text-4xl sm:text-6xl text-data glow-cyan uppercase">
              Competitions
            </h2>
          </ScrollMotion>
          <ScrollMotion from="right" delay={0.05}>
            <p className="font-mono text-xs text-data/50 max-w-xs">
              25+ competitions across robotics, aerospace, coding, and quant. Each shard is a portal.
            </p>
          </ScrollMotion>
        </div>
      </div>

      {/* Horizontal data-core gallery — cards rise and drift in alternately */}
      <div className="overflow-x-auto scrollbar-none -mx-4 px-4 pb-6">
        <div className="flex gap-5 w-max">
          {EVENTS.map((e, i) => (
            <ScrollMotion key={e.id} from={i % 3 === 0 ? 'left' : i % 3 === 1 ? 'right' : 'up'} distance={80} delay={Math.min(i * 0.03, 0.18)} className="shrink-0 w-[280px] sm:w-[320px]">
            <Tilt max={10} scale={1.05} className="h-full">
            <article
              className="group relative w-full h-full glass-panel border border-cyan/20 hover:border-cyan/60 transition-all duration-300 overflow-hidden">
              <div className="absolute top-3 left-3 z-20 font-mono text-[10px] text-cyan/60">
                #{String(i + 1).padStart(2, '0')}
              </div>
              <div className="absolute top-3 right-3 z-20 font-mono text-[10px] text-lime/70">
                {e.cat}
              </div>

              <div className="relative h-44 overflow-hidden">
                <Image src={e.img} alt={e.name} fittingType="fill"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-cobalt via-cobalt/30 to-transparent" />
                <span className="absolute top-2 left-2 w-3 h-3 border-l border-t border-lime" />
                <span className="absolute top-2 right-2 w-3 h-3 border-r border-t border-lime" />
              </div>

              <div className="p-5">
                <h3 className="font-display text-base text-data group-hover:text-cyan transition-colors uppercase leading-tight">
                  {e.name}
                </h3>
                <p className="mt-2 text-sm text-data/60 leading-relaxed">{e.desc}</p>

                <div className="mt-4 pt-4 border-t border-cyan/10 space-y-1.5 opacity-70 group-hover:opacity-100 transition-opacity">
                  <div className="flex justify-between font-mono text-[10px]">
                    <span className="text-data/40">PRIZE POOL</span>
                    <span className="text-lime">{e.prize}</span>
                  </div>
                  <div className="flex justify-between font-mono text-[10px]">
                    <span className="text-data/40">DIFFICULTY</span>
                    <span className="text-cyan">{e.diff}</span>
                  </div>
                  <div className="font-mono text-[10px] text-data/50 pt-1">
                    {e.stack}
                  </div>
                </div>
              </div>
            </article>
            </Tilt>
          </ScrollMotion>
          ))}

          <ScrollMotion from="scale" blur delay={0.1}>
            <div className="shrink-0 w-[120px] flex items-center justify-center glass-panel-lime border border-lime/30">
              <div className="text-center">
                <div className="font-display text-3xl text-lime glow-lime">+19</div>
                <p className="font-mono text-[10px] text-data/60 mt-2">MORE<br/>EVENTS</p>
                <a href="https://techfest.org/competitions" target="_blank" rel="noopener noreferrer"
                  className="mt-3 inline-block font-mono text-[10px] text-lime hover:underline">VIEW ALL →</a>
              </div>
            </div>
          </ScrollMotion>
        </div>
      </div>
    </section>
  );
}
import ScrollMotion from '@/components/three/ScrollMotion';

export default function SiteFooter() {
  return (
    <footer className="relative mt-12 border-t border-cyan/20">
      {/* CTA bar — text from left, button from right, meeting in the middle */}
      <div className="bg-gradient-to-r from-transparent via-cyan/10 to-transparent border-y border-cyan/20 py-6">
        <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <ScrollMotion from="left" distance={100}>
            <div className="font-display text-base sm:text-xl text-data uppercase tracking-widest">
              Unleash The Future
            </div>
          </ScrollMotion>
          <ScrollMotion from="right" distance={100} delay={0.05}>
            <a href="#register"
              className="orb-pulse px-8 py-3 bg-[#FF00FF]/15 border border-[#FF00FF] text-white hover:bg-[#FF00FF] transition-all font-heading font-bold text-sm tracking-widest uppercase"
              style={{ boxShadow: '0 0 24px rgba(255,0,255,0.25)' }}>
              Register Now
            </a>
          </ScrollMotion>
        </div>
      </div>

      {/* Footer body — columns rise in sequence */}
      <div className="max-w-6xl mx-auto px-4 py-12 grid sm:grid-cols-2 md:grid-cols-4 gap-8">
        <ScrollMotion from="up" distance={80}>
          <div className="font-display text-2xl text-cyan glow-cyan mb-3">TF</div>
          <p className="text-xs text-data/50 leading-relaxed">
            Techfest is the annual science and technology festival of IIT Bombay — Asia's largest,
            organised entirely by the student community. Now in its 29th edition.
          </p>
          <p className="font-mono text-[10px] text-cyan/60 mt-3">techfest.org</p>
        </ScrollMotion>

        {[
          { h: 'Events', links: ["Int'l Robowars", 'Drone Racing', 'Full Throttle', 'AlgoNinja', 'Technoholix'] },
          { h: 'Explore', links: ['Competitions', 'Workshops', 'Lectures', 'Exhibitions', 'Accommodation'] },
          { h: 'Connect', links: ['About Us', 'Sponsors', 'Patronages', 'Contact', 'Store'] },
        ].map((col, i) => (
          <ScrollMotion key={col.h} from="up" distance={80} delay={0.1 + i * 0.08}>
            <div className="font-heading font-bold text-sm text-lime uppercase tracking-widest mb-3">{col.h}</div>
            <ul className="space-y-2">
              {col.links.map((l) => (
                <li key={l}>
                  <a href="#register" className="text-xs text-data/60 hover:text-cyan transition-colors">{l}</a>
                </li>
              ))}
            </ul>
          </ScrollMotion>
        ))}
      </div>

      <ScrollMotion from="up" distance={50} delay={0.1}>
        <div className="border-t border-cyan/10 py-5">
          <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3 font-mono text-[10px] text-data/40 tracking-widest">
            <span>© 2025 TECHFEST · IIT BOMBAY · A SIMULATED PARADIGM</span>
            <span>BUILT WITHIN THE EXOSKELETON GRID</span>
          </div>
        </div>
      </ScrollMotion>
    </footer>
  );
}
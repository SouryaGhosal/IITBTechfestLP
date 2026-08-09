import { useState } from 'react';
import { Image } from '@/components/ui/image';

const ORB_IMG = 'https://media.base44.com/images/public/6a736d6811970527f8956a0d/d10fa6b22_generated_cfea0c7e.png';

export default function RegistrationPortal() {
  const [email, setEmail] = useState('');
  const [scanning, setScanning] = useState(false);
  const [done, setDone] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setScanning(true);
    setTimeout(() => {
      setScanning(false);
      setDone(true);
    }, 2200);
  };

  return (
    <section id="register" className="relative py-24 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <div className="font-mono text-xs text-lime tracking-widest mb-3">// 06 — CORE SYNCHRONIZATION</div>
          <h2 className="font-display text-4xl sm:text-6xl text-data glow-cyan uppercase">
            Registration Portal
          </h2>
          <p className="mt-4 font-mono text-xs text-data/50">
            Initiate biometric verification to enter the Techfest ecosystem.
          </p>
        </div>

        {/* Terminal interface */}
        <div className="glass-panel border border-cyan/30 box-glow-cyan overflow-hidden">
          {/* Terminal header */}
          <div className="flex items-center justify-between px-4 py-2.5 border-b border-cyan/20 bg-void/60">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#FF00FF]" />
              <span className="w-2.5 h-2.5 rounded-full bg-lime" />
              <span className="w-2.5 h-2.5 rounded-full bg-cyan" />
            </div>
            <span className="font-mono text-[10px] text-data/40 tracking-widest">TF://REGISTER.terminal</span>
          </div>

          {/* Terminal body */}
          <div className="p-6 sm:p-8">
            {/* Orb */}
            <div className="flex justify-center mb-6">
              <div className={`relative w-28 h-28 ${scanning ? 'orb-pulse' : ''}`}>
                <Image src={ORB_IMG} alt="" fittingType="fill" className="w-full h-full object-contain rounded-full" />
                {scanning && (
                  <div className="absolute inset-0 rounded-full overflow-hidden">
                    <div className="absolute left-0 right-0 h-0.5 bg-lime animate-[scan_2s_linear]"
                      style={{ animation: 'scan 2.2s linear', top: 0 }} />
                  </div>
                )}
              </div>
            </div>

            {done ? (
              <div className="text-center py-6">
                <div className="font-mono text-lime text-sm mb-2">{'>'} VERIFICATION COMPLETE</div>
                <div className="font-mono text-xs text-data/60">Welcome to the Simulated Paradigm.</div>
                <div className="font-mono text-xs text-cyan mt-1">Confirmation sent to {email}</div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="email" className="font-mono text-xs text-cyan tracking-widest">
                    {'>'} ENTER TECHFEST_ID (EMAIL)
                  </label>
                  <input
                    id="email" type="email" value={email} required disabled={scanning}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="operator@neural.io"
                    className="mt-2 w-full bg-void/60 border border-cyan/30 px-4 py-3 text-data font-mono text-sm
                      focus:border-lime focus:outline-none placeholder:text-data/30 transition-colors"
                  />
                </div>
                <button type="submit" disabled={scanning}
                  className="orb-pulse w-full py-4 bg-cyan/10 border border-cyan text-cyan hover:bg-cyan hover:text-void
                    disabled:opacity-50 transition-all font-heading font-bold text-sm tracking-widest uppercase">
                  {scanning ? '◉ SCANNING...' : '⬡ INITIATE REGISTRATION'}
                </button>
                <p className="font-mono text-[10px] text-data/40 text-center">
                  Free &amp; open for all · IIT Bombay · 22-24 Dec 2025
                </p>
              </form>
            )}
          </div>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-3 gap-4 mt-8">
          {[
            { v: '180K+', l: 'Footfall' },
            { v: '25+', l: 'Competitions' },
            { v: '13+', l: 'Nations' },
          ].map((s) => (
            <div key={s.l} className="glass-panel border border-cyan/20 p-4 text-center">
              <div className="font-display text-2xl text-lime glow-lime">{s.v}</div>
              <div className="font-mono text-[10px] text-data/50 tracking-widest uppercase mt-1">{s.l}</div>
            </div>
          ))}
        </div>
      </div>

      <style>{`@keyframes scan { 0%{top:0} 100%{top:100%} }`}</style>
    </section>
  );
}
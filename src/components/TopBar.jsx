import { LogIn } from 'lucide-react';

const NAV = [
  { label: 'Workshops', href: '#workshops' },
  { label: 'Competitions', href: '#events' },
  { label: 'Timeline', href: '#timeline' },
  { label: 'About', href: '#about' },
  { label: 'Sponsors', href: '#sponsors' },
];

export default function TopBar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 h-16 flex items-center justify-between px-4 lg:px-28 bg-background/80 backdrop-blur-md border-b border-primary/25">
      {/* Logo */}
      <a href="#hero" className="flex items-center gap-2.5 group">
        <div className="relative w-8 h-8 flex items-center justify-center border border-cyan/50">
          <span className="font-display text-cyan glow-cyan text-sm">T</span>
          <span className="absolute -top-px -left-px w-1.5 h-1.5 border-l border-t border-lime" />
          <span className="absolute -bottom-px -right-px w-1.5 h-1.5 border-r border-b border-lime" />
        </div>
        <span className="font-mono text-[10px] text-data/60 tracking-[0.3em] uppercase">Techfest</span>
      </a>

      {/* Center nav — minimal, dot-separated */}
      <nav className="hidden md:flex items-center font-mono text-[10px] tracking-[0.25em] uppercase text-data/60">
        {NAV.map((n, i) => (
          <span key={n.label} className="flex items-center">
            {i > 0 && <span className="mx-3 text-cyan/40">•</span>}
            <a href={n.href} className="hover:text-cyan transition-colors">{n.label}</a>
          </span>
        ))}
      </nav>

      {/* Sign in */}
      <a href="#register"
        className="group flex items-center gap-2 px-4 py-2 border border-cyan/40 hover:border-lime/60 transition-all">
        <LogIn className="w-3.5 h-3.5 text-cyan group-hover:text-lime" strokeWidth={1.5} />
        <span className="font-mono text-[10px] tracking-[0.25em] text-cyan group-hover:text-lime uppercase">Register</span>
      </a>
    </header>
  );
}
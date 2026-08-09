import { Link } from 'react-router-dom';
import { LogIn } from 'lucide-react';

export default function TopBar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 h-20 flex items-center justify-between px-4 lg:px-28 glass-panel border-b border-cyan/20">
      {/* Logo */}
      <a href="#hero" className="flex items-center gap-2 group">
        <div className="relative w-9 h-9 flex items-center justify-center border border-cyan/50 box-glow-cyan">
          <span className="font-display text-cyan glow-cyan text-lg">T</span>
          <span className="absolute -top-px -left-px w-2 h-2 border-l border-t border-lime" />
          <span className="absolute -bottom-px -right-px w-2 h-2 border-r border-b border-lime" />
        </div>
        <span className="hidden sm:inline font-mono text-[10px] text-data/60 tracking-widest">IITB · 2025</span>
      </a>

      {/* Center nav */}
      <nav className="hidden md:flex items-center gap-8 font-heading font-semibold text-xs tracking-widest uppercase">
        <a href="#timeline" className="text-data/80 hover:text-cyan transition-colors relative group">
          Accommodation
          <span className="absolute -bottom-1 left-0 h-px w-0 bg-lime transition-all group-hover:w-full" />
        </a>
        <a href="#workshops" className="text-data/80 hover:text-cyan transition-colors relative group">
          Workshops
          <span className="absolute -bottom-1 left-0 h-px w-0 bg-lime transition-all group-hover:w-full" />
        </a>
        <a href="#events" className="text-data/80 hover:text-cyan transition-colors relative group">
          Competitions
          <span className="absolute -bottom-1 left-0 h-px w-0 bg-lime transition-all group-hover:w-full" />
        </a>
      </nav>

      {/* Sign in */}
      <a href="#register"
        className="group flex items-center gap-2 px-5 py-2 bg-cyan/10 border border-cyan/40 hover:bg-lime/10 hover:border-lime/50 transition-all">
        <LogIn className="w-4 h-4 text-cyan group-hover:text-lime" strokeWidth={1.5} />
        <span className="font-mono text-xs tracking-widest text-cyan group-hover:text-lime uppercase">Sign In</span>
      </a>
    </header>
  );
}
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Home, Calendar, Phone, Info, Star, ShoppingBag, ChevronRight } from 'lucide-react';

const NAV = [
  { id: 'home', icon: Home, label: 'Home', href: '#hero' },
  { id: 'events', icon: Calendar, label: 'Events', href: '#events', sub: [
    "Int'l Full Throttle", "Int'l Robowars", "Int'l Drone Racing", "Boeing Aeromodelling",
    "Int'l Micromouse", "Autonomous AUV", "AlgoNinja", "Game of Codes", "Hack AI",
    "Urban Futurism", "Technoholix", "TechExpo", "Lectures", "TWMUN", "Int'l Summit",
  ]},
  { id: 'timeline', icon: Phone, label: 'Timeline', href: '#timeline' },
  { id: 'about', icon: Info, label: 'About', href: '#about' },
  { id: 'sponsors', icon: Star, label: 'Sponsors', href: '#sponsors' },
  { id: 'store', icon: ShoppingBag, label: 'Store', href: '#register' },
];

const SOCIALS = ['Instagram','LinkedIn','YouTube','X','Facebook','Discord','WhatsApp'];

function SocialIcon({ name }) {
  const map = {
    Instagram: 'M12 2.2c3.2 0 3.6 0 4.9.07 1.2.06 1.8.25 2.2.42.6.22 1 .48 1.4.9.42.4.68.8.9 1.4.17.4.36 1 .42 2.2.07 1.3.07 1.7.07 4.9s0 3.6-.07 4.9c-.06 1.2-.25 1.8-.42 2.2-.22.6-.48 1-.9 1.4-.4.42-.8.68-1.4.9-.4.17-1 .36-2.2.42-1.3.07-1.7.07-4.9.07s-3.6 0-4.9-.07c-1.2-.06-1.8-.25-2.2-.42a3.8 3.8 0 0 1-1.4-.9 3.8 3.8 0 0 1-.9-1.4c-.17-.4-.36-1-.42-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.07-4.9c.06-1.2.25-1.8.42-2.2.22-.6.48-1 .9-1.4.4-.42.8-.68 1.4-.9.4-.17 1-.36 2.2-.42C8.4 2.2 8.8 2.2 12 2.2Zm0 1.8c-3.1 0-3.5 0-4.7.07-.9.04-1.4.2-1.7.32-.43.17-.74.37-1.06.7-.32.31-.52.62-.7 1.05-.11.3-.27.8-.3 1.7C3.3 8.5 3.3 8.9 3.3 12s0 3.5.07 4.7c.04.9.2 1.4.32 1.7.17.43.37.74.7 1.06.31.32.62.52 1.05.7.3.11.8.27 1.7.3 1.2.07 1.6.07 4.7.07s3.5 0 4.7-.07c.9-.04 1.4-.2 1.7-.32.43-.17.74-.37 1.06-.7.32-.31.52-.62.7-1.05.11-.3.27-.8.3-1.7.07-1.2.07-1.6.07-4.7s0-3.5-.07-4.7c-.04-.9-.2-1.4-.32-1.7a2.8 2.8 0 0 0-.7-1.06 2.8 2.8 0 0 0-1.05-.7c-.3-.11-.8-.27-1.7-.3C15.5 4 15.1 4 12 4Zm0 3.1a4.9 4.9 0 1 1 0 9.8 4.9 4.9 0 0 1 0-9.8Zm0 1.8a3.1 3.1 0 1 0 0 6.2 3.1 3.1 0 0 0 0-6.2Zm6.2-.4a1.1 1.1 0 1 1-2.2 0 1.1 1.1 0 0 1 2.2 0Z',
    LinkedIn: 'M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm6 0h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.5c0-1.3-.02-3-1.83-3-1.83 0-2.11 1.43-2.11 2.9V21H9V9Z',
    YouTube: 'M21.6 7.2s-.2-1.4-.8-2c-.77-.8-1.62-.8-2.02-.85C16 4.2 12 4.2 12 4.2h-.02s-4 0-6.76.15c-.4.05-1.25.05-2.02.85-.6.6-.8 2-.8 2S2.2 8.8 2.2 10.4v1.2c0 1.6.2 3.2.2 3.2s.2 1.4.8 2c.77.8 1.78.77 2.23.86 1.62.15 6.57.2 6.57.2s4 0 6.76-.16c.4-.05 1.25-.05 2.02-.85.6-.6.8-2 .8-2s.2-1.6.2-3.2v-1.2c0-1.6-.2-3.2-.2-3.2ZM9.8 14.6V8.4l5.2 3.1-5.2 3.1Z',
    X: 'M18.24 2.25h3.3l-7.2 8.24L23 21.75h-6.63l-5.2-6.8-5.95 6.8H1.7l7.7-8.8L1.7 2.25h6.8l4.7 6.22 5.04-6.22Zm-1.16 17.5h1.83L7.01 4.13H5.05l12.03 15.62Z',
    Facebook: 'M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.5-3.9 3.78-3.9 1.1 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12Z',
    Discord: 'M19.27 5.33A16.6 16.6 0 0 0 15.1 4l-.2.4a12 12 0 0 1 3.6 1.85 12.3 12.3 0 0 0-10.96 0A12 12 0 0 1 11.13 4.4L10.9 4a16.6 16.6 0 0 0-4.17 1.33C2.27 11.1 2.5 16.66 2.5 17.9a16.5 16.5 0 0 0 5.04 2.55l.9-1.3c-.5-.2-1-.43-1.45-.7l.36-.26a11.8 11.8 0 0 0 10.3 0l.36.26c-.45.27-.94.5-1.45.7l.9 1.3a16.5 16.5 0 0 0 5.04-2.55c0-2-.7-7.3-3.23-12.57ZM9.55 15.33c-.98 0-1.78-.9-1.78-2s.78-2 1.78-2 1.8.9 1.78 2c0 1.1-.8 2-1.78 2Zm4.9 0c-.98 0-1.78-.9-1.78-2s.78-2 1.78-2 1.8.9 1.78 2c0 1.1-.8 2-1.78 2Z',
    WhatsApp: 'M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91C21.96 6.45 17.5 2 12.04 2Zm5.8 14.1c-.24.68-1.4 1.3-1.94 1.38-.5.07-1.13.1-1.82-.11-.42-.13-.96-.31-1.65-.6-2.9-1.25-4.8-4.17-4.95-4.37-.14-.2-1.18-1.57-1.18-3 0-1.42.75-2.12 1.01-2.41.27-.3.58-.37.78-.37l.56.01c.18.01.42-.07.66.5.24.59.82 2.02.89 2.16.07.15.12.32.02.51-.1.2-.15.32-.29.5-.15.17-.3.39-.43.52-.14.15-.29.3-.13.6.16.29.7 1.16 1.5 1.88 1.04.93 1.9 1.21 2.2 1.35.3.14.47.12.64-.07.17-.2.74-.86.94-1.16.2-.3.4-.25.67-.15.27.1 1.7.8 1.99.95.29.14.49.22.56.34.07.12.07.7-.17 1.38Z',
  };
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-label={name} className="w-[18px] h-[18px]">
      <path d={map[name]} />
    </svg>
  );
}

export default function CyborgSidebars() {
  const [openMenu, setOpenMenu] = useState(null);

  return (
    <>
      {/* LEFT SIDEBAR - primary navigation */}
      <aside aria-label="Primary navigation"
        className="hidden lg:flex flex-col items-center fixed left-0 top-20 bottom-0 z-40 w-24 glass-panel border-x border-cyan/20 py-6">
        <div className="font-mono text-[9px] text-cyan/60 tracking-widest mb-6 [writing-mode:vertical-rl] rotate-180">
          NEURAL · NAV · 2025
        </div>
        <nav className="flex flex-col gap-1 flex-1">
          {NAV.map((item) => {
            const Icon = item.icon;
            const isOpen = openMenu === item.id;
            return (
              <div key={item.id} className="relative"
                onMouseEnter={() => setOpenMenu(item.id)}
                onMouseLeave={() => setOpenMenu(null)}>
                <a href={item.href}
                  className={`group flex flex-col items-center gap-1 py-3 px-2 w-full transition-colors ${isOpen ? 'text-lime' : 'text-data hover:text-cyan'}`}>
                  <Icon className="w-[18px] h-[18px]" strokeWidth={1.5} />
                  <span className="text-[8px] font-mono tracking-widest uppercase">{item.label}</span>
                </a>
                {item.sub && isOpen && (
                  <div className="absolute left-full top-0 ml-2 min-w-[230px] glass-panel border border-cyan/30 p-3 box-glow-cyan">
                    <div className="font-display text-[10px] text-lime tracking-widest mb-2 px-2">// EVENTS INDEX</div>
                    <ul className="flex flex-col">
                      {item.sub.map((s) => (
                        <li key={s}>
                          <Link to="#events" className="flex items-center gap-2 px-2 py-1.5 text-xs text-data hover:text-cyan hover:bg-cyan/5 transition-colors">
                            <ChevronRight className="w-3 h-3 text-cyan/50" /> {s}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            );
          })}
        </nav>
        <div className="mt-auto font-mono text-[8px] text-data/30 tracking-widest">v.29.0</div>
      </aside>

      {/* RIGHT SIDEBAR - social */}
      <aside aria-label="Social channels"
        className="hidden lg:flex flex-col items-center fixed right-0 top-20 bottom-0 z-40 w-24 glass-panel border-x border-cyan/20 py-6">
        <div className="font-mono text-[9px] text-cyan/60 tracking-widest mb-6 [writing-mode:vertical-rl]">
          COMMS · UPLINK
        </div>
        <div className="flex flex-col gap-4 flex-1">
          {SOCIALS.map((s) => (
            <a key={s} href="https://techfest.org" target="_blank" rel="noopener noreferrer" aria-label={s}
              className="text-data/70 hover:text-lime hover:scale-110 transition-all">
              <SocialIcon name={s} />
            </a>
          ))}
        </div>
        <div className="mt-auto font-mono text-[8px] text-data/30 tracking-widest">∞</div>
      </aside>
    </>
  );
}
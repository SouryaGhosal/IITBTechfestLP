import { Outlet, Link } from 'react-router-dom';
import CyborgSidebars from '@/components/CyborgSidebars';
import TopBar from '@/components/TopBar';
import TechfestScene from '@/components/three/TechfestScene';

export default function Layout() {
  return (
    <div className="relative min-h-screen bg-void text-data grid-bg">
      {/* 3D interactive backdrop */}
      <TechfestScene />
      {/* Ambient gradient wash over the 3D scene */}
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0"
        style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(46,0,77,0.35), transparent 55%), radial-gradient(ellipse at 100% 100%, rgba(0,26,51,0.4), transparent 50%)' }} />
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 scanline" />

      <TopBar />
      <CyborgSidebars />

      {/* Main content framed between sidebars */}
      <div className="relative z-10 lg:pl-24 lg:pr-24 pt-16">
        <Outlet />
      </div>
    </div>
  );
}
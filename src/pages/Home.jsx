import Hero from '@/components/sections/Hero';
import Workshops from '@/components/sections/Workshops';
import EventsGallery from '@/components/sections/EventsGallery';
import NeuralTimeline from '@/components/sections/NeuralTimeline';
import Patronages from '@/components/sections/Patronages';
import Sponsors from '@/components/sections/Sponsors';
import RegistrationPortal from '@/components/sections/RegistrationPortal';
import SiteFooter from '@/components/sections/SiteFooter';

export default function Home() {
  return (
    <>
      <Hero />
      <Workshops />
      <EventsGallery />
      <NeuralTimeline />
      <Patronages />
      <Sponsors />
      <RegistrationPortal />
      <SiteFooter />
    </>
  );
}
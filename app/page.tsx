import HeroVideo from "@/components/HeroVideo";
import Marquee from "@/components/Marquee";
import VetementsSection from "@/components/VetementsSection";
import { TikTokSection, AboutPreview, ContactNous } from "@/components/Sections";

export default function Home() {
  return (
    <>
      <HeroVideo />
      <Marquee />
      <VetementsSection limit={4} />
      <TikTokSection />
      <AboutPreview />
      <ContactNous />
    </>
  );
}

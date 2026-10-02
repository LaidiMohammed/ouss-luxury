import { ContactNous, TikTokSection } from "@/components/Sections";

export const metadata = {
  title: "Nous contacter — OUSS LUXURY",
  description: "Téléphone, WhatsApp, TikTok, adresse boutique Batna.",
};

export default function ContactPage() {
  return (
    <div className="pt-24 sm:pt-32">
      <ContactNous />
      <TikTokSection />
    </div>
  );
}

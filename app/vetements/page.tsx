import VetementsSection from "@/components/VetementsSection";

export const metadata = {
  title: "Vêtements — OUSS LUXURY Batna",
  description: "Polos, chemises, ensembles, t-shirts. Collection Ouss Luxury.",
};

export default function VetementsPage() {
  return (
    <div className="pt-24 sm:pt-28">
      <VetementsSection />
    </div>
  );
}

const BRANDS = ["LACOSTE", "TOMMY", "EP", "CLASSIQUE", "PARIS", "LONDON", "BATNA", "OUSS LUXURY"];

export default function Marquee() {
  const row = [...BRANDS, ...BRANDS];
  return (
    <div className="overflow-hidden border-y border-gold/20 bg-[#0c0c0d] py-4">
      <div className="marquee-track flex w-max items-center gap-8 pr-8">
        {row.map((b, i) => (
          <span key={i} className="flex items-center gap-8 whitespace-nowrap">
            <span className="font-luxe text-lg sm:text-xl tracking-[0.25em] text-gold/80">
              {b}
            </span>
            <span className="h-1.5 w-1.5 rotate-45 bg-gold/60" />
          </span>
        ))}
      </div>
    </div>
  );
}

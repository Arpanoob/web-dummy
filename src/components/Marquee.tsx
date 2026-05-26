export default function Marquee() {
  const logos = ["N7", "CB7", "API", "LOS", "LMS", "N7", "CB7", "API", "LOS", "LMS"];

  return (
    <section className="relative bg-dark-alt overflow-hidden border-y border-ice/10">
      <div className="py-5 md:py-6">
        <div className="flex overflow-hidden">
          <div className="animate-marquee flex items-center gap-8 shrink-0 pr-8">
            {logos.map((logo, i) => (
              <div key={i} className="flex items-center gap-8 shrink-0">
                <span className="font-[Archivo] font-medium text-ice text-lg md:text-xl whitespace-nowrap">
                  {i === 0 && "Say "}
                  {i === 0 && <span className="inline-block mx-1">👋</span>}
                  {i === 0 && " to the new way of banking"}
                </span>
                <div className="w-px h-6 bg-ice/20" />
                <span className="font-[Chivo_Mono] text-blue-primary text-sm uppercase font-medium">
                  {logo}
                </span>
                <div className="w-px h-6 bg-ice/20" />
              </div>
            ))}
          </div>
          <div className="animate-marquee flex items-center gap-8 shrink-0 pr-8" aria-hidden>
            {logos.map((logo, i) => (
              <div key={i} className="flex items-center gap-8 shrink-0">
                <span className="font-[Archivo] font-medium text-ice text-lg md:text-xl whitespace-nowrap">
                  {i === 0 && "Say "}
                  {i === 0 && <span className="inline-block mx-1">👋</span>}
                  {i === 0 && " to the new way of banking"}
                </span>
                <div className="w-px h-6 bg-ice/20" />
                <span className="font-[Chivo_Mono] text-blue-primary text-sm uppercase font-medium">
                  {logo}
                </span>
                <div className="w-px h-6 bg-ice/20" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

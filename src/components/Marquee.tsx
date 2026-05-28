const items = [
  { type: "brand", text: "N7" },
  { type: "text", text: "Say" },
  { type: "emoji", text: "\ud83d\udc4b" },
  { type: "text", text: "to the new way of banking" },
  { type: "brand", text: "CB7" },
  { type: "text", text: "Say" },
  { type: "emoji", text: "\ud83d\udc4b" },
  { type: "text", text: "to the new way of banking" },
  { type: "brand", text: "N7" },
  { type: "text", text: "Say" },
  { type: "emoji", text: "\ud83d\udc4b" },
  { type: "text", text: "to the new way of banking" },
  { type: "brand", text: "CB7" },
  { type: "text", text: "Say" },
];

function MarqueeContent() {
  return (
    <>
      {items.map((item, i) => (
        <span key={i} className="flex items-center gap-4 shrink-0">
          {item.type === "brand" ? (
            <span className="font-[Chivo_Mono] text-blue-primary text-base font-medium uppercase">
              {item.text}
            </span>
          ) : item.type === "emoji" ? (
            <span className="text-xl">{item.text}</span>
          ) : (
            <span className="font-[Archivo] font-medium text-ice text-base whitespace-nowrap">
              {item.text}
            </span>
          )}
          <span className="text-ice/30 mx-2">&middot;</span>
        </span>
      ))}
    </>
  );
}

export default function Marquee() {
  return (
    <section className="relative bg-dark overflow-hidden border-y border-ice/8">
      <div className="py-4 md:py-5">
        <div className="flex overflow-hidden">
          <div className="animate-marquee flex items-center gap-4 shrink-0 pr-4">
            <MarqueeContent />
          </div>
          <div className="animate-marquee flex items-center gap-4 shrink-0 pr-4" aria-hidden="true">
            <MarqueeContent />
          </div>
        </div>
      </div>
    </section>
  );
}

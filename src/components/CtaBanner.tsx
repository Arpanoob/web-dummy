interface CtaBannerProps {
  variant?: "default" | "compact";
}

export default function CtaBanner({ variant = "default" }: CtaBannerProps) {
  return (
    <section className="relative bg-dark overflow-hidden">
      <div className="section-divider" />
      <div className={`max-w-[1440px] mx-auto px-6 sm:px-10 md:px-20 ${variant === "compact" ? "py-12 md:py-16" : "py-16 md:py-24"}`}>
        <div className="gradient-primary rounded-2xl md:rounded-3xl px-8 md:px-16 py-10 md:py-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h3 className="font-[Archivo] font-medium text-white text-[24px] md:text-[32px] leading-[1.2] tracking-[-0.32px] max-w-[400px]">
              Take the full advantage of going paper-less now.
            </h3>
          </div>
          <a
            href="#contact"
            className="bg-white text-dark font-[Chivo_Mono] text-[14px] uppercase px-8 py-4 rounded-[10px] hover:bg-ice transition-colors shrink-0"
          >
            Schedule a Demo
          </a>
        </div>
      </div>
    </section>
  );
}

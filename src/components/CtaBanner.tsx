import { useInView } from "../hooks/useInView";

interface CtaBannerProps {
  variant?: "default" | "compact";
  brand?: "CB7" | "N7";
  bg?: "dark" | "white";
}

export default function CtaBanner({
  variant = "default",
  brand = "CB7",
  bg = "white",
}: CtaBannerProps) {
  const { ref, isVisible } = useInView();

  if (variant === "default") {
    return (
      <section
        ref={ref}
        className={`relative bg-dark overflow-hidden transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <div className="section-divider" />
        <img
          src="/images/cta-paperless.svg"
          alt="Take the full advantage of going paper-less now"
          className="w-full h-auto"
        />
      </section>
    );
  }

  const subtitle =
    brand === "N7"
      ? "N7 helps your financial institution improve the client experience, automate and optimize procedures, simplify banking operations"
      : "CB7 helps your financial institution improve the client experience, automate and optimize procedures, simplify banking operations";

  return (
    <section
      ref={ref}
      className={`relative ${bg === "dark" ? "bg-dark" : "bg-white"} overflow-hidden transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
    >
      <div className="section-divider" />
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 md:px-20 py-12 md:py-16">
        <div className="relative bg-dark rounded-[27px] overflow-hidden px-10 md:px-16 py-14 md:py-20">
          {/* Watermark */}
          <span
            className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-[10%] font-[Archivo] font-bold text-[200px] md:text-[320px] leading-none text-ice/[0.03] select-none pointer-events-none"
            aria-hidden="true"
          >
            {brand}
          </span>

          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
            <div className="max-w-[560px]">
              <h3 className="font-[Archivo] font-medium text-ice text-[28px] md:text-[40px] leading-[1.15] tracking-[-0.4px] mb-4">
                Take the full advantage of going paper-less now.
              </h3>
              <p className="font-[Archivo] text-ice/50 text-[15px] leading-relaxed">
                {subtitle}
              </p>
            </div>

            <div className="flex items-center gap-4 shrink-0">
              <a
                href="#contact"
                className="font-[Chivo_Mono] text-[13px] uppercase tracking-wider text-ice border border-ice/30 px-8 py-3.5 rounded-[10px] hover:border-ice/60 hover:bg-ice/5 transition-all"
              >
                Contact Us
              </a>
              <a
                href="#demo"
                className="font-[Chivo_Mono] text-[13px] uppercase tracking-wider text-white gradient-primary px-8 py-3.5 rounded-[10px] hover:opacity-90 transition-opacity"
              >
                Request Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

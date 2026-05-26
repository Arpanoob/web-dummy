import { useInView } from "../hooks/useInView";

interface CtaBannerProps {
  variant?: "default" | "compact";
  brand?: "CB7" | "N7";
}

export default function CtaBanner({
  variant = "default",
  brand = "CB7",
}: CtaBannerProps) {
  const { ref, isVisible } = useInView();

  const heading =
    brand === "N7"
      ? "Take the full advantage of going paper-less now."
      : "Take the full advantage of going paper-less now.";

  const subtitle =
    brand === "N7"
      ? "N7 helps your financial institution improve the client experience, automate and optimize procedures, simplify banking operations."
      : "CB7 helps your financial institution improve the client experience, automate and optimize procedures, simplify banking operations.";

  const watermark = brand;

  return (
    <section
      ref={ref}
      className={`relative bg-dark overflow-hidden transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
    >
      <div className="section-divider" />
      <div
        className={`max-w-[1440px] mx-auto px-6 sm:px-10 md:px-20 relative ${variant === "compact" ? "py-12 md:py-16" : "py-20 md:py-32"}`}
      >
        {/* Watermark */}
        <span
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-[Archivo] font-bold text-[200px] md:text-[360px] leading-none text-ice/[0.03] select-none pointer-events-none"
          aria-hidden="true"
        >
          {watermark}
        </span>

        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
          {/* Left side */}
          <div className="max-w-[520px]">
            <h3 className="font-[Archivo] font-medium text-white text-[28px] md:text-[37px] leading-[1.2] tracking-[-0.37px] mb-4">
              {heading}
            </h3>
            <p className="font-[Archivo] text-ice/60 text-base leading-relaxed">
              {subtitle}
            </p>
          </div>

          {/* Right side buttons */}
          <div className="flex items-center gap-4 shrink-0">
            <a
              href="#contact"
              className="font-[Chivo_Mono] text-[13px] uppercase tracking-wider text-ice border border-ice/30 px-7 py-3.5 rounded-[10px] hover:border-ice/60 hover:bg-ice/5 transition-all"
            >
              Contact Us
            </a>
            <a
              href="#demo"
              className="font-[Chivo_Mono] text-[13px] uppercase tracking-wider text-white gradient-primary px-7 py-3.5 rounded-[10px] hover:opacity-90 transition-opacity"
            >
              Request Demo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

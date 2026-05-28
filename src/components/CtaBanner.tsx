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
      className={`relative ${bg === "dark" ? "bg-dark" : "bg-[#E9F4F9]"} overflow-hidden transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
    >
      <div className="section-divider" />
      {/* Background decorative curves + watermark */}
      {bg !== "dark" && (
        <>
          <span
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-[Archivo] font-bold text-[200px] md:text-[360px] leading-none text-[#000D12]/[0.05] select-none pointer-events-none"
            aria-hidden="true"
          >
            {brand}
          </span>
          <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20" viewBox="0 0 1440 700" fill="none" preserveAspectRatio="xMidYMid slice">
            <defs>
              <linearGradient id={`curve-${brand}`} x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#00B4FD" />
                <stop offset="100%" stopColor="#003ACE" />
              </linearGradient>
            </defs>
            <path d="M33.196 306.3C157.377 369.41 237.949 496.69 238.029 639.02H237.969L237.976 639.53C240.81 842.1 65.869 1017.74 -139.259 1012.78H-139.264C-285.886 1011.04 -412.648 926.24 -473.278 798.37C-187.523 860.9 87.389 591.61 33.196 306.3ZM-553.623 39.547C-613.841 272.744 -451.604 522.11 -216.27 562.88L-216.228 562.89H-216.178C-169.085 571.94 -117.259 572.97 -69.566 565.44C-182.753 771.48 -492.941 812.22 -655.307 639.94L-655.318 639.93L-655.331 639.92L-657.436 637.95C-746.094 554.38 -776.69 429.94 -757.045 313.874C-737.3 197.221 -666.814 89.112 -553.623 39.547ZM41.565 10.585C158.756 -10.713 285.41 19.975 371.906 111.948L371.917 111.96L371.929 111.972C459.239 193.341 491.549 313.943 475.56 427.7C459.614 541.15 395.641 647.72 290.372 701.73C309.803 572.33 266.597 438.81 179.924 346.794L177.864 344.622C77.035 234.802 -86.017 185.378 -231.416 220.058C-182.687 104.748 -75.299 31.824 41.565 10.585ZM-508.657 140.319C-509.425 -237.808 -0.871 -374.01 187.751 -46.826C-106.877 -110.223 -384.639 178.85 -312.147 469.21C-431.945 404.45 -508.657 279.598 -508.657 140.319Z" stroke={`url(#curve-${brand})`} />
          </svg>
        </>
      )}
      <div className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-10 md:px-20 py-12 md:py-16">
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

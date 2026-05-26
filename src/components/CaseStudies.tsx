import { useState } from "react";

import { useInView } from "../hooks/useInView";

interface CaseStudy {
  tag: string;
  heading: string;
  brand: string;
  brandIcon: string;
}

const caseStudies: CaseStudy[] = [
  {
    tag: "GETTING STARTED",
    heading: "How we help brand reach out to more people",
    brand: "Zoomerr",
    brandIcon: "Z",
  },
  {
    tag: "DIGITAL TRANSFORMATION",
    heading: "Modernizing core banking for a new generation",
    brand: "Finova",
    brandIcon: "F",
  },
  {
    tag: "OPEN BANKING",
    heading: "Unlocking API-driven growth across markets",
    brand: "Apexo",
    brandIcon: "A",
  },
  {
    tag: "MOBILE FIRST",
    heading: "Building mobile-first banking from the ground up",
    brand: "Neotap",
    brandIcon: "N",
  },
];

function BrandSymbol({ index }: { index: number }) {
  const variants = [
    // Cross / X shape
    <svg key="a" width="48" height="48" viewBox="0 0 48 48" fill="none">
      <path
        d="M12 12l24 24M36 12L12 36"
        stroke="#00b4fd"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>,
    // Plus shape
    <svg key="b" width="48" height="48" viewBox="0 0 48 48" fill="none">
      <path
        d="M24 8v32M8 24h32"
        stroke="#00b4fd"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>,
    // Diamond
    <svg key="c" width="48" height="48" viewBox="0 0 48 48" fill="none">
      <path
        d="M24 6L42 24L24 42L6 24Z"
        stroke="#00b4fd"
        strokeWidth="2.5"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>,
    // Circle with dot
    <svg key="d" width="48" height="48" viewBox="0 0 48 48" fill="none">
      <circle cx="24" cy="24" r="16" stroke="#00b4fd" strokeWidth="2.5" />
      <circle cx="24" cy="24" r="4" fill="#00b4fd" />
    </svg>,
  ];

  return variants[index % variants.length];
}

export default function CaseStudies() {
  const { ref, isVisible } = useInView();
  const [activeIndex, setActiveIndex] = useState(0);

  const totalSlides = caseStudies.length;

  function handlePrev(): void {
    setActiveIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  }

  function handleNext(): void {
    setActiveIndex((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  }

  const activeStudy = caseStudies[activeIndex];

  return (
    <section
      id="case-studies"
      ref={ref}
      className={`relative bg-dark overflow-hidden transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
    >
      <div className="section-divider" />
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 md:px-20 py-16 md:py-24 relative z-10">
        {/* Section heading */}
        <h2 className="font-[Archivo] font-medium text-ice text-[32px] md:text-[48px] leading-[1.1] tracking-[-0.48px] text-center mb-12 md:mb-16">
          Our Case Studies
        </h2>

        {/* Carousel */}
        <div className="relative">
          {/* Peeking cards on edges */}
          <div className="hidden lg:block absolute left-0 top-0 bottom-0 w-[60px] z-0">
            <div className="h-full glass-card rounded-xl opacity-30" />
          </div>
          <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-[60px] z-0">
            <div className="h-full glass-card rounded-xl opacity-30" />
          </div>

          {/* Main card */}
          <div className="relative z-10 mx-auto max-w-[960px]">
            <div className="glass-card rounded-2xl overflow-hidden flex flex-col md:flex-row min-h-[340px]">
              {/* Left: decorative panel */}
              <div className="md:w-1/2 bg-blue-navy/80 p-8 md:p-10 flex items-center justify-center">
                <div className="grid grid-cols-2 gap-6">
                  <BrandSymbol index={0} />
                  <BrandSymbol index={1} />
                  <BrandSymbol index={2} />
                  <BrandSymbol index={3} />
                </div>
              </div>

              {/* Right: content */}
              <div className="md:w-1/2 bg-dark-alt p-8 md:p-10 flex flex-col justify-center">
                <span className="font-[Chivo_Mono] text-blue-primary text-[11px] uppercase tracking-widest mb-4 inline-block">
                  {activeStudy.tag}
                </span>
                <h3 className="font-[Archivo] font-medium text-ice text-[22px] md:text-[26px] leading-[1.25] mb-6">
                  {activeStudy.heading}
                </h3>
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-9 h-9 rounded-lg gradient-primary flex items-center justify-center">
                    <span className="text-white font-bold text-sm">
                      {activeStudy.brandIcon}
                    </span>
                  </div>
                  <span className="font-[Archivo] text-ice text-base font-medium">
                    {activeStudy.brand}
                  </span>
                </div>
                <a
                  href="#"
                  className="font-[Chivo_Mono] text-[13px] uppercase tracking-wider text-ice border border-ice/30 px-6 py-3 rounded-[10px] hover:border-ice/60 hover:bg-ice/5 transition-all self-start"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between mt-8 max-w-[960px] mx-auto">
          {/* Arrows and dots */}
          <div className="flex items-center gap-4">
            <button
              onClick={handlePrev}
              className="w-10 h-10 rounded-full border border-ice/20 flex items-center justify-center text-ice/60 hover:text-ice hover:border-ice/40 transition-all"
              aria-label="Previous slide"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={handleNext}
              className="w-10 h-10 rounded-full border border-ice/20 flex items-center justify-center text-ice/60 hover:text-ice hover:border-ice/40 transition-all"
              aria-label="Next slide"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>

            {/* Dots */}
            <div className="flex items-center gap-2 ml-2">
              {caseStudies.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`rounded-full transition-all ${i === activeIndex ? "w-6 h-2.5 gradient-primary" : "w-2.5 h-2.5 bg-ice/20 hover:bg-ice/40"}`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </div>

          {/* View all */}
          <a
            href="#"
            className="font-[Chivo_Mono] text-[13px] uppercase tracking-wider text-blue-primary hover:text-ice transition-colors flex items-center gap-1.5"
          >
            View All
            <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>
    </section>
  );
}

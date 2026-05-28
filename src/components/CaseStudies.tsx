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

function ArrowLeft() {
  return (
    <svg width="42" height="42" viewBox="0 0 42 42" fill="none">
      <circle cx="21" cy="21" r="20.3196" stroke="#00B4FD" strokeWidth="1.36074" />
      <path d="M31.577 21L12.41 21M21 31.577L13.665 24.242C11.874 22.451 11.874 19.549 13.665 17.758L21 10.423" stroke="#00B4FD" strokeWidth="0.952" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ArrowRight() {
  return (
    <svg width="42" height="42" viewBox="0 0 42 42" fill="none">
      <circle cx="21" cy="21" r="20.3196" stroke="#00B4FD" strokeWidth="1.36074" />
      <path d="M10.423 21L29.59 21M21 31.577L28.335 24.242C30.126 22.451 30.126 19.549 28.335 17.758L21 10.423" stroke="#00B4FD" strokeWidth="0.952" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function CaseStudies() {
  const { ref, isVisible } = useInView();
  const [activeIndex, setActiveIndex] = useState(0);

  const totalSlides = caseStudies.length;

  function handlePrev() {
    setActiveIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  }

  function handleNext() {
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

        {/* Carousel with stacked cards */}
        <div className="relative max-w-[1015px] mx-auto">
          {/* Back card (smallest, most faded) — shifted right and down */}
          <div className="hidden lg:block absolute left-[25%] right-[-5%] top-[7%] bottom-[-2%] bg-[#01141B] rounded-[16px] opacity-30" />
          {/* Middle card — slightly shifted right and down */}
          <div className="hidden lg:block absolute left-[8%] right-[-2%] top-[4%] bottom-[-1%] bg-[#01141B] rounded-[16px] opacity-50" />

          {/* Front card (active) */}
          <div className="relative z-10">
            <div className="bg-[#01141B] rounded-[18px] overflow-hidden flex flex-col md:flex-row min-h-[380px] shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
              {/* Left: icon panel */}
              <div className="md:w-[42%] bg-[#07193C] p-8 md:p-10 flex items-center justify-center min-h-[240px]">
                <div className="grid grid-cols-2 gap-5">
                  {[0, 1, 2, 3].map((i) => (
                    <img
                      key={i}
                      src="/images/icons/fintech-icon.svg"
                      alt=""
                      className="w-16 h-16 opacity-60"
                    />
                  ))}
                </div>
              </div>

              {/* Right: content */}
              <div className="md:w-[58%] p-8 md:p-10 flex flex-col justify-center">
                <span className="font-[Chivo_Mono] text-blue-primary text-[11px] uppercase tracking-widest mb-4 inline-block">
                  {activeStudy.tag}
                </span>
                <h3 className="font-[Archivo] font-medium text-ice text-[22px] md:text-[28px] leading-[1.25] mb-6">
                  {activeStudy.heading}
                </h3>
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-9 h-9 rounded-lg gradient-primary flex items-center justify-center">
                    <span className="text-white font-bold text-sm">{activeStudy.brandIcon}</span>
                  </div>
                  <span className="font-[Archivo] text-ice/60 text-base font-medium">
                    {activeStudy.brand}
                  </span>
                </div>
                <a
                  href="#"
                  className="font-[Chivo_Mono] text-[13px] uppercase tracking-wider text-ice border border-ice/20 px-6 py-3 rounded-[10px] hover:border-ice/40 hover:bg-ice/5 transition-all self-start"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation — arrows + dots centered */}
        <div className="flex items-center justify-center mt-10 gap-5">
          <button
            onClick={handlePrev}
            className="hover:opacity-80 transition-opacity"
            aria-label="Previous slide"
          >
            <ArrowLeft />
          </button>

          {/* Dots */}
          <div className="flex items-center gap-3">
            {caseStudies.map((_, i) => {
              if (i === activeIndex) {
                return (
                  <button
                    key={i}
                    className="w-[38px] h-[12px] rounded-full bg-[#0B4B63] transition-all"
                    aria-label={`Slide ${i + 1} (active)`}
                  />
                );
              }
              return (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className="w-[12px] h-[12px] rounded-full border border-[#0B4B63] hover:bg-[#0B4B63]/30 transition-all"
                  aria-label={`Go to slide ${i + 1}`}
                />
              );
            })}
          </div>

          <button
            onClick={handleNext}
            className="hover:opacity-80 transition-opacity"
            aria-label="Next slide"
          >
            <ArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
}

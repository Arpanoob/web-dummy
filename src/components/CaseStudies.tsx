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

function N7Symbol() {
  return (
    <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
      <path d="M20 20C20 20 30 30 40 20C50 10 60 20 60 20C60 20 50 30 60 40C70 50 60 60 60 60C60 60 50 50 40 60C30 70 20 60 20 60C20 60 30 50 20 40C10 30 20 20 20 20Z" fill="#00b4fd"/>
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
              {/* Left: decorative panel with N7 symbols */}
              <div className="md:w-1/2 bg-blue-navy/80 p-8 md:p-10 flex items-center justify-center">
                <div className="grid grid-cols-2 gap-4">
                  <N7Symbol />
                  <N7Symbol />
                  <N7Symbol />
                  <N7Symbol />
                </div>
              </div>

              {/* Right: content */}
              <div className="md:w-1/2 bg-dark-alt p-8 md:p-10 flex flex-col justify-center">
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
                  className="font-[Chivo_Mono] text-[13px] uppercase tracking-wider text-ice border border-ice/30 px-6 py-3 rounded-full hover:border-ice/60 hover:bg-ice/5 transition-all self-start"
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
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {caseStudies.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`rounded-full transition-all ${i === activeIndex ? "w-6 h-2.5 gradient-primary" : "w-2.5 h-2.5 bg-ice/20 hover:bg-ice/40"}`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="w-10 h-10 rounded-full border border-ice/20 flex items-center justify-center text-ice/60 hover:text-ice hover:border-ice/40 transition-all"
              aria-label="Next slide"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
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

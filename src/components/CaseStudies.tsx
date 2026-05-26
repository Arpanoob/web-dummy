const caseStudies = [
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <rect width="48" height="48" rx="12" fill="#00b4fd" fillOpacity="0.1" />
        <path d="M16 24h16M24 16v16" stroke="#00b4fd" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    title: "Stanbic IBTC",
    description: "Implemented a comprehensive digital banking platform serving over 5 million customers across Africa.",
  },
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <rect width="48" height="48" rx="12" fill="#9280fd" fillOpacity="0.1" />
        <circle cx="24" cy="24" r="8" stroke="#9280fd" strokeWidth="2" />
        <path d="M24 16v-4M24 36v-4M16 24h-4M36 24h-4" stroke="#9280fd" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    title: "Standard Bank",
    description: "Modernized core banking infrastructure with cloud-native architecture and real-time processing.",
  },
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <rect width="48" height="48" rx="12" fill="#00b4fd" fillOpacity="0.1" />
        <path d="M18 30l4-8 4 4 4-10" stroke="#00b4fd" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "GTBank",
    description: "Delivered an award-winning mobile banking experience with AI-powered financial insights.",
  },
];

import { useInView } from "../hooks/useInView";

export default function CaseStudies() {
  const { ref, isVisible } = useInView();
  return (
    <section id="case-studies" ref={ref} className={`relative bg-dark overflow-hidden transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
      <div className="section-divider" />
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 md:px-20 py-16 md:py-24 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          {/* Left */}
          <div className="flex-1">
            <p className="font-[Chivo_Mono] text-blue-primary text-[13px] uppercase tracking-wider mb-4">
              Success Stories
            </p>
            <h2 className="font-[Archivo] font-medium text-ice text-[28px] md:text-[37px] leading-[1.2] tracking-[-0.37px] mb-12">
              Our Case Studies
            </h2>

            <div className="flex flex-col gap-6">
              {caseStudies.map((study) => (
                <div
                  key={study.title}
                  className="glass-card rounded-xl p-6 flex items-start gap-5 hover:border-ice/20 transition-all group cursor-pointer hover:-translate-y-0.5"
                >
                  <div className="shrink-0">{study.icon}</div>
                  <div>
                    <h4 className="font-[Archivo] text-ice text-lg font-medium mb-2 group-hover:text-blue-primary transition-colors">
                      {study.title}
                    </h4>
                    <p className="font-[Archivo] text-ice/60 text-sm leading-relaxed">
                      {study.description}
                    </p>
                  </div>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#586e84"
                    strokeWidth="2"
                    className="shrink-0 mt-1 group-hover:stroke-blue-primary group-hover:translate-x-1 transition-all"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="flex-1 flex flex-col items-center lg:items-end">
            <div className="glass-card rounded-2xl p-8 md:p-10 max-w-[420px]">
              <h3 className="font-[Archivo] font-medium text-ice text-[24px] md:text-[28px] leading-[1.2] mb-4">
                How we help brand reach people
              </h3>
              <p className="font-[Archivo] text-ice/60 text-base leading-relaxed mb-8">
                We partner with leading financial institutions to transform their digital capabilities, improve customer retention, and drive sustainable growth through innovative technology solutions.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <p className="font-[Archivo] font-semibold text-[32px] gradient-text">98%</p>
                  <p className="text-ice/50 text-sm">Client Satisfaction</p>
                </div>
                <div>
                  <p className="font-[Archivo] font-semibold text-[32px] gradient-text">3x</p>
                  <p className="text-ice/50 text-sm">Faster Deployment</p>
                </div>
                <div>
                  <p className="font-[Archivo] font-semibold text-[32px] gradient-text">60%</p>
                  <p className="text-ice/50 text-sm">Cost Reduction</p>
                </div>
                <div>
                  <p className="font-[Archivo] font-semibold text-[32px] gradient-text">24/7</p>
                  <p className="text-ice/50 text-sm">Support Available</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

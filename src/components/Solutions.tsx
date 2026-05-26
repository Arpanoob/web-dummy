import { useInView } from "../hooks/useInView";

const solutions = [
  {
    icon: "/images/icons/core-banking.svg",
    title: "Core Banking CB7",
    description:
      "CB7 helps your financial institution improve the client experience, automate and optimize procedures, simplify banking operations for your employees, improve risk management, increase productivity, and ensure full regulatory compliance.",
    tag: null,
  },
  {
    icon: "/images/icons/digital-banking.svg",
    title: "Digital Banking N7",
    description:
      "N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients",
    tag: null,
  },
  {
    icon: "/images/icons/open-banking.svg",
    title: "Open Banking",
    description:
      "Our API banking helps you to gain actionable insights, enable account aggregation, streamline customer onboarding, KYC, and payment initiation, offer predictive budgeting tools, and introduce enhanced credit scoring.",
    tag: null,
  },
  {
    icon: "/images/icons/loan-origination.svg",
    title: "Loan Origination System",
    description:
      "N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients",
    tag: "NBFC",
  },
  {
    icon: "/images/icons/loan-management.svg",
    title: "Loan Management System",
    description:
      "N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients",
    tag: "NBFC",
  },
];

function LearnMoreLink() {
  return (
    <a href="#" className="group flex flex-col gap-1 items-start">
      <div className="flex items-center gap-1.5">
        <span className="font-[Chivo_Mono] text-[14px] uppercase text-blue-primary">
          learn more
        </span>
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#00b4fd"
          strokeWidth="2"
          className="group-hover:translate-x-1 transition-transform"
        >
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </div>
      <div className="w-8 h-[2px] bg-blue-primary" />
    </a>
  );
}

export default function Solutions() {
  const { ref, isVisible } = useInView();
  return (
    <section id="solutions" ref={ref} className={`relative bg-dark overflow-hidden transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
      <div className="section-divider" />
      {/* Background glow */}
      <div className="absolute right-[-10%] bottom-[-20%] w-[557px] h-[557px] rounded-full bg-blue-primary/5 blur-[120px]" />

      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 md:px-20 py-16 md:py-20 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          {/* Left heading */}
          <div className="flex flex-col gap-12 lg:sticky lg:top-20 lg:self-start shrink-0">
            <h2 className="font-[Archivo] text-ice text-[28px] md:text-[37px] leading-[1.2] tracking-[-0.37px] max-w-[433px]">
              All of our solutions are tailor-made to your needs
            </h2>
            <a
              href="#contact"
              className="border border-ice text-ice font-[Chivo_Mono] text-[15px] uppercase px-[59px] py-[15px] rounded-[10px] hover:bg-ice/10 transition-all w-fit"
            >
              request demo
            </a>
          </div>

          {/* Right grid */}
          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-x-[76px] gap-y-[52px]">
            {solutions.map((s) => (
              <div key={s.title} className="flex flex-col gap-[26px]">
                <div className="flex items-end justify-between">
                  <img src={s.icon} alt="" className="w-[47px] h-[49px]" />
                  {s.tag && (
                    <span className="font-[Chivo_Mono] text-[14px] uppercase text-ice/60">
                      {s.tag}
                    </span>
                  )}
                </div>
                <div className="flex flex-col gap-8">
                  <h3 className="font-[Archivo] text-ice text-[22px] leading-[1.2]">
                    {s.title}
                  </h3>
                  <p className="font-[Archivo] text-ice/70 text-base leading-relaxed max-w-[269px]">
                    {s.description}
                  </p>
                </div>
                <LearnMoreLink />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import { useInView } from "../hooks/useInView";

function BulletItem({ text }: { text: string }) {
  return (
    <li className="flex items-center gap-3">
      <span className="w-5 h-5 rounded-full gradient-primary flex items-center justify-center shrink-0">
        <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
          <path d="M1 4l2.5 3L9 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
      <span className="font-[Archivo] text-gray-700 text-sm leading-relaxed">{text}</span>
    </li>
  );
}

function PhoneMockup({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative mx-auto w-[240px] md:w-[280px]">
      <img src={src} alt={alt} className="w-full h-auto drop-shadow-2xl" />
    </div>
  );
}

export default function DigitalBanking() {
  const { ref, isVisible } = useInView();

  return (
    <section
      id="features"
      ref={ref}
      className={`relative overflow-hidden transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      style={{ background: "white" }}
    >
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 md:px-20 py-16 md:py-24">
        {/* Subsection 1: Digital banking out-of-the-box */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8 items-center mb-24">
          {/* Left text */}
          <div>
            <h2 className="font-[Archivo] font-semibold text-gray-900 text-[28px] md:text-[37px] leading-[1.2] tracking-[-0.37px] mb-4">
              Digital banking out-of-the-box
            </h2>
            <p className="font-[Archivo] text-gray-500 text-[15px] leading-relaxed mb-6">
              N7 helps your financial institution improve the client experience, automate and optimize procedures
            </p>
            <div className="flex items-center gap-5">
              <a
                href="#demo"
                className="font-[Chivo_Mono] text-[13px] uppercase tracking-wider text-white gradient-primary px-6 py-3 rounded-full hover:opacity-90 transition-opacity"
              >
                Request Demo
              </a>
              <a
                href="#learn"
                className="font-[Chivo_Mono] text-[13px] uppercase tracking-wider text-blue-primary hover:text-blue-dark transition-colors flex items-center gap-1.5"
              >
                Learn More
                <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>

          {/* Center phone */}
          <div className="flex justify-center">
            <PhoneMockup src="/images/mockups/phone-balance.png" alt="Balance screen" />
          </div>

          {/* Right features */}
          <div>
            <h3 className="font-[Archivo] font-semibold text-gray-900 text-[20px] md:text-[22px] leading-[1.3] mb-3">
              Fully compliant with regulatory requirement
            </h3>
            <p className="font-[Archivo] text-gray-500 text-sm leading-relaxed mb-5">
              The governance of risk management with regulators is achieved by our risk management framework that is in compliance with the bank's operational risk protocols and procedures.
            </p>
            <ul className="flex flex-col gap-3">
              <BulletItem text="Pre-integrated Security System" />
              <BulletItem text="Fully Compliant With Regulatory Requirement" />
              <BulletItem text="Digitally Connected Core" />
            </ul>
          </div>
        </div>

        {/* Subsection 2: No legacy IT systems */}
        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-24 m">
          {/* Left features */}
          <div className="relative z-10">
            <h3 className="font-[Archivo] font-semibold text-gray-900 text-[24px] md:text-[30px] leading-[1.2] tracking-[-0.3px] mb-3">
              No legacy IT systems
            </h3>
            <p className="font-[Archivo] text-gray-500 text-[15px] leading-relaxed mb-6">
              Our Digital Banking solution and multilayered approach help financial institutions take advantage of digital transformation by ensuring customer trust and regulatory compliance.
            </p>
            <ul className="flex flex-col gap-3">
              <BulletItem text="Adaptive & Intelligent API monetization" />
              <BulletItem text="Ambient User Experience" />
              <BulletItem text="Cloud-native With lower TCO" />
            </ul>
          </div>

          {/* Right phone */}
          <div className="flex justify-center lg:justify-end">
            <PhoneMockup src="/images/mockups/phone-profile.png" alt="Profile screen" />
          </div>
        </div>

        {/* Subsection 3: No traditional branches */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left phone */}
          <div className="flex justify-center lg:justify-start order-2 lg:order-1">
            <PhoneMockup src="/images/mockups/phone-stats.png" alt="Stats screen" />
          </div>

          {/* Right features */}
          <div className="order-1 lg:order-2">
            <h3 className="font-[Archivo] font-semibold text-gray-900 text-[24px] md:text-[30px] leading-[1.2] tracking-[-0.3px] mb-3">
              No traditional branches
            </h3>
            <p className="font-[Archivo] text-gray-500 text-[15px] leading-relaxed mb-6">
              Our Digital Banking out of the box helps automate innovation across digital channels to reduce operational costs for a seamless branchless experience.
            </p>
            <ul className="flex flex-col gap-3">
              <BulletItem text="Branchless & Paperless Banking" />
              <BulletItem text="Digital Transformation Capability" />
              <BulletItem text="Optimized, Adoptable and Scalable" />
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

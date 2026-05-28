import { useInView } from "../hooks/useInView";

const LEFT_CHECKLIST = [
  "Customer-On Boarding",
  "Managing deposits and withdrawals",
  "Transaction management",
  "Interest Calculation",
  "Payments processing (cash, cheques, mandates, NEFT, RTGS etc)",
];

const RIGHT_CHECKLIST = [
  "CRM Activities",
  "Configuring New Banking Products",
  "Loan disbursal and Loan management",
  "Establishing criteria for minimum balances, interest rates, number of withdrawals allowed and so on.",
];

function CheckItem({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-3">
      <div className="w-5 h-5 rounded-full gradient-primary flex items-center justify-center shrink-0 mt-0.5">
        <svg
          width="10"
          height="10"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="3"
        >
          <path d="M5 12l5 5L20 7" />
        </svg>
      </div>
      <span className="font-[Archivo] text-ice/80 text-[14px] leading-snug">
        {text}
      </span>
    </div>
  );
}

export default function Stats() {
  const { ref, isVisible } = useInView();

  return (
    <section
      ref={ref}
      className={`relative bg-dark overflow-hidden transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="section-divider" />

      <div className="w-full pr-6 sm:pr-10 md:pr-[80px] py-16 md:py-24">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
          {/* Left - CKYC Dashboard in laptop — bleeds off left viewport */}
          <div className="lg:w-[50%] shrink-0 -ml-[16%]">
            {/* Laptop screen */}
            <div className="rounded-r-[20px] border border-[#1a3a5c]/60 border-l-0 bg-[#0a1628] p-[10px] pb-[12px] pr-[10px] pl-0 shadow-2xl">
              {/* Screen content */}
              <div className="rounded-r-[12px] overflow-hidden">
                <img
                  src="/images/mockups/ckyc-laptop-screen.png"
                  alt="CKYC Dashboard"
                  className="w-full h-auto"
                />
              </div>
            </div>
            {/* Laptop keyboard base */}
            <div className="relative -mt-[1px]">
              <div className="h-[6px] bg-gradient-to-b from-[#1a3a5c]/40 to-[#0d1f33] rounded-br-lg ml-[-10%] mr-[-5%]" />
              <div className="h-[22px] bg-[#0d1f33] border border-[#1a3a5c]/40 border-t-0 border-l-0 rounded-br-2xl ml-[-10%] mr-[-5%]" />
            </div>
          </div>

          {/* Right content */}
          <div className="flex flex-col gap-6 lg:w-[42%] shrink-0 ml-auto">
            <h2 className="font-[Archivo] font-medium text-ice text-[28px] md:text-[34px] lg:text-[38px] leading-[1.2] tracking-[-0.37px]">
              Run a more efficient, flexible.and digitally connected corebanking
              system
            </h2>

            <p className="font-[Archivo] text-ice/70 text-[15px] font-medium">
              What you will get:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
              <div className="flex flex-col gap-4">
                {LEFT_CHECKLIST.map((item) => (
                  <CheckItem key={item} text={item} />
                ))}
              </div>
              <div className="flex flex-col gap-4">
                {RIGHT_CHECKLIST.map((item) => (
                  <CheckItem key={item} text={item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

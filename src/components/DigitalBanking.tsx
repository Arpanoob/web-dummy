import { useInView } from "../hooks/useInView";

interface BulletItemProps {
  text: string;
}

function BulletItem({ text }: BulletItemProps) {
  return (
    <li className="flex items-center gap-3">
      <span className="w-5 h-5 rounded-full gradient-primary flex items-center justify-center shrink-0">
        <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
          <path
            d="M1 4l2.5 3L9 1"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      <span className="font-[Archivo] text-gray-700 text-sm leading-relaxed">
        {text}
      </span>
    </li>
  );
}

function PhoneMockup({ screen }: { screen: "balance" | "profile" }) {
  return (
    <div className="relative mx-auto w-[260px] md:w-[280px]">
      <div className="w-full aspect-[9/18.5] rounded-[36px] border-[6px] border-gray-900 bg-dark overflow-hidden relative shadow-2xl">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120px] h-[28px] bg-gray-900 rounded-b-2xl z-10" />

        {/* Status bar */}
        <div className="flex items-center justify-between px-6 pt-2.5 pb-1 relative z-20">
          <span className="text-white text-[11px] font-medium">9:41</span>
          <div className="flex items-center gap-1">
            <svg
              width="14"
              height="10"
              viewBox="0 0 14 10"
              fill="white"
              opacity="0.8"
            >
              <rect x="0" y="6" width="3" height="4" rx="0.5" />
              <rect x="4" y="4" width="3" height="6" rx="0.5" />
              <rect x="8" y="1" width="3" height="9" rx="0.5" />
            </svg>
            <svg
              width="18"
              height="10"
              viewBox="0 0 18 10"
              fill="none"
              stroke="white"
              strokeWidth="1"
              opacity="0.8"
            >
              <rect x="0.5" y="0.5" width="16" height="9" rx="2" />
              <rect x="2" y="2" width="10" height="6" rx="1" fill="white" />
            </svg>
          </div>
        </div>

        {/* App content */}
        <div className="px-5 pt-4">
          {screen === "balance" ? (
            <>
              <p className="text-ice/60 text-[10px]">Welcome Back,</p>
              <p className="text-white font-semibold text-[13px] mb-5">
                Barly Vallendito
              </p>

              {/* Balance card */}
              <div className="gradient-primary rounded-xl p-4 mb-5">
                <p className="text-white/70 text-[9px] mb-1">
                  Current Balance
                </p>
                <p className="text-white font-bold text-[22px]">$2,290.00</p>
                <p className="text-white/50 text-[9px] mt-0.5">USD</p>
                <div className="flex gap-4 mt-3">
                  <div>
                    <p className="text-white/60 text-[8px]">Income</p>
                    <p className="text-white text-[11px] font-medium">
                      $1,500.50
                    </p>
                  </div>
                  <div>
                    <p className="text-white/60 text-[8px]">Outcome</p>
                    <p className="text-white text-[11px] font-medium">
                      $350.60
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick actions */}
              <div className="flex justify-between mb-5">
                {["Send", "Request", "Bills", "More"].map((action) => (
                  <div
                    key={action}
                    className="flex flex-col items-center gap-1.5"
                  >
                    <div className="w-10 h-10 rounded-xl bg-ice/10 flex items-center justify-center">
                      <div className="w-4 h-4 rounded-full bg-blue-primary/30" />
                    </div>
                    <span className="text-ice/70 text-[8px]">{action}</span>
                  </div>
                ))}
              </div>

              {/* Transactions */}
              <p className="text-white text-[11px] font-medium mb-3">
                Transactions
              </p>
              {[
                {
                  name: "Netflix",
                  amount: "-$12.99",
                  color: "bg-red-500/20",
                },
                {
                  name: "Salary",
                  amount: "+$4,500",
                  color: "bg-green-500/20",
                },
                { name: "Uber", amount: "-$24.50", color: "bg-ice/10" },
              ].map((tx) => (
                <div
                  key={tx.name}
                  className="flex items-center justify-between py-2 border-b border-ice/5 last:border-0"
                >
                  <div className="flex items-center gap-2">
                    <div
                      className={`w-7 h-7 rounded-lg ${tx.color} flex items-center justify-center`}
                    >
                      <span className="text-[8px] text-ice/60">
                        {tx.name[0]}
                      </span>
                    </div>
                    <span className="text-ice/80 text-[10px]">{tx.name}</span>
                  </div>
                  <span
                    className={`text-[10px] font-medium ${tx.amount.startsWith("+") ? "text-green-400" : "text-ice/60"}`}
                  >
                    {tx.amount}
                  </span>
                </div>
              ))}
            </>
          ) : (
            <>
              {/* Profile screen */}
              <div className="flex flex-col items-center pt-6 mb-5">
                <div className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center mb-3">
                  <span className="text-white font-bold text-lg">TK</span>
                </div>
                <p className="text-white font-semibold text-[14px]">
                  Toni Kross
                </p>
                <p className="text-ice/50 text-[10px]">Premium Member</p>
              </div>

              <div className="space-y-3">
                {[
                  { label: "Savings", value: "$12,450.00" },
                  { label: "Checking", value: "$3,280.50" },
                  { label: "Investment", value: "$28,900.00" },
                ].map((account) => (
                  <div
                    key={account.label}
                    className="flex items-center justify-between bg-ice/5 rounded-lg px-4 py-3"
                  >
                    <span className="text-ice/70 text-[11px]">
                      {account.label}
                    </span>
                    <span className="text-white text-[12px] font-medium">
                      {account.value}
                    </span>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>

        {/* Home indicator */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[100px] h-1 rounded-full bg-white/30" />
      </div>

      {/* Shadow glow */}
      <div className="absolute -inset-8 bg-blue-primary/5 rounded-full blur-3xl -z-10" />
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
      style={{ background: "#f8f9fa" }}
    >
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 md:px-20 py-16 md:py-24">
        {/* Subsection 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8 items-center mb-24">
          {/* Left text */}
          <div>
            <h2 className="font-[Archivo] font-semibold text-gray-900 text-[28px] md:text-[37px] leading-[1.2] tracking-[-0.37px] mb-4">
              Digital banking out-of-the-box
            </h2>
            <p className="font-[Archivo] text-gray-500 text-base leading-relaxed mb-6">
              N7 helps your financial institution improve the client experience,
              automate and optimize procedures, simplify banking operations.
            </p>
            <div className="flex items-center gap-5">
              <a
                href="#demo"
                className="font-[Chivo_Mono] text-[13px] uppercase tracking-wider text-white gradient-primary px-6 py-3 rounded-[10px] hover:opacity-90 transition-opacity"
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
            <PhoneMockup screen="balance" />
          </div>

          {/* Right features */}
          <div>
            <h3 className="font-[Archivo] font-semibold text-gray-900 text-[20px] md:text-[22px] leading-[1.3] mb-3">
              Fully compliant with regulatory requirement
            </h3>
            <p className="font-[Archivo] text-gray-500 text-sm leading-relaxed mb-5">
              Our platform is built from the ground up to meet the strictest
              compliance standards, ensuring your institution stays ahead of
              regulatory demands.
            </p>
            <ul className="flex flex-col gap-3">
              <BulletItem text="Pre-integrated Security System" />
              <BulletItem text="Fully Compliant With Regulatory Requirement" />
              <BulletItem text="Digitally Connected Core" />
            </ul>
          </div>
        </div>

        {/* Subsection 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-24">
          {/* Left features */}
          <div>
            <h3 className="font-[Archivo] font-semibold text-gray-900 text-[24px] md:text-[30px] leading-[1.2] tracking-[-0.3px] mb-3">
              No legacy IT systems
            </h3>
            <p className="font-[Archivo] text-gray-500 text-base leading-relaxed mb-6">
              Break free from outdated infrastructure. Our cloud-native platform
              eliminates technical debt and provides a modern foundation for
              innovation.
            </p>
            <ul className="flex flex-col gap-3">
              <BulletItem text="Adaptive & Intelligent API monetization" />
              <BulletItem text="Ambient User Experience" />
              <BulletItem text="Cloud-native With lower TCO" />
            </ul>
          </div>

          {/* Right phone */}
          <div className="flex justify-center lg:justify-end">
            <PhoneMockup screen="balance" />
          </div>
        </div>

        {/* Subsection 3 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left phone */}
          <div className="flex justify-center lg:justify-start order-2 lg:order-1">
            <PhoneMockup screen="profile" />
          </div>

          {/* Right features */}
          <div className="order-1 lg:order-2">
            <h3 className="font-[Archivo] font-semibold text-gray-900 text-[24px] md:text-[30px] leading-[1.2] tracking-[-0.3px] mb-3">
              No traditional branches
            </h3>
            <p className="font-[Archivo] text-gray-500 text-base leading-relaxed mb-6">
              Deliver a complete banking experience without physical branches.
              Empower customers with digital-first services that work anywhere,
              anytime.
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

const features = [
  {
    title: "Account Management",
    description: "Complete account lifecycle management with real-time balance tracking and multi-currency support.",
  },
  {
    title: "Payment Processing",
    description: "Instant domestic and international payments with smart routing and fraud detection.",
  },
  {
    title: "Card Management",
    description: "Issue, manage, and control virtual and physical cards with configurable spending limits.",
  },
  {
    title: "Financial Analytics",
    description: "AI-powered insights with spending categorization, budgeting tools, and predictive analytics.",
  },
  {
    title: "KYC & Compliance",
    description: "Automated identity verification, risk scoring, and regulatory compliance reporting.",
  },
  {
    title: "API Integration",
    description: "RESTful APIs with webhooks for seamless integration with third-party services and platforms.",
  },
];

import { useInView } from "../hooks/useInView";

export default function DigitalBanking() {
  const { ref, isVisible } = useInView();
  return (
    <section id="features" ref={ref} className={`relative bg-dark overflow-hidden transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
      <div className="section-divider" />
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 md:px-20 py-16 md:py-24 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-16">
          <h2 className="font-[Archivo] font-medium text-ice text-[28px] md:text-[37px] leading-[1.2] tracking-[-0.37px] max-w-[450px]">
            Digital banking out-of-the-box
          </h2>
          <p className="font-[Archivo] text-ice/60 text-base leading-relaxed max-w-[400px]">
            Everything you need to launch a modern digital banking experience, from account opening to advanced financial management.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-16">
          {/* Features grid */}
          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, i) => (
              <div
                key={feature.title}
                className="glass-card rounded-xl p-6 hover:border-ice/20 transition-all group hover:-translate-y-1"
              >
                <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <span className="text-white font-[Chivo_Mono] text-sm font-medium">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h4 className="font-[Archivo] text-ice text-lg font-medium mb-2">
                  {feature.title}
                </h4>
                <p className="font-[Archivo] text-ice/60 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* Phone mockups */}
          <div className="relative w-full lg:w-[350px] flex items-center justify-center">
            <div className="relative">
              {/* Phone frame */}
              <div className="w-[240px] h-[480px] rounded-[40px] border-2 border-ice/20 bg-dark-alt overflow-hidden relative">
                {/* Status bar */}
                <div className="flex items-center justify-between px-6 pt-3 pb-1">
                  <span className="text-white text-[11px] font-medium">9:41</span>
                  <div className="flex items-center gap-1">
                    <svg width="14" height="10" viewBox="0 0 14 10" fill="white" opacity="0.8">
                      <rect x="0" y="6" width="3" height="4" rx="0.5" />
                      <rect x="4" y="4" width="3" height="6" rx="0.5" />
                      <rect x="8" y="1" width="3" height="9" rx="0.5" />
                    </svg>
                    <svg width="18" height="10" viewBox="0 0 18 10" fill="none" stroke="white" strokeWidth="1" opacity="0.8">
                      <rect x="0.5" y="0.5" width="16" height="9" rx="2" />
                      <rect x="2" y="2" width="10" height="6" rx="1" fill="white" />
                    </svg>
                  </div>
                </div>
                {/* App content */}
                <div className="px-5 pt-4">
                  <p className="text-ice/60 text-[10px]">Welcome Back,</p>
                  <p className="text-white font-semibold text-[13px] mb-5">Barly Vallendito</p>

                  {/* Balance card */}
                  <div className="gradient-primary rounded-xl p-4 mb-5">
                    <p className="text-white/70 text-[9px] mb-1">Current Balance</p>
                    <p className="text-white font-bold text-[20px]">$2,850.75</p>
                    <div className="flex gap-4 mt-3">
                      <div>
                        <p className="text-white/60 text-[8px]">Income</p>
                        <p className="text-white text-[11px] font-medium">$1,500.50</p>
                      </div>
                      <div>
                        <p className="text-white/60 text-[8px]">Outcome</p>
                        <p className="text-white text-[11px] font-medium">$350.60</p>
                      </div>
                    </div>
                  </div>

                  {/* Quick actions */}
                  <div className="flex justify-between mb-5">
                    {["Send", "Request", "Bills", "More"].map((action) => (
                      <div key={action} className="flex flex-col items-center gap-1.5">
                        <div className="w-10 h-10 rounded-xl bg-ice/10 flex items-center justify-center">
                          <div className="w-4 h-4 rounded-full bg-blue-primary/30" />
                        </div>
                        <span className="text-ice/70 text-[8px]">{action}</span>
                      </div>
                    ))}
                  </div>

                  {/* Transactions */}
                  <p className="text-white text-[11px] font-medium mb-3">Transactions</p>
                  {[
                    { name: "Netflix", amount: "-$12.99", color: "bg-red-500/20" },
                    { name: "Salary", amount: "+$4,500", color: "bg-green-500/20" },
                    { name: "Uber", amount: "-$24.50", color: "bg-ice/10" },
                  ].map((tx) => (
                    <div key={tx.name} className="flex items-center justify-between py-2 border-b border-ice/5 last:border-0">
                      <div className="flex items-center gap-2">
                        <div className={`w-7 h-7 rounded-lg ${tx.color} flex items-center justify-center`}>
                          <span className="text-[8px] text-ice/60">{tx.name[0]}</span>
                        </div>
                        <span className="text-ice/80 text-[10px]">{tx.name}</span>
                      </div>
                      <span className={`text-[10px] font-medium ${tx.amount.startsWith("+") ? "text-green-400" : "text-ice/60"}`}>
                        {tx.amount}
                      </span>
                    </div>
                  ))}
                </div>
                {/* Home indicator */}
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[100px] h-1 rounded-full bg-white/30" />
              </div>

              {/* Shadow glow */}
              <div className="absolute -inset-8 bg-blue-primary/5 rounded-full blur-3xl -z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

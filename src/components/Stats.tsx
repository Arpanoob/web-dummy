import { useInView } from "../hooks/useInView";

export default function Stats() {
  const { ref, isVisible } = useInView();
  return (
    <section ref={ref} className={`relative bg-dark overflow-hidden transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
      <div className="section-divider" />
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 md:px-20 py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {[
            { value: "150+", label: "Financial Institutions" },
            { value: "40M+", label: "End Users Served" },
            { value: "99.9%", label: "Uptime Guarantee" },
            { value: "50+", label: "Countries Worldwide" },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col gap-3 items-center md:items-start text-center md:text-left">
              <span className="font-[Archivo] font-semibold text-[36px] md:text-[48px] gradient-text leading-tight">
                {stat.value}
              </span>
              <span className="font-[Archivo] text-ice/60 text-sm md:text-base">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* Dashboard preview cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Analytics Card */}
          <div className="glass-card rounded-2xl p-5 hover:border-ice/20 transition-colors">
            <div className="flex items-center justify-between mb-4">
              <span className="text-ice/60 text-sm">Analytics Overview</span>
              <span className="text-blue-primary text-xs font-[Chivo_Mono]">LIVE</span>
            </div>
            <div className="flex items-end gap-1.5 h-24">
              {[30, 50, 40, 70, 55, 85, 65, 90, 75, 95, 80, 60].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-t transition-all hover:opacity-100"
                  style={{
                    height: `${h}%`,
                    background: i >= 8
                      ? "linear-gradient(180deg, #00b4fd, #003ace)"
                      : "rgba(233,244,249,0.1)",
                  }}
                />
              ))}
            </div>
            <div className="flex justify-between mt-3 text-ice/40 text-[10px] font-[Chivo_Mono]">
              <span>JAN</span><span>FEB</span><span>MAR</span><span>APR</span>
              <span>MAY</span><span>JUN</span><span>JUL</span><span>AUG</span>
              <span>SEP</span><span>OCT</span><span>NOV</span><span>DEC</span>
            </div>
          </div>

          {/* Pie Chart Card */}
          <div className="glass-card rounded-2xl p-5 hover:border-ice/20 transition-colors">
            <div className="flex items-center justify-between mb-4">
              <span className="text-ice/60 text-sm">Revenue Split</span>
            </div>
            <div className="flex items-center justify-center h-24">
              <svg viewBox="0 0 80 80" className="w-20 h-20">
                <circle cx="40" cy="40" r="32" fill="none" stroke="#003ace" strokeWidth="8" />
                <circle
                  cx="40" cy="40" r="32" fill="none" stroke="#00b4fd" strokeWidth="8"
                  strokeDasharray="80 201" transform="rotate(-90 40 40)" strokeLinecap="round"
                />
                <circle
                  cx="40" cy="40" r="32" fill="none" stroke="#9280fd" strokeWidth="8"
                  strokeDasharray="50 201" strokeDashoffset="-80" transform="rotate(-90 40 40)" strokeLinecap="round"
                />
              </svg>
            </div>
            <div className="flex gap-4 mt-3 justify-center">
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-blue-primary" />
                <span className="text-ice/60 text-[10px]">Banking</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-purple" />
                <span className="text-ice/60 text-[10px]">Lending</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-blue-dark" />
                <span className="text-ice/60 text-[10px]">Payments</span>
              </div>
            </div>
          </div>

          {/* Table Card */}
          <div className="glass-card rounded-2xl p-5 hover:border-ice/20 transition-colors">
            <div className="flex items-center justify-between mb-4">
              <span className="text-ice/60 text-sm">Recent Transactions</span>
            </div>
            <div className="flex flex-col gap-3">
              {[
                { name: "Wire Transfer", amount: "+$12,500", type: "in" },
                { name: "Card Payment", amount: "-$2,340", type: "out" },
                { name: "Direct Deposit", amount: "+$8,900", type: "in" },
                { name: "Subscription", amount: "-$99", type: "out" },
              ].map((tx) => (
                <div key={tx.name} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className={`w-6 h-6 rounded-md flex items-center justify-center ${tx.type === "in" ? "bg-blue-navy" : "bg-purple/30"}`}>
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                        {tx.type === "in"
                          ? <path d="M17 17L7 7M7 7v10M7 7h10" />
                          : <path d="M7 7l10 10M17 17V7M17 17H7" />
                        }
                      </svg>
                    </div>
                    <span className="text-ice/80 text-xs">{tx.name}</span>
                  </div>
                  <span className={`text-xs font-medium ${tx.type === "in" ? "text-green-400" : "text-ice/60"}`}>
                    {tx.amount}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

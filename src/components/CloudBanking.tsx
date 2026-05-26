import { useInView } from "../hooks/useInView";

export default function CloudBanking() {
  const { ref, isVisible } = useInView();
  return (
    <section id="platform" ref={ref} className={`relative bg-dark overflow-hidden transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
      <div className="section-divider" />
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 md:px-20 py-16 md:py-20 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
          {/* Left content */}
          <div className="flex flex-col gap-8 max-w-[500px] shrink-0">
            <h2 className="font-[Archivo] font-medium text-ice text-[28px] md:text-[37px] leading-[1.2] tracking-[-0.37px]">
              A complete cloud-based core banking
            </h2>
            <p className="font-[Archivo] text-ice/70 text-base leading-relaxed">
              Our platform provides a comprehensive suite of banking modules
              designed to handle everything from accounts and transactions to
              compliance and reporting. Built on modern cloud infrastructure for
              scalability and reliability.
            </p>
            <div className="flex flex-col gap-4 mt-4">
              {[
                "Real-time transaction processing",
                "Multi-currency support",
                "Regulatory compliance built-in",
                "API-first architecture",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full gradient-primary flex items-center justify-center shrink-0">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                      <path d="M5 12l5 5L20 7" />
                    </svg>
                  </div>
                  <span className="font-[Archivo] text-ice/80 text-[15px]">{item}</span>
                </div>
              ))}
            </div>
            <a
              href="#"
              className="group flex items-center gap-1.5 mt-4"
            >
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
            </a>
          </div>

          {/* Right dashboard mockup */}
          <div className="flex-1 relative">
            <div className="glass-card rounded-2xl p-6 md:p-8">
              {/* Dashboard header */}
              <div className="flex items-center justify-between mb-6">
                <h4 className="font-[Archivo] text-ice text-lg font-medium">Dashboard</h4>
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/60" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                  <div className="w-3 h-3 rounded-full bg-green-500/60" />
                </div>
              </div>
              {/* Chart area */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="glass-card rounded-xl p-4">
                  <p className="text-ice/50 text-xs mb-1">Total Revenue</p>
                  <p className="text-ice font-semibold text-xl">$128.5K</p>
                  <div className="mt-3 h-16 flex items-end gap-1">
                    {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
                      <div key={i} className="flex-1 gradient-primary rounded-t opacity-60" style={{ height: `${h}%` }} />
                    ))}
                  </div>
                </div>
                <div className="glass-card rounded-xl p-4">
                  <p className="text-ice/50 text-xs mb-1">Active Users</p>
                  <p className="text-ice font-semibold text-xl">24.8K</p>
                  <div className="mt-3 h-16 relative">
                    <svg viewBox="0 0 100 40" className="w-full h-full">
                      <path d="M0 35 Q25 10 50 20 T100 5" fill="none" stroke="#00b4fd" strokeWidth="2" />
                      <path d="M0 35 Q25 10 50 20 T100 5 V40 H0Z" fill="url(#grad)" opacity="0.2" />
                      <defs>
                        <linearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#00b4fd" />
                          <stop offset="100%" stopColor="transparent" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                </div>
                <div className="glass-card rounded-xl p-4">
                  <p className="text-ice/50 text-xs mb-1">Transactions</p>
                  <p className="text-ice font-semibold text-xl">89.2K</p>
                  <div className="mt-3 flex items-center justify-center h-16">
                    <svg viewBox="0 0 60 60" className="w-14 h-14">
                      <circle cx="30" cy="30" r="24" fill="none" stroke="#003ace" strokeWidth="6" opacity="0.3" />
                      <circle
                        cx="30" cy="30" r="24"
                        fill="none" stroke="#00b4fd" strokeWidth="6"
                        strokeDasharray="110 151"
                        strokeLinecap="round"
                        transform="rotate(-90 30 30)"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              {/* Table area */}
              <div className="glass-card rounded-xl p-4">
                <div className="grid grid-cols-4 gap-4 text-xs text-ice/50 border-b border-ice/10 pb-2 mb-2">
                  <span>Transaction ID</span>
                  <span>Customer</span>
                  <span>Amount</span>
                  <span>Status</span>
                </div>
                {[
                  { id: "TX-001", name: "John Smith", amount: "$2,500.00", status: "Completed" },
                  { id: "TX-002", name: "Sarah Chen", amount: "$1,890.50", status: "Pending" },
                  { id: "TX-003", name: "Mike Johnson", amount: "$4,200.00", status: "Completed" },
                ].map((row) => (
                  <div key={row.id} className="grid grid-cols-4 gap-4 text-sm text-ice/80 py-2 border-b border-ice/5 last:border-0">
                    <span className="font-mono text-blue-primary text-xs">{row.id}</span>
                    <span>{row.name}</span>
                    <span>{row.amount}</span>
                    <span className={`text-xs ${row.status === "Completed" ? "text-green-400" : "text-yellow-400"}`}>{row.status}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

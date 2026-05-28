export default function Hero() {
  return (
    <section className="relative h-screen bg-dark overflow-hidden flex flex-col">
      {/* Background glow - right side behind image */}
      <div className="absolute right-[5%] top-[20%] w-[600px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(0,180,253,0.12)_0%,transparent_70%)] blur-2xl" />

      <div className="max-w-[1440px] w-full mx-auto px-6 sm:px-10 md:px-[80px] pt-20 sm:pt-24 md:pt-24 pb-6 relative z-10 flex flex-col flex-1">
        {/* Main hero content */}
        <div className="flex flex-col lg:flex-row items-center justify-between flex-1 gap-8">
          {/* Left content */}
          <div className="flex flex-col justify-center gap-10 lg:gap-[48px] flex-1 min-w-0">
            <div className="flex flex-col gap-5">
              <h1 className="font-[Archivo] font-medium text-ice text-[36px] sm:text-[48px] md:text-[56px] lg:text-[64px] xl:text-[72px] leading-[1.1] tracking-[-0.5px]">
                The new foundation{"\n"}of modern banking
              </h1>
              <p className="font-[Archivo] text-ice/70 text-[15px] leading-[1.6] max-w-[380px]">
                We drive innovation and growth, provide seamless customer experience and operational excellence
              </p>
            </div>

            <div className="flex flex-wrap gap-4 sm:gap-5">
              <a
                href="#contact"
                className="gradient-primary text-white font-[Chivo_Mono] text-[13px] sm:text-[15px] uppercase px-10 sm:px-[56px] py-[16px] sm:py-[18px] rounded-full hover:opacity-90 transition-all hover:scale-[1.02] active:scale-[0.98] animate-pulse-glow tracking-wider"
              >
                Request Demo
              </a>
              <a
                href="#contact"
                className="border border-ice/40 text-ice font-[Chivo_Mono] text-[13px] sm:text-[15px] uppercase px-10 sm:px-[56px] py-[16px] sm:py-[18px] rounded-full hover:bg-ice/10 transition-all hover:scale-[1.02] active:scale-[0.98] tracking-wider"
              >
                Contact Us
              </a>
            </div>
          </div>

          {/* Right visual - hero image with floating cards */}
          <div className="relative w-full lg:w-[45%] h-[320px] md:h-[420px] lg:h-[440px] flex-shrink-0">
            {/* Main image - centered, fully visible */}
            <div className="absolute left-[8%] top-[8%] w-[55%] md:w-[58%] h-[85%] rounded-[24px] overflow-hidden shadow-2xl">
              <img
                src="/images/hero-person.jpg"
                alt="Person using mobile banking"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating card - Account balance (top-right, overlapping image) */}
            <div className="absolute right-0 xl:-right-4 top-[2%] glass-card-light rounded-2xl p-4 md:p-5 w-[230px] md:w-[270px] shadow-xl z-10 animate-float">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden">
                    <img src="/images/avatar.jpg" alt="" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p className="text-[#0d0d0c] text-[11px] font-bold font-[Inter]">Toni Kross</p>
                    <p className="text-[#0d0d0c]/50 text-[8px] font-[Inter]">Good Morning</p>
                  </div>
                </div>
                {/* Settings icon */}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="1.5" className="opacity-50">
                  <circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.32 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>
                </svg>
              </div>
              <div className="border-t border-gray-200 pt-2.5 mb-3">
                <p className="text-[#1d1d1d]/50 text-[9px] mb-0.5">Total balance</p>
                <p className="text-[#081e69] font-bold text-[18px] md:text-[20px]">$42,295.00 USD</p>
              </div>
              <div className="flex justify-between px-1">
                <div className="flex flex-col items-center gap-1.5">
                  <div className="w-9 h-9 rounded-xl bg-gray-100 flex items-center justify-center">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#081e69" strokeWidth="1.8">
                      <path d="M17 1l4 4-4 4"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/><path d="M7 23l-4-4 4-4"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/>
                    </svg>
                  </div>
                  <span className="text-[7px] text-[#0d0d0c]/70 font-medium">Fund Transfer</span>
                </div>
                <div className="flex flex-col items-center gap-1.5">
                  <div className="w-9 h-9 rounded-xl bg-gray-100 flex items-center justify-center">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#081e69" strokeWidth="1.8">
                      <circle cx="12" cy="12" r="10"/><path d="M12 8v8"/><path d="M8 12h8"/>
                    </svg>
                  </div>
                  <span className="text-[7px] text-[#0d0d0c]/70 font-medium">Add Money</span>
                </div>
                <div className="flex flex-col items-center gap-1.5">
                  <div className="w-9 h-9 rounded-xl bg-gray-100 flex items-center justify-center">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#081e69" strokeWidth="1.8">
                      <rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>
                    </svg>
                  </div>
                  <span className="text-[7px] text-[#0d0d0c]/70 font-medium">More</span>
                </div>
              </div>
            </div>

            {/* Floating card - Recent activity (bottom-left, overlapping image) */}
            <div className="hidden md:block absolute left-[2%] lg:-left-2 bottom-[2%] glass-card-light rounded-2xl p-4 w-[270px] md:w-[290px] shadow-lg z-10">
              <p className="text-[#0f0f0f] font-bold text-[13px] mb-2.5">Recent activity</p>
              <div className="flex gap-2 mb-3">
                <span className="text-[8px] px-2.5 py-1 rounded-full bg-gray-100 text-[#0d0d0c]">This Day</span>
                <span className="text-[8px] px-2.5 py-1 rounded-full bg-[#081e69] text-white">This Week</span>
                <span className="text-[8px] px-2.5 py-1 rounded-full bg-gray-100 text-[#0d0d0c]">This Month</span>
                <span className="text-[8px] px-2.5 py-1 rounded-full bg-gray-100 text-[#0d0d0c]">6 Month</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-[#9280fd] flex items-center justify-center">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M7 17l10-10M17 17V7H7"/></svg>
                  </div>
                  <div>
                    <p className="text-[#0b0b0b] text-[10px] font-bold">To Jin <span className="font-normal opacity-60">· Work</span></p>
                    <p className="text-[#0b0b0b]/60 text-[8px]">12 jun 2022</p>
                  </div>
                </div>
                <span className="text-[#0b0b0b] text-[10px] font-bold">-$59</span>
              </div>
            </div>
          </div>
        </div>

        {/* Trusted by — pinned to bottom */}
        <div className="mt-auto pt-4 pb-0">
          <p className="font-[Archivo] font-medium text-ice/60 text-[15px] mb-3">
            Trusted By:
          </p>
          <div className="flex flex-wrap items-center gap-6 md:gap-8">
            {[
              { name: "SHELLS", icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="#586e84" strokeWidth="1.5"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10" stroke="#586e84" strokeWidth="1.5"/><path d="M2 12h20" stroke="#586e84" strokeWidth="1.5"/><path d="M12 2c2.5 2.5 4 6 4 10s-1.5 7.5-4 10" stroke="#586e84" strokeWidth="1.5"/></svg> },
              { name: "SmartFinder", icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M12 2L2 7l10 5 10-5-10-5z" stroke="#586e84" strokeWidth="1.5" strokeLinejoin="round"/><path d="M2 17l10 5 10-5" stroke="#586e84" strokeWidth="1.5" strokeLinejoin="round"/><path d="M2 12l10 5 10-5" stroke="#586e84" strokeWidth="1.5" strokeLinejoin="round"/></svg> },
              { name: "Zoomerr", icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><circle cx="11" cy="11" r="8" stroke="#586e84" strokeWidth="1.5"/><path d="M21 21l-4.35-4.35" stroke="#586e84" strokeWidth="1.5" strokeLinecap="round"/></svg> },
              { name: "ArtVenue", icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M2 20h20L12 4 2 20z" stroke="#586e84" strokeWidth="1.5" strokeLinejoin="round"/><path d="M8 20l4-8 4 8" stroke="#586e84" strokeWidth="1.5" strokeLinejoin="round"/></svg> },
              { name: "kontrastr", icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="#586e84" strokeWidth="1.5"/><path d="M12 2v20" stroke="#586e84" strokeWidth="1.5"/><path d="M12 2a10 10 0 0 1 0 20" fill="#586e84" fillOpacity="0.3"/></svg> },
              { name: "WAVESMARATHON", icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M2 12c2-3 4-6 6-3s4 3 6 0 4-3 6-3" stroke="#586e84" strokeWidth="1.5" strokeLinecap="round"/><path d="M2 17c2-3 4-6 6-3s4 3 6 0 4-3 6-3" stroke="#586e84" strokeWidth="1.5" strokeLinecap="round"/></svg> },
            ].map((brand) => (
              <div key={brand.name} className="flex items-center gap-2">
                {brand.icon}
                <span className="font-['Roboto',sans-serif] font-bold text-muted/80 text-[13px] tracking-wide">
                  {brand.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-dark overflow-hidden">
      {/* Background glow */}
      <div className="absolute right-0 top-[15%] w-[500px] h-[500px] hero-glow rounded-full blur-3xl opacity-40" />

      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 md:px-20 pt-24 sm:pt-32 md:pt-44 pb-16 relative z-10">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-12">
          {/* Left content */}
          <div className="flex flex-col gap-13 max-w-[608px]">
            <div className="flex flex-col gap-4">
              <h1 className="font-[Archivo] font-medium text-ice text-[32px] sm:text-[42px] md:text-[56px] lg:text-[67px] leading-[1.15] tracking-[-0.67px]">
                The new foundation of modern banking
              </h1>
              <p className="font-[Archivo] text-ice/80 text-base leading-relaxed max-w-[356px]">
                We drive innovation and growth, provide seamless customer experience and operational excellence
              </p>
            </div>

            <div className="flex flex-wrap gap-4 sm:gap-5">
              <a
                href="#contact"
                className="gradient-primary text-white font-[Chivo_Mono] text-[13px] sm:text-[15px] uppercase px-8 sm:px-[51px] py-[14px] sm:py-[15px] rounded-[10px] hover:opacity-90 transition-all hover:scale-[1.02] active:scale-[0.98] animate-pulse-glow"
              >
                Request Demo
              </a>
              <a
                href="#contact"
                className="border border-ice text-ice font-[Chivo_Mono] text-[13px] sm:text-[15px] uppercase px-8 sm:px-[59px] py-[14px] sm:py-[15px] rounded-[10px] hover:bg-ice/10 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                Contact Us
              </a>
            </div>
          </div>

          {/* Right visual - hero image with floating cards */}
          <div className="relative w-full lg:w-[562px] h-[300px] md:h-[380px] lg:h-[301px] self-center animate-float">
            {/* Main image */}
            <div className="absolute right-0 md:right-10 top-0 w-[280px] md:w-[363px] h-[230px] md:h-[301px] rounded-[31px] overflow-hidden shadow-2xl">
              <img
                src="/images/hero-person.jpg"
                alt="Person using mobile banking"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating card - Account balance */}
            <div className="absolute -left-4 md:left-0 top-1/2 -translate-y-1/2 glass-card-light rounded-xl p-4 w-[200px] md:w-[220px] shadow-xl">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-7 h-7 rounded-lg bg-gray-200 overflow-hidden">
                  <img src="/images/avatar.jpg" alt="" className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="text-[#0d0d0c] text-[10px] font-bold font-[Inter]">Toni Kross</p>
                  <p className="text-[#0d0d0c]/60 text-[7px] font-[Inter]">Good Morning</p>
                </div>
              </div>
              <div className="border-t border-gray-200 pt-2">
                <p className="text-[#1d1d1d]/60 text-[8px]">Total balance</p>
                <p className="text-[#081e69] font-bold text-[16px]">$42,295.00 USD</p>
              </div>
              <div className="flex justify-between mt-3">
                <div className="flex flex-col items-center gap-1">
                  <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#081e69" strokeWidth="2"><path d="M12 2v20M2 12h20"/></svg>
                  </div>
                  <span className="text-[7px] text-[#0d0d0c] font-bold">Fund Transfer</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#081e69" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v12"/></svg>
                  </div>
                  <span className="text-[7px] text-[#0d0d0c] font-bold">Add Money</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#081e69" strokeWidth="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg>
                  </div>
                  <span className="text-[7px] text-[#0d0d0c] font-bold">More</span>
                </div>
              </div>
            </div>

            {/* Floating card - Recent activity */}
            <div className="hidden md:block absolute left-8 bottom-0 glass-card-light rounded-xl p-3 w-[250px] shadow-lg">
              <p className="text-[#0f0f0f] font-bold text-[11px] mb-2">Recent activity</p>
              <div className="flex gap-1.5 mb-3">
                <span className="text-[7px] px-2 py-0.5 rounded-full bg-gray-100 text-[#0d0d0c]">This Day</span>
                <span className="text-[7px] px-2 py-0.5 rounded-full bg-[#081e69] text-white">This Week</span>
                <span className="text-[7px] px-2 py-0.5 rounded-full bg-gray-100 text-[#0d0d0c]">This Month</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-lg bg-[#9280fd] flex items-center justify-center">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M7 17l10-10M17 17V7H7"/></svg>
                  </div>
                  <div>
                    <p className="text-[#0b0b0b] text-[9px] font-bold">To Jin <span className="font-normal opacity-60">· Work</span></p>
                    <p className="text-[#0b0b0b]/80 text-[7px]">12 jun 2022</p>
                  </div>
                </div>
                <span className="text-[#0b0b0b] text-[9px] font-bold">-$59</span>
              </div>
            </div>
          </div>
        </div>

        {/* Trusted by */}
        <div className="mt-20 md:mt-28">
          <p className="font-[Archivo] font-medium text-ice/70 text-base capitalize mb-4">
            trusted by:
          </p>
          <div className="flex flex-wrap items-center gap-6 md:gap-8 opacity-90">
            {["SHELLS", "SmartFinder", "Zoomerr", "ArtVenue", "kontrastr", "WAVES MARATHON"].map((name) => (
              <span
                key={name}
                className="font-['Roboto',sans-serif] font-bold text-muted text-sm tracking-wide"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

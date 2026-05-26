export default function Footer() {
  return (
    <footer id="contact" className="relative bg-dark overflow-hidden">
      <div className="section-divider" />
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 md:px-20 pt-16 md:pt-24 pb-8">
        {/* Big N7 branding */}
        <div className="mb-16">
          <svg viewBox="0 0 200 120" className="w-[120px] md:w-[180px] h-auto mb-8">
            <text x="0" y="100" className="font-[Archivo]" fill="#E9F4F9" fontSize="120" fontWeight="700">
              N7
            </text>
          </svg>
          <p className="font-[Archivo] text-ice/60 text-base leading-relaxed max-w-[400px]">
            Take the full advantage of going paper-less now. Transform your banking experience with our cutting-edge digital solutions.
          </p>
        </div>

        {/* Footer links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
          <div>
            <h5 className="font-[Archivo] text-ice font-medium text-sm mb-4">Products</h5>
            <ul className="flex flex-col gap-3">
              {["Core Banking", "Digital Banking", "Open Banking", "Loan Origination", "Loan Management"].map((item) => (
                <li key={item}>
                  <a href="#" className="font-[Archivo] text-ice/50 text-sm hover:text-ice transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h5 className="font-[Archivo] text-ice font-medium text-sm mb-4">Company</h5>
            <ul className="flex flex-col gap-3">
              {["About Us", "Careers", "Press", "Contact", "Partners"].map((item) => (
                <li key={item}>
                  <a href="#" className="font-[Archivo] text-ice/50 text-sm hover:text-ice transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h5 className="font-[Archivo] text-ice font-medium text-sm mb-4">Resources</h5>
            <ul className="flex flex-col gap-3">
              {["Documentation", "API Reference", "Blog", "Case Studies", "Webinars"].map((item) => (
                <li key={item}>
                  <a href="#" className="font-[Archivo] text-ice/50 text-sm hover:text-ice transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h5 className="font-[Archivo] text-ice font-medium text-sm mb-4">Legal</h5>
            <ul className="flex flex-col gap-3">
              {["Privacy Policy", "Terms of Service", "Cookie Policy", "Security", "Compliance"].map((item) => (
                <li key={item}>
                  <a href="#" className="font-[Archivo] text-ice/50 text-sm hover:text-ice transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="section-divider mb-6" />
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pb-6">
          <p className="font-[Archivo] text-ice/40 text-sm">
            &copy; 2026 N7 Banking Platform. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {/* Social icons */}
            {[
              <svg key="tw" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" /></svg>,
              <svg key="li" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 6a2 2 0 100-4 2 2 0 000 4z" /></svg>,
              <svg key="gh" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" /></svg>,
            ].map((icon, i) => (
              <a key={i} href="#" className="text-ice/40 hover:text-ice transition-colors">
                {icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

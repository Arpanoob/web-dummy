import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { label: "Solutions", href: "#solutions", hasDropdown: true },
    { label: "Resources", href: "#platform", hasDropdown: true },
    { label: "About Us", href: "#features", hasDropdown: false },
  ];

  return (
    <nav className="absolute top-0 left-0 w-full z-50 pt-4 px-6 sm:px-10 md:px-12">
      <div className="max-w-[1080px] mx-auto flex items-center justify-between px-6 sm:px-8 py-3.5 rounded-2xl border border-ice/10 bg-dark-alt/60 backdrop-blur-md">
        {/* Logo */}
        <a href="#" className="flex items-center gap-1.5">
          <span className="font-[Archivo] font-bold text-ice text-[22px] leading-none tracking-tight">N7</span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-7">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-[Chivo_Mono] text-[12px] uppercase tracking-wider text-ice/70 hover:text-ice transition-colors flex items-center gap-1"
            >
              {link.label}
              {link.hasDropdown && (
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none" className="mt-0.5">
                  <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              )}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="hidden md:block font-[Chivo_Mono] text-[12px] uppercase tracking-wider text-ice border border-ice/40 px-5 py-2 rounded-lg hover:bg-ice/10 transition-all"
        >
          Request Demo
        </a>

        {/* Mobile menu button */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-ice transition-all duration-300 ${open ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-ice transition-all duration-300 ${open ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-ice transition-all duration-300 ${open ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden max-w-[1080px] mx-auto bg-dark-alt/95 backdrop-blur-lg border border-ice/10 border-t-0 rounded-b-2xl px-6 flex flex-col gap-4 overflow-hidden transition-all duration-300 ${
          open ? "max-h-[300px] py-6" : "max-h-0 py-0"
        }`}
      >
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="font-[Chivo_Mono] text-sm uppercase text-ice/70"
            onClick={() => setOpen(false)}
          >
            {link.label}
          </a>
        ))}
        <a
          href="#contact"
          className="font-[Chivo_Mono] text-sm uppercase text-ice border border-ice/40 px-6 py-3 rounded-lg text-center"
          onClick={() => setOpen(false)}
        >
          Request Demo
        </a>
      </div>
    </nav>
  );
}

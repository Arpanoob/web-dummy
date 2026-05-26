import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { label: "Solutions", href: "#solutions" },
    { label: "Resources", href: "#platform" },
    { label: "About Us", href: "#features" },
  ];

  return (
    <nav className="absolute top-0 left-0 w-full z-50">
      <div className="max-w-[1440px] mx-auto flex items-center justify-between px-6 sm:px-10 md:px-20 py-5 sm:py-6">
        {/* Logo */}
        <a href="#" className="flex items-center gap-1.5">
          <span className="font-[Archivo] font-bold text-ice text-[26px] leading-none tracking-tight">N7</span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-[Chivo_Mono] text-[13px] uppercase tracking-wider text-ice/70 hover:text-ice transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="font-[Chivo_Mono] text-[13px] uppercase tracking-wider text-white gradient-primary px-6 py-2.5 rounded-[10px] hover:opacity-90 transition-opacity"
          >
            Contact Us
          </a>
        </div>

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
        className={`md:hidden bg-dark/95 backdrop-blur-lg border-t border-ice/10 px-6 flex flex-col gap-4 overflow-hidden transition-all duration-300 ${
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
          className="font-[Chivo_Mono] text-sm uppercase text-white gradient-primary px-6 py-3 rounded-[10px] text-center"
          onClick={() => setOpen(false)}
        >
          Contact Us
        </a>
      </div>
    </nav>
  );
}

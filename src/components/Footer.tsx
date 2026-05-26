interface FooterLink {
  label: string;
  href: string;
}

const offices = [
  {
    city: "London",
    address:
      "Linktia Infosystems Ltd \u2013 CB7, 26 Main Road Sundridge, TN14 6EP, England, United Kingdom.",
  },
  {
    city: "Dubai",
    address:
      "Linktia Infosystems Ltd \u2013 CB7, Jumeirah Business, Center 5 Cluster W, Jumeirah Lakes Towers, Dubai, United Arab Emirates.",
  },
  {
    city: "Pune",
    address:
      "Linktia Infosystems Ltd \u2013 CB7, Nirmal, Anand Nagar, Suncity Road, Pune, Maharashtra, 411041, India.",
  },
];

const solutionsLinks: FooterLink[] = [
  { label: "Core Banking CB7", href: "#" },
  { label: "Digital Banking N7", href: "#" },
  { label: "Open Banking", href: "#" },
  { label: "Loan Origination System", href: "#" },
  { label: "Loan Management System", href: "#" },
  { label: "Digital Transformation", href: "#" },
];

const bankingLinks: FooterLink[] = [
  { label: "About Us", href: "#" },
  { label: "Solutions", href: "#" },
  { label: "Contact", href: "#" },
  { label: "Company", href: "#" },
  { label: "Careers", href: "#" },
  { label: "Insights", href: "#" },
  { label: "Core Team", href: "#" },
  { label: "Brand Center", href: "#" },
];

const socialLinks: FooterLink[] = [
  { label: "LinkedIn", href: "#" },
  { label: "X", href: "#" },
];

function FooterLinkList({
  title,
  links,
}: {
  title: string;
  links: FooterLink[];
}) {
  return (
    <div>
      <h5 className="font-[Archivo] text-ice font-medium text-sm mb-5">
        {title}
      </h5>
      <ul className="flex flex-col gap-3">
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              className="font-[Archivo] text-ice/50 text-sm hover:text-ice transition-colors flex items-center justify-between group"
            >
              <span>{link.label}</span>
              <span className="text-ice/30 group-hover:text-ice/60 transition-colors">
                &rarr;
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer id="contact" className="relative bg-dark overflow-hidden">
      <div className="section-divider" />
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 md:px-20 pt-16 md:pt-24 pb-8">
        {/* Top section: N7 branding + offices */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 mb-16">
          {/* Large N7 gradient text */}
          <div className="shrink-0">
            <svg
              viewBox="0 0 240 180"
              className="w-[160px] md:w-[240px] lg:w-[280px] h-auto"
              aria-label="N7"
            >
              <defs>
                <linearGradient
                  id="n7-gradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="5.68%" stopColor="#00b4fd" />
                  <stop offset="86.98%" stopColor="#003ace" />
                </linearGradient>
              </defs>
              <text
                x="0"
                y="150"
                className="font-[Archivo]"
                fill="url(#n7-gradient)"
                fontSize="180"
                fontWeight="800"
              >
                N7
              </text>
            </svg>
          </div>

          {/* Office locations */}
          <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-8">
            {offices.map((office) => (
              <div key={office.address}>
                <h5 className="font-[Archivo] text-ice font-medium text-sm mb-3">
                  {office.city}
                </h5>
                <p className="font-[Archivo] text-ice/40 text-sm leading-relaxed">
                  {office.address}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Link columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mb-16">
          <FooterLinkList title="Solutions" links={solutionsLinks} />
          <FooterLinkList title="N7 Banking" links={bankingLinks} />
          <FooterLinkList title="Our Socials" links={socialLinks} />
        </div>

        {/* Bottom bar */}
        <div className="section-divider mb-6" />
        <div className="pb-6">
          <p className="font-[Archivo] text-ice/30 text-xs leading-relaxed text-center md:text-left">
            Copyright &copy; 2022 by Linktia Infosystems Limited &mdash; CB7
            and N7 as Commercial Brand &mdash; Registered under the Companies
            Act 2006 in England and Wales | Number of Incorporation 13100992
          </p>
        </div>
      </div>
    </footer>
  );
}

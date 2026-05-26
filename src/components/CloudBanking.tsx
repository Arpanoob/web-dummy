import { useInView } from "../hooks/useInView";

const AML_TABLE_ROWS = [
  {
    caseId: "AML-2087",
    branchId: "BR-012",
    identified: "08-01-2022",
    transaction: "06-01-2022",
    mode: "Wire Transfer",
    amount: "$45,200",
    type: "Structuring",
  },
  {
    caseId: "AML-2088",
    branchId: "BR-045",
    identified: "09-01-2022",
    transaction: "07-01-2022",
    mode: "Cash Deposit",
    amount: "$32,800",
    type: "Layering",
  },
  {
    caseId: "AML-2089",
    branchId: "BR-012",
    identified: "09-01-2022",
    transaction: "08-01-2022",
    mode: "RTGS",
    amount: "$128,500",
    type: "Smurfing",
  },
  {
    caseId: "AML-2090",
    branchId: "BR-078",
    identified: "10-01-2022",
    transaction: "09-01-2022",
    mode: "NEFT",
    amount: "$67,300",
    type: "Integration",
  },
];

const STR_BAR_DATA = [
  { label: "Jan", value: 65 },
  { label: "Feb", value: 45 },
  { label: "Mar", value: 80 },
  { label: "Apr", value: 55 },
  { label: "May", value: 72 },
  { label: "Jun", value: 90 },
];

function DonutChart(): React.JSX.Element {
  const segments = [
    { color: "#ec4899", dasharray: "90 220", offset: "0" },
    { color: "#3b82f6", dasharray: "60 220", offset: "-90" },
    { color: "#06b6d4", dasharray: "40 220", offset: "-150" },
    { color: "#8b5cf6", dasharray: "30 220", offset: "-190" },
  ];

  return (
    <svg viewBox="0 0 100 100" className="w-28 h-28">
      {segments.map((seg, i) => (
        <circle
          key={i}
          cx="50"
          cy="50"
          r="35"
          fill="none"
          stroke={seg.color}
          strokeWidth="12"
          strokeDasharray={seg.dasharray}
          strokeDashoffset={seg.offset}
          transform="rotate(-90 50 50)"
        />
      ))}
      <text x="50" y="46" textAnchor="middle" fill="#1e293b" fontSize="10" fontWeight="700">
        450
      </text>
      <text x="50" y="57" textAnchor="middle" fill="#64748b" fontSize="5">
        STR
      </text>
    </svg>
  );
}

function AmlDashboard(): React.JSX.Element {
  return (
    <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
      {/* Top blue bar */}
      <div className="h-1.5 bg-blue-primary" />
      {/* Sidebar + content */}
      <div className="flex">
        {/* Sidebar */}
        <div className="hidden md:flex w-10 bg-gray-50 border-r border-gray-100 flex-col items-center py-4 gap-3">
          {[1,2,3,4,5].map(i => (
            <div key={i} className="w-5 h-5 rounded bg-gray-200" />
          ))}
        </div>
        {/* Main content */}
        <div className="flex-1 p-4 md:p-5">
          <h4 className="font-[Archivo] text-gray-900 text-sm font-bold mb-0.5">AML Dashboard</h4>
          <p className="text-gray-400 text-[9px] mb-3">xxxxxxxxx</p>

          {/* Stat cards */}
          <div className="grid grid-cols-2 gap-3 mb-4">
            <div className="bg-teal-50 border border-teal-200 rounded-lg p-3">
              <p className="text-teal-600 font-[Archivo] font-bold text-2xl">450</p>
              <p className="text-teal-500 text-[9px]">Total STR (Suspicious Transaction Report)</p>
            </div>
            <div className="bg-rose-50 border border-rose-200 rounded-lg p-3">
              <p className="text-rose-500 font-[Archivo] font-bold text-2xl">3</p>
              <p className="text-rose-400 text-[9px]">Days Pending for AML Process</p>
            </div>
          </div>

          {/* Charts row */}
          <div className="grid grid-cols-2 gap-3 mb-4">
            {/* Donut */}
            <div className="border border-gray-100 rounded-lg p-3">
              <p className="text-gray-700 text-[10px] font-semibold mb-2">Suspicious Transactions as on 10-01-2022</p>
              <div className="flex items-center justify-center">
                <DonutChart />
              </div>
            </div>
            {/* STR Summary */}
            <div className="border border-gray-100 rounded-lg p-3">
              <p className="text-gray-700 text-[10px] font-semibold mb-2">STR Summary</p>
              <div className="flex items-end gap-1.5 h-20">
                {STR_BAR_DATA.map((bar) => (
                  <div key={bar.label} className="flex-1 flex flex-col items-center gap-1">
                    <div className="w-full rounded-t" style={{ height: `${bar.value}%`, background: bar.value > 70 ? '#f97316' : '#3b82f6' }} />
                    <span className="text-gray-400 text-[7px]">{bar.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* AML Report table */}
          <div className="border border-gray-100 rounded-lg p-3">
            <p className="text-gray-700 text-[10px] font-semibold mb-2">AML Report</p>
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-gray-200 bg-blue-50">
                  {["AML Case ID", "Branch ID", "Identified Date", "Date of Transaction", "Mode of Transaction", "Amount of Transactions", "Type of Transaction"].map((col) => (
                    <th key={col} className="text-blue-800 text-[8px] font-semibold py-1.5 pr-2 whitespace-nowrap">{col}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {AML_TABLE_ROWS.map((row) => (
                  <tr key={row.caseId} className="border-b border-gray-100 last:border-0">
                    <td className="text-gray-800 text-[10px] py-1.5 pr-2">{row.caseId}</td>
                    <td className="text-gray-600 text-[10px] py-1.5 pr-2">{row.branchId}</td>
                    <td className="text-gray-600 text-[10px] py-1.5 pr-2">{row.identified}</td>
                    <td className="text-gray-600 text-[10px] py-1.5 pr-2">{row.transaction}</td>
                    <td className="text-gray-600 text-[10px] py-1.5 pr-2">{row.mode}</td>
                    <td className="text-gray-800 text-[10px] py-1.5 pr-2 font-medium">{row.amount}</td>
                    <td className="text-gray-500 text-[10px] py-1.5">{row.type}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

function BackgroundShapes(): React.JSX.Element {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute -top-20 -right-20 w-80 h-80 rounded-[40px] border border-ice/[0.04] rotate-12" />
      <div className="absolute top-40 -left-16 w-60 h-60 rounded-[32px] border border-ice/[0.03] -rotate-6" />
      <div className="absolute bottom-10 right-1/4 w-44 h-44 rounded-[24px] border border-ice/[0.04] rotate-[20deg]" />
      <div className="absolute -bottom-10 -left-10 w-52 h-36 rounded-[28px] border border-ice/[0.03] rotate-[8deg]" />
    </div>
  );
}

export default function CloudBanking(): React.JSX.Element {
  const { ref, isVisible } = useInView();

  return (
    <section
      id="platform"
      ref={ref}
      className={`relative bg-dark overflow-hidden transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-100 translate-y-0"
      }`}
    >
      <div className="section-divider" />
      <BackgroundShapes />

      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 md:px-20 py-16 md:py-20 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          {/* Left content */}
          <div className="flex flex-col gap-6 max-w-[480px] shrink-0 lg:pt-8">
            <h2 className="font-[Archivo] font-medium text-ice text-[28px] md:text-[37px] leading-[1.2] tracking-[-0.37px]">
              A complete cloud-based core banking.
            </h2>
            <p className="font-[Archivo] text-ice/70 text-base leading-relaxed">
              Faster time to market with our cloud-based core banking services
            </p>

            <div className="flex flex-col sm:flex-row items-start gap-6 mt-4">
              <a
                href="#"
                className="inline-block gradient-primary rounded-full px-8 py-3 font-[Chivo_Mono] text-[13px] text-white uppercase tracking-wider hover:shadow-[0_0_24px_rgba(0,180,253,0.3)] transition-shadow"
              >
                Request Demo
              </a>
              <a
                href="#"
                className="group inline-flex items-center gap-1.5 font-[Chivo_Mono] text-[13px] text-blue-primary uppercase tracking-wider underline underline-offset-4 decoration-blue-primary/40 hover:decoration-blue-primary transition-colors py-3"
              >
                Learn More
                <span className="inline-block group-hover:translate-x-1 transition-transform">
                  &rarr;
                </span>
              </a>
            </div>
          </div>

          {/* Right dashboard */}
          <div className="flex-1 min-w-0">
            <AmlDashboard />
          </div>
        </div>
      </div>
    </section>
  );
}

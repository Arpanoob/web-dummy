import { useInView } from "../hooks/useInView";

const LEFT_CHECKLIST = [
  "Customer-On Boarding",
  "Managing deposits and withdrawals",
  "Transaction management",
  "Interest Calculation",
  "Payments processing (cash, cheques, mandates, NEFT, RTGS etc)",
];

const RIGHT_CHECKLIST = [
  "CRM Activities",
  "Configuring New Banking Products",
  "Loan disbursal and Loan management",
  "Establishing criteria for minimum balances, interest rates, number of withdrawals allowed and so on.",
];

const BRANCH_TABLE_ROWS = [
  { branch: "Mumbai Central", kyc: 312, pending: 18, completed: 294 },
  { branch: "Delhi NCR", kyc: 285, pending: 24, completed: 261 },
  { branch: "Bangalore South", kyc: 198, pending: 12, completed: 186 },
  { branch: "Chennai Main", kyc: 220, pending: 9, completed: 211 },
];

const CUSTOMER_TABLE_ROWS = [
  { name: "Rajesh Kumar", id: "CUS-4521", status: "Verified", risk: "Low" },
  { name: "Priya Sharma", id: "CUS-4522", status: "Pending", risk: "Medium" },
  { name: "Amit Patel", id: "CUS-4523", status: "Verified", risk: "Low" },
  { name: "Sneha Gupta", id: "CUS-4524", status: "In Review", risk: "High" },
];

const BAR_CHART_DATA = [
  { label: "Jan", completed: 78, pending: 22 },
  { label: "Feb", completed: 85, pending: 15 },
  { label: "Mar", completed: 65, pending: 35 },
  { label: "Apr", completed: 90, pending: 10 },
  { label: "May", completed: 72, pending: 28 },
  { label: "Jun", completed: 88, pending: 12 },
];

function CheckItem({ text }: { text: string }): React.JSX.Element {
  return (
    <div className="flex items-start gap-3">
      <div className="w-5 h-5 rounded-full gradient-primary flex items-center justify-center shrink-0 mt-0.5">
        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
          <path d="M5 12l5 5L20 7" />
        </svg>
      </div>
      <span className="font-[Archivo] text-ice/80 text-[14px] leading-snug">{text}</span>
    </div>
  );
}

function KycDashboard(): React.JSX.Element {
  return (
    <div className="bg-white rounded-2xl shadow-2xl p-5 md:p-6 w-full overflow-hidden border border-gray-200">
      {/* Window chrome */}
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
          </div>
          <h4 className="font-[Archivo] text-gray-900 text-sm font-bold">
            KYC Dashboard
          </h4>
        </div>
        <span className="font-[Chivo_Mono] text-[10px] text-blue-500 uppercase">Live</span>
      </div>

      {/* Stat cards */}
      <div className="grid grid-cols-3 gap-3 mb-4">
        {[
          { label: "Total Applications", value: "1115", trend: "+12%" },
          { label: "Verified", value: "940", trend: "+8%" },
          { label: "In Progress", value: "1053", trend: "+5%" },
        ].map((stat) => (
          <div key={stat.label} className="border border-gray-100 rounded-xl p-3">
            <p className="text-gray-500 text-[9px] font-[Chivo_Mono] uppercase mb-1">
              {stat.label}
            </p>
            <div className="flex items-baseline gap-2">
              <p className="text-gray-900 font-[Archivo] font-semibold text-xl leading-none">
                {stat.value}
              </p>
              <span className="text-emerald-500 text-[9px] font-[Chivo_Mono]">{stat.trend}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Branch table */}
      <div className="border border-gray-100 rounded-xl p-3 mb-4">
        <p className="text-gray-500 text-[9px] font-[Chivo_Mono] uppercase mb-2">
          Branch Performance
        </p>
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-gray-200">
              {["Branch", "KYC Filed", "Pending", "Completed"].map((col) => (
                <th
                  key={col}
                  className="text-gray-500 text-[8px] font-[Chivo_Mono] uppercase font-normal pb-1.5 pr-2"
                >
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {BRANCH_TABLE_ROWS.map((row) => (
              <tr key={row.branch} className="border-b border-gray-100 last:border-0">
                <td className="text-gray-600 text-[10px] py-1.5 pr-2">{row.branch}</td>
                <td className="text-blue-600 text-[10px] font-[Chivo_Mono] py-1.5 pr-2">
                  {row.kyc}
                </td>
                <td className="text-amber-500 text-[10px] font-[Chivo_Mono] py-1.5 pr-2">
                  {row.pending}
                </td>
                <td className="text-emerald-500 text-[10px] font-[Chivo_Mono] py-1.5">
                  {row.completed}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Bar chart */}
      <div className="border border-gray-100 rounded-xl p-3 mb-4">
        <p className="text-gray-500 text-[9px] font-[Chivo_Mono] uppercase mb-2">
          Monthly KYC Completion
        </p>
        <div className="flex items-end gap-2 h-20">
          {BAR_CHART_DATA.map((bar) => (
            <div key={bar.label} className="flex-1 flex flex-col items-center gap-0.5">
              <div className="w-full flex flex-col gap-px">
                <div
                  className="w-full rounded-t"
                  style={{
                    height: `${bar.completed * 0.7}px`,
                    background: "linear-gradient(180deg, #14b8a6, #0d9488)",
                  }}
                />
                <div
                  className="w-full"
                  style={{
                    height: `${bar.pending * 0.4}px`,
                    background: "rgba(233,244,249,0.1)",
                  }}
                />
              </div>
              <span className="text-gray-400 text-[7px] font-[Chivo_Mono]">{bar.label}</span>
            </div>
          ))}
        </div>
        <div className="flex gap-4 mt-2">
          <div className="flex items-center gap-1">
            <div className="w-2 h-1 rounded-sm bg-teal-500" />
            <span className="text-gray-400 text-[7px]">Completed</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-2 h-1 rounded-sm bg-gray-100" />
            <span className="text-gray-400 text-[7px]">Pending</span>
          </div>
        </div>
      </div>

      {/* Customer list table */}
      <div className="border border-gray-100 rounded-xl p-3">
        <p className="text-gray-500 text-[9px] font-[Chivo_Mono] uppercase mb-2">Customer List</p>
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-gray-200">
              {["Customer Name", "Customer ID", "Status", "Risk Level"].map((col) => (
                <th
                  key={col}
                  className="text-gray-500 text-[8px] font-[Chivo_Mono] uppercase font-normal pb-1.5 pr-2"
                >
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {CUSTOMER_TABLE_ROWS.map((row) => {
              let statusColor = "text-gray-400";
              if (row.status === "Verified") {
                statusColor = "text-emerald-500";
              } else if (row.status === "Pending") {
                statusColor = "text-amber-500";
              } else if (row.status === "In Review") {
                statusColor = "text-blue-600";
              }

              let riskColor = "text-gray-400";
              if (row.risk === "Low") {
                riskColor = "text-emerald-500";
              } else if (row.risk === "Medium") {
                riskColor = "text-amber-500";
              } else if (row.risk === "High") {
                riskColor = "text-red-400/80";
              }

              return (
                <tr key={row.id} className="border-b border-gray-100 last:border-0">
                  <td className="text-gray-600 text-[10px] py-1.5 pr-2">{row.name}</td>
                  <td className="text-blue-600 text-[10px] font-[Chivo_Mono] py-1.5 pr-2">
                    {row.id}
                  </td>
                  <td className={`text-[10px] py-1.5 pr-2 ${statusColor}`}>{row.status}</td>
                  <td className={`text-[10px] py-1.5 ${riskColor}`}>{row.risk}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default function Stats(): React.JSX.Element {
  const { ref, isVisible } = useInView();

  return (
    <section
      ref={ref}
      className={`relative bg-dark overflow-hidden transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-100 translate-y-0"
      }`}
    >
      <div className="section-divider" />

      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 md:px-20 py-16 md:py-20">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          {/* Left dashboard */}
          <div className="flex-1 min-w-0">
            <KycDashboard />
          </div>

          {/* Right content */}
          <div className="flex flex-col gap-6 max-w-[520px] shrink-0 lg:pt-4">
            <h2 className="font-[Archivo] font-medium text-ice text-[28px] md:text-[37px] leading-[1.2] tracking-[-0.37px]">
              Run a more efficient, flexible, and digitally connected corebanking system
            </h2>

            <p className="font-[Chivo_Mono] text-blue-primary text-[13px] uppercase tracking-wider">
              What you will get:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
              <div className="flex flex-col gap-4">
                {LEFT_CHECKLIST.map((item) => (
                  <CheckItem key={item} text={item} />
                ))}
              </div>
              <div className="flex flex-col gap-4">
                {RIGHT_CHECKLIST.map((item) => (
                  <CheckItem key={item} text={item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

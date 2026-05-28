import { useInView } from "../hooks/useInView";

const articles = [
  {
    tag: "GETTING STARTED",
    title: "How to transition from a traditional to a digital bank",
    author: "David Grohl",
    date: "17/08/24",
  },
  {
    tag: "GETTING STARTED",
    title: "How to transition from a traditional to a digital bank",
    author: "David Grohl",
    date: "17/08/24",
  },
  {
    tag: "GETTING STARTED",
    title: "How to transition from a traditional to a digital bank",
    author: "David Grohl",
    date: "17/08/24",
  },
];

function ArticleCard({ tag, title, author, date }: typeof articles[0]) {
  return (
    <div className="glass-card rounded-2xl p-6 md:p-8 flex flex-col justify-between min-h-[280px]">
      <div>
        <span className="font-[Chivo_Mono] text-blue-primary text-[11px] uppercase tracking-widest mb-4 block">
          {tag}
        </span>
        <h3 className="font-[Archivo] font-medium text-ice text-[20px] md:text-[24px] leading-[1.25] mb-4">
          {title}
        </h3>
        <p className="font-[Archivo] text-ice/50 text-sm">
          {author} &nbsp;&nbsp; {date}
        </p>
      </div>
      <a
        href="#"
        className="mt-6 font-[Chivo_Mono] text-[13px] uppercase tracking-wider text-ice border border-ice/20 px-6 py-3 rounded-full hover:border-ice/40 hover:bg-ice/5 transition-all text-center"
      >
        Read More
      </a>
    </div>
  );
}

export default function Insights() {
  const { ref, isVisible } = useInView();

  return (
    <section
      ref={ref}
      className={`relative bg-dark overflow-hidden transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
    >
      <div className="section-divider" />
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 md:px-20 py-16 md:py-24">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 mb-12">
          {/* Left heading */}
          <div className="max-w-[380px] shrink-0">
            <h2 className="font-[Archivo] font-medium text-ice text-[28px] md:text-[37px] leading-[1.2] tracking-[-0.37px] mb-6">
              Get yourself up-to-speed on all the things happening in fintech
            </h2>
            <a
              href="#"
              className="inline-block font-[Chivo_Mono] text-[13px] uppercase tracking-wider text-ice border border-ice/30 px-6 py-3 rounded-full hover:border-ice/60 hover:bg-ice/5 transition-all"
            >
              Insights
            </a>
          </div>

          {/* Featured article (top-right, larger) */}
          <div className="flex-1">
            <div className="glass-card rounded-2xl overflow-hidden flex flex-col md:flex-row min-h-[280px]">
              {/* Image placeholder */}
              <div className="md:w-1/2 bg-blue-navy/60 p-8 flex items-center justify-center min-h-[200px]">
                <div className="grid grid-cols-2 gap-3">
                  {[0,1,2,3].map(i => (
                    <svg key={i} width="60" height="60" viewBox="0 0 80 80" fill="none">
                      <path d="M20 20C20 20 30 30 40 20C50 10 60 20 60 20C60 20 50 30 60 40C70 50 60 60 60 60C60 60 50 50 40 60C30 70 20 60 20 60C20 60 30 50 20 40C10 30 20 20 20 20Z" fill="#00b4fd"/>
                    </svg>
                  ))}
                </div>
              </div>
              {/* Content */}
              <div className="md:w-1/2 p-6 md:p-8 flex flex-col justify-center">
                <span className="font-[Chivo_Mono] text-blue-primary text-[11px] uppercase tracking-widest mb-3">
                  GETTING STARTED
                </span>
                <h3 className="font-[Archivo] font-medium text-ice text-[20px] md:text-[24px] leading-[1.25] mb-3">
                  How to transition from a traditional to a digital bank
                </h3>
                <p className="font-[Archivo] text-ice/50 text-sm mb-6">
                  David Grohl &nbsp;&nbsp; 17/08/24
                </p>
                <a
                  href="#"
                  className="font-[Chivo_Mono] text-[13px] uppercase tracking-wider text-ice border border-ice/20 px-6 py-3 rounded-full hover:border-ice/40 hover:bg-ice/5 transition-all text-center"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom row: 2 article cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {articles.slice(0, 2).map((article, i) => (
            <ArticleCard key={i} {...article} />
          ))}
        </div>

        {/* Read all link */}
        <div className="flex justify-end">
          <a
            href="#"
            className="font-[Chivo_Mono] text-[13px] uppercase tracking-wider text-blue-primary hover:text-ice transition-colors flex items-center gap-1.5"
          >
            Read All Insights
            <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>
    </section>
  );
}

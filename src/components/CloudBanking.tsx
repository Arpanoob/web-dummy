import { useInView } from "../hooks/useInView";

export default function CloudBanking() {
  const { ref, isVisible } = useInView();

  return (
    <section
      id="platform"
      ref={ref}
      className={`relative bg-dark overflow-hidden transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="section-divider" />
      <img
        src="/images/cloud-banking-section.svg"
        alt="A complete cloud-based core banking"
        className="w-full h-auto"
      />
    </section>
  );
}


import { useEffect, useState } from "react";
import {
  ShieldCheck,
  Clock3,
  Stethoscope,
} from "lucide-react";

const trustLabels = [
  {
    label: "100% Medically Reviewed",
    Icon: ShieldCheck,
  },
  {
    label: "Average 4–6 min reads",
    Icon: Clock3,
  },
  {
    label: "OB/GYN & Lab Vetted",
    Icon: Stethoscope,
  },
];

export default function LearnHero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = requestAnimationFrame(() => {
      setVisible(true);
    });

    return () => cancelAnimationFrame(timer);
  }, []);

  return (
    <section className="relative isolate overflow-hidden bg-[radial-gradient(ellipse_at_5%_15%,rgba(246,218,240,0.75)_0%,transparent_48%),radial-gradient(ellipse_at_95%_85%,rgba(211,214,247,0.7)_0%,transparent_52%),linear-gradient(115deg,#fcf8ff_0%,#fdfbff_50%,#f8f8ff_100%)] px-5 py-14 sm:px-8 sm:py-16 lg:py-[76px]">
      <div className="mx-auto max-w-[1120px]">
        <div className="max-w-[760px]">
          {/* Eyebrow */}
          <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-[#f9e0ed] px-3 py-2 text-[9px] font-bold uppercase tracking-[0.8px] text-[#a52562] sm:text-[10px]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#bd2d79]" />
            Prega Gene Learn
          </div>

          {/* Main heading */}
          <h1 className="max-w-[720px] text-[clamp(36px,5vw,54px)] font-semibold leading-[1.12] tracking-[-1.8px] text-[#092c60]">
            Pregnancy testing guides, explained clearly.
          </h1>

          {/* Description */}
          <p className="mt-5 max-w-[650px] text-[13px] leading-[1.85] text-[#555463] sm:text-sm">
            Easy-to-understand, medically reviewed information about
            pregnancy testing, hCG, and reading your result.
          </p>

          {/* Trust indicators */}
          <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-3 border-t border-[#e9e5f0] pt-5 sm:gap-x-7">
            {trustLabels.map(({ label, Icon }, index) => (
              <div
                key={label}
                className={`flex items-center gap-2 text-[9px] font-medium text-[#343c55] transition-all duration-700 sm:text-[10px] ${
                  visible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-3 opacity-0"
                }`}
                style={{
                  transitionDelay: `${index * 250}ms`,
                }}
              >
                <Icon
                  size={14}
                  className="shrink-0 text-[#092c60]"
                />
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

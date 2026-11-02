
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function LearnClosingCTA() {
  return (
    <section className="w-full px-5 py-14 sm:px-8 sm:py-16">
      <div className="mx-auto max-w-[900px] text-center">

        {/* Accent */}
        <div className="mx-auto mb-4 h-2 w-2 rounded-full bg-[#bd2d79]" />

        {/* Heading */}
        <h2 className="text-2xl font-semibold tracking-tight text-[#092c60] sm:text-3xl">
          Ready for clinical clarity?
        </h2>

        {/* Description */}
        <p className="mx-auto mt-3 max-w-[540px] text-xs leading-[1.8] text-[#555463] sm:text-sm">
          Engineered with advanced 10 mIU/mL immunoassay sensitivity
          and ergonomic thumb grip comfort for reliable peace of mind
          when it matters most.
        </p>

        {/* CTA Buttons */}
        <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            to="/"
            className="inline-flex min-h-[42px] items-center justify-center gap-2 rounded-full bg-[#092c60] px-6 text-[11px] font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-[#123b73]"
          >
            Explore Prega Gene
            <ArrowRight size={14} />
          </Link>

          <Link
            to="/#where-to-buy"
            className="inline-flex min-h-[42px] items-center justify-center gap-2 rounded-full bg-white px-6 text-[11px] font-semibold text-[#092c60] transition hover:-translate-y-0.5 hover:bg-[#e9ebff]"
          >
            Find Where to Buy
            <ArrowRight size={14} />
          </Link>
        </div>

        {/* Divider */}
        <div className="mx-auto mt-8 max-w-[470px] border-t border-[#092c60]/10 sm:mt-9" />

        {/* Educational Notice */}
        <div className="mx-auto mt-5 max-w-[520px]">
          <p className="text-[9px] font-medium leading-[1.8] text-[#555463] sm:text-[10px]">
            <strong className="font-bold text-[#343345]">
              Educational Notice:
            </strong>{" "}
            Articles in Prega Gene Learn are intended for educational and
            informational purposes only. They do not constitute formal
            obstetric diagnosis, medical treatment, or personalized clinical
            advice. Consult a qualified healthcare professional about
            pregnancy or your health.
          </p>
        </div>

      </div>
    </section>
  );
}

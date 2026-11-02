
import { ShieldCheck } from "lucide-react";

export default function UnderstandResultsHero() {
  return (
    <section
  className="relative overflow-hidden bg-[radial-gradient(ellipse_at_5%_15%,rgba(246,218,240,0.75)_0%,transparent_48%),radial-gradient(ellipse_at_95%_85%,rgba(211,214,247,0.7)_0%,transparent_52%),linear-gradient(115deg,#fcf8ff_0%,#fdfbff_50%,#f8f8ff_100%)] px-4 pb-10 pt-12 sm:px-6 sm:pb-12 sm:pt-16 lg:px-8"
>
      {/* Soft decorative gradient glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-20 -z-10 h-72 w-72 rounded-full bg-[#e8dfff]/50 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-28 left-[35%] -z-10 h-64 w-64 rounded-full bg-[#f8d9eb]/40 blur-3xl"
      />

      <div className="relative mx-auto max-w-[1120px]">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1.5 text-[9px] font-bold uppercase tracking-wide text-[#092c60] shadow-sm ring-1 ring-[#e9e7f7] sm:text-[10px]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#bd2d79]" />
            Understand Your Result
          </p>

          {/* Heading */}
          <h1 className="max-w-3xl text-3xl font-semibold leading-[1.12] tracking-tight text-[#092c60] sm:text-4xl lg:text-[48px]">
            Understand your pregnancy test result with clarity.
          </h1>

          {/* Description */}
          <p className="mt-4 max-w-2xl text-sm leading-6 text-[#5d5b6b] sm:text-base sm:leading-7">
            Learn how to read your Prega Gene pregnancy test window,
            identify the Control (C) and Test (T) lines, and understand
            what your result may indicate.
          </p>

          <p className="mt-2 max-w-2xl text-sm leading-6 text-[#5d5b6b] sm:text-base">
            Clear guidance can help you decide what to do next.
          </p>

          {/* Privacy note */}
          <div className="mt-4 flex items-start gap-2">
            <ShieldCheck
              size={15}
              className="mt-0.5 shrink-0 text-[#bd2d79]"
            />

            <p className="text-[10px] leading-5 text-[#5d5b6b] sm:text-xs">
              Your privacy matters. Find straightforward information to
              help you understand your result.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

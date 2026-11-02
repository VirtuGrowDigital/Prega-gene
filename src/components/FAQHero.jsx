
export default function FAQHero() {
  return (
    <section className="relative isolate overflow-hidden bg-[radial-gradient(ellipse_at_5%_15%,rgba(246,218,240,0.75)_0%,transparent_48%),radial-gradient(ellipse_at_95%_85%,rgba(211,214,247,0.7)_0%,transparent_52%),linear-gradient(115deg,#fcf8ff_0%,#fdfbff_50%,#f8f8ff_100%)] px-5 py-14 sm:px-8 sm:py-16 lg:py-[76px]">

      {/* Soft background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#f5d9eb]/40 blur-[90px] sm:h-[400px] sm:w-[400px]"
      />

      <div className="mx-auto max-w-[850px] text-center">

        {/* Eyebrow */}
        <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#f9e0ed] px-3 py-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-[#bd2d79]" />

          <span className="text-[9px] font-bold uppercase tracking-[0.12em] text-[#a52562]">
            Help Centre & FAQs
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="mx-auto max-w-[750px] text-[clamp(32px,5vw,52px)] font-semibold leading-[1.12] tracking-[-1.5px] text-[#092c60]">
          Pregnancy test questions?
          <br className="hidden sm:block" />
          <span className="text-[#bd2d79]">
            {" "}Start here.
          </span>
        </h1>

        {/* Description */}
        <p className="mx-auto mt-4 max-w-[570px] text-[12px] leading-[1.8] text-[#555463] sm:text-sm sm:leading-6">
          Clear answers about using Prega Gene, understanding faint lines,
          reading results, and discreet delivery.
        </p>

      </div>
    </section>
  );
}

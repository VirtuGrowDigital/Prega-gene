import diagnosticImage from "../assets/images/article1.png";

export default function DiagnosticGap() {
  return (
    <section className="bg-[#f0f1ff] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto grid w-[calc(100%-40px)] max-w-[1140px] grid-cols-1 gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">

        {/* Left Column */}
        <div className="flex flex-col">
          <div>
            <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#bd2d79]">
              The Diagnostic Gap
            </p>

            <h2 className="max-w-[400px] text-2xl font-semibold leading-tight tracking-tight text-[#092c60] sm:text-3xl">
              The problem with conventional diagnostics.
            </h2>

            <p className="mt-5 max-w-[390px] text-sm leading-7 text-[#55566a]">
              For years, home tests have relied on dense jargon, hard-to-read
              faint lines, and long leaflets, just when you need certainty
              most. When a line is barely visible, anxiety grows. Is it an
              evaporation line? An early positive? An invalid test?
            </p>
          </div>

          {/* Pull Quote */}
          <div className="mt-8 max-w-[390px] rounded-xl border border-white/70 bg-white/80 p-6 shadow-sm sm:mt-10">
            <span className="block text-4xl font-semibold leading-none text-[#bd2d79]">
              “
            </span>

            <blockquote className="mt-1 text-lg font-medium leading-snug tracking-tight text-[#092c60] sm:text-xl">
              Every woman deserves clarity without clinical coldness.
            </blockquote>

            <p className="mt-4 text-[9px] font-medium uppercase tracking-[0.12em] text-[#77778a]">
              Prega Gene Design Manifesto
            </p>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col justify-between">
          <div className="space-y-5 text-sm leading-7 text-[#55566a]">
            <p>
              For years, home diagnostic kits have favored dense medical
              jargon, ambiguous faint lines, and complex paper leaflets
              that create doubt at the exact moment women need certainty
              most. The standard test strip was designed for clinical
              technicians in sterile labs—not for real people holding
              their breath at 6:30 AM in a dim bathroom.
            </p>

            <p>
              When a line is barely perceptible, anxiety multiplies.
              Was that an evaporation line? An early positive? An invalid
              test? Conventional kits answer with microscopic asterisks
              and clinical disclaimers.
            </p>

            <p className="text-[#092c60]">
              <strong className="font-semibold">
                Prega Gene was built from the ground up to solve this exact
                vulnerability.
              </strong>{" "}
              We designed a wider absorbent tip, a higher-contrast result
              window, and clear companion guides that turn results into
              plain language.
            </p>
          </div>

          {/* Product Image */}
          <div className="mt-8 overflow-hidden rounded-xl">
            <img
              src={diagnosticImage}
              alt="Prega Gene pregnancy test kit and packaging"
              className="h-[220px] w-full object-cover sm:h-[280px] lg:h-[240px]"
              loading="lazy"
            />
          </div>
        </div>

      </div>
    </section>
  );
}

import { ArrowRight } from "lucide-react";

const results = [
  {
    label: "hCG Detected",
    type: "positive",
    title: "POSITIVE",
    description:
      "Two coloured lines appear in the Control (C) and Test (T) regions. A visible Test line, even if faint, may indicate a positive result when read within the specified time window.",
    guidance:
      "Consult a healthcare professional for confirmation and guidance on your next steps.",
    labelStyle: "bg-[#f9dce9] text-[#a52562]",
    lineC: true,
    lineT: true,
  },
  {
    label: "hCG Not Detected",
    type: "negative",
    title: "NEGATIVE",
    description:
      "One coloured line appears in the Control (C) region, with no line in the Test (T) region. This means hCG was not detected at the test's detection threshold.",
    guidance:
      "Testing too early may affect the result. If your period is delayed, consider retesting according to the instructions or consulting a healthcare professional.",
    labelStyle: "bg-[#e4e8ff] text-[#173f7a]",
    lineC: true,
    lineT: false,
  },
  {
    label: "Test Result Invalid",
    type: "invalid",
    title: "INVALID",
    description:
      "If the Control (C) line does not appear, the result is invalid, whether or not a Test (T) line is visible.",
    guidance:
      "Repeat the test with a new kit, following the instructions carefully.",
    labelStyle: "bg-[#fde0dd] text-[#a72b2b]",
    lineC: false,
    lineT: true,
  },
];

function ResultIndicator({ lineC, lineT, type }) {
  return (
    <div
      className="mx-auto mt-4 flex h-[58px] w-[144px] items-center justify-center rounded-full bg-[#e9eaff] sm:w-[150px]"
      aria-label={`${type} result line illustration`}
    >
      <div className="flex w-[21px] flex-col items-center gap-1">
        <span className="text-[9px] font-semibold text-[#5c5b70]">C</span>
        <span
          className={`h-[25px] w-[6px] rounded-full ${
            lineC ? "bg-[#bd2d79]" : "bg-[#dfe1f0]"
          }`}
        />
      </div>

      <div className="flex w-[21px] flex-col items-center gap-1">
        <span
          className={`text-[9px] font-semibold ${
            lineT ? "text-[#5c5b70]" : "text-[#b8bbd0]"
          }`}
        >
          T
        </span>
        <span
          className={`h-[25px] w-[6px] rounded-full ${
            lineT ? "bg-[#bd2d79]" : "bg-[#dfe1f0]"
          }`}
        />
      </div>
    </div>
  );
}

export default function VisualInterpretation() {
  return (
    <section
      id="results"
      className="bg-[#f0f1ff] px-5 py-12 sm:px-8 sm:py-14 lg:py-14"
    >
      <div className="mx-auto max-w-[1100px]">
        {/* Section heading */}
        <div className="mx-auto mb-8 max-w-[650px] text-center">
          <p className="mb-2 text-[10px] font-bold uppercase tracking-[1.5px] text-[#bd2d79]">
            Visual Interpretation
          </p>

          <h2 className="text-[25px] font-semibold leading-tight tracking-[-0.8px] text-[#092c60] sm:text-[30px]">
            Understand your pregnancy test results
          </h2>

          <p className="mx-auto mt-3 max-w-[600px] text-[12px] leading-[1.75] text-[#626071] sm:text-[13px]">
            Read the result within the time specified in the product
            instructions. The Control (C) line indicates whether the test
            has functioned correctly.
          </p>
        </div>

        {/* Result cards */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {results.map((result) => (
            <article
              key={result.type}
              className="flex flex-col rounded-xl border border-white/90 bg-white p-5 text-center shadow-[0_2px_8px_rgba(20,35,80,0.025)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(20,35,80,0.07)] sm:p-6"
            >
              <div className="flex justify-center">
                <span
                  className={`inline-flex rounded-full px-3 py-1 text-[9px] font-semibold ${result.labelStyle}`}
                >
                  {result.label}
                </span>
              </div>

              <ResultIndicator
                lineC={result.lineC}
                lineT={result.lineT}
                type={result.type}
              />

              <h3 className="mt-4 text-[17px] font-bold tracking-wide text-[#092c60]">
                {result.title}
              </h3>

              <p className="mt-2 text-[11px] leading-[1.75] text-[#626071] sm:text-xs">
                {result.description}
              </p>

              <p className="mt-3 text-[11px] leading-[1.75] text-[#626071] sm:text-xs">
                {result.guidance}
              </p>
            </article>
          ))}
        </div>

        {/* Result guide CTA */}
        <div className="mt-7 flex justify-center">
          <a
            href="#faq"
            className="inline-flex min-h-[38px] items-center justify-center gap-2 rounded-full bg-[#e1e4fb] px-5 py-2 text-[11px] font-semibold text-[#123b73] transition hover:bg-[#d6daf7]"
          >
            Read the Complete Pregnancy Test Result Guide
            <ArrowRight size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}

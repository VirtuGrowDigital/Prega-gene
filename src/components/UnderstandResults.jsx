
import { Link } from "react-router-dom";
import {
  Heart,
  CircleCheck,
  TriangleAlert,
  ArrowRight,
} from "lucide-react";

const results = [
  {
    id: "positive",
    label: "Positive Result",
    interpretation: "Pregnancy Indicated",
    description:
      "Two coloured lines appear: one in the Control (C) region and one in the Test (T) region.",
    nextStep:
      "Consult a qualified healthcare professional for guidance and pregnancy confirmation.",
    type: "positive",
    accent: "#bd2d79",
    Icon: Heart,
  },
  {
    id: "negative",
    label: "Negative Result",
    interpretation: "Pregnancy Not Detected",
    description:
      "One coloured line appears in the Control (C) region, with no line in the Test (T) region. This means hCG was not detected at the test's detection threshold.",
    nextStep:
      "If your period remains delayed or you tested early, consider repeating the test according to the product instructions or consulting a healthcare professional.",
    type: "negative",
    accent: "#092c60",
    Icon: CircleCheck,
  },
  {
    id: "invalid-test-only",
    label: "Invalid Result",
    interpretation: "Test Line Only",
    description:
      "A Test (T) line appears without a Control (C) line. The test has not produced a valid result.",
    nextStep:
      "Discard the used device and repeat the test using a new kit, following the instructions carefully.",
    type: "test-only",
    accent: "#cf2929",
    Icon: TriangleAlert,
  },
  {
    id: "invalid-no-lines",
    label: "Invalid Result",
    interpretation: "No Lines Visible",
    description:
      "Neither the Control (C) nor the Test (T) line appears. The test result is invalid.",
    nextStep:
      "Repeat the procedure with a new Prega Gene test device.",
    type: "no-lines",
    accent: "#cf2929",
    Icon: TriangleAlert,
  },
];

function ResultLineDiagram({ type }) {
  const showControl = type === "positive" || type === "negative";
  const showTest = type === "positive" || type === "test-only";

  return (
    <div
      className="flex h-[58px] items-center justify-center rounded-xl bg-[#f0f1ff] px-4"
      aria-label={`Illustrative result pattern: ${
        type === "positive"
          ? "lines at C and T"
          : type === "negative"
            ? "line at C only"
            : type === "test-only"
              ? "line at T only"
              : "no lines"
      }`}
    >
      <div className="flex h-[32px] w-[120px] items-center justify-center gap-7 rounded-md bg-white">
        <div className="relative flex h-full w-3 items-center justify-center">
          {showControl && (
            <span className="h-4 w-1 rounded-full bg-[#092c60]" />
          )}
          <span className="absolute -bottom-0.5 text-[7px] font-bold text-[#092c60]">
            C
          </span>
        </div>

        <div className="relative flex h-full w-3 items-center justify-center">
          {showTest && (
            <span className="h-4 w-1 rounded-full bg-[#bd2d79]" />
          )}
          <span className="absolute -bottom-0.5 text-[7px] font-bold text-[#092c60]">
            T
          </span>
        </div>
      </div>
    </div>
  );
}

export default function UnderstandResults() {
  return (
    <section
      id="results"
      className="bg-[#f0f1ff] px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
    >
      <div className="mx-auto max-w-[1200px]">
        <div className="mx-auto mb-8 max-w-2xl text-center sm:mb-10">
          <p className="mb-2 text-[9px] font-bold uppercase tracking-[0.2em] text-[#bd2d79] sm:text-[10px]">
            Reading the Lines
          </p>

          <h2 className="text-2xl font-semibold tracking-tight text-[#092c60] sm:text-3xl lg:text-[36px]">
            What does your pregnancy test result mean?
          </h2>

          <p className="mt-2 text-xs leading-5 text-[#5d5b6b] sm:text-sm sm:leading-6">
            Read the test within the time specified in the instructions.
            Check the Control (C) and Test (T) regions to identify the result.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {results.map(({ id, label, interpretation, description, nextStep, type, accent, Icon }) => (
            <article
              key={id}
              className="overflow-hidden rounded-2xl border border-[#e9e7f4] bg-white shadow-[0_4px_12px_rgba(9,44,96,0.06)] transition hover:-translate-y-1 hover:shadow-[0_10px_24px_rgba(9,44,96,0.09)]"
            >
              <div
                className="h-1"
                style={{ backgroundColor: accent }}
              />

              <div className="p-4 sm:p-5">
                <div className="mb-3 flex items-center justify-between gap-2">
                  <span
                    className="rounded-full px-2.5 py-1 text-[9px] font-semibold"
                    style={{
                      color: accent,
                      backgroundColor:
                        type === "positive"
                          ? "#fce4ef"
                          : type === "negative"
                            ? "#e8edff"
                            : "#ffe8e5",
                    }}
                  >
                    {label}
                  </span>

                  <Icon size={15} style={{ color: accent }} />
                </div>

                <ResultLineDiagram type={type} />

                <h3 className="mt-4 text-sm font-semibold leading-5 text-[#092c60]">
                  {interpretation}
                </h3>

                <p className="mt-2 text-[11px] leading-[1.7] text-[#5d5b6b] sm:text-xs">
                  {description}
                </p>

                <div className="mt-4 rounded-xl bg-[#f0f1ff] p-3">
                  <p className="mb-1 text-[9px] font-bold text-[#092c60]">
                    Recommended Next Step
                  </p>
                  <p className="text-[10px] leading-[1.7] text-[#55586a] sm:text-[11px]">
                    {nextStep}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-7 text-center">
          <Link
            to="/#results"
            className="inline-flex min-h-10 items-center justify-center gap-2 rounded-full bg-[#092c60] px-5 py-3 text-[11px] font-semibold text-white transition hover:bg-[#123b73] sm:text-xs"
          >
            Read the Complete Result Guide
            <ArrowRight size={14} />
          </Link>
        </div>

        <p className="mx-auto mt-5 max-w-2xl text-center text-[10px] leading-5 text-[#68677a] sm:text-xs">
          This information is for educational purposes and does not replace
          the instructions supplied with your test kit or advice from a
          qualified healthcare professional.
        </p>
      </div>
    </section>
  );
}

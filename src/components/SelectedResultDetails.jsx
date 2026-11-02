
import { Lightbulb, ShieldCheck, ArrowRight, Printer } from "lucide-react";
import { Link } from "react-router-dom";

const resultContent = {
  positive: {
    status: "POSITIVE RESULT",
    title: "Two Distinct Lines",
    description:
      "Two coloured lines appear in the result window: one in the Control (C) region and one in the Test (T) region. This indicates that hCG (human chorionic gonadotropin), a hormone associated with pregnancy, has been detected in your urine sample.",
    faintLine: true,
    steps: [
      {
        title: "Consult a Healthcare Professional",
        description:
          "Contact a qualified healthcare professional to discuss your result and determine whether further testing or clinical confirmation is appropriate.",
      },
      {
        title: "Record Your Menstrual Dates",
        description:
          "Note the first day of your last menstrual period and the date of your test. These details may help your healthcare professional assess your pregnancy timeline.",
      },
      {
        title: "Discuss Your Early Pregnancy Care",
        description:
          "If pregnancy is indicated, ask your healthcare professional about folic acid, suitable prenatal care, medicines, and lifestyle changes relevant to your circumstances.",
      },
    ],
    buttonText: "Contact Our Support Team",
    buttonHref: "/#contact",
  },
  negative: {
    status: "NEGATIVE RESULT",
    title: "One Line at C Only",
    description:
      "A coloured line appears in the Control (C) region, but no line appears in the Test (T) region. This means hCG was not detected at the test's detection threshold. A negative result does not always rule out pregnancy, particularly if you test too early.",
    faintLine: false,
    steps: [
      {
        title: "Consider When You Tested",
        description:
          "Testing before or around the expected period may produce a negative result if hCG levels are still below the test's detection threshold.",
      },
      {
        title: "Repeat If Your Period Is Delayed",
        description:
          "If your period does not begin, repeat the test according to the product instructions or seek advice from a healthcare professional.",
      },
      {
        title: "Seek Advice if You Remain Unsure",
        description:
          "Consult a healthcare professional if you continue to experience symptoms or receive results that do not match your expectations.",
      },
    ],
    buttonText: "Learn More About Negative Results",
    buttonHref: "/how-to-use",
  },
  invalid: {
    status: "INVALID RESULT",
    title: "Check the Control Line",
    description:
      "A valid result requires a visible Control (C) line. If the Control line is absent, the test is invalid, regardless of whether a Test (T) line appears.",
    faintLine: false,
    steps: [
      {
        title: "Do Not Interpret the Result",
        description:
          "An invalid test cannot confirm whether hCG is present or absent.",
      },
      {
        title: "Use a New Test Device",
        description:
          "Discard the used device and repeat the procedure with a new Prega Gene test kit.",
      },
      {
        title: "Follow the Instructions Carefully",
        description:
          "Check the sample application method, timing, and other instructions supplied with the kit. Contact the support team if the problem persists.",
      },
    ],
    buttonText: "Review Testing Instructions",
    buttonHref: "/how-to-use",
  },
};

export default function SelectedResultDetails({ selectedPattern }) {
  const result = resultContent[selectedPattern] || resultContent.positive;

  const handleSaveRecord = () => {
    window.print();
  };

  return (
    <section
      id="selected-result-details"
      aria-live="polite"
      className="bg-[#f0f1ff] px-4 pb-10 sm:px-6 sm:pb-14 lg:px-8"
    >
      <div className="mx-auto max-w-[1120px]">
        <div className="grid gap-6 rounded-2xl border border-[#eeebf6] bg-white p-5 shadow-[0_4px_10px_rgba(9,44,96,0.06)] sm:p-7 lg:grid-cols-[0.9fr_1.1fr] lg:gap-7 lg:p-8">
          {/* Result interpretation */}
          <div>
            <span
              className={`inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-[9px] font-bold tracking-wide ${
                selectedPattern === "positive"
                  ? "bg-[#fce4ef] text-[#a92168]"
                  : selectedPattern === "negative"
                    ? "bg-[#e9edff] text-[#092c60]"
                    : "bg-[#ffe8e5] text-[#c62828]"
              }`}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-current" />
              {result.status}
            </span>

            <h2 className="mt-4 text-2xl font-semibold tracking-tight text-[#092c60] sm:text-3xl">
              {result.title}
            </h2>

            <p className="mt-3 text-xs leading-6 text-[#55586a] sm:text-sm">
              {result.description}
            </p>

            {result.faintLine && (
              <div className="mt-5 rounded-xl bg-[#f0f1ff] p-4">
                <div className="flex items-start gap-2">
                  <Lightbulb
                    size={16}
                    className="mt-0.5 shrink-0 text-[#bd2d79]"
                  />

                  <div>
                    <h3 className="text-xs font-semibold text-[#092c60]">
                      Is the Test line faint?
                    </h3>

                    <p className="mt-1 text-[11px] leading-[1.7] text-[#55586a]">
                      A faint coloured Test (T) line may still indicate a
                      positive result if it appears within the specified
                      reading window and the Control (C) line is present.
                      Follow the product instructions and consult a
                      healthcare professional if you are unsure.
                    </p>
                  </div>
                </div>
              </div>
            )}

            <div className="mt-5 rounded-xl bg-[#eef0fc] p-4 text-center">
              <p className="text-[9px] font-medium uppercase tracking-wide text-[#5d5b6b]">
                Result Interpretation
              </p>

              <p className="mt-1 text-sm font-semibold text-[#092c60]">
                {selectedPattern === "positive"
                  ? "Pregnancy Indicated"
                  : selectedPattern === "negative"
                    ? "Pregnancy Not Detected"
                    : "Result Cannot Be Interpreted"}
              </p>

              <p className="mt-1 text-[10px] leading-5 text-[#68677a]">
                Always follow the supplied product instructions.
              </p>
            </div>
          </div>

          {/* Recommended next steps */}
          <div className="rounded-xl bg-[#faf9ff] p-4 sm:p-5">
            <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
              <h3 className="text-sm font-semibold text-[#092c60] sm:text-base">
                Recommended Next Steps
              </h3>

              <span className="text-[9px] font-medium text-[#bd2d79]">
                Personal Guidance
              </span>
            </div>

            <div className="space-y-3">
              {result.steps.map((step, index) => (
                <article
                  key={step.title}
                  className="flex gap-3 rounded-xl border border-[#f0edf7] bg-white p-3 sm:p-4"
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#092c60] text-xs font-semibold text-white">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div>
                    <h4 className="text-xs font-semibold leading-5 text-[#092c60] sm:text-sm">
                      {step.title}
                    </h4>

                    <p className="mt-1 text-[10px] leading-[1.7] text-[#55586a] sm:text-[11px]">
                      {step.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-4 flex flex-wrap items-center gap-2">
              <Link
                to={result.buttonHref}
                className="inline-flex min-h-10 items-center justify-center gap-2 rounded-full bg-[#bd2d79] px-4 py-2.5 text-[10px] font-semibold text-white transition hover:bg-[#a92168]"
              >
                {result.buttonText}
                <ArrowRight size={13} />
              </Link>

              <button
                type="button"
                onClick={handleSaveRecord}
                className="inline-flex min-h-10 items-center justify-center gap-2 rounded-full bg-[#e9edff] px-4 py-2.5 text-[10px] font-semibold text-[#092c60] transition hover:bg-[#dfe4ff]"
              >
                <Printer size={13} />
                Save Result Record
              </button>
            </div>

            <p className="mt-3 flex items-start gap-2 text-[9px] leading-5 text-[#68677a]">
              <ShieldCheck size={13} className="mt-0.5 shrink-0" />
              Your selection is not stored or submitted. Printing opens your
              browser's print dialog, where you may choose Save as PDF.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}


import { CheckCircle2 } from "lucide-react";

const patterns = [
  {
    id: "positive",
    label: "Positive",
    description: "Two coloured lines appear, one at C and one at T.",
  },
  {
    id: "negative",
    label: "Negative",
    description: "One coloured line appears at C, with no line at T.",
  },
  {
    id: "invalid",
    label: "Invalid",
    description: "The C line is missing, whether or not a T line appears.",
  },
];

function TestWindow({ pattern }) {
  const showControl = pattern !== "invalid";
  const showTest = pattern === "positive";

  return (
    <div className="mt-4 flex h-[54px] items-center justify-center rounded-xl bg-[#f0f1ff] px-3">
      <div className="flex h-[34px] w-full max-w-[150px] items-center justify-center gap-8 rounded-full bg-white">
        <div className="relative flex h-full w-3 items-center justify-center">
          {showControl && (
            <span className="h-5 w-1 rounded-full bg-[#bd2d79]" />
          )}
          <span className="absolute -top-3 text-[8px] font-semibold text-[#464454]">
            C
          </span>
        </div>

        <div className="relative flex h-full w-3 items-center justify-center">
          {showTest && (
            <span className="h-5 w-1 rounded-full bg-[#bd2d79]" />
          )}
          <span className="absolute -top-3 text-[8px] font-semibold text-[#464454]">
            T
          </span>
        </div>
      </div>
    </div>
  );
}

export default function ResultPatternSelector({
  selectedPattern,
  onSelectPattern,
}) {
  return (
    <section
      id="select-result"
      className="bg-gradient-to-b from-[#fcfaff] to-[#f0f1ff] px-4 pb-6 pt-2 sm:px-6 sm:pb-8 lg:px-8"
    >
      <div className="mx-auto max-w-[1120px]">
        <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#092c60]">
            Select Your Window Pattern
          </p>

          <p className="text-[10px] text-[#68677a]">
            Step 1 of 2: Match Your Result
          </p>
        </div>

        <div
          className="grid grid-cols-1 gap-3 sm:grid-cols-3"
          role="group"
          aria-label="Select your pregnancy test result pattern"
        >
          {patterns.map((pattern) => {
            const isSelected = selectedPattern === pattern.id;

            return (
              <button
                key={pattern.id}
                type="button"
                onClick={() => onSelectPattern(pattern.id)}
                aria-pressed={isSelected}
                className={`rounded-xl border-2 bg-white p-3 text-left transition sm:p-4 ${
                  isSelected
                    ? "border-[#bd2d79] shadow-[0_5px_18px_rgba(189,45,121,0.08)]"
                    : "border-transparent hover:border-[#d9d8ed]"
                }`}
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="text-sm font-semibold text-[#092c60]">
                    {pattern.label}
                  </span>

                  {isSelected && (
                    <span className="rounded-full bg-[#bd2d79] px-2 py-1 text-[8px] font-semibold text-white">
                      Active
                    </span>
                  )}
                </div>

                <p className="mt-2 min-h-[34px] text-[10px] leading-[1.6] text-[#5d5b6b] sm:text-[11px]">
                  {pattern.description}
                </p>

                <TestWindow pattern={pattern.id} />
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

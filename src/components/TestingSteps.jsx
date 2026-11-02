
import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Clock3, ShieldCheck } from "lucide-react";
import pregnancyKit from "../assets/images/steps.png";

const phases = [
  {
    number: "01",
    label: "Prepare",
    title: "Prepare Your Test Wand",
    description:
      "Get your sample and test device ready before beginning the testing procedure.",
    status: "PREPARATION",
    steps: [
      {
        number: 1,
        title: "Collect Your Urine Sample",
        description:
          "Collect urine in a clean, dry container before starting the testing procedure.",
      },
      {
        number: 2,
        title: "Open the Test Pouch",
        description:
          "Remove the Prega Gene test device from its sealed pouch when you are ready to use it.",
      },
      {
        number: 3,
        title: "Remove the Protective Cap",
        description:
          "Remove the cap to expose the absorbent tip. Avoid touching the absorbent material directly.",
      },
    ],
    deviceStatus: "Ready to Use",
    timing: "Follow Kit Instructions",
  },
  {
    number: "02",
    label: "Perform the Test",
    title: "Perform the Test",
    description:
      "Apply the collected urine sample according to the instructions supplied with your test kit.",
    status: "TEST PROCEDURE",
    steps: [
      {
        number: 4,
        title: "Immerse the Absorbent Tip",
        description:
          "Hold the device with the absorbent tip pointing downward. Immerse it in the urine sample only as directed, without passing the marked line.",
      },
      {
        number: 5,
        title: "Replace the Cap and Lay Flat",
        description:
          "Replace the protective cap and place the test device on a clean, flat surface as instructed.",
      },
    ],
    deviceStatus: "Sample Applied",
    timing: "Keep the Device Flat",
  },
  {
    number: "03",
    label: "Read Result",
    title: "Read Your Result",
    description:
      "Allow the test to develop and interpret the visible lines only within the specified reading window.",
    status: "RESULT INTERPRETATION",
    steps: [
      {
        number: 6,
        title: "Wait for the Specified Time",
        description:
          "Allow the test to develop for the duration stated in the supplied instructions.",
      },
      {
        number: 7,
        title: "Do Not Read After the Time Limit",
        description:
          "Do not interpret the result after the specified reading window, as the appearance of the test may change.",
      },
      {
        number: 8,
        title: "Read Your Result",
        description:
          "Check the Control (C) and Test (T) regions and compare the visible lines with the kit's result guide.",
      },
    ],
    deviceStatus: "Check C and T",
    timing: "Read Within the Time Window",
  },
];

export default function TestingSteps() {
  const [activePhase, setActivePhase] = useState(0);
  const phase = phases[activePhase];

  const goToNextPhase = () => {
    setActivePhase((current) => Math.min(current + 1, phases.length - 1));
  };

  return (
    <section
      id="testing-steps"
      className="bg-[#fcfaff] px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
    >
      <div className="mx-auto max-w-[1200px]">
        {/* Section heading */}
        <div className="mx-auto mb-8 max-w-2xl text-center sm:mb-10">
          <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.22em] text-[#bd2d79]">
            Step-by-Step Guidance
          </p>

          <h2 className="text-2xl font-semibold tracking-tight text-[#092c60] sm:text-3xl lg:text-[38px]">
            How to Use the Prega Gene Pregnancy Test Kit
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-[#5d5b6b] sm:text-base">
            Follow all eight steps to prepare the test wand, apply your urine
            sample, and understand your result.
          </p>
        </div>

        {/* Phase selector */}
        <div className="mb-7 grid grid-cols-3 gap-1 rounded-xl bg-[#f0f1ff] p-1 sm:mb-8 sm:gap-2 sm:p-1.5">
          {phases.map((item, index) => (
            <button
              key={item.number}
              type="button"
              onClick={() => setActivePhase(index)}
              aria-pressed={activePhase === index}
              className={`flex min-h-12 items-center justify-center gap-2 rounded-lg px-2 py-3 text-[10px] font-semibold transition-all sm:text-xs ${
                activePhase === index
                  ? "bg-[#092c60] text-white shadow-sm"
                  : "text-[#344568] hover:bg-white"
              }`}
            >
              <span
                className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[9px] ${
                  activePhase === index
                    ? "bg-[#bd2d79] text-white"
                    : "bg-[#e1e5fa] text-[#092c60]"
                }`}
              >
                {item.number}
              </span>
              <span>{item.label}</span>
            </button>
          ))}
        </div>

        {/* Phase content */}
        <div className="grid overflow-hidden rounded-2xl border border-[#efebf6] bg-white shadow-[0_8px_24px_rgba(9,44,96,0.07)] lg:grid-cols-[1.05fr_0.95fr]">
          {/* Instructions */}
          <div className="p-5 sm:p-7 lg:p-8">
            <p className="mb-2 text-[9px] font-bold uppercase tracking-[0.16em] text-[#bd2d79] sm:text-[10px]">
              Phase {phase.number} of 03 · {phase.status}
            </p>

            <h3 className="text-xl font-semibold tracking-tight text-[#092c60] sm:text-2xl">
              {phase.title}
            </h3>

            <p className="mt-2 text-xs leading-5 text-[#5d5b6b] sm:text-sm sm:leading-6">
              {phase.description}
            </p>

            <div className="mt-5 space-y-2.5">
              {phase.steps.map((step) => (
                <article
                  key={step.number}
                  className="flex gap-3 rounded-xl bg-[#f3f4ff] p-3 sm:p-3.5"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#092c60] text-[10px] font-bold text-white">
                    {step.number}
                  </span>

                  <div>
                    <h4 className="text-xs font-semibold leading-5 text-[#092c60] sm:text-sm">
                      {step.title}
                    </h4>
                    <p className="mt-0.5 text-[11px] leading-[1.65] text-[#55586a] sm:text-xs">
                      {step.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>

            {activePhase < phases.length - 1 ? (
              <button
                type="button"
                onClick={goToNextPhase}
                className="mt-5 inline-flex min-h-10 items-center gap-2 rounded-full bg-[#bd2d79] px-4 py-2.5 text-[11px] font-semibold text-white transition hover:bg-[#a92168] sm:text-xs"
              >
                Next Step: {phases[activePhase + 1].label}
                <ArrowRight size={14} />
              </button>
            ) : (
              <Link
                to="/#results"
                className="mt-5 inline-flex min-h-10 items-center gap-2 rounded-full bg-[#bd2d79] px-4 py-2.5 text-[11px] font-semibold text-white transition hover:bg-[#a92168] sm:text-xs"
              >
                Understand Your Results
                <ArrowRight size={14} />
              </Link>
            )}
          </div>

          {/* Product visual */}
          <div className="flex flex-col justify-center bg-[#f0f1ff] p-4 sm:p-6 lg:m-4 lg:rounded-xl">
            <div className="flex min-h-[250px] flex-1 items-center justify-center overflow-hidden rounded-xl bg-[#e9ebff] p-5 sm:min-h-[310px]">
              <img
                src={pregnancyKit}
                alt="Prega Gene pregnancy test kit"
                className="max-h-[300px] w-full object-contain sm:max-h-[340px]"
              />
            </div>

            <div className="mt-3 grid grid-cols-2 gap-2">
              <div className="rounded-lg bg-white/85 px-3 py-3 text-center">
                <ShieldCheck
                  size={16}
                  className="mx-auto mb-1 text-[#092c60]"
                />
                <p className="text-[9px] text-[#666477]">Device Status</p>
                <p className="mt-1 text-[10px] font-semibold text-[#092c60] sm:text-xs">
                  {phase.deviceStatus}
                </p>
              </div>

              <div className="rounded-lg bg-white/85 px-3 py-3 text-center">
                <Clock3
                  size={16}
                  className="mx-auto mb-1 text-[#bd2d79]"
                />
                <p className="text-[9px] text-[#666477]">Testing Guidance</p>
                <p className="mt-1 text-[10px] font-semibold text-[#bd2d79] sm:text-xs">
                  {phase.timing}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Progress indicator */}
        <div className="mx-auto mt-5 flex max-w-xs items-center justify-center gap-2">
          {phases.map((item, index) => (
            <button
              key={item.number}
              type="button"
              onClick={() => setActivePhase(index)}
              aria-label={`Go to phase ${item.number}: ${item.label}`}
              aria-pressed={activePhase === index}
              className={`h-1.5 rounded-full transition-all ${
                activePhase === index
                  ? "w-10 bg-[#bd2d79]"
                  : "w-5 bg-[#d9d9ed] hover:bg-[#b7b9d9]"
              }`}
            />
          ))}
        </div>

        <p className="mx-auto mt-5 max-w-2xl text-center text-[10px] leading-5 text-[#777486] sm:text-xs">
          Always follow the instructions supplied with your specific test kit.
          Do not interpret results outside the specified reading window.
        </p>
      </div>
    </section>
  );
}

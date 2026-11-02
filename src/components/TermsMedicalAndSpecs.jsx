
import {
  ShieldCheck,
  Info,
  Thermometer,
  Clock3,
  Timer,
  AlertTriangle,
  CheckCircle2,
} from "lucide-react";

export default function TermsMedicalAndSpecs() {
  return (
    <div className="mx-auto w-full max-w-[850px] space-y-5 px-4 sm:px-0">

      {/* 02. Medical Disclaimer */}
      <section
        id="medical-disclaimer"
        className="scroll-mt-24 rounded-2xl border border-[#e9e7f5] bg-white p-5 sm:p-6"
      >
        <div className="mb-4 flex items-center gap-2">
          <span className="rounded-md bg-[#e9edff] px-2 py-1 text-[9px] font-bold text-[#173f7a]">
            02
          </span>

          <h2 className="text-base font-semibold tracking-tight text-[#092c60]">
            Medical Disclaimer & Clinical Guidance
          </h2>
        </div>

        <p className="max-w-[700px] text-[11px] leading-[1.8] text-[#555568]">
          Prega Gene is a qualitative test that detects hCG in urine at or
          above 10 mIU/mL.
        </p>

        {/* Guidance cards */}
        <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
          <div className="rounded-xl bg-[#f0f1ff] p-4">
            <div className="mb-2 flex items-center gap-2 text-[#173f7a]">
              <Info size={14} />

              <h3 className="text-[11px] font-semibold">
                No doctor-patient relationship
              </h3>
            </div>

            <p className="text-[10px] leading-[1.8] text-[#555568]">
              Our chatbots, result tools and FAQs are not a medical
              consultation.
            </p>
          </div>

          <div className="rounded-xl bg-[#f0f1ff] p-4">
            <div className="mb-2 flex items-center gap-2 text-[#bd2d79]">
              <ShieldCheck size={14} />

              <h3 className="text-[11px] font-semibold text-[#173f7a]">
                Confirm with a professional
              </h3>
            </div>

            <p className="text-[10px] leading-[1.8] text-[#555568]">
              A positive result should be confirmed by a doctor, usually
              with a blood test and an ultrasound.
            </p>
          </div>
        </div>

        {/* Limitations */}
        <div className="mt-3 rounded-xl border border-[#e5e7fb] bg-[#f0f1ff] p-4">
          <div className="mb-3 flex items-center gap-2">
            <AlertTriangle size={14} className="text-[#bd2d79]" />

            <h3 className="text-[11px] font-semibold text-[#092c60]">
              Limitations to know about
            </h3>
          </div>

          <div className="space-y-3 text-[10px] leading-[1.8] text-[#555568]">
            <p>
              <strong className="text-[#092c60]">
                False positives:
              </strong>{" "}
              Can occur after a recent pregnancy loss or termination, with
              certain medical conditions, or during fertility treatment
              that contains hCG.
            </p>

            <p>
              <strong className="text-[#092c60]">
                False negatives:
              </strong>{" "}
              Can occur if you test very early, drink a lot of fluid
              beforehand, or don't follow the instructions.
            </p>

            <p>
              <strong className="text-[#092c60]">
                Ectopic pregnancy:
              </strong>{" "}
              Can give unclear results. Severe pain on one side or unusual
              bleeding needs urgent medical care.
            </p>
          </div>
        </div>
      </section>

      {/* 03. Product Information */}
      <section
        id="product-specs"
        className="scroll-mt-24 rounded-2xl border border-[#e9e7f5] bg-white p-5 sm:p-6"
      >
        <div className="mb-4 flex items-center gap-2">
          <span className="rounded-md bg-[#e9edff] px-2 py-1 text-[9px] font-bold text-[#173f7a]">
            03
          </span>

          <h2 className="text-base font-semibold tracking-tight text-[#092c60]">
            Product Information & Diagnostic Specs
          </h2>
        </div>

        <p className="max-w-[700px] text-[11px] leading-[1.8] text-[#555568]">
          Our tests are made under ISO 13485 quality systems. Stated
          accuracy depends on following the instructions.
        </p>

        {/* Specification cards */}
        <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">

          <div className="rounded-xl bg-[#f0f1ff] p-4">
            <Thermometer size={15} className="mb-3 text-[#173f7a]" />

            <p className="text-[9px] font-medium uppercase tracking-wide text-[#77768a]">
              Storage Range
            </p>

            <h3 className="mt-1 text-sm font-semibold text-[#092c60]">
              2°C – 30°C
            </h3>

            <p className="mt-2 text-[10px] leading-[1.7] text-[#626071]">
              Keep away from sunlight, moisture and heat. Do not freeze.
            </p>
          </div>

          <div className="rounded-xl bg-[#f0f1ff] p-4">
            <Clock3 size={15} className="mb-3 text-[#173f7a]" />

            <p className="text-[9px] font-medium uppercase tracking-wide text-[#77768a]">
              Testing Time
            </p>

            <h3 className="mt-1 text-sm font-semibold text-[#092c60]">
              Day of Period
            </h3>

            <p className="mt-2 text-[10px] leading-[1.7] text-[#626071]">
              Test from the day of your expected period. Use first morning
              urine for early testing.
            </p>
          </div>

          <div className="rounded-xl bg-[#f0f1ff] p-4">
            <Timer size={15} className="mb-3 text-[#bd2d79]" />

            <p className="text-[9px] font-medium uppercase tracking-wide text-[#77768a]">
              Reading Window
            </p>

            <h3 className="mt-1 text-sm font-semibold text-[#bd2d79]">
              5–10 Minutes
            </h3>

            <p className="mt-2 text-[10px] leading-[1.7] text-[#626071]">
              Read within 5–10 minutes. Ignore results after 10 minutes.
            </p>
          </div>
        </div>

        {/* Product instructions */}
        <div className="mt-4 space-y-3">
          <div className="flex items-start gap-2">
            <CheckCircle2
              size={13}
              className="mt-0.5 shrink-0 text-[#bd2d79]"
            />

            <p className="text-[10px] leading-[1.8] text-[#555568]">
              <strong className="text-[#092c60]">Single use:</strong>{" "}
              Use each test once only. Do not reuse or use after expiry.
            </p>
          </div>

          <div className="flex items-start gap-2">
            <CheckCircle2
              size={13}
              className="mt-0.5 shrink-0 text-[#bd2d79]"
            />

            <p className="text-[10px] leading-[1.8] text-[#555568]">
              <strong className="text-[#092c60]">Tamper check:</strong>{" "}
              Open the foil pouch only when ready. Discard any test with
              damaged foil, a past expiry date, or no Control (C) line.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}


import {
  BriefcaseMedical,
  CircleCheck,
  TriangleAlert,
} from "lucide-react";

export default function MedicalNotice() {
  return (
    <section className="bg-[#fcfaff] px-5 pb-6 sm:px-8">
      <div className="mx-auto max-w-[1100px]">
        <div className="relative overflow-hidden rounded-xl border-l-[5px] border-[#bd2d79] bg-[#edeefe] px-5 py-5 sm:px-7">
          <div className="flex items-start gap-4">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#fbdce9] text-[#bd2d79]">
              <BriefcaseMedical size={18} />
            </div>

            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-[9px] font-bold uppercase tracking-wider text-[#bd2d79]">
                  Critical Medical & Clinical Guidance Notice
                </span>

                <span className="rounded bg-white/80 px-2 py-1 text-[8px] text-[#626071]">
                  Important Consumer Information
                </span>
              </div>

              <p className="mt-2 text-[11px] leading-[1.8] text-[#25243a] sm:text-xs">
                Information provided on this website is for general
                informational and educational purposes only and must never
                be considered a substitute for professional clinical
                medical advice, formal diagnosis, or medical treatment.
                Prega Gene diagnostic test kits provide qualitative{" "}
                <em>in vitro</em> screening results. In case of unexpected
                symptoms, medical uncertainties, or health emergencies,
                immediately consult a certified physician or qualified
                healthcare provider.
              </p>

              <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2">
                <span className="inline-flex items-center gap-1 text-[9px] text-[#173f7a]">
                  <CircleCheck size={11} />
                  Non-Prescription OTC Screening
                </span>

                <span className="inline-flex items-center gap-1 text-[9px] text-[#173f7a]">
                  <CircleCheck size={11} />
                  Qualitative hCG Detection
                </span>

                <span className="inline-flex items-center gap-1 text-[9px] text-[#173f7a]">
                  <TriangleAlert size={11} />
                  Emergency Services: Call 112 / Local ER
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

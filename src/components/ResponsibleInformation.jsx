
import {
  BadgeCheck,
  Users,
  Scale,
  ShieldCheck,
  FileCheck2,
} from "lucide-react";

const informationPoints = [
  {
    title: "Every claim is documented",
    description:
      "We never use exaggerated marketing promises. Every statement on sensitivity, accuracy, and procedure matches rigorous product documentation and regulatory filings.",
    icon: BadgeCheck,
  },
  {
    title: "Independent review",
    description:
      "Our informational guides are developed with reproductive health specialists, gynecologists, and clinical embryologists to maintain medical rigor.",
    icon: Users,
  },
  {
    title: "Transparent limitations",
    description:
      "We believe empowering women means being transparent about testing windows, hCG biological curves, and when professional consultation is essential.",
    icon: Scale,
  },
];

export default function ResponsibleInformation() {
  return (
    <section className="bg-[#fcfaff] px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
      <div className="mx-auto max-w-[1200px]">
        <div className="grid grid-cols-1 gap-8 rounded-2xl bg-[#f0f1ff] p-6 sm:p-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-10 lg:p-10">
          {/* Left Content */}
          <div className="flex flex-col justify-center">
            <div className="mb-5 inline-flex w-fit items-center gap-2 rounded-full bg-[#092c60] px-3 py-1.5 text-[9px] font-semibold tracking-wide text-white">
              <ShieldCheck size={12} />
              Scientific Integrity
            </div>

            <h2 className="text-2xl font-semibold tracking-tight text-[#092c60] sm:text-3xl">
              Responsible Information
            </h2>

            <p className="mt-4 max-w-[390px] text-sm leading-6 text-[#626477]">
              In reproductive health, misleading promises can cause
              profound emotional distress. We commit to unwavering
              scientific transparency across every single piece of
              content we produce.
            </p>

            {/* Review Badge */}
            <div className="mt-6 flex items-center gap-3 rounded-lg bg-white/80 p-4">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#fce6f0] text-[#bd2d79]">
                <FileCheck2 size={18} />
              </div>

              <div>
                <p className="text-[11px] font-bold text-[#092c60]">
                  Peer-Validated Content
                </p>
                <p className="mt-0.5 text-[10px] text-[#737386]">
                  Reviewed by qualified healthcare professionals
                </p>
              </div>
            </div>
          </div>

          {/* Right Information Cards */}
          <div className="flex flex-col gap-3">
            {informationPoints.map((point) => {
              const Icon = point.icon;

              return (
                <article
                  key={point.title}
                  className="flex gap-4 rounded-xl bg-[#fcfaff] p-4 transition-all duration-300 hover:shadow-md hover:shadow-[#092c60]/5 sm:p-5"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#e9ecff] text-[#092c60]">
                    <Icon size={16} strokeWidth={1.8} />
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold text-[#092c60]">
                      {point.title}
                    </h3>

                    <p className="mt-1.5 text-[11px] leading-[1.7] text-[#626477]">
                      {point.description}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

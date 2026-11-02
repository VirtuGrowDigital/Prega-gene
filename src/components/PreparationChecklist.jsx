
import {
  ClipboardCheck,
  CheckCircle2,
  PackageCheck,
  Beaker,
  Timer,
  BookOpen,
} from "lucide-react";

const preparationItems = [
  {
    icon: PackageCheck,
    title: "Check the Sealed Foil",
    description:
      "Check that the test pouch is intact and the kit is within its expiry date before use.",
  },
  {
    icon: Beaker,
    title: "Use a Clean Container",
    description:
      "Collect your urine sample in a clean, dry container before beginning the test.",
  },
  {
    icon: Timer,
    title: "Prepare a Timer",
    description:
      "Keep a timer ready to track the waiting period specified in the product instructions.",
  },
  {
    icon: BookOpen,
    title: "Read All Instructions",
    description:
      "Review the complete procedure before opening the pouch. Follow the instructions for sample application and result interpretation.",
  },
];

export default function PreparationChecklist() {
  return (
    <section
      id="preparation"
      className="bg-[#f0f1ff] px-5 py-12 sm:px-8 sm:py-14 lg:py-16"
    >
      <div className="mx-auto max-w-[1100px] rounded-2xl border border-white/80 bg-[#fcfaff] p-5 shadow-[0_4px_12px_rgba(20,35,80,0.05)] sm:p-7 lg:p-8">
        <div className="grid gap-7 lg:grid-cols-[0.95fr_1.4fr] lg:items-center lg:gap-10">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#e9ecff] px-3 py-2 text-[10px] font-semibold text-[#173f7a]">
              <ClipboardCheck size={13} />
              Preparation Protocol
            </div>

            <h2 className="text-[26px] font-semibold leading-tight tracking-[-0.8px] text-[#092c60] sm:text-[32px]">
              Before you begin
            </h2>

            <p className="mt-3 max-w-[410px] text-[12px] leading-[1.8] text-[#626071] sm:text-[13px]">
              Prepare your testing area and review the instructions before
              opening the kit. A clean container, a flat surface, and
              careful timing help you follow the test procedure correctly.
            </p>

            <div className="mt-4 flex items-start gap-2.5 rounded-xl bg-[#eff0ff] p-3.5">
              <CheckCircle2
                size={15}
                className="mt-0.5 shrink-0 text-[#bd2d79]"
              />

              <p className="text-[11px] leading-[1.75] text-[#555779]">
                Check the product instructions for guidance on the
                appropriate time of testing and urine sample collection.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {preparationItems.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="rounded-xl border border-white bg-white p-4 transition duration-300 hover:-translate-y-0.5 hover:shadow-md sm:p-5"
                >
                  <div className="mb-3 flex items-start gap-2.5">
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#f9dce9] text-[#bd2d79]">
                      <CheckCircle2 size={14} />
                    </div>

                    <h3 className="pt-1 text-[12px] font-semibold leading-snug text-[#092c60] sm:text-[13px]">
                      {item.title}
                    </h3>
                  </div>

                  <p className="text-[11px] leading-[1.8] text-[#626071]">
                    {item.description}
                  </p>

                  <Icon
                    size={14}
                    aria-hidden="true"
                    className="mt-3 text-[#bd2d79]"
                  />
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

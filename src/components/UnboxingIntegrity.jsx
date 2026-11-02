
import {
  TestTube,
  ShieldCheck,
  Pipette,
  BookOpen,
} from "lucide-react";

const components = [
  {
    number: "01",
    icon: TestTube,
    title: "Prega Gene Test Wand",
    description:
      "The test device is designed to detect hCG in a urine sample and display the result in the designated reading window.",
    label: "Single-Use Test Device",
  },
  {
    number: "02",
    icon: ShieldCheck,
    title: "Protective Cap",
    description:
      "The cap helps cover the absorbent tip when required by the product instructions, supporting convenient handling of the test wand.",
    label: "Protective Design",
  },
  {
    number: "03",
    icon: Pipette,
    title: "Precision Dropper",
    description:
      "Where the collection-cup method is specified, the dropper helps transfer the urine sample as directed in the product instructions.",
    label: "Sample Handling",
  },
  {
    number: "04",
    icon: BookOpen,
    title: "Quick-Start Guide",
    description:
      "Step-by-step instructions explain the testing procedure, result interpretation, and important precautions for using the kit correctly.",
    label: "Clear Instructions",
  },
];

export default function UnboxingIntegrity() {
  return (
    <section
      id="unboxing"
      className="bg-[#f0f1ff] px-5 py-12 sm:px-8 sm:py-14 lg:py-14"
    >
      <div className="mx-auto max-w-[1100px]">
        {/* Section heading */}
        <div className="mb-7 grid gap-4 md:grid-cols-[1fr_0.65fr] md:items-end">
          <div>
            <p className="mb-2 text-[10px] font-bold uppercase tracking-[1.5px] text-[#bd2d79]">
              Unboxing &amp; Integrity
            </p>

            <h2 className="text-[25px] font-semibold leading-tight tracking-[-0.8px] text-[#092c60] sm:text-[30px]">
              Everything you need to get started
            </h2>
          </div>

          <p className="max-w-[430px] text-[12px] leading-[1.75] text-[#626071] sm:text-[13px] md:justify-self-end">
            Each component serves a practical purpose in helping you
            prepare, perform, and read your home pregnancy test according
            to the product instructions.
          </p>
        </div>

        {/* Component cards */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {components.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.number}
                className="group flex min-h-[205px] flex-col rounded-xl border border-white/90 bg-white p-5 shadow-[0_2px_8px_rgba(20,35,80,0.025)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(20,35,80,0.07)]"
              >
                <p className="mb-3 text-[9px] font-bold uppercase tracking-[1.2px] text-[#bd2d79]">
                  Component {item.number}
                </p>

                <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-lg bg-[#e8ebff] text-[#173f7a] transition group-hover:bg-[#f9dce9] group-hover:text-[#bd2d79]">
                  <Icon size={16} strokeWidth={1.8} />
                </div>

                <h3 className="mb-2 text-[14px] font-semibold leading-snug text-[#092c60]">
                  {item.title}
                </h3>

                <p className="text-[11px] leading-[1.75] text-[#626071] sm:text-xs">
                  {item.description}
                </p>

                <div className="mt-auto flex items-center gap-2 pt-5 text-[9px] font-semibold text-[#173f7a]">
                  <Icon size={12} className="shrink-0 text-[#bd2d79]" />
                  {item.label}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

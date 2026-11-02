
import { FlaskConical, Heart, Microscope } from "lucide-react";

const overviewCards = [
  {
    icon: FlaskConical,
    title: "What It Is",
    description:
      "A home pregnancy test kit designed to detect hCG in urine and help you check for a possible pregnancy.",
    label: "Urine hCG Detection",
    iconStyle: "bg-[#e8ebff] text-[#173f7a]",
  },
  {
    icon: Heart,
    title: "Intended Purpose",
    description:
      "Designed to support convenient, private pregnancy testing at home, helping you take an informed next step based on your result.",
    label: "Convenient Home Testing",
    iconStyle: "bg-[#f9dce9] text-[#bd2d79]",
  },
  {
    icon: Microscope,
    title: "How It Works",
    description:
      "The test uses an immunoassay to detect hCG in a urine sample. The result window displays lines that help you interpret the test according to the instructions.",
    label: "hCG Immunoassay Technology",
    iconStyle: "bg-[#e8ebff] text-[#173f7a]",
  },
];

export default function ProductOverview() {
  return (
    <section
      id="the-test"
      className="bg-[#f0f1ff] px-5 py-12 sm:px-8 sm:py-14 lg:py-14"
    >
      <div className="mx-auto max-w-[1100px]">
        {/* Section heading */}
        <div className="mb-7 max-w-[650px]">
          <p className="mb-2 text-[10px] font-bold uppercase tracking-[1.5px] text-[#bd2d79]">
            Product Overview
          </p>

          <h2 className="max-w-[560px] text-[25px] font-semibold leading-[1.18] tracking-[-0.8px] text-[#092c60] sm:text-[30px]">
            Designed around one fundamental need: clarity.
          </h2>

          <p className="mt-3 max-w-[620px] text-[13px] leading-[1.75] text-[#5b5969] sm:text-sm">
            From understanding how the test works to reading your result,
            Prega Gene helps make home pregnancy testing easier to follow,
            with clear instructions at every step.
          </p>
        </div>

        {/* Overview cards */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {overviewCards.map((card) => {
            const Icon = card.icon;

            return (
              <article
                key={card.title}
                className="group flex min-h-[205px] flex-col rounded-xl border border-white/90 bg-white p-5 shadow-[0_2px_8px_rgba(20,35,80,0.025)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(20,35,80,0.07)] sm:p-6"
              >
                <div
                  className={`mb-4 flex h-9 w-9 items-center justify-center rounded-lg ${card.iconStyle}`}
                >
                  <Icon size={17} strokeWidth={1.8} />
                </div>

                <h3 className="mb-2 text-[15px] font-semibold tracking-[-0.2px] text-[#092c60]">
                  {card.title}
                </h3>

                <p className="text-[12px] leading-[1.75] text-[#626071] sm:text-[13px]">
                  {card.description}
                </p>

                <div className="mt-auto flex items-center gap-2 pt-5 text-[10px] font-semibold text-[#173f7a]">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#bd2d79]" />
                  {card.label}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

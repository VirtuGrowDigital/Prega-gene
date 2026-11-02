
import {
  ClipboardCheck,
  ScanLine,
  House,
  BookOpen,
} from "lucide-react";

const features = [
  {
    icon: ClipboardCheck,
    title: "Easy to Follow",
    description:
      "Clear, step-by-step instructions guide you through the pregnancy testing process, from preparing the test to reading your result.",
    iconStyle: "bg-[#e8ebff] text-[#173f7a]",
  },
  {
    icon: ScanLine,
    title: "Clear Result Window",
    description:
      "A dedicated result window displays the Control (C) and Test (T) lines, helping you identify and interpret the result.",
    iconStyle: "bg-[#f9dce9] text-[#bd2d79]",
  },
  {
    icon: House,
    title: "Convenient Home Testing",
    description:
      "A compact, single-use format supports convenient pregnancy testing at home, with instructions to guide you through the process.",
    iconStyle: "bg-[#e8ebff] text-[#173f7a]",
  },
  {
    icon: BookOpen,
    title: "Straightforward Instructions",
    description:
      "Easy-to-understand guidance explains how to use the test, when to read the result, and what to do if the result is invalid.",
    iconStyle: "bg-[#e8ebff] text-[#173f7a]",
  },
];

export default function ThoughtfulEngineering() {
  return (
    <section
      id="learn"
      className="bg-[#fcfaff] px-5 py-12 sm:px-8 sm:py-14 lg:py-14"
    >
      <div className="mx-auto max-w-[1100px]">
        {/* Centered heading */}
        <div className="mb-7 text-center">
          <p className="mb-2 text-[10px] font-bold uppercase tracking-[1.5px] text-[#bd2d79]">
            Thoughtful Engineering
          </p>

          <h2 className="text-[23px] font-semibold leading-tight tracking-[-0.7px] text-[#092c60] sm:text-[29px]">
            Designed for a simpler testing experience
          </h2>
        </div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <article
                key={feature.title}
                className="group min-h-[190px] rounded-xl border border-white bg-white p-5 shadow-[0_2px_8px_rgba(20,35,80,0.025)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(20,35,80,0.07)] sm:p-5"
              >
                <div
                  className={`mb-4 flex h-9 w-9 items-center justify-center rounded-lg ${feature.iconStyle}`}
                >
                  <Icon size={17} strokeWidth={1.8} />
                </div>

                <h3 className="mb-2 text-[14px] font-semibold leading-snug tracking-[-0.2px] text-[#092c60]">
                  {feature.title}
                </h3>

                <p className="text-[12px] leading-[1.75] text-[#626071]">
                  {feature.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

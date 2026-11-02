
import {
  Minus,
  Clock3,
  Ban,
  Thermometer,
} from "lucide-react";

const reminders = [
  {
    number: "01",
    title: "Use a Clean Container",
    description:
      "Collect your urine sample in a clean, dry container to follow the recommended sample collection procedure.",
    Icon: Minus,
  },
  {
    number: "02",
    title: "Follow the Reading Window",
    description:
      "Wait for the time specified in the product instructions. Do not interpret the result outside the recommended reading window.",
    Icon: Clock3,
  },
  {
    number: "03",
    title: "Single-Use Device",
    description:
      "Use each test device only once. Do not reuse a wand after the urine sample has been applied.",
    Icon: Ban,
  },
  {
    number: "04",
    title: "Store Correctly",
    description:
      "Store the unopened test kit according to the temperature and storage conditions printed on its packaging.",
    Icon: Thermometer,
  },
];

export default function ImportantReminders() {
  return (
    <section
      id="important-reminders"
      className="bg-[#fcfaff] px-4 py-14 sm:px-6 sm:py-16 lg:px-8"
    >
      <div className="mx-auto max-w-[1200px]">
        {/* Section heading */}
        <div className="mx-auto mb-8 max-w-2xl text-center sm:mb-10">
          <p className="mb-2 text-[9px] font-bold uppercase tracking-[0.2em] text-[#bd2d79] sm:text-[10px]">
            Quality &amp; Precision
          </p>

          <h2 className="text-2xl font-semibold tracking-tight text-[#092c60] sm:text-3xl lg:text-[36px]">
            Important reminders for accurate testing
          </h2>

          <p className="mt-2 text-xs leading-5 text-[#5d5b6b] sm:text-sm sm:leading-6">
            Follow these four precautions when using your Prega Gene pregnancy
            test kit.
          </p>
        </div>

        {/* Reminder cards */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4">
          {reminders.map(({ number, title, description, Icon }) => (
            <article
              key={number}
              className="group flex min-h-[205px] flex-col rounded-xl border border-[#efebf6] bg-white p-4 transition duration-200 hover:-translate-y-1 hover:border-[#e5c6db] hover:shadow-[0_8px_24px_rgba(9,44,96,0.06)] sm:p-5"
            >
              <div className="mb-4 flex h-8 w-8 items-center justify-center rounded-xl bg-[#e9ebff] text-[#092c60] transition group-hover:bg-[#f9e6f0] group-hover:text-[#bd2d79]">
                <Icon size={16} strokeWidth={1.8} />
              </div>

              <h3 className="text-sm font-semibold leading-5 text-[#092c60]">
                {title}
              </h3>

              <p className="mt-2 flex-1 text-[11px] leading-[1.7] text-[#5d5b6b] sm:text-xs">
                {description}
              </p>

              <p className="mt-4 text-[9px] font-bold uppercase tracking-wide text-[#bd2d79]">
                Rule {number}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

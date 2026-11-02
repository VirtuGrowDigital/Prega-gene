
const journeySteps = [
  {
    number: "01",
    label: "STEP 1",
    title: "Question",
    description:
      "You have an early question or wonder about your timing. You need instant reassurance, not alarmist web search rabbit holes.",
  },
  {
    number: "02",
    label: "STEP 2",
    title: "Information",
    description:
      "Clear, medically reviewed guides help you know when and how to test based on your cycle and symptoms.",
  },
  {
    number: "03",
    label: "STEP 3",
    title: "The Test",
    description:
      "An ergonomic, high-sensitivity test designed for comfortable, error-resistant sampling with a wide-grip splash guard.",
  },
  {
    number: "04",
    label: "STEP 4",
    title: "Result",
    description:
      "Clear, high-contrast readout paired with our digital result interpretation guide, eliminating guesswork.",
  },
  {
    number: "05",
    label: "STEP 5",
    title: "Next Step",
    description:
      "Empathetic, verified guidance on where to go from here—calmly, responsibly, and without judgment.",
  },
];

export default function UserJourney() {
  return (
    <section className="bg-[#eef0ff] px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
      <div className="mx-auto max-w-[1200px]">
        {/* Heading */}
        <div className="mx-auto mb-10 max-w-[600px] text-center">
          <span className="mb-3 block text-[10px] font-bold uppercase tracking-[0.16em] text-[#bd2d79]">
            The Prega Gene Experience
          </span>

          <h2 className="text-2xl font-semibold leading-tight tracking-tight text-[#092c60] sm:text-3xl">
            Support from your very first question.
          </h2>

          <p className="mx-auto mt-3 max-w-[540px] text-sm leading-6 text-[#666477]">
            We designed every step of testing to help you feel confident
            before, during and after.
          </p>
        </div>

        {/* Journey Steps */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {journeySteps.map((step, index) => (
            <article
              key={step.number}
              className="group min-h-[220px] rounded-xl bg-[#fcfaff] p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#092c60]/5 sm:p-5"
            >
              {/* Step Number */}
              <div
                className={`mb-5 flex h-10 w-10 items-center justify-center rounded-full text-xs font-bold transition-colors duration-300 ${
                  index === 2
                    ? "bg-[#bd2d79] text-white"
                    : "bg-[#e7eaff] text-[#092c60] group-hover:bg-[#092c60] group-hover:text-white"
                }`}
              >
                {step.number}
              </div>

              {/* Step Label */}
              <span className="mb-1 block text-[9px] font-bold uppercase tracking-[0.12em] text-[#bd2d79]">
                {step.label}
              </span>

              {/* Title */}
              <h3 className="mb-2 text-base font-semibold text-[#092c60]">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-[11px] leading-[1.7] text-[#626477]">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

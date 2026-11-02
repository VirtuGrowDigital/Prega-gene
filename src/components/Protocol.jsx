
import { ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Prepare",
    description:
      "Check the expiry date and read the instructions before opening the sealed pouch. Ensure the test is ready for use as directed.",
    numberStyle: "bg-[#092c60]",
  },
  {
    number: "02",
    title: "Test",
    description:
      "Collect a urine sample or use the midstream method, depending on the procedure specified in your product instructions. Follow the directions carefully.",
    numberStyle: "bg-[#bd2d79]",
  },
  {
    number: "03",
    title: "Read",
    description:
      "Place the test as instructed and read the result within the specified time window. Do not interpret the result after the stated time limit.",
    numberStyle: "bg-[#092c60]",
  },
];

export default function Protocol() {
  return (
    <section
      id="how-to-use"
      className="bg-[#fcfaff] px-5 py-12 sm:px-8 sm:py-14 lg:py-14"
    >
      <div className="mx-auto max-w-[1100px]">
        {/* Section heading */}
        <div className="mb-8 text-center">
          <p className="mb-2 text-[10px] font-bold uppercase tracking-[1.5px] text-[#bd2d79]">
            Protocol
          </p>

          <h2 className="text-[25px] font-semibold leading-tight tracking-[-0.8px] text-[#092c60] sm:text-[30px]">
            How to use the Prega Gene pregnancy test kit
          </h2>

          <p className="mx-auto mt-3 max-w-[620px] text-[12px] leading-[1.75] text-[#626071] sm:text-[13px]">
            Follow the instructions supplied with your kit for the correct
            testing procedure and result-reading time.
          </p>
        </div>

        {/* Three steps */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {steps.map((step) => (
            <article
              key={step.number}
              className="min-h-[180px] rounded-xl border border-white bg-white p-5 shadow-[0_2px_8px_rgba(20,35,80,0.025)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(20,35,80,0.07)] sm:p-6"
            >
              <div
                className={`mb-4 flex h-8 w-8 items-center justify-center rounded-full text-[11px] font-bold text-white ${step.numberStyle}`}
              >
                {step.number}
              </div>

              <h3 className="mb-2 text-[15px] font-semibold text-[#092c60]">
                {step.title}
              </h3>

              <p className="text-[12px] leading-[1.8] text-[#626071] sm:text-[13px]">
                {step.description}
              </p>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-7 flex justify-center">
          <a
            href="#learn"
            className="inline-flex items-center gap-2 text-[11px] font-semibold text-[#bd2d79] transition hover:text-[#a92168]"
          >
            View Step-by-Step Instructions
            <ArrowRight size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}

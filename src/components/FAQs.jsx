
import { ArrowRight, ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How early can I use the Prega Gene test?",
    answer:
      "The appropriate testing time depends on the test instructions and your menstrual cycle. Testing too early may result in hCG levels being below the test's detection threshold. Follow the product guidance, and consider retesting if your period is delayed.",
  },
  {
    question: "What does a faint test line mean?",
    answer:
      "A faint Test (T) line may indicate a positive result if it appears within the specified reading time and the Control (C) line is present. Follow the product instructions and consult a healthcare professional if you are unsure.",
  },
  {
    question: "Can medications affect the pregnancy test result?",
    answer:
      "Some medicines containing hCG may affect pregnancy test results. If you are taking medication or are uncertain about your result, consult a healthcare professional.",
  },
  {
    question: "What should I do if the test result is invalid?",
    answer:
      "If the Control (C) line does not appear, the test is invalid. Repeat the procedure with a new test kit and follow all instructions carefully.",
  },
  {
    question: "How should I dispose of the test wand after reading?",
    answer:
      "Dispose of the used test device and any sample-contact components according to the product instructions and applicable local waste-disposal guidance.",
  },
];

export default function FAQs() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <section
      id="faq"
      className="bg-[#f0f1ff] px-5 py-12 sm:px-8 sm:py-14 lg:py-16"
    >
      <script type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </script>

      <div className="mx-auto max-w-[700px]">
        {/* Heading */}
        <div className="mb-7 text-center">
          <p className="mb-2 text-[10px] font-bold uppercase tracking-[1.5px] text-[#bd2d79]">
            Frequently Asked Questions
          </p>

          <h2 className="text-[25px] font-semibold leading-tight tracking-[-0.8px] text-[#092c60] sm:text-[30px]">
            Pregnancy test questions, answered clearly
          </h2>

          <p className="mx-auto mt-3 max-w-[600px] text-[12px] leading-[1.75] text-[#626071] sm:text-[13px]">
            Find answers to common questions about using a home pregnancy
            test kit and understanding your result.
          </p>
        </div>

        {/* FAQ accordions */}
        <div className="space-y-2">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group overflow-hidden rounded-xl border border-white bg-white"
            >
              <summary className="flex min-h-[44px] cursor-pointer list-none items-center justify-between gap-4 px-4 py-3 text-[12px] font-medium text-[#092c60] transition hover:bg-[#faf9ff] sm:text-[13px] [&::-webkit-details-marker]:hidden">
                <span>{faq.question}</span>

                <ChevronDown
                  size={15}
                  className="shrink-0 text-[#123b73] transition-transform duration-200 group-open:rotate-180"
                />
              </summary>

              <div className="border-t border-[#f0edf7] px-4 py-4">
                <p className="text-[12px] leading-[1.8] text-[#626071] sm:text-[13px]">
                  {faq.answer}
                </p>
              </div>
            </details>
          ))}
        </div>

        {/* View All FAQs */}
        <div className="mt-6 flex justify-center">
          <a
            href="#faq"
            className="inline-flex items-center gap-2 text-[11px] font-semibold text-[#092c60] transition hover:text-[#bd2d79]"
          >
            View All FAQs
            <ArrowRight size={13} />
          </a>
        </div>
      </div>
    </section>
  );
}

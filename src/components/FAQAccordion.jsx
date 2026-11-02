
import { useMemo } from "react";
import { Link } from "react-router-dom";
import {
  ChevronDown,
  Lightbulb,
  Clock3,
  ClipboardList,
  ShieldCheck,
  ShoppingBag,
} from "lucide-react";

const faqGroups = [
  {
    category: "Before Testing",
    icon: Clock3,
    questions: [
      {
        question: "When should I take a pregnancy test?",
        answer:
          "For the clearest result, test with your first morning urine, from the day of your missed period. Prega Gene can be used up to 6 days earlier, but testing early may give a negative result if hCG is still low.",
        tip:
          "If your cycles are irregular, count from the longest cycle you have experienced in the past six months before deciding when to test.",
      },
      {
        question: "Do I need to restrict fluid intake before testing?",
        answer:
          "Drink normally, but avoid drinking large amounts of fluid just before testing. Diluted urine can lower hCG concentration, which is why first morning urine is recommended.",
      },
    ],
  },
  {
    category: "Using Prega Gene",
    icon: ClipboardList,
    questions: [
      {
        question: "How do I use Prega Gene?",
        answer:
          "Collect urine in a clean, dry container. Remove the cap, dip the absorbent tip for the duration and to the level specified in your kit instructions, replace the cap, and place the test flat on a clean surface.",
        link: {
          label: "See the full 8-step guide",
          to: "/how-to-use",
        },
      },
      {
        question: "How long should I wait before reading the result?",
        answer:
          "Wait for the reading time specified in your Prega Gene kit instructions. Do not interpret the result after the recommended reading window, as the appearance of the test may change.",
      },
    ],
  },
  {
    category: "Understanding Results",
    icon: ShieldCheck,
    questions: [
      {
        question: "How do I read my pregnancy test result?",
        answer:
          "Check the Control (C) and Test (T) regions within the specified reading window. Two coloured lines, one at C and one at T, indicate a positive result. One line at C indicates a negative result. If the C line is absent, the test is invalid.",
        link: {
          label: "Understand your results",
          to: "/understand-results",
        },
      },
      {
        question: "What does a positive pregnancy test result mean?",
        answer:
          "Two coloured lines, one at C and one at T, indicate that hCG has been detected. A faint T line may also indicate a positive result if it appears within the specified reading window and the C line is present. Consult a healthcare professional for guidance and confirmation.",
      },
      {
        question: "What does a negative pregnancy test result mean?",
        answer:
          "One coloured line at C with no line at T means hCG was not detected at the test's detection threshold. If you tested early or your period remains delayed, repeat the test according to the product instructions or consult a healthcare professional.",
      },
      {
        question: "What does an invalid pregnancy test result mean?",
        answer:
          "If there is no visible line at C, the result is invalid, whether or not a T line appears. Discard the used device and repeat the procedure with a new Prega Gene test kit, following the instructions carefully.",
      },
    ],
  },
  {
    category: "Product & Safety",
    icon: ShieldCheck,
    questions: [
      {
        question: "How should I store the Prega Gene test kit?",
        answer:
          "Store the unopened kit according to the temperature and storage conditions printed on the packaging. Keep it sealed in its foil pouch until use, and do not use it after the expiry date.",
      },
      {
        question: "Can medications affect my pregnancy test result?",
        answer:
          "Some medicines containing hCG, such as certain fertility treatments, may affect pregnancy test results. Check the product leaflet and consult a pharmacist or healthcare professional if you take medication and are unsure about your result.",
      },
    ],
  },
  {
    category: "Purchase & Delivery",
    icon: ShoppingBag,
    questions: [
      {
        question: "Where can I buy Prega Gene?",
        answer:
          "Visit our Where to Buy page or use the Pharmacy Locator to find a stockist near you.",
        link: {
          label: "Find where to buy",
          to: "/#where-to-buy",
        },
      },
      {
        question: "Is the shipping packaging completely discreet?",
        answer:
          "Orders are shipped in plain packaging without product details displayed on the outside, helping keep your purchase private.",
      },
    ],
  },
];

export default function FAQAccordion({
  searchQuery = "",
  activeCategory = "All Questions",
}) {
  const filteredGroups = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return faqGroups
      .filter(
        (group) =>
          activeCategory === "All Questions" ||
          group.category === activeCategory
      )
      .map((group) => ({
        ...group,
        questions: group.questions.filter((faq) => {
          if (!query) return true;

          return (
            faq.question.toLowerCase().includes(query) ||
            faq.answer.toLowerCase().includes(query) ||
            group.category.toLowerCase().includes(query)
          );
        }),
      }))
      .filter((group) => group.questions.length > 0);
  }, [searchQuery, activeCategory]);

  const totalQuestions = filteredGroups.reduce(
    (total, group) => total + group.questions.length,
    0
  );

  return (
    <section className="bg-[#fcfaff] px-5 py-12 sm:px-8 sm:py-16">
      <div className="mx-auto max-w-[900px]">

        {/* Section Heading */}
        <div className="mb-9">
          <p className="mb-2 text-[9px] font-bold uppercase tracking-[1.4px] text-[#bd2d79]">
            Knowledge Base
          </p>

          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <h2 className="text-[25px] font-semibold leading-tight tracking-tight text-[#092c60] sm:text-[32px]">
                Frequently Asked Questions
              </h2>

              <p className="mt-2 max-w-[550px] text-xs leading-6 text-[#626071] sm:text-[13px]">
                Everything you need to know about pregnancy testing,
                using Prega Gene, and understanding your results.
              </p>
            </div>

            <span className="rounded-full bg-[#e9ebff] px-3 py-1.5 text-[9px] font-semibold text-[#092c60]">
              {totalQuestions} {totalQuestions === 1 ? "Question" : "Questions"}
            </span>
          </div>
        </div>

        {/* FAQ Groups */}
        {filteredGroups.length > 0 ? (
          <div className="space-y-8">
            {filteredGroups.map((group, groupIndex) => {
              const GroupIcon = group.icon;

              return (
                <div key={group.category}>

                  {/* Category Heading */}
                  <div className="mb-3 flex items-center justify-between border-b border-[#eae8f3] pb-3">
                    <div className="flex items-center gap-2.5">
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#e9ebff] text-[#092c60]">
                        <GroupIcon size={15} />
                      </span>

                      <h3 className="text-sm font-semibold text-[#092c60] sm:text-base">
                        {group.category}
                      </h3>
                    </div>

                    <span className="rounded-full bg-[#f0f1ff] px-2.5 py-1 text-[9px] text-[#626071]">
                      {group.questions.length} articles
                    </span>
                  </div>

                  {/* Questions */}
                  <div className="space-y-2">
                    {group.questions.map((faq, questionIndex) => {
                      const isFirst =
                        groupIndex === 0 && questionIndex === 0;

                      return (
                        <details
                          key={faq.question}
                          open={isFirst}
                          className="group overflow-hidden rounded-xl border border-[#eeeaf5] bg-white shadow-[0_2px_8px_rgba(9,44,96,0.025)] transition-all duration-200 hover:border-[#e3d9ec] hover:shadow-[0_5px_16px_rgba(9,44,96,0.05)]"
                        >
                          <summary className="flex min-h-[54px] cursor-pointer list-none items-center justify-between gap-4 px-4 py-3.5 text-[12px] font-semibold text-[#092c60] marker:hidden sm:px-5 sm:text-[13px] [&::-webkit-details-marker]:hidden">
                            <span className="flex items-start gap-3">
                              <span className="mt-0.5 text-[10px] font-bold text-[#bd2d79]">
                                Q
                              </span>

                              <span>{faq.question}</span>
                            </span>

                            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#f0f1ff] text-[#092c60] transition-colors group-open:bg-[#f9e0ed] group-open:text-[#bd2d79]">
                              <ChevronDown
                                size={14}
                                className="transition-transform duration-200 group-open:rotate-180"
                              />
                            </span>
                          </summary>

                          <div className="border-t border-[#f0edf7] px-4 pb-4 pt-3.5 sm:px-5">

                            <p className="pl-6 text-[11px] leading-[1.85] text-[#626071] sm:text-xs">
                              {faq.answer}
                            </p>

                            {/* Pro Tip */}
                            {faq.tip && (
                              <div className="ml-6 mt-4 flex items-start gap-2.5 rounded-lg border border-[#f5d8e8] bg-[#fff5fa] p-3">
                                <Lightbulb
                                  size={15}
                                  className="mt-0.5 shrink-0 text-[#bd2d79]"
                                />

                                <div>
                                  <p className="text-[10px] font-bold text-[#092c60]">
                                    Pro Tip
                                  </p>

                                  <p className="mt-1 text-[10px] leading-[1.7] text-[#626071]">
                                    {faq.tip}
                                  </p>
                                </div>
                              </div>
                            )}

                            {/* Related Link */}
                            {faq.link && (
                              <div className="ml-6 mt-4">
                                <Link
                                  to={faq.link.to}
                                  className="inline-flex items-center gap-2 rounded-full bg-[#f0f1ff] px-3 py-2 text-[10px] font-semibold text-[#092c60] transition hover:bg-[#e5e8ff] hover:text-[#bd2d79]"
                                >
                                  {faq.link.label}
                                  <span aria-hidden="true">→</span>
                                </Link>
                              </div>
                            )}
                          </div>
                        </details>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="rounded-xl border border-[#eeeaf5] bg-white px-5 py-12 text-center">
            <SearchIcon />
            <h3 className="mt-3 text-base font-semibold text-[#092c60]">
              No matching questions found
            </h3>
            <p className="mt-2 text-xs leading-6 text-[#626071]">
              Try another search term or select a different category.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

function SearchIcon() {
  return (
    <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-[#f0f1ff] text-[#092c60]">
      <ClipboardList size={19} />
    </div>
  );
}

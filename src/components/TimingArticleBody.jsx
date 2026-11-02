
import {
  List,
  FlaskConical,
  ArrowUpRight,
  ShieldCheck,
  Clock3,
  Lightbulb,
  CheckCircle2,
  BookOpen,
  Heart,
  ExternalLink,
} from "lucide-react";

const articleSections = [
  { id: "science-hcg", label: "01. The Science of hCG" },
  { id: "earliest-window", label: "02. The Earliest Reliable Window" },
  { id: "accuracy-matrix", label: "03. Day-by-Day Accuracy Matrix" },
  { id: "morning-urine", label: "04. First Morning Urine Factors" },
  { id: "timing-faqs", label: "05. Clinical Timing FAQs" },
];

const timingData = [
  {
    window: "5 Days Before Missed Period",
    hcg: "~5 to 15 mIU/mL",
    sensitivity: "76% – 82%",
    action: "Use first morning urine; retest in 48 hours if negative.",
  },
  {
    window: "3 Days Before Missed Period",
    hcg: "~20 to 50 mIU/mL",
    sensitivity: "89% – 93%",
    action: "A faint line may appear. Follow the kit's reading instructions.",
  },
  {
    window: "Day of Missed Period",
    hcg: ">50 to 100 mIU/mL",
    sensitivity: ">99%",
    action: "A more reliable time to test at home.",
    highlight: true,
  },
  {
    window: "1 Week After Missed Period",
    hcg: ">500 mIU/mL",
    sensitivity: ">99.9%",
    action: "Follow the product instructions for testing.",
  },
];

const timingFaqs = [
  {
    question: "Can I test in the evening if I hold my urine?",
    answer:
      "Yes. However, urine may be more diluted later in the day. If you test in the evening and receive a negative result, consider retesting with first morning urine, especially if you are testing early.",
  },
  {
    question: "What if I see a very faint second line?",
    answer:
      "A faint coloured Test (T) line, together with a visible Control (C) line, may indicate a positive result if it appears within the specified reading time. Do not interpret the test after the reading window. Follow the kit instructions and consult a healthcare professional if you are unsure.",
  },
  {
    question: "Can common medications cause a false result?",
    answer:
      "Most common medicines do not affect hCG pregnancy tests. Fertility treatments containing hCG may affect the result. Speak with your doctor or pharmacist if you are unsure about a medicine.",
  },
  {
    question: "What if my period is late but my test is still negative?",
    answer:
      "You may have tested too early or ovulated later than expected. Consider repeating the test after 48–72 hours. If your period remains delayed or you have concerns, consult a healthcare professional.",
  },
];

function SectionHeading({ number, children, id }) {
  return (
    <div id={id} className="mb-4 scroll-mt-28">
      <h2 className="flex items-start gap-2.5 text-[20px] font-semibold leading-tight tracking-[-0.5px] text-[#092c60] sm:text-[24px]">
        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#e9edff] text-[9px] font-bold text-[#092c60]">
          {number}
        </span>
        {children}
      </h2>
    </div>
  );
}

function ResourceCard({ icon: Icon, eyebrow, title, description, link, href }) {
  return (
    <a
      href={href}
      className="group block rounded-xl bg-[#f0f1ff] p-4 transition hover:bg-[#e9ebff]"
    >
      <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-lg bg-white text-[#092c60]">
        <Icon size={16} />
      </div>

      <p className="mb-1 text-[8px] font-semibold uppercase tracking-[0.7px] text-[#bd2d79]">
        {eyebrow}
      </p>

      <h3 className="text-[13px] font-semibold text-[#092c60]">
        {title}
      </h3>

      <p className="mt-1.5 text-[10px] leading-[1.7] text-[#626071]">
        {description}
      </p>

      <span className="mt-3 inline-flex items-center gap-1 text-[9px] font-semibold text-[#bd2d79]">
        {link}
        <ArrowUpRight size={11} />
      </span>
    </a>
  );
}

export default function TimingArticleBody() {
  return (
    <section className="bg-[#fcfaff] px-5 pb-14 sm:px-8 lg:pb-20">
      <div className="mx-auto grid max-w-[1120px] grid-cols-1 items-start gap-8 lg:grid-cols-[210px_minmax(0,1fr)] lg:gap-8">

        {/* LEFT SIDEBAR */}
        <aside className="space-y-4 lg:sticky lg:top-24">

          {/* On This Page */}
          <div className="rounded-xl border border-[#eeecf7] bg-white p-4">
            <h3 className="mb-4 flex items-center gap-2 text-[12px] font-semibold text-[#092c60]">
              <List size={14} />
              On This Page
            </h3>

            <nav className="space-y-3">
              {articleSections.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="block text-[9px] text-[#626071] transition hover:translate-x-1 hover:text-[#bd2d79]"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          <ResourceCard
            icon={FlaskConical}
            eyebrow="Patient Resource"
            title="Need Help Decoding?"
            description="Use our interactive visual guide to compare and understand your result."
            link="Launch Result Decoder"
            href="/understand-results"
          />

          <ResourceCard
            icon={BookOpen}
            eyebrow="Step-by-Step Guide"
            title="How to Use Prega Gene"
            description="A simple guide to testing with clear, step-by-step visual instructions."
            link="View 3-Step Walkthrough"
            href="/how-to-use"
          />

          {/* Medical Note */}
          <div className="rounded-xl bg-[#e9edff] p-4">
            <div className="flex items-start gap-2">
              <ShieldCheck
                size={14}
                className="mt-0.5 shrink-0 text-[#092c60]"
              />

              <p className="text-[9px] leading-[1.8] text-[#626071]">
                Every body and menstrual cycle is different. If you
                experience persistent cycle irregularity or unexpected
                symptoms, consult your healthcare provider.
              </p>
            </div>
          </div>
        </aside>

        {/* MAIN ARTICLE CONTENT */}
        <article className="min-w-0">

          {/* INTRODUCTION */}
          <div className="mb-9">
            <p className="text-[12px] leading-[1.9] text-[#464454] sm:text-[13px]">
              The window between suspected conception and a missed
              menstrual cycle can be one of the most emotionally charged
              periods in reproductive healthcare. Whether you are actively
              trying to conceive or waiting with anxious anticipation, the
              instinctive question is universal:
              <span className="font-medium text-[#092c60]">
                {" "}How soon can I take a pregnancy test and truly trust the result?
              </span>
            </p>

            <p className="mt-4 text-[12px] leading-[1.9] text-[#626071] sm:text-[13px]">
              Modern home pregnancy tests are designed to detect human
              chorionic gonadotropin (hCG) in urine. But even sensitive
              tests depend on the timing of implantation and the
              concentration of this hormone. Testing too early can result
              in a negative reading even when pregnancy has occurred.
              Understanding how hCG develops can help you choose a more
              appropriate testing time.
            </p>
          </div>

          {/* SECTION 1: SCIENCE OF HCG */}
          <section className="mb-10">
            <SectionHeading number="1" id="science-hcg">
              Understanding the Science: The Role of hCG
            </SectionHeading>

            <p className="text-[11px] leading-[1.9] text-[#464454] sm:text-[12px]">
              After fertilisation, the developing embryo travels towards
              the uterus and may implant in the uterine lining, commonly
              around 6 to 12 days after ovulation. Following implantation,
              the body begins producing human chorionic gonadotropin (hCG).
            </p>

            <p className="mt-3 text-[11px] leading-[1.9] text-[#626071] sm:text-[12px]">
              hCG enters the bloodstream and is subsequently excreted
              through urine. In early pregnancy, hCG levels generally
              increase rapidly, although the rate of increase varies
              between individuals and pregnancies.
            </p>

            {/* STAT CARDS */}
            <div className="mt-5 grid grid-cols-1 gap-2 sm:grid-cols-3">

              <div className="rounded-xl bg-[#f0f1ff] p-4">
                <p className="text-[8px] font-semibold uppercase tracking-[0.7px] text-[#bd2d79]">
                  Implantation
                </p>
                <p className="mt-1 text-[27px] font-semibold leading-none text-[#092c60]">
                  6–12
                </p>
                <p className="mt-2 text-[9px] leading-[1.6] text-[#626071]">
                  Days after ovulation is a commonly cited implantation
                  window.
                </p>
              </div>

              <div className="rounded-xl bg-[#f0f1ff] p-4">
                <p className="text-[8px] font-semibold uppercase tracking-[0.7px] text-[#bd2d79]">
                  Doubling Interval
                </p>
                <p className="mt-1 text-[27px] font-semibold leading-none text-[#092c60]">
                  48–72h
                </p>
                <p className="mt-2 text-[9px] leading-[1.6] text-[#626071]">
                  hCG may rise substantially over this period in early
                  pregnancy.
                </p>
              </div>

              <div className="rounded-xl bg-[#f0f1ff] p-4">
                <p className="text-[8px] font-semibold uppercase tracking-[0.7px] text-[#bd2d79]">
                  Test Sensitivity
                </p>
                <p className="mt-1 text-[27px] font-semibold leading-none text-[#092c60]">
                  10 <span className="text-[14px]">mIU/mL</span>
                </p>
                <p className="mt-2 text-[9px] leading-[1.6] text-[#626071]">
                  Confirm the detection threshold against the approved
                  Prega Gene product instructions.
                </p>
              </div>
            </div>

            {/* CLINICAL CALLOUT */}
            <div className="mt-4 rounded-xl border border-[#f8d2e2] bg-[#f9dce8] p-4 sm:p-5">
              <div className="flex items-start gap-2">
                <Lightbulb
                  size={16}
                  className="mt-0.5 shrink-0 text-[#bd2d79]"
                />

                <div>
                  <h3 className="text-[12px] font-semibold text-[#54203b]">
                    Clinical Rule of Thumb
                  </h3>

                  <p className="mt-1 text-[10px] leading-[1.8] text-[#654154] sm:text-[11px]">
                    For a more reliable home pregnancy test result, test
                    on or after the first day of your expected period.
                    Testing earlier can increase the possibility of a
                    false-negative result.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 2: EARLIEST WINDOW */}
          <section className="mb-10">
            <SectionHeading number="2" id="earliest-window">
              The Earliest Reliable Testing Window
            </SectionHeading>

            <p className="text-[11px] leading-[1.9] text-[#626071] sm:text-[12px]">
              Some highly sensitive pregnancy tests may detect hCG before
              a missed period. However, the earliest possible detection
              depends on when implantation occurs and how quickly hCG
              levels rise.
            </p>

            <p className="mt-3 text-[11px] leading-[1.9] text-[#626071] sm:text-[12px]">
              If implantation happens later than expected, an early test
              may show a negative result because the hCG concentration
              has not yet reached the test's detection threshold. This is
              one reason why an early negative result does not always
              rule out pregnancy.
            </p>

            <div className="mt-5 rounded-xl border border-[#eeecf7] bg-white p-4 sm:p-5">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <div className="flex h-[100px] w-full items-center justify-center rounded-lg bg-[#f0f1ff] sm:w-[145px]">
                  <div className="text-center">
                    <Clock3
                      size={27}
                      className="mx-auto text-[#bd2d79]"
                    />
                    <p className="mt-2 text-[9px] font-semibold text-[#092c60]">
                      Timing Matters
                    </p>
                  </div>
                </div>

                <div className="flex-1">
                  <p className="text-[8px] font-bold uppercase tracking-[1px] text-[#bd2d79]">
                    Designed for Clarity
                  </p>

                  <h3 className="mt-1 text-[15px] font-semibold leading-snug text-[#092c60]">
                    Built for clear, confident testing
                  </h3>

                  <p className="mt-2 text-[10px] leading-[1.7] text-[#626071]">
                    Prega Gene is designed for convenient home pregnancy
                    testing. Follow the product instructions for sample
                    collection, timing and result interpretation.
                  </p>

                  <div className="mt-3 flex flex-wrap gap-2">
                    <a
                      href="/#where-to-buy"
                      className="rounded-full bg-[#bd2d79] px-3 py-2 text-[9px] font-semibold text-white transition hover:bg-[#a92168]"
                    >
                      Where to Buy Prega Gene
                    </a>

                    <a
                      href="/#the-test"
                      className="rounded-full bg-[#e9edff] px-3 py-2 text-[9px] font-semibold text-[#092c60] transition hover:bg-[#dfe3ff]"
                    >
                      Learn About the Test
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 3: ACCURACY MATRIX */}
          <section className="mb-10">
            <SectionHeading number="3" id="accuracy-matrix">
              Testing Windows: A Day-by-Day Accuracy Matrix
            </SectionHeading>

            <p className="mb-4 text-[11px] leading-[1.8] text-[#626071] sm:text-[12px]">
              The likelihood of detecting pregnancy generally increases
              as hCG levels rise. The following table is an illustrative
              guide, not a guaranteed performance chart for an individual
              test or pregnancy.
            </p>

            <div className="overflow-x-auto rounded-xl border border-[#e8e8f5] bg-white">
              <table className="w-full min-w-[650px] border-collapse text-left">
                <thead>
                  <tr className="bg-[#e9eafb]">
                    <th className="px-3 py-3 text-[9px] font-semibold text-[#092c60]">
                      Testing Window
                    </th>
                    <th className="px-3 py-3 text-[9px] font-semibold text-[#092c60]">
                      Typical hCG
                    </th>
                    <th className="px-3 py-3 text-[9px] font-semibold text-[#092c60]">
                      Sensitivity
                    </th>
                    <th className="px-3 py-3 text-[9px] font-semibold text-[#092c60]">
                      Recommended Action
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {timingData.map((row) => (
                    <tr
                      key={row.window}
                      className={
                        row.highlight
                          ? "bg-[#fff0f6]"
                          : "border-t border-[#f0eef7]"
                      }
                    >
                      <td className="px-3 py-3 text-[9px] font-medium text-[#092c60]">
                        {row.highlight && (
                          <span className="mr-1 text-[#bd2d79]">✦</span>
                        )}
                        {row.window}
                      </td>

                      <td className="px-3 py-3 text-[9px] text-[#626071]">
                        {row.hcg}
                      </td>

                      <td className="px-3 py-3">
                        <span
                          className={`inline-flex whitespace-nowrap rounded-full px-2 py-1 text-[8px] font-semibold ${
                            row.highlight
                              ? "bg-[#bd2d79] text-white"
                              : "bg-[#e9edff] text-[#092c60]"
                          }`}
                        >
                          {row.sensitivity}
                        </span>
                      </td>

                      <td className="px-3 py-3 text-[9px] leading-[1.6] text-[#626071]">
                        {row.action}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="mt-2 text-[9px] leading-relaxed text-[#9291a0]">
              Note: hCG levels and test sensitivity vary. Do not use
              estimated figures as a substitute for the manufacturer's
              validated performance data or medical advice.
            </p>
          </section>

          {/* SECTION 4: MORNING URINE */}
          <section className="mb-10">
            <SectionHeading number="4" id="morning-urine">
              Why First Morning Urine Matters
            </SectionHeading>

            <p className="text-[11px] leading-[1.9] text-[#626071] sm:text-[12px]">
              When testing early, the concentration of hCG in urine can
              make a difference. Drinking fluids throughout the day may
              dilute urine. First morning urine is often more concentrated
              because it has accumulated overnight.
            </p>

            <div className="mt-4 rounded-xl bg-[#f0f1ff] p-4 sm:p-5">
              <h3 className="mb-4 text-[12px] font-semibold text-[#092c60]">
                Helpful Tips for Testing
              </h3>

              <div className="space-y-4">
                {[
                  {
                    title: "Use First Morning Urine",
                    text: "It is often more concentrated and can be helpful when testing early.",
                  },
                  {
                    title: "Avoid Excessive Fluid Intake",
                    text: "Drinking large amounts of water immediately before testing may dilute your urine.",
                  },
                  {
                    title: "Check the Expiry Date",
                    text: "Always check the expiry date and packaging condition before using the test kit.",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex gap-2.5">
                    <CheckCircle2
                      size={14}
                      className="mt-0.5 shrink-0 text-[#bd2d79]"
                    />

                    <div>
                      <p className="text-[10px] font-semibold text-[#092c60]">
                        {item.title}
                      </p>
                      <p className="mt-1 text-[9px] leading-[1.7] text-[#626071]">
                        {item.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* SECTION 5: TIMING FAQS */}
          <section className="mb-10">
            <SectionHeading number="5" id="timing-faqs">
              Frequently Asked Timing Questions
            </SectionHeading>

            <div className="space-y-2">
              {timingFaqs.map((faq) => (
                <details
                  key={faq.question}
                  className="group rounded-xl border border-[#eeecf7] bg-white"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-4 py-4 text-[10px] font-medium text-[#092c60] transition hover:bg-[#faf9ff] sm:text-[11px] [&::-webkit-details-marker]:hidden">
                    {faq.question}

                    <span className="text-[15px] text-[#092c60] transition-transform group-open:rotate-180">
                      ⌄
                    </span>
                  </summary>

                  <div className="border-t border-[#f0edf7] px-4 py-4">
                    <p className="text-[10px] leading-[1.8] text-[#626071] sm:text-[11px]">
                      {faq.answer}
                    </p>
                  </div>
                </details>
              ))}
            </div>
          </section>

          {/* EDITORIAL AND MEDICAL REVIEW */}
          <section className="rounded-xl bg-[#f0f1ff] p-5 sm:p-6">
            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#092c60] text-white">
                <ShieldCheck size={19} />
              </div>

              <div>
                <h3 className="text-[12px] font-semibold text-[#092c60] sm:text-[14px]">
                  Prega Gene Editorial & Medical Review Standards
                  <span className="ml-1 text-[#bd2d79]">✦</span>
                </h3>

                <p className="mt-2 text-[9px] leading-[1.8] text-[#626071] sm:text-[10px]">
                  Prega Gene educational content should be reviewed against
                  peer-reviewed research, applicable clinical guidance and
                  the approved product instructions. Medical claims and
                  performance figures must be validated before publication.
                </p>

                <div className="mt-3 flex flex-wrap gap-3 text-[8px] font-medium text-[#092c60]">
                  <span className="inline-flex items-center gap-1">
                    <ShieldCheck size={11} />
                    Medical Review
                  </span>

                  <span className="inline-flex items-center gap-1">
                    <BookOpen size={11} />
                    Editorial Standards
                  </span>
                </div>
              </div>
            </div>
          </section>

        </article>
      </div>
    </section>
  );
}

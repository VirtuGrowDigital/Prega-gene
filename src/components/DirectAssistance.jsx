
import { Link } from "react-router-dom";
import {
  ListChecks,
  Eye,
  BookOpen,
  ArrowRight,
} from "lucide-react";

const assistanceCards = [
  {
    eyebrow: "Step-by-Step Walkthrough",
    title: "How to Use",
    description:
      "Clear preparation steps, urine sampling and timing, so you follow the procedure correctly.",
    linkText: "View Instructions",
    href: "/how-to-use",
    Icon: ListChecks,
    iconColor: "bg-[#e9edff] text-[#092c60]",
  },
  {
    eyebrow: "Visual Decoder",
    title: "Understand Results",
    description:
      "Side-by-side guidance to help identify positive, negative and invalid result patterns.",
    linkText: "Decode Your Result",
    href: "/understand-results",
    Icon: Eye,
    iconColor: "bg-[#f9e0ed] text-[#bd2d79]",
  },
  {
    eyebrow: "Knowledge Base",
    title: "Frequently Asked Questions",
    description:
      "Answers on storage, accuracy, expiry dates and where to buy Prega Gene products.",
    linkText: "Browse FAQs",
    href: "/#faq",
    Icon: BookOpen,
    iconColor: "bg-[#e9edff] text-[#092c60]",
  },
];

export default function DirectAssistance() {
  return (
    <section className="bg-[#f0f1ff] px-5 py-12 sm:px-8 sm:py-16 lg:px-8">
      <div className="mx-auto max-w-[1120px]">
        {/* Heading */}
        <div className="mb-7 text-center">
          <p className="mb-2 text-[9px] font-bold uppercase tracking-[0.18em] text-[#bd2d79] sm:text-[10px]">
            Direct Assistance
          </p>

          <h2 className="text-2xl font-semibold tracking-tight text-[#092c60] sm:text-3xl">
            Need product answers fast?
          </h2>

          <p className="mt-2 text-xs leading-6 text-[#5d5b6b] sm:text-sm">
            Official instructions, result guides, and support for Prega Gene users.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {assistanceCards.map((card) => {
            const Icon = card.Icon;

            return (
              <article
                key={card.title}
                className="flex min-h-[190px] flex-col rounded-xl border border-white bg-white p-5 transition duration-200 hover:-translate-y-1 hover:shadow-[0_10px_24px_rgba(9,44,96,0.07)] sm:p-5"
              >
                <div
                  className={`mb-4 flex h-7 w-7 items-center justify-center rounded-lg ${card.iconColor}`}
                >
                  <Icon size={15} />
                </div>

                <p className="text-[8px] font-bold uppercase tracking-wide text-[#bd2d79]">
                  {card.eyebrow}
                </p>

                <h3 className="mt-1 text-sm font-semibold leading-5 text-[#092c60]">
                  {card.title}
                </h3>

                <p className="mt-2 flex-1 text-[10px] leading-[1.7] text-[#5d5b6b] sm:text-[11px]">
                  {card.description}
                </p>

                <Link
                  to={card.href}
                  className="mt-4 inline-flex items-center gap-1.5 text-[9px] font-semibold text-[#092c60] transition hover:text-[#bd2d79]"
                >
                  {card.linkText}
                  <ArrowRight size={13} />
                </Link>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

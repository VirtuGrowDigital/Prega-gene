
import {
  MessageCircle,
  Phone,
  BookOpen,
  ArrowUpRight,
  Headset,
  ShieldCheck,
  ChevronDown,
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const faqs = [
  {
    question: "How discreet is the shipping box?",
    answer:
      "Every parcel arrives in a plain cardboard box or opaque courier pack. The outside has no brand logos, health references, or product descriptions.",
  },
  {
    question: "Can I buy Prega Gene without a prescription?",
    answer:
      "Prega Gene is intended as an over-the-counter pregnancy test. A prescription is generally not required for purchasing an OTC test. Please check applicable local regulations and product packaging.",
  },
  {
    question: "Should I buy a Single Wand or a Dual Pack?",
    answer:
      "If you test early, repeating the test after 48–72 hours may help clarify the result because hCG levels generally rise during early pregnancy. The Dual Pack provides two tests for this purpose.",
  },
  {
    question: "What if my pharmacy is temporarily out of stock?",
    answer:
      "Use the Store Locator above to find another verified pharmacy. You can also check availability with our listed online retail partners.",
  },
];

export default function SupportFAQs() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-[#f6f7fc] px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-[1200px]">

        {/* Section Heading */}
        <div className="mb-8">
          <span className="text-[10px] font-semibold tracking-[0.18em] text-[#bd2d79]">
            SUPPORT
          </span>

          <h2 className="mt-3 text-2xl font-bold tracking-tight text-[#092c60] sm:text-3xl">
            Support when you need it.
          </h2>

          <p className="mt-2 max-w-xl text-sm leading-6 text-[#656477]">
            Get help finding a stockist, checking product availability,
            or understanding the next steps.
          </p>
        </div>

        {/* Support + FAQs */}
        <div className="grid items-start gap-5 lg:grid-cols-[0.9fr_1.3fr]">

          {/* Support Card */}
          <div className="rounded-2xl bg-white p-6 shadow-sm sm:p-8">
            <span className="text-[10px] font-semibold tracking-[0.15em] text-[#bd2d79]">
              CUSTOMER SUPPORT
            </span>

            <div className="mt-4 flex h-11 w-11 items-center justify-center rounded-xl bg-[#f0f1ff] text-[#092c60]">
              <Headset size={22} />
            </div>

            <h3 className="mt-4 text-2xl font-bold leading-tight text-[#092c60]">
              Need assistance finding stock?
            </h3>

            <p className="mt-3 text-sm leading-6 text-[#656477]">
              Our support team can help you find a nearby stockist
              or understand available delivery options.
            </p>

            {/* Support Links */}
            <div className="mt-6 space-y-3">

              <a
                href="https://wa.me/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 rounded-lg bg-[#f1f2ff] px-4 py-3 text-xs font-semibold text-[#092c60] transition hover:bg-[#e7e9ff]"
              >
                <MessageCircle size={16} className="shrink-0 text-[#bd2d79]" />
                WhatsApp Care Helpline
                <ArrowUpRight size={14} className="ml-auto" />
              </a>

              <a
                href="tel:"
                className="flex items-center gap-3 rounded-lg bg-[#f1f2ff] px-4 py-3 text-xs font-semibold text-[#092c60] transition hover:bg-[#e7e9ff]"
              >
                <Phone size={16} className="shrink-0 text-[#092c60]" />
                Toll-Free Pharmacy Desk
                <ArrowUpRight size={14} className="ml-auto" />
              </a>

              <Link
                to="/how-to-use"
                className="flex items-center gap-3 rounded-lg bg-[#f1f2ff] px-4 py-3 text-xs font-semibold text-[#092c60] transition hover:bg-[#e7e9ff]"
              >
                <BookOpen size={16} className="shrink-0 text-[#092c60]" />
                Review Step-by-Step Instructions
                <ArrowUpRight size={14} className="ml-auto" />
              </Link>

            </div>

            {/* Confidentiality Note */}
            <div className="mt-6 flex items-start gap-2 border-t border-gray-100 pt-5">
              <ShieldCheck
                size={15}
                className="mt-0.5 shrink-0 text-[#bd2d79]"
              />

              <p className="text-[11px] leading-5 text-[#656477]">
                Your privacy matters. Support enquiries should be
                handled with care and confidentiality.
              </p>
            </div>
          </div>

          {/* FAQ Cards */}
          <div className="space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={faq.question}
                  className="overflow-hidden rounded-xl border border-[#eeedf7] bg-white shadow-sm transition"
                >
                  <button
                    type="button"
                    onClick={() =>
                      setOpenIndex(isOpen ? -1 : index)
                    }
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-6"
                  >
                    <span className="text-sm font-semibold leading-6 text-[#092c60]">
                      {faq.question}
                    </span>

                    <ChevronDown
                      size={18}
                      className={`shrink-0 text-[#bd2d79] transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 sm:px-6">
                      <div className="border-t border-gray-100 pt-3">
                        <p className="text-xs leading-6 text-[#656477]">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}

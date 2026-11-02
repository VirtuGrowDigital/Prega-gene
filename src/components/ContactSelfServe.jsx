
import { Link } from "react-router-dom";
import {
  FlaskConical,
  CircleHelp,
  BookOpen,
  ArrowUpRight,
  ShieldCheck,
  Store,
} from "lucide-react";

const resources = [
  {
    tag: "INSTRUCTIONS",
    title: "Step-by-Step Instructions",
    description:
      "Clear steps for collecting your sample, timing and testing.",
    linkText: "View Testing Guide",
    href: "/how-to-use",
    icon: FlaskConical,
  },
  {
    tag: "RESULTS",
    title: "Understand Your Result",
    description:
      "See positive, negative, faint and invalid results explained.",
    linkText: "Decode Results",
    href: "/understand-results",
    icon: BookOpen,
  },
  {
    tag: "FAQ",
    title: "Help Centre & FAQs",
    description:
      "Answers on accuracy, storage, medicines and delivery.",
    linkText: "Visit Help Centre",
    href: "/faq",
    icon: CircleHelp,
  },
];

export default function ContactSelfServe() {
  return (
    <>
      {/* SELF-SERVE GUIDANCE */}
      <section className="bg-[#f0f1ff] px-5 py-16 sm:px-8 lg:py-20">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-8">
            <div className="mb-3 flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#bd2d79]" />
              <span className="text-[10px] font-bold tracking-[0.18em] text-[#092c60]">
                QUICK ANSWERS
              </span>
            </div>

            <h2 className="text-2xl font-semibold tracking-tight text-[#092c60] sm:text-3xl">
              Looking for an answer right now?
            </h2>

            <p className="mt-2 max-w-2xl text-sm leading-6 text-[#555568]">
              Skip the wait. These guides cover most questions about
              using your kit, understanding results and getting support.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {resources.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.tag}
                  className="group flex min-h-[190px] flex-col rounded-xl border border-white bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-6"
                >
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-[#e8eaff] text-[#092c60]">
                    <Icon size={20} strokeWidth={1.8} />
                  </div>

                  <span className="mb-2 text-[9px] font-bold tracking-[0.15em] text-[#bd2d79]">
                    {item.tag}
                  </span>

                  <h3 className="text-base font-semibold text-[#092c60]">
                    {item.title}
                  </h3>

                  <p className="mt-2 flex-1 text-xs leading-5 text-[#626274]">
                    {item.description}
                  </p>

                  <Link
                    to={item.href}
                    className="mt-5 inline-flex w-fit items-center gap-1.5 text-xs font-semibold text-[#092c60] transition-colors hover:text-[#bd2d79]"
                  >
                    {item.linkText}
                    <ArrowUpRight
                      size={14}
                      className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* READY TO BUY CTA */}
      <section className="bg-[#fcfaff] px-5 py-12 sm:px-8 lg:py-16">
        <div className="relative mx-auto max-w-[1200px] overflow-hidden rounded-2xl bg-gradient-to-r from-[#092c60] via-[#123b73] to-[#092c60] px-6 py-9 shadow-lg sm:px-10 sm:py-11">
          {/* Decorative circles */}
          <div className="pointer-events-none absolute -right-12 -top-24 h-72 w-72 rounded-full border border-white/10" />
          <div className="pointer-events-none absolute -right-1 -top-12 h-52 w-52 rounded-full border border-white/10" />
          <div className="pointer-events-none absolute right-10 top-10 h-28 w-28 rounded-full border border-white/10" />

          <div className="relative z-10 flex flex-col justify-between gap-8 md:flex-row md:items-center">
            <div className="max-w-xl">
              <div className="mb-3 flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-[#bd2d79] px-3 py-1 text-[9px] font-bold tracking-wide text-white">
                  AUTHORISED DISTRIBUTION
                </span>

                <span className="text-[9px] font-medium tracking-[0.12em] text-blue-100">
                  GENUINE PREGA GENE KITS
                </span>
              </div>

              <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                Ready to buy Prega Gene?
              </h2>

              <p className="mt-3 max-w-lg text-sm leading-6 text-blue-100">
                Locate authorised pharmacies near you or purchase
                directly through verified online healthcare partners
                with guaranteed temperature-controlled shipping.
              </p>
            </div>

            <div className="flex w-full flex-col gap-3 md:w-[270px] md:shrink-0">
              <Link
                to="/where-to-buy"
                className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-full bg-[#bd2d79] px-5 text-xs font-semibold text-white shadow-md transition hover:bg-[#a92168]"
              >
                <Store size={15} />
                Where to Buy Prega Gene
              </Link>

              <Link
                to="/where-to-buy#verify-kit"
                className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-full border border-white/20 bg-white/15 px-5 text-xs font-semibold text-white transition hover:bg-white/25"
              >
                <ShieldCheck size={15} />
                Verify Genuine Product Lot
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

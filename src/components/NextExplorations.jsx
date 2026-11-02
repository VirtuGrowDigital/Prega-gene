
import { Link } from "react-router-dom";
import {
  TestTube2,
  PlayCircle,
  Eye,
  CircleHelp,
  ArrowRight,
} from "lucide-react";

const explorations = [
  {
    title: "The Test",
    description:
      "Discover the ergonomic design and clinical accuracy of the Prega Gene wand.",
    linkText: "Learn about the test",
    href: "/#the-test",
    icon: TestTube2,
  },
  {
    title: "How to Use",
    description:
      "A calm, step-by-step visual walkthrough for seamless testing.",
    linkText: "Read step-by-step",
    href: "/how-to-use",
    icon: PlayCircle,
  },
  {
    title: "Understand Results",
    description:
      "Decode your result window with verified visual comparisons and FAQs.",
    linkText: "Explore result guide",
    href: "/understand-results",
    icon: Eye,
  },
  {
    title: "Help Centre & FAQ",
    description:
      "Comprehensive answers to frequently asked questions and 24/7 care.",
    linkText: "Visit Help Centre",
    href: "/faq",
    icon: CircleHelp,
  },
];

export default function NextExplorations() {
  return (
    <section className="bg-[#fefefe] px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
      <div className="mx-auto max-w-[1200px]">
        {/* Section Heading */}
        <div className="mb-9 grid grid-cols-1 gap-4 md:grid-cols-[1.2fr_0.8fr] md:items-end">
          <div>
            <span className="mb-3 block text-[10px] font-bold uppercase tracking-[0.16em] text-[#bd2d79]">
              Explore More
            </span>

            <h2 className="text-2xl font-semibold leading-tight tracking-tight text-[#092c60] sm:text-3xl">
              Continue exploring Prega Gene
            </h2>
          </div>

          <p className="max-w-[360px] text-sm leading-6 text-[#666477] md:justify-self-end">
            Everything you need for a calm, informed testing experience.
          </p>
        </div>

        {/* Exploration Cards */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {explorations.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="group flex min-h-[185px] flex-col rounded-xl border border-[#eae9f7] bg-[#fcfaff] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#e6c1d5] hover:shadow-lg hover:shadow-[#092c60]/5 sm:p-6"
              >
                {/* Icon */}
                <div className="mb-5 flex h-9 w-9 items-center justify-center rounded-lg bg-[#e9ecff] text-[#092c60] transition-colors duration-300 group-hover:bg-[#092c60] group-hover:text-white">
                  <Icon size={17} strokeWidth={1.8} />
                </div>

                {/* Title */}
                <h3 className="text-base font-semibold text-[#092c60]">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="mt-2 text-[11px] leading-[1.7] text-[#626477]">
                  {item.description}
                </p>

                {/* Link */}
                <Link
                  to={item.href}
                  className="mt-auto inline-flex w-fit items-center gap-2 pt-6 text-[10px] font-semibold text-[#bd2d79] transition-all hover:gap-3"
                >
                  {item.linkText}
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


import { Link } from "react-router-dom";
import {
  CircleHelp,
  BookOpen,
  Headset,
  ArrowUpRight,
} from "lucide-react";

const assistanceOptions = [
  {
    title: "Result FAQs",
    subtitle: "Answers to Common Questions",
    description:
      "Learn about faint test lines, negative results, invalid tests, and factors that may affect pregnancy test results.",
    linkText: "View Result FAQs",
    href: "/#faq",
    Icon: CircleHelp,
  },
  {
    title: "Official Protocol Guide",
    subtitle: "Step-by-Step Instructions",
    description:
      "Review the official product leaflet for guidance on sample collection, test usage, timing, and result interpretation.",
    linkText: "Open Instructions",
    href: "/prega-gene-leaflet.pdf",
    Icon: BookOpen,
    download: true,
  },
  {
    title: "Product Support",
    subtitle: "Get Help With Your Test",
    description:
      "Contact the Prega Gene support team for assistance with product instructions and common testing questions.",
    linkText: "Contact Support",
    href: "/#contact",
    Icon: Headset,
  },
];

export default function CompassionateAssistance() {
  return (
    <section
      id="result-assistance"
      className="bg-[#fcfaff] px-4 py-10 sm:px-6 sm:py-14 lg:px-8"
    >
      <div className="mx-auto max-w-[1120px]">
        <div className="overflow-hidden rounded-2xl bg-[#062958] p-5 shadow-[0_8px_24px_rgba(9,44,96,0.12)] sm:p-7 lg:p-8">
          {/* Heading */}
          <div className="max-w-2xl">
            <p className="mb-2 text-[9px] font-bold uppercase tracking-[0.18em] text-[#f4b5d4] sm:text-[10px]">
              Patient Care &amp; Assistance
            </p>

            <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl lg:text-[36px]">
              Still unsure about your result?
            </h2>

            <p className="mt-2 max-w-xl text-xs leading-6 text-[#c7d5eb] sm:text-sm">
              It is understandable to have questions about faint lines,
              unexpected results, or the next steps. Explore our resources
              for guidance on using your Prega Gene test kit and understanding
              its result.
            </p>
          </div>

          {/* Assistance cards */}
          <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {assistanceOptions.map((option) => {
              const Icon = option.Icon;

              return (
                <article
                  key={option.title}
                  className="flex min-w-0 flex-col rounded-xl border border-white/5 bg-[#1b3e69] p-4 transition duration-200 hover:bg-[#254a78] sm:p-4"
                >
                  <div className="mb-3 flex h-7 w-7 items-center justify-center rounded-full bg-white/15 text-white">
                    <Icon size={14} strokeWidth={1.8} />
                  </div>

                  <h3 className="text-sm font-semibold text-white">
                    {option.title}
                  </h3>

                  <p className="mt-1 text-[10px] font-medium text-[#d9e4f5]">
                    {option.subtitle}
                  </p>

                  <p className="mt-2 flex-1 text-[10px] leading-[1.7] text-[#b8cae2] sm:text-[11px]">
                    {option.description}
                  </p>

                  {option.download ? (
                    <a
                      href={option.href}
                      download
                      className="mt-3 inline-flex items-center gap-1 text-[10px] font-semibold text-white transition hover:text-[#f4b5d4]"
                    >
                      {option.linkText}
                      <ArrowUpRight size={12} />
                    </a>
                  ) : (
                    <Link
                      to={option.href}
                      className="mt-3 inline-flex items-center gap-1 text-[10px] font-semibold text-white transition hover:text-[#f4b5d4]"
                    >
                      {option.linkText}
                      <ArrowUpRight size={12} />
                    </Link>
                  )}
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

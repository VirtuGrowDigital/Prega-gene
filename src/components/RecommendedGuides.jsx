
import { ArrowRight, Clock3 } from "lucide-react";
import { Link } from "react-router-dom";

import article1 from "../assets/images/article1.png";
import article2 from "../assets/images/article2.png";
import article3 from "../assets/images/article3.png";

const guides = [
  {
    id: 1,
    category: "DIAGNOSTIC SCIENCE",
    readTime: "4 min read",
    title: "How Does a Pregnancy Test Work? The Science of hCG",
    description:
      "Explore how lateral flow immunoassays capture micro-concentrations of human chorionic gonadotropin (hCG).",
    image: article1,
    link: "/learn",
    linkText: "Read Guide",
  },
  {
    id: 2,
    category: "RESULTS CLARITY",
    readTime: "3 min read",
    title: "Evaporation Lines vs. Faint Positive: How to Tell the Difference",
    description:
      "Learn the visual distinction between colourless moisture evaporation marks and true early-positive results.",
    image: article2,
    link: "/learn",
    linkText: "Read Guide",
  },
  {
    id: 3,
    category: "NEXT STEPS",
    readTime: "6 min read",
    title: "Calculating Gestational Age & What to Ask Your Doctor",
    description:
      "Essential questions to prepare for your first prenatal consultation and understanding clinical guidance.",
    image: article3,
    link: "/learn",
    linkText: "Read Guide",
  },
];

export default function RecommendedGuides() {
  return (
    <section className="bg-[#f0f1ff] px-5 py-12 sm:px-8 sm:py-14 lg:py-16">
      <div className="mx-auto max-w-[1120px]">

        {/* Section heading */}
        <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="mb-2 text-[9px] font-bold uppercase tracking-[1.3px] text-[#bd2d79]">
              Educational Resources
            </p>

            <h2 className="text-[24px] font-semibold leading-tight tracking-tight text-[#092c60] sm:text-[30px]">
              Recommended Guides
            </h2>
          </div>

          <Link
            to="/learn"
            className="inline-flex items-center gap-1.5 text-[10px] font-semibold text-[#bd2d79] transition hover:text-[#a92168]"
          >
            Explore all articles
            <ArrowRight size={13} />
          </Link>
        </div>

        {/* Guide cards */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {guides.map((guide) => (
            <article
              key={guide.id}
              className="group overflow-hidden rounded-xl border border-white bg-white shadow-[0_3px_12px_rgba(9,44,96,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_25px_rgba(9,44,96,0.10)]"
            >
              {/* Image */}
              <Link
                to={guide.link}
                aria-label={`Read ${guide.title}`}
                className="relative block overflow-hidden"
              >
                <img
                  src={guide.image}
                  alt={guide.title}
                  loading="lazy"
                  className="h-[190px] w-full object-cover transition-transform duration-500 group-hover:scale-[1.04] sm:h-[175px]"
                />

                <span className="absolute left-3 top-3 rounded-full bg-white/95 px-2.5 py-1 text-[8px] font-semibold text-[#092c60] shadow-sm">
                  {guide.readTime}
                </span>
              </Link>

              {/* Content */}
              <div className="flex min-h-[190px] flex-col p-3.5 sm:p-4">
                <p className="text-[8px] font-bold uppercase tracking-[0.8px] text-[#bd2d79]">
                  {guide.category}
                </p>

                <h3 className="mt-2 text-[14px] font-semibold leading-[1.4] tracking-tight text-[#092c60]">
                  {guide.title}
                </h3>

                <p className="mt-2 flex-1 text-[10px] leading-[1.7] text-[#626071]">
                  {guide.description}
                </p>

                <div className="mt-3 border-t border-[#f0edf7] pt-2.5">
                  <Link
                    to={guide.link}
                    className="inline-flex items-center gap-1 text-[9px] font-semibold text-[#092c60] transition-colors hover:text-[#bd2d79]"
                  >
                    {guide.linkText}
                    <ArrowRight
                      size={12}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

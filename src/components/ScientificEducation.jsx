import { Link } from "react-router-dom";
import { ArrowRight, Clock3 } from "lucide-react";
import { articles } from "../data/learnArticles";

export default function ScientificEducation() {
  return (
    <section
      id="scientific-education"
      className="bg-[#fcfaff] px-4 py-10 sm:px-6 sm:py-14 lg:px-8"
    >
      <div className="mx-auto max-w-[1120px]">
        <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-2 text-[9px] font-bold uppercase tracking-[0.18em] text-[#bd2d79] sm:text-[10px]">
              Scientific Education
            </p>

            <h2 className="text-2xl font-semibold tracking-tight text-[#092c60] sm:text-3xl lg:text-[36px]">
              Understand the science behind your result
            </h2>

            <p className="mt-2 max-w-2xl text-xs leading-6 text-[#5d5b6b] sm:text-sm">
              Explore helpful articles about hCG, pregnancy testing timelines,
              and how to interpret different test-line patterns.
            </p>
          </div>

          <Link
            to="/learn"
            className="inline-flex shrink-0 items-center gap-1.5 text-[10px] font-semibold text-[#bd2d79] transition hover:text-[#a92168] sm:mb-1 sm:text-xs"
          >
            Explore All Guides
            <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <article
              key={article.slug}
              className="flex min-w-0 flex-col rounded-xl border border-[#efebf6] bg-white p-4 transition duration-200 hover:-translate-y-1 hover:border-[#e4d2e3] hover:shadow-[0_8px_22px_rgba(9,44,96,0.06)] sm:p-5"
            >
              <div className="mb-3 flex items-center justify-between gap-2">
                <span className="text-[8px] font-bold uppercase tracking-wide text-[#092c60] sm:text-[9px]">
                  {article.category}
                </span>

                <span className="inline-flex shrink-0 items-center gap-1 text-[9px] text-[#68677a]">
                  <Clock3 size={11} />
                  {article.readingTime}
                </span>
              </div>

              <h3 className="text-sm font-semibold leading-5 text-[#092c60] sm:text-base">
                {article.title}
              </h3>

              <p className="mt-2 flex-1 text-[11px] leading-[1.75] text-[#5d5b6b] sm:text-xs">
                {article.description}
              </p>

              <Link
                to={`/learn/${article.slug}`}
                className="mt-4 inline-flex items-center gap-1 text-[10px] font-semibold text-[#bd2d79] transition hover:text-[#a92168]"
              >
                Read Full Article
                <ArrowRight size={12} />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
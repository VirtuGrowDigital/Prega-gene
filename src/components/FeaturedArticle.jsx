
import { Link } from "react-router-dom";
import { ArrowRight, Clock3 } from "lucide-react";

import featuredImage from "../assets/images/learn-bg.png";

export default function FeaturedArticle() {
  return (
    <section className="bg-[#fcfaff] px-5 pb-12 sm:px-8 sm:pb-16 lg:px-8">
      <div className="mx-auto max-w-[1120px]">
        <article className="grid overflow-hidden rounded-2xl border border-[#eeeaf5] bg-white p-4 shadow-[0_4px_8px_rgba(9,44,96,0.07)] sm:p-5 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-5 lg:p-6">
          {/* Featured image */}
          <div className="relative overflow-hidden rounded-xl">
            <img
              src={featuredImage}
              alt="Prega Gene pregnancy test featured article"
              className="h-[240px] w-full object-cover sm:h-[320px] lg:h-[350px]"
              loading="lazy"
            />

            <div className="absolute bottom-3 left-3 rounded-full bg-[#092c60] px-3 py-2 text-[9px] font-semibold text-white shadow-md">
              Your Journey Matters
            </div>
          </div>

          {/* Article content */}
          <div className="flex flex-col justify-center py-4 lg:px-2 lg:py-3">
            {/* Article category */}
            <div className="mb-3 flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-[#f9e0ed] px-3 py-1 text-[9px] font-semibold text-[#a52562]">
                Reproductive Health
              </span>

              <span className="h-1 w-1 rounded-full bg-[#bd2d79]" />

              <span className="inline-flex items-center gap-1 text-[9px] text-[#68677a]">
                <Clock3 size={11} />
                6 min read
              </span>
            </div>

            <h2 className="text-xl font-semibold leading-[1.3] tracking-tight text-[#092c60] sm:text-2xl lg:text-[26px]">
              When Should You Take a Pregnancy Test? Timing &amp; Science
            </h2>

            <p className="mt-3 text-xs leading-[1.8] text-[#5d5b6b] sm:text-[13px]">
              Learn how hCG rises after implantation, and how testing at
              the right time gives you a more reliable result.
            </p>

            {/* Divider */}
            <div className="my-5 h-px w-full bg-[#eeeaf5]" />

            {/* Author and CTA */}
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2.5">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#173f7a] text-[10px] font-semibold text-white">
                  EV
                </div>

                <div>
                  <p className="text-[10px] font-semibold text-[#092c60]">
                    Dr. Elena Vance
                  </p>

                  <p className="text-[9px] text-[#68677a]">
                    Reproductive Health Specialist
                  </p>
                </div>
              </div>

              <Link
               to="/learn/when-to-take-a-pregnancy-test"
                className="inline-flex min-h-10 items-center justify-center gap-2 rounded-full bg-[#092c60] px-4 py-2 text-[10px] font-semibold text-white transition hover:bg-[#123b73]"
              >
             
                Read Article
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

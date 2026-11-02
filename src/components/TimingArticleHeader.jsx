
import { useState } from "react";
import {
  Bookmark,
  Check,
  Clock3,
  Share2,
  ShieldCheck,
  ChevronRight,
} from "lucide-react";
import articleHero from "../assets/images/article1.png";

export default function TimingArticleHeader() {
  const [saved, setSaved] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const shareData = {
      title: "When Should You Take a Pregnancy Test?",
      text: "A clinical timing guide by Prega Gene.",
      url: window.location.href,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(window.location.href);
        setCopied(true);
        window.setTimeout(() => setCopied(false), 2000);
      }
    } catch (error) {
      if (error.name !== "AbortError") {
        console.error("Unable to share this article:", error);
      }
    }
  };

  return (
    <section className="bg-[#fcfaff] px-5 pb-8 pt-7 sm:px-8 sm:pb-10 sm:pt-9">
      <div className="mx-auto max-w-[1120px]">

        {/* Breadcrumb */}
        <nav
          aria-label="Breadcrumb"
          className="mb-6 flex flex-wrap items-center gap-1.5 text-[10px] text-[#777487] sm:text-xs"
        >
          <a href="/" className="transition hover:text-[#bd2d79]">
            Home
          </a>

          <ChevronRight size={12} />

          <a href="/learn" className="transition hover:text-[#bd2d79]">
            Learn
          </a>

          <ChevronRight size={12} />

          <span className="font-medium text-[#092c60]">
            When Should You Take a Pregnancy Test?
          </span>
        </nav>

        {/* Article Heading */}
        <div className="max-w-[850px]">

          {/* Article Tags */}
          <div className="mb-4 flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-[#fbe5ef] px-3 py-1 text-[9px] font-semibold uppercase tracking-[0.5px] text-[#bd2d79]">
              Pregnancy Testing
            </span>

            <span className="inline-flex items-center gap-1 rounded-full bg-[#f0f1ff] px-3 py-1 text-[9px] font-medium text-[#092c60]">
              <Clock3 size={11} />
              6 min read
            </span>

            <span className="inline-flex items-center gap-1 rounded-full bg-[#e9edff] px-3 py-1 text-[9px] font-medium text-[#092c60]">
              <ShieldCheck size={11} />
              Medically Reviewed
            </span>
          </div>

          <h1 className="max-w-[800px] text-[32px] font-semibold leading-[1.12] tracking-[-1.2px] text-[#092c60] sm:text-[42px] lg:text-[48px]">
            When Should You Take a Pregnancy Test? A Clinical Timing Guide
          </h1>

          <p className="mt-4 max-w-[720px] text-[13px] leading-[1.8] text-[#626071] sm:text-[14px]">
            Learn how hCG rises, when a test can first detect it, and how to
            time your test for a clear, reliable result.
          </p>
        </div>

        {/* Author and Actions */}
        <div className="mt-6 flex flex-col gap-4 rounded-xl border border-[#eeecf7] bg-[#f0f1ff] p-4 sm:flex-row sm:items-center sm:justify-between sm:px-5">

          <div className="flex min-w-0 items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#092c60] text-sm font-semibold text-white">
              EV
            </div>

            <div className="min-w-0">
              <p className="text-[11px] font-semibold text-[#092c60] sm:text-xs">
                Dr. Elena Vance, MD
                <span className="ml-1 text-[#bd2d79]">✦</span>
              </p>

              <p className="mt-1 text-[9px] leading-relaxed text-[#626071] sm:text-[10px]">
                Medically reviewed by the Prega Gene Advisory Board
              </p>
            </div>
          </div>

          <div className="flex shrink-0 items-center gap-2">
            <button
              type="button"
              onClick={() => setSaved((value) => !value)}
              aria-pressed={saved}
              className="inline-flex min-h-[34px] items-center justify-center gap-1.5 rounded-full border border-[#dfe2f4] bg-white px-3 text-[10px] font-medium text-[#092c60] transition hover:border-[#bd2d79] hover:text-[#bd2d79]"
            >
              {saved ? <Check size={12} /> : <Bookmark size={12} />}
              {saved ? "Saved" : "Save Guide"}
            </button>

            <button
              type="button"
              onClick={handleShare}
              className="inline-flex min-h-[34px] items-center justify-center gap-1.5 rounded-full border border-[#dfe2f4] bg-white px-3 text-[10px] font-medium text-[#092c60] transition hover:border-[#bd2d79] hover:text-[#bd2d79]"
            >
              {copied ? <Check size={12} /> : <Share2 size={12} />}
              {copied ? "Copied" : "Share"}
            </button>
          </div>
        </div>

        {/* Article Hero Image */}
        <figure className="mt-5 overflow-hidden rounded-xl border border-[#eeecf7] bg-white">
        <img
  src={articleHero}
  alt="When to take a pregnancy test"
  className="h-full w-full object-cover"
/>

          <figcaption className="flex flex-col gap-2 bg-[#f0f1ff] px-4 py-3 text-[9px] leading-relaxed text-[#626071] sm:flex-row sm:items-center sm:justify-between sm:px-5 sm:text-[10px]">
            <span className="flex items-start gap-2">
              <span className="mt-0.5 text-[#092c60]">▣</span>
              Figure 1.0 — First morning urine contains the highest
              concentration of hCG for early home testing.
            </span>

            <span className="shrink-0 text-[#777487]">
              Photo: Prega Gene Clinical Archives
            </span>
          </figcaption>
        </figure>

      </div>
    </section>
  );
}


import {
  ArrowRight,
  Download,
  ShieldCheck,
  Clock3,
  ClipboardCheck,
} from "lucide-react";

import howToUseLeaflet from "../assets/images/how-to-use.png";

export default function HowToUseHero() {
  return (
    <section
      id="how-to-use"
      className="relative overflow-hidden bg-[radial-gradient(ellipse_at_5%_15%,rgba(246,218,240,0.75)_0%,transparent_48%),radial-gradient(ellipse_at_95%_85%,rgba(211,214,247,0.7)_0%,transparent_52%),linear-gradient(115deg,#fcf8ff_0%,#fdfbff_50%,#f8f8ff_100%)] px-5 py-12 sm:px-8 sm:py-16 lg:py-[72px]"
    >
      <div className="mx-auto grid max-w-[1100px] grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-12 lg:gap-16">
        <div>
          <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-[#f9e0ed] px-3 py-2 text-[10px] font-bold uppercase tracking-[0.8px] text-[#a52562]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#bd2d79]" />
            How to Use
          </div>

          <h1 className="text-[clamp(36px,4.5vw,54px)] font-semibold leading-[1.12] tracking-[-1.8px] text-[#092c60]">
            Eight steps.
            <br />
            <span className="text-[#bd2d79]">
              One clear process.
            </span>
          </h1>

          <p className="mt-5 max-w-[490px] text-[13px] leading-[1.85] text-[#555463] sm:text-sm">
            Follow the instructions supplied with your Prega Gene pregnancy
            test kit. Learn how to prepare the test, apply your urine sample
            correctly, and read your result within the specified time.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="/understand-results"
              className="inline-flex min-h-[42px] items-center justify-center gap-2 rounded-full bg-[#bd2d79] px-5 text-xs font-semibold text-white shadow-md shadow-pink-900/10 transition hover:-translate-y-0.5 hover:bg-[#a92168]"
            >
              Understand Results
              <ArrowRight size={15} />
            </a>

            <a
              href="/prega-gene-leaflet.pdf"
              download
              className="inline-flex min-h-[42px] items-center justify-center gap-2 rounded-full bg-[#e9ecff] px-5 text-xs font-semibold text-[#123b73] transition hover:bg-[#dfe4ff]"
            >
              <Download size={15} />
              Download PDF Leaflet
            </a>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/75 px-3 py-2 text-[9px] font-medium text-[#173f7a]">
              <ClipboardCheck size={12} className="text-[#bd2d79]" />
              Clear Step-by-Step Guidance
            </span>

            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/75 px-3 py-2 text-[9px] font-medium text-[#173f7a]">
              <Clock3 size={12} className="text-[#bd2d79]" />
              Follow the Specified Waiting Time
            </span>

            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/75 px-3 py-2 text-[9px] font-medium text-[#173f7a]">
              <ShieldCheck size={12} className="text-[#bd2d79]" />
              Simple Result Interpretation
            </span>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[440px]">
          <div className="absolute inset-5 rounded-[28px] bg-[#f4d9eb] blur-2xl" />

          <div className="relative overflow-hidden rounded-[22px] border border-white bg-white p-3 shadow-[0_18px_35px_rgba(31,30,59,0.12)] sm:p-4">
            <img
              src={howToUseLeaflet}
              alt="Prega Gene pregnancy test kit and instruction leaflet"
              fetchPriority="high"
              className="mx-auto block max-h-[440px] w-full rounded-xl object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

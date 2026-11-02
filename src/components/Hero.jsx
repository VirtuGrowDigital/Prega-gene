
import {
  ArrowRight,
  Store,
  CheckCircle2,
  House,
  Hand,
} from "lucide-react";

import pregnancyKit from "../assets/images/hero.jpeg";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[radial-gradient(ellipse_at_5%_15%,rgba(246,218,240,0.85)_0%,rgba(250,239,250,0.55)_32%,transparent_60%),radial-gradient(ellipse_at_95%_90%,rgba(211,214,247,0.75)_0%,rgba(232,231,250,0.45)_35%,transparent_65%),linear-gradient(115deg,#fcf8ff_0%,#fdfbff_48%,#f8f8ff_100%)]"
    >
      <div className="mx-auto grid min-h-[505px] w-[calc(100%-36px)] max-w-[1100px] grid-cols-1 items-center gap-10 py-12 sm:w-[calc(100%-48px)] sm:gap-12 sm:py-16 md:grid-cols-2 md:gap-10 lg:gap-[70px] lg:py-[72px]">

        {/* Hero Content */}
        <div className="min-w-0">
          {/* Eyebrow */}
          <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-[#e9e9fc] px-3 py-2 text-[10px] font-bold tracking-[0.8px] text-[#123b73]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#c32c80]" />
            THE PREGA GENE PREGNANCY TEST
          </div>

          {/* Main Heading */}
          <h1 className="mb-4 text-[clamp(36px,4vw,52px)] font-semibold leading-[1.12] tracking-[-2px] text-[#082c60]">
            Simple testing.
            <br />
            <span className="text-[#bd2d79]">
              Clear guidance.
            </span>
          </h1>

          {/* Approved Homepage Copy */}
          <p className="max-w-[490px] text-[13px] leading-[1.8] text-[#555463] sm:text-sm">
            Prega Gene is a home pregnancy test kit designed to help detect
            hCG (human chorionic gonadotropin), a hormone associated with
            pregnancy, in urine. With a simple testing process and an
            easy-to-read result window, it helps you understand your result
            in the comfort and privacy of home.
          </p>

          {/* Call-to-Action Buttons */}
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href="#how-to-use"
              className="inline-flex min-h-[42px] items-center justify-center gap-2 rounded-full bg-[#bd2d79] px-5 text-xs font-semibold text-white shadow-md shadow-pink-900/10 transition hover:-translate-y-0.5 hover:bg-[#a92168] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#bd2d79]"
            >
              How to Use
              <ArrowRight size={15} />
            </a>

            <a
              href="#where-to-buy"
              className="inline-flex min-h-[42px] items-center justify-center gap-2 rounded-full bg-[#eff0ff] px-5 text-xs font-semibold text-[#123b73] transition hover:bg-[#e5e7fc] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#173f7a]"
            >
              <Store size={15} />
              Where to Buy
            </a>
          </div>

          {/* Product Highlights */}
          <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-3">
            <div className="inline-flex items-center gap-1.5 text-[10px] leading-relaxed text-[#555463]">
              <CheckCircle2
                size={13}
                className="shrink-0 text-[#bd2d79]"
              />
              <span>Single-use in-vitro diagnostic test</span>
            </div>

            <span className="hidden h-1 w-1 rounded-full bg-[#c7c4d4] sm:block" />

            <div className="inline-flex items-center gap-1.5 text-[10px] leading-relaxed text-[#555463]">
              <House
                size={13}
                className="shrink-0 text-[#123b73]"
              />
              <span>Designed for convenient home pregnancy testing</span>
            </div>
          </div>
        </div>

        {/* Product Image Card */}
        <div className="min-w-0 md:pl-1">
          <div className="relative mx-auto flex min-h-[230px] w-full max-w-[520px] items-center justify-center rounded-[22px] border border-white/90 bg-white p-3 shadow-[0_20px_30px_rgba(31,30,59,0.09),0_4px_8px_rgba(31,30,59,0.04)] sm:min-h-[280px] sm:p-5 md:min-h-[300px]">
            <img
              src={pregnancyKit}
              alt="Prega Gene home pregnancy test kit and product packaging"
              fetchPriority="high"
              className="block max-h-[350px] w-full rounded-lg bg-white object-contain"
            />

            {/* Hand Icon Badge */}
            <div
              aria-hidden="true"
              className="absolute bottom-3 left-3 grid h-8 w-8 place-items-center rounded-xl bg-white text-[#173f7a] shadow-[0_4px_12px_rgba(20,34,75,0.12)] sm:bottom-4 sm:left-4 sm:h-[34px] sm:w-[34px]"
            >
              <Hand size={15} strokeWidth={1.8} />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

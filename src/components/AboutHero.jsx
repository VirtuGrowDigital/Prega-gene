import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import aboutHeroImage from "../assets/images/how-to-use.png";

function CountUp({ end, suffix = "" }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let current = 0;
    const duration = 1400;
    const steps = 50;
    const increment = end / steps;
    const intervalTime = duration / steps;

    const timer = setInterval(() => {
      current += increment;

      if (current >= end) {
        current = end;
        clearInterval(timer);
      }

      setCount(Number(current.toFixed(1)));
    }, intervalTime);

    return () => clearInterval(timer);
  }, [end]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-[#fcfaff]">
      <div className="pointer-events-none absolute right-[5%] top-16 h-[420px] w-[420px] rounded-full bg-[#e7e9ff] opacity-70 blur-[100px]" />

      <div className="relative mx-auto grid min-h-[560px] w-[calc(100%-40px)] max-w-[1200px] items-center gap-12 py-16 md:grid-cols-2 md:gap-10 lg:py-20">

        {/* Left Content */}
        <div className="relative z-10 max-w-[590px]">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#e9eaff] px-3 py-1.5 text-[10px] font-semibold tracking-[0.12em] text-[#092c60]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#bd2d79]" />
            ABOUT PREGA GENE
          </span>

          <h1 className="mt-6 text-[38px] font-semibold leading-[1.12] tracking-[-0.04em] text-[#092c60] sm:text-5xl lg:text-[54px]">
            Healthcare should feel easier to understand.
          </h1>

          <p className="mt-5 max-w-[540px] text-[14px] leading-[1.8] text-[#555568] sm:text-[15px]">
            Pregnancy testing is a personal moment, full of questions. Prega
            Gene replaces confusing instructions and clinical coldness with
            clear results, responsible science and human reassurance.
          </p>

          {/* CTA Buttons */}
          <div className="mt-7 flex flex-wrap items-center gap-3">
            <Link
              to="/#the-test"
              className="inline-flex min-h-[44px] items-center gap-2 rounded-full bg-[#bd2d79] px-6 text-xs font-semibold text-white shadow-md shadow-[#bd2d79]/20 transition hover:-translate-y-0.5 hover:bg-[#a92168]"
            >
              Discover The Test
              <ArrowRight size={15} />
            </Link>

            <Link
              to="/how-to-use"
              className="inline-flex min-h-[44px] items-center gap-2 rounded-full bg-[#e9ebff] px-6 text-xs font-semibold text-[#092c60] transition hover:bg-[#dfe2ff]"
            >
              View Testing Guide
              <ArrowRight size={15} />
            </Link>
          </div>

          {/* Statistics */}
          <div className="mt-9 flex flex-wrap gap-x-8 gap-y-4">
            <div className="flex items-center gap-2">
              <CheckCircle2 size={15} className="text-[#bd2d79]" />
              <span className="text-xs font-medium text-[#464454]">
                <CountUp end={10} suffix=" mIU/mL" /> Sensitivity
              </span>
            </div>

            <div className="flex items-center gap-2">
              <CheckCircle2 size={15} className="text-[#bd2d79]" />
              <span className="text-xs font-medium text-[#464454]">
                <CountUp end={99.4} suffix="%" /> Validated Accuracy
              </span>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative mx-auto w-full max-w-[470px]">
          <div className="absolute -right-8 -top-8 h-40 w-40 rounded-full border border-[#bd2d79]/10 bg-[#e9eaff]/60 blur-2xl" />

          <div className="absolute -bottom-5 -left-5 h-32 w-32 rounded-full bg-[#f4dce9]/70 blur-3xl" />

          <div className="relative overflow-hidden rounded-[22px] shadow-[0_18px_45px_rgba(9,44,96,0.12)]">
            <img
              src={aboutHeroImage}
              alt="A woman holding a pregnancy test at home"
              className="aspect-[4/4.2] w-full object-cover object-center"
            />

            <div className="absolute bottom-4 left-4 right-4 rounded-xl border border-white/50 bg-white/85 px-4 py-3 shadow-lg backdrop-blur-md">
              <p className="text-sm font-semibold text-[#092c60]">
                Clarity in every step.
              </p>
              <p className="mt-1 text-[11px] text-[#666477]">
                Science-led guidance with a human touch.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
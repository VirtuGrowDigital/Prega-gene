
import { Link } from "react-router-dom";
import { ShieldCheck, LockKeyhole } from "lucide-react";

export default function ContactHero() {
  return (
    <section className="relative overflow-hidden bg-[#fcfaff]">
      {/* Background Gradient */}
      <div className="pointer-events-none absolute right-0 top-0 h-[380px] w-[55%] rounded-full bg-[#fceaf3] opacity-70 blur-[100px]" />

      <div className="relative mx-auto max-w-[1200px] px-5 pb-12 pt-8 sm:px-8 lg:px-10 lg:pb-16">

        {/* Breadcrumb */}
        <div className="mb-8 flex items-center gap-2 text-[11px] text-[#777487]">
          <Link to="/" className="transition hover:text-[#bd2d79]">
            Home
          </Link>

          <span>/</span>

          <span className="font-semibold text-[#092c60]">
            Contact & Support
          </span>
        </div>

        {/* Eyebrow */}
        <div className="mb-4 flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-[#bd2d79]" />

          <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#bd2d79]">
            Contact & Support
          </span>
        </div>

        {/* Heading */}
        <div className="max-w-[680px]">
          <h1 className="text-[38px] font-semibold leading-[1.12] tracking-[-0.04em] text-[#092c60] sm:text-5xl lg:text-[58px]">
            We’re here to help.
          </h1>

          <p className="mt-4 max-w-[620px] text-sm leading-7 text-[#555467] sm:text-base">
            Questions about Prega Gene, your order or your result?
            Our care team is ready to help, and your privacy comes first.
          </p>
        </div>

        {/* Trust Chips */}
        <div className="mt-6 flex flex-wrap items-center gap-2">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#eeeaf7] bg-white px-3 py-2 shadow-sm">
            <ShieldCheck size={13} className="text-[#bd2d79]" />

            <span className="text-[10px] font-medium text-[#092c60]">
              Discreet & Confidential Communication
            </span>
          </div>

          <span className="hidden text-[#c4bfd0] sm:block">•</span>

          <div className="inline-flex items-center gap-2 rounded-full border border-[#eeeaf7] bg-white px-3 py-2 shadow-sm">
            <LockKeyhole size={12} className="text-[#092c60]" />

            <span className="text-[10px] font-medium text-[#555467]">
              256-bit SSL Encryption
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

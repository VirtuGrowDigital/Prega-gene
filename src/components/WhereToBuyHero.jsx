import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ShieldCheck,
  Package,
  Thermometer,
  Truck,
  Store,
} from "lucide-react";

export default function WhereToBuyHero() {
  const [activeOption, setActiveOption] = useState("online");

  const trustPoints = [
    {
      icon: ShieldCheck,
      title: "100% Authentic",
      description: "Traceable lot & CE/IVD release",
    },
    {
      icon: Package,
      title: "Plain Packaging",
      description: "Neutral brown exterior box",
    },
    {
      icon: Thermometer,
      title: "Stored Correctly",
      description: "Kept between 4°C and 30°C",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#fcfaff]">
      {/* Soft Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-40 h-72 w-72 -translate-x-1/2 rounded-full bg-[#f8dce9] opacity-30 blur-[100px]" />

      <div className="relative mx-auto max-w-[1200px] px-5 pb-12 pt-8 sm:px-8 sm:pt-10 lg:px-10 lg:pb-14">

        {/* Breadcrumb */}
        <div className="mb-8 flex items-center gap-2 text-[11px] text-[#777486]">
          <Link
            to="/"
            className="transition hover:text-[#bd2d79]"
          >
            Home
          </Link>

          <span>/</span>

          <span className="font-semibold text-[#092c60]">
            Where to Buy
          </span>
        </div>

        {/* Eyebrow */}
        <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#e9eafa] px-3 py-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-[#bd2d79]" />
          <span className="text-[9px] font-bold tracking-[0.12em] text-[#092c60]">
            OFFICIAL PURCHASE DIRECTORY
          </span>
        </div>

        {/* Heading and Description */}
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-[650px]">
            <h1 className="text-[38px] font-semibold leading-[1.12] tracking-[-0.045em] text-[#092c60] sm:text-5xl lg:text-[56px]">
              Find Prega Gene near
              <br className="hidden sm:block" /> you.
            </h1>

            <p className="mt-4 max-w-[570px] text-sm leading-6 text-[#555365] sm:text-base sm:leading-7">
              Buy Prega Gene from approved online sellers and verified
              pharmacies. Every stockist supplies genuine, batch-checked
              tests.
            </p>
          </div>

          {/* Purchase Type Toggle */}
          <div className="inline-flex w-fit shrink-0 items-center rounded-full bg-[#e9eafa] p-1">
            <button
              type="button"
              onClick={() => setActiveOption("online")}
              className={`inline-flex min-h-[42px] items-center gap-2 rounded-full px-4 text-xs font-semibold transition-all ${
                activeOption === "online"
                  ? "bg-white text-[#092c60] shadow-sm"
                  : "text-[#555365] hover:text-[#092c60]"
              }`}
            >
              <Truck
                size={14}
                className={
                  activeOption === "online"
                    ? "text-[#bd2d79]"
                    : "text-current"
                }
              />
              Online Stockists
            </button>

            <button
              type="button"
              onClick={() => setActiveOption("store")}
              className={`inline-flex min-h-[42px] items-center gap-2 rounded-full px-4 text-xs font-semibold transition-all ${
                activeOption === "store"
                  ? "bg-white text-[#092c60] shadow-sm"
                  : "text-[#555365] hover:text-[#092c60]"
              }`}
            >
              <Store size={14} />
              In-Store Locator
            </button>
          </div>
        </div>

        {/* Trust Information */}
        <div className="mt-8 grid grid-cols-1 gap-4 rounded-2xl border border-[#f0edf6] bg-white p-5 shadow-[0_8px_30px_rgba(9,44,96,0.035)] sm:grid-cols-3 sm:gap-3 sm:p-6">
          {trustPoints.map((point, index) => {
            const Icon = point.icon;

            return (
              <div
                key={point.title}
                className={`flex items-center gap-3 ${
                  index !== 0
                    ? "border-t border-[#f0edf6] pt-4 sm:border-l sm:border-t-0 sm:pl-5 sm:pt-0"
                    : ""
                }`}
              >
                <div
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${
                    index === 1
                      ? "bg-[#fff0f6] text-[#bd2d79]"
                      : "bg-[#e9edff] text-[#092c60]"
                  }`}
                >
                  <Icon size={18} strokeWidth={1.8} />
                </div>

                <div>
                  <h3 className="text-xs font-bold text-[#092c60]">
                    {point.title}
                  </h3>

                  <p className="mt-1 text-[11px] leading-4 text-[#666477]">
                    {point.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
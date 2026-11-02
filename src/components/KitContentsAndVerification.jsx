
import {
  CheckCircle2,
  ShieldCheck,
  Package,
  LockKeyhole,
  QrCode,
  FileCheck2,
  BadgeCheck,
  Flag,
} from "lucide-react";

import { Link } from "react-router-dom";
import pregnancyKit from "../assets/images/article1.png";

const kitContents = [
  {
    title: "Prega Gene test wand",
    description:
      "Extra-wide 12mm absorbent tip and a clear, easy-to-read result window.",
    detail: "(2 in Dual Pack)",
  },
  {
    title: "Instructions for Use",
    description:
      "Step-by-step pictorial guide with a clear result interpretation chart.",
    detail: "",
  },
  {
    title: "Sealed foil pouch with desiccant",
    description:
      "Protects the test from moisture until it is ready to use.",
    detail: "",
  },
];

const verificationSteps = [
  {
    number: "01",
    icon: ShieldCheck,
    title: "Holographic Security Seal",
    description:
      "Check that both end flaps carry the colour-shifting holographic seal. It should be intact and clearly visible.",
  },
  {
    number: "02",
    icon: QrCode,
    title: "Unique QR Traceability",
    description:
      "Scan the QR code on the pouch using your smartphone to access the available batch and shelf-life verification details.",
  },
  {
    number: "03",
    icon: Package,
    title: "Hermetic Foil Integrity",
    description:
      "The diagnostic wand should be inside a completely sealed foil pouch with its desiccant. Never use a kit with damaged wrapping.",
  },
];

export default function KitContentsAndVerification() {
  return (
    <section className="bg-[#f0f1ff] px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-[1200px] space-y-10 lg:space-y-12">

        {/* WHAT'S IN THE BOX */}
        <div className="grid overflow-hidden rounded-2xl bg-white shadow-sm lg:grid-cols-2">

          {/* Product Image */}
          <div className="relative flex min-h-[300px] items-center justify-center bg-[#f7f4fb] p-6 sm:p-10 lg:min-h-[430px]">
            <img
              src={pregnancyKit}
              alt="Prega Gene pregnancy test kit"
              className="h-full max-h-[360px] w-full rounded-xl object-contain"
            />

            <div className="absolute bottom-5 right-5 flex items-center gap-2 rounded-full bg-[#092c60] px-4 py-2 text-[10px] font-semibold text-white shadow-lg">
              <BadgeCheck size={14} />
              Genuine Prega Gene Kit
            </div>
          </div>

          {/* Contents */}
          <div className="flex flex-col justify-center p-6 sm:p-9 lg:p-12">
            <span className="mb-4 w-fit rounded-full bg-[#fce5ef] px-3 py-1 text-[10px] font-semibold tracking-wide text-[#bd2d79]">
              STANDARD RETAIL KIT
            </span>

            <h2 className="text-2xl font-bold leading-tight tracking-tight text-[#092c60] sm:text-3xl">
              What’s inside every genuine pack
            </h2>

            <p className="mt-3 text-sm leading-6 text-[#656477]">
              Each sealed Prega Gene pack contains the essential testing
              components, individually checked before dispatch.
            </p>

            <div className="mt-7 space-y-3">
              {kitContents.map((item, index) => (
                <div
                  key={item.title}
                  className="flex gap-3 rounded-xl bg-[#f2f3ff] p-4"
                >
                  <CheckCircle2
                    size={18}
                    className="mt-0.5 shrink-0 text-[#bd2d79]"
                  />

                  <div>
                    <h3 className="text-sm font-semibold text-[#092c60]">
                      {item.title}
                      {item.detail && (
                        <span className="font-normal text-[#656477]">
                          {" "}
                          {item.detail}
                        </span>
                      )}
                    </h3>

                    <p className="mt-1 text-xs leading-5 text-[#656477]">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Trust Chips */}
            <div className="mt-6 flex flex-wrap gap-4 border-t border-gray-100 pt-5">
              <span className="flex items-center gap-1.5 text-[10px] font-medium text-[#464454]">
                <LockKeyhole size={13} className="text-[#092c60]" />
                Plain outer shipping
              </span>

              <span className="flex items-center gap-1.5 text-[10px] font-medium text-[#464454]">
                <BadgeCheck size={13} className="text-[#092c60]" />
                Batch-tested lot
              </span>
            </div>
          </div>
        </div>

        {/* VERIFY YOUR KIT */}
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#123b73] via-[#092c60] to-[#071e48] p-6 text-white shadow-lg sm:p-9 lg:p-12">

          {/* Subtle background decoration */}
          <div className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full bg-[#bd2d79]/20 blur-3xl" />

          <div className="relative z-10">
            <span className="text-[10px] font-semibold tracking-[0.18em] text-[#f5a6cb]">
              AUTHENTICITY CHECK
            </span>

            <h2 className="mt-3 max-w-2xl text-2xl font-bold leading-tight sm:text-3xl">
              How to verify your genuine Prega Gene kit
            </h2>

            <p className="mt-3 max-w-2xl text-sm leading-6 text-blue-100/70">
              Three simple checks can help you verify your pack before
              using it.
            </p>

            {/* Verification Cards */}
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {verificationSteps.map((step) => {
                const Icon = step.icon;

                return (
                  <div
                    key={step.number}
                    className="rounded-xl border border-white/10 bg-[#061f4b]/50 p-5 transition duration-300 hover:-translate-y-1 hover:bg-[#061f4b]/80"
                  >
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#bd2d79] text-sm font-bold text-white">
                      {step.number}
                    </div>

                    <Icon
                      size={22}
                      className="mt-5 text-[#f5a6cb]"
                    />

                    <h3 className="mt-3 text-base font-semibold text-white">
                      {step.title}
                    </h3>

                    <p className="mt-2 text-xs leading-6 text-blue-100/65">
                      {step.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Notice */}
            <div className="mt-8 flex flex-col gap-5 border-t border-white/15 pt-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex max-w-2xl gap-3">
                <FileCheck2
                  size={18}
                  className="mt-0.5 shrink-0 text-[#f5a6cb]"
                />

                <p className="text-xs leading-5 text-blue-100/75">
                  Prega Gene recommends purchasing through verified
                  pharmacies and approved sellers. Be cautious of
                  unauthorised third-party listings.
                </p>
              </div>

              <Link
                to="/#contact"
                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-[#bd2d79] px-5 py-3 text-xs font-semibold text-white transition hover:bg-[#a92168]"
              >
                <Flag size={14} />
                Report Suspicious Product
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

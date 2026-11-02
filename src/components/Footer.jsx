
import {
  ShieldCheck,
  LockKeyhole,
  CircleCheck,
  Info,
} from "lucide-react";

import { Link } from "react-router-dom";

const currentYear = new Date().getFullYear();

const footerColumns = [
  {
    title: "Navigation & Journey",
    links: [
      { label: "The Test", to: "/#the-test" },
      { label: "About Prega Gene", to: "/about" },
      { label: "How to Use", to: "/how-to-use" },
      { label: "Understand Results", to: "/understand-results" },
      { label: "Learn & Resources", to: "/learn" },
      {
        label: "When to Take a Pregnancy Test",
        to: "/learn/when-to-take-a-pregnancy-test",
      },
      { label: "FAQs", to: "/faq" },
    ],
  },
  {
    title: "Patient Care & Access",
    links: [
      { label: "Where to Buy", to: "/where-to-buy" },
      { label: "Contact & Support", to: "/contact" },
    ],
  },
  {
    title: "Quality & Regulatory",
    links: [
      { label: "Privacy Policy", to: "/privacy-policy" },
      { label: "Terms of Use", to: "/terms-of-use" },
      {
        label: "Medical Disclaimer",
        to: "/terms-of-use#medical-notice",
      },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#f0f1ff] px-5 pb-5 pt-10 sm:px-8 sm:pt-12">
      <div className="mx-auto max-w-[1100px]">

        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-[1.5fr_0.9fr_0.95fr_0.9fr] lg:gap-8">

          {/* Brand Section */}
          <div>
            <Link
              to="/"
              className="inline-block text-[17px] font-bold tracking-tight text-[#092c60]"
            >
              Prega Gene
            </Link>

            <p className="mt-3 max-w-[310px] text-[11px] leading-[1.8] text-[#626071] sm:text-xs">
              A home pregnancy testing solution designed to help you detect
              hCG in urine and understand your result through clear
              instructions and straightforward guidance.
            </p>

            {/* Trust Labels */}
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#e2e6fc] px-2.5 py-1.5 text-[9px] font-semibold text-[#173f7a]">
                <ShieldCheck size={11} />
                Product Quality
              </span>

              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#e2e6fc] px-2.5 py-1.5 text-[9px] font-semibold text-[#173f7a]">
                <CircleCheck size={11} />
                Responsible Testing
              </span>

              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#e2e6fc] px-2.5 py-1.5 text-[9px] font-semibold text-[#173f7a]">
                <LockKeyhole size={11} />
                Privacy Awareness
              </span>
            </div>
          </div>

          {/* Navigation Columns */}
          {footerColumns.map((column) => (
            <div key={column.title}>
              <h3 className="mb-3 text-[11px] font-bold text-[#092c60] sm:text-xs">
                {column.title}
              </h3>

              <ul className="space-y-2.5">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-[11px] leading-relaxed text-[#626071] transition hover:text-[#bd2d79] sm:text-xs"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Medical Disclaimer */}
        <div
          id="medical-disclaimer"
          className="mt-8 flex scroll-mt-24 items-start gap-2.5 rounded-xl border border-white/80 bg-white/65 px-4 py-4"
        >
          <Info
            size={14}
            className="mt-0.5 shrink-0 text-[#173f7a]"
          />

          <p className="text-[10px] leading-[1.8] text-[#46465b] sm:text-[11px]">
            <span className="font-bold text-[#18223b]">
              Medical Disclaimer:
            </span>{" "}
            Prega Gene is an in-vitro diagnostic test intended for the
            detection of hCG in human urine. Results should be interpreted
            according to the product instructions. Consult a qualified
            healthcare professional for medical advice and confirmation.
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="mt-5 flex flex-col gap-3 border-t border-[#dedff0] pt-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[10px] leading-relaxed text-[#626071]">
            © {currentYear} Prega Gene Diagnostics Ltd. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <span className="inline-flex items-center gap-1.5 text-[10px] text-[#46465b]">
              <CircleCheck size={12} className="text-[#bd2d79]" />
              Confidentiality & Responsible Testing
            </span>

            <Link
              to="/privacy-policy"
              className="text-[10px] text-[#626071] transition hover:text-[#bd2d79]"
            >
              Privacy
            </Link>

            <Link
              to="/terms-of-use"
              className="text-[10px] text-[#626071] transition hover:text-[#bd2d79]"
            >
              Terms
            </Link>

            <Link
              to="/contact"
              className="text-[10px] text-[#626071] transition hover:text-[#bd2d79]"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

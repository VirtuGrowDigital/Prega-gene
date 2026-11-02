
import { Link } from "react-router-dom";
import { useState } from "react";
import {
  Home,
  ShieldCheck,
  Printer,
  Download,
  Clock3,
  LockKeyhole,
} from "lucide-react";

export default function PrivacyPolicyHeader() {
  const [downloading, setDownloading] = useState(false);

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    // Connect this to your approved Privacy Policy PDF when available.
    const pdfUrl = "/documents/prega-gene-privacy-policy.pdf";

    setDownloading(true);

    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Prega-Gene-Privacy-Policy.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setTimeout(() => setDownloading(false), 1000);
  };

  return (
    <section className="bg-[#fcfaff] px-5 pb-8 pt-8 sm:px-8 lg:pt-10">
      <div className="mx-auto max-w-[1200px]">

        {/* Breadcrumb */}
        <div className="mb-6 flex flex-wrap items-center gap-2 text-[11px] text-[#777588]">
          <Link
            to="/"
            className="inline-flex items-center gap-1 transition hover:text-[#bd2d79]"
          >
            <Home size={12} />
            Home
          </Link>

          <span>/</span>
          <span>Legal</span>
          <span>/</span>

          <span className="font-semibold text-[#092c60]">
            Privacy Policy
          </span>
        </div>

        {/* Heading and Actions */}
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">

          <div>
            <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-[#e9eaff] px-3 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-[#bd2d79]" />
              <span className="text-[9px] font-bold tracking-[0.14em] text-[#092c60]">
                LEGAL & DATA PROTECTION
              </span>
            </div>

            <h1 className="text-3xl font-semibold tracking-tight text-[#092c60] sm:text-4xl lg:text-[42px]">
              Privacy Policy
            </h1>

            {/* Metadata */}
            <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-[10px] text-[#777588]">
              <span className="inline-flex items-center gap-1.5">
                <Clock3 size={12} />
                Last updated: November 1, 2026
              </span>

              <span>Effective: November 1, 2026</span>
              <span>Version 1.0</span>
              <span>6 min read</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handlePrint}
              className="inline-flex min-h-[40px] items-center justify-center gap-2 rounded-lg border border-[#e3e3f2] bg-white px-4 text-xs font-semibold text-[#092c60] transition hover:border-[#bd2d79] hover:text-[#bd2d79]"
            >
              <Printer size={14} />
              Print
            </button>

            <button
              type="button"
              onClick={handleDownload}
              disabled={downloading}
              className="inline-flex min-h-[40px] items-center justify-center gap-2 rounded-lg bg-[#092c60] px-4 text-xs font-semibold text-white transition hover:bg-[#123b73] disabled:opacity-60"
            >
              <Download size={14} />
              {downloading ? "Preparing..." : "Download PDF"}
            </button>
          </div>
        </div>

        {/* Privacy Promise */}
        <div className="mt-7 rounded-xl border border-[#e4e5f8] bg-gradient-to-r from-[#f0f1ff] to-[#e9eaff] p-5 sm:p-6">
          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#dfe3fb] text-[#092c60]">
              <ShieldCheck size={20} />
            </div>

            <div>
              <div className="flex flex-wrap items-center gap-2">
                <h2 className="text-sm font-semibold text-[#092c60]">
                  Our Core Privacy Promise
                </h2>

                <span className="rounded-full bg-[#fce6f1] px-2 py-1 text-[8px] font-bold text-[#bd2d79]">
                  ZERO COMPROMISE
                </span>
              </div>

              <p className="mt-2 max-w-4xl text-xs leading-6 text-[#555568]">
                Pregnancy testing is personal. We do not sell your
                personal data. Information entered into our timing
                calculator is processed in your browser, and your
                test result is not uploaded to us through this website.
              </p>

              <div className="mt-3 flex flex-wrap items-center gap-4 text-[9px] font-medium text-[#092c60]">
                <span className="inline-flex items-center gap-1.5">
                  <LockKeyhole size={12} />
                  Privacy-focused
                </span>

                <span className="inline-flex items-center gap-1.5">
                  <ShieldCheck size={12} />
                  Data protection
                </span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

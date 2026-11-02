
import { Link } from "react-router-dom";
import { Printer, Download, Clock } from "lucide-react";

export default function TermsHeader() {
  const handlePrint = () => window.print();

  return (
    <section className="bg-[#fcfaff] px-5 pb-8 pt-8 sm:px-8">
      <div className="mx-auto max-w-[1100px]">
        {/* Breadcrumb */}
        <div className="mb-6 flex flex-wrap items-center gap-2 text-[11px] text-[#626071]">
          <Link to="/" className="hover:text-[#bd2d79]">
            Home
          </Link>
          <span>/</span>
          <span>Legal</span>
          <span>/</span>
          <span className="font-semibold text-[#092c60]">
            Terms of Use
          </span>
        </div>

        {/* Heading */}
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div className="max-w-[720px]">
            <span className="inline-flex rounded-full bg-[#edf0ff] px-3 py-1.5 text-[9px] font-bold uppercase tracking-wider text-[#173f7a]">
              Legal & Regulatory Transparency
            </span>

            <h1 className="mt-4 text-3xl font-bold tracking-tight text-[#092c60] sm:text-4xl">
              Terms of Use & Medical Disclaimer
            </h1>

            <p className="mt-3 max-w-[680px] text-sm leading-6 text-[#626071]">
              The rules for using our website, guides and tools, and what
              our test can and cannot tell you.
            </p>
          </div>

          {/* Actions */}
          <div className="flex shrink-0 gap-2">
            <button
              type="button"
              onClick={handlePrint}
              className="inline-flex min-h-[42px] items-center gap-2 rounded-lg border border-[#e3e3f0] bg-white px-4 text-xs font-semibold text-[#092c60] transition hover:bg-[#f0f1ff]"
            >
              <Printer size={14} />
              Print Document
            </button>

            <a
              href="/terms-of-use.pdf"
              download
              className="inline-flex min-h-[42px] items-center gap-2 rounded-lg bg-[#092c60] px-4 text-xs font-semibold text-white transition hover:bg-[#123b73]"
            >
              <Download size={14} />
              Download PDF
            </a>
          </div>
        </div>

        {/* Metadata */}
        <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3 rounded-lg bg-[#f0f1ff] px-4 py-3 text-[10px] text-[#626071]">
          <span>
            Effective Date:{" "}
            <strong className="text-[#092c60]">[Add Date]</strong>
          </span>

          <span className="hidden text-[#c4c5d8] sm:inline">•</span>

          <span>
            Document Version:{" "}
            <strong className="text-[#092c60]">[Version]</strong>
          </span>

          <span className="hidden text-[#c4c5d8] sm:inline">•</span>

          <span>
            Applies to:{" "}
            <strong className="text-[#092c60]">Prega Gene Website & Digital Services</strong>
          </span>
        </div>
      </div>
    </section>
  );
}

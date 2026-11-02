
import { Printer, Download, ShieldCheck } from "lucide-react";

export default function TermsHero() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <section className="bg-[#fcfaff] px-5 pb-6 pt-8 sm:px-8">
      <div className="mx-auto max-w-[1100px]">
        {/* Breadcrumb */}
        <div className="mb-5 flex flex-wrap items-center gap-2 text-[10px] text-[#777486]">
          <a href="/" className="transition hover:text-[#bd2d79]">
            Home
          </a>
          <span>/</span>
          <span>Legal</span>
          <span>/</span>
          <span className="font-medium text-[#092c60]">
            Terms of Use & Medical Disclaimer
          </span>
        </div>

        {/* Heading and actions */}
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div className="max-w-[700px]">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#edf0ff] px-3 py-1 text-[9px] font-bold uppercase tracking-wider text-[#173f7a]">
              <ShieldCheck size={11} />
              Legal & Regulatory Transparency
            </span>

            <h1 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-[#092c60] sm:text-4xl">
              Terms of Use & Medical Disclaimer
            </h1>

            <p className="mt-2 max-w-[650px] text-xs leading-[1.8] text-[#626071] sm:text-sm">
              Essential guidelines governing your interactions with Prega
              Gene digital diagnostics, educational literature, and
              authorized consumer resources.
            </p>
          </div>

          <div className="flex shrink-0 flex-wrap gap-2">
            <button
              type="button"
              onClick={handlePrint}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#edf0ff] px-4 py-2 text-[10px] font-semibold text-[#092c60] transition hover:bg-[#e1e5ff]"
            >
              <Printer size={12} />
              Print Document
            </button>

            <a
              href="/terms-of-use.pdf"
              download
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#092c60] px-4 py-2 text-[10px] font-semibold text-white transition hover:bg-[#123b73]"
            >
              <Download size={12} />
              Download PDF
            </a>
          </div>
        </div>

        {/* Metadata */}
        <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 rounded-xl bg-[#f0f1ff] px-4 py-3 text-[9px] text-[#626071] sm:text-[10px]">
          <span>
            Effective Date:{" "}
            <strong className="text-[#092c60]">[Insert Date]</strong>
          </span>

          <span className="hidden text-[#c4c2d2] sm:block">•</span>

          <span>
            Document Version:{" "}
            <strong className="text-[#092c60]">
              [Version Number]
            </strong>
          </span>

          <span className="hidden text-[#c4c2d2] sm:block">•</span>

          <span>
            Scope:{" "}
            <strong className="text-[#092c60]">
              PregaGene.com & Official Digital Services
            </strong>
          </span>

          <span className="inline-flex items-center gap-1 font-semibold text-[#bd2d79]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#bd2d79]" />
            Mandatory Consumer Notice
          </span>
        </div>
      </div>
    </section>
  );
}

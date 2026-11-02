
import { Link } from "react-router-dom";
import {
  CircleHelp,
  PhoneCall,
  FileText,
  ArrowUpRight,
} from "lucide-react";

const supportOptions = [
  {
    title: "FAQs",
    subtitle: "Common Questions",
    description:
      "Explore answers to frequently asked questions about home pregnancy testing and reading results.",
    Icon: CircleHelp,
    href: "/#faq",
    external: false,
  },
  {
    title: "Clinical Helpline",
    subtitle: "Speak to Our Team",
    description:
      "Contact the support team for help understanding product instructions and next steps.",
    Icon: PhoneCall,
    href: "#contact",
    external: false,
  },
  {
    title: "Official PDF",
    subtitle: "Printable Test Guide",
    description:
      "Download the official leaflet for the complete testing procedure, precautions, and result guide.",
    Icon: FileText,
    href: "/prega-gene-leaflet.pdf",
    external: true,
  },
];

export default function PatientCareAssistance() {
  return (
    <section
      id="patient-care"
      className="bg-[#fcfaff] px-4 py-12 sm:px-6 sm:py-16 lg:px-8"
    >
      <div className="mx-auto max-w-[1200px]">
        <div className="grid gap-6 rounded-2xl border border-[#e8e8f8] bg-gradient-to-br from-[#e9ebff] to-[#f4f2ff] p-5 shadow-[0_4px_10px_rgba(9,44,96,0.05)] sm:p-7 lg:grid-cols-[1fr_1.05fr] lg:items-center lg:gap-8 lg:p-8">
          {/* Intro */}
          <div>
            <p className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-white/80 px-3 py-1 text-[9px] font-semibold text-[#bd2d79]">
              <HeartIcon />
              Patient Care &amp; Assistance
            </p>

            <h2 className="text-2xl font-semibold tracking-tight text-[#092c60] sm:text-3xl">
              Need help using your test?
            </h2>

            <p className="mt-2 max-w-lg text-xs leading-6 text-[#5d5b6b] sm:text-sm">
              Find guidance on pregnancy test instructions, result
              interpretation, and common testing questions.
            </p>
          </div>

          {/* Support cards */}
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            {supportOptions.map(
              ({ title, subtitle, description, Icon, href, external }) => (
                <div
                  key={title}
                  className="flex min-w-0 flex-col rounded-xl border border-white/80 bg-white/85 p-4 text-center transition hover:-translate-y-1 hover:shadow-md"
                >
                  <div className="mx-auto mb-3 flex h-9 w-9 items-center justify-center rounded-full bg-[#e9ebff] text-[#092c60]">
                    <Icon size={16} />
                  </div>

                  <h3 className="text-xs font-semibold text-[#092c60]">
                    {title}
                  </h3>

                  <p className="mt-1 text-[10px] font-medium text-[#5d5b6b]">
                    {subtitle}
                  </p>

                  <p className="mt-2 flex-1 text-[10px] leading-5 text-[#68677a]">
                    {description}
                  </p>

                  {external ? (
                    <a
                      href={href}
                      download
                      className="mt-3 inline-flex items-center justify-center gap-1 text-[10px] font-semibold text-[#bd2d79] hover:underline"
                    >
                      Download Guide
                      <ArrowUpRight size={12} />
                    </a>
                  ) : (
                    <Link
                      to={href}
                      className="mt-3 inline-flex items-center justify-center gap-1 text-[10px] font-semibold text-[#bd2d79] hover:underline"
                    >
                      {title === "FAQs" ? "View FAQs" : "Get Assistance"}
                      <ArrowUpRight size={12} />
                    </Link>
                  )}
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function HeartIcon() {
  return <CircleHelp size={12} />;
}


import {
  Gavel,
  Mail,
  Phone,
  MapPin,
  MessageSquare,
  ArrowUpRight,
  ShieldCheck,
} from "lucide-react";

const versionHistory = [
  {
    version: "v2.4 (Current)",
    date: "[Effective date]",
    summary: "[Add summary of current policy changes.]",
  },
  {
    version: "v2.3",
    date: "[Previous date]",
    summary: "[Add summary of previous policy changes.]",
  },
  {
    version: "v2.0",
    date: "[Previous date]",
    summary: "[Add summary of earlier policy changes.]",
  },
];

export default function PrivacyPolicyClosing() {
  return (
    <>
      <section className="bg-[#faf9ff] px-5 pb-14 sm:px-8">
        <div className="mx-auto max-w-[780px] rounded-2xl border border-[#eeedf6] bg-white px-5 py-8 sm:px-7 sm:py-10">

          {/* SECTION 07 */}
          <section id="dpo" className="scroll-mt-28">
            <div className="mb-4 flex items-center gap-2">
              <span className="rounded-sm bg-[#e8eaff] px-2 py-1 text-[9px] font-bold text-[#173f7a]">
                07
              </span>

              <h2 className="text-xl font-bold tracking-tight text-[#092c60] sm:text-2xl">
                Contact Our Data Protection Officer
              </h2>
            </div>

            <p className="mb-5 text-xs leading-6 text-[#626071] sm:text-sm">
              Our Data Protection Office reviews privacy compliance,
              customer privacy requests, and reported data incidents.
            </p>

            <div className="rounded-xl border border-[#e6e8f8] bg-[#f0f1ff] p-4 sm:p-5">
              <div className="flex items-start gap-3 border-b border-[#dfe2f3] pb-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#092c60] text-white">
                  <Gavel size={18} />
                </div>

                <div>
                  <h3 className="text-sm font-bold text-[#092c60]">
                    Office of Data Governance & Privacy
                  </h3>
                  <p className="mt-1 text-[11px] text-[#626071]">
                    [Company legal name]
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 pt-4 sm:grid-cols-2">
                <div>
                  <div className="mb-1 flex items-center gap-2 text-[9px] font-semibold uppercase tracking-wide text-[#77768a]">
                    <Mail size={12} />
                    Direct Email
                  </div>

                  <a
                    href="mailto:privacy@pregagene.com"
                    className="text-xs font-semibold text-[#092c60] hover:text-[#bd2d79]"
                  >
                    privacy@pregagene.com
                  </a>
                </div>

                <div>
                  <div className="mb-1 flex items-center gap-2 text-[9px] font-semibold uppercase tracking-wide text-[#77768a]">
                    <Phone size={12} />
                    Helpline
                  </div>

                  <a
                    href="tel:18007734243"
                    className="text-xs font-semibold text-[#092c60] hover:text-[#bd2d79]"
                  >
                    1800-PREGA-GENE
                  </a>

                  <p className="mt-1 text-[10px] text-[#626071]">
                    Mon–Fri, 9 AM–6 PM IST
                  </p>
                </div>
              </div>

              <div className="mt-4 border-t border-[#dfe2f3] pt-4">
                <div className="mb-1 flex items-center gap-2 text-[9px] font-semibold uppercase tracking-wide text-[#77768a]">
                  <MapPin size={12} />
                  Registered Address
                </div>

                <p className="text-[11px] leading-[1.8] text-[#46465b]">
                  [Registered corporate address], India
                </p>
              </div>
            </div>
          </section>

          <div className="my-9 h-px bg-[#e9e8f2]" />

          {/* SECTION 08 */}
          <section id="policy-updates" className="scroll-mt-28">
            <div className="mb-4 flex items-center gap-2">
              <span className="rounded-sm bg-[#e8eaff] px-2 py-1 text-[9px] font-bold text-[#173f7a]">
                08
              </span>

              <h2 className="text-xl font-bold tracking-tight text-[#092c60] sm:text-2xl">
                Policy Updates & Revision History
              </h2>
            </div>

            <p className="mb-5 text-xs leading-6 text-[#626071] sm:text-sm">
              We update this policy when our services, applicable laws,
              or systems change. We’ll make significant changes clear
              on our website.
            </p>

            <div className="overflow-hidden rounded-xl border border-[#e9e9f4]">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[530px] border-collapse text-left">
                  <thead>
                    <tr className="bg-[#f0f1ff]">
                      <th className="px-4 py-3 text-[10px] font-bold text-[#092c60]">
                        Version
                      </th>
                      <th className="px-4 py-3 text-[10px] font-bold text-[#092c60]">
                        Effective Date
                      </th>
                      <th className="px-4 py-3 text-[10px] font-bold text-[#092c60]">
                        Summary of Key Modifications
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {versionHistory.map((item, index) => (
                      <tr
                        key={item.version}
                        className={
                          index !== versionHistory.length - 1
                            ? "border-b border-[#eeeef5]"
                            : ""
                        }
                      >
                        <td className="px-4 py-4 text-[10px] font-semibold text-[#092c60]">
                          {item.version}
                        </td>

                        <td className="px-4 py-4 text-[10px] text-[#626071]">
                          {item.date}
                        </td>

                        <td className="px-4 py-4 text-[10px] leading-[1.7] text-[#626071]">
                          {item.summary}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

        </div>
      </section>

      {/* PRIVACY DOCUMENT CTA */}
      <section className="bg-[#f0f1ff] px-5 py-8 sm:px-8">
        <div className="mx-auto flex max-w-[780px] flex-col gap-3 rounded-xl border border-white bg-white p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
          <div>
            <h3 className="text-sm font-bold text-[#092c60]">
              Need Further Privacy or Quality Documentation?
            </h3>

            <p className="mt-1 max-w-lg text-[11px] leading-[1.7] text-[#626071]">
              Contact our team for privacy-related questions or
              additional product quality information.
            </p>
          </div>

          <a
            href="mailto:privacy@pregagene.com"
            className="inline-flex min-h-[38px] shrink-0 items-center justify-center gap-2 rounded-lg bg-[#092c60] px-4 text-[10px] font-semibold text-white transition hover:bg-[#bd2d79]"
          >
            Contact Privacy Team
            <ArrowUpRight size={13} />
          </a>
        </div>
      </section>

      {/* FEEDBACK AND LEGAL LINKS */}
      <PrivacyFeedback />
    </>
  );
}

function PrivacyFeedback() {
  const handleFeedback = (answer) => {
    const subject = encodeURIComponent("Privacy Policy Feedback");
    const body = encodeURIComponent(
      `Was this Privacy Policy clear and easy to understand? ${answer}\n\nMy feedback:`
    );

    window.location.href = `mailto:privacy@pregagene.com?subject=${subject}&body=${body}`;
  };

  return (
    <section className="border-t border-[#e4e4f0] bg-[#f0f1ff] px-5 py-6 sm:px-8">
      <div className="mx-auto flex max-w-[1100px] flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

        <div className="flex flex-wrap items-center gap-3">
          <p className="text-[10px] font-semibold text-[#092c60]">
            Was this policy clear and easy to understand?
          </p>

          <button
            type="button"
            onClick={() => handleFeedback("Yes")}
            className="rounded-md border border-[#e1e3f2] bg-white px-3 py-2 text-[10px] font-semibold text-[#092c60] transition hover:border-[#bd2d79] hover:text-[#bd2d79]"
          >
            👍 Yes
          </button>

          <button
            type="button"
            onClick={() => handleFeedback("No")}
            className="rounded-md border border-[#e1e3f2] bg-white px-3 py-2 text-[10px] font-semibold text-[#092c60] transition hover:border-[#bd2d79] hover:text-[#bd2d79]"
          >
            👎 No
          </button>

          <a
            href="mailto:privacy@pregagene.com?subject=Privacy%20Policy%20Feedback"
            className="text-[10px] text-[#626071] underline underline-offset-2 hover:text-[#bd2d79]"
          >
            Give Feedback
          </a>
        </div>

        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[10px] text-[#626071]">
          <a
            href="/terms-of-service"
            className="transition hover:text-[#bd2d79]"
          >
            Terms of Service
          </a>

          <span className="text-[#c5c5d3]">•</span>

          <a
            href="/#medical-disclaimer"
            className="transition hover:text-[#bd2d79]"
          >
            Medical Disclaimer
          </a>

          <span className="text-[#c5c5d3]">•</span>

          <a
            href="/#contact"
            className="transition hover:text-[#bd2d79]"
          >
            Contact
          </a>
        </div>
      </div>
    </section>
  );
}

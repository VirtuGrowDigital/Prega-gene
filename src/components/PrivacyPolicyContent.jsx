
import { useState } from "react";
import {
  ShieldCheck,
  Mail,
  ChevronRight,
  UserRound,
  Activity,
  Calculator,
  LockKeyhole,
} from "lucide-react";

const sections = [
  { id: "information-we-collect", title: "Information We Collect" },
  { id: "data-security", title: "Data Security & Encryption" },
  { id: "service-providers", title: "Third-Party Service Providers" },
  { id: "privacy-rights", title: "Your Privacy Rights & Choices" },
  { id: "data-protection-officer", title: "Data Protection Officer" },
  { id: "policy-updates", title: "Policy Updates & Changes" },
];

export default function PrivacyPolicyContent() {
  const [activeSection, setActiveSection] = useState(
    "information-we-collect"
  );

  const handleSectionClick = (id) => {
    setActiveSection(id);

    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section className="bg-[#fcfaff] px-5 pb-16 sm:px-8 lg:pb-24">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-start gap-6 lg:grid-cols-[290px_minmax(0,1fr)]">

        {/* LEFT SIDEBAR */}
        <aside className="space-y-4 lg:sticky lg:top-6">

          {/* Table of Contents */}
          <div className="rounded-xl border border-[#e9e8f5] bg-white p-5 shadow-sm">
            <div className="mb-5 flex items-center justify-between">
              <h2 className="text-[10px] font-bold tracking-[0.12em] text-[#777588]">
                ON THIS PAGE
              </h2>

              <span className="rounded-full bg-[#f0f1ff] px-2 py-1 text-[9px] font-semibold text-[#092c60]">
                6 Sections
              </span>
            </div>

            <nav className="space-y-1">
              {sections.map((section, index) => (
                <button
                  key={section.id}
                  type="button"
                  onClick={() => handleSectionClick(section.id)}
                  className={`flex w-full items-center gap-2 rounded-lg px-3 py-2.5 text-left text-[11px] transition ${
                    activeSection === section.id
                      ? "bg-[#e9eaff] font-semibold text-[#092c60]"
                      : "text-[#626274] hover:bg-[#f7f7fd] hover:text-[#092c60]"
                  }`}
                >
                  <span className="text-[9px] font-bold text-[#9291a5]">
                    {index + 1}.
                  </span>

                  <span>{section.title}</span>

                  {activeSection === section.id && (
                    <ChevronRight
                      size={13}
                      className="ml-auto text-[#bd2d79]"
                    />
                  )}
                </button>
              ))}
            </nav>
          </div>

          {/* Privacy Questions */}
          <div className="rounded-xl border border-[#e9e8f5] bg-white p-5 shadow-sm">
            <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-[#e9eaff] text-[#092c60]">
              <ShieldCheck size={18} />
            </div>

            <h3 className="text-sm font-semibold text-[#092c60]">
              Privacy Questions?
            </h3>

            <p className="mt-2 text-[11px] leading-5 text-[#626274]">
              Have questions about your personal data or privacy
              rights? Our team is here to help.
            </p>

            <p className="mt-3 text-[10px] font-medium text-[#626274]">
              We aim to reply within 24 business hours.
            </p>

            <a
              href="mailto:privacy@pregagene.com"
              className="mt-4 inline-flex items-center gap-2 text-[11px] font-semibold text-[#bd2d79] hover:underline"
            >
              <Mail size={13} />
              privacy@pregagene.com
            </a>
          </div>
        </aside>

        {/* RIGHT POLICY CONTENT */}
        <div className="min-w-0 space-y-6">

          {/* Section 01: Information We Collect */}
          <article
            id="information-we-collect"
            className="scroll-mt-8 rounded-xl border border-[#e9e8f5] bg-white p-5 shadow-sm sm:p-7"
          >
            <div className="mb-4 flex items-center gap-3">
              <span className="flex h-7 w-7 items-center justify-center rounded-md bg-[#e9eaff] text-[10px] font-bold text-[#092c60]">
                01
              </span>

              <h2 className="text-lg font-semibold text-[#092c60]">
                Information We Collect
              </h2>
            </div>

            <p className="mb-5 text-xs leading-6 text-[#626274]">
              We collect only the information needed to process orders,
              respond to enquiries and keep our website secure and
              functional.
            </p>

            {/* 1.1 Details You Give Us */}
            <div className="mb-3 rounded-lg bg-[#f0f1ff] p-4">
              <div className="mb-2 flex items-center gap-2">
                <UserRound size={15} className="text-[#092c60]" />

                <h3 className="text-xs font-semibold text-[#092c60]">
                  1.1 Details You Give Us
                </h3>
              </div>

              <p className="text-[11px] leading-5 text-[#626274]">
                When you place an order, contact customer support or
                subscribe to our newsletter, we may collect details
                such as your name, email address, delivery address and
                phone number. We use this information to fulfil orders
                and respond to your requests.
              </p>
            </div>

            {/* 1.2 Usage Data */}
            <div className="mb-3 rounded-lg bg-[#f0f1ff] p-4">
              <div className="mb-2 flex items-center gap-2">
                <Activity size={15} className="text-[#092c60]" />

                <h3 className="text-xs font-semibold text-[#092c60]">
                  1.2 Usage Data
                </h3>
              </div>

              <p className="text-[11px] leading-5 text-[#626274]">
                We may collect basic technical information, including
                browser type, device type, anonymised IP information,
                approximate location and pages visited. This helps us
                maintain website security, understand site performance
                and improve functionality.
              </p>
            </div>

            {/* 1.3 Calculator Entries */}
            <div className="rounded-lg bg-[#f0f1ff] p-4">
              <div className="mb-2 flex items-center gap-2">
                <Calculator size={15} className="text-[#092c60]" />

                <h3 className="text-xs font-semibold text-[#092c60]">
                  1.3 Calculator Entries
                </h3>
              </div>

              <p className="text-[11px] leading-5 text-[#626274]">
                Dates and cycle information entered into our timing
                calculator are processed in your browser. We do not
                intentionally store these entries on our servers.
                This applies to the calculator as currently designed
                and may change if its functionality changes.
              </p>
            </div>

            {/* No Results Stored */}
            <div className="mt-4 flex items-start gap-3 rounded-lg border border-[#f3dce8] bg-[#fff6fa] p-4">
              <div className="mt-0.5 text-[#bd2d79]">
                <LockKeyhole size={16} />
              </div>

              <div>
                <h3 className="text-xs font-semibold text-[#092c60]">
                  No Test Results Stored
                </h3>

                <p className="mt-1 text-[11px] leading-5 text-[#626274]">
                  Prega Gene is a physical home testing product.
                  This website does not ask you to upload photographs
                  of your test results, and it does not provide a
                  cloud-based archive of those results.
                </p>
              </div>
            </div>
          </article>

          {/* Remaining sections */}
          <div
            id="data-security"
            className="scroll-mt-8"
          />

          <div
            id="service-providers"
            className="scroll-mt-8"
          />

          <div
            id="privacy-rights"
            className="scroll-mt-8"
          />

          <div
            id="data-protection-officer"
            className="scroll-mt-8"
          />

          <div
            id="policy-updates"
            className="scroll-mt-8"
          />

        </div>
      </div>
    </section>
  );
}

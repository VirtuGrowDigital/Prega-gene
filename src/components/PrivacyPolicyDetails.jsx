
import {
  LockKeyhole,
  ShieldCheck,
  RefreshCw,
  CreditCard,
  Truck,
  Cloud,
  Eye,
  Pencil,
  Trash2,
  Ban,
  FileText,
  ArrowUpRight,
} from "lucide-react";

const securityCards = [
  {
    icon: LockKeyhole,
    title: "Encryption",
    description:
      "Data is encrypted in transit (TLS) and protected at rest.",
  },
  {
    icon: ShieldCheck,
    title: "Restricted Access",
    description:
      "Only authorised staff can access order information when required.",
  },
  {
    icon: RefreshCw,
    title: "Regular Testing",
    description:
      "Our systems are reviewed and tested for potential vulnerabilities.",
  },
];

const serviceProviders = [
  {
    icon: CreditCard,
    title: "Payments",
    description:
      "Secure payment partners handle your card details. We never see or store full card numbers.",
  },
  {
    icon: Truck,
    title: "Delivery",
    description:
      "Couriers receive only the information needed to deliver your order. Parcels carry no product or health references.",
  },
  {
    icon: Cloud,
    title: "Hosting",
    description:
      "Our website runs on cloud infrastructure used to host and maintain our online services.",
  },
];

const privacyRights = [
  {
    icon: Eye,
    title: "Right to Access",
    description: "Ask for a copy of the personal data we hold about you.",
  },
  {
    icon: Pencil,
    title: "Right to Rectification",
    description: "Ask us to correct inaccurate or incomplete information.",
  },
  {
    icon: Trash2,
    title: "Right to Erasure",
    description: "Request deletion of your personal data, subject to legal requirements.",
  },
  {
    icon: Ban,
    title: "Right to Restrict Processing",
    description: "Ask us to restrict how your information is used.",
  },
];

function SectionHeading({ number, title, description }) {
  return (
    <div className="mb-5">
      <div className="mb-2 flex items-center gap-2">
        <span className="rounded-sm bg-[#e8eaff] px-2 py-1 text-[9px] font-bold text-[#173f7a]">
          {number}
        </span>
        <h2 className="text-xl font-bold tracking-tight text-[#092c60] sm:text-2xl">
          {title}
        </h2>
      </div>

      {description && (
        <p className="max-w-2xl text-xs leading-6 text-[#626071] sm:text-sm">
          {description}
        </p>
      )}
    </div>
  );
}

export default function PrivacyPolicyDetails() {
  return (
    <section className="bg-[#faf9ff] px-5 py-12 sm:px-8 sm:py-16">
      <div className="mx-auto max-w-[780px] space-y-12">

        {/* 04. Data Security */}
        <section id="security" className="scroll-mt-28">
          <SectionHeading
            number="04"
            title="Data Security & Encryption"
            description="We protect your information with industry-standard safeguards."
          />

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            {securityCards.map((card) => {
              const Icon = card.icon;

              return (
                <div
                  key={card.title}
                  className="rounded-xl border border-[#e9e9f7] bg-white p-4"
                >
                  <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-[#e9edff] text-[#173f7a]">
                    <Icon size={17} />
                  </div>

                  <h3 className="mb-2 text-sm font-bold text-[#092c60]">
                    {card.title}
                  </h3>

                  <p className="text-[11px] leading-[1.7] text-[#626071]">
                    {card.description}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        <div className="h-px bg-[#e8e7f2]" />

        {/* 05. Service Providers */}
        <section id="service-providers" className="scroll-mt-28">
          <SectionHeading
            number="05"
            title="Third-Party Service Providers"
            description="We share data only with trusted providers who must protect it and cannot use it for their own marketing."
          />

          <div className="space-y-3">
            {serviceProviders.map((provider) => {
              const Icon = provider.icon;

              return (
                <div
                  key={provider.title}
                  className="flex items-start gap-3 rounded-xl border border-[#e9e9f7] bg-white p-4"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#edf0ff] text-[#173f7a]">
                    <Icon size={15} />
                  </div>

                  <div>
                    <h3 className="mb-1 text-xs font-bold text-[#092c60]">
                      {provider.title}
                    </h3>

                    <p className="text-[11px] leading-[1.7] text-[#626071]">
                      {provider.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <div className="h-px bg-[#e8e7f2]" />

        {/* 06. Privacy Rights */}
        <section id="privacy-rights" className="scroll-mt-28">
          <SectionHeading
            number="06"
            title="Your Privacy Rights & Choices"
            description="You can contact us to exercise the following rights regarding your personal information."
          />

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {privacyRights.map((right) => {
              const Icon = right.icon;

              return (
                <div
                  key={right.title}
                  className="rounded-lg border border-[#e9e9f7] bg-white p-4"
                >
                  <div className="mb-2 flex items-center gap-2">
                    <Icon size={15} className="text-[#bd2d79]" />

                    <h3 className="text-xs font-bold text-[#092c60]">
                      {right.title}
                    </h3>
                  </div>

                  <p className="text-[11px] leading-[1.7] text-[#626071]">
                    {right.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Request Box */}
          <div className="mt-4 rounded-xl border border-[#e5e7fa] bg-[#edf0ff] p-5 sm:p-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <div className="mb-2 flex items-center gap-2">
                  <FileText size={16} className="text-[#173f7a]" />

                  <h3 className="text-sm font-bold text-[#092c60]">
                    Make a Privacy Request
                  </h3>
                </div>

                <p className="max-w-md text-[11px] leading-[1.7] text-[#626071]">
                  We handle verified requests within 30 days, free of charge.
                </p>
              </div>

              <a
                href="mailto:privacy@pregagene.com?subject=Privacy%20Data%20Request"
                className="inline-flex min-h-[40px] shrink-0 items-center justify-center gap-2 rounded-lg bg-[#092c60] px-5 text-[11px] font-semibold text-white transition hover:bg-[#bd2d79]"
              >
                Submit Request
                <ArrowUpRight size={14} />
              </a>
            </div>
          </div>
        </section>

      </div>
    </section>
  );
}

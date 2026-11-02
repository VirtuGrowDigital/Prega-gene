
import {
  Phone,
  Mail,
  Building2,
  MapPin,
  Clock3,
  ShieldCheck,
  AlertCircle,
} from "lucide-react";

export default function CustomerCarePanel() {
  const contactDetails = [
    {
      icon: Phone,
      label: "TOLL-FREE SUPPORT HOTLINE",
      title: "1800-PREGA-GENE",
      description: "Mon–Sat, 9:00 AM – 7:00 PM IST",
      accent: "navy",
    },
    {
      icon: Mail,
      label: "DIRECT ASSISTANCE EMAIL",
      title: "care@pregagene.com",
      description: "Replies within 2–4 business hours",
      accent: "pink",
      href: "mailto:care@pregagene.com",
    },
    {
      icon: Building2,
      label: "PARTNERSHIPS & RETAIL SUPPLY",
      title: "partners@pregagene.com",
      description: "Commercial pharmacies and clinical distributors",
      accent: "navy",
      href: "mailto:partners@pregagene.com",
    },
    {
      icon: MapPin,
      label: "MEDICAL & DIAGNOSTIC DISTRIBUTION",
      title: "Prega Gene Healthcare",
      description: "Registered office: [Company Address], India",
      accent: "pink",
    },
  ];

  return (
    <section className="bg-[#fcfaff] px-5 pb-14 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-[1200px]">

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-[0.9fr_1.1fr]">

          {/* Customer Care Card */}
          <div className="rounded-2xl border border-[#f0edf8] bg-white p-5 shadow-[0_8px_30px_rgba(9,44,96,0.04)] sm:p-7">

            <div className="mb-5 flex items-center justify-between gap-3">
              <h2 className="text-lg font-semibold tracking-tight text-[#092c60]">
                Customer Care & Inquiries
              </h2>

              <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-[#fff0f6] px-2.5 py-1 text-[9px] font-semibold text-[#bd2d79]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#bd2d79]" />
                Support Hours
              </span>
            </div>

            <p className="mb-5 text-xs leading-6 text-[#666477]">
              Our dedicated care team is available to assist you with
              order status, authorized retailer verification, and
              general product inquiries.
            </p>

            {/* Contact Details */}
            <div className="space-y-3">
              {contactDetails.map((item, index) => {
                const Icon = item.icon;

                const content = (
                  <div className="flex gap-3 rounded-xl bg-[#f3f3ff] p-3 transition hover:bg-[#eeefff]">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#153c78] text-white">
                      <Icon size={16} />
                    </div>

                    <div className="min-w-0 flex-1">
                      <p className="mb-0.5 text-[8px] font-semibold uppercase tracking-[0.08em] text-[#777487]">
                        {item.label}
                      </p>

                      <p className="break-words text-[13px] font-bold text-[#092c60]">
                        {item.title}
                      </p>

                      <p className="mt-0.5 text-[10px] leading-4 text-[#666477]">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );

                return item.href ? (
                  <a
                    key={index}
                    href={item.href}
                    className="block"
                  >
                    {content}
                  </a>
                ) : (
                  <div key={index}>{content}</div>
                );
              })}
            </div>

            {/* Support Team */}
            <div className="mt-4 flex items-center gap-3 rounded-xl bg-[#eef0ff] p-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-[#153c78]">
                <ShieldCheck size={19} />
              </div>

              <div>
                <p className="text-[11px] font-bold text-[#092c60]">
                  Trained Customer Support Team
                </p>

                <p className="mt-1 text-[10px] leading-4 text-[#666477]">
                  Product specialists available to help with your
                  product and order-related questions.
                </p>
              </div>
            </div>
          </div>

          {/* Important Clinical Advisory */}
          <div className="flex flex-col gap-4">

            <div className="rounded-2xl border border-[#f0edf8] bg-white p-5 shadow-[0_8px_30px_rgba(9,44,96,0.04)] sm:p-6">
              <div className="mb-3 flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#e9edff] text-[#153c78]">
                  <AlertCircle size={17} />
                </div>

                <h3 className="text-sm font-bold text-[#092c60]">
                  Important Clinical Advisory
                </h3>
              </div>

              <p className="text-xs leading-6 text-[#666477]">
                Prega Gene customer support representatives can assist
                with product information, order queries and authorized
                seller verification. They cannot provide individual
                medical diagnosis, treatment advice or emergency care.
                If you experience severe pain, heavy bleeding or other
                urgent symptoms, contact your doctor or call 112.
              </p>
            </div>

            {/* Privacy Reminder */}
            <div className="rounded-2xl border border-[#eeeaf7] bg-[#f0f1ff] p-5 sm:p-6">
              <div className="flex items-start gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-[#bd2d79]">
                  <Clock3 size={17} />
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-[#092c60]">
                    We're here when you need us
                  </h3>

                  <p className="mt-1 text-xs leading-6 text-[#666477]">
                    For non-urgent product and order inquiries, contact
                    our support team during the stated support hours.
                    Please avoid sharing sensitive medical records
                    through general support channels.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}


import {
  BookOpen,
  ExternalLink,
  ShoppingBag,
  ShieldAlert,
  Scale,
  Mail,
  FileText,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import { Link } from "react-router-dom";

const sections = [
  {
    id: "educational-content",
    number: "04",
    title: "Educational Content & Editorial Standards",
    icon: BookOpen,
    content: (
      <>
        <p>
          Our guides and calculators are reviewed by qualified doctors. We
          base them on recognised sources such as ACOG, WHO, ICMR and NIH
          guidance, but guidelines change, and general information may not
          fit your situation.
        </p>
      </>
    ),
  },
  {
    id: "external-links",
    number: "05",
    title: "External Links & References",
    icon: ExternalLink,
    content: (
      <p>
        We link to sources such as PubMed, WHO and authorised pharmacies.
        We don’t control those sites, and a link isn’t an endorsement. Use
        them at your own discretion.
      </p>
    ),
  },
  {
    id: "purchases",
    number: "06",
    title: "Purchases & Authorised Retailers",
    icon: ShoppingBag,
    content: (
      <>
        <p>
          Prega Gene is sold through licensed pharmacies, hospitals, retail
          stores and approved online sellers. Our batch checks and
          replacement promise apply only to kits bought from these sources.
        </p>

        <div className="mt-4 space-y-3">
          <div className="rounded-lg bg-[#f0f1ff] p-4">
            <p className="text-[12px] font-semibold text-[#092c60]">
              Packaging
            </p>
            <p className="mt-1 text-[12px] leading-6 text-[#55566b]">
              Orders arrive in plain, opaque packaging with no product
              details outside.
            </p>
          </div>

          <div className="rounded-lg bg-[#f0f1ff] p-4">
            <p className="text-[12px] font-semibold text-[#092c60]">
              Damaged or faulty kits
            </p>
            <p className="mt-1 text-[12px] leading-6 text-[#55566b]">
              Stop using it and contact support within 7 days with your
              batch number for a replacement.
            </p>
          </div>
        </div>
      </>
    ),
  },
  {
    id: "liability",
    number: "07",
    title: "Limitation of Liability & Warranties",
    icon: ShieldAlert,
    content: (
      <div className="space-y-3">
        <p>
          To the maximum extent allowed by law, we provide the site and
          tests without warranties beyond those the law requires. We are
          not liable for indirect or consequential losses arising from
          using our site, tests or guides.
        </p>

        <div className="rounded-lg border border-[#e5e5f5] bg-[#f5f5ff] p-4">
          <p className="text-[10px] font-semibold uppercase tracking-wider text-[#bd2d79]">
            Legal review required
          </p>
          <p className="mt-1 text-[11px] leading-5 text-[#626071]">
            This limitation of liability wording must be reviewed and
            finalised by the Prega Gene legal team before publication.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: "governing-law",
    number: "08",
    title: "Governing Law & Jurisdiction",
    icon: Scale,
    content: (
      <p>
        These Terms are governed by the laws of{" "}
        <span className="font-semibold text-[#092c60]">
          [country/state]
        </span>
        . Disputes will be handled by the courts of{" "}
        <span className="font-semibold text-[#092c60]">
          [city]
        </span>
        .
      </p>
    ),
  },
];

export default function TermsAdditionalSections() {
  return (
    <section className="bg-[#faf9ff] px-4 py-10 sm:px-6 sm:py-14">
      <div className="mx-auto w-full max-w-[1120px]">
        {/* Main content column */}
        <div className="mx-auto flex w-full max-w-[760px] flex-col gap-5">
          {sections.map((section) => {
            const Icon = section.icon;

            return (
              <article
                key={section.id}
                id={section.id}
                className="scroll-mt-24 rounded-xl border border-[#eae8f5] bg-white p-5 sm:p-7"
              >
                <div className="mb-4 flex items-center gap-2.5">
                  <span className="flex h-6 min-w-7 items-center justify-center rounded-md bg-[#e9edff] px-1.5 text-[9px] font-bold text-[#173f7a]">
                    {section.number}
                  </span>

                  <h2 className="text-[15px] font-semibold leading-snug text-[#092c60] sm:text-[17px]">
                    {section.title}
                  </h2>
                </div>

                <div className="text-[12px] leading-[1.8] text-[#46465b] sm:text-[13px]">
                  {section.content}
                </div>
              </article>
            );
          })}

          {/* Section 09 */}
          <article
            id="legal-contacts"
            className="scroll-mt-24 rounded-xl border border-[#eae8f5] bg-white p-5 sm:p-7"
          >
            <div className="mb-4 flex items-center gap-2.5">
              <span className="flex h-6 min-w-7 items-center justify-center rounded-md bg-[#e9edff] px-1.5 text-[9px] font-bold text-[#173f7a]">
                09
              </span>

              <h2 className="text-[15px] font-semibold text-[#092c60] sm:text-[17px]">
                Legal Contacts
              </h2>
            </div>

            <p className="mb-5 text-[12px] leading-[1.8] text-[#46465b] sm:text-[13px]">
              For legal, regulatory, adverse-event or data requests,
              please contact the relevant team.
            </p>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <div className="rounded-lg bg-[#f0f1ff] p-4">
                <div className="mb-3 flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white text-[#173f7a]">
                    <Scale size={16} />
                  </div>
                  <h3 className="text-[12px] font-semibold text-[#092c60]">
                    Corporate Legal
                  </h3>
                </div>

                <p className="text-[11px] leading-5 text-[#55566b]">
                  [Company legal name]
                  <br />
                  [Registered address]
                </p>

                <a
                  href="mailto:legal@pregagene.com"
                  className="mt-3 inline-flex items-center gap-1 text-[11px] font-semibold text-[#bd2d79] hover:underline"
                >
                  legal@pregagene.com
                  <ArrowRight size={12} />
                </a>
              </div>

              <div className="rounded-lg bg-[#f0f1ff] p-4">
                <div className="mb-3 flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white text-[#bd2d79]">
                    <ShieldCheck size={16} />
                  </div>
                  <h3 className="text-[12px] font-semibold text-[#092c60]">
                    Medical & Compliance
                  </h3>
                </div>

                <p className="text-[11px] leading-5 text-[#55566b]">
                  Medical Compliance Desk
                  <br />
                  Mon–Fri, 9 AM–6 PM IST
                </p>

                <a
                  href="mailto:compliance@pregagene.com"
                  className="mt-3 inline-flex items-center gap-1 text-[11px] font-semibold text-[#bd2d79] hover:underline"
                >
                  compliance@pregagene.com
                  <ArrowRight size={12} />
                </a>

                <p className="mt-2 text-[11px] text-[#55566b]">
                  1800-PREGA-GENE
                </p>
              </div>
            </div>
          </article>

          {/* Closing CTA */}
          <section className="rounded-xl bg-[#f0f1ff] px-5 py-7 text-center sm:px-8 sm:py-9">
            <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-white text-[#173f7a]">
              <FileText size={19} />
            </div>

            <h2 className="text-[17px] font-semibold text-[#092c60] sm:text-[19px]">
              Need more documents?
            </h2>

            <p className="mx-auto mt-2 max-w-[430px] text-[11px] leading-6 text-[#626071] sm:text-xs">
              Explore our privacy policy, quality certificates or contact
              customer care for further assistance.
            </p>

            <div className="mt-5 flex flex-wrap justify-center gap-2.5">
              <Link
                to="/privacy-policy"
                className="inline-flex min-h-10 items-center justify-center rounded-full border border-[#173f7a] px-4 text-[11px] font-semibold text-[#173f7a] transition hover:bg-white"
              >
                Privacy Policy
              </Link>

              <a
                href="/quality-certificates.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-10 items-center justify-center rounded-full bg-[#092c60] px-4 text-[11px] font-semibold text-white transition hover:bg-[#173f7a]"
              >
                Quality Certificates
              </a>

              <Link
                to="/contact"
                className="inline-flex min-h-10 items-center justify-center rounded-full bg-[#bd2d79] px-4 text-[11px] font-semibold text-white transition hover:bg-[#a92168]"
              >
                Customer Care
              </Link>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}

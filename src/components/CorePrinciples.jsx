
import {
  Eye,
  ShieldCheck,
  LockKeyhole,
  Accessibility,
} from "lucide-react";

const principles = [
  {
    number: "01",
    title: "Clarity",
    description:
      "Make important health information immediately intuitive and easy to understand, eliminating second-guessing and visual confusion.",
    proof: "High-contrast result window",
    icon: Eye,
  },
  {
    number: "02",
    title: "Trust",
    description:
      "Communicate verified information responsibly, adhering strictly to clinically validated benchmarks and peer-reviewed reproductive science.",
    proof: "ISO 13485 & CE IVD",
    icon: ShieldCheck,
  },
  {
    number: "03",
    title: "Privacy",
    description:
      "Respect the deeply personal nature of pregnancy testing with discreet packaging, secure digital resources, and zero judgment at every touchpoint.",
    proof: "Plain packaging",
    icon: LockKeyhole,
  },
  {
    number: "04",
    title: "Accessibility",
    description:
      "Design thoughtfully for people across devices, reading environments, languages, and abilities without compromise.",
    proof: "Clear, readable design",
    icon: Accessibility,
  },
];

export default function CorePrinciples() {
  return (
    <section className="bg-[#fcfaff] px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
      <div className="mx-auto max-w-[1200px]">
        {/* Section Heading */}
        <div className="mb-9 max-w-[620px]">
          <span className="mb-3 block text-[10px] font-bold uppercase tracking-[0.16em] text-[#bd2d79]">
            Core Principles
          </span>

          <h2 className="text-2xl font-semibold leading-tight tracking-tight text-[#092c60] sm:text-3xl">
            The standards that guide everything we make.
          </h2>

          <p className="mt-3 max-w-[560px] text-sm leading-6 text-[#666477]">
            We combine stringent in-vitro diagnostics standards with
            empathetic design thinking, treating human vulnerability as
            the central constraint of every decision.
          </p>
        </div>

        {/* Principle Cards */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {principles.map((principle) => {
            const Icon = principle.icon;

            return (
              <article
                key={principle.number}
                className="group flex min-h-[270px] flex-col rounded-xl bg-[#f0f1ff] p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#092c60]/5 sm:p-6"
              >
                {/* Icon */}
                <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-[#e2e5fa] text-[#092c60] transition-colors duration-300 group-hover:bg-[#092c60] group-hover:text-white">
                  <Icon size={19} strokeWidth={1.8} />
                </div>

                {/* Number */}
                <span className="mb-2 text-[9px] font-bold uppercase tracking-[0.13em] text-[#bd2d79]">
                  Principle {principle.number}
                </span>

                {/* Title */}
                <h3 className="mb-2 text-lg font-semibold tracking-tight text-[#092c60]">
                  {principle.title}
                </h3>

                {/* Description */}
                <p className="text-[12px] leading-[1.7] text-[#5e6072]">
                  {principle.description}
                </p>

                {/* Proof Chip */}
                <div className="mt-auto flex items-center gap-2 pt-6 text-[10px] font-semibold text-[#092c60]">
                  <ShieldCheck
                    size={12}
                    className="shrink-0"
                    strokeWidth={2}
                  />
                  <span>{principle.proof}</span>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

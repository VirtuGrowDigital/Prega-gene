
import { ArrowRight, Headset, ShoppingBag } from "lucide-react";

const partners = [
  "Apollo Pharmacy",
  "Tata 1mg",
  "Netmeds",
  "Blinkit",
  "Instamart",
];

export default function WhereToBuy() {
  return (
    <section
      id="where-to-buy"
      className="bg-[#fcfaff] px-5 py-8 sm:px-8 sm:py-10 lg:py-12"
    >
      <div className="mx-auto max-w-[1100px]">
        <div className="relative overflow-hidden rounded-2xl bg-[radial-gradient(ellipse_at_100%_100%,rgba(92,48,137,0.65),transparent_45%),linear-gradient(115deg,#082c60_0%,#10346d_65%,#302c70_100%)] px-6 py-7 shadow-[0_10px_24px_rgba(9,35,83,0.14)] sm:px-8 sm:py-9 lg:px-10 lg:py-10">
          {/* Subtle decorative glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-12 -top-16 h-48 w-48 rounded-full bg-[#bd2d79]/10 blur-3xl"
          />

          <div className="relative z-10">
            {/* Eyebrow */}
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1.5 text-[9px] font-medium text-white">
              <span className="h-1.5 w-1.5 rounded-full bg-[#f5b8d7]" />
              Available Through Authorised Channels
            </div>

            {/* Heading */}
            <h2 className="max-w-xl text-[29px] font-semibold leading-tight tracking-[-0.8px] text-white sm:text-[36px]">
              Clarity is within reach.
            </h2>

            <p className="mt-3 max-w-[600px] text-[12px] leading-[1.8] text-[#c0cce5] sm:text-[13px]">
              Looking for a Prega Gene pregnancy test kit? Explore the
              available purchase options through our authorised pharmacy
              and online retail partners. Check product availability in
              your area and follow the instructions provided with your kit.
            </p>

            {/* CTA buttons */}
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#trusted-partners"
                className="inline-flex min-h-[40px] items-center justify-center gap-2 rounded-full bg-[#bd2d79] px-5 py-3 text-[11px] font-semibold text-white transition hover:bg-[#a92168] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Where to Buy Prega Gene
                <ShoppingBag size={14} />
              </a>

              <a
                href="#contact"
                className="inline-flex min-h-[40px] items-center justify-center gap-2 rounded-full bg-white/10 px-5 py-3 text-[11px] font-semibold text-white transition hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                <Headset size={14} />
                Need Help? Contact Our Helpline
              </a>
            </div>

            {/* Trusted partner names */}
            <div id="trusted-partners" className="mt-8 scroll-mt-24">
              <p className="mb-3 text-[9px] font-medium uppercase tracking-[1px] text-[#a9bbdc]">
                Available via trusted partners
              </p>

              <div className="flex flex-wrap gap-2">
                {partners.map((partner) => (
                  <span
                    key={partner}
                    className="rounded-full border border-white/5 bg-white/10 px-3 py-2 text-[9px] font-medium text-white/90"
                  >
                    {partner}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


import { Link } from "react-router-dom";
import { MessageSquare, ArrowRight, Headset } from "lucide-react";

export default function FAQContactCTA() {
  return (
    <section className="bg-[#fcfaff] px-5 py-6 sm:px-8 sm:py-8">
      <div className="mx-auto max-w-[900px]">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#fcecf4] via-[#fceaf3] to-[#f5d9e9] px-5 py-7 sm:px-8 sm:py-9 lg:px-10">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-12 -top-16 h-48 w-48 rounded-full bg-white/50 blur-3xl"
          />

          <div className="relative flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-[470px]">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/80 px-2.5 py-1 text-[8px] font-semibold uppercase tracking-wide text-[#bd2d79]">
                <Headset size={11} />
                Confidential Helpline Available 24/7
              </span>

              <h2 className="mt-3 text-[22px] font-semibold leading-tight tracking-tight text-[#092c60] sm:text-[26px]">
                Couldn't find your answer?
              </h2>

              <p className="mt-2 text-[11px] leading-[1.8] text-[#626071] sm:text-xs">
                Our clinical advisory team is here to help you with
                compassionate, non-judgmental guidance and technical support.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2.5">
              <a
                href="mailto:support@pregagene.com"
                className="inline-flex min-h-[40px] items-center justify-center gap-2 rounded-full bg-[#bd2d79] px-5 text-[10px] font-semibold text-white transition hover:bg-[#a92168]"
              >
                <MessageSquare size={13} />
                Contact Us
              </a>

              <Link
                to="/how-to-use"
                className="inline-flex min-h-[40px] items-center justify-center gap-2 rounded-full bg-white px-5 text-[10px] font-semibold text-[#092c60] transition hover:bg-[#f8f5fa]"
              >
                View How to Use
                <ArrowRight size={13} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

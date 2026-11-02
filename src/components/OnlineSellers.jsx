
import {
  ArrowRight,
  ShieldCheck,
  Truck,
  Clock,
  PackageCheck,
  Store,
} from "lucide-react";

const sellers = [
  {
    initials: "AP",
    name: "Apollo Pharmacy",
    subtitle: "Official Retail Partner Network",
    badge: "2hr Express",
    badgeIcon: Truck,
    details: [
      ["Availability", "In Stock"],
      ["Packaging", "100% Plain Unmarked"],
      ["Options", "Single Wand & 2-Pack"],
    ],
    button: "Shop at Apollo",
    url: "https://www.apollopharmacy.in/",
    theme: "light",
  },
  {
    initials: "1mg",
    name: "Tata 1mg",
    subtitle: "Clinical Pharmacy Network",
    badge: "Scheduled Slot",
    badgeIcon: Clock,
    details: [
      ["Availability", "Batch Certified"],
      ["Packaging", "Opaque Sealed Pack"],
      ["Options", "Dual Test Pack (2 Wands)"],
    ],
    button: "Shop at Tata 1mg",
    url: "https://www.1mg.com/",
    theme: "light",
  },
  {
    initials: "NM",
    name: "Netmeds Healthcare",
    subtitle: "Nationwide Distribution",
    badge: "Next-Day Metro",
    badgeIcon: Truck,
    details: [
      ["Availability", "Ready to Dispatch"],
      ["Packaging", "Tamper-Proof Box"],
      ["Options", "Single Wand Kit"],
    ],
    button: "Shop at Netmeds",
    url: "https://www.netmeds.com/",
    theme: "light",
  },
  {
    initials: "PG",
    name: "Direct Medical Reserve",
    subtitle: "Direct from Manufacturer Lab",
    badge: "Official Reserve",
    badgeIcon: ShieldCheck,
    details: [
      ["Batch Freshness", "Factory Direct"],
      ["Shipping", "Priority Cold-Tracked"],
      ["Exclusive", "Dual Wand + Case"],
    ],
    button: "Order Direct",
    url: null,
    theme: "dark",
  },
];

function SellerCard({ seller }) {
  const isDark = seller.theme === "dark";
  const BadgeIcon = seller.badgeIcon;

  return (
    <article
      className={`relative flex flex-col rounded-2xl border p-3 sm:p-4 ${
        isDark
          ? "border-[#092c60] bg-gradient-to-br from-[#092c60] via-[#082957] to-[#351b58] text-white shadow-lg"
          : "border-[#eeedf8] bg-white text-[#092c60] shadow-sm"
      }`}
    >
      {/* Card Header */}
      <div className="mb-3 flex items-center justify-between gap-2">
        <div
          className={`flex h-9 w-9 items-center justify-center rounded-lg text-sm font-bold ${
            isDark
              ? "bg-white text-[#092c60]"
              : "bg-[#e7eafa] text-[#092c60]"
          }`}
        >
          {seller.initials}
        </div>

        <span
          className={`inline-flex items-center gap-1 rounded-full px-2 py-1 text-[9px] font-semibold ${
            isDark
              ? "bg-[#bd2d79] text-white"
              : "bg-[#edf0ff] text-[#092c60]"
          }`}
        >
          <BadgeIcon size={11} />
          {seller.badge}
        </span>
      </div>

      {/* Seller Name */}
      <h3 className="text-base font-bold tracking-tight">
        {seller.name}
      </h3>

      <p
        className={`mt-0.5 text-[11px] ${
          isDark ? "text-blue-200" : "text-[#777486]"
        }`}
      >
        {seller.subtitle}
      </p>

      {/* Seller Details */}
      <div
        className={`mt-3 flex-1 space-y-2 rounded-xl p-2.5 ${
          isDark ? "bg-white/10" : "bg-[#f0f1ff]"
        }`}
      >
        {seller.details.map(([label, value]) => (
          <div
            key={label}
            className="flex items-start justify-between gap-2 text-[9px] leading-relaxed"
          >
            <span
              className={
                isDark ? "text-blue-100" : "text-[#55566a]"
              }
            >
              {label}
            </span>

            <span className="text-right font-semibold">
              {value}
            </span>
          </div>
        ))}
      </div>

      {/* CTA */}
      {seller.url ? (
        <a
          href={seller.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`mt-3 inline-flex min-h-[42px] items-center justify-center gap-2 rounded-full px-3 text-[11px] font-semibold transition ${
            isDark
              ? "bg-[#bd2d79] text-white hover:bg-[#a92168]"
              : "bg-[#092c60] text-white hover:bg-[#123b73]"
          }`}
        >
          {seller.button}
          <ArrowRight size={14} />
        </a>
      ) : (
        <button
          type="button"
          disabled
          className="mt-3 inline-flex min-h-[42px] cursor-not-allowed items-center justify-center gap-2 rounded-full bg-[#bd2d79] px-3 text-[11px] font-semibold text-white opacity-90"
          title="Add the official Prega Gene ordering link"
        >
          {seller.button}
          <PackageCheck size={14} />
        </button>
      )}
    </article>
  );
}

export default function OnlineSellers() {
  return (
    <section className="bg-[#f0f1ff] px-4 py-14 sm:px-6 lg:py-16">
      <div className="mx-auto max-w-[1200px]">

        {/* Section Heading */}
        <div className="mb-7 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.18em] text-[#bd2d79]">
              Verified Digital Dispensation
            </p>

            <h2 className="text-2xl font-semibold tracking-tight text-[#092c60] sm:text-3xl">
              Approved Online Sellers
            </h2>

            <p className="mt-1.5 max-w-2xl text-sm leading-relaxed text-[#55566a]">
              Doorstep delivery with tamper-sealed, plain outer packaging
              and batch verification.
            </p>
          </div>

          {/* Stock Information */}
          <div className="inline-flex w-fit items-center gap-2 rounded-full bg-white px-3 py-2 text-[10px] text-[#464454] shadow-sm">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            Stock information may change
          </div>
        </div>

        {/* Seller Cards */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {sellers.map((seller) => (
            <SellerCard key={seller.initials} seller={seller} />
          ))}
        </div>

      </div>
    </section>
  );
}

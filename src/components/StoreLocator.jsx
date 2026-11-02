
import { useMemo, useState } from "react";
import {
  Search,
  MapPin,
  Navigation,
  Clock3,
  Phone,
  ShieldCheck,
  Crosshair,
  Map,
  ArrowUpRight,
  CheckCircle2,
  LocateFixed,
} from "lucide-react";

const stores = [
  {
    id: 1,
    name: "Guardian Care Dispensary",
    address: "Downtown Medical Square, Suite 104, Metro Boulevard",
    phone: "+1 (800) 555-0192",
    hours: "Open 24 Hours",
    distance: "0.4 mi",
    batch: "PG-B472-A",
    units: 14,
    type: "24-Hour Pharmacies",
    lat: 37,
    top: "42%",
    left: "46%",
  },
  {
    id: 2,
    name: "HealthFirst Apothecary",
    address: "West End Health Pavilion, 842 Kensington Avenue",
    phone: "+1 (800) 555-0348",
    hours: "Closes at 11:00 PM",
    distance: "1.2 mi",
    batch: "PG-B470-C",
    units: 8,
    type: "Hospital Dispensaries",
    lat: 52,
    top: "24%",
    left: "29%",
  },
  {
    id: 3,
    name: "Apollo 24/7 Clinical Dispensary",
    address: "Central Medical Mall, Level Ground, Concourse B",
    phone: "+1 (800) 555-0811",
    hours: "Open 24 Hours",
    distance: "2.0 mi",
    batch: "PG-B472-A",
    units: 21,
    type: "24-Hour Pharmacies",
    lat: 21,
    top: "70%",
    left: "67%",
  },
];

const filters = [
  "All Locations (4,218)",
  "24-Hour Pharmacies",
  "Hospital Dispensaries",
  "Drive-Thru / Click & Collect",
];

export default function StoreLocator() {
  const [search, setSearch] = useState("");
  const [activeFilter, setActiveFilter] = useState(filters[0]);
  const [selectedStore, setSelectedStore] = useState(stores[0]);
  const [locationMessage, setLocationMessage] = useState("");
  const [searchSubmitted, setSearchSubmitted] = useState("");

  const filteredStores = useMemo(() => {
    let result = stores;

    if (activeFilter !== filters[0]) {
      result = result.filter((store) => store.type === activeFilter);
    }

    if (searchSubmitted.trim()) {
      const query = searchSubmitted.toLowerCase();

      result = result.filter(
        (store) =>
          store.name.toLowerCase().includes(query) ||
          store.address.toLowerCase().includes(query)
      );
    }

    return result;
  }, [activeFilter, searchSubmitted]);

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchSubmitted(search.trim());
    setSelectedStore(null);
  };

  const handleLocation = () => {
    if (!navigator.geolocation) {
      setLocationMessage("Location services are not supported by your browser.");
      return;
    }

    setLocationMessage("Requesting your location...");

    navigator.geolocation.getCurrentPosition(
      () => {
        setLocationMessage(
          "Location detected. Connect your pharmacy locator API to show nearby verified stores."
        );
      },
      () => {
        setLocationMessage(
          "Location access was unavailable. Please enter your city or pincode."
        );
      }
    );
  };

  const openDirections = (store) => {
    const destination = encodeURIComponent(store.address);
    window.open(
      `https://www.google.com/maps/search/?api=1&query=${destination}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <section
      id="store-locator"
      className="bg-[#f0f1ff] px-4 py-16 sm:px-6 lg:px-8 lg:py-20"
    >
      <div className="mx-auto max-w-[1200px]">

        {/* Section Heading */}
        <div className="mb-8 max-w-2xl">
          <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.18em] text-[#092c60]">
            Offline Clinical Network
          </p>

          <h2 className="text-2xl font-semibold tracking-tight text-[#092c60] sm:text-3xl">
            Find a verified pharmacy near you
          </h2>

          <p className="mt-2 max-w-xl text-sm leading-6 text-[#555568]">
            Available at 4,200+ partner hospital dispensaries, accredited
            chemists, and round-the-clock clinical pharmacies.
          </p>
        </div>

        {/* Search Panel */}
        <div className="mb-4 rounded-2xl border border-white bg-white p-4 sm:p-5">
          <form
            onSubmit={handleSearch}
            className="flex flex-col gap-3 lg:flex-row"
          >
            <div className="flex min-h-[48px] flex-1 items-center gap-3 rounded-xl bg-[#f0f1ff] px-4">
              <Search size={17} className="shrink-0 text-[#59627c]" />

              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Enter your city, area or 6-digit pincode..."
                className="w-full bg-transparent text-sm text-[#092c60] outline-none placeholder:text-[#85869a]"
              />
            </div>

            <button
              type="button"
              onClick={handleLocation}
              className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-xl bg-[#e9ebff] px-5 text-xs font-semibold text-[#092c60] transition hover:bg-[#dfe2ff]"
            >
              <Crosshair size={15} className="text-[#bd2d79]" />
              Use My Current Location
            </button>

            <button
              type="submit"
              className="min-h-[48px] rounded-xl bg-[#092c60] px-7 text-xs font-semibold text-white transition hover:bg-[#123b73]"
            >
              Search
            </button>
          </form>

          {locationMessage && (
            <p className="mt-3 text-xs text-[#59627c]" role="status">
              {locationMessage}
            </p>
          )}

          {/* Filters */}
          <div className="mt-5 flex flex-wrap items-center gap-2">
            <span className="mr-1 text-[10px] font-medium text-[#555568]">
              Filter by:
            </span>

            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`rounded-full px-3 py-2 text-[10px] font-semibold transition ${
                  activeFilter === filter
                    ? "bg-[#092c60] text-white"
                    : "bg-[#e9ebff] text-[#555568] hover:bg-[#dfe2ff]"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Results + Map */}
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-[0.85fr_1.15fr]">

          {/* Pharmacy Results */}
          <div className="flex flex-col gap-3">
            {filteredStores.length > 0 ? (
              filteredStores.map((store) => (
                <div
                  key={store.id}
                  onClick={() => setSelectedStore(store)}
                  className={`cursor-pointer rounded-2xl border bg-white p-4 transition ${
                    selectedStore?.id === store.id
                      ? "border-[#bd2d79] shadow-[0_5px_20px_rgba(9,44,96,0.07)]"
                      : "border-transparent hover:border-[#d8dafa]"
                  }`}
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="flex items-center gap-1.5 text-[9px] font-semibold text-[#bd2d79]">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#bd2d79]" />
                      Verified In-Stock ({store.units} units)
                    </span>

                    <span className="rounded-full bg-[#e9ebff] px-2.5 py-1 text-[10px] font-semibold text-[#092c60]">
                      {store.distance}
                    </span>
                  </div>

                  <h3 className="mt-2 text-sm font-bold text-[#092c60]">
                    {store.name}
                  </h3>

                  <p className="mt-1 text-[11px] leading-5 text-[#626276]">
                    {store.address}
                  </p>

                  <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-[10px] text-[#3f4054]">
                    <span className="flex items-center gap-1.5">
                      <Clock3 size={12} />
                      {store.hours}
                    </span>

                    <a
                      href={`tel:${store.phone}`}
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-1.5 hover:text-[#bd2d79]"
                    >
                      <Phone size={12} />
                      {store.phone}
                    </a>
                  </div>

                  <div className="mt-4 flex items-center justify-between gap-2 border-t border-[#f0eff7] pt-3">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        openDirections(store);
                      }}
                      className="flex items-center gap-1.5 text-[10px] font-semibold text-[#bd2d79] hover:text-[#a92168]"
                    >
                      <Navigation size={12} />
                      Get Driving Directions
                    </button>

                    <span className="rounded-md bg-[#f0f1ff] px-2 py-1 text-[9px] text-[#555568]">
                      Batch: {store.batch}
                    </span>
                  </div>
                </div>
              ))
            ) : (
              <div className="rounded-2xl bg-white p-8 text-center">
                <MapPin className="mx-auto text-[#bd2d79]" size={24} />
                <p className="mt-3 text-sm font-semibold text-[#092c60]">
                  No matching pharmacies found
                </p>
                <p className="mt-1 text-xs text-[#626276]">
                  Try another search or select a different filter.
                </p>
                <button
                  onClick={() => {
                    setSearch("");
                    setSearchSubmitted("");
                    setActiveFilter(filters[0]);
                  }}
                  className="mt-4 text-xs font-semibold text-[#bd2d79]"
                >
                  Clear filters
                </button>
              </div>
            )}
          </div>

          {/* Map Panel */}
          <div className="relative min-h-[390px] overflow-hidden rounded-2xl border border-white bg-[#e7eafd] lg:min-h-[470px]">

            {/* Decorative Map Grid */}
            <div className="absolute inset-0 opacity-70">
              <svg
                viewBox="0 0 600 500"
                preserveAspectRatio="none"
                className="h-full w-full"
              >
                <path
                  d="M-20 65 L620 115 M-20 160 L620 205 M-20 275 L620 300 M-20 390 L620 405 M80 -20 L120 520 M220 -20 L255 520 M390 -20 L425 520 M520 -20 L550 520"
                  stroke="#ffffff"
                  strokeWidth="5"
                  fill="none"
                />
                <path
                  d="M-20 450 C100 350 170 400 275 290 S450 170 620 40"
                  stroke="#ffffff"
                  strokeWidth="9"
                  strokeDasharray="10 8"
                  fill="none"
                />
                <path
                  d="M-20 450 C100 350 170 400 275 290 S450 170 620 40"
                  stroke="#bdc8eb"
                  strokeWidth="2"
                  fill="none"
                />
              </svg>
            </div>

            {/* Map Label */}
            <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full bg-white/90 px-3 py-2 text-[10px] font-semibold text-[#092c60] shadow-sm">
              <Map size={13} />
              Pharmacy locations
            </div>

            {/* Map Markers */}
            {filteredStores.map((store) => (
              <button
                key={store.id}
                type="button"
                onClick={() => setSelectedStore(store)}
                style={{ top: store.top, left: store.left }}
                aria-label={`Select ${store.name}`}
                className={`absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center`}
              >
                <span
                  className={`flex h-9 w-9 items-center justify-center rounded-full border-[3px] border-white shadow-lg transition ${
                    selectedStore?.id === store.id
                      ? "scale-110 bg-[#bd2d79]"
                      : "bg-[#092c60]"
                  }`}
                >
                  <MapPin size={16} className="text-white" />
                </span>

                <span className="mt-1 whitespace-nowrap rounded-full bg-white px-2 py-1 text-[9px] font-semibold text-[#092c60] shadow-sm">
                  {store.name.split(" ")[0]}
                </span>
              </button>
            ))}

            {/* Selected Store Bottom Bar */}
            {selectedStore && filteredStores.some(
              (store) => store.id === selectedStore.id
            ) && (
              <div className="absolute bottom-4 left-4 right-4 flex flex-col gap-3 rounded-xl border border-white bg-white p-3 shadow-lg sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#fceaf3]">
                    <MapPin size={17} className="text-[#bd2d79]" />
                  </div>

                  <div className="min-w-0">
                    <p className="text-[10px] font-bold text-[#092c60]">
                      Selected: {selectedStore.name}
                    </p>
                    <p className="mt-1 text-[9px] text-[#626276]">
                      {selectedStore.distance} away · Pickup availability to be confirmed
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => openDirections(selectedStore)}
                  className="inline-flex min-h-9 shrink-0 items-center justify-center gap-2 rounded-full bg-[#092c60] px-4 text-[10px] font-semibold text-white transition hover:bg-[#123b73]"
                >
                  Open Navigation
                  <ArrowUpRight size={13} />
                </button>
              </div>
            )}

            {!selectedStore && (
              <div className="absolute bottom-4 left-4 right-4 rounded-xl bg-white/95 p-3 text-center text-xs text-[#626276] shadow-lg">
                Select a pharmacy to view its location.
              </div>
            )}
          </div>
        </div>

        {/* Trust Note */}
        <div className="mt-5 flex flex-wrap items-center justify-center gap-2 text-center text-[10px] text-[#555568]">
          <ShieldCheck size={14} className="text-[#092c60]" />
          Pharmacy availability and stock should be confirmed before visiting.
        </div>
      </div>
    </section>
  );
}

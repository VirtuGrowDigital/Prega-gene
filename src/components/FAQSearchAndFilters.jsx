
import { useEffect, useRef } from "react";
import { Search, X } from "lucide-react";

const categories = [
  "All Questions",
  "Before Testing",
  "Using Prega Gene",
  "Understanding Results",
  "Product & Safety",
  "Purchase & Delivery",
];

const popularQueries = [
  "When to test",
  "Faint line",
  "Discreet delivery",
  "Storage",
];

export default function FAQSearchAndFilters({
  searchQuery,
  setSearchQuery,
  activeCategory,
  setActiveCategory,
}) {
  const searchRef = useRef(null);

  // Focus search when the user presses /
  useEffect(() => {
    const handleShortcut = (event) => {
      const target = event.target;
      const isTyping =
        target instanceof HTMLElement &&
        (target.tagName === "INPUT" ||
          target.tagName === "TEXTAREA" ||
          target.isContentEditable);

      if (event.key === "/" && !isTyping) {
        event.preventDefault();
        searchRef.current?.focus();
      }

      if (event.key === "Escape") {
        searchRef.current?.blur();
      }
    };

    window.addEventListener("keydown", handleShortcut);

    return () => {
      window.removeEventListener("keydown", handleShortcut);
    };
  }, []);

  return (
    <section className="relative z-30 w-full bg-white">

      {/* Search and Popular Queries */}
      <div className="mx-auto max-w-[1120px] px-5 py-5 sm:px-8">

        {/* Search Input */}
        <div className="mx-auto max-w-[680px]">
          <div className="flex h-[46px] items-center gap-3 rounded-xl border border-[#e9e7f2] bg-white px-4 shadow-[0_5px_18px_rgba(9,44,96,0.07)] transition focus-within:border-[#bd2d79]/40 focus-within:shadow-[0_5px_20px_rgba(189,45,121,0.08)]">

            <Search
              size={16}
              className="shrink-0 text-[#092c60]"
            />

            <input
              ref={searchRef}
              type="search"
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              placeholder="Search your question (e.g., faint line, when to test, discreet)..."
              aria-label="Search frequently asked questions"
              className="h-full min-w-0 flex-1 bg-transparent text-[10px] text-[#092c60] outline-none placeholder:text-[#9291a0] sm:text-xs"
            />

            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                aria-label="Clear search"
                className="shrink-0 rounded-full p-1 text-[#777487] transition hover:bg-[#f0f1ff] hover:text-[#bd2d79]"
              >
                <X size={14} />
              </button>
            )}

            {!searchQuery && (
              <span className="hidden shrink-0 rounded bg-[#f0f1ff] px-2 py-1 text-[9px] text-[#092c60] sm:inline-flex">
                Press /
              </span>
            )}
          </div>

          {/* Popular Queries */}
          <div className="mt-3 flex flex-wrap items-center justify-center gap-2">
            <span className="text-[9px] font-medium text-[#777487]">
              Popular queries:
            </span>

            {popularQueries.map((query) => (
              <button
                key={query}
                type="button"
                onClick={() => setSearchQuery(query)}
                className={`rounded-full px-2.5 py-1 text-[9px] transition ${
                  searchQuery === query
                    ? "bg-[#092c60] text-white"
                    : "bg-[#f0f1ff] text-[#464454] hover:bg-[#e4e6fb]"
                }`}
              >
                {query}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Sticky Category Navigation */}
      <div className="sticky top-0 z-40 border-y border-[#eeeaf5] bg-white/95 backdrop-blur-md">
        <div className="mx-auto max-w-[1120px] overflow-x-auto px-5 py-3 scrollbar-hide sm:px-8">
          <div className="flex min-w-max items-center justify-center gap-2">

            {categories.map((category) => {
              const isActive = activeCategory === category;

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  aria-pressed={isActive}
                  className={`whitespace-nowrap rounded-full px-3 py-2 text-[9px] font-medium transition-all sm:px-4 sm:text-[10px] ${
                    isActive
                      ? "bg-[#092c60] text-white shadow-sm"
                      : "border border-[#e9e7f2] bg-white text-[#464454] hover:border-[#bd2d79]/40 hover:text-[#bd2d79]"
                  }`}
                >
                  {category}
                </button>
              );
            })}

          </div>
        </div>
      </div>
    </section>
  );
}

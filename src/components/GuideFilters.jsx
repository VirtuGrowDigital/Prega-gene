
import { Search } from "lucide-react";

const topics = [
  "All Topics",
  "Pregnancy Testing",
  "Understanding Results",
  "Women's Health",
  "Product Guides",
];

export default function GuideFilters({
  activeTopic,
  onTopicChange,
  searchQuery,
  onSearchChange,
}) {
  return (
    <section className="sticky top-0 z-40 border-y border-[#eeeaf5] bg-white/95 px-4 py-3 backdrop-blur-md sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-[1120px] flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
        {/* Topic filters */}
        <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
          {topics.map((topic) => {
            const active = activeTopic === topic;

            return (
              <button
                key={topic}
                type="button"
                onClick={() => onTopicChange(topic)}
                aria-pressed={active}
                className={`shrink-0 rounded-full px-3 py-2 text-[9px] font-medium transition sm:text-[10px] ${
                  active
                    ? "bg-[#092c60] text-white shadow-sm"
                    : "border border-[#eeeaf5] bg-white text-[#464454] hover:border-[#c9cce7] hover:bg-[#f7f7ff]"
                }`}
              >
                {topic}
              </button>
            );
          })}
        </div>

        {/* Search */}
        <label className="flex min-h-[38px] w-full items-center gap-2 rounded-full border border-[#eeeaf5] bg-white px-3 text-[#68677a] transition focus-within:border-[#bd2d79] lg:max-w-[270px]">
          <Search size={14} className="shrink-0" />

          <input
            type="search"
            value={searchQuery}
            onChange={(event) => onSearchChange(event.target.value)}
            placeholder="Search guides, hCG, results..."
            aria-label="Search guides"
            className="w-full bg-transparent text-[10px] text-[#092c60] outline-none placeholder:text-[#9291a0]"
          />
        </label>
      </div>
    </section>
  );
}


import { Link } from "react-router-dom";
import {
  ArrowRight,
  Clock3,
  HeartPulse,
  Droplets,
  Activity,
  CircleHelp,
  TestTube2,
  Smartphone,
} from "lucide-react";

const articles = [
  {
    id: 1,
    category: "Pregnancy Testing",
    time: "4 min read",
    title: "How Does a Home Pregnancy Test Work?",
    description:
      "Learn how immunoassays detect hCG, and how modern test wands find early pregnancy markers.",
    author: "Diagnostics Team",
    href: "/learn/how-home-pregnancy-tests-work",
    visual: "test",
  },
  {
    id: 2,
    category: "Understanding Results",
    time: "5 min read",
    title: "How to Read Pregnancy Test Results",
    description:
      "Learn to read Test and Control lines, avoid common mistakes, and understand faint lines.",
    author: "Dr. Rachel Moore",
    href: "/learn/how-to-read-results",
    visual: "lines",
  },
  {
    id: 3,
    category: "Women's Health",
    time: "7 min read",
    title: "What Can Affect a Pregnancy Test Result?",
    description:
      "Hydration, testing too early, medications and cycle changes can all affect detection.",
    author: "Clinical Advisory Board",
    href: "/learn/factors-affecting-results",
    visual: "hydration",
  },
  {
    id: 4,
    category: "Understanding Results",
    time: "6 min read",
    title: "Understanding hCG and Pregnancy Testing",
    description:
      "A doctor-reviewed look at hCG doubling, urine concentration and test sensitivity.",
    author: "Dr. Elena Vance",
    href: "/learn/understanding-hcg",
    visual: "curve",
  },
  {
    id: 5,
    category: "Product Guides",
    time: "3 min read",
    title: "Common Questions About Home Pregnancy Tests",
    description:
      "Answers to the most frequently asked questions about test sensitivity, best time of day to test, and expiry dates.",
    author: "Support & Care Team",
    href: "/learn/pregnancy-test-faqs",
    visual: "questions",
  },
  {
    id: 6,
    category: "Pregnancy Testing",
    time: "5 min read",
    title: "Digital vs. Analog Pregnancy Tests: What's the Difference?",
    description:
      "Comparing traditional dye-conjugate lines with optical sensor readouts so you can choose the format that gives you the greatest peace of mind.",
    author: "Engineering & Design",
    href: "/learn/digital-vs-analog-tests",
    visual: "digital",
  },
];

function GuideThumbnail({ type }) {
  if (type === "test") {
    return (
      <div className="flex h-[82px] items-center justify-center rounded-lg bg-[#f0f1ff] px-4">
        <div className="relative flex h-4 w-full items-center rounded-full bg-[#dfe3f5]">
          <span className="absolute left-[22%] h-3 w-3 rounded-full border-[4px] border-[#bd2d79] bg-white" />
          <span className="absolute left-[68%] h-3 w-1 rounded-full bg-[#092c60]" />
          <span className="absolute left-[76%] h-3 w-1 rounded-full bg-[#bd2d79]" />
          <span className="absolute -bottom-4 right-[16%] text-[6px] font-semibold text-[#68677a]">
            TEST CONTROL
          </span>
        </div>
      </div>
    );
  }

  if (type === "lines") {
    return (
      <div className="grid h-[82px] grid-cols-3 gap-2 rounded-lg bg-[#f0f1ff] p-3">
        {[
          { label: "Positive", lines: 2 },
          { label: "Negative", lines: 1 },
          { label: "Faint Line", lines: 2 },
        ].map((item, index) => (
          <div
            key={item.label}
            className="flex flex-col items-center justify-center rounded-md bg-white"
          >
            <div className="flex h-7 items-center gap-1.5">
              {Array.from({ length: item.lines }).map((_, line) => (
                <span
                  key={line}
                  className={`h-5 w-1 rounded-full ${
                    index === 2 && line === 1
                      ? "bg-[#e6a1c3]"
                      : "bg-[#bd2d79]"
                  }`}
                />
              ))}
            </div>
            <span className="mt-1 text-[6px] font-semibold text-[#092c60]">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    );
  }

  if (type === "hydration") {
    return (
      <div className="flex h-[82px] flex-col justify-center gap-3 rounded-lg bg-[#f0f1ff] p-4">
        <div className="flex items-center justify-between text-[7px] text-[#55586a]">
          <span>Hydration Level</span>
          <span className="font-semibold text-[#092c60]">High Impact</span>
        </div>
        <div className="h-1.5 overflow-hidden rounded-full bg-white">
          <div className="h-full w-[82%] rounded-full bg-[#bd2d79]" />
        </div>
        <div className="flex items-center justify-between text-[7px] text-[#55586a]">
          <span>Testing Time Window</span>
          <span className="font-semibold text-[#092c60]">Important</span>
        </div>
        <div className="h-1.5 overflow-hidden rounded-full bg-white">
          <div className="h-full w-full rounded-full bg-[#092c60]" />
        </div>
      </div>
    );
  }

  if (type === "curve") {
    return (
      <div className="flex h-[82px] items-center rounded-lg bg-[#f0f1ff] p-3">
        <svg viewBox="0 0 240 70" className="h-full w-full">
          <path
            d="M8 58 C55 58 85 55 112 45 S170 15 232 8"
            fill="none"
            stroke="#173f7a"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <circle cx="112" cy="45" r="3.5" fill="#bd2d79" />
          <text x="120" y="42" fill="#bd2d79" fontSize="7">
            hCG
          </text>
        </svg>
      </div>
    );
  }

  if (type === "questions") {
    return (
      <div className="grid h-[82px] grid-cols-2 gap-2 rounded-lg bg-[#f0f1ff] p-3">
        {[
          { label: "Morning testing?", Icon: Clock3 },
          { label: "Expiry date?", Icon: TestTube2 },
          { label: "Fluid intake?", Icon: Droplets },
          { label: "Invalid strip?", Icon: CircleHelp },
        ].map(({ label, Icon }) => (
          <div
            key={label}
            className="flex items-center gap-1.5 rounded-md bg-white px-2"
          >
            <Icon size={11} className="shrink-0 text-[#bd2d79]" />
            <span className="text-[7px] font-medium text-[#092c60]">
              {label}
            </span>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid h-[82px] grid-cols-2 gap-2 rounded-lg bg-[#f0f1ff] p-3">
      <div className="flex flex-col items-center justify-center rounded-md bg-white">
        <Activity size={17} className="text-[#092c60]" />
        <span className="mt-1 text-[8px] font-semibold text-[#092c60]">
          Analog Wand
        </span>
        <span className="text-[6px] text-[#68677a]">Dye Conjugate</span>
      </div>
      <div className="flex flex-col items-center justify-center rounded-md bg-white">
        <Smartphone size={17} className="text-[#bd2d79]" />
        <span className="mt-1 text-[8px] font-semibold text-[#092c60]">
          Digital Wand
        </span>
        <span className="text-[6px] text-[#68677a]">Optical Sensor</span>
      </div>
    </div>
  );
}

export default function GuideLibrary({ activeTopic, searchQuery }) {
  const filteredArticles = articles.filter((article) => {
    const matchesTopic =
      activeTopic === "All Topics" || article.category === activeTopic;

    const searchText = [
      article.title,
      article.description,
      article.category,
      article.author,
    ]
      .join(" ")
      .toLowerCase();

    const matchesSearch = searchText.includes(
      searchQuery.trim().toLowerCase()
    );

    return matchesTopic && matchesSearch;
  });

  return (
    <section
      id="guide-library"
      className="bg-[#fcfaff] px-4 py-10 sm:px-6 sm:py-14 lg:px-8"
    >
      <div className="mx-auto max-w-[1120px]">
        {/* Section heading */}
        <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="mb-2 text-[9px] font-bold uppercase tracking-[0.18em] text-[#bd2d79]">
              Clinical Archive
            </p>

            <h2 className="text-2xl font-semibold tracking-tight text-[#092c60] sm:text-3xl">
              Essential Guides &amp; Insights
            </h2>
          </div>

          <p className="text-[9px] text-[#68677a] sm:text-[10px]">
            Showing {filteredArticles.length} of 6 medically reviewed articles
          </p>
        </div>

        {/* Guide cards */}
        {filteredArticles.length > 0 ? (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filteredArticles.map((article) => (
              <article
                key={article.id}
                className="group flex min-w-0 flex-col rounded-xl border border-[#efebf6] bg-white p-3.5 transition duration-200 hover:-translate-y-1 hover:border-[#e3d6eb] hover:shadow-[0_10px_24px_rgba(9,44,96,0.08)] sm:p-4"
              >
                {/* Category and reading time */}
                <div className="mb-2 flex items-center justify-between gap-2">
                  <span className="rounded-sm bg-[#e9edff] px-2 py-1 text-[7px] font-semibold text-[#173f7a] sm:text-[8px]">
                    {article.category}
                  </span>

                  <span className="inline-flex shrink-0 items-center gap-1 text-[8px] text-[#68677a]">
                    <Clock3 size={10} />
                    {article.time}
                  </span>
                </div>

                {/* Thumbnail */}
                <GuideThumbnail type={article.visual} />

                {/* Article content */}
                <h3 className="mt-3 text-sm font-semibold leading-[1.4] tracking-tight text-[#092c60] sm:text-[15px]">
                  {article.title}
                </h3>

                <p className="mt-2 flex-1 text-[10px] leading-[1.7] text-[#5d5b6b] sm:text-[11px]">
                  {article.description}
                </p>

                {/* Author and CTA */}
                <div className="mt-3 flex items-center justify-between gap-2 border-t border-[#f0edf5] pt-3">
                  <span className="min-w-0 truncate text-[8px] text-[#55586a]">
                    By {article.author}
                  </span>

                  <Link
                    to={article.href}
                    className="inline-flex shrink-0 items-center gap-1 text-[8px] font-semibold text-[#092c60] transition group-hover:text-[#bd2d79]"
                  >
                    Read Article
                    <ArrowRight size={12} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="rounded-xl border border-[#efebf6] bg-white px-5 py-12 text-center">
            <HeartPulse
              size={25}
              className="mx-auto text-[#bd2d79]"
            />
            <h3 className="mt-3 text-base font-semibold text-[#092c60]">
              No guides found
            </h3>
            <p className="mt-1 text-xs text-[#68677a]">
              Try another search term or choose a different topic.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

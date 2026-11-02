import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  Clock3,
  BookOpen,
  ShieldCheck,
  CheckCircle2,
  Copy,
} from "lucide-react";
import { articles } from "../data/learnArticles";

function ArticleText({ children }) {
  const parts = String(children).split(/(\*\*.*?\*\*)/g);

  return (
    <>
      {parts.map((part, index) =>
        part.startsWith("**") && part.endsWith("**") ? (
          <strong key={index} className="font-semibold text-[#092c60]">
            {part.slice(2, -2)}
          </strong>
        ) : (
          part
        )
      )}
    </>
  );
}

function ArticleSection({ section, index }) {
  const [checkedQuestions, setCheckedQuestions] = useState([]);

  const toggleQuestion = (question) => {
    setCheckedQuestions((current) =>
      current.includes(question)
        ? current.filter((item) => item !== question)
        : [...current, question]
    );
  };

  const copyChecklist = async () => {
    const text = section.checklist
      .map((question, index) => `${index + 1}. ${question}`)
      .join("\n");

    try {
      await navigator.clipboard.writeText(text);
    } catch {
      // Clipboard access may be unavailable in some browsers.
    }
  };

  return (
    <section
      id={`section-${index + 1}`}
      className="scroll-mt-28 border-b border-[#eeebf5] py-8 last:border-0 sm:py-10"
    >
      <div className="mb-4 flex items-start gap-3">
        <span className="mt-0.5 flex h-7 min-w-7 items-center justify-center rounded-md bg-[#e9edff] px-2 text-[10px] font-bold text-[#173f7a]">
          {String(index + 1).padStart(2, "0")}
        </span>

        <h2 className="text-lg font-semibold leading-snug tracking-tight text-[#092c60] sm:text-xl">
          {section.heading}
        </h2>
      </div>

      {section.paragraphs?.map((paragraph, i) => (
        <p
          key={i}
          className="mb-3 text-[13px] leading-[1.9] text-[#555466] sm:text-sm"
        >
          <ArticleText>{paragraph}</ArticleText>
        </p>
      ))}

      {section.steps && (
        <div className="mt-5 space-y-3">
          {section.steps.map((step, i) => (
            <div
              key={i}
              className="rounded-xl border border-[#eeebf6] bg-[#f7f7ff] p-4 sm:p-5"
            >
              <h3 className="mb-2 text-sm font-semibold text-[#092c60]">
                {step.title}
              </h3>
              <p className="text-xs leading-[1.8] text-[#5d5b6b] sm:text-sm">
                {step.text}
              </p>
            </div>
          ))}
        </div>
      )}

      {section.bullets && (
        <ul className="mt-4 space-y-3">
          {section.bullets.map((bullet, i) => (
            <li
              key={i}
              className="flex items-start gap-2.5 text-[13px] leading-[1.8] text-[#555466] sm:text-sm"
            >
              <CheckCircle2
                size={15}
                className="mt-1 shrink-0 text-[#bd2d79]"
              />
              <span>
                <ArticleText>{bullet}</ArticleText>
              </span>
            </li>
          ))}
        </ul>
      )}

      {section.table && (
        <div className="mt-5 overflow-x-auto rounded-xl border border-[#e9e8f4]">
          <table className="w-full min-w-[570px] border-collapse text-left text-xs">
            <thead className="bg-[#eef0ff] text-[#092c60]">
              <tr>
                {section.table.headers.map((header) => (
                  <th key={header} className="px-4 py-3 font-semibold">
                    {header}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {section.table.rows.map((row, i) => (
                <tr key={i} className="border-t border-[#eeebf5] bg-white">
                  {row.map((cell, j) => (
                    <td
                      key={j}
                      className="px-4 py-3 align-top leading-[1.7] text-[#555466]"
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {section.checklist && (
        <div className="mt-5 rounded-xl border border-[#e9e8f4] bg-[#f7f7ff] p-4 sm:p-5">
          <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
            <div>
              <h3 className="text-sm font-semibold text-[#092c60]">
                Your appointment checklist
              </h3>
              <p className="mt-1 text-[11px] text-[#777588]">
                {checkedQuestions.length} of {section.checklist.length} completed
              </p>
            </div>

            <button
              type="button"
              onClick={copyChecklist}
              className="inline-flex items-center gap-1.5 rounded-full border border-[#dfe1f2] bg-white px-3 py-2 text-[10px] font-semibold text-[#173f7a] transition hover:border-[#bd2d79] hover:text-[#bd2d79]"
            >
              <Copy size={12} />
              Copy checklist
            </button>
          </div>

          <div className="mb-4 h-1.5 overflow-hidden rounded-full bg-[#e4e5f4]">
            <div
              className="h-full rounded-full bg-[#bd2d79] transition-all"
              style={{
                width: `${
                  (checkedQuestions.length / section.checklist.length) * 100
                }%`,
              }}
            />
          </div>

          <div className="space-y-3">
            {section.checklist.map((question, i) => (
              <label
                key={question}
                className="flex cursor-pointer items-start gap-3 text-xs leading-[1.7] text-[#555466]"
              >
                <input
                  type="checkbox"
                  checked={checkedQuestions.includes(question)}
                  onChange={() => toggleQuestion(question)}
                  className="mt-0.5 h-4 w-4 shrink-0 accent-[#bd2d79]"
                />
                <span
                  className={
                    checkedQuestions.includes(question)
                      ? "text-[#9694a2] line-through"
                      : ""
                  }
                >
                  {i + 1}. {question}
                </span>
              </label>
            ))}
          </div>
        </div>
      )}

      {section.note && (
        <div className="mt-5 rounded-lg border border-[#e4e5fa] bg-[#f0f1ff] px-4 py-3">
          <p className="text-xs leading-[1.8] text-[#45465e]">
            {section.note}
          </p>
        </div>
      )}
    </section>
  );
}

export default function ArticlePage() {
  const { slug } = useParams();
  const article = articles.find((item) => item.slug === slug);

  if (!article) {
    return (
      <main className="flex min-h-[60vh] items-center justify-center bg-[#fcfaff] px-5">
        <div className="text-center">
          <h1 className="text-2xl font-semibold text-[#092c60]">
            Article not found
          </h1>
          <p className="mt-2 text-sm text-[#626071]">
            The article you are looking for may have moved.
          </p>
          <Link
            to="/learn"
            className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#bd2d79]"
          >
            <ArrowLeft size={15} />
            Back to Learn
          </Link>
        </div>
      </main>
    );
  }

  const currentIndex = articles.findIndex((item) => item.slug === slug);
  const previousArticle = articles[currentIndex - 1];
  const nextArticle = articles[currentIndex + 1];

  return (
    <main className="min-h-screen bg-[#fcfaff] px-4 pb-14 pt-8 sm:px-6 sm:pt-12">
      <article className="mx-auto max-w-[850px]">
        <Link
          to="/learn"
          className="mb-8 inline-flex items-center gap-2 text-xs font-semibold text-[#626071] transition hover:text-[#bd2d79]"
        >
          <ArrowLeft size={14} />
          Back to Learn & Resources
        </Link>

        <header className="rounded-2xl border border-[#eeebf5] bg-white p-5 shadow-[0_8px_30px_rgba(9,44,96,0.03)] sm:p-9">
          <div className="mb-5 flex flex-wrap items-center gap-2">
            <span className="rounded-md bg-[#edf0ff] px-2.5 py-1.5 text-[9px] font-bold tracking-wider text-[#173f7a]">
              ARTICLE {article.number}
            </span>
            <span className="text-[9px] font-bold tracking-[0.14em] text-[#bd2d79]">
              {article.category}
            </span>
          </div>

          <h1 className="max-w-[720px] text-2xl font-semibold leading-tight tracking-tight text-[#092c60] sm:text-4xl">
            {article.title}
          </h1>

          <p className="mt-4 max-w-[680px] text-sm leading-[1.8] text-[#626071]">
            {article.description}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-4 border-t border-[#eeebf5] pt-5 text-[11px] text-[#777588]">
            <span className="inline-flex items-center gap-1.5">
              <Clock3 size={13} />
              {article.readingTime}
            </span>

            <span className="inline-flex items-center gap-1.5">
              <BookOpen size={13} />
              {article.topic}
            </span>
          </div>
        </header>

        <div className="mt-5 rounded-xl border border-[#e7e7fa] bg-[#f0f1ff] p-4 sm:p-5">
          <div className="flex items-start gap-3">
            <ShieldCheck
              size={18}
              className="mt-0.5 shrink-0 text-[#173f7a]"
            />
            <div>
              <h2 className="text-xs font-bold text-[#092c60]">
                Educational information
              </h2>
              <p className="mt-1 text-xs leading-[1.8] text-[#555466]">
                This article is intended for general educational purposes.
                Always follow the instructions supplied with your specific
                test kit and consult a qualified healthcare professional
                when you need medical advice.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-5 rounded-2xl border border-[#eeebf5] bg-white px-5 sm:px-9">
          {article.sections.map((section, index) => (
            <ArticleSection
              key={section.heading}
              section={section}
              index={index}
            />
          ))}
        </div>

        <div className="mt-5 rounded-xl border border-[#f0dce9] bg-[#fff8fc] p-5">
          <h2 className="text-sm font-bold text-[#092c60]">
            Medical note
          </h2>
          <p className="mt-2 text-xs leading-[1.8] text-[#626071]">
            {article.medicalNote}
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {previousArticle ? (
            <Link
              to={`/learn/${previousArticle.slug}`}
              className="group rounded-xl border border-[#eeebf5] bg-white p-4 transition hover:border-[#d9c5dc]"
            >
              <span className="text-[9px] font-semibold uppercase tracking-wider text-[#888699]">
                Previous article
              </span>
              <span className="mt-2 flex items-center gap-2 text-sm font-semibold text-[#092c60]">
                <ArrowLeft size={14} />
                {previousArticle.title}
              </span>
            </Link>
          ) : (
            <div />
          )}

          {nextArticle && (
            <Link
              to={`/learn/${nextArticle.slug}`}
              className="group rounded-xl border border-[#eeebf5] bg-white p-4 text-right transition hover:border-[#d9c5dc]"
            >
              <span className="text-[9px] font-semibold uppercase tracking-wider text-[#888699]">
                Next article
              </span>
              <span className="mt-2 flex items-center justify-end gap-2 text-sm font-semibold text-[#092c60]">
                {nextArticle.title}
                <ArrowRight size={14} />
              </span>
            </Link>
          )}
        </div>
      </article>
    </main>
  );
}
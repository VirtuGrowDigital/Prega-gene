
import { useState } from "react";
import {
  LockKeyhole,
  ShieldCheck,
  Cookie,
  Settings2,
  CheckCircle2,
  X,
} from "lucide-react";

export default function PrivacyPolicySections() {
  const [preferencesOpen, setPreferencesOpen] = useState(false);
  const [analyticsEnabled, setAnalyticsEnabled] = useState(false);

  const informationUses = [
    {
      title: "Orders and Delivery",
      description:
        "Sending your kit in plain packaging and coordinating delivery through authorised service providers.",
      icon: ShieldCheck,
    },
    {
      title: "Customer Support",
      description:
        "Answering questions, checking batch numbers and handling product feedback or complaints.",
      icon: CheckCircle2,
    },
    {
      title: "Safety Reporting",
      description:
        "Recording relevant batch details and investigating quality complaints where required by applicable medical device regulations.",
      icon: LockKeyhole,
    },
    {
      title: "Website Security",
      description:
        "Protecting our website and users against fraud, unauthorised access, automated bots and security attacks.",
      icon: Settings2,
    },
  ];

  const cookieTypes = [
    {
      name: "Strictly Necessary",
      purpose:
        "Security, session management and essential website functionality.",
      duration: "Session",
      control: "Always active",
      required: true,
    },
    {
      name: "Analytics",
      purpose:
        "Understanding anonymous website traffic and improving page performance.",
      duration: "Up to 90 days",
      control: "Your choice",
      required: false,
    },
    {
      name: "Advertising",
      purpose:
        "We do not use advertising cookies, ad tracking or retargeting technologies.",
      duration: "Not used",
      control: "Disabled",
      required: false,
    },
  ];

  return (
    <section className="bg-[#fcfaff] px-5 py-12 sm:px-8 sm:py-16">
      <div className="mx-auto max-w-[1100px]">

        {/* SECTION 02 */}
        <section
          id="how-we-use-information"
          className="scroll-mt-28 border-b border-[#e9e8f5] pb-10"
        >
          <div className="mb-5 flex items-center gap-3">
            <span className="rounded-sm bg-[#e8edff] px-2 py-1 text-[10px] font-bold text-[#173f7a]">
              02
            </span>
            <h2 className="text-xl font-semibold tracking-tight text-[#092c60] sm:text-2xl">
              How We Use Your Information
            </h2>
          </div>

          <p className="mb-6 max-w-[720px] text-xs leading-6 text-[#626071] sm:text-sm">
            We use your information only where we have a lawful reason and
            only for the purposes described in this policy.
          </p>

          <div className="grid gap-3 sm:grid-cols-2">
            {informationUses.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="flex gap-3 rounded-xl border border-[#e9eafa] bg-white p-4"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#eef0ff] text-[#173f7a]">
                    <Icon size={15} />
                  </div>

                  <div>
                    <h3 className="text-xs font-bold text-[#092c60]">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-[11px] leading-[1.8] text-[#626071]">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* SECTION 03 */}
        <section
          id="cookies"
          className="scroll-mt-28 pt-10"
        >
          <div className="mb-4 flex items-center gap-3">
            <span className="rounded-sm bg-[#e8edff] px-2 py-1 text-[10px] font-bold text-[#173f7a]">
              03
            </span>

            <h2 className="text-xl font-semibold tracking-tight text-[#092c60] sm:text-2xl">
              Cookies & Tracking Technologies
            </h2>
          </div>

          <p className="mb-5 max-w-[720px] text-xs leading-6 text-[#626071] sm:text-sm">
            We use only the cookies needed to keep our website secure,
            functional and reliable. Optional analytics cookies can be
            managed through your preferences.
          </p>

          {/* Cookie Table */}
          <div className="overflow-hidden rounded-xl border border-[#e8e9f5] bg-white">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[620px] border-collapse text-left">
                <thead>
                  <tr className="bg-[#eef0ff]">
                    <th className="px-4 py-3 text-[10px] font-bold text-[#092c60]">
                      Cookie Type
                    </th>
                    <th className="px-4 py-3 text-[10px] font-bold text-[#092c60]">
                      Purpose
                    </th>
                    <th className="px-4 py-3 text-[10px] font-bold text-[#092c60]">
                      Duration
                    </th>
                    <th className="px-4 py-3 text-[10px] font-bold text-[#092c60]">
                      Control
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {cookieTypes.map((cookie) => (
                    <tr
                      key={cookie.name}
                      className="border-t border-[#edf0f7]"
                    >
                      <td className="px-4 py-4 text-[10px] font-semibold text-[#18223b]">
                        {cookie.name}
                      </td>

                      <td className="px-4 py-4 text-[10px] leading-[1.7] text-[#626071]">
                        {cookie.purpose}
                      </td>

                      <td className="px-4 py-4 text-[10px] text-[#626071]">
                        {cookie.duration}
                      </td>

                      <td className="px-4 py-4">
                        <span
                          className={`inline-flex whitespace-nowrap rounded-md px-2 py-1 text-[9px] font-semibold ${
                            cookie.required
                              ? "bg-[#e8edff] text-[#173f7a]"
                              : cookie.name === "Advertising"
                              ? "bg-[#fff0f2] text-[#bd2d79]"
                              : "bg-[#f0f1ff] text-[#626071]"
                          }`}
                        >
                          {cookie.control}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Cookie Preferences */}
          <div className="mt-4 flex flex-col gap-4 rounded-xl bg-[#eef0ff] p-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-3">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white text-[#173f7a]">
                <Cookie size={16} />
              </div>

              <div>
                <h3 className="text-xs font-bold text-[#092c60]">
                  Your Cookie Preferences
                </h3>
                <p className="mt-1 max-w-[560px] text-[10px] leading-[1.7] text-[#626071]">
                  Strictly necessary cookies are always active. You can
                  review your optional analytics preference here.
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setPreferencesOpen(true)}
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-white px-4 py-2.5 text-[10px] font-semibold text-[#092c60] shadow-sm transition hover:bg-[#e2e6fc]"
            >
              <Settings2 size={13} />
              Manage Preferences
            </button>
          </div>
        </section>
      </div>

      {/* Preferences Modal */}
      {preferencesOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#071a37]/50 px-4 py-6"
          onClick={() => setPreferencesOpen(false)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="cookie-preferences-title"
            className="w-full max-w-[440px] rounded-2xl bg-white p-6 shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-[#092c60]">
                <Cookie size={19} />
                <h3
                  id="cookie-preferences-title"
                  className="text-base font-bold"
                >
                  Cookie Preferences
                </h3>
              </div>

              <button
                type="button"
                onClick={() => setPreferencesOpen(false)}
                aria-label="Close preferences"
                className="rounded-lg p-2 text-[#626071] transition hover:bg-[#f0f1ff]"
              >
                <X size={17} />
              </button>
            </div>

            <p className="mt-3 text-xs leading-6 text-[#626071]">
              Choose whether to allow optional analytics cookies.
              Essential cookies remain active to keep the website working.
            </p>

            <div className="mt-5 space-y-3">
              <div className="flex items-center justify-between rounded-xl bg-[#f5f5ff] p-4">
                <div>
                  <p className="text-xs font-bold text-[#092c60]">
                    Necessary Cookies
                  </p>
                  <p className="mt-1 text-[10px] text-[#626071]">
                    Required for essential website functions.
                  </p>
                </div>
                <span className="text-[10px] font-bold text-[#173f7a]">
                  Always On
                </span>
              </div>

              <div className="flex items-center justify-between rounded-xl border border-[#e9eafa] p-4">
                <div>
                  <p className="text-xs font-bold text-[#092c60]">
                    Analytics Cookies
                  </p>
                  <p className="mt-1 text-[10px] text-[#626071]">
                    Help us understand website performance.
                  </p>
                </div>

                <button
                  type="button"
                  role="switch"
                  aria-checked={analyticsEnabled}
                  onClick={() =>
                    setAnalyticsEnabled((enabled) => !enabled)
                  }
                  className={`relative h-6 w-11 rounded-full transition ${
                    analyticsEnabled ? "bg-[#bd2d79]" : "bg-[#d7d8e5]"
                  }`}
                >
                  <span
                    className={`absolute top-1 h-4 w-4 rounded-full bg-white shadow-sm transition ${
                      analyticsEnabled ? "left-6" : "left-1"
                    }`}
                  />
                </button>
              </div>

              <div className="rounded-xl border border-[#f1dce8] bg-[#fff8fb] p-4">
                <p className="text-xs font-bold text-[#092c60]">
                  Advertising Cookies
                </p>
                <p className="mt-1 text-[10px] leading-5 text-[#626071]">
                  Advertising and retargeting cookies are not used.
                </p>
                <span className="mt-2 inline-block rounded-md bg-[#fce8ef] px-2 py-1 text-[9px] font-semibold text-[#bd2d79]">
                  Disabled
                </span>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setPreferencesOpen(false)}
              className="mt-5 w-full rounded-full bg-[#092c60] py-3 text-xs font-semibold text-white transition hover:bg-[#123b73]"
            >
              Save Preferences
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

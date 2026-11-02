
import { ChevronDown } from "lucide-react";

const informationItems = [
  {
    title: "Usage Instructions & Best Practices",
    content:
      "Read the complete instructions before testing. Follow the specified urine collection method, testing procedure, and result-reading time. Using the kit as directed helps reduce user-related errors.",
  },
  {
    title: "Storage & Temperature Conditions",
    content:
      "Store the test kit under the temperature and environmental conditions stated on its packaging. Keep it sealed until use and do not use it beyond its expiry date.",
  },
  {
    title: "Safety Guidelines",
    content:
      "For single use only. Keep the kit and its components out of reach of children. Follow the supplied instructions for handling and disposal.",
  },
  {
    title: "Precautions & Sample Integrity",
    content:
      "Use a suitable urine sample and follow the recommended collection and testing procedure. Testing too early or using an incorrect technique may affect the result.",
  },
  {
    title: "Medical Disclaimer & Confirmations",
    content:
      "Prega Gene is intended for the detection of hCG in urine. A home pregnancy test is not a substitute for medical advice. Consult a qualified healthcare professional for confirmation, especially if results are unclear or symptoms persist.",
  },
];

export default function ClinicalStandards() {
  return (
    <section
      id="clinical-standards"
      className="bg-[#fcfaff] px-5 py-12 sm:px-8 sm:py-14 lg:py-14"
    >
      <div className="mx-auto max-w-[700px]">
        {/* Section heading */}
        <div className="mb-6">
          <p className="mb-2 text-[10px] font-bold uppercase tracking-[1.5px] text-[#bd2d79]">
            Clinical Standards
          </p>

          <h2 className="text-[25px] font-semibold leading-tight tracking-[-0.8px] text-[#092c60] sm:text-[30px]">
            Important information for accurate testing
          </h2>

          <p className="mt-3 text-[12px] leading-[1.75] text-[#626071] sm:text-[13px]">
            Review the product instructions, storage requirements, and
            safety guidance before using your Prega Gene pregnancy test kit.
          </p>
        </div>

        {/* Accordion list */}
        <div className="space-y-2">
          {informationItems.map((item, index) => (
            <details
              key={item.title}
              className="group overflow-hidden rounded-xl border border-white bg-white shadow-[0_2px_8px_rgba(20,35,80,0.025)]"
            >
              <summary className="flex min-h-[44px] cursor-pointer list-none items-center justify-between gap-4 px-4 py-3 text-[12px] font-semibold text-[#092c60] transition hover:bg-[#faf9ff] sm:text-[13px] [&::-webkit-details-marker]:hidden">
                <span>{item.title}</span>

                <ChevronDown
                  size={15}
                  className="shrink-0 text-[#173f7a] transition-transform duration-200 group-open:rotate-180"
                />
              </summary>

              <div className="border-t border-[#f0edf7] px-4 py-4">
                <p className="text-[12px] leading-[1.8] text-[#626071]">
                  {item.content}
                </p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}


import { useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import UnderstandResultsHero from "../components/UnderstandResultsHero";
import ResultPatternSelector from "../components/ResultPatternSelector";
import SelectedResultDetails from "../components/SelectedResultDetails";
import CompassionateAssistance from "../components/CompassionateAssistance";
import ScientificEducation from "../components/ScientificEducation";

export default function UnderstandResults() {
  const [selectedPattern, setSelectedPattern] = useState("positive");

  useEffect(() => {
    document.title = "How to Read Pregnancy Test Results | Prega Gene";

    const description =
      "Learn how to read Prega Gene pregnancy test results, identify positive, negative and invalid results, understand faint test lines, and find guidance on your next steps.";

    let metaDescription = document.querySelector(
      'meta[name="description"]'
    );

    const createdMeta = !metaDescription;

    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.name = "description";
      document.head.appendChild(metaDescription);
    }

    const previousDescription = metaDescription.content;
    metaDescription.content = description;

    return () => {
      document.title = "Prega Gene";

      if (createdMeta) {
        metaDescription.remove();
      } else {
        metaDescription.content = previousDescription;
      }
    };
  }, []);

  return (
    <>
      <Navbar />

      <main>
        <UnderstandResultsHero />

        <ResultPatternSelector
          selectedPattern={selectedPattern}
          onSelectPattern={setSelectedPattern}
        />

        <SelectedResultDetails selectedPattern={selectedPattern} />

        <CompassionateAssistance />

        <ScientificEducation />
      </main>

      <Footer />
    </>
  );
}

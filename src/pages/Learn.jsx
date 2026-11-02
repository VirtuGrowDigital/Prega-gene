
import { useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import LearnHero from "../components/LearnHero";
import FeaturedArticle from "../components/FeaturedArticle";
import GuideFilters from "../components/GuideFilters";
import GuideLibrary from "../components/GuideLibrary";
import DirectAssistance from "../components/DirectAssistance";
import LearnClosingCTA from "../components/LearnClosingCTA";


export default function Learn() {
  const [activeTopic, setActiveTopic] = useState("All Topics");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    document.title = "Pregnancy Testing Guides & hCG Explained | Prega Gene";

    const description =
      "Medically reviewed guides on when to test, reading results, hCG, faint lines, and more. Clear, calm answers from Prega Gene.";

    let meta = document.querySelector('meta[name="description"]');
    const createdMeta = !meta;

    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }

    const previousDescription = meta.content;
    meta.content = description;

    return () => {
      document.title = "Prega Gene";

      if (createdMeta) {
        meta.remove();
      } else {
        meta.content = previousDescription;
      }
    };
  }, []);

  return (
    <>
      <Navbar />

      <main>
        <LearnHero />

        <FeaturedArticle />

        <GuideFilters
          activeTopic={activeTopic}
          onTopicChange={setActiveTopic}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
        />

        <GuideLibrary
          activeTopic={activeTopic}
          searchQuery={searchQuery}
        />

        <DirectAssistance />
        <LearnClosingCTA/>

     
      </main>

      <Footer />
    </>
  );
}

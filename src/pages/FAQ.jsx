
import { useState } from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FAQHero from "../components/FAQHero";
import FAQSearchAndFilters from "../components/FAQSearchAndFilters";
import FAQAccordion from "../components/FAQAccordion";
import FAQContactCTA from "../components/FAQContactCTA";
import RecommendedGuides from "../components/RecommendedGuides";

export default function FAQ() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] =
    useState("All Questions");

  return (
    <>
      <Navbar />

      <main>
        {/* FAQ Hero */}
        <FAQHero />

        {/* Search and Category Filters */}
        <FAQSearchAndFilters
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />

        {/* FAQ Questions */}
        <FAQAccordion
          searchQuery={searchQuery}
          activeCategory={activeCategory}
        />

        {/* Contact Support CTA */}
        <FAQContactCTA />

        {/* Recommended Educational Guides */}
        <RecommendedGuides />
      </main>

      <Footer />
    </>
  );
}

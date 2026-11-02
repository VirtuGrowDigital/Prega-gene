import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import HowToUse from "./pages/HowToUse";
import About from "./pages/About";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import Learn from "./pages/Learn";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfUse from "./pages/TermsOfUse";
import UnderstandResults from "./pages/UnderstandResults";
import WhereToBuy from "./pages/WhereToBuy";
import Article from "./pages/Article";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/how-to-use" element={<HowToUse />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/learn" element={<Learn />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-use" element={<TermsOfUse />} />
        <Route path="/understand-results" element={<UnderstandResults />} />
        <Route path="/where-to-buy" element={<WhereToBuy />} />

        {/* Dynamic article route */}
        <Route path="/learn/:slug" element={<Article />} />
      </Routes>
    </BrowserRouter>
  );
}
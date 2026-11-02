
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ProductOverview from "../components/ProductOverview";
import ThoughtfulEngineering from "../components/ThoughtfulEngineering";
import UnboxingIntegrity from "../components/UnboxingIntegrity";
import Protocol from "../components/Protocol";
import VisualInterpretation from "../components/VisualInterpretation";
import ClinicalStandards from "../components/ClinicalStandards";
import FAQs from "../components/FAQs";
import WhereToBuy from "../components/WhereToBuy";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <ProductOverview />
        <ThoughtfulEngineering />
        <UnboxingIntegrity />
        <Protocol />
        <VisualInterpretation />
        <ClinicalStandards />
        <FAQs/>
        <WhereToBuy/>
        <Footer/>
      </main>
    </>
  );
}

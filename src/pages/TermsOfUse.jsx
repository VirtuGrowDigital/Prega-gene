
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TermsHero from "../components/TermsHero";
import MedicalNotice from "../components/MedicalNotice";
import TermsMedicalAndSpecs from "../components/TermsMedicalAndSpecs";
import TermsAdditionalSections from "../components/TermsAdditionalSections";

export default function TermsOfUse() {
  return (
    <>
      <Navbar />

      <main>
        <TermsHero />
        <MedicalNotice />
        <TermsMedicalAndSpecs/>
        <TermsAdditionalSections/>
      </main>

      <Footer />
    </>
  );
}

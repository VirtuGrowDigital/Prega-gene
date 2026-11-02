
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HowToUseHero from "../components/HowToUseHero";
import PreparationChecklist from "../components/PreparationChecklist";
import TestingSteps from "../components/TestingSteps";
import VideoWalkthrough from "../components/VideoWalkthrough";
import ImportantReminders from "../components/ImportantReminders";
import UnderstandResults from "../components/UnderstandResults";
import PatientCareAssistance from "../components/PatientCareAssistance";

export default function HowToUse() {
  return (
    <>
      <Navbar />

      <main>
        <HowToUseHero />
        <PreparationChecklist />
        <TestingSteps />
        <VideoWalkthrough />
        <ImportantReminders />
        <UnderstandResults />
        <PatientCareAssistance />
      </main>

      <Footer />
    </>
  );
}

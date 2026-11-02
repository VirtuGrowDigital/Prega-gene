import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AboutHero from "../components/AboutHero";
import DiagnosticGap from "../components/DiagnosticGap";
import CorePrinciples from "../components/CorePrinciples";
import { User } from "lucide-react";
import UserJourney from "../components/UserJourney";
import ResponsibleInformation from "../components/ResponsibleInformation";
import NextExplorations from "../components/NextExplorations";

export default function About() {
  return (
    <>
      <Navbar />

      <main>
        <AboutHero />
        <DiagnosticGap />
       
<CorePrinciples />
<UserJourney/>
<ResponsibleInformation/>
<NextExplorations/>

      </main>

      <Footer />
    </>
  );
}
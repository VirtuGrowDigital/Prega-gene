import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhereToBuyHero from "../components/WhereToBuyHero";
import OnlineSellers from "../components/OnlineSellers";
import StoreLocator from "../components/StoreLocator";
import KitContentsAndVerification from "../components/KitContentsAndVerification";
import SupportFAQs from "../components/SupportFAQs";

export default function WhereToBuy() {
  return (
    <>
      <Navbar />

      <main>
        <WhereToBuyHero />
        <OnlineSellers/>
        <StoreLocator/>
        <KitContentsAndVerification/>
        <SupportFAQs/>
      </main>

      <Footer />
    </>
  );
}
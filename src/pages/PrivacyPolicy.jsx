import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PrivacyPolicyHeader from "../components/PrivacyPolicyHeader";
import PrivacyPolicyContent from "../components/PrivacyPolicyContent";
import PrivacyPolicySections from "../components/PrivacyPolicySections";
import PrivacyPolicyDetails from "../components/PrivacyPolicyDetails";
import PrivacyPolicyClosing from "../components/PrivacyPolicyClosing";

export default function PrivacyPolicy() {
  return (
    <>
      <Navbar />

      <main>
        <PrivacyPolicyHeader />
        <PrivacyPolicyContent />
        <PrivacyPolicySections/>
        <PrivacyPolicyDetails/>
        <PrivacyPolicyClosing/>
      </main>

      <Footer />
    </>
  );
}
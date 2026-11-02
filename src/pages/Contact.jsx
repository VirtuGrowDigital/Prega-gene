
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import ContactHero from "../components/ContactHero";
import CustomerCarePanel from "../components/CustomerCarePanel";
import ContactMessageForm from "../components/ContactMessageForm";
import ContactSelfServe from "../components/ContactSelfServe";

export default function Contact() {
  return (
    <>
      <Navbar />

      <main>
        <ContactHero />
        <CustomerCarePanel />
        <ContactMessageForm />
        <ContactSelfServe/>
      </main>

      <Footer />
    </>
  );
}

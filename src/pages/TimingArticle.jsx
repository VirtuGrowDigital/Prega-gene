
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TimingArticleHeader from "../components/TimingArticleHeader";
import TimingArticleBody from "../components/TimingArticleBody";

export default function TimingArticle() {
  return (
    <>
      <Navbar />

      <main>
        <TimingArticleHeader />
        <TimingArticleBody />
      </main>

      <Footer />
    </>
  );
}

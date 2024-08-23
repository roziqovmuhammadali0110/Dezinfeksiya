import Header from "./components/Header";
import Section from "./components/Section";
import Service from "./components/Service";
import SectionTwo from "./components/SectionTwo";
import Faq from "./components/Faq";
import ScrollToTopButton from "./components/ScrollToTopButton";
import Footer from "./components/Footer";
import { useTranslation } from "react-i18next";
import Navbar from "./components/Navbar";
import FooterEnd from "./components/FooterEnd";

function App() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="flex flex-col container space-y-12 mx-auto">
      <Navbar changeLanguage={changeLanguage} />
      <Header />
      <Section />
      <Service />
      <SectionTwo />
      <Faq />
      <Footer />
      <FooterEnd />
      <ScrollToTopButton />
    </div>
  );
}

export default App;

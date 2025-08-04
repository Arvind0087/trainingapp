import Header from "./header/Header";
import Banner from "./banner/Banner";
import AboutSection from "./aboutme/AboutMe";
import TrainingGallery from "./trainingDetails/TrainingDetails";
import AboutUsSection from "./readmore/AboutUsSection";
import StatsSection from "./StatsSection/StatsSection";
import GallerySection from "./Gallery/Gallery";
import MapSection from "./maps/MapSection";
import ContactSection from "./contactsection/ContactSection";
import ContactInfoBoxes from "./contactsection/ContactInfoBoxes";
import Footer from "./footer/Footer";

function Dashboard() {
  return (
    <>
      <Header />
      <Banner />
      <AboutSection />
      <TrainingGallery />
      <AboutUsSection />
      <StatsSection />
      <GallerySection />
      <MapSection />
      <ContactSection />
      <ContactInfoBoxes />
      <Footer />
    </>
  );
}

export default Dashboard;

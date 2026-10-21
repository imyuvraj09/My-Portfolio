import About from "./About";
import Career from "./Career";
import Education from "./Education";
import Contact from "./Contact";
import WhatsAppWidget from "./WhatsAppWidget";
import Landing from "./Landing";
import Navbar from "./Navbar";
import SocialIcons from "./SocialIcons";
import Work from "./Work";
import TechStack from "./TechStack";
import Achievements from "./Achievements";

export default function MainContainer() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Navbar />
      <main id="main" tabIndex={-1}>
        <Landing />
        <SocialIcons />
        <About />
        <Career />
        <Education />
        <Work />
        <TechStack />
        <Achievements />
        <Contact />
      </main>
      <WhatsAppWidget />
    </>
  );
}

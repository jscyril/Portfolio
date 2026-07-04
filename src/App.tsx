import AboutMe from "./components/about";
import ContactSection from "./components/contact";
import CustomCursor from "./components/customCursor";
import ExperienceSection from "./components/experience";
import HeroSection from "./components/hero";
import NavBar from "./components/nav";
import ProjectsSection from "./components/projects";
import SkillsSection from "./components/skills";
import BackToTopButton from "./components/backToTop";
import AnimatedBackground from "./components/AnimatedBackground";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <AnimatedBackground />
      <CustomCursor />
      <NavBar />
      <main>
        <HeroSection />
        <AboutMe />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </main>
      <Footer />
      <BackToTopButton />
    </>
  );
}

export default App;

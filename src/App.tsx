import AboutMe from "./components/about";
import ContactSection from "./components/contact";
import HeroSection from "./components/hero";
import NavBar from "./components/nav";
import ProjectsSection from "./components/projects";
import BackToTopButton from "./components/backToTop";
import AnimatedBackground from "./components/AnimatedBackground";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <AnimatedBackground />
      <NavBar />
      <main>
        <HeroSection />
        <AboutMe />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
      <BackToTopButton />
    </>
  );
}

export default App;

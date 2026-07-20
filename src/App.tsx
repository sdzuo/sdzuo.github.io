import { SiteHeader } from "./components/SiteHeader";
import { AboutSection } from "./sections/AboutSection";
import { ContactSection } from "./sections/ContactSection";
import { Hero } from "./sections/Hero";
import { ProjectsSection } from "./sections/ProjectsSection";
import { SkillsSection } from "./sections/SkillsSection";

function App() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <SiteHeader />
      <main id="main-content">
        <Hero />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </main>
      <footer className="site-footer">
        <div className="container footer-content">
          <p>© {new Date().getFullYear()} Shamil Auwal</p>
          <p>Built with care, from interface to infrastructure.</p>
        </div>
      </footer>
    </>
  );
}

export default App;

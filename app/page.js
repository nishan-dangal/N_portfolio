import HeroSection from "./components/HeroSection";
import TopBar from "./components/TopBar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import SkillsSection from "./components/SkillsSection";
import NavLink from "./components/NavLink";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#14282e] " >
      <TopBar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <SkillsSection/>
        <AboutSection />
        <ProjectsSection />
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}
//[#1a2454], #121212(default black),#14282e


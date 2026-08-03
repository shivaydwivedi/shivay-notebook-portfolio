import { AboutSection } from "@/components/sections/about-section";
import { AlgorithmNotebookSection } from "@/components/sections/algorithm-notebook-section";
import { ArchitectureNotesSection } from "@/components/sections/architecture-notes-section";
import { CapabilitiesSection } from "@/components/sections/capabilities-section";
import { ContactSection } from "@/components/sections/contact-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { HomeSection } from "@/components/sections/home-section";
import { SelectedWorkSection } from "@/components/sections/selected-work-section";
import { StructuredData } from "@/components/structured-data";

export default function Home() {
  return (
    <>
      <StructuredData />
      <main id="main-content" className="px-3 pb-20" tabIndex={-1}>
        <HomeSection />
        <SelectedWorkSection />
        <ExperienceSection />
        <CapabilitiesSection />
        <ArchitectureNotesSection />
        <AboutSection />
        <AlgorithmNotebookSection />
        <ContactSection />
      </main>
    </>
  );
}

import { AboutSection } from "@/components/sections/about-section";
import { AlgorithmNotebookSection } from "@/components/sections/algorithm-notebook-section";
import { ArchitectureNotesSection } from "@/components/sections/architecture-notes-section";
import { CapabilitiesSection } from "@/components/sections/capabilities-section";
import { ContactSection } from "@/components/sections/contact-section";
import { HomeSection } from "@/components/sections/home-section";
import { SelectedWorkSection } from "@/components/sections/selected-work-section";

export default function Home() {
  return (
    <main className="px-3 pb-20">
      <HomeSection />
      <SelectedWorkSection />
      <CapabilitiesSection />
      <ArchitectureNotesSection />
      <AboutSection />
      <AlgorithmNotebookSection />
      <ContactSection />
    </main>
  );
}

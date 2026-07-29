import {
  BookOpen,
  Code2,
  Layers3,
  Mail,
  NotebookPen,
  ServerCog,
  Workflow
} from "lucide-react";
import type { PortfolioSection } from "@/types/portfolio";

export const futureSections = [
  { id: "home", label: "Home", icon: NotebookPen },
  { id: "selected-work", label: "Selected Work", icon: Layers3 },
  { id: "capabilities", label: "Engineering Capabilities", icon: ServerCog },
  { id: "architecture-notes", label: "Architecture Notes", icon: Workflow },
  { id: "about", label: "About", icon: BookOpen },
  { id: "algorithm-notebook", label: "Algorithm Notebook", icon: Code2 },
  { id: "contact", label: "Contact", icon: Mail }
] satisfies PortfolioSection[];

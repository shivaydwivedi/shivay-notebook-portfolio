import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ScrollProgress } from "@/components/scroll-progress";
import { CursorInk } from "@/components/cursor-ink";
import { NotebookNav } from "@/components/notebook-nav";
import { siteConfig } from "@/lib/utils";

export const metadata: Metadata = {
  metadataBase: new URL("https://shivay-dwivedi.dev"),
  title: `${siteConfig.name} | Backend Developer`,
  description: "A digital engineering notebook portfolio for Shivay Dwivedi, backend developer focused on Python, Django, DRF, APIs, and scalable systems.",
  keywords: ["Shivay Dwivedi", "Backend Developer", "Python", "Django", "Django REST Framework", "Portfolio"],
  authors: [{ name: siteConfig.name }],
  openGraph: {
    title: `${siteConfig.name} | Backend Developer`,
    description: siteConfig.tagline,
    type: "website",
    images: ["/images/engineering-notebook-hero.png"]
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <ScrollProgress />
          <CursorInk />
          <NotebookNav />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

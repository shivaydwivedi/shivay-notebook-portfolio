import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ScrollProgress } from "@/components/scroll-progress";
import { CursorInk } from "@/components/cursor-ink";
import { NotebookNav } from "@/components/notebook-nav";
import { siteMetadata } from "@/data/site";

export const metadata: Metadata = {
  title: {
    default: siteMetadata.title,
    template: siteMetadata.titleTemplate
  },
  description: siteMetadata.description,
  keywords: siteMetadata.keywords,
  authors: [{ name: siteMetadata.author }],
  creator: siteMetadata.creator,
  openGraph: {
    title: siteMetadata.openGraph.title,
    description: siteMetadata.openGraph.description,
    siteName: siteMetadata.openGraph.siteName,
    type: "website",
    ...(siteMetadata.openGraph.url ? { url: siteMetadata.openGraph.url } : {}),
    ...(siteMetadata.openGraph.image
      ? {
          images: [
            {
              url: siteMetadata.openGraph.image.path,
              alt: siteMetadata.openGraph.image.alt,
              width: siteMetadata.openGraph.image.width,
              height: siteMetadata.openGraph.image.height
            }
          ]
        }
      : {})
  },
  twitter: {
    card: siteMetadata.twitter.card,
    title: siteMetadata.twitter.title,
    description: siteMetadata.twitter.description,
    ...(siteMetadata.twitter.image ? { images: [siteMetadata.twitter.image] } : {})
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1
    }
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
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

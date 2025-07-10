import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio - Backend Developer",
  description: "Portfolio website showcasing backend development skills and projects",
  keywords: ["backend developer", "portfolio", "web development", "API", "database"],
  authors: [{ name: "Backend Developer" }],
  openGraph: {
    title: "Portfolio - Backend Developer",
    description: "Portfolio website showcasing backend development skills and projects",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio - Backend Developer",
    description: "Portfolio website showcasing backend development skills and projects",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

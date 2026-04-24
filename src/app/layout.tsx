import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import { ThemeProvider } from "@/components/ThemeProvider";
import PageTransition from "@/components/PageTransition";

export const metadata: Metadata = {
  title: "Forge Hyperloop",
  description: "Student engineers designing and building the next generation of hyperloop systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <PageTransition />
          <Nav />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

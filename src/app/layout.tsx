import type { Metadata } from "next";
import { Libre_Baskerville } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import { ThemeProvider } from "@/components/ThemeProvider";
import PageTransition from "@/components/PageTransition";

const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-libre-baskerville",
});

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
    <html lang="en" suppressHydrationWarning className={libreBaskerville.variable}>
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

import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "./components/theme-provider";
import Header from "./ui/Header";
import BannerText from "./ui/BannerText";
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="text-font-primary antialiased">
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <Header />
            <BannerText />
            {children}
          </ThemeProvider>
        </main>
      </body>
    </html>
  );
}

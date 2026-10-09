import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Heer Prajapati | Portfolio - MCA Student & Web Developer",
  description: "Official portfolio of Heer Prajapati - MCA Student, Web Developer, and Python Enthusiast. View verified certifications, full-stack projects, and technical skills.",
  keywords: ["Heer Prajapati", "Portfolio", "MCA Student", "Web Developer", "Python", "Ganpat University", "Certifications", "Infosys Springboard", "Skill India"],
  authors: [{ name: "Heer Prajapati" }],
  openGraph: {
    title: "Heer Prajapati | Portfolio",
    description: "MCA Student | Web Developer | Python Enthusiast | Explore Certifications & Projects",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#080c14] text-slate-100 min-h-screen selection:bg-indigo-500 selection:text-white`}
      >
        {children}
      </body>
    </html>
  );
}

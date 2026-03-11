import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Sanjay Supaiya | Backend-Leaning Full Stack Engineer",
  description:
    "Portfolio of Sanjay Supaiya — a backend-leaning full-stack software engineer building scalable backend systems, real-time applications, and intelligent recommendation engines using Java, Spring Boot, SQL/NoSQL, and modern web technologies.",
  keywords: [
    "Sanjay Supaiya",
    "Full Stack Engineer",
    "Backend Developer",
    "Java",
    "Spring Boot",
    "SQL/NoSQL",
    "React",
    "Next.js",
    "Docker",
  ],
  authors: [{ name: "Sanjay Supaiya" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}

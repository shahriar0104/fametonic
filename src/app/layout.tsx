import type { Metadata } from "next";
import { Inter, Urbanist, Figtree } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const urbanist = Urbanist({ 
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-urbanist"
});
const figtree = Figtree({ 
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-figtree"
});

export const metadata: Metadata = {
  title: "Fametonic - Turn Social Media Into a Profitable Career",
  description: "Discover your way to success with Fametonic. Start growing your influence right away with expert-led courses and AI-powered content creation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${urbanist.variable} ${figtree.variable}`}>{children}</body>
    </html>
  );
}

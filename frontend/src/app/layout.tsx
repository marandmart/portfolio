import type { Metadata } from "next";
import { IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import GithubIcon from "../../public/github.svg";
import LinkedInIcon from "../../public/linkedin.svg";

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-ibm-plex-sans",
  subsets: ["latin"],
  weight: "100"
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: "100"
});

export const metadata: Metadata = {
  title: "Mario Andre Martins",
  description: "Mario's portfolio website.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${ibmPlexSans.variable} ${ibmPlexMono.variable} antialiased`}
      >
        <nav className="flex justify-between p-4">
          <Link href="/" className="link-underline">Mario Martins</Link>
          <ul className="flex gap-2">
            <li className="inline-block">
              <Link href="/blog" className="link-underline">Blog</Link>
            </li>
            <li className="inline-block">
              <Link href="#projects" className="link-underline">Projects</Link>
            </li>
            <li className="inline-block">
              <Link href="#contact" className="link-underline">Contact</Link>
            </li>
          </ul>
        </nav>
        {children}
        <footer className="p-4 flex justify-between">
          <p>&copy; 2025 Mario Andre Martins</p>
          <ul className="flex flex-row gap-2">
            <li>
              <Link
                href={"https://www.github.com/marandmart/"}
                target={"_blank"}
              >
                <Image
                  src={GithubIcon}
                  alt={"Github Icon"}
                  width={24}
                  height={24}
                />
              </Link>
            </li>
            <li>
              <Link
                href={"https://www.linkedin.com/in/mario-andre-martins/"}
                target={"_blank"}
              >
                <Image
                  src={LinkedInIcon}
                  alt={"LinkedIn Icon"}
                  width={24}
                  height={24}
                />
              </Link>
            </li>
          </ul>
        </footer>
      </body>
    </html>
  );
}

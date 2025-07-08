import type { Metadata } from "next";
import { Epilogue } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import GithubIcon from "../../public/github.svg";
import LinkedInIcon from "../../public/linkedin.svg";

const epilogue = Epilogue({
  variable: "--font-epilogue",
  subsets: ["latin"],
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
    <html lang="en" className="scroll-smooth">
      <body className={`${epilogue.variable} antialiased relative`}>
        <nav className="fixed top-0 left-0 w-full z-10 flex justify-between p-4 [background-image:var(--background-image)]">
          <Link href="/" className="link-underline font-semibold">
            Mario Martins
          </Link>
          <ul className="flex gap-4">
            {/* <li className="inline-block">
              <Link href="/blog" className="link-underline">Blog</Link>
            </li> */}
            <li className="inline-block">
              <Link href="#about" className="link-underline font-medium">
                About
              </Link>
            </li>
            <li className="inline-block">
              <Link href="#experience" className="link-underline font-medium">
                Experience
              </Link>
            </li>
            <li className="inline-block">
              <Link href="#projects" className="link-underline font-medium">
                Projects
              </Link>
            </li>
            <li className="inline-block">
              <Link href="#contact" className="link-underline font-medium">
                Contact
              </Link>
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

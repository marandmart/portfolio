import type { Metadata } from "next";
import { Epilogue } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import GithubIcon from "../../public/github.svg";
import LinkedInIcon from "../../public/linkedin.svg";
import NavBar from "./components/NavBar";

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
        <NavBar />
        {children}
        <footer className="p-4 flex justify-between items-center gap-2">
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

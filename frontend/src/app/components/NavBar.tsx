"use client";

import Link from "next/link";
import { useRef, useState } from "react";

export default function NavBar() {
  const listRef = useRef<HTMLUListElement>(null);

  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!listRef.current) return;
    setIsDown(true);
    setStartX(e.pageX - listRef.current.offsetLeft);
    setScrollLeft(listRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDown(false);
  };

  const handleMouseUp = () => {
    setIsDown(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDown || !listRef.current) return;
    e.preventDefault();
    const x = e.pageX - listRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    listRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-10 flex justify-between p-4 [background-image:var(--background-image)]">
      <Link href="/" className="link-underline font-semibold">
        Mario Martins
      </Link>
      <ul
        className="flex gap-4 absolute top-12 left-0 right-0 px-10 overflow-x-scroll cursor-grab active:cursor-grabbing scrollbar-hide [background-image:var(--background-image)] xs:relative xs:top-auto xs:left-auto xs:right-auto xs:p-0 xs:overflow-x-visible xs:cursor-auto xs:active:cursor-auto xs:bg-none"
        ref={listRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
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
  );
}

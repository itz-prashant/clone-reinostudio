"use client";

import Link from "next/link";
import { useCursor } from "../Cursor/CursorProvider";

const navItems = [
    {
        item: ".Home",
        link: "/"
    },
    {
        item: ".Services",
        link: "/services"
    },
    {
        item: ".Contact",
        link: "/Contact"
    },
];

export default function Header() {
  const { setCursor } = useCursor();

  const handleEnter = () => setCursor("hover");
  const handleLeave = () => setCursor("default");

  return (
    <header className="bg-[#2b2f31] py-10">
      <div className="flex items-center justify-between max-w-[1400px] mx-auto text-white">
        
        {/* LOGO */}
        <div
          onMouseEnter={handleEnter}
          onMouseLeave={handleLeave}
          className="text-xl font-bold cursor-none"
        >
          LOGO
        </div>

        {/* NAV */}
        <nav>
          <ul className="flex items-center gap-20 font-bold text-lg">
            {navItems.map((navItem) => (
              <li
                key={navItem.item}
                className="cursor-none relative"
                onMouseEnter={handleEnter}
                onMouseLeave={handleLeave}
              >
                <Link href={navItem.link}><SplitText text={navItem.item} /></Link>
              </li>
            ))}
          </ul>
        </nav>

      </div>
    </header>
  );
}

/* ---------- SplitText Component ---------- */
function SplitText({ text }: { text: string }) {
  return (
    <span className="inline-block">
      {text.split("").map((char, index) => (
        <span
          key={index}
          className="inline-block transition-colors duration-300 will-change-auto"
        >
          {char}
        </span>
      ))}
    </span>
  );
}

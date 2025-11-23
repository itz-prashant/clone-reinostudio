"use client";

import Link from "next/link";
import { usePathname } from "next/navigation"; // 1. Import to detect page
import HoverCursor from "@/common/Cursor/HoverCursor";

const navItems = [
    { item: ".Home", link: "/" },
    { item: ".Services", link: "/Services" },
    { item: ".Contact", link: "/Contact" },
];

export default function Header() {
  const pathname = usePathname(); // 2. Get current path

  // 3. Logic: If path contains 'contact' or 'services', use White Theme
  const isLightPage = pathname?.toLowerCase().includes("contact") || pathname?.toLowerCase().includes("services");

  return (
    <header 
      className={`py-10 transition-colors duration-300 ease-in-out w-full z-50 relative
        ${isLightPage ? "bg-white text-black" : "bg-[#2b2f31] text-white"}
      `}
    >
      <div className="flex items-center justify-between max-w-[1400px] mx-auto px-6 md:px-10">
        
        {/* LOGO */}
        <Link href="/">
            <HoverCursor variant="hover" className="cursor-pointer block">
               {/* SVG LOGO (Uses 'currentColor' so it changes automatically) */}
               <svg width="44" height="34" viewBox="0 0 44 34" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 16.5L14.0722 24.382L7.92784 16.5L14.0722 8.61803L21 16.5Z" />
                    <path d="M14 0L0 16.1905V34H14V14.5714L7 8.09524L14 0Z" />
                    <path d="M30 0L44 16.1905V34H30V14.5714L37 8.09524L30 0Z" />
                </svg>
            </HoverCursor>
        </Link>

        {/* NAV */}
        <nav>
          <ul className="flex items-center gap-20 font-bold text-lg">
            {navItems.map((navItem) => (
              <li key={navItem.item}>
                <Link href={navItem.link}>
                  {/* Wrapped in HoverCursor for the bubble effect */}
                  <HoverCursor variant="hover">
                    <SplitText text={navItem.item} />
                  </HoverCursor>
                </Link>
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
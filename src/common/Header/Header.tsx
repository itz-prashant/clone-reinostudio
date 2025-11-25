"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import HoverCursor from "@/common/Cursor/HoverCursor";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";

const navItems = [
  { item: ".Home", link: "/" },
  { item: ".Services", link: "/Services" },
  { item: ".Contact", link: "/Contact" },
];

export default function Header() {
  const pathname = usePathname();

  const isLightPage =
    pathname?.toLowerCase().includes("contact") ||
    pathname?.toLowerCase().includes("services");

  const [open, setOpen] = useState(false);

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
            <svg
              width="44"
              height="34"
              viewBox="0 0 44 34"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M21 16.5L14.0722 24.382L7.92784 16.5L14.0722 8.61803L21 16.5Z" />
              <path d="M14 0L0 16.1905V34H14V14.5714L7 8.09524L14 0Z" />
              <path d="M30 0L44 16.1905V34H30V14.5714L37 8.09524L30 0Z" />
            </svg>
          </HoverCursor>
        </Link>

        {/* NAV (Desktop Only) */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-20 font-bold text-lg">
            {navItems.map((navItem) => (
              <li key={navItem.item}>
                <Link href={navItem.link}>
                  <HoverCursor variant="hover">
                    <SplitText text={navItem.item} />
                  </HoverCursor>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* HAMBURGER (Mobile Only) */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setOpen(!open)}
        >
          {open ? <IoClose /> : <RxHamburgerMenu />}
        </button>
      </div>

      {/* MOBILE DROPDOWN (White + Column Layout) */}
      {open && (
        <div
          className="
            absolute top-full left-0 w-full md:hidden
            bg-white text-black
            flex flex-col gap-6
            px-8 py-8
            font-bold text-xl
            transition-all duration-300
          "
        >
          {navItems.map((navItem) => (
            <Link
              key={navItem.item}
              href={navItem.link}
              onClick={() => setOpen(false)}
            >
              <HoverCursor variant="hover">
                <SplitText text={navItem.item} />
              </HoverCursor>
            </Link>
          ))}
        </div>
      )}
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

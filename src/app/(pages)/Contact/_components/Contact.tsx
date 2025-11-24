"use client";

import React, { useState, useEffect, useRef } from "react";
import HoverCursor from "@/common/Cursor/HoverCursor";
import gsap from "gsap";

const interests = [
  "Site from scratch", "App from scratch", "UX/UI design", "Branding",
  "Animation 2D", "Animation 3D", "Motion Graphics", "Illustration",
];

export default function Contact() {
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const containerRef = useRef<HTMLDivElement>(null); // Ref for GSAP scoping

  const toggleInterest = (interest: string) => {
    if (selectedInterests.includes(interest)) {
      setSelectedInterests(selectedInterests.filter((i) => i !== interest));
    } else {
      setSelectedInterests([...selectedInterests, interest]);
    }
  };

  // --- PAGE LOAD ANIMATION (Slide Up) ---
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".animate-up", // Target elements with this class
        { y: 100, opacity: 0 }, // Start state
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.1, // Delay between each element
          ease: "power3.out",
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="w-full bg-white text-black min-h-screen">
      
      <section className="max-w-[1400px] mx-auto  pt-10 pb-20">
          
        {/* --- HEADLINE --- */}
        <div className="mb-16 animate-up">
          <HoverCursor variant="big">
            <h1 className="text-[3.5rem] md:text-[7rem] font-bold leading-[1] tracking-tight text-black">
              Hey! Tell us all<br />
              the things
            </h1>
          </HoverCursor>
        </div>

        {/* --- ADDRESS & INFO --- */}
        <div className="mb-20 animate-up">
          <p className="text-base md:text-xl font-semibold mb-8 leading-[1.6] text-black">
            Avenida San Martin. 830, 102<br />
            Leblon - Rio de Janeiro
          </p>

          <div className="flex flex-col gap-4 text-base md:text-xl font-semibold">
            {/* Email */}
            <HoverCursor variant="hover">
              <a href="mailto:contact@reinostudio.com" className="flex items-center gap-4 w-fit group text-black">
                <div className="w-5 flex justify-center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <div className="h-4 w-[1.5px] bg-black"></div>
                <span>contact@reinostudio.com</span>
              </a>
            </HoverCursor>

            {/* Phone */}
            <HoverCursor variant="hover">
              <a href="tel:+5521984796999" className="flex items-center gap-4 w-fit group text-black">
                <div className="w-5 flex justify-center">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                </div>
                <div className="h-4 w-[1.5px] bg-black"></div>
                <span>+55 21 98479-6999</span>
              </a>
            </HoverCursor>
          </div>
        </div>

        {/* --- FORM SECTION --- */}
        <form className="w-full max-w-[900px] animate-up">
          
          <div className="mb-12">
            <p className="text-lg text-gray-400 mb-5 font-medium">I&apos;m interested in...</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {interests.map((item) => (
                <div key={item}>
                  <button
                    type="button"
                    onClick={() => toggleInterest(item)}
                    className={`w-full py-3 rounded-full border text-sm font-bold transition-all duration-300
                      ${selectedInterests.includes(item) 
                        ? "bg-black text-white border-black" 
                        : "bg-white text-black border-gray-300 hover:border-black"}`}
                  >
                    {item}
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-10 mb-16">
            <HoverCursor variant="text">
              <input type="text" placeholder="Your name" className="w-full py-3 border-b border-gray-200 text-lg outline-none placeholder:text-gray-300 text-black focus:border-black transition-colors bg-transparent"/>
            </HoverCursor>
            <HoverCursor variant="text">
              <input type="email" placeholder="Your email" className="w-full py-3 border-b border-gray-200 text-lg outline-none placeholder:text-gray-300 text-black focus:border-black transition-colors bg-transparent"/>
            </HoverCursor>
            <HoverCursor variant="text">
              <textarea rows={1} placeholder="Tell us about your project" className="w-full py-3 border-b border-gray-200 text-lg outline-none placeholder:text-gray-300 text-black focus:border-black transition-colors bg-transparent resize-none"/>
            </HoverCursor>
          </div>

          <HoverCursor variant="menu">
            <button type="submit" className="text-xl font-extrabold flex items-center gap-2 text-black">
              <span className="text-3xl leading-[0] mb-2">.</span> Send Request
            </button>
          </HoverCursor>

        </form>
      </section>
    </div>
  );
}
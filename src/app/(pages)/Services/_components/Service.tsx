"use client";

import React, { useEffect, useRef } from "react";
import HoverCursor from "@/common/Cursor/HoverCursor";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const collaborationSteps = [
  {
    id: 1,
    title: "Discovery + Strategy",
    description: "We dive deep into the project's universe to understand goals, audience, and context. We help define opportunities and translate them into clear design directions.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="black">
        <path d="M12 2L2 22H22L12 2Z" />
      </svg>
    )
  },
  {
    id: 2,
    title: "Branding",
    description: "We create identities that communicate essence and purpose in a memorable and consistent way. From the symbol to the tone of voice, we take care of every detail.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="black">
        <circle cx="12" cy="12" r="10" />
      </svg>
    )
  },
  {
    id: 3,
    title: "UX + UI",
    description: "We design functional and inspiring interfaces. Our vision is always to merge aesthetics and usability to deliver meaningful digital experiences.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="black">
        <rect x="2" y="2" width="9" height="9" />
        <rect x="13" y="2" width="9" height="9" />
        <rect x="2" y="13" width="9" height="9" />
        <rect x="13" y="13" width="9" height="9" />
      </svg>
    )
  },
  {
    id: 4,
    title: "Motion Design",
    description: "We bring ideas to life with animations, videos, and interactions that make communication more dynamic, engaging, and clear.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2V22" />
        <path d="M2 12H22" />
      </svg>
    )
  }
];

// Placeholder images - You should replace src with your actual image paths
const projects = [
  "/assets/Service_image/project2.jpg",
  "/assets/Service_image/project3.webp",
  "/assets/Service_image/project4.webp"
];

export default function Service() {
  const containerRef = useRef<HTMLDivElement>(null);

  // --- SCROLL ANIMATIONS ---
  useEffect(() => {
    const ctx = gsap.context(() => {
      
      // Animate elements as they scroll into view
      const elements = gsap.utils.toArray(".animate-scroll");
      
      elements.forEach((el: any) => {
        gsap.fromTo(
          el,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%", // Animation starts when element is 85% down the viewport
            },
          }
        );
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="w-full bg-white text-black">
      
      {/* --- 1. HERO SECTION --- */}
      <section className="max-w-[1400px] mx-auto pt-32 pb-20">
        <div className="text-center mb-24 animate-scroll">
          <HoverCursor variant="big">
            <h1 className="text-[5rem] md:text-[7.2rem] font-bold leading-[0.95] tracking-tight mx-auto">
              We are a design studio that loves to create together.
            </h1>
          </HoverCursor>
        </div>

        {/* Small text block */}
        <div className="max-w-[580px] text-lg md:text-2xl text-gray-900 leading-relaxed mb-20 animate-scroll">
          <HoverCursor variant="text">
            <p>
              At Reino, we believe the best ideas are born from collaboration. 
              That&apos;s why we work side by side with other creative agencies, acting as a 
              natural extension of their teams. We get into the flow, understand the culture, 
              and wear the project&apos;s jersey as if it were our own.
            </p>
          </HoverCursor>
        </div>
      </section>
                      {/* TEAM IMAGE */}
        <div className="w-fulloverflow-hidden  animate-scroll relative">
            
            <Image
              src="/assets/Service_image/team.jpg" 
              alt="Team Illustration" 
              width={900}
              height={600}
              className="w-full h-full object-cover"
            />

        </div>


      {/* --- 2. "PART OF YOUR TEAM" SECTION --- */}
      <section className="max-w-[1400px] mx-auto pt-32  mb-32 animate-scroll">
        <div >
            <HoverCursor variant="big">
                <h2 className="text-[5vw] md:text-[7rem] font-bold leading-[1] tracking-tight mb-10">
                    Part of your team,<br />
                    from start to finish
                </h2>
            </HoverCursor>
            <div className="max-w-2xl text-2xl text-gray-900 leading-relaxed">
                <p>
                    More than providers, we are partners. This means we take part in the entire process
                    — from strategic conception to final delivery — bringing our expertise in UX, UI, 
                    Motion Design, and Branding. Our main strength is flexibility: we adapt the depth 
                    and format of our contribution to match the needs of each project.
                </p>
            </div>
        </div>
      </section>


      {/* --- 3. HOW WE COLLABORATE (Diagram + List) --- */}
      <section className="max-w-[1400px] mx-auto mb-32">
        
        <div className="mb-20 animate-scroll flex items-center justify-end">
          <HoverCursor variant="big">
<h2 className="text-[5rem] pr-10 md:text-[7rem] font-bold leading-[0.9]  text-left">
                How we<br />collaborate
             </h2>
          </HoverCursor>
             
        </div>

        <div className="flex flex-col md:flex-row gap-20 items-start">
            
            {/* LEFT: Geometric Diagram */}
            <div className="w-full md:w-1/2 sticky top-32 animate-scroll">
                 <div className="w-full relative aspect-square border border-gray-200  flex items-center justify-center p-10">
                    {/* Custom SVG Diagram based on screenshot */}
                    <svg viewBox="0 0 100 100" className="w-full h-full text-black opacity-80" stroke="currentColor" strokeWidth="0.5" fill="none">
                        {/* Square */}
                        <rect x="10" y="10" width="80" height="80" />
                        {/* Circle */}
                        <circle cx="50" cy="50" r="40" />
                        {/* Triangle */}
                        <path d="M50 10 L90 90 H10 Z" />
                        {/* Cross Lines */}
                        <line x1="50" y1="10" x2="50" y2="90" />
                        <line x1="10" y1="50" x2="90" y2="50" />
                    </svg>
                 </div>
            </div>

            {/* RIGHT: List */}
            <div className="w-full md:w-1/2 flex flex-col gap-16">
                {collaborationSteps.map((step) => (
                    <div key={step.id} className="animate-scroll">
                        <HoverCursor variant="hover">
                            <div className="flex items-start gap-6">
                                <div className="mt-1">
                                    {step.icon}
                                </div>
                                <div>
                                    <h3 className="text-2xl font-extrabold mb-3">{step.title}</h3>
                                    <p className="text-gray-900 leading-relaxed text-xl">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        </HoverCursor>
                    </div>
                ))}
            </div>

        </div>
      </section>


      {/* --- 4. WHY WORK WITH US --- */}
      <section className="max-w-[1400px] mx-auto  mb-32 animate-scroll">
        <HoverCursor variant="big">
          <h2 className="text-[5rem] md:text-[7rem] font-bold leading-[1] tracking-tight mb-12">
            Why work with us
        </h2>
        </HoverCursor>
        <div className="flex flex-col md:flex-row gap-10 text-lg text-gray-900 leading-relaxed">
            <div className="md:w-1/2 text-2xl">
                <p>
                    Our goal is to simplify, add value, and amplify. Every delivery is born from a collaborative process, with the sensitivity to understand the agency&apos;s needs and the responsibility to deliver with quality, consistency, and on time.
                </p>
            </div>
            <div className="md:w-1/2 text-2xl">
                <p>
                    For us, working with other creative teams is not just about execution — it&apos;s about building together, as part of the same story.
                </p>
            </div>
        </div>
      </section>


      {/* --- 5. PROJECTS SHOWCASE --- */}
      <section className="w-full mb-32">
        
        <div className="max-w-[1400px] mx-auto mb-20 text-center animate-scroll">
            <HoverCursor variant="big">
                <h2 className="text-[5rem] md:text-[8rem] font-bold leading-[0.95] tracking-tight">
                    See how we&apos;ve helped<br />
                    other brands go further
                </h2>
            </HoverCursor>
        </div>

                {/* Images Stack */}
        <div className="flex flex-col gap-10 max-w-[1400px] mx-auto">
            {projects.map((img, index) => (
                <div key={index} className="w-full h-[50vh] md:h-[80vh] relative animate-scroll overflow-hidden">
                    
                    {/* THIS IS THE IMAGE CODE */}
                    <Image
                      src={img} 
                      alt="Project" 
                      width={600}
                      height={600}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    />

                </div>
            ))}
        </div>

        {/* View All Button */}
        <div className="flex justify-center pt-20 animate-scroll">
          
                <button className="bg-black text-white px-8 py-4 rounded-full font-bold text-sm flex items-center gap-3">
                    View All Work 
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                </button>

        </div>

      </section>

    </div>
  );
}
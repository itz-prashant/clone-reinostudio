"use client"
import { useCursor } from "../Cursor/CursorProvider";

const Footer = () => {
    const { setCursor } = useCursor();
  return (
    <div className="bg-black h-[100vh] text-white flex items-center justify-center gap-20">
      <div className="flex w-full max-w-[1400px] mx-auto items-start">
        <div className="w-[65%] flex flex-col">
          <h1 className="text-[14rem] font-extrabold"
            onMouseEnter={() => setCursor("big")}
            onMouseLeave={() => setCursor("default")}
          >SAY HI!</h1>
          <div className="flex flex-col"
           onMouseEnter={() => setCursor("menu")}
          onMouseLeave={() => setCursor("default")}
          >
              <p className="text-xl font-extrabold">Tell us about your project</p>
              <p className="text-lg">Let’s collaborate and make great stuff.</p>
          </div>
        </div>
        <div className="w-[30%] flex items-center gap-4 mt-10"
                   onMouseEnter={() => setCursor("hover")}
            onMouseLeave={() => setCursor("default")}>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
            </svg>
          </div>
          <div className="w-[1px] h-10 bg-white"></div>
          <div className="text-lg">
            +91 9999999999
          </div>
        </div>
      </div>
    </div>
  )
}
export default Footer

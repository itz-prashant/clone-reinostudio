import { useCursor } from "@/common/Cursor/CursorProvider";
import Video from "./Video";
import { IoLogoInstagram } from "react-icons/io5";
import { RiFacebookBoxLine } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";

const Home = () => {
  const { setCursor } = useCursor();

  return (
    <div className="overflow-hidden">
      <section className="bg-[#2b2f31] min-h-[100vh] w-full flex items-center relative">
        <div className="max-w-[1400px] mx-auto w-full">
          <h1
            className="absolute sm:top-20 top-0 text-white font-bold leading-[1.1] text-[3rem] sm:text-[4rem] md:text-[5rem] lg:text-[6rem] xl:text-[7.5rem] px-5 md:text-right text-center"
            onMouseEnter={() => setCursor("big")}
            onMouseLeave={() => setCursor("default")}
          >
            We craft {/* INLINE VIDEO FIX */}
            <span className="md:inline-block hidden align-middle h-[7vw] w-[15vw] rounded-full overflow-hidden -mt-[1rem] ">
              <Video />
            </span>{" "}
            identity
            <br />
            experience and presence.
          </h1>
          <span className="inline-block md:hidden align-middle min-h-[7vw] min-w-[15vw] rounded overflow-hidden px-5">
              <Video />
            </span>{" "}
          <div className="md:w-[90%] w-full h-[550px] absolute ">
            <div className="absolute h-[550px] w-[50%] hidden md:block">
              <div className="text-white flex items-center justify-bet3een py-5">
                <div
                  className="cursor-pointer"
                  onMouseEnter={() => setCursor("hidden")}
                  onMouseLeave={() => setCursor("default")}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-10"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z"
                    />
                  </svg>
                </div>
                <div className="flex items-center justify-center font-semibold gap-20">
                  <span>GEN</span>
                  <span>BRANDING BRAND GUIDE</span>
                </div>
              </div>
              <div className="w-full h-full absolute">
                <Video />
              </div>
            </div>
            <div className="md:w-[43%] w-full right-0 absolute md:bottom-36 mt-10">
              <p
                className="md:text-xl text-lg lg:text-2xl text-right text-white px-5"
                onMouseEnter={() => setCursor("menu")}
                onMouseLeave={() => setCursor("default")}
              >
                We believe a brand is a living entity—one complete with its own
                values, personality, and story. We are inquisitive and
                open-minded, ensuring that creativity crowds out ego from every
                corner of our work. We bring this singular perspective to every
                brand story we help tell, enabling you to achieve not just
                short-term success, but lasting, far-reaching influence.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white h-[140vh] md:h-[120vh]">
        <div className="md:w-[40%] w-full right-0 absolute mt-5">
          <div className="flex items-center justify-center gap-12 shrink-0">
            <IoLogoInstagram
              size={36}
              onMouseEnter={() => setCursor("hover")}
              onMouseLeave={() => setCursor("default")}
            />
            <RiFacebookBoxLine
              size={36}
              onMouseEnter={() => setCursor("hover")}
              onMouseLeave={() => setCursor("default")}
            />
            <FaTwitter
              size={36}
              onMouseEnter={() => setCursor("hover")}
              onMouseLeave={() => setCursor("default")}
            />
            <CiLinkedin
              size={36}
              onMouseEnter={() => setCursor("hover")}
              onMouseLeave={() => setCursor("default")}
            />
          </div>
        </div>
        <div className="w-full">
          <div className="relative w-full h-full max-w-[1400px] mx-auto">
            <div className="absolute md:top-72 top-24 px-5">
              <div>
                <p
                  className="leading-[1.1] text-[2rem] md:text-[3.5rem] text-[#2b2f31] lg:text-[5rem] font-bold md:mb-18 mb-8"
                  onMouseEnter={() => setCursor("big")}
                  onMouseLeave={() => setCursor("default")}
                >
                  We blend technology and art to create innovative designs that
                  open up new possibilities.
                </p>
              </div>
              <div className="flex flex-col md:flex-row gap-10 text-lg text-black">
                <div className="md:w-1/2 md:text-xl text-lg lg:text2xl">
                  <div className="flex flex-col gap-5">
                    <p                 onMouseEnter={() => setCursor("menu")}
                onMouseLeave={() => setCursor("default")}>
                      At Reino Studio, we blend technology and art to create
                      innovative designs that open up new possibilities. We
                      understand that sensitivity and technique go hand in hand,
                      working together to benefit your company and customers.
                    </p>
                    <p                onMouseEnter={() => setCursor("menu")}
                onMouseLeave={() => setCursor("default")}>
                      Specializing in digital platforms, we also work across
                      various mediums. From planning to development, we cover
                      everything from visual identity to interactive
                      installations. What sets us apart is our personalized
                      approach.
                    </p>
                  </div>
                </div>
                <div className="md:w-1/2 md:text-xl text:lg lg:text2xl">
                  <p                 onMouseEnter={() => setCursor("menu")}
                onMouseLeave={() => setCursor("default")}>
                    Our owners are actively involved throughout the design process, ensuring a passionate and results-driven experience. With our dedicated customer service, close collaboration, and streamlined process, we make things simple and efficient, without unnecessary bureaucracy.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

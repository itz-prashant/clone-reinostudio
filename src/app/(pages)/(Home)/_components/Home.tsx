import { useCursor } from "@/common/Cursor/CursorProvider";
import Video from "./Video";

const Home = () => {
  const { setCursor } = useCursor();

  return (
    <div className="overflow-hidden">
      <section className="bg-[#2b2f31] h-[100vh] w-full flex items-center relative">
        <div className="max-w-[1400px] mx-auto w-full">
          <h1
            className="absolute top-20 text-white font-bold leading-[1.1]
                     text-[5rem] md:text-[7rem] lg:text-[7.6rem] text-right"
            onMouseEnter={() => setCursor("big")}
            onMouseLeave={() => setCursor("default")}
          >
            We craft {/* INLINE VIDEO FIX */}
            <span className="inline-block align-middle h-[7vw] w-[15vw] rounded-full overflow-hidden -mt-[1rem]">
              <Video />
            </span>{" "}
            identity
            <br />
            experience and presence.
          </h1>
          <div className="w-full h-[550px] absolute">
            <div className="absolute h-[550px] w-[50%]">
              <div className="text-white flex items-center justify-between py-5">
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
            <div className="w-[43%] right-28 absolute top-[38%]">
              <p className="text-2xl max-w-2xl text-right text-white"
              onMouseEnter={() => setCursor("menu")}
            onMouseLeave={() => setCursor("default")}
              >
              We believe a brand is a living entity—one complete
              with its own values, personality, and story. We are inquisitive
              and open-minded, ensuring that creativity crowds out ego from
              every corner of our work. We bring this singular perspective to
              every brand story we help tell, enabling you to achieve not just
              short-term success, but lasting, far-reaching influence.
            </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white h-[50vh]">
        <div className="w-[40%] h-10 bg-red-300 right-0 absolute">
            <div className="flex items-center">

            </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

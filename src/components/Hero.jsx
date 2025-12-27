import styles from "../style";
import Navbar from "./Navbar";
import { discount, robot } from "../assets";
import GetStarted from "./GetStarted";

const Hero = () => {
  return (
<section id="home" className={`flex md:flex-row flex-col pt-36 ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2 sm:mx-2 mx-0 mt-8">
          <p className={`${styles.paragraph} text-xs sm:text-sm text-white text-center`}>
            MSME Registered | ISO Certified | Incubated at JIET | Trusted by 100+ Clients
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            We Build<br className="sm:block hidden" />{" "}
            <span className="text-gradient">the Future</span>{" "}
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted />
          </div>
        </div>

        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
          of Businesses 
          <br />
          with AI
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          AI-powered software, intelligent automation, and AI agents that help businesses increase revenue, reduce operational costs, and scale faster.
        </p>
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
<img src={robot} alt="billing" className="w-[100%] h-[80%] relative z-[5]" />

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section>
  );
};

export default Hero;

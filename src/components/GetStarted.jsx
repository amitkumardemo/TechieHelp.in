import styles from "../style";
import { arrowUp } from "../assets";

const GetStarted = () => (
  <div className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}>
    <div className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}>
      <div className={`${styles.flexStart} flex-row`}>
        <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
          <span className="text-gradient">Get</span>
        </p>
        <img src={arrowUp} alt="arrow-up" className="w-[23px] h-[23px] object-contain" />
      </div>
      
      <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
  <a
    href="https://wa.me/917673825079?text=Hello%20Team%20TechieHelp%2C%20I%20am%20interested%20in%20getting%20started%20with%20your%20services."
    target="_blank"
    rel="noopener noreferrer"
    className="text-gradient"
  >
    Started
  </a>
</p>

    </div>
  </div>
);

export default GetStarted;

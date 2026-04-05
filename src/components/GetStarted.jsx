import styles from "../style";
import { arrowUp } from "../assets";

const GetStarted = () => (
  <div className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}>
    <div className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}>
        <div className={`${styles.flexStart} flex-row`}>
         <p className="font-poppins font-medium text-[16px] leading-[23.4px]">
           <span className="text-gradient">Book</span>
         </p>
         <img src={arrowUp} alt="arrow-up" className="w-[23px] h-[23px] object-contain" />
       </div>
       
       <p className="font-poppins font-medium text-[16px] leading-[23.4px]">
   <a
     href="https://wa.me/917673825079?text=Hello%20TechieHelp%2C%20I%20want%20to%20book%20a%20free%20demo%20of%20your%20AI%20systems%20for%20my%20business."
     target="_blank"
     rel="noopener noreferrer"
     className="text-gradient"
   >
     Free Demo
   </a>
 </p>

    </div>
  </div>
);

export default GetStarted;

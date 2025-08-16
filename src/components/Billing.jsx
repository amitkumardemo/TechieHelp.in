import { apple, cards, google } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const Billing = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
  <img 
    src={cards} 
    alt="billing" 
    className="w-[100%] h-[80%] relative z-[4]" 
  />

  {/* gradient start */}
  <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
  <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
  {/* gradient end */}
</div>


    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Delivering AI <br className="sm:block hidden" /> Solutions That Work
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        From intelligent automation and predictive analytics to custom AI-powered applications, TechieHelp delivers end-to-end AI solutions with precision, innovation, and real-time collaboration.
      </p>
      <br />
      <Button/>
      


      
    </div>
  </section>
);

export default Billing;

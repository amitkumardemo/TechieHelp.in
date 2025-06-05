import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Seamlessly Manage Your <br className="sm:block hidden" /> Projects & Operations
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Simplify your workflows with our efficient management tools and expert support, designed to help your business run smoothly and grow faster.
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;

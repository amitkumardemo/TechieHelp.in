import React from 'react';
import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
  <div className={layout.sectionInfo}>
    <h2 className={styles.heading2}>
      Smarter Operations, <br className="sm:block hidden" /> Powered by AI
    </h2>
    <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Transform your business with AI-driven automation, predictive insights, 
      and real-time decision-making. From streamlining workflows to cutting costs, 
      our intelligent solutions keep your operations running faster, smoother, 
      and more efficiently — so you can focus on growth, not the grind.
    </p>

    <Button styles={`mt-10`} />
  </div>

  <div className={layout.sectionImg}>
    <img src={card} alt="ai-operations" className="w-[100%] h-[90%]" />
  </div>
</section>

);

export default CardDeal;

import React from 'react';
import { bill } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const WhoWeAre = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Who We Are <br className="sm:block hidden" /> Driving the <span className="text-gradient">AI Revolution</span>
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        At <span className="font-semibold text-white">TechieHelp</span>, we are an 
        <span className="text-gradient font-semibold"> AI-first software development company</span> 
        dedicated to transforming how businesses operate.
        We deliver intelligent, data-driven solutions and automation tools that help you:
      </p>

      <ul className="list-disc list-inside mt-4 space-y-2 text-white text-sm sm:text-base">
        <li><span className="text-gradient font-semibold">Automate workflows</span> and reduce repetitive tasks.</li>
        <li>Use <span className="font-semibold">AI-powered insights</span> for better decision-making.</li>
        <li>Boost efficiency, cut costs, and scale faster.</li>
        <li>Adopt future-ready solutions that evolve with your business.</li>
      </ul>

      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Founded by <span className="font-semibold text-white">Amit Kumar</span> 
        and <span className="font-semibold text-white">Yashasvi Bhati</span>, 
        we blend <span className="text-gradient">cutting-edge AI</span> with deep business expertise 
        to deliver solutions that are innovative, impactful, and built to last.
      </p>

      <Button styles={`mt-10`} text="Learn More" />
    </div>

    <div className={layout.sectionImg}>
      <img src={bill} alt="about-techiehelp" className="w-[100%] h-[90%]" />
    </div>
  </section>
);

export default WhoWeAre;

import React from "react";

const Button = ({ styles }) => (
  <a
    href="https://wa.me/917673825079?text=Hello%20Team%20TechieHelp%2C%20I%20am%20interested%20in%20getting%20started%20with%20your%20services."
    target="_blank"
    rel="noopener noreferrer"
  >
    <button
      type="button"
      className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}
    >
      Get Started
    </button>
  </a>
);


export default Button;

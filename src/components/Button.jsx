import React from "react";

const Button = ({ styles, text }) => (
  <a
    href="https://wa.me/917673825079?text=Hello%20TechieHelp%2C%20I%20want%20to%20book%20a%20free%20demo%20of%20your%20AI%20systems%20for%20my%20business."
    target="_blank"
    rel="noopener noreferrer"
  >
    <button
      type="button"
      className={`py-4 px-10 font-poppins font-black text-[12px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles} uppercase tracking-[3px] hover:scale-105 transition-all shadow-xl shadow-blue-500/20`}
    >
      {text || "Book Free Demo"}
    </button>
  </a>
);


export default Button;

import React from "react";

const Button = ({ styles, text }) => (
  <a
    href="https://calendar.app.google/XY3C9NoNJuDAtbZp9"
    target="_blank"
    rel="noopener noreferrer"
  >
    <button
      type="button"
      className={`py-4 px-10 font-poppins font-black text-[12px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles} uppercase tracking-[3px] hover:scale-105 transition-all shadow-xl shadow-blue-500/20`}
    >
      {text || "Book Your Free 1:1 Strategy Call"}
    </button>
  </a>
);


export default Button;

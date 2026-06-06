import { useState, useEffect } from "react";
import { close, menu, logo } from "../assets";
import { useLocation } from "react-router-dom";
import styles from "../style";
import { navLinks } from "../constants";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const { user, logout } = useAuth();
  const [toggle, setToggle] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [timeoutId, setTimeoutId] = useState(null);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  // Close dropdowns/menus on escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setToggle(false);
        setDropdownOpen(null);
        setMobileDropdownOpen(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 w-full flex items-center z-50 transition-all duration-300 ${
        scrolled
          ? "py-2 bg-black/85 backdrop-blur-lg shadow-lg border-b border-white/5"
          : "py-4 bg-transparent"
      } ${styles.paddingX}`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link to="/" onClick={() => setToggle(false)} className="flex items-center" aria-label="TechieHelp Home">
          <img src={logo} alt="TechieHelp Logo" className="w-[160px] sm:w-[200px] h-auto object-contain" />
        </Link>
        
        {/* Desktop Menu */}
        <ul className="list-none sm:flex hidden justify-end items-center flex-1">
          {navLinks.map((nav, index) => (
            <li
              key={nav.id}
              className={`relative font-poppins font-normal cursor-pointer text-[16px] transition duration-300 ease-in-out transform hover:text-secondary hover:scale-105 ${
                index === navLinks.length - 1 ? "mr-0" : "mr-10"
              } text-white drop-shadow-md ${location.pathname === nav.path ? "text-secondary font-semibold" : ""}`}
            >
              {nav.subLinks ? (
                <div
                  className="relative inline-block"
                  onMouseEnter={() => {
                    if (timeoutId) clearTimeout(timeoutId);
                    setDropdownOpen(nav.id);
                  }}
                  onMouseLeave={() => {
                    const id = setTimeout(() => setDropdownOpen(null), 250);
                    setTimeoutId(id);
                  }}
                >
                  <button
                    className="flex items-center cursor-pointer select-none focus:outline-none focus:text-secondary bg-transparent border-none text-white text-[16px]"
                    aria-haspopup="true"
                    aria-expanded={dropdownOpen === nav.id}
                    onClick={(e) => {
                      e.preventDefault();
                      setDropdownOpen(dropdownOpen === nav.id ? null : nav.id);
                    }}
                  >
                    {nav.title}
                    <svg
                      className={`ml-1 w-4 h-4 fill-current transition-transform duration-200 ${dropdownOpen === nav.id ? 'rotate-185' : ''}`}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M5.516 7.548l4.484 4.484 4.484-4.484L15.484 9l-5.484 5.484L4.516 9z" />
                    </svg>
                  </button>
                  <AnimatePresence>
                    {dropdownOpen === nav.id && (
                      <motion.ul
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full left-0 mt-2 w-52 bg-black/95 backdrop-blur-xl border border-gray-800 rounded-xl shadow-2xl py-2 z-50 text-white"
                        onClick={(e) => e.stopPropagation()}
                      >
                        {nav.subLinks.map((subLink) => (
                          <li
                            key={subLink.id}
                            className="px-4 py-2.5 hover:bg-white/10 hover:text-secondary cursor-pointer transition-colors duration-200"
                          >
                            <Link to={subLink.path} className="block w-full text-sm font-medium" onClick={() => { setToggle(false); setDropdownOpen(null); }}>
                              {subLink.title}
                            </Link>
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link to={nav.path} className="focus:outline-none focus:text-secondary" onClick={() => setToggle(false)}>
                  {nav.title}
                </Link>
              )}
            </li>
          ))}
          {!user ? (
            <li className="font-poppins font-normal cursor-pointer text-[16px] text-white drop-shadow-md mr-10 ml-4 hover:text-secondary transition-colors duration-200">
              <Link to="/login" className="focus:outline-none focus:text-secondary" onClick={() => setToggle(false)}>
                Login
              </Link>
            </li>
          ) : (
            <li className="mr-10 relative group ml-6">
              <button
                className="focus:outline-none focus:ring-2 focus:ring-secondary rounded-full overflow-hidden"
                aria-label="User Profile Menu"
                onClick={() => { setToggle(false); window.location.href = "/profile"; }}
              >
                <img
                  src={user.photoURL || "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMjAiIGZpbGw9IiM2MzY2RjEiLz4KPHBhdGggZD0iTTIwIDIwQzIyLjc2MTQgMjAgMjUgMTcuNzYxNCAyNSAxNUMyNSAxMi4yMzg2IDIyLjc2MTQgMTAgMjAgMTBDMTcuMjM4NiAxMCAxNSAxMi4yMzg2IDE1IDE1QzE1IDE3Ljc2MTQgMTcuNzYxNCAyMCAyMFoiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo="}
                  alt="profile"
                  className="w-9 h-9 rounded-full cursor-pointer object-cover border border-white/20"
                />
              </button>
              <ul className="absolute right-0 mt-2 w-32 bg-black/95 backdrop-blur-xl border border-gray-800 rounded-xl shadow-2xl py-2 opacity-0 group-hover:opacity-100 transition-opacity text-white z-50">
                <li
                  className="px-4 py-2 cursor-pointer hover:bg-white/10 hover:text-secondary text-sm font-semibold transition-colors duration-200"
                  onClick={handleLogout}
                >
                  Logout
                </li>
              </ul>
            </li>
          )}
          {location.pathname === "/careers/training-internships" && (
            <li className="ml-6 sm:block hidden">
              <a
                href="https://forms.gle/N8kk845Lbfds6Pwj6"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-xl shadow-lg hover:shadow-blue-500/30 hover:scale-105 active:scale-95 transition-all whitespace-nowrap block"
              >
                Apply Now
              </a>
            </li>
          )}
        </ul>

        {/* Mobile Menu Toggle */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <button
            onClick={() => setToggle((prev) => !prev)}
            aria-label={toggle ? "Close menu" : "Open menu"}
            aria-expanded={toggle}
            className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-colors"
          >
            <img
              src={toggle ? close : menu}
              alt="menu"
              className="w-[24px] h-[24px] object-contain"
            />
          </button>

          {/* Mobile Dropdown Panel */}
          <AnimatePresence>
            {toggle && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: -20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -20 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="p-6 bg-black/95 backdrop-blur-3xl border border-gray-800 absolute top-20 right-0 mx-4 my-2 min-w-[200px] rounded-2xl shadow-2xl z-50"
              >
                <ul className="list-none flex flex-col justify-end items-start flex-1">
                  {navLinks.map((nav, index) => (
                    <li
                      key={nav.id}
                      className={`font-poppins font-medium cursor-pointer text-[16px] w-full ${
                        index === navLinks.length - 1 ? "mb-0" : "mb-4"
                      } text-white drop-shadow-md`}
                    >
                      {nav.subLinks ? (
                        <>
                          <button
                            className="flex items-center justify-between w-full cursor-pointer text-left bg-transparent border-none text-white font-medium text-[16px] focus:outline-none"
                            onClick={() => setMobileDropdownOpen(mobileDropdownOpen === nav.id ? null : nav.id)}
                            aria-expanded={mobileDropdownOpen === nav.id}
                          >
                            {nav.title}
                            <svg
                              className={`ml-1 w-4 h-4 fill-current transition-transform duration-200 ${mobileDropdownOpen === nav.id ? 'rotate-180' : ''}`}
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                            >
                              <path d="M5.516 7.548l4.484 4.484 4.484-4.484L15.484 9l-5.484 5.484L4.516 9z" />
                            </svg>
                          </button>
                          <AnimatePresence>
                            {mobileDropdownOpen === nav.id && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                className="mt-2 ml-4 space-y-2 border-l border-gray-800 pl-3 overflow-hidden"
                              >
                                <ul>
                                  {nav.subLinks.map((subLink) => (
                                    <li key={subLink.id} className="mb-2">
                                      <Link
                                        to={subLink.path}
                                        className="text-gray-400 hover:text-secondary text-sm block py-1"
                                        onClick={() => { setToggle(false); setMobileDropdownOpen(null); }}
                                      >
                                        {subLink.title}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </>
                      ) : (
                        <Link
                          to={nav.path}
                          className="block w-full"
                          onClick={() => setToggle(false)}
                        >
                          {nav.title}
                        </Link>
                      )}
                    </li>
                  ))}
                  {!user ? (
                    <li className="font-poppins font-normal cursor-pointer text-[16px] text-white drop-shadow-md mb-4 mt-4 pt-4 border-t border-gray-800 w-full">
                      <Link to="/login" className="block w-full" onClick={() => setToggle(false)}>
                        Login
                      </Link>
                    </li>
                  ) : (
                    <>
                      <li className="font-poppins font-normal cursor-pointer text-[16px] text-white drop-shadow-md mb-4 mt-4 pt-4 border-t border-gray-800 w-full">
                        <Link to="/profile" className="block w-full" onClick={() => setToggle(false)}>
                          Profile
                        </Link>
                      </li>
                      <li
                        className="font-poppins font-normal cursor-pointer text-[16px] text-white drop-shadow-md w-full hover:text-red-400 transition-colors"
                        onClick={() => {
                          setToggle(false);
                          handleLogout();
                        }}
                      >
                        Logout
                      </li>
                    </>
                  )}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

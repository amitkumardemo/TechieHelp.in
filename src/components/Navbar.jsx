
import { useState } from "react";
import { close, menu, logo } from "../assets";
import { useLocation } from "react-router-dom";
import styles from "../style";
import { navLinks } from "../constants";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const Navbar = () => {
  const { user, logout } = useAuth();
  const [toggle, setToggle] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [timeoutId, setTimeoutId] = useState(null);
  const location = useLocation();

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
<nav
      className={`${styles.paddingX} fixed top-0 left-0 right-0 w-screen flex items-center py-1 z-20 bg-black bg-opacity-50 backdrop-blur-md`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
<img src={logo} alt="logo" width="220" height="300" className="w-[200px] h-[80px]" />
        <ul className="list-none sm:flex hidden justify-end items-center flex-1">
          {navLinks.map((nav, index) => (
            <li
              key={nav.id}
              className={`relative font-poppins font-normal cursor-pointer text-[16px] transition duration-300 ease-in-out transform hover:text-secondary hover:scale-110 ${
                index === navLinks.length - 1 ? "mr-0" : "mr-10"
              } text-white drop-shadow-md ${location.pathname === nav.path ? "text-secondary" : ""}`}
            >
              {nav.subLinks ? (
                <div
                  className="relative inline-block"
                  onMouseEnter={() => {
                    if (timeoutId) clearTimeout(timeoutId);
                    setDropdownOpen(nav.id);
                  }}
                  onMouseLeave={() => {
                    const id = setTimeout(() => setDropdownOpen(null), 200);
                    setTimeoutId(id);
                  }}
                >
                  <span
                    className="flex items-center cursor-pointer select-none"
                    onClick={(e) => {
                      e.preventDefault();
                      setDropdownOpen(dropdownOpen === nav.id ? null : nav.id);
                    }}
                  >
                    {nav.title}
                    <svg
                      className="ml-1 w-4 h-4 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M5.516 7.548l4.484 4.484 4.484-4.484L15.484 9l-5.484 5.484L4.516 9z" />
                    </svg>
                  </span>
                  <ul
                    className={`absolute top-full left-0 mt-2 w-48 bg-black rounded-md shadow-lg py-2 z-50 text-white ${
                      dropdownOpen === nav.id ? "block" : "hidden"
                    }`}
                    onClick={(e) => e.stopPropagation()}
                  >
                    {nav.subLinks.map((subLink) => (
                      <li
                        key={subLink.id}
                        className="px-4 py-2 hover:bg-gray-700 cursor-pointer"
                      >
                        <Link to={subLink.path} onClick={() => { setToggle(false); setDropdownOpen(null); }}>
                          {subLink.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <Link to={nav.path} onClick={() => setToggle(false)}>
                  {nav.title}
                </Link>
              )}
            </li>
          ))}
          {!user ? (
            <li className="font-poppins font-normal cursor-pointer text-[16px] text-white drop-shadow-md mr-10 ml-4">
              <Link to="/login" onClick={() => setToggle(false)}>
                Login
              </Link>
            </li>
          ) : (
            <>
          <li className="mr-10 relative group ml-6">
            <img
              src={user.photoURL || "/default-profile.png"}
              alt="profile"
              className="w-10 h-10 rounded-full cursor-pointer object-cover"
              onClick={() => setToggle(false)}
              onKeyDown={() => setToggle(false)}
              role="button"
              tabIndex={0}
              onClickCapture={() => window.location.href = "/profile"}
            />
            <ul className="absolute right-0 mt-2 w-32 bg-black rounded-md shadow-lg py-2 opacity-0 group-hover:opacity-100 transition-opacity text-white z-50">
              <li
                className="px-4 py-2 cursor-pointer hover:bg-gray-700"
                onClick={async () => {
                  try {
                    await logout();
                  } catch (error) {
                    console.error("Logout error:", error);
                  }
                }}
              >
                Logout
              </li>
            </ul>
          </li>
            </>
          )}
        </ul>

          <div className="sm:hidden flex flex-1 justify-end items-center">
            <img
              src={toggle ? close : menu}
              alt="menu"
              className="w-[28px] h-[28px] object-contain cursor-pointer"
              onClick={() => setToggle((prev) => !prev)}
            />

            <div
              className={`${
                !toggle ? "hidden" : "flex"
              } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
            >
              <ul className="list-none flex flex-col justify-end items-start flex-1">
                {navLinks.map((nav, index) => (
                  <li
                    key={nav.id}
                    className={`font-poppins font-medium cursor-pointer text-[16px] ${
                      index === navLinks.length - 1 ? "mb-0" : "mb-4"
                    } text-white drop-shadow-md`}
                  >
                    {nav.subLinks ? (
                      <>
                        <span className="flex items-center justify-between w-full">
                          {nav.title}
                          <svg
                            className="ml-1 w-4 h-4 fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                          >
                            <path d="M5.516 7.548l4.484 4.484 4.484-4.484L15.484 9l-5.484 5.484L4.516 9z" />
                          </svg>
                        </span>
                        <ul className="mt-2 ml-4">
                          {nav.subLinks.map((subLink) => (
                            <li key={subLink.id} className="mb-2">
                              <Link to={subLink.path} onClick={() => setToggle(false)}>
                                {subLink.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </>
                    ) : (
                      <Link to={nav.path} onClick={() => setToggle(false)}>
                        {nav.title}
                      </Link>
                    )}
                  </li>
                ))}
                {!user ? (
                  <>
                    <li className="font-poppins font-normal cursor-pointer text-[16px] text-white drop-shadow-md mb-4">
                      <Link to="/login" onClick={() => setToggle(false)}>
                        Login
                      </Link>
                    </li>
                  </>
                ) : (
                  <>
                    <li className="font-poppins font-normal cursor-pointer text-[16px] text-white drop-shadow-md mb-4">
                      <Link to="/profile" onClick={() => setToggle(false)}>
                        Profile
                      </Link>
                    </li>
                    <li
                      className="font-poppins font-normal cursor-pointer text-[16px] text-white drop-shadow-md"
                      onClick={handleLogout}
                    >
                      Logout
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>
      </div>
    </nav>
  );
};

export default Navbar;


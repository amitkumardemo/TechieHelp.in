import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll instantly to top on route change so the new page fades in from the top
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto"
    });
  }, [pathname]);

  return null;
};

export default ScrollToTop;

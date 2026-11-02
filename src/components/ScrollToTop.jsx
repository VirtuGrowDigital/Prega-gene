
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Scroll to the requested section when a hash is present.
      const id = decodeURIComponent(hash.substring(1));

      const scrollToSection = () => {
        const element = document.getElementById(id);

        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        } else {
          window.scrollTo({ top: 0, behavior: "instant" });
        }
      };

      // Wait for the destination page to render.
      requestAnimationFrame(() => {
        requestAnimationFrame(scrollToSection);
      });
    } else {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "instant",
      });
    }
  }, [pathname, hash]);

  return null;
}

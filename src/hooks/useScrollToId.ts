import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function useScrollToId() {
  const { hash } = useLocation();
  return useEffect(() => {
    if (hash) {
      const anchor = document.querySelector(hash);
      const anchorWrap = document.querySelector(hash + "-wrap");
      console.log("anchor", hash, anchor);
      if (anchor) {
        anchor.scrollIntoView({ behavior: "smooth" });
        anchorWrap?.classList.add("animation-active");
      }
    }
  }, []);
}

import { useEffect } from "react";

export const useBgBlue = () => {
  useEffect(() => {
    document.body.style.backgroundColor = "lightblue";

    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);
}
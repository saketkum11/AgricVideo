import { useEffect } from "react";

const useRefresh = (fn, time) => {
  useEffect(() => {
    const timeOut = setTimeout(() => {
      fn();
    }, time);
    return () => {
      clearTimeout(timeOut);
    };
  }, [time, fn]);
};
export { useRefresh };

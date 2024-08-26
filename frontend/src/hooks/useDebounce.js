import { useEffect, useState } from "react";

const useDebounce = (fn, value, time) => {
  const [data, setData] = useState(value);
  useEffect(() => {
    let debounceData = [];
    let timer = setTimeout(() => {
      debounceData = fn();
      setData(debounceData);
    }, time);
    return () => {
      clearTimeout(timer);
    };
  }, [fn, time]);
  return { data };
};
export { useDebounce };

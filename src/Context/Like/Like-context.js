import { createContext, useContext } from "react";

const LikeContext = createContext();
const useLike = () => useContext(LikeContext);

const LikeProvider = ({ children }) => {
  return (
    <LikeContext.Provider value={{ items: 9 }}>{children}</LikeContext.Provider>
  );
};

export { useLike, LikeProvider };

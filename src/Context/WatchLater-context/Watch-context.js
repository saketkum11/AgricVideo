import { createContext, useContext } from "react";
const WatchContext = createContext();
const useWatch = () => useContext(WatchContext);
const WatchProvider = ({ children }) => {
  return (
    <WatchContext.Provider value={{ items: 9 }}>
      {children}
    </WatchContext.Provider>
  );
};

export { useWatch, WatchProvider };

/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect } from "react";

const HistoryContext = createContext({});
const HistoryProvider = ({ children }) => {
  const value = {};
  useEffect(() => {
    const getWatcherLaterlist = async () => {};
    getWatcherLaterlist();
  }, []);
  return (
    <HistoryContext.Provider value={value}>{children}</HistoryContext.Provider>
  );
};

const useHistory = () => useContext(HistoryContext);
export { HistoryProvider, useHistory };

import React, { createContext, useContext } from "react";

const PlayletsContext = createContext();
const usePlay = () => useContext(PlayletsContext);

const PlayProvider = ({ children }) => {
  return <PlayletsContext.Provider>{children}</PlayletsContext.Provider>;
};
export { usePlay, PlayProvider };

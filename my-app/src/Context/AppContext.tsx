import React, { createContext, useState, FC } from "react";
import { AppContextValues } from "../Interfaces/Context";

const contextDefaults = {
    likeCount:0
}
export const AppContext = createContext<AppContextValues>(contextDefaults);

const AppProvider: React.FunctionComponent  = ({ children }) => {
  const [likeCount, setLikeCount] = useState<number>(contextDefaults.likeCount);


  return (
    <AppContext.Provider
      value={{
      likeCount
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;

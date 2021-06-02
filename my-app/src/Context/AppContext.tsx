import React, { createContext, useState } from "react";
import { AppContextValues } from "../Interfaces/Context";

const contextDefaults = {
  likeCount: 0,
  changeLikeCount: () => {},
};

export const AppContext = createContext<AppContextValues>(contextDefaults);

const AppProvider: React.FunctionComponent = ({ children }) => {
  const [likeCount, setLikeCount] = useState<number>(contextDefaults.likeCount);
  
  //function to increment or decrement like count
  const changeLikeCount = (newCount: number) => setLikeCount(newCount);

  return (
    <AppContext.Provider
      value={{
        likeCount,
        changeLikeCount,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;

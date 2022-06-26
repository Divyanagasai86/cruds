import { createContext, useContext, useState } from "react";


const userContext = createContext();

export const UserContextProvider = ({ children }) => {
    const [isUpdate, setIsUpdate] = useState(false);

    return (
        <userContext.Provider
          value={{
            isUpdate,
            setIsUpdate
          }}
        >
          {children}
        </userContext.Provider>
      );
}

export const User = () => {
    return useContext(userContext);
  };
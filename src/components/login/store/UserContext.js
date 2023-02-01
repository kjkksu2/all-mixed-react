import React from "react";

const UserContext = React.createContext({
  name: "",
  email: "",
  gender: "",
});

export const UserContextProvider = (props) => {
  const value = {
    name: "markus",
    email: "123@naver.com",
    gender: "male",
  };

  return (
    <UserContext.Provider value={value}>{props.children}</UserContext.Provider>
  );
};

export default UserContext;

import React, { useContext } from "react";

import Form from "./Form";
import Profile from "./Profile";
import AuthContext from "./store/AuthContext";
import { UserContextProvider } from "./store/UserContext";

const Contents = () => {
  const ctx = useContext(AuthContext);

  return (
    <>
      {!ctx.isLoggedIn && <Form />}
      {ctx.isLoggedIn && (
        <UserContextProvider>
          <Profile />
        </UserContextProvider>
      )}
    </>
  );
};

export default Contents;

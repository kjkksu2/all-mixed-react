import React from "react";

import Contents from "../components/login/Contents";
import { AuthContextProvider } from "../components/login/store/AuthContext";

const Login = () => {
  return (
    <AuthContextProvider>
      <Contents />
    </AuthContextProvider>
  );
};

export default Login;

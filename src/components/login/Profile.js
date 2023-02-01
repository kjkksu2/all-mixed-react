import React, { useContext } from "react";

import Button from "../ui/Button";
import Card from "../ui/Card";
import AuthContext from "./store/AuthContext";
import UserContext from "./store/UserContext";
import classes from "./Profile.module.css";

const Profile = () => {
  const userCtx = useContext(UserContext);
  const authCtx = useContext(AuthContext);

  return (
    <div className={classes.container}>
      <h1>프로필</h1>
      <Card className={classes.info}>
        <div>
          <label>이름</label>
          <p>{userCtx.name}</p>
        </div>
        <div>
          <label>이메일</label>
          <p>{userCtx.email}</p>
        </div>
        <div>
          <label>성별</label>
          <p>{userCtx.gender}</p>
        </div>
      </Card>
      <Button onClick={authCtx.logout}>로그아웃</Button>
    </div>
  );
};

export default Profile;

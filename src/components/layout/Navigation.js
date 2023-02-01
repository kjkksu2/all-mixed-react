import React from "react";
import { Link } from "react-router-dom";

import classes from "./Navigation.module.css";

const Navigation = () => {
  return (
    <header className={classes.header}>
      <h1 className={classes.logo}>
        <Link to="/">React</Link>
      </h1>
      <nav className={classes.nav}>
        <ul>
          <li>
            <Link to="/audition">오디션</Link>
          </li>
          <li>
            <Link to="/login">로그인</Link>
          </li>
          <li>
            <Link to="/movies">영화리스트</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;

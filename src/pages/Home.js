import React from "react";

import Contents from "../components/home/Contents";

const lists = [
  {
    title: "오디션",
    description: "정규표현식, custom hook 사용해보기",
  },
  {
    title: "로그인",
    description: "context api, forwardRef, createPortal 사용해보기",
  },
  {
    title: "영화리스트",
    description: "react-router-dom, redux, redux/toolkit 사용해보기",
  },
  {
    title: "미정",
    description: "api 인증 토큰, 지연 로딩 사용해보기",
  },
];

const Home = () => {
  return <Contents lists={lists} />;
};

export default Home;

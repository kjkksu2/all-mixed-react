import React from "react";
import Contents from "../components/home/Contents";

const lists = [
  {
    title: "오디션",
    description: "정규표현식을 이용해서 오디션 정보 추출해보기",
  },
  {
    title: "영화리스트",
    description: "react-router-dom 사용해보기",
  },
  {
    title: "로그인",
    description: "redux 대신 useReducer, context api 사용해보기",
  },
];

const Home = () => {
  return <Contents lists={lists} />;
};

export default Home;

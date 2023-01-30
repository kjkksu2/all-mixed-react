import React from "react";

import Contents from "../components/audition/Contents";

const lists = [
  { category: "모집분야", content: "본문참조" },
  { category: "모집기간", content: "본문참조" },
  { category: "모집연령", content: "본문참조" },
  { category: "모집성별", content: "본문참조" },
  { category: "지원방법", content: "본문참조" },
];

const Audition = () => {
  return <Contents lists={lists} />;
};

export default Audition;

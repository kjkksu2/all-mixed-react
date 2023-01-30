const lookaround한글Start = "(?<=[^가-힣])";
const lookaround한글end = "(?=[^가-힣])";

const maleRegex = `${lookaround한글Start}(남성|남자|남)${lookaround한글end}`;
const femaleRegex = `${lookaround한글Start}(여성|여자|여)${lookaround한글end}`;

const regex = `(${maleRegex}|${femaleRegex}|남녀|누구나|무관)`;

export default regex;

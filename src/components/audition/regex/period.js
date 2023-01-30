const year = "\\d{4}";
const numberOfYearCases = "(년|\\.|-|\\/)";
const numberOfSpaceCases = "( |)";
const yearRegex = `(${year}${numberOfYearCases}${numberOfSpaceCases})?`;

const month = "([1-9]|0[1-9]|1[012])";
const numberOfMonthCases = "(월|\\.|-|\\/)";
const monthRegex = `${month}${numberOfMonthCases}${numberOfSpaceCases}`;

const date = "([12][0-9]|3[01]|[1-9]|0[1-9])";
const numberOfDateCases = "(일까지|일|\\.)?";
const dateRegex = `${date}${numberOfDateCases}${numberOfSpaceCases}`;

const dayOfWeekRegex = "(\\((월|화|수|목|금|토|일)(요일)?\\))?";

const rangeRegex = `(부터${numberOfSpaceCases}|${numberOfSpaceCases}(~|-)${numberOfSpaceCases})`;

const regex = `(${yearRegex}${monthRegex}${dateRegex}${dayOfWeekRegex}${rangeRegex}${yearRegex}${monthRegex}${dateRegex}${dayOfWeekRegex})`;

export default regex;

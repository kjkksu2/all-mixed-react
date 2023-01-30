const numberOfSpaceCases = "( |)";
const exceptPhoneAreaCodeRegex = `(?<!(\\d{2,3})(-|\\)${numberOfSpaceCases}))`;

const year = "\\d{4}";
const numberOfYearCases = "(년생|년)?";
const yearRegex = `${year}${numberOfYearCases}`;

const rangeRegex = `${numberOfSpaceCases}(~|-)${numberOfSpaceCases}`;

const 최소Age = `(최소${numberOfSpaceCases}나이${numberOfSpaceCases})?`;
const 만Age = `(만${numberOfSpaceCases})?\\d+세(${numberOfSpaceCases}이하|${numberOfSpaceCases}이상)?`;
const 최소or만AgeRegex = `${최소Age}${만Age}`;

const yearAgeRegex = `(\\d{4}|\\d{2})년생?부터 (\\d{4}|\\d{2})년생?까지`;

const 대AgeRegex = `\\d{2}대`;

const 대or세RangeAgeRegex = `\\d{2}${numberOfSpaceCases}(~|-)${numberOfSpaceCases}\\d{2}(대|세)`;

const regex = `(${exceptPhoneAreaCodeRegex}${yearRegex}${rangeRegex}${yearRegex}|${최소or만AgeRegex}|${yearAgeRegex}|${대AgeRegex}|${대or세RangeAgeRegex})`;

export default regex;

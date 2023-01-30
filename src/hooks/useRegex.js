import { useCallback, useEffect, useState } from "react";

import fieldRegex from "../components/audition/regex/field";
import periodRegex from "../components/audition/regex/period";
import ageRegex from "../components/audition/regex/age";
import genderRegex from "../components/audition/regex/gender";
import applyRegex from "../components/audition/regex/apply";

const useRegex = (text) => {
  const [lists, setlists] = useState([]);

  const resultFromRegex = useCallback(
    (regex, category) => {
      const regexString = new RegExp(regex, "gi");
      const result = [...new Set(text.match(regexString))];

      if (result.length > 0) {
        return { category, content: result.join(", ") };
      } else {
        return { category, content: "본문참조" };
      }
    },
    [text]
  );

  useEffect(() => {
    if (text.length > 0) {
      const field = resultFromRegex(fieldRegex, "모집분야");
      const period = resultFromRegex(periodRegex, "모집기간");
      const age = resultFromRegex(ageRegex, "모집연령");
      const gender = resultFromRegex(genderRegex, "모집성별");
      const apply = resultFromRegex(applyRegex, "지원방법");

      setlists([field, period, age, gender, apply]);
    }
  }, [resultFromRegex, text]);

  return lists;
};

export default useRegex;

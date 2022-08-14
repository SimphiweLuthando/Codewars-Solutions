function removeExclamationMarks(s) {
    let stringArr = s.split("");
    let cleanArr = stringArr.filter(a => a != "!").join("")
    let answer = cleanArr;
    return answer;
  }
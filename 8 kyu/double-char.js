function doubleChar(str) {
    // Your code here
    let strCopy = str.split("")
    for (let i = 0; i < strCopy.length; i++){
     strCopy[i] += strCopy[i];
    }
    return strCopy.join("")
  }
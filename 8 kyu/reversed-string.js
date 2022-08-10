function solution(str){
    let splitString = str.split("");
    
    let reverseString = splitString.reverse();
    
    let reversedWord = reverseString.join("");
    
    return reversedWord;
  }
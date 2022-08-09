function XO(str) {
    //code here
  let count1 = 0;
  let count2 = 0;

  
  for(let i = 0; i < str.length; i++){
    if(str.charAt(i) === "x" || str.charAt(i) === "X" ){
      count1 += 1;
    }
    else if(str.charAt(i) === "o" || str.charAt(i) === "O" ){
      count2 += 1;
    }
  }
  
 return count1 === count2 ?  true :  false;
}
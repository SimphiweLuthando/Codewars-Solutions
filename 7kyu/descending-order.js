function descendingOrder(n){
    //...
    let digits = String(n);
    let newNum = digits.split('').map((a) => Number(a)).sort((a,b)=> a > b ? 1 : -1).join("");
    return Number(newNum.split("").reverse().join(""));
  }
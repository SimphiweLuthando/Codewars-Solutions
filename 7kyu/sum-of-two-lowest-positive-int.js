function sumTwoSmallestNumbers(numbers) {  
    //Code here
      let  res = numbers.sort((a,b) => a - b).slice(0, 2);
      let sum = 0;
        for(let i = 0; i < res.length; i++){
          sum += res[i];
        }
     
      return sum;
  }
  
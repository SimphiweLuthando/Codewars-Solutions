function squareSum(numbers){
    let calculate = 0;
    
    for(let i = 0; i < numbers.length; i++){
      calculate += Math.pow(numbers[i],2);
    }
    
    return calculate;
  }
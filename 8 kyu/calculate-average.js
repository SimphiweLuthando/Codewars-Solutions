function find_average(array) {
    // your code here
  
    let sum = 0;
    
    array.forEach((a) =>  sum += a);
    
    let average = sum / array.length;
    
    return array.length === 0 ? 0 : average;
    
  }
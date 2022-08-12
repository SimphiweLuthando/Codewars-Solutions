function nbYear(p0, percent, aug, p) {
    // your code
  
    //yearCount
    let yearCount = 0;
    
    //populationCount
    let populationCount = p0;

    let rawPercent = percent;
  
  let decimalPercent = rawPercent / 100;
  
    //loop
    while(populationCount < p){
      
     populationCount += Math.floor((populationCount * decimalPercent) + aug);
      yearCount++ ;
    }
    
  //return year
   return yearCount;
}
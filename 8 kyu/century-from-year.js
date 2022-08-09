function century(year) {
    // Finish this :)
  
      let time = 0;
  
      if(year % 100 != 0){
          time = Math.ceil(year / 100);
      }
      else{
          time = year / 100;
      }
      
      
    return time;
  }
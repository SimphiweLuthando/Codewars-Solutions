function opposite(number) {
    //your code here
    if(number > 0 ){
      return -Math.abs(number);
    }
    else if(number < 0){
      return Math.abs(number);
    }
    else if(number === NaN){
      return 0;
    }
    else {
      return 0;
    }
  }
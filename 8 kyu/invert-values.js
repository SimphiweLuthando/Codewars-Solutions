function invert(array) {
    let copiedArr = [];
   
 
   
   for(let i = 0; i < array.length; i++){
     if(array[i] >= 0 ){
     copiedArr.push(-Math.abs(array[i])) ;
    }
    else {
      copiedArr.push(Math.abs(array[i])) ;
    }
     
   }
   
    return copiedArr;
 
   }
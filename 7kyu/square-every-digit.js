function squareDigits(num){
  
    let numbers = String(num).split("").map((num)=>{
     return Number(num)
   })
    
    let square = numbers.map((num) => num * num);
       
     
     return Number(square.join('')) ;
     
     }
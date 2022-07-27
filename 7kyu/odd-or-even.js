function oddOrEven(array) {
    //enter code here
   const sum = array.reduce((sum, currentValue) => sum + currentValue, 0);
   return sum % 2 === 0 ? "even" : "odd";
 }
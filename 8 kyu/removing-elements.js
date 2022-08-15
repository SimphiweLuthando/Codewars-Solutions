function removeEveryOther(arr){
    //your code here
    
    let arrCopy = arr;
    let newArr = []
    
    for(let i = 1; i < arrCopy.length; i += 1){
      arrCopy.splice(i,1);
    }
    
    return arrCopy;
      
  }
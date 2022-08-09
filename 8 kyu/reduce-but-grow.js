function grow(x){
    let total = 1;
    
    for(let i = 0; i < x.length; i++){
      total *= x[i];
    }
    
    return total;
  }
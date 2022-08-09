function longest(s1, s2) {
    // your code
     let uniq = "";
    
     
    for(let i = 0; i < s1.length; i++){
      // Checking if the uniq contains the character
      if(uniq.includes(s1[i]) === false ){
        // If the character not present in uniq
        // Concatenate the character with uniq
        uniq += s1[i];
      }
      
    }
    
     for(let i = 0; i < s2.length; i++){
         if(uniq.includes(s2[i]) === false){
            uniq += s2[i];
    }
     }
    
    let alpha = uniq.split('');
    alpha.sort((a, b) => a > b ? 1 : -1);
    uniq = alpha.join('')
   
    return uniq
  }
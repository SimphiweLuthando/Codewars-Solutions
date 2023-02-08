function addLength(str) {
    //start-here
      
      const newArray = [];
    
      const workingArray = str.split(' ');
      workingArray.forEach((item)=>{
        newArray.push(`${item} ${item.length}`);
      })
    
      return newArray;
      
    }
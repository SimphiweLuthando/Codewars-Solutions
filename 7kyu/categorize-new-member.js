function openOrSenior(data){
    // ...
    let lookup = data.map((a,i) => {
      if (a[0] >= 55 && a[1] > 7){
        return "Senior";
      }
      else{
        return "Open";
      }
    })
  
      return lookup;
  }
function points(games) {
    // your code here
    let totalPoints = 0;
    
    games.forEach((a,i) => {
      if(parseInt(a[0]) > parseInt(a[2])){
        totalPoints += 3;
      }
      else if(parseInt(a[0]) < parseInt(a[2])){
        totalPoints += 0;
      }
      else if(parseInt(a[0]) == parseInt(a[2])){
        totalPoints += 1;
      }
    })
    
    return totalPoints;
  }
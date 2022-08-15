function countBy(x, n) {
    let z = [];
    z.push(x)
    for(let i = 1; i < n; i++){
      z.push(z[z.length - 1] + x)
    }
    return z;
  }
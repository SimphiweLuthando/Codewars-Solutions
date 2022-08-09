function digitize(n) {
    //code here
    let digits =  (n + '').split('').map((i) => { return Number(i); });
    return digits.reverse();
  }
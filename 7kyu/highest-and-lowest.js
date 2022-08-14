function highAndLow(numbers){
    // ...
    let cleanArray = numbers.split(" ");
    return `${Number(Math.max(...cleanArray))} ${Number(Math.min(...cleanArray))}`
  }
snail = function(array) {
    // enjoy
     const result = [];
    while (array.length) {
      // Traverse the top row from left to right
      result.push(...array.shift());
      // Traverse the right column from top to bottom
      for (let i = 0; i < array.length; i++) {
        result.push(array[i].pop());
      }
      // Traverse the bottom row from right to left
      result.push(...(array.pop() || []).reverse());
      // Traverse the left column from bottom to top
      for (let i = array.length - 1; i >= 0; i--) {
        if (array[i].length) {
          result.push(array[i].shift());
        }
      }
    }
    return result;
  }
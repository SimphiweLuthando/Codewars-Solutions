function chooseBestSum(t, k, ls) {
    // Generate all combinations of k distances from the list ls
    const combinations = generateCombinations(k, ls);
    
    // Find the combination with the maximum sum that is less than or equal to t
    let maxSum = -1;
    for (const combination of combinations) {
      const sum = combination.reduce((acc, curr) => acc + curr, 0);
      if (sum <= t && sum > maxSum) {
        maxSum = sum;
      }
    }
    
    // Return the maximum sum or null if no combination is found
    return maxSum !== -1 ? maxSum : null;
  }
  
  function generateCombinations(k, arr) {
    if (k === 0) {
      return [[]];
    }
  
    if (arr.length === 0) {
      return [];
    }
  
    const combinations = [];
    const first = arr[0];
    const rest = arr.slice(1);
    const withoutFirst = generateCombinations(k, rest);
    const withFirst = generateCombinations(k - 1, rest).map(combination => [first, ...combination]);
    return [...withoutFirst, ...withFirst];
  }
  
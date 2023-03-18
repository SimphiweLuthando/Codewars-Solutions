function getPINs(observed) {
    const adjacentDigits = {
      "0": ["0", "8"],
      "1": ["1", "2", "4"],
      "2": ["1", "2", "3", "5"],
      "3": ["2", "3", "6"],
      "4": ["1", "4", "5", "7"],
      "5": ["2", "4", "5", "6", "8"],
      "6": ["3", "5", "6", "9"],
      "7": ["4", "7", "8"],
      "8": ["0", "5", "7", "8", "9"],
      "9": ["6", "8", "9"]
    };
  
    const variations = [""];
    for (const digit of observed) {
      const newVariations = [];
      for (const variation of variations) {
        for (const adjacent of adjacentDigits[digit]) {
          newVariations.push(variation + adjacent);
        }
      }
      variations.length = 0;
      variations.push(...newVariations);
    }
  
    return variations;
  }
  
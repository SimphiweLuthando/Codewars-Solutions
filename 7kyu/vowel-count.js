function getCount(str) {

    const vowels = ["a", "e", "i", "o", "u"];
    
        // initialize count
      let count = 0;
  
      // loop through string to test if each character is a vowel
      for (let letter of str.toLowerCase()) {
          if (vowels.includes(letter)) {
              count++;
          }
      }
  
      // return number of vowels
      return count
    
  }
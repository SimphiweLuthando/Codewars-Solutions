function DNAtoRNA(dna) {
    // create a function which returns an RNA sequence from the given DNA sequence
      let rna = dna;
    
    return  rna.replace(/T/ig, "U");
  }
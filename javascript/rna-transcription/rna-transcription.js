
let DnaTranscriber = function() {
  this.dna_nucs = 'A,C,G,T'.split(',');
  this.rna_nucs = 'U,G,C,A'.split(',');
};

DnaTranscriber.prototype.toRna = function(dnaStrand) {
  rna = '';
  [...dnaStrand].forEach(nuc => {
    compliment = this.dna_nucs.indexOf(nuc);
    if (compliment < 0) throw new Error('Invalid input');
    rna += this.rna_nucs[compliment];
  })
  return rna;
}

module.exports = DnaTranscriber;


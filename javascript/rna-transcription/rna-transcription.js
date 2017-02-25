
let DnaTranscriber = function() {
  this.dnaNucs = 'A,C,G,T'.split(',');
  this.rnaNucs = 'U,G,C,A'.split(',');
};

DnaTranscriber.prototype.toRna = function(dnaStrand) {
  rna = '';
  [...dnaStrand].forEach(nuc => {
    compliment = this.dnaNucs.indexOf(nuc);
    if (compliment < 0) throw new Error('Invalid input');
    rna += this.rnaNucs[compliment];
  })
  return rna;
}

module.exports = DnaTranscriber;


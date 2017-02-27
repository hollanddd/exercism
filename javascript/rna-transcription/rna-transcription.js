
let DnaTranscriber = function() {};

DnaTranscriber.prototype.toRna = function(dnaStrand) {
  const dnaNucs = 'ACGT'.split('');
  const rnaNucs = 'UGCA'.split('');

  rna = '';
  [...dnaStrand].forEach(nuc => {
    compliment = dnaNucs.indexOf(nuc);
    if (compliment < 0) throw new Error('Invalid input');
    rna += rnaNucs[compliment];
  })
  return rna;
}

module.exports = DnaTranscriber;


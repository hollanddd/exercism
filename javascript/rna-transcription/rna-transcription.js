
class DnaTranscriber {
  toRna(dnaStrand) {
    const dnaNucs = 'ACGT'.split('');
    const rnaNucs = 'UGCA'.split('');
    let rna = '';
    [...dnaStrand].forEach(nuc => {
      let compliment = dnaNucs.indexOf(nuc);
      if (compliment < 0) throw new Error('Invalid input');
      rna += rnaNucs[compliment];
    })
    return rna;
  }
}

module.exports = DnaTranscriber;


class DnaTranscriber {
  toRna(dnaStrand) {
    const dnaNucs = 'ACGT'.split('');
    const rnaNucs = 'UGCA'.split('');
    let rna = '';
    [...dnaStrand].forEach(nuc => {
      let complement = dnaNucs.indexOf(nuc);
      if (complement < 0) throw new Error('Invalid input');
      rna += rnaNucs[complement];
    })
    return rna;
  }
}

module.exports = DnaTranscriber;

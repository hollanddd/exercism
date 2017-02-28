class Hamming {
  compute(one, other){
    if (one.length !== other.length) throw new Error('DNA strands must be of equal length.');
    let diff = 0;
    for (var i = 0; i < one.length; i++) {
      if (one[i] !== other[i]) diff += 1;
    }
    return diff;
  };
}

module.exports = Hamming;

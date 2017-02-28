let Isogram = function(phrase) {
  this.phrase = phrase.toLowerCase();
};

Isogram.prototype.isIsogram = function() {
  instances = [];
  let result = true;
  [...this.phrase].forEach(c => {
    if (['-', ' '].indexOf(c) > -1) return
    if (instances.indexOf(c) !== -1) {
      result = false
    }
    instances.push(c)
  })
  return result
}

module.exports = Isogram;

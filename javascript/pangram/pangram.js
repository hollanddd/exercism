
let Pangram = function(phrase) {
  this.alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
  this.input = phrase
  this.phrase = phrase
    .toLowerCase()
    .replace(/[\"\s!?,\t\n\t]/g, '')
}

Pangram.prototype.isPangram = function() {
  if (this.phrase.length < 1) return false;
  for (let c of this.phrase) {
    let index = this.alphabet.indexOf(c)
    if (index > -1) this.alphabet.splice(index, 1)
  }
  return this.alphabet.length == 0
}

module.exports = Pangram


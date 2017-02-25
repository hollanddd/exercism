
let Pangram = function(phrase) {
  this.phrase = phrase
    .toLowerCase()
    .replace(/[\"\s!?,\t\n\t]/g, '')
}

Pangram.prototype.isPangram = function() {
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')

  if (this.phrase.length < 1) return false;
  for (let c of this.phrase) {
    let index = alphabet.indexOf(c)
    if (index > -1) alphabet.splice(index, 1)
  }
  return alphabet.length == 0
}

module.exports = Pangram


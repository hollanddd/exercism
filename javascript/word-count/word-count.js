trimQuotes = function(phrase) {
  if (phrase.substring(0, 1) === '\'')
      phrase = phrase.slice(1)

    if (phrase.substring(phrase.length - 1) === '\'')
      phrase = phrase.substring(0, phrase.length -1)

    return phrase
}
class Words {
  count(phrase) {
    let result = {};
    let parts = phrase
      .toLowerCase()
      .replace(/[,:!¡¿?&@$%^&\n\t\.]/g,' ')
      .split(' ')
      .filter(part => { return part.length > 0 })
      .map(trimQuotes);

    [...parts].forEach(word => {
      Object.keys(result).indexOf(word) >= 0 ? result[word] += 1 : result[word] = 1
    })
    return result
  }
}

module.exports = Words;


class Bob {
  hey(phrase) {
    let hasChars = function(phrase) {
      // helper to see if phrase contains characters
      let isInt = function(ch) {
        // helper for checking if character is an integer
        // pilfered from http://stackoverflow.com/questions/14636536/how-to-check-if-a-variable-is-an-integer-in-javascript
        return !isNaN(ch) && parseInt(Number(ch)) == ch && !isNaN(parseInt(ch, 10));
      }
      let hasChars = false;
      [...phrase].forEach(ch => {
        if (['!', '?', '.', ',', ' '].indexOf(ch) >= 0) { return }
        if (!isInt(ch)) { hasChars = true };
      })
      return hasChars; 
    }

    if (phrase.trim().length < 1) { return 'Fine. Be that way!' };

    if (phrase.substr(phrase.length - 1) == '?') {
      if (phrase === phrase.toUpperCase() && hasChars(phrase)) { return 'Whoa, chill out!'; }
      return 'Sure.';
    }

    if (phrase === phrase.toUpperCase()) {
      if (hasChars(phrase)) { return 'Whoa, chill out!'; }
    }

    return 'Whatever.';
  }
}

module.exports = Bob;

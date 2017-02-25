
let BeerSong = function() {}

BeerSong.prototype.verse = function(bottles) {
  let pop = function(bottles) {
    if (bottles === 0) return 'No more bottles'
    if (bottles === 1) return '1 bottle'
    if (bottles > 1) return `${bottles.toString()} bottles`
  }

  if (bottles === 1) return '1 bottle of beer on the wall, 1 bottle of beer.\nTake it down and pass it around, no more bottles of beer on the wall.\n';
  if (bottles === 0) return 'No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.\n';
  
  let start = `${pop(bottles)} of beer on the wall`
  let middle = `, ${pop(bottles)} of beer.\nTake one down and pass it around, `
  let end = `${pop(bottles - 1)} of beer on the wall.\n`
  return `${start}${middle}${end}`
}

BeerSong.prototype.sing = function(from, to) {
  let result = ''
  if (to === undefined) to = 0
  while (from >= to) {
    result += this.verse(from)
    if (from !== to) { result += '\n' }
    from--
  }
  return result
}

module.exports = BeerSong

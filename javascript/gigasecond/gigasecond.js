
let Gigasecond = function(date) {
  this.input = date;
  this.gs = Math.pow(10, 9)
}

Gigasecond.prototype.date = function() {
  let result = new Date(this.input); // dont munge original date
  result.setTime(result.getTime() + this.gs*1000);
  return result
}

module.exports = Gigasecond;


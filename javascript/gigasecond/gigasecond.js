class Gigasecond {
  constructor(date) {
    this.input = date;
  }

  get gs() {
    return Math.pow(10, 9);
  }

  date() {
    let result = new Date(this.input); // dont munge original date
    result.setTime(result.getTime() + this.gs*1000);
    return result  
  }
}

module.exports = Gigasecond;

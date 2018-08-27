const fixTwoDigits = number => {
  return parseInt(number) < 10 ? `0${number}` : number.toString();
}

module.exports = {
  fixTwoDigits,
};